const express = require('express');
const router = express.Router();

// Load Auth route
router.use('/', require('./auth'));
router.get("/", (req,res) =>{
    res.send('This is the root of the page, you should not reach here!');
});


module.exports = router;