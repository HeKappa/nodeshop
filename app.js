const http = require('http'); // brings http core module 
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')


/// parsing request body middleware ( needs npm install --save body-parser)
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public'))); // We grant read acces to this folder
//any request tha tries to find a file is forwaded to public folder + any path given (i.e css files)

app.use('/admin',adminRoutes); // This automatically considers the routes of adminRoutes , at this point.
// After adding /admin as first argument , it will filter only the routes starting with /admin on path.

app.use(shopRoutes); // This automatically considers the routes of shopRoutes , at this point.


app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000); //express alternative for createServer and server.listen as shown below
//const server = http.createServer(app);    
/* http.createServer( function(req,res){ } );
http.createServer( (req,res)=>{ } );  */
//server.listen(3000); // server begins listening ( default port 80 on localhost)