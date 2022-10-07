const fs = require('fs');

const fileName = './models/db.json';

const data = JSON.parse(fs.readFileSync(fileName));

async function persist() {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, JSON.stringify(data), (err) => {
            if(err == null) {
                res();
            } else {
                rej(err);
            }
        }) 
    })
}

function getList () {
    return data;
}

function getById(id) {
    return data.find(p => p.id == id)
}

async function create(name, description, difficultyLevel, imageUrl ) {
    const id = 'asdf' + ('0000' + (Math.random()*9999 | 0)).slice(-4);
    data.push({
        id,
        name,
        difficultyLevel,
        description,
        imageUrl
    })
}

module.exports = {
    getList,
    getById,
    create
}
