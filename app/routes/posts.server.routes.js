// ******************************************
// posts.server.routes.js
//
// written by David L. Whitehurst
// February 2, 2016
//
//

var posts = require('../../app/controllers/posts.server.controller');

module.exports = function(app) {
	app.route ('/posts')
	   .post(posts.create)
	   .get(posts.list);
	   
//	app.route('/users/:userId')
//	   .get(users.read)
//       .put(users.update)
//	   .delete(users.delete);
	   
//	   app.param('userId', users.userByID);
};
