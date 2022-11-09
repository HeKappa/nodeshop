const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path'); // now rootDir holds the directory of admin.js

/// route handling middlewares
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // __dirname holds the absolute path of this project directory ( this way works regardless of OS )
}); // We get here with get request as we arrive , then a post request is send on action ( is a path ) and we get to the post middleware below
    // Beware of pathing , check main file in case you've grouped paths based on file ( i.e. admin.js methods all have /admin in front)


// both methods here have the same path. This works only if the methods are different.
// after removing path from methods , requests with certain path are filtered in the main file (i.e app.js)

router.post('/add-product', (req, res) => {  // app.post is the same as app.use but works for post requests only.
    console.log(req.body);            //  The same logic applies for get requests filter ( app.get).
    res.redirect('/');
});




module.exports = router;