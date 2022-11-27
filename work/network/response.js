// Este módulo es para responder a las peticiones de manera coherente, siguiendo la misma estru
// Lo bueno de hacerlo así es que si quiero cambiar algo en las respuestas lo puedo hacer desde aquí

const { response } = require("express");

/**
 * @brief This functions allows us to send responses in the same way to all resquests
 * To test in backend!!!!!! Remember to change later
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} message a message to indicate what happened with the request
 * @param {*} status a status that could be provided by us
 */

exports.success = function(req, res, message, status) {
    res.status(status || 200).send({
        error: '', 
        body: message
    });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} message 
 * @param {*} status 
 * @param {*} details 
 */

exports.error = function(req, res, message, status, details){
      console.error('[response error]'+details);
      res.status(status || 500).send({
        error: message, 
        body: ''
    });
}

module.exports = response;
module.exports.success = this.success;
module.exports.error = this.error;

//Important to avoid redundancy when calling functions, Make sure we're calling our dependencies correctly