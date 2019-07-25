# copy staging config to the latest.js (which is used in nuxt.config.js)
cp ./config/staging.js ./config/latest.js

cp ./config/netlify_headers ./static/_headers

# node env
export NODE_ENV=production 

nuxt generate
