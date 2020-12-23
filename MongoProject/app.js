const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport-jwt');
const mongoose = require('mongoose');
const { Console } = require('console');


const app = express();

const port = 3000;

// CORS middleware
app.use(cors());

// Body Parser Middleware
app.use (bodyparser.json());

//Index Route
app.get('/', (req, res)=> {
    res.send('Invalid Endpoint');

});

//Start server
app.listen(port, () =>{
    console.log('Server started on port' + port);
});