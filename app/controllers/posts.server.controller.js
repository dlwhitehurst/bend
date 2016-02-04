// ***************************************
// posts.server.controller.js
//
// written by David L. Whitehurst
// February 2, 2016
// 
// 

var Post = require('mongoose').model('Post');
var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	var post = new Post(req.body);
	User.findOne({
		_id: '56ad70e3dad42ec30433bc3e' // my user for testing
	}, function (err, user) {
		if (err) {
			return next(err);
		} else {
			post.author = user;
			post.save(function(err) {
				if (err) {
					return next(err);
				} else {
					res.json(post);
				}
			});
			next();
		}
	});	
};

exports.list = function(req, res, next) {
	Post.find().populate('author').exec(function(err, posts) {
		if (err) {
			return next(err);
		} else {
			res.json(posts);
		}
	});
};
