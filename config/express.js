const express = require('express');
const hbs = require ('express-handlebars').create({
    extname: 'hbs'
});

const cookieParser = require('cookie-parser');
const defaultTitle = require('../middlewares/defaultTitle');
const auth = require('../middlewares/auth');
const userNav = require('../middlewares/userNav');

const jwtSecret = '9s332nhjkjhgo';

module.exports = (app) => {

    app.engine('hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({extended: true})); //this is post zaqwki da parse(obrabotim) data (dani). това middleware
    app.use('/static', express.static('static')); // whith this where to be take static data(css, img and  etc.) and end  where from folder
    app.use(cookieParser());
    app.use(auth(jwtSecret));
    app.use(userNav());

    app.use(defaultTitle('Proekt Cube')); // по този начин съсздваме default title;
}
