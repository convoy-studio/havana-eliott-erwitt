import React from 'react';
import { Route, Redirect } from 'react-router';
import Wrapper from './components/wrapper';
import Home from './components/pages/home';
import Fellowship from './components/pages/fellowship';
import Projects from './components/pages/projects';
import Project from './components/pages/project';
import ContactSheet from './components/pages/contact-sheet';
import Shop from './components/pages/shop';
import ShopTemp from './components/pages/shopTemp';
import Print from './components/pages/print';
import Payment from './components/pages/payment';
import Result from './components/pages/result';
import News from './components/pages/news';
import Newsletter from './components/pages/newsletter';
import Friends from './components/pages/friends';
import Contact from './components/pages/contact';
import Privacy from './components/pages/privacy';
import Legal from './components/pages/legal';
import Terms from './components/pages/terms';
import PurchaseConditions from './components/pages/purchase-conditions';
import Unsubscribe from './components/pages/unsubscribe';
import Login from './components/pages/login';

import Admin from './components/pages/admin/wrapper';
// import AdminLogin from './components/pages/admin/login';
import AdminHome from './components/pages/admin/home';
import AdminProjects from './components/pages/admin/projects';
import AdminProject from './components/pages/admin/project';
import AdminPrint from './components/pages/admin/print';
import AdminOrders from './components/pages/admin/orders';
import AdminOrder from './components/pages/admin/order';
import AdminSubscribersShop from './components/pages/admin/subscriber-shop';
import AdminSubscribersNews from './components/pages/admin/subscriber-news';

import NotFound from './components/pages/not-found';

// import { isLoaded as isAuthLoaded, load as loadAuth } from './actions/authActions';

import LoginStore from './stores/loginStore';

export default (
	<Route component={Wrapper}>
		<Route path="/" component={Home}/>
		<Route path="/fellowship" component={Fellowship}/>
		<Route path="/photography" component={Projects}>
			<Route path="/:slug" component={Project}/>
			<Route path="/:slug/gallery" component={Project}/>
			<Route path="/:slug/gallery/:token" component={Project}/>
			<Route path="/:slug/contact-sheet" component={ContactSheet}/>
		</Route>
		<Route path="/shop-temp" component={ShopTemp}/>
		<Route path="/news" component={News}/>
		<Route path="/newsletter" component={Newsletter}/>
		<Route path="/friends-of-fellowship" component={Friends}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/privacy-policy" component={Privacy}/>
		<Route path="/cookie-policy" component={Legal}/>
		<Route path="/terms-and-condition-of-use" component={Terms}/>
		<Route path="/terms-and-condition-of-sale" component={PurchaseConditions}/>
		<Route path="/unsubscribe" component={Unsubscribe}/>
		<Route path="/login" component={Login}/>
		
		<Route path="*" component={NotFound}/>
	</Route>
);

// <Route path="/shop" component={Shop}/>
// <Route path="/shop/:token" component={Print}/>
// <Route path="/payment" component={Payment}/>
// <Route path="/payment-confirmation" component={Result}/>
// <Route path="/admin" component={Admin}>
// 	<Route path="/projects" component={AdminProjects}/>
// 	<Route path="/project/:slug" component={AdminProject}/>
// 	<Route path="/project/:slug/:token" component={AdminPrint}/>
// 	<Route path="/orders" component={AdminOrders}/>
// 	<Route path="/order/:token" component={AdminOrder}/>
// 	<Route path="/subscriber-shop" component={AdminSubscribersShop}/>
// 	<Route path="/subscriber-news" component={AdminSubscribersNews}/>
// </Route>

		// <Route path="/admin" component={Admin} onEnter={requireLogin}>
			// <Route path="/login" component={AdminLogin}/>

function requireLogin(nextState, transitionTo, callback) {

	console.log(LoginStore.isLoggedIn());
	// if (LoginStore.isLoggedIn()) {
	// 	callback();
	// } else {
	// 	transitionTo.to('/login', null);
	// 	callback();
	// }
	if (!LoginStore.isLoggedIn()) {
		transitionTo.to('/login', null);
		callback();
	}

}