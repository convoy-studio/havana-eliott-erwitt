import project from './project';
import print from './print';
import printBlocked from './printBlocked';
import order from './order';
import auth from './auth';
import newsletter from './newsletter';
import openingShop from './openingShop';
import checkout from './checkout';
import cache from './cache';

const routes = [].concat(project, print, printBlocked, order, auth, newsletter, openingShop, checkout, cache);

export default routes;
