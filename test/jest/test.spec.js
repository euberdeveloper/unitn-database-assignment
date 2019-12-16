const childProcess = require('child_process');
const queries = require('../../generator/queries');
const conf = require('../../generator/config');

describe('Database project module tests:', () => {

    // Not showing debug messages
    console.debug = () => { };

    describe('Test: queries functions', () => {

        test(`Should return the content of "test/queries/first.test.js"`, () => {
            const result = queries[0]();
            const expected = require('../queries/first.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/second.test.js"`, () => {
            const result = queries[1]();
            const expected = require('../queries/second.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/third.test.js"`, () => {
            const result = queries[2]();
            expect(Array.isArray(result)).toEqual(true);
            expect(result.length).toEqual(conf.thirdQueryConfig.count);
        });

        test(`Should return the content of "test/queries/fourth.test.js"`, () => {
            const result = queries[3]();
            expect(Array.isArray(result)).toEqual(true);
            expect(result.length).toEqual(conf.fourthQueryConfig.count);
        });

        test(`Should return the content of "test/queries/fifth.test.js"`, () => {
            const result = queries[4]();
            const expected = require('../queries/fifth.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/sixth.test.js"`, () => {
            const result = queries[5]();
            const expected = require('../queries/sixth.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/seventh.test.js"`, () => {
            const result = queries[6]();
            const expected = require('../queries/seventh.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/eight.test.js"`, () => {
            const result = queries[7]();
            const expected = require('../queries/eight.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/ninth.test.js"`, () => {
            const result = queries[8]();
            const expected = require('../queries/ninth.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/tenth.test.js"`, () => {
            const result = queries[9]();
            const expected = require('../queries/tenth.test');
            expect(result).toEqual(expected);
        });

        test(`Should return the content of "test/queries/eleventh.test.js"`, () => {
            const result = queries[10]();
            const expected = require('../queries/eleventh.test');
            expect(result).toEqual(expected);
        });

    });

    describe('Test: transpiling process', () => {

        test(`Should run the entire process of transpiling the src folder`, () => {
            childProcess.execSync('npm run transpile');
        });
        
    });

});