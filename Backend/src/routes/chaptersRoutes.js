const express = require('express')
const mongoose = require('mongoose');
const Chapter = mongoose.model('Chapter');

const router = express.Router();
  
router.get('/chapters', async (req, res) => {
    const chapters = await Chapter.find();
    if (!chapters) {
      return res.status(422).send({ error: 'Not found' });
    }
    
    return res.status(200).send({message: 'Signin Correctly', chapters: chapters});
});
/*
  router.get('/chapter', async (req, res) => {
    return res.status(200).send('hola');
  });
*/
module.exports = router;