#!/bin/bash

# remove unused css variables from build in root package
node bin/purgecss.js

# remove unused css variables from build in all subpackages
lerna exec --parallel \
    --ignore @hey-ui/vars \
    --ignore @hey-ui/themes \
    -- node ../../bin/purgecss.js
