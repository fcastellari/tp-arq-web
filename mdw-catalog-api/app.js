const express = require('express');
const bodyParser = require('body-parser');
const domainRoutes = require('./app/routes/domain.routes');
const serviceRoutes = require('./app/routes/service.routes');
const ownerRoutes = require('./app/routes/owner.routes');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// db config
const dbConfig = require('./config/db/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to db
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Succesfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//define a simple route
app.get('/', (req, res, next) => {
    res.json({ "message": "Bienvenido - Integracion Regional" });
});


//Routes
require ('./app/routes/service.routes') (app);
require ('./app/routes/domain.routes') (app);
require ('./app/routes/owner.routes') (app);
//app.use('/mdw/domains', domainRoutes)
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
