
const accessoryController = require('express'). Router();

const {createAccessory } = require('../services/accessoryService');


accessoryController.get('/', async(req,res) =>{
    res.render('createAccessory', {
        title: 'Create Accessory'
    });
})


accessoryController.post('/', async(req, res) =>{
    console.log(req.body)
    try {
        //await createAccessory(req.body);
        await createAccessory(req.body.name, req.body.imageUrl, req.body.description);
        res.redirect('/')
    } catch (err) {
        res.render('createAccessory', {
            title:"Create New Accessory",
            error: err.message.split('\n'),
        });
         
    }
    

    //if(cube.name.length == 0) {
    //   return res.status(400).send('Invalid request');
//
    //}
    //await create()
})
   


    module.exports = accessoryController;
    