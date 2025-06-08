name    := `jq -r '.name' package.json`
version := `jq -r '.version' package.json`

ci:
    pnpm turbo run ci

[private]
is-clean:
    #!/usr/bin/env bash

    if [[ -n $(git status --porcelain) ]]; then
        echo "Repository is dirty, commit or stash changes and try again."
        exit 1
    fi

[confirm("Are you sure you want to publish new version of the package?")]
@publish NEW_VERSION: is-clean ci
    echo "Updating {{ name }} from v{{ version }} to v{{ NEW_VERSION }}"
    sed -i 's/"version": "{{ version }}"/"version": "{{ NEW_VERSION }}"/g' package.json
    sed -i 's/version: "{{ version }}"/version: "{{ NEW_VERSION }}"/g' src/index.ts
    git add package.json src/index.ts
    git commit -m "{{ NEW_VERSION }}"
    git tag 'v{{ NEW_VERSION }}' -m "{{ NEW_VERSION }}"
