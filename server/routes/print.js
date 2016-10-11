import controller from '../controllers/print';

const routes = [
	{ method: 'GET', path: '/{language}/prints/forsale', config: controller.getForSale },
	{ method: 'GET', path: '/{language}/prints/forsale/{token}', config: controller.getOneForsale },
];

export default routes;
