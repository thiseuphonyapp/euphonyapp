//require("dotenv").config(); // a zero-dependency module that loads environment variables from a .env file into process.env
const express = require('express'); 
const path = require("path");

//const bodyParser=require('body-parser')// body parsing middleware https://www.npmjs.com/package/body-parser
const port = 3000;
const app = express();

//const router = require('./components/musicSearch/network');
const router = require('./network/routes'); 

//app.use(router);

router(app);

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server listening on port ${port}!`));