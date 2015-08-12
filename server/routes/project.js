var controller = require('../controllers/project');

var routes = [
	{ method: 'GET', path: '/project/{id}', config: controller.getOne }
];

module.exports = routes;