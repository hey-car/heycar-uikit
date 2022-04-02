#!/bin/bash
# exit if one of the commands fails
set -e

# delete builds
npm run clean

# set the limit on the number of parallel processes during the build (default - 10)
CONCURRENCY=${BUILD_CONCURRENCY:=10}

echo "start build on $CONCURRENCY parallel process"

mkdir -p dist

# collect css packages
copy_css="npx copyfiles -u 1 \"src/**/*.{css,js}\" dist"
copy_package="npx copyfiles package.json dist"
lerna exec \
    --scope @hey-ui/vars \
    --scope @hey-ui/themes \
    -- "$copy_css && $copy_package"

# compiling the themes package
lerna exec --scope @hey-ui/themes -- node $(pwd)/bin/buildThemes.js

# collect all subpackages with components
lerna exec --concurrency $CONCURRENCY \
    -- $(pwd)/bin/rollup.sh


# copy the collected css packages to the root package
copy_to_root="cp -rp dist/ ../../dist/\${PWD##*/}"
lerna exec \
    --scope @hey-ui/vars \
    --scope @hey-ui/themes \
    -- $copy_to_root

# copy package.json to root package assembly
cp package.json dist/package.json
# cp bin/send-stats.js dist/ww

# make the root package public
npx json -f dist/package.json -I -e "delete this.private" -e "delete this.workspaces"
