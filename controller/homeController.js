const homeController = require('express').Router();  // before we used to call it that:route

homeController.get('/', (req,res) => {     
        res.render('home');
    });

homeController.get('/about', (req,res) => {     
        res.render('about');
    });

    module.exports = homeController;
    