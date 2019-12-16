const test = require('tape');
const childProcess = require('child_process');

// Not showing debug messages
global.console.debug = () => { };

test(`Should run the entire process of transpiling the src folder`, t => {

    t.doesNotThrow(() => childProcess.execSync('npm run transpile'));
    t.end();

});