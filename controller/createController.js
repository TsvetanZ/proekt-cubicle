const createController = require('express').Router();

createController.get('/', (req,res) =>{
    res.render('create', {
        title: 'Create New Cube'
    });
})

createController.post('/create', async(req, res) =>{
    const cube = req.body; // take data from aplication
    if(cube.name.length ==0) {
       return res.status(400).send('Invalid request');

    }
    await create()
})

module.exports = createController;