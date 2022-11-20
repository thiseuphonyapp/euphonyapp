const express = require('express');
const path = require('path')
const router = express.Router();
const port = 3000
const app = express();
app.use(router);


// CHECK CONNECTION TO DB
const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/check', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥 BOOM!! 💥: ' + err);
    } else {
      res.send('Me conecté a la DB! 😎');
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))

app.use('/', express.static(path.join(__dirname, 'views')));