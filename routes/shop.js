const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path'); // now rootDir holds the directory of admin.js

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // __dirname holds the absolute path of this project directory ( this way works regardless of OS )
    //res.send('<h1>Ta legame</h1>');
    //next();  // From to bottom , next allows to continue to the next middleware below
});



module.exports = router;