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
    
})

const model = mongoose.model('Canciones', Canciones);

module.exports= model;