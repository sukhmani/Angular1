const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport-jwt');
const mongoose = require('mongoose');

const config = require('./config/database');

//connected to the database
mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log('connected to a database ' + config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database err: '+err)
});

const app = express();
const users = require('./routes/users');

//port number
const port = 3000;

// CORS middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());


app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');

});

//Start server
app.listen(port, () =>{
    console.log('Server started on port' + port);
});