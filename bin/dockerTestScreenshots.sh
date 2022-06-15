#!/bin/bash
# exit if one of the commands fails
set -e

export STORYBOOK_URL="http://host.docker.internal:9009/iframe.html"

cd app

npx playwright install chromium

if [ -z "$SCREENSHOTS_UPDATE" ]; then
    npm run test:screenshots
else
    npm run test:screenshots -- -u
fi
