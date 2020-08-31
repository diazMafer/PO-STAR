const mongoose = require('mongoose') 
const bcrypt = require('bcrypt');

const scabbleSchema = new mongoose.Schema({
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

scabbleSchema.pre('save', function(next) {
    const scrabble = this;
    next();   
});
  
mongoose.model('Capitulos', scabbleSchema);
