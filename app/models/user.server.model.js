// ************************************************
// user.server.model.js
//
// written by David L. Whitehurst
// January 28, 2016

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	firstName: {
		type: String,
		trim: true,
		required: true
	},
	lastName: {
		type: String,
		trim: true,
		required: true
	},
	email: String,
	website: {
		type: String,
		set: function (url) {
			if (!url) {
				return url;
			} else {
				if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
				}
				return url;
			}
		}
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: String,
	created: {
		type: Date,
	default: Date.now
	},
	role: {
		type: String,
		enum: ['Admin', 'User'],
	default: 'User'
	}
});


UserSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName;
});

// change set to get and you'll require this
// UserSchema.set('toJSON', { getters: true });
UserSchema.set('toJSON', {virtuals: true});

mongoose.model('User', UserSchema);