var controller = require('../controllers/project');

var routes = [
	{ method: 'GET', path: '/projects', config: controller.getAll },
	{ method: 'GET', path: '/projects/firsts', config: controller.getFirsts },
	{ method: 'GET', path: '/project/{id}', config: controller.getById },
	{ method: 'GET', path: '/project/slug/{slug}', config: controller.getBySlug }
];

module.exports = routes;