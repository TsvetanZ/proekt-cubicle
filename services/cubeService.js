const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

function getList (search, from,to) {
    return  Cube.find({}).lean();
}

function getById(id) {
    return Cube.findById(id);  // срещу него е съкратения запис Cube.find({_id: id}) lean() e za wzemane ot baza danni(DB)
}

function getByIdDetails (id) {
    return Cube.findById(id).populate('accessories').lean();

}


async function create(cubeData, ownerId) {
    const cube = {
        name: cubeData.name,
        imageUrl: cubeData.imageUrl,
        difficultyLevel:cubeData.difficultyLevel,
        descriptions: cubeData.description,
        owner: ownerId
       
    }
    const missing = Object.entries(cube).filter(([k,s]) => !s)
    if(missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'));
    }
    const result = await Cube.create(cube)//data.push(cube);
    //await persist();
    return result;
} 

async function attachAccessory (cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId)
    cube.accessories.push(accessory);
    accessory.cubes.push(cube)

    await cube.save();
    await accessory.save();

    return cube;
   
}


module.exports = {
    getList,
    getById,
    create,
    attachAccessory,
    getByIdDetails
}
