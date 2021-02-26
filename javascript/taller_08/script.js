var docente = {
    nombre: 'Fabricio',
    apellido: 'Echeverría',
    peso: 200,
}

const INCREMENTAR_PESO = 5

const aumentarPeso = (persona) => persona.peso += INCREMENTAR_PESO
const disminuirPeso = (persona) => persona.peso -= INCREMENTAR_PESO

const comerMucho = () => Math.random() < 0.2
const realizarDeporte = () => Math.random() < 0.7

console.log( `Al inicio del año el docente ${docente.nombre} ${docente.apellido} pesa ${docente.peso} lbrs.` )

const META = docente.peso - 20

var dias = 0

while (docente.peso > META) {
    if (comerMucho()) {
        aumentarPeso( docente )
    }
    if (realizarDeporte()) {
        disminuirPeso( docente )
    }
    dias += 1
    console.log( `Dia: ${dias}.` )
}

console.log( `Al final del año el docente ${docente.nombre} ${docente.apellido} pesa ${docente.peso} lbrs y bajó de peso en ${dias} días.` )
