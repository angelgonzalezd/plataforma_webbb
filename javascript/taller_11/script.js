let objeto1 = {
    nombre: 'Juan',
    apellido: 'Andrade',
    altura: 1.60,
    cantidadDeLibros: 30
}

let objeto2 = {
    nombre: 'Luis',
    apellido: 'Agreda',
    altura: 1.6,
    cantidadDeLibros: 20
}

let objeto3 = {
    nombre: 'Guido',
    apellido: 'Martínez',
    altura: 1.8,
    cantidadDeLibros: 100
}

let objeto4 = {
    nombre: 'Jenny',
    apellido: 'Lee',
    altura: 1.58,
    cantidadDeLibros: 10
}

let objeto5 = {
    nombre: 'David',
    apellido: 'Velasquez',
    altura: 1.7,
    cantidadDeLibros: 30
}

let objeto6 = {
    nombre: 'Juan',
    apellido: 'Benitez',
    altura: 1.85,
    cantidadDeLibros: 70
}

let personas = [ objeto1, objeto2, objeto3, objeto4, objeto5, objeto6 ]

for (persona of personas) {
    console.log( `${persona.nombre} mide ${persona.altura} mts.` )
}

for (let i=0; i<personas.length; i++) {
    console.log( `${personas[i].nombre} mide ${personas[i].altura} mts.` )
}

/*
* Uso de la función filter
*/

const ALTURA_MAXIMA = 1.8

const esAlta = persona => persona.altura >= ALTURA_MAXIMA
var personasAltas = personas.filter( esAlta )
console.log(personas)

/*
* Uso de la función MAP
*/

const pasarAlturasCms = persona => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasAltas2 = personas.map( pasarAlturasCms )
console.log(personasAltas2)
console.log(personas)


const pasarAlturasCms2 = persona => ({
    ... persona,
    altura: persona.altura * 100
})

var personasAltas3 = personas.map( pasarAlturasCms2 )
console.log(personasAltas3)
console.log(personas)

/*
* Uso de la función REDUCE
*/

const obtenerTotalLibros = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalLibros = personas.reduce( obtenerTotalLibros, 0 )
console.log( `Cantidad de libros en total: ${totalLibros}` )

console.log( `Promedio de libros: ${totalLibros/personas.length}` )
