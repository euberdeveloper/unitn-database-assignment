// TABLES SCHEMA

const professor = {
    table: 'Professor',
    columns: {
        id: 'int',
        name: 'char(50)',
        address: 'char(50)',
        age: 'int',
        height: 'float'
    },
    primaryKey: 'id'

};

const course = {
    table: 'Course',
    columns: {
        id: 'char(25)',
        title: 'char(50)',
        area: 'char(30)',
        instructor: 'int'
    },
    primaryKey: 'id',
    foreignKeys: [
        { column: 'instructor', toTable: 'Professor', toColumn: 'id' }
    ]
};

const tables = [professor, course];

// FIRST QUERY

// SECOND QUERY

// THIRD QUERY

const thirdQueryConfig = {
    names: [
        'Velegrakis',
        'Brugnara',
        'Sebastiani',
        'Occhetta',
        'Anneliese',
        'Guariglia',
        'Goldoni',
        'Tomasi',
        'Passamani',
        'Ghiloni',
        'Ronchetti',
        'Kuper',
        'Palopoli',
        'Agostinelli',
        'Giorgini',
        'Alzetta',
        'Fausto',
        'Montresor',
        'Fumagalli',
        'Ranise',
        'Segata'
    ],
    addresses: [
        'via Povolandia',
        'via Valdagno',
        'via Vicenza',
        'via Trento',
        'via Via',
        'via Defacto'
    ],
    count: 1e6
};

// FOURTH QUERY

const fourthQueryConfig = {
    idSuffix: 'Valdagno',
    courseNames: [
        'Reti',
        'Basi di dati',
        'Logica',
        'Algoritmi',
        'Analisi'
    ],
    areas: [
        'Informatica',
        'Matematica',
        'Filosofia'
    ],
    count: 1e6
};

// FIFTH QUERY

// SIXTH QUERY

const sixthQueryConfig = {
    column: 'height',
    value: 200,
    oldValue: 185
};

// SEVENTH QUERY

const seventhQueryConfig = {
    columns: ['id', 'address'],
    column: 'height',
    value: 200
};

// EIGHT QUERY

const eightQueryConfig = {
    column: 'height'
};

// NINTH QUERY


// TENTH QUERY 

const tenthQueryConfig = {
    column: 'height',
    value: 210,
    oldValue: 200
};

// ELEVENTH QUERY

const eleventhQueryConfig = {
    columns: ['id', 'address'],
    column: 'height',
    value: 210
};

module.exports = {
    professor,
    course, 
    tables,
    thirdQueryConfig,
    fourthQueryConfig,
    sixthQueryConfig,
    seventhQueryConfig,
    eightQueryConfig,
    tenthQueryConfig,
    eleventhQueryConfig
};