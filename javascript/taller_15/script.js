class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura    
    }

    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido}.` )
        
        if(fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto() {
        if (this.altura > 1.7) {
            console.log(`Mi altura es ${this.altura} y soy Alto.`)
        } else {
            console.log(`Mi altura es ${this.altura} y no soy Alto.`)
        }
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido}, y soy deportista.` )

        if(fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDeportista) {
    console.log( `Hola ${nombre} ${apellido}.` )
    if (esDeportista) {
        console.log( 'No sabía que eras deportista.' )
    }
}

const responderSaludo2 = (nombre, apellido) => {
    console.log( `Hola ${nombre} ${apellido}.` )
}

objeto1 = new Persona('Jaime', 'Barriga', 1.6)
objeto1.saludar( responderSaludo )
objeto1.soyAlto()

objeto2 = new Deportista('Lola', 'Guambuguete')
objeto2.saludar( responderSaludo2 )
objeto2.altura = 1.72
objeto2.soyAlto()