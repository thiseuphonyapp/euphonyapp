// donde va la logica de negocio
const store=require('./store');

// Se quiere buscar artistas por genero

function getSongsFromArtist(artista){
    console.log(artista);
    const fullSearch = {
        artista: artista,
        date: new Date()

    }
};

module.exports = { //exportamos todas las funciones que querramos
    getSongsFromArtist,
};