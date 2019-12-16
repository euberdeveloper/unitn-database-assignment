const { professor, course, tables, thirdQueryConfig, fourthQueryConfig, sixthQueryConfig, seventhQueryConfig, eightQueryConfig, tenthQueryConfig, eleventhQueryConfig } = require('./config');

function randomRange(x, y) {
    return Math.floor(Math.random() * (y - x)) + x;
}

function firstQuery() {
    console.debug('creating query 1');

    return [...tables]
        .reverse()
        .map(table => table.table)
        .map(table => `DROP TABLE IF EXISTS "${table}"`)
        .join(';') + ';';
}

function secondQuery() {
    console.debug('creating query 2');

    return tables
        .map(table => {
            const foreignKeys = table.foreignKeys || [];
            let query = `CREATE TABLE "${table.table}" (`;
            query += Object.keys(table.columns)
                .map(column => `${column} ${table.columns[column]} NOT NULL`)
                .join(',') + ',';
            query += `PRIMARY KEY (${table.primaryKey})`;
            query += foreignKeys.length 
                ? ',' + foreignKeys
                    .map(({column, toTable, toColumn}) => `FOREIGN KEY (${column}) REFERENCES "${toTable}"(${toColumn})`)
                    .join(',')
                : '';
            query += ')';
            return query;
        })
        .join(';') + ';';
}

function thirdQuery() {
    console.debug('creating query 3');

    function randomValues(i) {
        const name = names[randomRange(0, names.length)];
        const address = addresses[randomRange(0, addresses.length)];
        const age = randomRange(20, 60);
        return `${i}, '${name}', '${address}', ${age}, ${i}`; 
    }

    const tuples = [];
    const table = professor.table;
    const {names, addresses, count: n} = thirdQueryConfig;
    const columns = Object.keys(professor.columns).join(',');
    for (let i = 186; i < n + 186 - 1; i++) {
        tuples.push(`INSERT INTO "${table}" (${columns}) VALUES (${randomValues(i)})`);
    }
    tuples.sort(() => randomRange(-1, 2));
    tuples.push(`INSERT INTO "${table}" (${columns}) VALUES (${randomValues(185)})`);
    return tuples;
}

function fourthQuery() {
    console.debug('creating query 4');

    function randomValues(i) {
        const courseName = courseNames[randomRange(0, courseNames.length)];
        const area = areas[randomRange(0, areas.length)];
        return`'${idSuffix}${i}', '${courseName}', '${area}', ${i}`; 
    }

    const tuples = [];
    const table = course.table;
    const {idSuffix, courseNames, areas, count: n} = fourthQueryConfig;
    const columns = Object.keys(course.columns).join(',');
    for (let i = 186; i < n + 186 - 1; i++) {
        tuples.push(`INSERT INTO "${table}" (${columns}) VALUES (${randomValues(i)})`);
    }
    tuples.sort(() => randomRange(-1, 2));
    tuples.push(`INSERT INTO "${table}" (${columns}) VALUES (${randomValues(185)})`);
    return tuples;
}

function fifthQuery() {
    console.debug('creating query 5');

    const {table, primaryKey} = professor;
    return `SELECT ${primaryKey} FROM "${table}";`;
}

function sixthQuery() {
    console.debug('creating query 6');

    const {table} = professor;
    const {column, value, oldValue} = sixthQueryConfig;
    return `UPDATE "${table}" SET ${column}=${value} WHERE ${column}=${oldValue};`;
}

function seventhQuery() {
    console.debug('creating query 7');

    const {table} = professor;
    const {columns, column, value} = seventhQueryConfig;
    return `SELECT ${columns.join(',')} FROM "${table}" WHERE ${column} = ${value};`;
}

function eightQuery() {
    console.debug('creating query 8');

    const {table} = professor;
    const {column} = eightQueryConfig;
    return `CREATE INDEX ${column} ON "${table}" USING btree(${column});`;
}

function ninthQuery() {
    console.debug('creating query 9');

    const {table, primaryKey} = professor;
    return `SELECT ${primaryKey} FROM "${table}";`;
}

function tenthQuery() {
    console.debug('creating query 10');

    const {table} = professor;
    const {column, value, oldValue} = tenthQueryConfig;
    return `UPDATE "${table}" SET ${column}=${value} WHERE ${column}=${oldValue};`;
}

function eleventhQuery() {
    console.debug('creating query 11');
    
    const {table} = professor;
    const {columns, column, value} = eleventhQueryConfig;
    return `SELECT ${columns.join(',')} FROM "${table}" WHERE ${column} = ${value};`;
}

module.exports = [
    firstQuery,
    secondQuery,
    thirdQuery,
    fourthQuery,
    fifthQuery,
    sixthQuery,
    seventhQuery,
    eightQuery,
    ninthQuery,
    tenthQuery,
    eleventhQuery
];