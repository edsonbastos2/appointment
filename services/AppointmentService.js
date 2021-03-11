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

    async GetAll(showfinished) {
        if (showfinished) {
            return await Appo.find();
        } else {
            return await Appo.find({ 'finished': false })
        }
    }

}

module.exports = new AppointmentService();