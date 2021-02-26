const use = require('./network')
const storage = require('./storage')

function addinstitucion(nombre) {
    return new Promise( (resolve, reject) => {
        if (!nombre) {
            console.error('[MensajeControlado] No hay nombre de la institucion Educativa.')
            return reject('No existe institucion.')
        }
        // Se crea un objeto Institucion
        const fullinstitucion = {
            nombre: nombre,
            representante_Legal:id_presentante_legal,
            fecha_creacion: new Date(),
            
        }
        console.log( fullinstitucion )
        storage.add( fullinstitucion )
        return resolve( fullinstitucion )
    })
}


function updateinstitucion(id_institucion, nombre) {
    return new Promise( async (resolve, reject) => {
        if (!id_institucion) {
            reject(  'No existe ID.' )
        }
        const fullinstitucion = {
            nombre: nombre,
           
            
        }
        const result = await storage.update( id_institucion, fullinstitucion )
        resolve( result )
    } )
}


function deleteinstitucion(id_institucion) {
    return new Promise( (resolve, reject) => {
        if (!id_institucion) {
            reject('No existe institucion.')
        }
        storage.remove(id_institucion)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    } )
}

function getinstitucion() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}

module.exports = {
    addinstitucion,
    getinstitucion,
    updateinstitucion,
    deleteinstitucion,

}