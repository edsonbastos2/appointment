const mongoose = require('mongoose');


const appointment = new mongoose.Schema({
    nome: String,
    email: String,
    cpf: String,
    description: String,
    data: Date,
    time: String,
    finished: Boolean
})

module.exports = appointment;