require("dotenv").config(); // a zero-dependency module that loads environment variables from a .env file into process.env
const express = require('express');
const bodyParser = require('body-parser');
const response = require('../../network/response'); 
const controller = require('./controller');
const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(router);

// REMEMBER TO ADD DATABASE CONNECTION


router.get('/', function (req, res) { 


  if (req.query.error == "ok"){
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación')
  } else {
    response.success(req, res, 'Busqueda correcta');
  }
});

router.post('/', function (req, res) {
  console.log(req.body)
  controller.addComment(req.body.user, req.body.message);
  if (req.query.error == "ok"){
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación')
  } else {
    response.success(req, res, 'Busqueda correcta');
  }
  
 /* const {user, comment} = req.body;
  messagge(user,comment)
  .then((info)=>{
      response.success(req,res,info,201)
  })
  .catch((e)=>{
      response.error(req,res,'Informacion Invalida',400,e)
  })*/
});

module.exports = router;