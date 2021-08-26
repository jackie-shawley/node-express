const express = require('express');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();  //returns an express server application available by using the variable app

app.use(morgan('dev'));  //use 'dev' to get more info printed to the console

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}`)
});