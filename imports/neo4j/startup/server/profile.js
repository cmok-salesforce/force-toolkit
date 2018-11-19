var fs = require('fs');

//https://stackoverflow.com/questions/22921242/remove-carriage-return-and-space-from-a-string
    
(function () {

    console.log("*** HOME=" + process.env.HOME);
    const path= process.env.HOME + "/MEGA/code/force-toolkit/imports/playground/soql/ootb/apexclass.soql";
    var soql = fs.readFileSync(path, "utf8").replace(/[\n\r]+/g, '').replace(/\t/g, ' ');
    console.log('soql=' + soql);

    profile = function(conn, username, password) {
        conn.login(username, password, function (err, userInfo) {
            if (err) { console.log(err) }
            console.log('you are connected to ');
            console.log(userInfo);
            
            conn.query(soql, function (err, res) {
                if (err) {
                    return console.error(err);
                }
                //console.log(res);
            });
            console.log('conn.accessToken=' + conn.accessToken);
            console.log('conn.instanceUrl=' + conn.instanceUrl);
        });
    }

    profile2 = function(conn, err, userInfo) {
        if (err) { console.log(err) }
        console.log('you are connected to ');
        console.log(userInfo);
        
        conn.query(soql, function (err, res) {
            if (err) {
                return console.error(err);
            }
            //console.log(res);
        });
        console.log('conn.accessToken=' + conn.accessToken);
        console.log('conn.instanceUrl=' + conn.instanceUrl);
    }    

    profile3 = function(conn) {
        conn.query(soql, function (err, res) {
            if (err) {
                return console.error(err);
            }
            //console.log(res);
        });
        console.log('conn.accessToken=' + conn.accessToken);
        console.log('conn.instanceUrl=' + conn.instanceUrl);
    }    
})();



