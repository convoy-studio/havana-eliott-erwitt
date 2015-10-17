import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import GEvents from './utils/globalEvents';
// import history from './history';

window.GlobalEvents = new GEvents();
GlobalEvents.init();

const history = new BrowserHistory();
const container = document.getElementById('root');
const app = (<Router history={history} children={routes} onUpdate={() => window.scrollTo(0, 0)}/>);

React.render(app, container);

if (process.env.NODE_ENV !== 'production') {
  	window.React = React; // enable debugger
}