function heredaDe( prototipoHijo, prototipoPadre ) {
    let fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido}.` )
}

// Este tipo de función flecha en Javascript puro no funciona.
Persona.prototype.saludar2 = (nombre, apellido) => {
    console.log( `Hola soy ${this.nombre} ${this.apellido}.` )
}

Persona.prototype.soyAlto = function() {
    if (this.altura > 1.7) {
        console.log(`Mi altura es ${this.altura} y soy Alto.`)
    } else {
        console.log(`Mi altura es ${this.altura} y no soy Alto.`)
    }
}

function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Deportista.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido}, y soy deportista.` )
}

heredaDe(Deportista, Persona)

var objeto1 = new Persona('Guillermo', 'Pizarro', 1.65)
objeto1.saludar()
objeto1.saludar2()

var objeto2 =new Deportista('Francisco', 'Andrade')
objeto2.saludar()
objeto2.altura = 1.8
objeto2.soyAlto()

