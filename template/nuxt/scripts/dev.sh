# copy dev config to the latest.js (which is used in nuxt.config.js)
cp ./config/dev.js ./config/latest.js 

# node env
export NODE_ENV=development 

# run the nuxt project on the following host
export HOST=0.0.0.0 

nuxt
