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
  controller.getSongs()
    .then((songsList)=> {
      response.success(req, res, songsList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error', 500, e)
    })
/*
  if (req.query.error == "ok"){
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación')
  } else {
    response.success(req, res, 'Busqueda correcta');
  }*/
});

router.post('/', function (req, res) {
  controller.addComment(req.body.user, req.body.message)
  .then((fullComment)=> {
    response.success(req, res, fullComment);
  })
  .catch(e => {
    response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
  });
  
});

module.exports = router;