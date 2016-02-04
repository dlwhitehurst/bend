// ************************************************
// post.server.model.js
//
// written by David L. Whitehurst
// February 2, 2016

var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Post', PostSchema);
