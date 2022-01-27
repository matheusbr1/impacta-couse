// Serviçoes REST

const contatos = require('./contatos')

contatos.methods('get', 'post', 'put', 'delete')
contatos.updateOptions({ new: true, runValidators: true });
module.exports = contatos;