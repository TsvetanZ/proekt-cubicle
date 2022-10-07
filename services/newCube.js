const fs = require('fs');

const fileName = './models/db.json';

const data = JSON.parse(fs.readFileSync(fileName));

async function persist() {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
            if(err == null) {
                res();
            } else {
                rej(err);
            }
        }) 
    })
}

function getList (search, from,to) {
    return data
    .filter(r => r.name.toLowerCase().includes(search.toLowerCase()))
    .filter(r => r.difficultyLevel >= from && r.difficultyLevel <= to);
}

function getById(id) {
    return data.find(p => p.id == id)
}


async function create(cubeData) {
    const cube = {
        id: getId(),
        name: cubeData.name,
        difficultyLevel:cubeData.difficultyLevel,
        description: cubeData.descriptions,
        imageUrl: cubeData.imageUrl
    }
    const missing = Object.entries(cube).filter(([k,v]) => !v)
    if(missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'));
    }
    data.push(cube);
    await persist();
    return cube;
}




function getId() {
    return 'asdf' + ('0000' + (Math.random()*9999 | 0)).slice(-4);
 }

module.exports = {
    getList,
    getById,
    create
}
