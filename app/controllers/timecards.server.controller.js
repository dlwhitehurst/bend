// ***************************************
// timecards.server.controller.js
//
// written by David L. Whitehurst
// January 28, 2016
// 
// 

var Timecard = require('mongoose').model('Timecard');

exports.create = function(req, res, next) {
	var timecard = new Timecard(req.body);
	
	timecard.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(timecard);
		}
	});
};

exports.list = function(req, res, next) {
	Timecard.find({}, function(err, timecards) {
		if (err) {
			return next(err);
		} else {
			res.json(timecards);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.timecard);
};

exports.timecardByID = function(req, res, next, id) {
	Timecard.findOne({
		_id: id
	}, function (err, timecard) {
		if (err) {
			return next(err);
		} else {
			req.timecard = timecard;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Timecard.findByIdAndUpdate(req.timecard.id, req.body,
	    function (err, timecard) {
			if (err) {
		  	  return next(err);
     		} else {
		  	  res.json(timecard);
  			}
	    });
};

exports.delete = function(req, res, next) {
	req.timecard.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.timecard);
		}
	});
};
