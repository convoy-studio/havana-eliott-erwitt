import controller from '../controllers/auth';

const routes = [
	{ method: 'POST', path: '/auth/login', config: controller.login },
	{ method: 'POST', path: '/auth/signup', config: controller.signup }
];

export default routes;