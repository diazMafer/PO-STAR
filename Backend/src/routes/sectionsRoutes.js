const express = require('express')
const mongoose = require('mongoose');
const Section = mongoose.model('Section');

const router = express.Router();
  
router.post('/sections', async (req, res) => {
    const { chapter, part } = req.body;
    const sections = await Section.find({ chapter: chapter, part: part});
    if (sections.length === 0) {
      return res.status(404).send({ error: 'Not found' });
    }
    return res.status(200).send({sections: sections});
});

module.exports = router;