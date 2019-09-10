const https = require('https');

function printMessage (username, badgeCount, points){
    const message = `${username} co ${badgeCount} va co ${points}`;
    console.log(message);
}
 function getProfiles(username){
    const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
        //READ DATA
        let body = "";
        let profiles = "";
        response.on("data", dataChunk => {
            body += dataChunk.toString();
            // console.log(dataChunk);
        });
        
        //PARSE DATA
        response.on("end", () => {
            profiles = JSON.parse(body);
            printMessage(username, profiles.badges.length,  profiles.points.JavaScript );
        })

        //PRINT DATA
    });
}
const users = process.argv.slice(2);
users.forEach(getProfiles);