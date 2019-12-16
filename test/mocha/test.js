const expect = require('chai').expect;
const childProcess = require('child_process');
const queries = require('../../generator/queries');
const conf = require('../../generator/config');

describe('Database project module tests:', function () {

    describe('Test: queries functions', function () {

        this.slow(1 * 1000);
        this.timeout(2 * 1000);

        // Not showing debug messages
        global.console.debug = () => { };

        it(`Should return the content of "test/queries/first.test.js"`, function () {

            const result = queries[0]();
            const expected = require('../queries/first.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/second.test.js"`, function () {

            const result = queries[1]();
            const expected = require('../queries/second.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/third.test.js"`, function () {

            this.slow(25 * 1000);
            this.timeout(50 * 1000);

            const result = queries[2]();
            expect(Array.isArray(result)).to.be.true;
            expect(result.length).to.equal(conf.thirdQueryConfig.count);

        });

        it(`Should return the content of "test/queries/fourth.test.js"`, function () {

            this.slow(25 * 1000);
            this.timeout(50 * 1000);

            const result = queries[3]();
            expect(Array.isArray(result)).to.be.true;
            expect(result.length).to.equal(conf.fourthQueryConfig.count);

        });

        it(`Should return the content of "test/queries/fifth.test.js"`, function () {

            const result = queries[4]();
            const expected = require('../queries/fifth.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/sixth.test.js"`, function () {

            const result = queries[5]();
            const expected = require('../queries/sixth.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/seventh.test.js"`, function () {

            const result = queries[6]();
            const expected = require('../queries/seventh.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/eight.test.js"`, function () {

            const result = queries[7]();
            const expected = require('../queries/eight.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/ninth.test.js"`, function () {

            const result = queries[8]();
            const expected = require('../queries/ninth.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/tenth.test.js"`, function () {

            const result = queries[9]();
            const expected = require('../queries/tenth.test');
            expect(result).to.equal(expected);

        });

        it(`Should return the content of "test/queries/eleventh.test.js"`, function () {

            const result = queries[10]();
            const expected = require('../queries/eleventh.test');
            expect(result).to.equal(expected);

        });

    });

    describe('Test: transpiling process', function () {

        this.slow(1 * 60 * 1000);
        this.timeout(3 * 60 * 1000);

        it(`Should run the entire process of transpiling the src folder`, function() {
            childProcess.execSync('npm run transpile');
        });
        
    });

});