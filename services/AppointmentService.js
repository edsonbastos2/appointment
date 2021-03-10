const appointment = require('../model/appointment');
const mongoose = require('mongoose');

const Appo = mongoose.model('Appointment', appointment)

class AppointmentService {
    async Create(nome, email, cpf, description, data, time) {
        const newAppo = new Appo({
            nome,
            email,
            cpf,
            description,
            data,
            time,
            finished: false
        })

        try {
            await newAppo.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = new AppointmentService();