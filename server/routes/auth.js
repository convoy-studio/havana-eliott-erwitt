import controller from '../controllers/auth';

const routes = [
	{ method: 'POST', path: '/auth/login', config: controller.login },
	{ method: 'POST', path: '/auth/signup', config: controller.signup },
	{ method: 'POST', path: '/auth/authorized', config: controller.authorized }
];

export default routes;