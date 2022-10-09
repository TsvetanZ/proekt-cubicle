const Cube = require('../models/Cube');

function getList (search, from,to) {
    return  Cube.find({}).lean();
}

function getById(id) {
    return Cube.findById(id).lean();  // срещу него е съкратения запис Cube.find({_id: id})
    
}


async function create(cubeData) {
    const cube = {
        name: cubeData.name,
        imageUrl: cubeData.imageUrl,
        difficultyLevel:cubeData.difficultyLevel,
        descriptions: cubeData.descriptions,
       
    }
    const missing = Object.entries(cube).filter(([k,s]) => !s)
    if(missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'));
    }
    const result = await Cube.create(cube)//data.push(cube);
    //await persist();
    return result;
} 


module.exports = {
    getList,
    getById,
    create
}
