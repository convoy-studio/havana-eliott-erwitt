import project from './project';
import print from './print';
import order from './order';
import auth from './auth';

const routes = [].concat(project, print, order, auth);

export default routes;