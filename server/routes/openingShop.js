import controller from '../controllers/openingShop';

const routes = [
	{ method: 'GET', path: '/openingShops', config: controller.getAll },
	{ method: 'GET', path: '/openingShop/{id}', config: controller.getOne },
	{ method: 'POST', path: '/openingShop', config: controller.create }
];

export default routes;