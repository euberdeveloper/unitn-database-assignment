const tap = require('tap');
const childProcess = require('child_process');

// Not showing debug messages
global.console.debug = () => { };

tap.test(`Should run the entire process of transpiling the src folder`, test => {

    test.doesNotThrow(() => childProcess.execSync('npm run transpile'));
    test.end();

});