import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import GEvents from './utils/globalEvents';
import Seo from './components/modules/seo';
let FastClick = require('fastclick');
let config = require('./config');
// import history from './history';

require('es6-promise').polyfill();
require('isomorphic-fetch');


if(typeof document !== 'undefined') {
	FastClick.attach(document.body);
	
	var gaScript=document.createElement('script');
	gaScript.setAttribute("type","text/javascript");
	gaScript.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-69354749-1', 'auto'); ga('send', 'pageview');";
	document.querySelector('body').appendChild(gaScript);

	var fbScript=document.createElement('script');
	fbScript.setAttribute("type","text/javascript");
	fbScript.innerHTML = "(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=926790107398740'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));";
	document.querySelector('body').appendChild(fbScript);
	
}

if (window.innerWidth < 768) {
	if (window.orientation === 90 || window.orientation === -90) {
		document.getElementById('landscape').style.display = 'block';
	} else {
		document.getElementById('landscape').style.display = 'none';
	}
	window.addEventListener('orientationchange', () => {
		if (window.orientation === 90 || window.orientation === -90) {
			document.getElementById('landscape').style.display = 'block';
		} else {
			document.getElementById('landscape').style.display = 'none';
		}
	}, false);
}

window.GlobalEvents = new GEvents();
GlobalEvents.init();


const history = new BrowserHistory();
const container = document.getElementById('root');
let seo = {
	title: 'Elliott Erwitt documentary photography | Elliott Erwitt Havana Club 7 Fellowship',
	description: "Legendary Magnum photographer Elliott Erwitt returns to Cuba to capture images in support of the inaugural 'Elliott Erwitt Havana Club 7 Fellowship'.",
	url: config.siteurl,
	image: config.siteurl + '/static/prints/elliot-erwitt-museum-of-the-revolution-cuba-2015_big.jpg'
};
const app = (<div><Seo seo={seo} /><Router history={history} children={routes} onUpdate={() => window.scrollTo(0, 0)}/></div>);

React.render(app, container);

if (process.env.NODE_ENV !== 'production') {
  	window.React = React; // enable debugger
}
