#!/bin/bash

# exit on errors
set -e

# copy local config to the latest.js (which is used in nuxt.config.js)
cp ./config/local.js ./config/latest.js

# allow local certificates (for https://[localdomain].test)
export NODE_TLS_REJECT_UNAUTHORIZED=0 

# node env
export NODE_ENV=development 

# run the nuxt project on the following host
export HOST=0.0.0.0 

# check if the node version matches the one in the package.json
check-node-version --package

nuxt
