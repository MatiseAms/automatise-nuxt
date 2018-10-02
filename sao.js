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

const convertToNumbers = (insert) => {
  let output = [];
  let table = [
    [' '],
    [''],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ];
  for (let i = 0; i < insert.length; i++) {
    let char = insert.charAt(i).toLowerCase();

    for (let l = 0; l < table.length; l++) {
      if (table[l].includes(char)) {
        output.push(l);
      }
    }
    if (!isNaN(char)) {
      output.push(char);
    }
  }
  return output.join('').substr(0, 4);
};
const rootPort = convertToNumbers(__dirname);

module.exports = {
  prompts: {
    name: {
      message: 'Project name',
      default: ':folderName:'
    },
    description: {
      message: 'Project description',
      default: `My ${superb()} Matise Nuxt.js project`
    },
    port: {
      message: 'Choose Port',
      default: `${convertToNumbers(rootPort)}`
    },
    mode: {
      message: 'Choose rendering mode',
      type: 'list',
      choices: [
        { name: 'Universal (Client + SSR)', value: 'universal' },
        { name: 'Single Page App (Client Only)', value: 'spa' }
      ],
      default: 'universal'
    },
    author: {
      message: 'Author name',
      type: 'string',
      default: ':gitUser:',
      store: true
    },
    pm: {
      message: 'Choose a package manager',
      choices: ['npm', 'yarn'],
      type: 'list',
      default: 'npm'
    }
  },
  move(answers) {
    const moveable = {
      gitignore: '.gitignore',
      '_eslintrc.js': '.eslintrc.js',
      '_package.json': 'package.json'
    };
    let nuxtDir;
    return Object.assign(moveable, move('nuxt', nuxtDir));
  },
  post(
    { npmInstall, yarnInstall, gitInit, chalk, isNewFolder, folderName },
    { meta }
  ) {
    gitInit();

    if (meta.answers.pm === 'yarn') yarnInstall();
    else npmInstall();

    const cd = () => {
      if (isNewFolder) {
        console.log(`    ${chalk.cyan('cd')} ${folderName}`);
      }
    };

    console.log();
    console.log(chalk.bold(`  To get started:\n`));
    cd();
    console.log(`    ${meta.answers.pm} run dev\n`);
    console.log(chalk.bold(`  To build & start for production:\n`));
    cd();
    console.log(`    ${meta.answers.pm} run build`);
    console.log(`    ${meta.answers.pm} start`);
    console.log();
  }
};
