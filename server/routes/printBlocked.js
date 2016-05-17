import controller from '../controllers/printBlocked';

const routes = [
	{ method: 'DELETE', path: '/printBlocked/{token}', config: controller.delete },
	{ method: 'POST', path: '/printBlocked/{token}', config: controller.create },
];

export default routes;
