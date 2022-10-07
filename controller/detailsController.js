const { getById } = require('../services/newCube');
const detailController = require('express'). Router();



detailController.get('/:id', (req,res) =>{
    const cubeId = req.params.id;
    const cube = getById(cubeId);

    if(cube) {
        res.render('details', { 
            title: 'Cube details',
            cube
        });
    } else{
        res.render('cubeNotFound')
    }
})    

    module.exports = detailController;
    