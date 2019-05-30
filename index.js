var express = require('express');
var app = express();
var port = 4444;
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/js'));

app.set('view engine','pug');
app.set('views', __dirname +'/views');

//Routes

app.get('/', function (req, res) {
res.sendFile( __dirname + '/index.html');
});

app.get('/register', function (req, res) {
res.sendFile( __dirname + '/register.html');
});

app.listen(port, '0.0.0.0', function() {
console.log('Server running at port ' + port);

});
