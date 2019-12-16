const test = require('tape');
const queries = require('../../generator/queries');
const conf = require('../../generator/config');

// Not showing debug messages
global.console.debug = () => { };

test(`Should return the content of "test/queries/first.test.js"`, t => {

    const result = queries[0]();
    const expected = require('../queries/first.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/second.test.js"`, t => {

    const result = queries[1]();
    const expected = require('../queries/second.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/third.test.js"`, t => {

    const result = queries[2]();
    t.ok(Array.isArray(result));
    t.equal(result.length, conf.thirdQueryConfig.count);
    t.end();

});

test(`Should return the content of "test/queries/fourth.test.js"`, t => {

    const result = queries[3]();
    t.ok(Array.isArray(result));
    t.equal(result.length, conf.fourthQueryConfig.count);
    t.end();

});

test(`Should return the content of "test/queries/fifth.test.js"`, t => {

    const result = queries[4]();
    const expected = require('../queries/fifth.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/sixth.test.js"`, t => {

    const result = queries[5]();
    const expected = require('../queries/sixth.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/seventh.test.js"`, t => {

    const result = queries[6]();
    const expected = require('../queries/seventh.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/eight.test.js"`, t => {

    const result = queries[7]();
    const expected = require('../queries/eight.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/ninth.test.js"`, t => {

    const result = queries[8]();
    const expected = require('../queries/ninth.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/tenth.test.js"`, t => {

    const result = queries[9]();
    const expected = require('../queries/tenth.test');
    t.equal(result, expected);
    t.end();

});

test(`Should return the content of "test/queries/eleventh.test.js"`, t => {

    const result = queries[10]();
    const expected = require('../queries/eleventh.test');
    t.equal(result, expected);
    t.end();

});