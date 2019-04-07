#!/usr/bin/env node
const vorpal = require('vorpal');
const cli = require('./src/cli');
const app = cli(vorpal);
app.show();