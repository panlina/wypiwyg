#!/usr/bin/env node

var commander = require('commander');
var App = require('.');
commander.option('--port <port>', undefined, Number, 8000);
commander.parse(process.argv);
var app = new App();
app.listen(commander.port);
