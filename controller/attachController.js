const { getAllAccessories, getAllAvailable } = require('../services/accessoryService');
const { getById, attachAccessory } = require('../services/cubeService');
const attachController = require('express'). Router();



attachController.get('/:id/attach', async(req, res) =>{
    const cubeId = req.params.id;
    const cube =  await getById(cubeId).lean();
    console.log(cube.accessories);
    const accessories = await getAllAvailable(cube.accessories).lean();
 

        res.render('attachAccessory', { 
            title: 'Cube new Attach Accessory',
            cube,
            accessories
        });
}); 

attachController.post('/:id/attach', async(req, res) =>{
    const accessoryId = req.body.accessory;
    await attachAccessory(req.params.id, accessoryId) 
    res.redirect(`/details/${req.params.id}`)
    
})
  

    module.exports = attachController;
    