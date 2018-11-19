require('dotenv').config();
require('./profile')
const shell = require('shelljs');
var jsforce = require('jsforce');
var program = require('commander');
var sfdc = require('./conn');

//console.log(shell.exec("/Users/chendamok/MEGA/tools/clean_ongdb.sh", {silent:false}).stdout);

console.log("Executing shell script to clean Neo4J Graph database: " + process.env.NEO4J_CLEAN_SCRIPT);
//console.log(shell.exec(process.env.NEO4J_CLEAN_SCRIPT, {silent:false}).stdout);


program
    .version('1.0', '-v, --version')
    .option('-e, --env <environment>', 'Environement define in your build.properties')
    .parse(process.argv);
//console.log('*** process.argv.length=' + process.argv.length);
if (process.argv.length != 4) return program.help();
//if (program.args.length==0) program.help();



console.log(sfdc.username);
console.log(sfdc.loginUrl);

var paramConnection = {
    loginUrl: sfdc.loginUrl,
    //logLevel: "DEBUG"
}


var conn = new jsforce.Connection(paramConnection);
conn.login(sfdc.username, sfdc.password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    //console.dir(connFirst, { depth: null });
    console.log("serverUrl=" + conn.instanceUrl);
    console.log("sessionId=" + conn.accessToken);
    // logged in user property
    //console.log("User ID: " + userInfo.id);
    //console.log("Org ID: " + userInfo.organizationId);
    //profile2(conn, err, userInfo);
    profile3(conn);
    conn.query("SELECT Id, Name FROM Account limit 5", function(err, result) {
        if (err) { return console.error("*** conn" + err); }
        console.log("result : " + result);
        console.log("total : " + result.totalSize);
        console.log("fetched : " + result.records.length);
    }); 
  });



//profile(conn, sfdc.username, sfdc.password);


//Logout : Attenton, ce n'est pas procedural --> 1 thread ONLY
// connFirst.logout(function(err) {
//     if (err) { return console.error("connFirst :" + err); }
//     // now the session has been expired.
//   });

// conn.logout(function(err) {
//     if (err) { return console.error("conn :" + err); }
//     // now the session has been expired.
//   });
  