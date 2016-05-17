import controller from '../controllers/order';

const routes = [
	{ method: 'GET', path: '/orders', config: controller.getAll },
	{ method: 'GET', path: '/orders/paid', config: controller.getPaid },
	{ method: 'GET', path: '/orders/delivered', config: controller.getDelivered },
	{ method: 'GET', path: '/order/{id}', config: controller.getOne },
	{ method: 'POST', path: '/order', config: controller.create },
	{ method: 'POST', path: '/order/{id}', config: controller.updateOrder },
	{ method: 'POST', path: '/order/{id}/state', config: controller.updateState },
	{ method: 'GET', path: '/order/pdf', config: controller.generatePdf }
];

export default routes;
