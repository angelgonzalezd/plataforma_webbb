var nombre = 'Guillermo'
var apellido = 'Pizarro'

function mostrarNombreApellido() {
    console.log(`${nombre} ${apellido}`)
}

mostrarNombreApellido()

function mostrarUniversidad() {
    let universidad = 'Universidad Politécnica Salesiana'

    console.log(`${universidad}`)
}

mostrarUniversidad()

console.log(`${apellido}`)


// Uso de CONST
const MAXIMO = 10
console.log(`${MAXIMO}`)

// Uso indebido de CONST
MAXIMO += 10

// Uso indebido de la variable local universidad
console.log(`${universidad}`)
