const fs = require('fs');
const path = require('path');
const dree = require('dree');

console.debug('creating queries...');
const queries = require('./queries')
    .map((query, index) => ({
        label: `QUERY_${index + 1}`,
        code: query()
    }));

const SRC_PATH = process.argv.slice(2)[0] || path.join(__dirname, '../', 'src');

function createFile(path, text) {
    const lastIndexOfSrc = path.lastIndexOf('src');
    const onlyLastPart = path.slice(lastIndexOfSrc);
    const newPath = path.slice(0, lastIndexOfSrc) + onlyLastPart.replace(/src/g, 'dist');
    const distPath = newPath.slice(0, newPath.lastIndexOf('dist')) + 'dist';
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath, { recursive: true });
    }
    fs.writeFileSync(newPath, text);
}

function chunkJavaText(text) {
    const maxStringLiteral = (2 ** 15) - 4;
    if (text.length >= maxStringLiteral) {
        const chunks = [];
        const chunksCount = Math.floor(text.length / maxStringLiteral);
        for (let i = 0; i <= chunksCount; i++) {
            chunks.push('"' + text.slice(maxStringLiteral * i, maxStringLiteral * (i + 1)).replace(/"/g, '\\"') + '"');
        }
        chunks[0] = chunks[0].slice(1);
        chunks[chunks.length - 1] = chunks[chunks.length - 1].slice(0, chunks[chunks.length - 1].length - 1);
        text = chunks.join(' + ');
    }
    else {
        text = text.replace(/"/g, '\\"');
    }
    return text;
}

function parseJavaFile(path) {
    let text = fs.readFileSync(path, { encoding: 'utf8' });

    queries.forEach((query, index) => {
        const regExp = new RegExp(`{{${query.label}}}`, 'g');
        if (index === 2 || index === 3) {
            text = text.replace(regExp, chunkJavaText(query.code.join(';') + ';'));
        }
        else {
            text = text.replace(regExp, chunkJavaText(query.code));
        }
    });
    createFile(path, text);
}

function parsePythonFile(path) {
    let text = fs.readFileSync(path, { encoding: 'utf8' });
    queries.forEach((query, index) => {
        if (index !== 2 && index !== 3) {
            const regExp = new RegExp(`{{${query.label}}}`, 'g');
            text = text.replace(regExp, query.code);
        }
        else {
            const n = 20;
            const size = query.code.length;
            const chunkSize = size / n;
            for (let i = n - 1; i >= 0; i--) {
                const regExp = new RegExp(`{{${query.label}_${i + 1}}}`, 'g');
                const chunk = query.code
                    .slice((chunkSize * i), (chunkSize * i) + chunkSize)
                    .join(';') + ';';
                text = text.replace(regExp, chunk);
            }
        }
    });
    createFile(path, text);
}

console.log('scanning files...');
function scanDirectory() {
    dree.scan(SRC_PATH, {}, file => {
        switch (file.extension) {
        case 'java':
            console.log(`elaborating ${file.name}`);
            parseJavaFile(file.path);
            break;
        case 'py':
            console.log(`elaborating ${file.name}`);
            parsePythonFile(file.path);
            break;
        }
    });
}

scanDirectory();
