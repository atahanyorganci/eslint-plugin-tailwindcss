{
  description = "Nix flake port of Homebrew casks";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { nixpkgs, ... }:
    let
      systems = nixpkgs.lib.platforms.all;
      eachSystem = f: nixpkgs.lib.genAttrs systems (system:
        let
          pkgs = import nixpkgs {
            inherit system;
            config = {
              allowUnfree = true;
            };
          };
        in
        f pkgs
      );
      darwin = nixpkgs.lib.platforms.darwin;
      eachDarwinSystem = f: nixpkgs.lib.genAttrs darwin (system: f nixpkgs.legacyPackages.${system});
    in
    {
      formatter = eachSystem (pkgs: pkgs.nixpkgs-fmt);
      devShells = eachSystem (pkgs:
        let
          packageJson = builtins.fromJSON (builtins.readFile ./package.json);
          packageManager = builtins.elemAt (builtins.split "\\+" packageJson.packageManager) 0;
          pnpm-shim = pkgs.writeShellScriptBin "pnpm" ''
            exec ${pkgs.nodejs-slim}/bin/node ${pkgs.nodejs-slim}/bin/corepack pnpm "$@"
          '';
        in
        {
          default = pkgs.mkShell {
            shellHook = ''
              corepack install -g ${packageManager}
            '';
            buildInputs = with pkgs; [
              pnpm-shim
              nodejs-slim
            ];
          };
        });
    };
}
