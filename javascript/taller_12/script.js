let persona1 = {
    nombre: 'Ariel',
    apellido: 'Arroyo'
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Florez'
}

let persona3= {
    nombre: 'Ariel',
    apellido: 'Arroyo'
}

console.log( persona1 == persona2 )
console.log( persona1 == persona3 )

let otraPersona = {
    ...persona1
}

console.log( persona1.nombre == otraPersona.nombre && persona1.apellido == otraPersona.apellido )
