function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log( `Hola soy ${nombre}.` )
            resolve( nombre )
        }, 1000)    
    })
}

function adios( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            console.log( `¡Adiós ${nombre}!` )
            resolve(nombre)    
        }, 1000)
    })
}

function hablar( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log( `${nombre} dice bla bla bla bla bla...` )
            resolve( nombre )
        }, 1000)
    })

}

console.log( 'Inicializando una conversación.' )
hola('Guillermo')
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
    .then( (nombre) => { console.log( 'Finalizando la conversación...' ) } )
    .catch( (error) => {
        console.error( error )
    } )