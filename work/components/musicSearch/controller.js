// donde va la logica de negocio
const { rejects } = require('assert');
const { resolve } = require('path');
const store= require('./store');

function getSongs(){
    return new Promise((resolve, reject) =>{
        resolve(store.list());
    })
}

// Se quiere buscar artistas por genero

function getSongsFromArtist(artista){
    const fullSearch = { //Tendrá toda la información => por si necesito agregar más propiedades
        artista: artista,
    }
    console.log(fullSearch);
};

function addComment(user, comment){
    return new Promise((resolve, reject) => {
        if (!user || !comment){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullComment = { //Tendrá toda la información => por si necesito agregar más propiedades
            user: user,
            comment: comment,
            date: new Date(),
        }
        
        store.add(fullComment);
        resolve(fullComment);
    });
};

function getComments(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = { //exportamos todas las funciones que querramos
    getSongsFromArtist,
    addComment,
    getSongs,
};