const fs = require('fs');
const path = require('path');
const getVariables = require('../dist/get-variables').default;
const parseVariables = require('../dist/parse-variables').default;

fs.readFile(path.resolve(__dirname, './scss/test1.scss'), 'utf8', function(err, contents) {
    console.log(parseVariables(getVariables(contents)));
});
