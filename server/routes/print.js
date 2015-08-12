var controller = require('../controllers/print');

var routes = [
	{ method: 'GET', path: '/prints', config: controller.getAll },
    { method: 'GET', path: '/prints/{slug}', config: controller.getByArtist },
    { method: 'GET', path: '/print/{id}', config: controller.getOne }
];

module.exports = routes;