import express from 'express'
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require("helmet");
import configViewEngine from './config/viewEngine'
import route from './route/index';
import connectDB from './config/connectDB';
require('dotenv').config()
const app = express()
const port = process.env.PORT

connectDB.connect()
configViewEngine(app)

// CORS
app.use(cors())

// HELMET
app.use(helmet());

// BODY PARSER
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// MORGAN
app.use(morgan('tiny'))

// INIT API ROUTE
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})