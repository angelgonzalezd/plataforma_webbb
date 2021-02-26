var miAuto = {
    marca: "Ford",
    modelo: "EcoSport",
    anio: 2020,
    detalle_auto: function() {
        console.log( "Auto: " + this.marca + " Año: " + this.anio )
    }
}

miAuto.marca

function auto(marca, modelo, anio) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
}

var autoNuevo = new auto('Tesla', 'Modelo 3', 2020)
autoNuevo