const { getById } = require('../services/newCube');
const detailController = require('express'). Router();



detailController.get('/:id', (req,res) =>{
    const cubeId = req.params.id;
    console.log(cubeId)
    const cube = getById(cubeId);
    console.log(cube)

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
    