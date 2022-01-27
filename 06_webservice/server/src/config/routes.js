const express = require('express');
module.exports = function (server) {
    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/ws', router);
    //rotas relacionadas às operações com econtatos
    const contatos = require('../ws/contatos/contatosService');
    contatos.register(router, '/contatos');
};