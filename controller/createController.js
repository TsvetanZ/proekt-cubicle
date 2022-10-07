const createController = require('express').Router();

const {create } = require('../services/newCube')

createController.get('/', (req,res) =>{
    res.render('create', {
        title: 'Create New Cube'
    });
})

createController.post('/', async(req, res) =>{
    try {
        const result = await create(req.body);
         res.redirect('/details/'+ result.id);
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