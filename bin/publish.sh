#!/bin/bash

# exit if one of the commands fails
set -e

# raise the version in all subpackages
lerna version --no-push --no-commit-hooks
# build the root project
npm run build
# publish all subpackages
lerna publish from-git
# publish the root project
npm publish dist --no-git-tag-version
# update version in root package, generate CHANGELOG.MD, commit, create git-tag
npm release -- --release-as $RELEASE_TYPE
# push changes to github
git push --follow-tags
