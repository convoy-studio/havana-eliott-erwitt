import controller from '../controllers/print';

const routes = [
	{ method: 'GET', path: '/prints', config: controller.getAll },
	{ method: 'GET', path: '/prints/{slug}', config: controller.getByArtist },
	{ method: 'GET', path: '/prints/forsale', config: controller.getForSale },
	{ method: 'GET', path: '/prints/unsold', config: controller.getUnsold },
	{ method: 'GET', path: '/print/{token}', config: controller.getByToken },
	{ method: 'GET', path: '/print/forsale/{token}', config: controller.getOneForsale },
	{ method: 'POST', path: '/print/{token}', config: controller.updateSerials },
	{ method: 'POST', path: '/print', config: controller.create },

	// ADMIN
	{ method: 'POST', path: '/admin/print/{token}', config: controller.update }
];

export default routes;