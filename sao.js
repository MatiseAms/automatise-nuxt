const superb = require('superb');
const glob = require('glob');
const join = require('path').join;

const rootDir = __dirname;

const move = (from, to = '') => {
	const result = {};
	const options = { cwd: join(rootDir, 'template'), nodir: true, dot: true };
	for (const file of glob.sync(`${from}/**`, options)) {
		result[file] = (to ? to + '/' : '') + file.replace(`${from}/`, '');
	}
	return result;
};

module.exports = {
	prompts: {
		name: {
			message: 'Project name',
			default: ':folderName:'
		},
		description: {
			message: 'Project description',
			default: `My ${superb.random()} Matise Nuxt.js project`
		},
		author: {
			message: 'Author name',
			type: 'string',
			default: ':gitUser:',
			store: true
		}
	},
	move(answers) {
		const moveable = {
			'gitignore': '.gitignore',
			'_eslintrc.js': '.eslintrc.js',
			'_package.json': 'package.json'
		};
		let nuxtDir;
		return Object.assign(moveable, move('nuxt', nuxtDir));
	},
	post(
		{ npmInstall, gitInit, chalk, isNewFolder, folderName }
	) {
		gitInit();

		npmInstall();

		const cd = () => {
			if (isNewFolder) {
				console.log(`    ${chalk.cyan('cd')} ${folderName}`);
			}
		};

		console.log();
		console.log(chalk.bold(`  To get started:\n`));
		cd();
		console.log(`    npm run dev\n`);
		console.log(chalk.bold(`  To build & start for production:\n`));
		cd();
		console.log(`    npm run staging`);
		console.log(`    cd dist`);
		console.log(`    npm i --production`);
		console.log(`    ./node_modules/.bin/nuxt start`);
		console.log();
	}
};
