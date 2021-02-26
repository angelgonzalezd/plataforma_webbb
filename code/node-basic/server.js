const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado.') 
    } else {
        response.success(req, res, 'Lista de mensajes.', 201) 
    }
})

router.post('/', function(req, res) {
    res.send('Hola desde POST.')
})
router.delete('/mensaje', function(req, res) {
    response.success( req, res, 'Eliminado correctamente.' )
})

app.use('/', express.static('public'))

app.listen(5000)
console.log(`La aplicación está escuchando en http://localhost:5000`)