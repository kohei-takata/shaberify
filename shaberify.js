#!/usr/bin/env node

var say = require('say');
var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, 'utf8', function (err, text) {
    say.speak('Alex', text);
});