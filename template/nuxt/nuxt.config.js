import pkg from './package'
import config from './config/latest'

module.exports = {
	mode: 'universal',
	env: {
		environment: config.env || 'production'
	},

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#000000'//,
		// failedColor: '#000000'
	},

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [],

	/*
	** Nuxt.js modules
	*/
	modules: [
		'nuxt-rfg-icon',
		'@nuxtjs/manifest',
		'@nuxtjs/pwa',
		// '@nuxtjs/google-analytics',
		'@nuxtjs/axios'
	],

	/*
	** GoogleAnalytics module configuration
	*/
	// 'google-analytics': {
	// 	id: 'UA-xxxxxxxx-xx',
	// 	disabled: false
	// },

	/*
	** Axios module configuration
	*/
	axios: {
		retry: {
			retries: 3
		},
		baseURL: config.api
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** Run StyleLint on save
		*/
		plugins: [],
		/*
		** PostCSS autoprefixer
		*/
		postcss: {
			plugins: {
				'postcss-preset-env': {
					browsers: ['last 2 versions', 'ie >= 9'],
					features: {
						customProperties: false
					}
				}
			}
		},
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Define toolset shortcut
			config.resolve.alias['~tools'] = 'assets/scss/tools.scss';
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	},

	/*
	** Global CSS
	*/
	css: [
		{
			src: '~assets/scss/app.scss',
			lang: 'scss'
		}
	]
};
