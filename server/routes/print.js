import controller from '../controllers/print';

const routes = [
	{ method: 'GET', path: '/prints', config: controller.getAll },
	{ method: 'GET', path: '/prints/{slug}', config: controller.getByArtist },
	{ method: 'GET', path: '/prints/forsale', config: controller.getForSale },
	{ method: 'GET', path: '/prints/unsold', config: controller.getUnsold },
	{ method: 'GET', path: '/print/{token}', config: controller.getByToken },
	{ method: 'GET', path: '/print/forsale/{token}', config: controller.getOneForsale },
];

export default routes;
