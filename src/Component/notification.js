var {} =require('googleapis')
var express =require('express')
var app=express.app()

app.use(express.json());

app.get("/getAccessToken", (req, res) => {
  getAccessToken().then(function (accessToken) {
    console.log(accessToken);
  });
});
var MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
var SCOPES = [MESSAGING_SCOPE];

function getAccessToken() {
  return new Promise(function (resolve, reject) {
    var key = require("./creds.json");
    var jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}
