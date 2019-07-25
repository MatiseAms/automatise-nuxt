# copy production config to the latest.js (which is used in nuxt.config.js)
cp ./config/production.js ./config/latest.js

# node env
export NODE_ENV=production 

nuxt generate
