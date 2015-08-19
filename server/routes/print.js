var controller = require('../controllers/print');

var routes = [
	{ method: 'GET', path: '/prints', config: controller.getAll },
    { method: 'GET', path: '/prints/forsale', config: controller.getForSale },
    { method: 'GET', path: '/prints/{slug}', config: controller.getByArtist },
    { method: 'GET', path: '/print/{id}', config: controller.getOne },
    { method: 'POST', path: '/print/{id}', config: controller.order }
];

module.exports = routes;