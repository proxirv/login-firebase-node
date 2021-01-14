var firebase = require('firebase-app');

// Initialize Firebase
firebase.initializeApp({
    serviceAccount: "./<mysecreturledittedout>.json"
});

router.get('/create', function(req, res){
    var email = req.email;
    var password = req.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){ 
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("ERROR");
        console.log(errorCode, errorMessage);
    });
});
/*
//const admin = require('firebase-admin');
const firebase = require('firebase-app');

//var app = firebase.app();

var firebaseConfig = {
    apiKey: "AIzaSyCxAaSnqXoHF1gDcE99JQA1WjILhjsUAxA",
    authDomain: "login-auth-firebase-94f34.firebaseapp.com",
    databaseURL: "https://login-auth-firebase-94f34-default-rtdb.firebaseio.com",
    projectId: "login-auth-firebase-94f34",
    storageBucket: "login-auth-firebase-94f34.appspot.com",
    messagingSenderId: "313859165145",
    appId: "1:313859165145:web:94fb2e29daa6a01a2167c8"
};

    
firebase.initializeApp({
    apiKey: "AIzaSyCxAaSnqXoHF1gDcE99JQA1WjILhjsUAxA",
    authDomain: "login-auth-firebase-94f34.firebaseapp.com",
    databaseURL: "https://login-auth-firebase-94f34-default-rtdb.firebaseio.com",
    projectId: "login-auth-firebase-94f34",
    storageBucket: "login-auth-firebase-94f34.appspot.com",
    messagingSenderId: "313859165145",
    appId: "1:313859165145:web:94fb2e29daa6a01a2167c8"
});

const conectardb = firebase.auth();*/

module.exports = conectardb;