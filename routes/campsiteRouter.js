const express = require('express');
const campsiteRouter = express.Router(); //this gives us an object named campsiteRouter that can be used with Express routing methods

campsiteRouter.route('/') //this root path is defined in server.js in the app.use('/campsites', campsiteRouter)
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites')
})
.delete((req, res) => {
    res.end('Deleting all campsites');
}); //the semicolon signals the end of a statement, so this is the only one we will use


module.exports = campsiteRouter;