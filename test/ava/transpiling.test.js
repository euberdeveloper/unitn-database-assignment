const ava = require('ava');
const childProcess = require('child_process');

// Not showing debug messages
console.debug = () => { };

ava(`Should run the entire process of transpiling the src folder`, test => {
    test.notThrows(() => childProcess.execSync('npm run transpile'));
});