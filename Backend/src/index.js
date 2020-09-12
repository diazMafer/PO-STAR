require('./models/User')
require('./models/Chapter')
require('./models/Section')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
<<<<<<< Updated upstream
const chaptersRoutes = require('./routes/chaptersRoutes')
const sectionsRoutes = require('./routes/sectionsRoutes')
=======

>>>>>>> Stashed changes

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(authRoutes)
app.use(chaptersRoutes)
app.use(sectionsRoutes)

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.39zbm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
  });
mongoose.connection.on('error', err => {
    console.error('Error connecting to mongo', err);
  });

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})