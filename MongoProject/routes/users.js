const express = require ('express');
const router = express.Router();

// Register
router.get('/register', ( req, res, next ) => {
    res.send('REGISTER');
});

//Authenticate
router.post('/Authenticate', (req,res, next )=>{
    res.send('Authenticate');
});

//Profile
router.get('/profile', (req, res, next) =>{
res.send('Profile');
});

//Validate
router.get('/validate',(req, res, next) => {
    res.send('validate');
})

module.exports = router;