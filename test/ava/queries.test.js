const ava = require('ava');
const queries = require('../../generator/queries');
const conf = require('../../generator/config');

// Not showing debug messages
console.debug = () => { };

ava(`Should return the content of "test/queries/first.test.js"`, test => {
    const result = queries[0]();
    const expected = require('../queries/first.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/second.test.js"`, test => {
    const result = queries[1]();
    const expected = require('../queries/second.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/third.test.js"`, test => {
    const result = queries[2]();
    test.true(Array.isArray(result));
    test.is(result.length, conf.thirdQueryConfig.count);
});

ava(`Should return the content of "test/queries/fourth.test.js"`, test => {
    const result = queries[3]();
    test.true(Array.isArray(result));
    test.is(result.length, conf.thirdQueryConfig.count);
});

ava(`Should return the content of "test/queries/fifth.test.js"`, test => {
    const result = queries[4]();
    const expected = require('../queries/fifth.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/sixth.test.js"`, test => {
    const result = queries[5]();
    const expected = require('../queries/sixth.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/seventh.test.js"`, test => {
    const result = queries[6]();
    const expected = require('../queries/seventh.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/eight.test.js"`, test => {
    const result = queries[7]();
    const expected = require('../queries/eight.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/ninth.test.js"`, test => {
    const result = queries[8]();
    const expected = require('../queries/ninth.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/tenth.test.js"`, test => {
    const result = queries[9]();
    const expected = require('../queries/tenth.test');
    test.is(result, expected)
});

ava(`Should return the content of "test/queries/eleventh.test.js"`, test => {
    const result = queries[10]();
    const expected = require('../queries/eleventh.test');
    test.is(result, expected)
});