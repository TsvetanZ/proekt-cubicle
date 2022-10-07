const { getList, getById } = require('../services/newCube')

const homeController = require('express').Router();  // before we used to call it that:route
//const cubes = require('../models/db.json');

homeController.get('/', (req,res) => {  
    console.log(req.query) // thah we catch from url search "req.query"
    const search = req.query.search || '';
    const from = Number(req.query.from) || 1;
    const to = Number(req.query.to) || 10;
    const cubes = getList(search, from,to);
        res.render('home', {
            cubes,
            search,
            from,
            to
        });
    });

homeController.get('/about', (req,res) => {     
        res.render('about');
    });



    module.exports = homeController;
    