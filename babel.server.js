require('babel/register')({
  	stage: 1
});

require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
delete global.__BROWSER__;

require('./server/');
