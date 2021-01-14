const admin = require('firebase-admin');
var serviceAccount = require("../../login-auth-firebase-94f34-firebase-adminsdk-edav9-93edffc0d6");

//var refreshToken; // Get refresh token from OAuth2 flow
    
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //credential: admin.credential.refreshToken(refreshToken),
    databaseURL: 'https://login-auth-firebase-94f34-default-rtdb.firebaseio.com/'/*###########*/
});

const conectardb = admin.database();

module.exports = conectardb;