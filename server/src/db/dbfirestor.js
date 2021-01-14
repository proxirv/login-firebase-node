const connection = require('./Connectiondb');

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
    connection.ref('usuarios').push(newContact);
    res.send({
      status:'success',
      msj:'prueba de test exitosa'
    });
  };

  /*this.postCreateuser = function(req,res) {
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //let valor = req.body;
    let email = req.body.email;
    let password =req.body.password;
    console.log('Agregara una persona');
      app.createUserWithEmailAndPassword(email, password);
      .then((user) => {
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
      });
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
  };*/

};

module.exports = function(){
  var instancia = new Dbfb();
  return instancia;
};