const express = require('express')
const mongoose = require('mongoose');
const Chapter = mongoose.model('Chapter');

const router = express.Router();
  
router.get('/chapters', async (req, res) => {
    const chapters = await Chapter.find();
    if (chapters.length === 0) {
      return res.status(404).send({ error: 'Not found' });
    }
    return res.status(200).send({chapters: chapters});
});

module.exports = router;