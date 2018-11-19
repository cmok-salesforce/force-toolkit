require('dotenv').config()
const shell = require('shelljs');
var fs = require('fs');
var jsforce = require('jsforce');
var program = require('commander');
var myutils = require('../../utils/myutils.js');


console.log("Executing shell script to clean Neo4J Graph database: " + process.env.NEO4J_CLEAN_SCRIPT);
console.log(shell.exec(process.env.NEO4J_CLEAN_SCRIPT, {silent:false}).stdout);

