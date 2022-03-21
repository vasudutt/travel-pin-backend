const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username : {
		type:String,
		min:3,
		max:20,
		require: true,
		unique: true
	},
	email : {
		type:String,
		max:50,
		require: true,
		unique: true
	},
	password : {
		type: String,
		require: true,
		min: 6
	} 
}, 
{timestamps: true});

module.exports = mongoose.model('User', UserSchema);