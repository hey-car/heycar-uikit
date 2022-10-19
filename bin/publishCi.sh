#!/bin/bash

set -e

echo 'Start publish CI'

# Release the root package with semantic-release
semantic_output=$(npx semantic-release)

echo 'Check semantic-release'

# Output log semantics
echo $semantic_output

echo 'Show semantic-release'

# Check that semantic-release has released the root package (I don't know how else to do it yet)
if [[ $semantic_output =~ "Publishing version" ]]
then
    git remote set-url origin https://semantic-release-bot:$GITHUB_TOKEN@github.com/hey-car/heycar-uikit.git
    git checkout main
    git pull origin main --rebase
    git fetch --tags

    echo 'after publishing version'

    if [ -z $(lerna changed) ]
    then
        echo "There are no relevant changes, so no new versions are released."
    else
        echo 'publishing sub packages'
        lerna version --conventional-commits --no-commit-hooks --yes --force-git-tag
        git push origin main
        lerna publish from-git --yes --no-verify-access
    fi
else
    exit 0
fi
