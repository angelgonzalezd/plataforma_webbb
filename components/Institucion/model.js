const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    representante_legal: {
        type: Schema.ObjectId,
        ref: 'representante_legal',
    },
    fecha_creacion: Date,

})

const model = mongoose.model('institucion', mySchema)
module.exports = model