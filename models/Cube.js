const { Schema, model} = require('mongoose');


const cubeSchema = new Schema({
    name: {type: String, required: true},
    imageUrl:{type: String},
    difficultyLevel:{type: String, required: true},
    descriptions :{type: String, required: true},
});
 
const Cube = model ('Cube', cubeSchema);

module.exports = Cube;
