async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log( `Hola soy ${nombre}.` )
            resolve( nombre )
        }, 1000)
    })
}

async function adios( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            console.log( `¡Adiós ${nombre}!` )
            resolve(nombre)    
        }, 1000)
    })
}

async function hablar( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log( 'Bla bla bla bla bla...' )
            resolve( nombre )
        }, 1000)
    })

}

async function main() {
    console.log( 'Inicializando una conversación.' )

    let nombre = await hola( 'Guillermo' )
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios( nombre )

    console.log( 'Finalizando conversación.' )
}

main()