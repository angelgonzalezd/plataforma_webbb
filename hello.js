const express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('hello angel')
});
app.listen(process.env.PORT || 3000)

console.log('La aplicación está escuchando en http://localhost:3000')