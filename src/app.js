require('dotenv').config();
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const indexRoutes = require('./routes/index.routes');

const app = express();

app
    .use(express.static('dist'))
    .use(morgan('dev'))
    .use(cookieParser())
    .use(methodOverride('_method'))
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    //middlewares propios

    //Rutas
    .use('/', indexRoutes)

    .get('/', (req, res) => {
    res.render('pages/home/index')
    })

    //Configuracion de sesion
    .use(session({
        secret: 'FlashFood',
        resave: true, 
        saveUninitialized: true
    }))

module.exports = app