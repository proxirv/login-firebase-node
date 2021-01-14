const express = require('express');
const restApi = express();
//const cors = require('cors');
const server = require('http').createServer(restApi);
const rutas = require('./src/routes/Routes.js');

restApi.use(express.json());
restApi.use(express.static(__dirname+'/public'));
//restApi.use(cors());
//restApi.options('*', cors());

server.listen(3030,()=>console.log('Listening server in port 3030'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


restApi.post('/test', function(req, res) {
  //console.log('valores ingresados: '+JSON.stringify(req.body));
  console.log('valores ingresados: '+JSON.stringify(req.body));
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let aux2 = 1;
  let aux3 = "enabled";
  console.log(aux2);
  console.log(aux3);
  res.send({
    status:'success',
    msj:'8)'
  });
});
  
restApi.use('/api',rutas);