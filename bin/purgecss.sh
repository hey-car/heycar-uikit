#!/bin/bash

# remove unused css variables from build in root package
node bin/purgecss.js

# remove unused css variables from build in all subpackages
lerna exec --parallel \
    --ignore @heycar-uikit/vars \
    --ignore @heycar-uikit/themes \
    -- node ../../bin/purgecss.js
