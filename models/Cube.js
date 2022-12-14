const { Schema, model, Types} = require('mongoose');
//const Accessory = require('./Accessory');
//const User = require('./User');


const cubeSchema = new Schema({
    name: {type: String, required: true},
    imageUrl:{type: String},
    difficultyLevel:{type: Number, required: true, min: 1, max:6},
    descriptions :{type: String, required: true},
    accessories: {type: [Types.ObjectId], default: [], ref: 'Accessory'},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
});
 
const Cube = model ('Cube', cubeSchema);

module.exports = Cube;
