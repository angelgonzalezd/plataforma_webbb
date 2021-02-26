var articulos = [
    { nombre: 'Bicicleta', costo: 200 },
    { nombre: 'TV Sony', costo: 1200 },
    { nombre: 'Laptop DELL', costo: 2000 },
    { nombre: 'Audífonos SONY', costo: 350 },
    { nombre: 'Mouse Inalámbrico Kensington', costo: 60 },
    { nombre: 'Tablet', costo: 400 },
    { nombre: 'Cuaderno', costo: 2 },
    { nombre: 'How to Program in Javascript', costo: 100 },
]

articulos.forEach( function(articulo) {
    console.log( articulo.nombre )
} )

var articulosBaratos = articulos.some( function(articulo) {
    return articulo.costo <= 500
} )

var articulosFiltrados = articulos.filter( function(articulo) {
    return articulo.costo <= 100
} )

var nombreArticulos = articulos.map( function(articulo) {
    return articulo.nombre
} )

var encuentraArticulo = articulos.find( function(articulo) {
    return articulo.nombre = 'Laptop DELL'
} )

console.log('================Después de procesamiento.================')

articulos.forEach( function(articulo) {
    console.log( articulo.nombre )
} )