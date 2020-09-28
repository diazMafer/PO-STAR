const express = require('express')
const mongoose = require('mongoose');
const Result = mongoose.model('Result');

const router = express.Router();
  
router.post('/results', async (req, res) => {
    const { username } = req.body;
    const sections = await Result.find({ username: username});
    if (sections.length === 0) {
      return res.status(404).send({ error: 'Not found' });
    }
    return res.status(200).send({results: sections});
});

router.put('/results', async (req, res) => {
  const { username, part, chapter, section, result } = req.body;
    try {
      const result2 = new Result({ username, part, chapter, section, result });
      await result2.save();
      res.status(201).send('Result created');
    } catch (err) {
      return res.status(422).send(err.message);
    }
});

module.exports = router;