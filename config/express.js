const express = require('express');
const hbs = require ('express-handlebars').create({
    extname: 'hbs'
});

const defaultTitle = require('../middlewares/defaultTitle');


module.exports = (app) => {

    app.engine('hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({extended: true})); //this is post zaqwki da parse(obrabotim) data (dani). това middleware
    app.use('/static', express.static('static')); // whith this where to be take static data(css, img and  etc.) and end  where from folder

    app.use(defaultTitle('Proekt Cube')); // по този начин съсздваме default title;
}
