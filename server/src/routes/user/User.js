const managerfb = require('../../db/DBmanagerUser');

const managerInstaceFb = new managerfb();

var RouterFb = function(){

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
    managerInstaceFb.createtest(
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



  /*
  this.postlogout = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceFb.logout(
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
  var instancia = new RouterFb();
  return instancia;
};