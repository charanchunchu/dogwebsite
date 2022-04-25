//install express srever
const express =require('express');
const app = express();
const path = require('path');



// serve only the static file form the dist directory
app.use(express.static(__dirname + './dist/project'));

//start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.get('/*', function(_req, res) {
 res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('console listening!');