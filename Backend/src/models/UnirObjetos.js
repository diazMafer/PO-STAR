const mongoose = require('mongoose') 
const bcrypt = require('bcrypt');

const unirObjetosSchema = new mongoose.Schema({
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

unirObjetosSchema.pre('save', function(next) {
    const unirObjetos = this;
    next();   
});
  
mongoose.model('Capitulos', unirObjetosSchema);
