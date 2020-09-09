const mongoose = require('mongoose') 

const sectionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    part: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    chapter: {
        type: Number,
        required: true
    }
});
  
mongoose.model('Section', sectionsSchema);
