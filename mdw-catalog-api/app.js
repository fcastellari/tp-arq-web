const express = require('express');
const bodyParser = require('body-parser');
//const helmet = require('helmet');
const morgan = require('morgan');
const serviceRoutes = require('./app/routes/service.routes');
const ownerRoutes = require('./app/routes/owner.routes');
// create express app
const app = express();
//app.use(helmet());
const router = express.Router();

// DB
// Config
const dbConfig = require('./config/db/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("Succesfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(router);

//define a simple route
app.get('/', (req, res, next) => {
    res.json({ "message": "Bienvenido - Integracion Regional" });
});

//Routes
app.use('/mdw', require('./app/routes/index.routes'));

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
