const createController = require('express').Router();

const {create } = require('../services/cubeService')

createController.get('/', (req,res) =>{
    res.render('create', {
        title: 'Create New Cube'
    });
})

createController.post('/', async(req, res) =>{
    try {
        const result = await create(req.body, req.user._id);
         res.redirect('/details/'+ result._id);
    } catch (err) {
        res.render('create', {
            title:"Error",
            error: err.message.split('\n')
        });
         
    }
   

    //if(cube.name.length == 0) {
    //   return res.status(400).send('Invalid request');
//
    //}
    //await create()
})

module.exports = createController;