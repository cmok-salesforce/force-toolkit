'use strict';
var fs = require('fs');
var jsforce = require('jsforce');
var program = require('commander');
program
    .version('1.0', '-v, --version')
    .option('-e, --env <environment>', 'Environement define in your build.properties')
    .parse(process.argv);
//console.log('*** process.argv.length=' + process.argv.length);
if (process.argv.length != 4) return program.help();
//if (program.args.length==0) program.help();

var myutils = require('../../utils/myutils.js');

const username = myutils.properties.get(`sf.${program.env}.username`);
const password = myutils.properties.get(`sf.${program.env}.password`);
const forcecli_orgtype = myutils.properties.get(`sf.${program.env}.forcecli_orgtype`);

console.log('*** username=' + username);
console.log('*** password=' + password);
console.log('*** forcecli_orgtype=' + forcecli_orgtype);
console.log('*** loginEndpoint=' + `https://${forcecli_orgtype}.salesforce.com`);

var conn = new jsforce.Connection({
    loginUrl: `https://${forcecli_orgtype}.salesforce.com`,
    logLevel: "DEBUG"
});

const path="/Users/chendamok/MEGA/code/force-toolkit/imports/playground/soql/ootb/apexclass.soql";
//https://stackoverflow.com/questions/22921242/remove-carriage-return-and-space-from-a-string
var soql = fs.readFileSync(path, "utf8").replace(/[\n\r]+/g, '').replace(/\t/g, ' ');

console.log('soql=' + soql);

conn.login(username, password, function (err, userInfo) {
    if (err) { console.log(err) }
    console.log('you are connected to ');
    console.log(userInfo);
    
    conn.query(soql, function (err, res) {
        if (err) {
            return console.error(err);
        }
        console.log(res);
    });
    console.log('conn.accessToken=' + conn.accessToken);
    console.log('conn.instanceUrl=' + conn.instanceUrl);
});
