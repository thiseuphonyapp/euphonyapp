const mongoose = require('mongoose')

// mongodb+srv://th3gent:jMoBL25LI0RjFq40@cluster0.i1k3l9y.mongodb.net/fake_euphony

db.Promise = global.Promise;


db.connect('mongodb+srv://th3gent:jMoBL25LI0RjFq40@cluster0.i1k3l9y.mongodb.net/fake_euphony', {
    useNewUrlParser: true,
})

console.log('[DB] Conectada con exito')

const Schema = mongoose.Schema;

const Artistas = new Schema({
    Artista: { 
        type: string,
        required: true,
    },
    Genero: string,
    Biografia: string,

})

const model = mongoose.model('Artistas', Artistas)

const mySchema = new Schema({
    category: String,
    search: {
        type: String,
        required: true,
    }
});

module.exports= model;