const { Schema, model, Types: {ObjectId} } = require('mongoose');

const accessorySchema = new Schema ({
    name: {type: String, required: true},
	imageUrl: {type:String, required: true, http/https validation},
	description - {type:String, required:true, max length validation},
	cubes: {type:[ObjectId], default: [], ref: 'Cube'}

});

const Accessory = model ('Accessory', accessorySchema );

module.exports = Accessory;