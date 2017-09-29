// ************************************************
// timecard.server.model.js
//
// written by David L. Whitehurst
// September 26, 2017

var mongoose = require('mongoose');

var TimecardSchema = new mongoose.Schema({

	workDay: {
		type: String,
		trim: true,
		required: true
	},
	project: {
		type: String,
		trim: true,
		required: true
	},
	task: {
		type: String,
		trim: true,
		required: true
	},
	hours: {
		type: String,
		trim: true,
		required: true
	},
	created: {
		type: Date,
	default: Date.now
	},
});



// change set to get and you'll require this
// TimecardSchema.set('toJSON', { getters: true });
TimecardSchema.set('toJSON', {virtuals: true});

mongoose.model('Timecard', TimecardSchema);
