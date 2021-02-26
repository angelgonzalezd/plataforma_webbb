var contador = 0

const llueve = () => Math.random() < 0.9

do {
    contador++
} while( !llueve() )

if (contador == 1) {
    console.log( `Llovió una vez.` )
} else {
    console.log( `Llovió ${contador} veces.` )
}