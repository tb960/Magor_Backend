const express = require('express');
const router = express.Router();

router.get("/", (req,res) =>{
    res.send('This is the root of the page, you should not reach here!');
});


module.exports = router;