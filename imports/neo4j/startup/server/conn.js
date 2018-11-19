require('dotenv').config()
const shell = require('shelljs');
var fs = require('fs');
var jsforce = require('jsforce');
var program = require('commander');
var myutils = require('../../../utils/myutils.js');

program
    .version('1.0', '-v, --version')
    .option('-e, --env <environment>', 'Environement define in your build.properties')
    .parse(process.argv);
//console.log('*** process.argv.length=' + process.argv.length);
if (process.argv.length != 4) return program.help();
//if (program.args.length==0) program.help();


// 1- Connection to Salesforce Instance

const username = myutils.properties.get(`sf.${program.env}.username`);
const password = myutils.properties.get(`sf.${program.env}.password`);
const forcecli_orgtype = myutils.properties.get(`sf.${program.env}.forcecli_orgtype`);
const loginUrl = `https://${forcecli_orgtype}.salesforce.com`;
console.log('*** username=' + username);
console.log('*** password=' + password);
console.log('*** forcecli_orgtype=' + forcecli_orgtype);
console.log('*** loginEndpoint=' + `https://${forcecli_orgtype}.salesforce.com`);

//https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
/*
module.exports = {
    foo: function () {
      // whatever
    },
    bar: function () {
      // whatever
    }
  };
*/  

module.exports = { 
    username,
    password,
    loginUrl
};

