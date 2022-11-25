//require("dotenv").config(); // a zero-dependency module that loads environment variables from a .env file into process.env
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

app.use(bodyParser.json());
app.use(router);


// CHECK CONNECTION TO DB
const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

router.get('/check', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥 BOOM!! 💥: ' + err);
    } else {
      res.send('Me conecté a la DB! 😎');
      db.close();
    }
  });
});

router.get('/song', function(req, res){
  controller.buscarPorGenero(req.body.usuario, req.body.genero);
  
  res.header({
      "custom-header": "nuestro valor personalizado"
  });
  //response.success(req, res);
})


module.exports = router;
