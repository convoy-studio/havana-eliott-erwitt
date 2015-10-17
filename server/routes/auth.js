var controller = require('../controllers/auth');

var routes = [
	{ method: 'POST', path: '/user', config: controller.signup }
];

module.exports = routes;