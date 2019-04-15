# copy dev config to the latest.js (which is used in nuxt.config.js)
cp ./config/dev.js ./config/latest.js

# node env
export NODE_ENV=development

# check port and export port
port="3000"
while true; do
	if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
		port=$[$port+1]
		echo "$port"
	else
		export PORT=$port
		break
	fi
done

# run the nuxt project on the following host
export HOST=0.0.0.0

nuxt
