//install express srever
const express =require('express');
const path = require('path');

const app = express();

// serve only the static file form the dist directory
app.use(express.ststic('./dist/project'));

app.get('/*',(req,res) =>
 res.sendFile('index.html',{root:'dist/angular-heroku/'}),
 );

 //start the app by listening on the default Heroku port
 app.listen(process.env.PORT || 8080);