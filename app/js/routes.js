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
import News from './components/pages/news';
import Friends from './components/pages/friends';
import Contact from './components/pages/contact';
import Privacy from './components/pages/privacy';
import Legal from './components/pages/legal';
import Terms from './components/pages/terms';
import NotFound from './components/pages/not-found';

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
		<Route path="/shop" component={Shop}/>
		<Route path="/shop/:token" component={Print}/>
		<Route path="/payment" component={Payment}/>
		<Route path="/news" component={News}/>
		<Route path="/friends" component={Friends}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/privacy" component={Privacy}/>
		<Route path="/legal" component={Legal}/>
		<Route path="/terms" component={Terms}/>
		<Route path="*" component={NotFound}/>
	</Route>
);