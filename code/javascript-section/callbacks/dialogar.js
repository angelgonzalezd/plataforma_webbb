function hola(nombre, fn_cb) {
    setTimeout(function () {
        console.log( `Hola soy ${nombre}.` )
        fn_cb( nombre )
    }, 1000)
}

function responder1( nombre ) {
    console.log( `Gusto en conocerte, ${nombre}.` )
    console.log( 'Finalizando la conversación...' )
}

function responder2( nombre ) {
    console.log( `Ah ya... ${nombre}. Nos vemos.` )
    console.log( 'Finalizando la conversación...' )
}

function adios( nombre ) {
    setTimeout( function() {
        console.log( `¡Adiós ${nombre}!` )
        console.log( 'Finalizando la conversación...' )
    }, 1000)
}

function hablar( fn_cb ) {
    setTimeout(function() {
        console.log( 'Bla bla bla bla bla...' )
        fn_cb()
    }, 1000)
}

function dialogar(nombre, num_veces) {
    if (num_veces > 0) {
        hablar( function() {
            dialogar(nombre, --num_veces)
        } )
    } else {
        adios( nombre )
    }
}

function dialogar2(nombre, num_veces) {
    if (num_veces > 0) {
        console.log( 'Bla bla bla bla bla...' )
        dialogar2(nombre, --num_veces)
    } else {
        console.log( `¡Adiós ${nombre}!` )
        console.log( 'Finalizando la conversación...' )
    }
}

console.log( 'Inicializando una conversación.' )
hola('Guillermo', function(nombre) {
    dialogar( nombre, 4 )
})