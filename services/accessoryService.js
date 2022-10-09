const Accessory = require('../models/Accessory');
const Accesory = require('../models/Accessory');


async function getAllAccessories() {
    return Accessory.find({});
} 

async function createAccessory (name, imageUrl, description) {

}

module.exports = {
    getAllAccessories,
};