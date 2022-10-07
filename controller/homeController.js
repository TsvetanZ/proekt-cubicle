const { getList, getById } = require('../services/newCube')

const homeController = require('express').Router();  // before we used to call it that:route
//const cubes = require('../models/db.json');

homeController.get('/', (req,res) => {  
    const cubes = getList();
        res.render('home', {cubes});
    });

homeController.get('/about', (req,res) => {     
        res.render('about');
    });



    module.exports = homeController;
    