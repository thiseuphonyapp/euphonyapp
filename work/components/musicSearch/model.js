const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Artistas = new Schema({
    Artista: { 
        type: string,
        required: true,
    },
    Genero: string,
    Biografia: string,

})

const mySchema = new Schema({
    category: String,
    search: {
        type: String,
        required: true,
    }
});

const Canciones = new Schema({
    id: {
        type: Schema.ObjectId,
        ref: '_id',
    },
    Nombre_cancion: {
        type: String,
        required: true
    },
    Genero: String,
    Duracion: String,
    Album: {
        type: Schema.ObjectId,
        ref: 'Albumes',
    },
    Autores: {
        type: Schema.ObjectId,
        ref: 'Artistas',
    },
    colaboraciones: String
})

const model = mongoose.model('Canciones', Canciones);

module.exports= model;