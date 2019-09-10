//BTVN ve Get Read Print 
const https = require("https");

function printMessage(username, badgeCount, points){
    const message = `${username} has ${badgeCount} Badge and ${points} points of this Subject`
    
};

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
    let bodyafterparse = "";
    //read
    response.on('data', data1 => {
        body += data1.toString();
       
    });
    //parse
    response.on('end', () => {
        bodyafterparse = JSON.parse(body);
        console.log(bodyafterparse);
    });
});