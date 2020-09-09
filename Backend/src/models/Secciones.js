const mongoose = require('mongoose') 

const seccionesSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    capitulos: {
        type: Array,
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

seccionesSchema.pre('save', function(next) {
    const seccion = this;
    next();   
});
  
mongoose.model('Capitulos', seccionesSchema);
