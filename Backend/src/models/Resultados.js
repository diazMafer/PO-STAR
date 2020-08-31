const mongoose = require('mongoose') 
const bcrypt = require('bcrypt');

const resultadosSchema = new mongoose.Schema({
    parte: {
        type: String,
        required: true
    },
    capitulo: {
        type: String,
        required: true
    },
    seccion: {
        type: String,
        required: true
    },
    resultado: {
        type: String,
        required: true
    }
});

resultadosSchema.pre('save', function(next) {
    const resultado = this;
    next();   
});
  
mongoose.model('Resultados', resultadosSchema);
