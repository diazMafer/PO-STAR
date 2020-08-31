const mongoose = require('mongoose') 
const bcrypt = require('bcrypt');

const capitulosSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    parte: {
        type: Number,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

capitulosSchema.pre('save', function(next) {
    const capitulo = this;
    next();   
});
  
mongoose.model('Capitulos', capitulosSchema);
