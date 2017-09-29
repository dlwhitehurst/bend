// ******************************************
// timecards.server.routes.js
//
// written by David L. Whitehurst
// September 26, 2017
//
//

var timecards = require('../../app/controllers/timecards.server.controller');

module.exports = function(app) {
	app.route ('/timecards')
	   .post(timecards.create)
	   .get(timecards.list);
	   
	app.route('/timecards/:timecardId')
	   .get(timecards.read)
       .put(timecards.update)
	   .delete(timecards.delete);
	   
	   app.param('timecardId', timecards.timecardByID);
};
