#!/bin/bash

# exit on errors
set -e

# copy production config to the latest.js (which is used in nuxt.config.js)
cp ./config/production.js ./config/latest.js

# node env
export NODE_ENV=production

# check if the node version matches the one in the package.json
check-node-version --package

nuxt generate --quiet --fail-on-error
