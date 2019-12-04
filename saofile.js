const superb = require('superb');

module.exports = {
	prompts() {
		return [
			{
				name: 'name',
				message: 'Project name',
				default: this.outFolder,
				filter: val => val.toLowerCase()
			},
			{
				name: 'description',
				message: 'Project description',
				default: `My ${superb.random()} Matise Nuxt.js project`
			},
			{
				name: 'author',
				message: 'Author name',
				default: this.gitUser.name,
				filter: val => val.toLowerCase(),
				store: true
			}
		]
	},
	actions: [
		{
			type: 'add',
			files: '**'
		},
		{
			type: 'move',
			patterns: {
				'gitignore': '.gitignore',
				'_eslintrc.js': '.eslintrc.js',
				'_package.json': 'package.json',
				'_babelrc': '.babelrc',
				'_prettierrc': '.prettierrc',
				'github': '.github'
			}
		}
	],
	async completed() {
		this.gitInit()

		await this.npmInstall({
			packages: [
				'nuxt',
				'@nuxtjs/axios',
				'@nuxtjs/google-analytics',
				'@nuxtjs/style-resources'
			]
		})
		await this.npmInstall({
			packages: [
				'nuxt-rfg-icon',
				'babel-eslint',
				'eslint',
				'eslint-config-prettier',
				'eslint-friendly-formatter',
				'eslint-loader',
				'eslint-plugin-vue',
				'eslint-plugin-prettier',
				'node-sass',
				'sass-loader',
				'stylelint',
				'stylelint-logical-order',
				'stylelint-order',
			],
			saveDev: true
		})

		this.showProjectTips()
	}
}
