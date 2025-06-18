{
  description = "Nix Flake for `@yorganci/eslint-plugin-tailwindcss`";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };
  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }:
        let
          packageJson = builtins.fromJSON (builtins.readFile ./package.json);
          packageManager = builtins.elemAt (builtins.split "\\+" packageJson.packageManager) 0;
          pnpm-shim = pkgs.writeShellScriptBin "pnpm" ''
            exec ${pkgs.nodejs-slim}/bin/node ${pkgs.nodejs-slim}/bin/corepack pnpm "$@"
          '';
        in
        {
          devShells.default = pkgs.mkShell {
            shellHook = ''
              corepack install -g ${packageManager}
            '';
            buildInputs = with pkgs; [
              nodejs-slim
              pnpm-shim
              just
              nixpkgs-fmt
            ];
          };
        };
    };
}
