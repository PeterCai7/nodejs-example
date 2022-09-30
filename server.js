// Entry Point of the API Server 

const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const plaintext = 'elasticbeanstalk';

/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();

/* To handle the HTTP Methods Body Parser 
   is used, Generally used to extract the 
   entire body portion of an incoming 
   request stream and exposes it on req.body 
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send('Welcome to Friday learning series!');
});

app.get('/testdata', (req, res, next) => {
    console.log("TEST DATA :");
    let rawdata = fs.readFileSync('testData.json');
    let testData = JSON.parse(rawdata);
    console.log(testData);
    bcrypt.hash(plaintext, saltRounds, function(err, hash) {
        console.log(hash);
    });
    res.send(testData);
});
  
// Require the Routes API  
// Create a Server and run it on the port 8080
const server = app.listen(8080, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 8080
})