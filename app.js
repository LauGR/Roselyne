// SET UP GET ALL THE TOOLS WE NEED 
const http = require('http');
const routes = require('./app/routes')
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const dotEnv = require('dotenv').load();
const nodemailer = require("nodemailer");
const server = http.createServer(app);




// Set up the all routes 
const actions = require('./app/routes/actions');
const biographie = require('./app/routes/biographie');
const contact = require('./app/routes/contact');
const concert = require('./app/routes/concert');
const discographie = require('./app/routes/discographie');
const error404 = require('./app/routes/error404');
const evenements = require('./app/routes/evenements');
const index = require('./app/routes/index');
const seancephotos = require('./app/routes/seancephotos');
const decembre155 = require('./app/routes/51215');
const septembre201614 = require('./app/routes/140916');
const avril20169 = require('./app/routes/90416');
const mai20174 = require('./app/routes/40517');
const septembre20172 = require('./app/routes/20917');
const mai201713 = require('./app/routes/130517');
const septembre201722 = require('./app/routes/220917');
const temoignage = require('./app/routes/temoignage')



// use  your engine template and configure the folder

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

// Set up our express application
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // log every request to the console
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // expression static for bootstrap ( in node_modules)
app.use(express.static(__dirname + '/public')); // search all ressources 
app.use(expressLayouts);

// routes
actions(app);
biographie(app);
contact(app);
concert(app);
discographie(app);
error404(app);
evenements(app);
index(app);
seancephotos(app);
decembre155(app);
septembre201614(app);
avril20169(app);
mai20174(app);
mai201713(app);
septembre201722(app);
septembre20172(app);
temoignage(app);

server.listen(port);

module.exports = app;