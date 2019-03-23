#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

const package = require(path.join(__dirname, 'package.json'));
const appDirectory = path.join(__dirname, 'app');
const appPackage = require(path.join(appDirectory, 'package.json'));

const usage = `
${package.description}
    
\tnpx ${package.name} <directory>
    
Visit ${package.homepage} for more information.
`;

console.log(`
${package.name}
Version: ${package.version}
`);

const [, , ...args] = process.argv;

if (args.length !== 1) {
  console.error(`Error: A directory was expected but none was provided.`);
  console.log(usage);
  return;
}

const input = args[0];
const directory = path.resolve(input);
const {dir, ext, name} = path.parse(directory);

if (dir.length > 0 && !fs.existsSync(dir)) {
  console.error(`Error: Directory '${dir}' does not exist.`);
  console.log(usage);
  return;
}

if (ext.length > 0) {
  console.error(`Error: Directory should not have the extension '${ext}'.`);
  console.log(usage);
  return;
}

if (fs.existsSync(directory)) {
  console.error(`Error: Directory '${directory}' already exists.`);
  console.log(usage);
  return;
}

console.log(`Creating directory '${name}' in '${dir}'...`);
fs.mkdirSync(directory);

console.log(`Creating package.json...`);
const createPackage = Object.assign({}, appPackage, {name});
fs.writeFileSync(path.join(directory, 'package.json'), JSON.stringify(createPackage, null, 2));

console.log(`Creating boilerplate...`);
fs.copySync(appDirectory, directory);

console.log(`Installing modules...`)
process.chdir(directory);
execSync(`npm i --loglevel=error`);

console.log('Done!');

console.log(`
Start by running:

\t$ cd ${input}
\t$ npm start
`);