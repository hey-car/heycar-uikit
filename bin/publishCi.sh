#!/bin/bash

set -e

# Release the root package with semantic-release
semantic_output=$(npx semantic-release)

# Output log semantics
echo $semantic_output

# Check that semantic-release has released the root package (I don't know how else to do it yet)
if [[ $semantic_output =~ "Publishing version" ]]
then
    git remote set-url origin https://semantic-release-bot:$GITHUB_TOKEN@github.com/hey-car/hey-ui.git
    git checkout main
    git pull origin main --rebase
    git fetch --tags

    if [ -z $(lerna changed) ]
    then
        echo "There are no relevant changes, so no new versions are released."
    else
        lerna version --conventional-commits --no-commit-hooks --yes --force-git-tag
        git push origin main
        lerna publish from-git --yes
    fi
else
    exit 0
fi
