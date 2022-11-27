const express = require('express');
const search = require('../components/musicSearch/network');
const { socket } = require('./response');


const routes = function(index){
    index.use('/search', search);
}

module.exports = routes; 