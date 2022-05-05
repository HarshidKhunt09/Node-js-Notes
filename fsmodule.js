// Core Module

const fs = require('fs');

fs.copyFileSync("fileone.txt", "filetwo.txt");

fs.readFile('fileone.txt', 'utf8', (err, data) => {
    console.log(err, data);
})