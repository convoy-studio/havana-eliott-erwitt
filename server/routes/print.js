import controller from '../controllers/print';

const routes = [
	{ method: 'GET', path: '/{language}/prints', config: controller.getAll },
	{ method: 'GET', path: '/{language}/prints/{slug}', config: controller.getByArtist },
	{ method: 'GET', path: '/{language}/prints/forsale', config: controller.getForSale },
	{ method: 'GET', path: '/{language}/prints/unsold', config: controller.getUnsold },
	{ method: 'GET', path: '/{language}/print/{token}', config: controller.getByToken },
	{ method: 'GET', path: '/{language}/print/forsale/{token}', config: controller.getOneForsale },
];

export default routes;
