const mongoose = require('mongoose') 

const resultSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    part: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }
});

resultSchema.pre('save', function(next) {
    const result = this;
    next();   
});
  
mongoose.model('Result', resultSchema);
