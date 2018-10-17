# copy staging config to the latest.js (which is used in nuxt.config.js)
cp ./config/staging.js ./config/latest.js

# node env
export NODE_ENV=production 

nuxt build

rm -rf dist
mkdir dist
cp -r .nuxt dist/.nuxt
cp -r static dist/static
cp package.json dist/package.json

echo 'all that is left is running "npm i --production" in the dist folder'
echo 'than running "./node_modules/.bin/nuxt start"'
