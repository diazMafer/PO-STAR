const mongoose = require('mongoose') 

const chapterSchema = new mongoose.Schema({
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
  }
});

mongoose.model('Chapter', chapterSchema);
