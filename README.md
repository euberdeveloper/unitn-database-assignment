[![Build Status](https://travis-ci.org/euberdeveloper/unitn-database-assigment.svg?branch=master)](https://travis-ci.org/euberdeveloper/unitn-database-assigment)
[![CircleCI](https://circleci.com/gh/euberdeveloper/unitn-database-assignment.svg?style=svg)](https://circleci.com/gh/euberdeveloper/unitn-database-assignment)
[![Coverage Status](https://coveralls.io/repos/github/euberdeveloper/unitn-database-assignment/badge.svg?branch=master)](https://coveralls.io/github/euberdeveloper/unitn-database-assignment?branch=master)
[![Codecov Status](https://codecov.io/gh/euberdeveloper/unitn-database-assignment/branch/master/graph/badge.svg)](https://codecov.io/gh/euberdeveloper/unitn-database-assignment)
[![Known Vulnerabilities](https://snyk.io/test/github/euberdeveloper/unitn-database-assignment/badge.svg?targetFile=package.json)](https://snyk.io/test/github/euberdeveloper/unitn-database-assignment?targetFile=package.json)
[![dependencies Status](https://david-dm.org/euberdeveloper/unitn-database-assignment/status.svg)](https://david-dm.org/euberdeveloper/unitn-database-assignment)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/euberdeveloper/unitn-database-assignment/blob/master/LICENSE)

# unitn-database-assignment
A crazy way to do my database assignment. With javascript, python and Java

## What is the project

This project was an UNITN's Database course's assignment. The assignment consisted in executing some queries with **python** or **Java** to a **PostgreSQL** database. The eleven queries where very easy and the most difficult ones were the third and the fourth, in which one million random tuples were to be inserted. Whereas the right way of doing the assignment was creating a Java or python file that generated the queries and the random tuples sent with already made library functions, I chose to make an experiment.

The pdf assignment is [this](https://github.com/euberdeveloper/unitn-database-assignment/blob/master/doc/assignment/assignment.pdf).

## What did I do in the project

Using **Node**, I made a **Javascript** program that generated the queries. Than, it searched for all the `.java` and `.py` files in the `src` directory of my project and duplicated them in the `dist` directory, by replacing all the `{{QUERY_N}}` templates with the right query. The result was that the python or Java program in the `dist` folder, with all the queries already included as a literal string.

## Why was that a bad idea

Of course this was only an experiment.

This was a bad idea because:

* The output file with all the queries (including the one with millions of inserts) weighted __more than 200MB__.
* Actually, the tuples were __not random__, because every execution of the program produced the same output.
* The Java compiler __does not support huge literal strings__. I had to gave up with it and it worked only with few inserts.
* The Python psycopg2 library __does not support huge queries__. It worked only when I splitted the one-million queries in twenty parts.
* It was __extremly slow__ comparing with the build-in functions of Python and Java.

## Why did I do it

I did it because:

* This was an opportunity to use an npm module made by my self. I used __[unitn-database-assignment](https://www.npmjs.com/package/unitn-database-assignment)__ to scan all the python and Java files in the src directory.
* Writing code to produce other code was funny.
* I used three quite languages in a project.
* I delivered my assignment late because my home network was quite slow in uploading the 215MB file.
* I used this project to try lots of __testing frameworks__, __ci services__ and __cover services__.

## Additional things I used

It is linted with __eslint__.

It is tested with:

* __Mocha__
* __Jest__
* __Ava__
* __Tap__
* __Tape__

I used __nyc__ to generate the cover files.

I used as ci services:

* __Travis.ci__
* __Circle.ci__

I used as cover services:

* __Coveralls__
* __Codecov__

I used __commitizen__ to commit responsively and __unitn-database-assignment__ to generate the project tree.

## How to run it

1. Install `Node.js`
2. Install `python 3.7` and `JDK`
3. Add the `psycopg2` python library with `pip install psycopg2-binary`
4. Execute `npm i` on the root folder of the project
5. Execute `npm run transpile` to generate the python and java files to the dist folder
6. Execute `npm run serve:python` to generate the dist files and also start the python program
7. Execute `npm run serve:java` to generate the dist files and also compile and run the java program. I will not work if you do not change the number of tuples in `generator/config.js`
8. Execute `npm test` (after having transpiled it) to execute all the tests with all the test frameworks. You can execute the tests with a specific test framework by running `npm run test:test_framework`.
9. Execute `npm run directory-tree` to generate the directory tree in the `doc/tree` folder.

## How is structured the project

Made with **[unitn-database-assignment](https://npmjs.com/package/unitn-database-assignment)**.

```txt
unitn-database-assignment
 ├── LICENSE
 ├── README.md
 ├─> dist
 │   └── postgresql-42.2.8.jar
 ├─> doc
 │   ├─> assignment
 │   │   └── assignment.pdf
 │   └─> tree
 │       └── tree.txt
 ├── unitn-database-assignment.config.json
 ├─> generator
 │   ├── config.js
 │   ├── index.js
 │   └── queries.js
 ├── package-lock.json
 ├── package.json
 ├─> src
 │   ├── Database.java
 │   └── database.py
 └─> test
     ├─> ava
     │   ├── queries.test.js
     │   └── transpiling.test.js
     ├─> jest
     │   └── test.spec.js
     ├─> mocha
     │   └── test.js
     ├─> queries
     │   ├── eight.test.js
     │   ├── eleventh.test.js
     │   ├── fifth.test.js
     │   ├── first.test.js
     │   ├── ninth.test.js
     │   ├── second.test.js
     │   ├── seventh.test.js
     │   ├── sixth.test.js
     │   └── tenth.test.js
     ├─> tap
     │   ├── queries.test.js
     │   └── transpiling.test.js
     └─> tape
         ├── queries.test.js
         └── transpiling.test.js
```
