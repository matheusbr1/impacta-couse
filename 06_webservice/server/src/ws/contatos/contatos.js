//criando o schema
const restful = require('node-restful');
const mongoose = restful.mongoose; //referência ao mongoose do restful

//definindo o schema contato
const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    sexo: { type: String, uppercase: true, enum: ['MASCULINO', 'FEMININO'] },
})

module.exports = restful.model('contato', contatoSchema)