var controller = require('../controllers/user');

var routes = [
	{ method: 'POST', path: '/sessions/create', config: controller.createSession }
];

module.exports = routes;