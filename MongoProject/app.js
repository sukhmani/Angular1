const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport-jwt');
const mongoose = require('mongoose');
const { Console } = require('console');


const app = express();

const port = 3000;

app.listen(port, () =>{
    console.log('Server started on port' + port);
});