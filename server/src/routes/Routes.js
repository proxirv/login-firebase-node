const express = require('express');
const RouterDb = require('../db/dbfirestor');
const RouterAuth = require('../auth/authfirebase');
const router = express.Router();
let DbInstance = new RouterDb();
let AuthInstance = new RouterAuth();


router.route('/test')
    .post(
        function(req,res){
            /*console.log('valores ingresados: '+JSON.stringify(req.body));
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.send({
                status:'success',
                msj:'8)'
            });*/
            DbInstance.postTest(req,res);
        }
);

router.route('/signup')
    .post(
        function(req,res){
            AuthInstance.postCreateuser(req,res);
        }
);

router.route('/login')
    .post(
        function(req,res){
            AuthInstance.postLogin(req,res);
        }
);

/*
router.route('/test')
    .post(
        function(req,res){
            console.log('valores ingresados: '+JSON.stringify(req.body));
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.send({
                status:'success',
                msj:'8)'
            });
            //FbInstance.postTest(req,res);
        }
);

router.route('/logout')
    .post(
        function(req,res){
            FbInstance.postlogout(req,res);
        }
);
*/

// Export API routes
module.exports = router;