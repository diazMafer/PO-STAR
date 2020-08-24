const express = require('express')
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = new User({ email, password });
      await user.save();
  
      res.status(201).send('User created');
    } catch (err) {
      return res.status(422).send(err.message);
    }
  });
  
  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(422).send({ error: 'Must provide email and password' });
    }
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  
    try {
      await user.comparePassword(password);
      res.status(200).send('Signin Correctly');
    } catch (err) {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  });
  
module.exports = router;