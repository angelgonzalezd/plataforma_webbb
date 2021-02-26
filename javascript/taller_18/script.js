const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

const personaje = function( dato ) {
    console.log( `Hola yo soy ${dato.name}.` )
}

function obtenerPersonaje( id ) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get( URL, OPTS, personaje )
}

for (let i=1; i<=100; i++) {
    obtenerPersonaje( i )
}