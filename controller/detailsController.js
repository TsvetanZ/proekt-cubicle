const { getById } = require('../services/cubeService');
const detailController = require('express'). Router();



detailController.get('/:id', async(req,res) =>{
    const cubeId = req.params.id;
    const cube =  await getById(cubeId);
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
    