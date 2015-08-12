var controller = require('../controllers/artist');

var routes = [
	{ method: 'GET', path: '/artists', config: controller.getAll },
	{ method: 'GET', path: '/artist/{slug}', config: controller.getOne }
];

module.exports = routes;