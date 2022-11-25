// Lo bueno de hacerlo así es que si quiero cambiar algo en las respuestas lo puedo hacer desde aquí

const { response } = require("express");

exports.success = function(req, res, message, status) {
    res.status(status || 200).send({
        error: '', 
        body: message
    });
}


exports.error = function(req, res, message, status, details){
      console.error('[response error]'+details);
      res.status(status || 500).send({
        error: message, 
        body: ''
    });
}

module.exports = response;