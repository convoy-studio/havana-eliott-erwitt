var controller = require('../controllers/print');

var routes = [
	{ method: 'GET', path: '/prints', config: controller.getAll },
	{ method: 'GET', path: '/prints/{slug}', config: controller.getByArtist },
	{ method: 'GET', path: '/prints/forsale', config: controller.getForSale },
	{ method: 'GET', path: '/print/{token}', config: controller.getByToken },
	{ method: 'POST', path: '/print/{token}', config: controller.updateSerials },
	{ method: 'POST', path: '/print', config: controller.create },

	// ADMIN
	{ method: 'POST', path: '/admin/print/{token}', config: controller.update }
];

module.exports = routes;