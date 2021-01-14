const manageruser = require('../../db/DBmanagerUser');

const managerInstaceUser = new manageruser();

var RouterUser = function(){

  /*
  console.log('valores ingresados: '+JSON.stringify(req.body));
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let valor = req.body;
  res.send({
    status:'success',
    msj:'8)'
  }); 
  */
  this.postTest = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.createtest(
      valor.prueba,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder a la db'
          });
        }else{
          res.send({
            status:'success',
            msj:'prueba de test exitosa'
          });
        }
      }
    );
  };


  this.postCreateuser = function(req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.createperson(
      valor.first_name,
      valor.last_name,
      valor.email,
      valor.gender,
      valor.birthday,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'no created person'
          });
        }else{
          let aux1 = result[0].id_person;
          let aux2 = 1;
          let aux3 = "enabled";
          console.log(aux1);
          console.log(aux2);
          console.log(aux3);
          console.log(valor.username);
          console.log(valor.password);
          res.send({
            status:'success',
            msj:'8)'
          });
          /*managerInstaceUser.createuser(
            valor.username,
            valor.password,
            aux1,
            aux2,
            aux3,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created user'
                });
              }else{
                res.send({
                  status:'success',
                  msj:'user created'
                }); 
                /*managerInstaceUser.createsession(
                  result[0].id_user,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created user'
                      });
                    }else{
                      res.send({
                        status:'success',
                        msj:'user created'
                      }); 
                    }
                  }
                ); * /
              }
            }
          );*/
        }
      }
    );
  };
  
  this.postlogin = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.login(
      valor.username,
      valor.password,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'Datos equivocados'
          });
        }else{
          let aux1 = result[0].id_user;
          let username = result[0].username;
          let aux2 = result[0].id_person;
          let aux3 = md5(aux1);        
          managerInstaceUser.loginperson(
            aux2,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'persona no encontrada'
                });
              }else{
                let first_name = result[0].first_name;
                let last_name = result[0].last_name;
                let email = result[0].email;
                let gender = result[0].gender;
                let birthday = result[0].birthday;
                managerInstaceUser.loginsession(
                  aux1,
                  aux3,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no se pudo acceder a session'
                      });
                    }else{
                      let temporal_token = result[0].temporal_token;
                      res.send({
                        status:'success',
                        msj:'Wellcome Back',
                        data:{
                          first_name,
                          last_name,
                          username,
                          email,
                          gender,
                          birthday,
                          temporal_token
                        }
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  };

  /*
  this.postlogout = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.logout(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
            status:'success',
            msg:'Logout'
          });
        }
      }
    );
  };
  */

}

module.exports = function(){
  var instancia = new RouterUser();
  return instancia;
};