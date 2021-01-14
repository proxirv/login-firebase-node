const admin = require('firebase-admin');
const firebase = require('firebase-app');
//const firebase = require('');
var serviceAccount = require("../../login-auth-firebase-94f34-firebase-adminsdk-edav9-93edffc0d6");

var firebaseConfig = {
  apiKey: "AIzaSyCxAaSnqXoHF1gDcE99JQA1WjILhjsUAxA",
  authDomain: "login-auth-firebase-94f34.firebaseapp.com",
  databaseURL: "https://login-auth-firebase-94f34-default-rtdb.firebaseio.com",
  projectId: "login-auth-firebase-94f34",
  storageBucket: "login-auth-firebase-94f34.appspot.com",
  messagingSenderId: "313859165145",
  appId: "1:313859165145:web:94fb2e29daa6a01a2167c8"
};
// Initialize Firebase
admin.initializeApp(firebaseConfig);

//var refreshToken; // Get refresh token from OAuth2 flow

/*admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //credential: admin.credential.refreshToken(refreshToken),
    databaseURL: 'https://login-auth-firebase-94f34-default-rtdb.firebaseio.com/'
});*/

//const db = admin.database();
const app = admin.auth();


//const app = firebase.auth();

var Dbfb = function(){

  this.postTest = function(req,res) {
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    console.log('Agregara una persona');
    const newContact = {
      email: valor.email,
      password: valor.password
    };
    db.ref('usuarios').push(newContact);
    res.send({
      status:'success',
      msj:'prueba de test exitosa'
    });
  };

  this.postCreateuser = function(req,res) {
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //let valor = req.body;
    let email = req.body.email;
    let password =req.body.password;
    console.log('Agregara una persona');
      app.createUserWithEmailAndPassword(email, password);
      /*.then((user) => {
        res.send({
          status:'success',
          msj:'Creado usuario.'
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.send({
          status:'error',
          msj:'No se pudo crear el usuario.'
        });
      });*/
      res.send({
        status:'success',
        msj:'Creado usuario.'
      });
  };

  this.postLogin = function(req,res) {
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //let valor = req.body;
    let email = req.body.email;
    let password =req.body.password;
    console.log('Agregara una persona');
    app.auth().signInWithEmailAndPassword(email,password);
    res.send({
      status:'success',
      msj:'Usuario ingreso.'
    });
  };

};

module.exports = function(){
  var instancia = new Dbfb();
  return instancia;
};