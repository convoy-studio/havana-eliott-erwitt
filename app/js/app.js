import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import GEvents from './utils/globalEvents';
let FastClick = require('fastclick');
// import history from './history';

if(typeof document !== 'undefined') {
	FastClick.attach(document.body);
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
const app = (<Router history={history} children={routes} onUpdate={() => window.scrollTo(0, 0)}/>);

React.render(app, container);

if (process.env.NODE_ENV !== 'production') {
  	window.React = React; // enable debugger
}