// donde va la logica de negocio
const store= require('./store');

// Se quiere buscar artistas por genero

function getSongsFromArtist(artista){
    const fullSearch = { //Tendrá toda la información => por si necesito agregar más propiedades
        artista: artista,
    }
    console.log(fullSearch);
};

function addComment(user, comment){

    const fullComment = { //Tendrá toda la información => por si necesito agregar más propiedades
        user: user,
        comment: comment,
        date: new Date(),
    }
    
    console.log(fullComment);
};

module.exports = { //exportamos todas las funciones que querramos
    getSongsFromArtist,
    addComment,
};