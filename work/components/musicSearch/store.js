const { rejects } = require("assert");
const { resolve } = require("path");

const list = []
const songs = ['Cancion1', 'Cancion2'];

const db = require('mongoose');
const { fileLoader } = require("ejs");

db.connect('mongodb+srv://th3gent:jMoBL25LI0RjFq40@cluster0.i1k3l9y.mongodb.net/fake_euphony', {
    useNewUrlParser: true,
})

console.log('[Store - db] Conectada con exito')

function addComment(comment){
    const myComment = new db.Model(comment);
    myComment.save();
}

function getComment(comment){
    return list;
}

async function getSongs(filterSongs){
    let filter = {}; //filtro por defecto
    if (filterSongs !== null){
        filter = { Nombre_cancion: filterSongs };
    }
    const songs = await Model.find(filter);
    return songs;
}


module.exports={

    list: getSongs,

    //add: addComment,
    //list: getComment,
    // get
    // update
    // delete
}