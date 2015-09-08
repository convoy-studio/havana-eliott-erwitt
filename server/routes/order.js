var controller = require('../controllers/order');

var routes = [
	{ method: 'GET', path: '/orders', config: controller.getAll },
	{ method: 'GET', path: '/order/{id}', config: controller.getOne },
	{ method: 'POST', path: '/order', config: controller.create }
];

module.exports = routes;