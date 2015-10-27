import controller from '../controllers/newsletter';

const routes = [
	{ method: 'GET', path: '/newsletters', config: controller.getAll },
	{ method: 'GET', path: '/newsletter/{id}', config: controller.getOne },
	{ method: 'GET', path: '/newsletter/unsubscribe/{id}', config: controller.unsubscribe },
	{ method: 'POST', path: '/newsletter', config: controller.create }
];

export default routes;