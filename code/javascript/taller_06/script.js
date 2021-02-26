var investigador_01 = {
    nombre: 'Abdón',
    apellido: 'Calderón',
    afiliacion: 'Universidad Politécnica de Madrid',
    correo_electronico: 'acalderon@upm.edu.es',
    edad: 22,
}

var investigador_02 = {
    nombre: 'Angie',
    apellido: 'Lara',
    afiliacion: 'Universidad de Saarland',
    correo_electronico: 'alara@saarland.edu.ge',
    edad: 22,
}

function imprimirNombreMayusculas(objeto) {
    console.log( `${objeto.nombre.toUpperCase()} ${objeto.apellido}` )
}

imprimirNombreMayusculas( investigador_01 )
imprimirNombreMayusculas( investigador_02 )

function imprimirApellidoMinusculas( objeto ) {
    var { apellido } = objeto
    console.log( `${objeto.nombre} ${apellido.toLowerCase()}` )
}

imprimirApellidoMinusculas( investigador_01 )
imprimirApellidoMinusculas( { nombre: 'Guillermo', apellido: 'Pizarro' } )
imprimirNombreMayusculas( { nombre: 'Guillermo', apellido: 'Pizarro' } )

// Función paso por referencia
function cumpleanios_ref( objeto ) {
    objeto.edad += 1
}

console.log( "====== Paso por Referencia" )
console.log( investigador_01.edad )
cumpleanios_ref( investigador_01 )
console.log( investigador_01.edad )

function cumpleanios_val( edad ) {
    console.log(edad += 1)
}

console.log( "====== Paso por Valor" )
console.log( investigador_02.edad )
cumpleanios_val( investigador_02.edad )
console.log( investigador_02.edad )

// Función de paso por valor (objetos)
var cumpleanios_val2 = function ( objeto ) {
    return {
        ... objeto,
        edad: objeto.edad + 1
    }
}

console.log( "====== Paso por Valor (utilizando objetos)" )
console.log( investigador_02.edad )
objeto = cumpleanios_val2( investigador_02 )
console.log( investigador_02.edad )
console.log( objeto.edad )
