import controller from '../controllers/cache';

const routes = [
	{method: 'POST', path: '/cache/flush', config: controller.flush},
];

export default routes;
