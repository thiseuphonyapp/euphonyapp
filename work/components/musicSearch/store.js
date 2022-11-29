const { rejects } = require("assert");
const { resolve } = require("path");

const list = []
const songs = ['Cancion1', 'Cancion2'];

function addComment(comment){
    list.push(comment)
}

function getComment(comment){
    return list;
}

function getSongs(artist){
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