const Accessory = require('../models/Accessory');


async function getAllAccessories() {
    return Accessory.find({}).lean();
} 

function getAllAvailable(id) {
    return Accessory.find({_id: {$nin: id}});// избираш аксесоарите да добавиш, които не са добавени в cube, t.e. don't chooose accessory, that it have
}

async function createAccessory (name, imageUrl, description) {
    return Accessory.create({
        name,
        imageUrl,
        description
    });
}


module.exports = {
    getAllAccessories,
    createAccessory,
    getAllAvailable
};