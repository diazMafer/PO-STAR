const mongoose = require('mongoose') 
const bcrypt = require('bcrypt');

const seleccionMultipleSchema = new mongoose.Schema({
    pregunta: {
        type: String,
        required: true
    },
    capitulo: {
        type: Number,
        required: true
    },
    seccion: {
        type: Number,
        required: true
    },
    parte: {
        type: Number,
        required: true
    },
    respuesta: {
        type: String,
        required: true
    }
});

seleccionMultipleSchema.pre('save', function(next) {
    const seleccionMultiple = this;
    next();   
});
  
mongoose.model('Capitulos', seleccionMultipleSchema);
