const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appointment = require('./services/AppointmentService');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/agendamento', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/agendamento', (req, res) => {
    res.render('agendamento')
})

app.post('/create', async (req, res) => {

    const status = await appointment.Create(
        req.body.nome,
        req.body.email,
        req.body.cpf,
        req.body.description,
        req.body.data,
        req.body.time
    )

    if (status) {
        res.redirect('/')
    } else {
        res.send('Ocorreu um error !')
    }
})


app.listen(3002, () => console.log('Servidor UP!'));