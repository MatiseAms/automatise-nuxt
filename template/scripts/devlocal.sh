# copy local config to the latest.js (which is used in nuxt.config.js)
cp ./config/local.js ./config/latest.js

# allow local certificates (for https://wereldvrede.test)
export NODE_TLS_REJECT_UNAUTHORIZED=0 

# node env
export NODE_ENV=development 

# run the nuxt project on the following host
export HOST=0.0.0.0 

nuxt
