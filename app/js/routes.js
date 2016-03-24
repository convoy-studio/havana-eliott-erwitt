import React from 'react';
import AppStore from './stores/appStore';
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
import AdminHome from './components/pages/admin/home';
import AdminProjects from './components/pages/admin/projects';
import AdminProject from './components/pages/admin/project';
import AdminPrint from './components/pages/admin/print';
import AdminOrders from './components/pages/admin/orders';
import AdminOrder from './components/pages/admin/order';
import AdminSubscribersShop from './components/pages/admin/subscriber-shop';
import AdminSubscribersNews from './components/pages/admin/subscriber-news';

import NotFound from './components/pages/not-found';

import LoginStore from './stores/loginStore';

import languages from '../data/languages'

var getMultipleLangsComponent = (path, component)=> {
	let routes = languages.map((lang, i)=> {
		let p = '/' + lang + path
		return <Route key={i} path={p} component={component}/>
	})
	return routes
}

var photographyRoutes = languages.map((lang, i)=> {
	return (
		<Route key={i} path={'/' + lang + "/photography"} component={Projects}>
			<Route path="/:slug" component={Project}/>
			<Route path="/:slug/gallery" component={Project}/>
			<Route path="/:slug/gallery/:token" component={Project}/>
			<Route path="/:slug/contact-sheet" component={ContactSheet}/>
		</Route>
	)
})

export default (
	<Route component={Wrapper}>

		{ getMultipleLangsComponent('', Home) }
		{ getMultipleLangsComponent('/fellowship', Fellowship) }
		
		{ photographyRoutes }

		{ getMultipleLangsComponent('/shop-temp', ShopTemp) }
		{ getMultipleLangsComponent('/news', News) }
		{ getMultipleLangsComponent('/newsletter', Newsletter) }
		{ getMultipleLangsComponent('/friends-of-fellowship', Friends) }
		{ getMultipleLangsComponent('/contact', Contact) }
		{ getMultipleLangsComponent('/privacy-policy', Privacy) }
		{ getMultipleLangsComponent('/cookie-policy', Legal) }
		{ getMultipleLangsComponent('/terms-and-condition-of-use', Terms) }
		{ getMultipleLangsComponent('/terms-and-condition-of-sale', PurchaseConditions) }
		{ getMultipleLangsComponent('/unsubscribe', Unsubscribe) }

		{ getMultipleLangsComponent('/shop', Shop) }
		{ getMultipleLangsComponent('/shop/:token', Print) }
		{ getMultipleLangsComponent('/payment', Payment) }
		{ getMultipleLangsComponent('/payment-confirmation', Result) }
		
		<Route path="/login" component={Login}/>
		
		<Route path="/admin" component={Admin}>
			<Route path="/projects" component={AdminProjects}/>
			<Route path="/project/:slug" component={AdminProject}/>
			<Route path="/project/:slug/:token" component={AdminPrint}/>
			<Route path="/orders" component={AdminOrders}/>
			<Route path="/order/:token" component={AdminOrder}/>
			<Route path="/subscriber-shop" component={AdminSubscribersShop}/>
			<Route path="/subscriber-news" component={AdminSubscribersNews}/>
		</Route>

		<Route path="*" component={NotFound}/>
	</Route>
)
