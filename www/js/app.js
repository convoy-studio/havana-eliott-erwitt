(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/nicolas/Developement/freelance/Havana/node_modules/lodash/String/capitalize.js":[function(require,module,exports){
var baseToString = require('../internal/baseToString');

/**
 * Capitalizes the first character of `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('fred');
 * // => 'Fred'
 */
function capitalize(string) {
  string = baseToString(string);
  return string && (string.charAt(0).toUpperCase() + string.slice(1));
}

module.exports = capitalize;

},{"../internal/baseToString":"/Users/nicolas/Developement/freelance/Havana/node_modules/lodash/internal/baseToString.js"}],"/Users/nicolas/Developement/freelance/Havana/node_modules/lodash/internal/baseToString.js":[function(require,module,exports){
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/Main.js":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var _Pager = require('./pager/Pager');

var _Pager2 = _interopRequireDefault(_Pager);

var _raf = require('./app/utils/raf');

var _raf2 = _interopRequireDefault(_raf);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

(0, _fastclick2['default'])(document.body);

// Start App
var app = new _App2['default']();
app.init();

},{"./app/App":"/Users/nicolas/Developement/freelance/Havana/src/js/app/App.js","./app/utils/raf":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/raf.js","./pager/Pager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/Pager.js","fastclick":"fastclick","gsap":"gsap"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/App.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _AppStore = require('./stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppActions = require('./actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var _AppTemplate = require('./AppTemplate');

var _AppTemplate2 = _interopRequireDefault(_AppTemplate);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Router = require('./services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _GlobalEvents = require('./services/GlobalEvents');

var _GlobalEvents2 = _interopRequireDefault(_GlobalEvents);

var App = (function () {
	function App() {
		_classCallCheck(this, App);
	}

	_createClass(App, [{
		key: 'init',
		value: function init() {
			// Init router
			var router = new _Router2['default']();
			router.init();

			// Init global events
			window.GlobalEvents = new _GlobalEvents2['default']();
			GlobalEvents.init();

			// Render react
			_react2['default'].render(_react2['default'].createElement(_AppTemplate2['default'], null), document.getElementById('container'));

			// Start routing
			router.beginRouting();
		}
	}]);

	return App;
})();

exports['default'] = App;
module.exports = exports['default'];

},{"./AppTemplate":"/Users/nicolas/Developement/freelance/Havana/src/js/app/AppTemplate.js","./actions/AppActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js","./services/GlobalEvents":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/GlobalEvents.js","./services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","./stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/AppTemplate.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FrontContainer = require('./components/FrontContainer');

var _FrontContainer2 = _interopRequireDefault(_FrontContainer);

var _PagesContainer = require('./components/PagesContainer');

var _PagesContainer2 = _interopRequireDefault(_PagesContainer);

var _Cart = require('./components/Cart');

var _Cart2 = _interopRequireDefault(_Cart);

var _CartStore = require('./stores/CartStore');

var _CartStore2 = _interopRequireDefault(_CartStore);

function _getCartState() {
	return {
		cartItems: _CartStore2['default'].getCartItems(),
		cartCount: _CartStore2['default'].getCartCount(),
		cartTotal: _CartStore2['default'].getCartTotal(),
		cartVisible: _CartStore2['default'].getCartVisible(),
		cartEnabled: _CartStore2['default'].getCartEnabled()
	};
}

var AppTemplate = (function (_React$Component) {
	_inherits(AppTemplate, _React$Component);

	function AppTemplate(props) {
		_classCallCheck(this, AppTemplate);

		_get(Object.getPrototypeOf(AppTemplate.prototype), 'constructor', this).call(this, props);

		this.state = _getCartState();
		this._onStoreChangeBinded = this._onStoreChange.bind(this);

		_CartStore2['default'].addChangeListener(this._onStoreChangeBinded);
	}

	_createClass(AppTemplate, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_CartStore2['default'].removeChangeListener(this._onStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'template' },
				_react2['default'].createElement('canvas', { ref: 'canvas', className: 'canvas' }),
				_react2['default'].createElement(_FrontContainer2['default'], null),
				_react2['default'].createElement(_PagesContainer2['default'], null),
				_react2['default'].createElement(_Cart2['default'], {
					products: this.state ? this.state.cartItems : '',
					count: this.state ? this.state.cartCount : '',
					total: this.state ? this.state.cartTotal : '',
					visible: this.state ? this.state.cartVisible : '',
					enabled: this.state ? this.state.cartEnabled : ''
				})
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			GlobalEvents.resize();
		}
	}, {
		key: '_onStoreChange',
		value: function _onStoreChange() {
			this.setState(_getCartState());
		}
	}]);

	return AppTemplate;
})(_react2['default'].Component);

exports['default'] = AppTemplate;
module.exports = exports['default'];

},{"./components/Cart":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Cart.js","./components/FrontContainer":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/FrontContainer.js","./components/PagesContainer":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/PagesContainer.js","./stores/CartStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/CartStore.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var AppActions = {
    pageHasherChanged: function pageHasherChanged(pageId) {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].PAGE_HASHER_CHANGED,
            item: pageId
        });
    },
    windowResize: function windowResize(windowW, windowH) {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].WINDOW_RESIZE,
            item: { windowW: windowW, windowH: windowH }
        });
    }
};

exports['default'] = AppActions;
module.exports = exports['default'];

},{"./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/ArtistActions.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ArtistConstants = require('./../constants/ArtistConstants');

var _ArtistConstants2 = _interopRequireDefault(_ArtistConstants);

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

require('fetch');

var ArtistActions = {

    receiveAll: function receiveAll(artists) {
        _AppDispatcher2['default'].handleServerAction({
            actionType: _ArtistConstants2['default'].RECEIVE_ALL_ARTISTS,
            item: artists
        });
    },

    receive: function receive(artist) {
        _AppDispatcher2['default'].handleServerAction({
            actionType: _ArtistConstants2['default'].RECEIVE_ARTIST,
            item: artist
        });
    },

    receiveError: function receiveError(error) {
        _AppDispatcher2['default'].handleServerAction({
            actionType: _ArtistConstants2['default'].ERROR,
            item: error
        });
    }

};

exports['default'] = ArtistActions;
module.exports = exports['default'];

},{"./../constants/ArtistConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/ArtistConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","fetch":"fetch"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CartConstants = require('./../constants/CartConstants');

var _CartConstants2 = _interopRequireDefault(_CartConstants);

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

require('fetch');

var CartActions = {

	// Receive inital product data
	receiveProduct: function receiveProduct(data) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].RECEIVE_DATA,
			data: data
		});
	},

	// Set currently selected product variation
	selectProduct: function selectProduct(index) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].SELECT_PRODUCT,
			data: index
		});
	},

	// Add item to cart
	addToCart: function addToCart(printId, update) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].CART_ADD,
			printId: printId,
			update: update
		});
	},

	// Remove item from cart
	removeFromCart: function removeFromCart(index) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].CART_REMOVE,
			index: index
		});
	},

	// Update cart visibility status
	updateCartVisible: function updateCartVisible(cartVisible) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].CART_VISIBLE,
			cartVisible: cartVisible
		});
	},

	// Update cart enabled status
	updateCartEnabled: function updateCartEnabled(cartEnabled) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].CART_ENABLED,
			cartEnabled: cartEnabled
		});
	}

};

exports['default'] = CartActions;
module.exports = exports['default'];

},{"./../constants/CartConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/CartConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","fetch":"fetch"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _PrintConstants = require('./../constants/PrintConstants');

var _PrintConstants2 = _interopRequireDefault(_PrintConstants);

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

require('fetch');

var PrintActions = {

	receiveAll: function receiveAll(prints) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].RECEIVE_ALL_PRINTS,
			item: prints
		});
	},

	receiveForSale: function receiveForSale(prints) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].RECEIVE_PRINTS_FORSALE,
			item: prints
		});
	},

	receiveSlideshow: function receiveSlideshow(prints) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].RECEIVE_PRINTS_SLIDESHOW,
			item: prints
		});
	},

	receiveFromArtist: function receiveFromArtist(prints) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].RECEIVE_ARTIST_PRINTS,
			item: prints
		});
	},

	receive: function receive(print) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].RECEIVE_PRINT,
			item: print
		});
	},

	receiveError: function receiveError(error) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].ERROR,
			item: error
		});
	},

	setPrintZoom: function setPrintZoom(id) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _PrintConstants2['default'].ZOOM,
			item: id
		});
	}

};

exports['default'] = PrintActions;
module.exports = exports['default'];

},{"./../constants/PrintConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/PrintConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","fetch":"fetch"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/ArtistApi.js":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ArtistActions = require('./../actions/ArtistActions');

var _ArtistActions2 = _interopRequireDefault(_ArtistActions);

require('fetch');

var config = require('../config');

module.exports = {

	getAll: function getAll() {
		fetch(config.siteurl + '/api/artists').then(function (response) {
			return response.json();
		}).then(function (json) {
			_ArtistActions2['default'].receiveAll(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	},

	getBySlug: function getBySlug(slug) {
		fetch(config.siteurl + '/api/artist/' + slug).then(function (response) {
			return response.json();
		}).then(function (json) {
			_ArtistActions2['default'].receive(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	}

};

},{"../config":"/Users/nicolas/Developement/freelance/Havana/src/js/app/config.js","./../actions/ArtistActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/ArtistActions.js","fetch":"fetch"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/CartApi.js":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CartActions = require('./../actions/CartActions');

var _CartActions2 = _interopRequireDefault(_CartActions);

require('fetch');

var config = require('../config');

module.exports = {

	pay: function pay() {
		fetch('https://secure-test.be2bill.com/front/form/process', {
			method: 'post',
			// headers: {
			// 'Accept': 'application/json',
			// 'Content-Type': 'application/json'
			// },
			body: JSON.stringify({
				// 'Access-Control-Allow-Origin': '*',
				ORDERID: '0123456789',
				IDENTIFIER: 'CONVOY'

			})
		});
	},

	generatePayButton: function generatePayButton() {
		// fetch('./php/hello.php')
		// fetch('http://localhost/freelance/Havana/php/hello.php')
		// // fetch('192.168.1.37/freelance/Havana/php/hello.php')
		// 	.then(function(response) {
		// 		console.log(response)
		// 		return response.text()
		// 	}).then(function(body) {
		// 		console.log(body)
		// 		// document.body.innerHTML = body
		// 	})

		httpGetAsync('http://localhost/freelance/Havana/php/hello.php', function (res) {
			console.log(res);
		});
	}

};

function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp.responseText);
	};
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}

},{"../config":"/Users/nicolas/Developement/freelance/Havana/src/js/app/config.js","./../actions/CartActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js","fetch":"fetch"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _PrintActions = require('./../actions/PrintActions');

var _PrintActions2 = _interopRequireDefault(_PrintActions);

require('fetch');

var config = require('../config');

module.exports = {

	getAll: function getAll() {
		fetch(config.siteurl + '/api/prints').then(function (response) {
			return response.json();
		}).then(function (json) {
			_PrintActions2['default'].receiveAll(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	},

	getForSale: function getForSale() {
		fetch(config.siteurl + '/api/prints/forsale').then(function (response) {
			return response.json();
		}).then(function (json) {
			_PrintActions2['default'].receiveForSale(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	},

	getSlideshow: function getSlideshow(artist, id) {
		fetch(config.siteurl + '/api/prints/' + artist + '/slideshow/' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			_PrintActions2['default'].receiveSlideshow(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	},

	getByArtist: function getByArtist(artist) {
		fetch(config.siteurl + '/api/prints/' + artist).then(function (response) {
			return response.json();
		}).then(function (json) {
			_PrintActions2['default'].receiveFromArtist(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	},

	getOne: function getOne(id) {
		fetch(config.siteurl + '/api/print/' + id).then(function (response) {
			return response.json();
		}).then(function (json) {
			_PrintActions2['default'].receive(json);
		})['catch'](function (ex) {
			console.log('parsing failed', ex);
		});
	},

	order: function order(id, serial) {
		console.log(serial);
		fetch(config.siteurl + '/api/print/' + id, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'serial': serial
			})
		});
	},

	create: function create(print) {
		fetch(config.siteurl + '/api/prints', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'print': print
			})
		});
	}

};

},{"../config":"/Users/nicolas/Developement/freelance/Havana/src/js/app/config.js","./../actions/PrintActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js","fetch":"fetch"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Cart.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _CartActions = require('./../actions/CartActions');

var _CartActions2 = _interopRequireDefault(_CartActions);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var Cart = (function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart(props) {
		_classCallCheck(this, Cart);

		_get(Object.getPrototypeOf(Cart.prototype), 'constructor', this).call(this, props);

		// props
		this.props = props;

		// state
		this.state = {
			hash: undefined
		};

		// const
		this.CART_DELAY = 2000;

		// function binded
		this._didHasherChangeBinded = this._didHasherChange.bind(this);
	}

	_createClass(Cart, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this._didHasherChangeBinded);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _domquery2['default'])('body').on('click', this.handleClickOutside.bind(this));
			(0, _domquery2['default'])('.cart__content').on('click', this.handleClickInside.bind(this));
			(0, _domquery2['default'])('.cart__count').on('mouseenter', this.handleCountEnter.bind(this));
			(0, _domquery2['default'])('.cart').on('mouseenter', this.handleEnter.bind(this));
			(0, _domquery2['default'])('.cart').on('mouseleave', this.handleLeave.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var that = this;
			var itemLabel = this.props.count > 1 ? 'items' : 'item';
			var classes = (this.props.enabled ? 'cart--enabled ' : ' ') + (this.props.visible && this.state.hash === 'shop' ? 'cart--visible' : '');

			return _react2['default'].createElement(
				'div',
				{ className: 'cart ' + classes, ref: 'cart' },
				_react2['default'].createElement(
					'div',
					{ className: 'cart__count' },
					'Cart —',
					_react2['default'].createElement(
						'span',
						null,
						this.props.count
					),
					' ',
					itemLabel
				),
				(function () {
					if (_this.props.count > 0) {
						return _react2['default'].createElement(
							'div',
							{ className: 'cart__content' },
							_react2['default'].createElement(
								'ul',
								{ className: 'cart__products' },
								Object.keys(_this.props.products).map(function (index) {
									var product = that.props.products[index];
									return _react2['default'].createElement(
										'li',
										{ key: index, className: 'cart__product' },
										_react2['default'].createElement(
											'div',
											{ className: 'cart__column' },
											_react2['default'].createElement('div', { className: 'cart__artist' }),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__details' },
												_react2['default'].createElement(
													'div',
													{ className: 'cart__city' },
													product.city
												),
												', ',
												_react2['default'].createElement(
													'div',
													{ className: 'cart__year' },
													product.year
												)
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__serial' },
												'Serial ',
												_react2['default'].createElement(
													'span',
													{ className: 'cart__number' },
													product.serial,
													'/',
													product.copies
												)
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__price' },
												product.price,
												_react2['default'].createElement(
													'span',
													{ className: 'cart__currency' },
													'€'
												)
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'cart__column' },
											_react2['default'].createElement(
												'div',
												{ className: 'cart__print' },
												_react2['default'].createElement('img', { className: 'cart__image', src: '/static/img/' + product.file + '_min.jpg' })
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__remove button button--left', onClick: that.removeItem.bind(that, index) },
												_react2['default'].createElement(
													'span',
													{ className: 'button__content' },
													'Remove item'
												)
											)
										)
									);
								})
							),
							_react2['default'].createElement(
								'div',
								{ className: 'cart__subtotal' },
								_react2['default'].createElement(
									'div',
									{ className: 'cart__column' },
									'Subtotal:'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'cart__column' },
									_this.props.total,
									_react2['default'].createElement(
										'span',
										{ className: 'cart__currency' },
										'€'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'cart__checkout' },
								_react2['default'].createElement(
									'a',
									{ href: '#/payment', className: 'cart__button button' },
									_react2['default'].createElement(
										'span',
										{ className: 'button__content' },
										'Check out'
									)
								)
							)
						);
					} else {
						return _react2['default'].createElement(
							'div',
							{ className: 'cart__content' },
							_react2['default'].createElement(
								'div',
								{ className: 'cart__empty' },
								'You have no items in your cart.'
							)
						);
					}
				})()
			);
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			_CartActions2['default'].updateCartEnabled(!this.props.enabled);
		}
	}, {
		key: 'open',
		value: function open() {
			this.props.enabled = true;
			_CartActions2['default'].updateCartEnabled(this.props.enabled);
		}
	}, {
		key: 'close',
		value: function close() {
			if (this.props.enabled) {
				this.props.enabled = false;
				_CartActions2['default'].updateCartEnabled(this.props.enabled);
			}
		}
	}, {
		key: 'removeItem',
		value: function removeItem(index) {
			_CartActions2['default'].removeFromCart(index);
		}
	}, {
		key: 'handleClickOutside',
		value: function handleClickOutside(e) {
			if (!e.target.classList.contains('cart__remove') && !e.target.classList.contains('cart__button')) {
				if (e.target.parentNode.classList.contains('cart__count')) this.toggle();else this.close();
			}
		}
	}, {
		key: 'handleClickInside',
		value: function handleClickInside(e) {
			if (!e.target.classList.contains('cart__remove')) e.stopPropagation();
		}
	}, {
		key: 'handleCountEnter',
		value: function handleCountEnter(e) {
			clearTimeout(this.closeCountdown);
			this.closeCountdown = undefined;
			this.open();
		}
	}, {
		key: 'handleEnter',
		value: function handleEnter(e) {
			if (this.closeCountdown) {
				clearTimeout(this.closeCountdown);
				this.closeCountdown = undefined;
				this.open();
			}
		}
	}, {
		key: 'handleLeave',
		value: function handleLeave(e) {
			var _this2 = this;

			var that = this;
			this.closeCountdown = setTimeout(function () {
				_this2.close();
				clearTimeout(_this2.closeCountdown);
				_this2.closeCountdown = undefined;
			}, this.CART_DELAY);
		}
	}, {
		key: '_didHasherChange',
		value: function _didHasherChange() {
			this.setState({
				hash: _AppStore2['default'].hash()
			});
		}
	}]);

	return Cart;
})(_react2['default'].Component);

exports['default'] = Cart;
module.exports = exports['default'];

},{"./../actions/CartActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/FrontContainer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = require('./../../pager/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var FrontContainer = (function (_BaseComponent) {
	_inherits(FrontContainer, _BaseComponent);

	function FrontContainer(props) {
		_classCallCheck(this, FrontContainer);

		_get(Object.getPrototypeOf(FrontContainer.prototype), 'constructor', this).call(this, props);

		this.didHasherChangeBinded = this.didHasherChange.bind(this);
		this.state = {
			hash: undefined
		};
	}

	_createClass(FrontContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var menuData = _AppStore2['default'].menuContent();
			var menuItems = menuData.map(function (item, index) {
				var pathUrl = '#' + item.url;
				var classes = item.id === _this.state.hash || item.id === _this.state.hash + 's' ? 'button--enabled' : '';
				return _react2['default'].createElement(
					'li',
					{ className: 'header__item ' + classes, key: index },
					_react2['default'].createElement(
						'a',
						{ href: pathUrl, className: 'button' },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							item.name
						)
					)
				);
			}).reverse();
			var footerMenuData = _AppStore2['default'].footerMenuContent();
			var footerMenuItems = footerMenuData.map(function (item, index) {
				var pathUrl = '#' + item.url;
				var classes = item.id === _this.state.hash || item.id === _this.state.hash + 's' ? 'button--enabled' : '';
				return _react2['default'].createElement(
					'li',
					{ key: index },
					_react2['default'].createElement(
						'a',
						{ href: pathUrl, className: 'footer__button button button--right' },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							item.name
						)
					)
				);
			});

			return _react2['default'].createElement(
				'div',
				{ id: 'frontContainer', className: 'front-container', ref: 'front-container' },
				_react2['default'].createElement(
					'header',
					{ id: 'header', className: 'header' },
					_react2['default'].createElement(
						'h1',
						{ className: 'header__title' },
						_react2['default'].createElement(
							'a',
							{ href: '#/' },
							'Elliott Erwitt Havana Club 7',
							_react2['default'].createElement(
								'div',
								{ className: 'header__subtitle' },
								'Fellowship'
							)
						)
					),
					_react2['default'].createElement(
						'nav',
						{ className: 'header__menu' },
						_react2['default'].createElement(
							'ul',
							{ className: 'header__list' },
							menuItems
						)
					)
				),
				_react2['default'].createElement(
					'footer',
					{ id: 'footer', className: 'footer' },
					_react2['default'].createElement(
						'ul',
						null,
						footerMenuItems
					)
				)
			);
		}
	}, {
		key: 'didHasherChange',
		value: function didHasherChange() {
			this.setState({
				hash: _AppStore2['default'].hash()
			});
		}
	}]);

	return FrontContainer;
})(_BaseComponent3['default']);

exports['default'] = FrontContainer;
module.exports = exports['default'];

},{"./../../pager/components/BaseComponent":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BaseComponent.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasePage2 = require('./../../pager/components/BasePage');

var _BasePage3 = _interopRequireDefault(_BasePage2);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var Page = (function (_BasePage) {
	_inherits(Page, _BasePage);

	function Page(props) {
		_classCallCheck(this, Page);

		_get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
		this.resize = this.resize.bind(this);
	}

	_createClass(Page, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].WINDOW_RESIZE, this.resize);
			_get(Object.getPrototypeOf(Page.prototype), 'componentWillMount', this).call(this);
		}
	}, {
		key: 'render',
		value: function render() {
			_get(Object.getPrototypeOf(Page.prototype), 'render', this).call(this);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			_get(Object.getPrototypeOf(Page.prototype), 'setupAnimations', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			_get(Object.getPrototypeOf(Page.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AppStore2['default'].off(_AppConstants2['default'].WINDOW_RESIZE, this.resize);
			_get(Object.getPrototypeOf(Page.prototype), 'componentWillUnmount', this).call(this);
		}
	}]);

	return Page;
})(_BasePage3['default']);

exports['default'] = Page;
module.exports = exports['default'];

},{"./../../pager/components/BasePage":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePage.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/PagesContainer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasePager2 = require('./../../pager/components/BasePager');

var _BasePager3 = _interopRequireDefault(_BasePager2);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _Home = require('./pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Fellowship = require('./pages/Fellowship');

var _Fellowship2 = _interopRequireDefault(_Fellowship);

var _Friends = require('./pages/Friends');

var _Friends2 = _interopRequireDefault(_Friends);

var _Projects = require('./pages/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

var _Project = require('./pages/Project');

var _Project2 = _interopRequireDefault(_Project);

var _Gallery = require('./pages/Gallery');

var _Gallery2 = _interopRequireDefault(_Gallery);

var _Shop = require('./pages/Shop');

var _Shop2 = _interopRequireDefault(_Shop);

var _Print = require('./pages/Print');

var _Print2 = _interopRequireDefault(_Print);

var _News = require('./pages/News');

var _News2 = _interopRequireDefault(_News);

var _Payment = require('./pages/Payment');

var _Payment2 = _interopRequireDefault(_Payment);

var _Contact = require('./pages/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Legal = require('./pages/Legal');

var _Legal2 = _interopRequireDefault(_Legal);

var _Privacy = require('./pages/Privacy');

var _Privacy2 = _interopRequireDefault(_Privacy);

var _Notfound = require('./pages/Notfound');

var _Notfound2 = _interopRequireDefault(_Notfound);

var PagesContainer = (function (_BasePager) {
	_inherits(PagesContainer, _BasePager);

	function PagesContainer(props) {
		_classCallCheck(this, PagesContainer);

		_get(Object.getPrototypeOf(PagesContainer.prototype), 'constructor', this).call(this, props);
		this.didHasherChange = this.didHasherChange.bind(this);
	}

	_createClass(PagesContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
			_get(Object.getPrototypeOf(PagesContainer.prototype), 'componentWillMount', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AppStore2['default'].off(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
			_get(Object.getPrototypeOf(PagesContainer.prototype), 'componentWillUnmount', this).call(this);
		}
	}, {
		key: 'didHasherChange',
		value: function didHasherChange() {
			var hash = _Router2['default'].getNewHash();
			var type = undefined;
			var id = undefined;

			switch (hash.parent) {
				case '':
					type = _Home2['default'];
					break;
				case 'fellowship':
					type = _Fellowship2['default'];
					break;
				case 'friends':
					type = _Friends2['default'];
					break;
				case 'projects':
					type = _Projects2['default'];
					break;
				case 'project':
					if (hash.parts.length > 2) {
						if (hash.parts[2] === 'contact-sheet') {
							type = _Gallery2['default'];
							id = hash.targetId;
						} else {
							// zoom sur une photo
						}
					} else {
							type = _Project2['default'];
							id = hash.targetId;
						}
					break;
				case 'shop':
					if (hash.parts.length > 1) {
						type = _Print2['default'];
						id = hash.targetId;
					} else {
						type = _Shop2['default'];
					}
					break;
				case 'news':
					type = _News2['default'];
					break;
				case 'payment':
					type = _Payment2['default'];
					break;
				case 'contact':
					type = _Contact2['default'];
					break;
				case 'legal':
					type = _Legal2['default'];
					break;
				case 'privacy':
					type = _Privacy2['default'];
					break;
				default:
					type = _Notfound2['default'];
			}
			this.setupNewComponent(hash.parent, type, id);
		}
	}]);

	return PagesContainer;
})(_BasePager3['default']);

exports['default'] = PagesContainer;
module.exports = exports['default'];

},{"./../../pager/components/BasePager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePager.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./pages/Contact":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js","./pages/Fellowship":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Fellowship.js","./pages/Friends":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Friends.js","./pages/Gallery":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Gallery.js","./pages/Home":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js","./pages/Legal":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Legal.js","./pages/News":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/News.js","./pages/Notfound":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Notfound.js","./pages/Payment":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Payment.js","./pages/Print":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Print.js","./pages/Privacy":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js","./pages/Project":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Project.js","./pages/Projects":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js","./pages/Shop":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Contact = (function (_Page) {
	_inherits(Contact, _Page);

	function Contact(props) {
		_classCallCheck(this, Contact);

		_get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Contact, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'contactPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					content.title
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Contact.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Contact.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Contact.prototype), 'resize', this).call(this);
		}
	}]);

	return Contact;
})(_Page3['default']);

exports['default'] = Contact;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Fellowship.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var _offset = require('./../../utils/offset');

var _offset2 = _interopRequireDefault(_offset);

var _scrollTo = require('./../../utils/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var scroll = _Utils2['default'].Scroll();
var _ = require('lodash');

var Fellowship = (function (_Page) {
	_inherits(Fellowship, _Page);

	function Fellowship(props) {
		_classCallCheck(this, Fellowship);

		_get(Object.getPrototypeOf(Fellowship.prototype), 'constructor', this).call(this, props);

		// props
		this.props = props;

		// state
		this.state = {
			view: 'biography'
		};

		// function binded
		this._goToBiographyBinded = this._goToBiography.bind(this);
		this._toggleVideoBinded = this._toggleVideo.bind(this);
		this._rafBinded = this._raf.bind(this);

		// const
		this.PARALLAX_MARGE = 30;
		this.PARALLAX_DURATION = window.innerHeight;

		// vars
		this.videoPlayed = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Fellowship, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Fellowship.prototype), 'componentDidMount', this).call(this);

			this._limit = document.querySelector('.js-limit');
			this._artistSection = document.querySelector('.fellowship__artist');
			this._video = document.querySelector('.fellowship__video');
			this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop;
			this._elliott = document.querySelector('.fellowship__elliott');

			this._raf();
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			var fellowshipData = _AppStore2['default'].fellowshipContent();

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--fellowship', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu' },
					_react2['default'].createElement(
						'a',
						{ href: '#/friends', className: 'button' },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							'Friends of the fellowship'
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'fellowship' },
					_react2['default'].createElement(
						'div',
						{ className: 'video fellowship__video' },
						_react2['default'].createElement(
							'video',
							{ autoPlay: true, loop: true, muted: true, className: 'video__file' },
							_react2['default'].createElement('source', { src: './assets/videos/bg-home.mp4', type: 'video/mp4' }),
							_react2['default'].createElement('source', { src: './assets/videos/bg-home.webm', type: 'video/webm' })
						)
					),
					_react2['default'].createElement(
						'section',
						{ className: 'fellowship__presentation' },
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--big paragraph--center', 'data-ease': '.0' },
							'A fellowship is a communion of people sharing a common passion.'
						),
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--small paragraph--center' },
							'In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.'
						),
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--medium paragraph--center' },
							'Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7.'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'paragraph__row js-limit' },
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column paragraph__column--left' },
								_react2['default'].createElement('img', { className: 'fellowship__elliott', src: '../assets/images/elliott-erwitt.jpg' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column' },
								_react2['default'].createElement(
									'p',
									{ className: 'paragraph paragraph--small' },
									'A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.'
								)
							)
						),
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--medium paragraph--center' },
							'In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy.'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'paragraph__row' },
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column' },
								_react2['default'].createElement(
									'p',
									{ className: 'paragraph paragraph--small' },
									'In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.'
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column paragraph__column--right' },
								_react2['default'].createElement('img', { className: 'fellowship__elliott', src: '/static/img/ERE2015002W00033-36A_medium.jpg' })
							)
						),
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--small paragraph--center' },
							'The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision.'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'discover fellowship__discover', onClick: this._goToBiographyBinded },
						_react2['default'].createElement(
							'div',
							{ className: 'button' },
							_react2['default'].createElement(
								'span',
								{ className: 'button__content' },
								'Discover Elliott Erwitt\'s biography'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'discover__arrow' },
							_react2['default'].createElement('div', { className: 'arrow' })
						)
					),
					_react2['default'].createElement(
						'section',
						{ className: 'fellowship__artist' },
						_react2['default'].createElement(
							'p',
							{ className: 'fellowship__artistname paragraph paragraph--big paragraph--center', 'data-ease': '.0' },
							'ELLIOTT ERWITT’S BIOGRAPHY'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'paragraph__row' },
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column' },
								_react2['default'].createElement(
									'p',
									{ className: 'paragraph paragraph--small' },
									'Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.'
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column', onClick: this._toggleVideoBinded },
								_react2['default'].createElement(
									'video',
									{ className: 'fellowship__interview' },
									_react2['default'].createElement('source', { src: './assets/videos/bg-home.mp4', type: 'video/mp4' }),
									_react2['default'].createElement('source', { src: './assets/videos/bg-home.webm', type: 'video/webm' })
								),
								_react2['default'].createElement(
									'p',
									{ className: 'fellowship__play enabled' },
									'play video'
								)
							)
						),
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--small paragraph--center' },
							'Born in Paris in 1928 to Russian parents, Erwitt moved to the US with his family in 1939 and it was there that he met Edward Steichen and Roy Stryker. Recruited to Magnum Photos by Robert Capa in 1953 Erwitt has been a member of the prestigious agency ever since and has served several terms as its president.'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'paragraph__row' },
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column' },
								_react2['default'].createElement(
									'p',
									{ className: 'paragraph' },
									_react2['default'].createElement(
										'a',
										{ className: 'fellowship__button button', href: 'http://www.elliotterwitt.com', target: '_blank' },
										_react2['default'].createElement(
											'span',
											{ className: 'button__content' },
											'Elliott Erwitt official website'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column' },
								_react2['default'].createElement(
									'p',
									{ className: 'paragraph paragraph--small' },
									'To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs.'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'button' },
							_react2['default'].createElement(
								'a',
								{ href: '#/project/elliott-erwitt', className: 'fellowship__button button__content' },
								'Discover his project'
							)
						)
					)
				)
			);
		}
	}, {
		key: '_raf',
		value: function _raf() {
			if (this.scrollIndex % 3) this.scrollOk = true;else this.scrollOk = true;
			this.scrollIndex++;

			if (this.scrollOk) {
				// let top = window.pageYOffset;
				this._handleScroll();
			}

			scroll(this._rafBinded);
		}
	}, {
		key: '_handleScroll',
		value: function _handleScroll() {
			var _this = this;

			if (this._video && this._limit) {
				this.scrollTop = _Utils2['default'].GetScrollTop();
				this.videoOpacity = _Utils2['default'].Interval(1 - this.scrollTop / (this._limit.offsetTop + 160 - window.innerHeight), 0, 1);
				this._video.style.opacity = this.videoOpacity;
			}

			_((0, _domquery2['default'])('.paragraph')).forEach(function (el, index) {
				_this.ease = el.dataset.ease || 0.3;
				_this.limitOffset = (0, _offset2['default'])(el);
				// this.limitTop = this.limitOffset.top - window.innerHeight + this.PARALLAX_MARGE
				_this.limitTop = _this.limitOffset.top - window.innerHeight;
				_this.coef = _Utils2['default'].Interval(_this.limitTop / (-_this.PARALLAX_DURATION - _this.limitOffset.height), 0, 1);
				_this.elY = (1 - _this.coef) * 200 * _this.ease;
				// el.style.opacity = this.elOpacity
				el.style[_this.transform] = 'translate(0px, ' + _this.elY + 'px) translateZ(0px)';
			}).value();
		}
	}, {
		key: '_toggleVideo',
		value: function _toggleVideo() {
			if (this.videoPlayed) {
				document.querySelector('.fellowship__interview').pause();
				(0, _domquery2['default'])('.fellowship__play').addClass('enabled');
			} else {
				document.querySelector('.fellowship__interview').play();
				(0, _domquery2['default'])('.fellowship__play').removeClass('enabled');
			}
			this.videoPlayed = !this.videoPlayed;
		}
	}, {
		key: '_goToBiography',
		value: function _goToBiography() {
			this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop;
			_gsap2['default'].to(window, 0.6, { scrollTo: { y: this.artistOffsetTop - 40 }, ease: Power2.easeOut });
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Fellowship.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Fellowship.prototype), 'resize', this).call(this);

			if (windowW / 1.8 < windowH) (0, _domquery2['default'])('body').addClass('body--portrait');else (0, _domquery2['default'])('body').removeClass('body--portrait');
		}
	}]);

	return Fellowship;
})(_Page3['default']);

exports['default'] = Fellowship;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../../utils/scrollTo":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Friends.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Friends = (function (_Page) {
	_inherits(Friends, _Page);

	function Friends(props) {
		_classCallCheck(this, Friends);

		_get(Object.getPrototypeOf(Friends.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Friends, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'contactPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					'Friends of the fellowship'
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Friends.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Friends.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Friends.prototype), 'resize', this).call(this);
		}
	}]);

	return Friends;
})(_Page3['default']);

exports['default'] = Friends;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Gallery.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _PrintStore = require('./../../stores/PrintStore');

var _PrintStore2 = _interopRequireDefault(_PrintStore);

var _PrintApi = require('./../../api/PrintApi');

var _PrintApi2 = _interopRequireDefault(_PrintApi);

var _PrintActions = require('./../../actions/PrintActions');

var _PrintActions2 = _interopRequireDefault(_PrintActions);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _offset = require('./../../utils/offset');

var _offset2 = _interopRequireDefault(_offset);

var _ = require('lodash');
var Masonry = require('masonry-layout');
var scroll = _Utils2['default'].Scroll();

var Gallery = (function (_Page) {
	_inherits(Gallery, _Page);

	function Gallery(props) {
		_classCallCheck(this, Gallery);

		_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this, props);

		// props
		this.props = props;

		// state
		this.state = {
			prints: [],
			loadedPrints: []
		};

		// function binded
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this._rafBinded = this._raf.bind(this);

		// const
		this.OPACITY_MARGE = 30;
		this.OPACITY_DURATION = 300;

		// vars
		this.loaded = false;
		this.nImageLoaded = 0;
		this.prints = [];
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Gallery, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Gallery.prototype), 'componentDidMount', this).call(this);

			_PrintApi2['default'].getByArtist(this.props.idSection);
			_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);

			this._raf();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.cancelAnimationFrame(this.scrollRaf);
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			this.tlIn.from(wrapper, 1, { opacity: 0, ease: Expo.easeInOut });

			// transition Out
			this.tlOut.to(wrapper, 0.6, { opacity: 0, ease: Expo.easeOut });

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			var printIndex = -1;
			return _react2['default'].createElement(
				'div',
				{ className: 'page page--gallery', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu' },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + this.props.idSection, className: 'button' },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							'Back to gallery'
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'gallery' },
					Object.keys(this.state.loadedPrints).map(function (year, i) {
						return _react2['default'].createElement(
							'div',
							{ className: 'gallery__grid', key: year + '_' + i },
							_react2['default'].createElement('div', { className: 'gallery__width' }),
							_react2['default'].createElement(
								'div',
								{ className: 'gallery__item gallery__item--large gallery__item--disabled' },
								year
							),
							Object.keys(that.state.loadedPrints[year]).map(function (printId, j) {
								var print = that.state.loadedPrints[year][printId];
								var src = '/static/img/' + print.file + '_min.jpg';
								var random = Math.floor(Math.random() * 6);
								printIndex++;
								return _react2['default'].createElement(
									'div',
									{ className: 'gallery__item gallery__item--' + print.size + ' gallery__item--' + random, 'data-random': random, key: printId, onClick: that.zoomPrint.bind(that, printIndex) },
									_react2['default'].createElement('img', { className: 'gallery__image', src: src })
								);
							})
						);
					})
				)
			);
		}
	}, {
		key: '_raf',
		value: function _raf() {
			if (this.scrollIndex % 3) this.scrollOk = true;else this.scrollOk = true;
			this.scrollIndex++;

			if (this.scrollOk) {
				this.handleScroll();
			}

			this.scrollRaf = scroll(this._rafBinded);
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {
			var _this = this;

			_((0, _domquery2['default'])('.gallery__item')).forEach(function (el, index) {
				_this.limitOffset = (0, _offset2['default'])(el);
				_this.limitTop = _this.limitOffset.top - window.innerHeight + _this.OPACITY_MARGE;
				_this.elOpacity = _Utils2['default'].Interval(_this.limitTop / -_this.OPACITY_DURATION, 0, 1);
				_this.elY = (1 - _this.elOpacity) * 50;
				el.style.opacity = _this.elOpacity;
				el.style[_this.transform] = 'translate(0px, ' + _this.elY + 'px) translateZ(0px)';
			}).value();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _this2 = this;

			var that = this,
			    file = undefined;
			this.max = _.size(this.state.prints);
			this.printsDate = {};
			if (this.max > 0 && !this.loaded) {
				this.loaded = true;
				_(this.state.prints).forEach(function (print, index) {
					if (!_this2.printsDate[print.year]) _this2.printsDate[print.year] = {};
					_this2.printsDate[print.year][index] = print;

					file = new Image();
					file.onload = that.onImageLoaded.bind(that, _this2.printsDate[print.year][index]);
					file.src = '/static/img/' + print.file + '_min.jpg';
				}).value();
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(print, e) {
			this.nImageLoaded++;

			var that = this;
			var path = e.explicitOriginalTarget || e.target || e.path[0];
			if (path.height >= path.width * 1.2) print.size = 'small';else print.size = 'large';

			if (this.nImageLoaded >= this.max) {
				this.setState({
					'loadedPrints': this.printsDate
				}, function () {
					var grids = document.querySelectorAll('.gallery__grid');
					_(grids).forEach(function (grid) {
						var iso = new Masonry(grid, {
							itemSelector: '.gallery__item',
							columnWidth: '.gallery__width',
							gutter: 24
						});
					}).value();
				});
			}
		}
	}, {
		key: 'zoomPrint',
		value: function zoomPrint(id) {
			var that = this;

			_PrintActions2['default'].setPrintZoom(id);
			window.cancelAnimationFrame(this.scrollRaf);

			this.tlItemsOut = new TimelineMax();
			this.tlItemsOut.staggerTo(_.shuffle((0, _domquery2['default'])('.gallery__item')), 0.6, { opacity: 0, ease: Expo.easeOut }, 0.01);
			this.tlItemsOut.addCallback(function () {
				window.location.href = '#/project/' + that.props.idSection;
			}, '-=0.2');
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Gallery.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Gallery.prototype), 'resize', this).call(this);
		}
	}, {
		key: '_onPrintStoreChange',
		value: function _onPrintStoreChange() {
			this.setState({
				prints: _PrintStore2['default'].getArtistPrints()
			}, function () {});
		}
	}]);

	return Gallery;
})(_Page3['default']);

exports['default'] = Gallery;
module.exports = exports['default'];

},{"./../../actions/PrintActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","lodash":"lodash","masonry-layout":"masonry-layout","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var Home = (function (_Page) {
	_inherits(Home, _Page);

	function Home(props) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Home.prototype), 'componentDidMount', this).call(this);

			this._canvas = document.querySelector('.canvas');

			if (this._canvas) {
				this._canvas.style.display = 'block';
				_gsap2['default'].set((0, _domquery2['default'])('.front-container'), { opacity: 0 });
				_gsap2['default'].set((0, _domquery2['default'])('.home'), { opacity: 0 });
				_gsap2['default'].set((0, _domquery2['default'])('.cart'), { opacity: 0 });

				this.showPageBinded = this.showPage.bind(this);
				this.initCanvas();
				this.initAnimation();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var homeData = _AppStore2['default'].homeContent();
			return _react2['default'].createElement(
				'div',
				{ className: 'page page--home', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'video home__video' },
					_react2['default'].createElement(
						'video',
						{ autoPlay: true, loop: true, muted: true, className: 'video__file' },
						_react2['default'].createElement('source', { src: './assets/videos/bg-home.mp4', type: 'video/mp4' }),
						_react2['default'].createElement('source', { src: './assets/videos/bg-home.webm', type: 'video/webm' })
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'home' },
					Object.keys(homeData.paragraphs).map(function (index) {
						return _react2['default'].createElement(
							'p',
							{ className: 'home__paragraph text text--big', key: index },
							homeData.paragraphs[index]
						);
					})
				)
			);
			// <p className='text text--big' dangerouslySetInnerHTML={{__html: homeData.content}} />
		}

		// setupAnimations() {
		// 	let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// 	// transition In
		// 	this.tlIn.from(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

		// 	// transition Out
		// 	this.tlOut.to(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

		// 	// reset
		// 	this.tlIn.pause(0)
		// 	this.tlOut.pause(0)
		// }

	}, {
		key: 'initCanvas',
		value: function initCanvas() {
			var ctx = this._canvas.getContext('2d');
			var vw = window.innerWidth;
			var vh = window.innerHeight;

			this._canvas.width = vw;
			this._canvas.height = vh;

			// background black
			ctx.beginPath();
			ctx.rect(0, 0, vw, vh);
			ctx.fillStyle = 'black';
			ctx.fill();

			// crop logo
			ctx.font = "400 72px 'hc7modern'";
			ctx.textAlign = "center";
			ctx.globalCompositeOperation = "destination-out";
			// ctx.fillText('Elliott Erwitt Havana Club 7', vw/2, vh/2 - 16);
			ctx.fillText('ELLIOTT ERWITT HAVANA CLUB 7', vw / 2, vh / 2 - 16);
			ctx.font = "400 72px 'Stanley'";
			ctx.fillText('Fellowship', vw / 2, vh / 2 + 68);
		}
	}, {
		key: 'initAnimation',
		value: function initAnimation() {
			var that = this;

			this.tlEntry = new TimelineMax({ delay: 4, onComplete: function onComplete() {
					that._canvas.remove();
				} });
			this.tlEntry.to(this._canvas, 1, { opacity: 0, ease: Power2.easeOut });
			this.tlEntry.to((0, _domquery2['default'])('.front-container'), 0.4, { opacity: 1 }, 0.6);
			this.tlEntry.to((0, _domquery2['default'])('.home'), 0.4, { opacity: 1 }, 0.6);
			this.tlEntry.to((0, _domquery2['default'])('.cart'), 0.4, { opacity: 1 }, 0.6);
			// TweenMax.to(this._canvas, 4, {x: -vw, ease: Power2.easeOut, delay: 4, onComplete: this.showPageBinded});
		}
	}, {
		key: 'showPage',
		value: function showPage() {
			_gsap2['default'].to((0, _domquery2['default'])('.front-container'), 0.4, { opacity: 1 });
			_gsap2['default'].to((0, _domquery2['default'])('.home'), 0.4, { opacity: 1 });
			_gsap2['default'].to((0, _domquery2['default'])('.cart'), 0.4, { opacity: 1 });
			this._canvas.remove();
		}
	}, {
		key: 'didTransitionInComplete',
		value: function didTransitionInComplete() {
			_get(Object.getPrototypeOf(Home.prototype), 'didTransitionInComplete', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Home.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Home.prototype), 'resize', this).call(this);

			if (windowW / 1.8 < windowH) (0, _domquery2['default'])('body').addClass('body--portrait');else (0, _domquery2['default'])('body').removeClass('body--portrait');

			if (window.innerHeight - document.querySelector('.home').offsetHeight < 200) {
				(0, _domquery2['default'])('.home').addClass('home--relative');
			} else {
				(0, _domquery2['default'])('.home').removeClass('home--relative');
			}
		}
	}]);

	return Home;
})(_Page3['default']);

exports['default'] = Home;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Legal.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Legal = (function (_Page) {
	_inherits(Legal, _Page);

	function Legal(props) {
		_classCallCheck(this, Legal);

		_get(Object.getPrototypeOf(Legal.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Legal, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'legalPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					content.title
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Legal.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Legal.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Legal.prototype), 'resize', this).call(this);
		}
	}]);

	return Legal;
})(_Page3['default']);

exports['default'] = Legal;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/News.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var News = (function (_Page) {
	_inherits(News, _Page);

	function News(props) {
		_classCallCheck(this, News);

		_get(Object.getPrototypeOf(News.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(News, [{
		key: 'render',
		value: function render() {
			var side = undefined;
			var newsData = _AppStore2['default'].newsContent();
			var newsItems = newsData.map(function (item, index) {
				if (index % 2 === 0) {
					return _react2['default'].createElement(
						'article',
						{ key: index, className: 'news__item news__item--right' },
						_react2['default'].createElement(
							'div',
							{ className: 'news__content' },
							item.content
						),
						_react2['default'].createElement(
							'div',
							{ className: 'news__date' },
							item.date
						)
					);
				} else {
					return _react2['default'].createElement(
						'article',
						{ key: index, className: 'news__item news__item--left' },
						_react2['default'].createElement(
							'div',
							{ className: 'news__date' },
							item.date
						),
						_react2['default'].createElement(
							'div',
							{ className: 'news__content' },
							item.content
						)
					);
				}
			});
			return _react2['default'].createElement(
				'div',
				{ className: 'page page--news', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'section',
					{ className: 'news' },
					newsItems
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(News.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(News.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(News.prototype), 'resize', this).call(this);
		}
	}]);

	return News;
})(_Page3['default']);

exports['default'] = News;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Notfound.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Notfound = (function (_Page) {
	_inherits(Notfound, _Page);

	function Notfound(props) {
		_classCallCheck(this, Notfound);

		_get(Object.getPrototypeOf(Notfound.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Notfound, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: '404Page', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'p',
						null,
						'Error 404 — Page not found'
					)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Notfound.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Notfound.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Notfound.prototype), 'resize', this).call(this);
		}
	}]);

	return Notfound;
})(_Page3['default']);

exports['default'] = Notfound;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Payment.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _CartActions = require('./../../actions/CartActions');

var _CartActions2 = _interopRequireDefault(_CartActions);

var _CartStore = require('./../../stores/CartStore');

var _CartStore2 = _interopRequireDefault(_CartStore);

var _CartApi = require('./../../api/CartApi');

var _CartApi2 = _interopRequireDefault(_CartApi);

var _PrintApi = require('./../../api/PrintApi');

var _PrintApi2 = _interopRequireDefault(_PrintApi);

var _ = require('lodash');

function _getCartState() {
	return {
		cartItems: _CartStore2['default'].getCartItems(),
		cartCount: _CartStore2['default'].getCartCount(),
		cartTotal: _CartStore2['default'].getCartTotal()
	};
}

var Payment = (function (_Page) {
	_inherits(Payment, _Page);

	function Payment(props) {
		_classCallCheck(this, Payment);

		_get(Object.getPrototypeOf(Payment.prototype), 'constructor', this).call(this, props);

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');

		this.state = _getCartState();
	}

	_createClass(Payment, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Payment.prototype), 'componentDidMount', this).call(this);

			var hack = setTimeout(function () {
				_CartActions2['default'].updateCartEnabled(false);
				_CartActions2['default'].updateCartVisible(false);
				clearTimeout(hack);
			}, 0);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_CartActions2['default'].updateCartVisible(true);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--payment', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'payment' },
					_react2['default'].createElement(
						'form',
						{ className: 'payment__form form' },
						_react2['default'].createElement(
							'div',
							{ className: 'payment__column' },
							_react2['default'].createElement(
								'h3',
								{ className: 'form__title' },
								'Checkout'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement(
									'label',
									{ className: 'form__label', htmlFor: 'mail' },
									'Enter your email address'
								),
								_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'mail', id: 'mail' })
							),
							_react2['default'].createElement(
								'h3',
								{ className: 'form__title' },
								'Shipping address'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row form__row--half' },
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement(
										'label',
										{ className: 'form__label', htmlFor: 'firstname' },
										'First name *'
									),
									_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'text', id: 'firstname' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement(
										'label',
										{ className: 'form__label', htmlFor: 'lastname' },
										'Last name *'
									),
									_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'text', id: 'lastname' })
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement(
									'label',
									{ className: 'form__label', htmlFor: 'phone' },
									'Telephone *'
								),
								_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'tel', id: 'phone' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement(
									'label',
									{ className: 'form__label', htmlFor: 'address' },
									'Address *'
								),
								_react2['default'].createElement('input', { className: 'form__input form__input--text form__input--comp', type: 'text', id: 'address' }),
								_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'text', id: 'addressBis' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row form__row--half' },
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement(
										'label',
										{ className: 'form__label', htmlFor: 'zip' },
										'Zip/Postal code *'
									),
									_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'text', id: 'zip' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement(
										'label',
										{ className: 'form__label', htmlFor: 'city' },
										'City'
									),
									_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'text', id: 'city' })
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement(
									'label',
									{ className: 'form__label', htmlFor: 'country' },
									'Country *'
								),
								_react2['default'].createElement('input', { className: 'form__input form__input--text', type: 'text', id: 'country' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', type: 'checkbox', id: 'billAddress' }),
								_react2['default'].createElement(
									'label',
									{ className: 'form__label form__label--pointer', htmlFor: 'billAddress' },
									_react2['default'].createElement(
										'p',
										{ className: 'form__text' },
										'Bill to the same address'
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'payment__column' },
							_react2['default'].createElement(
								'h3',
								{ className: 'form__title' },
								'Shipping method'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'shippingMethod', type: 'radio', id: 'upsStandard' }),
								_react2['default'].createElement(
									'label',
									{ className: 'form__label form__label--pointer', htmlFor: 'upsStandard' },
									_react2['default'].createElement(
										'p',
										{ className: 'form__text' },
										'UPS Standard - Delivery within 3-5 business days, 10 €'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'shippingMethod', type: 'radio', id: 'upsExpress' }),
								_react2['default'].createElement(
									'label',
									{ className: 'form__label form__label--pointer', htmlFor: 'upsExpress' },
									_react2['default'].createElement(
										'p',
										{ className: 'form__text' },
										'UPS Express - Delivery within 2-3 business days, 20 €'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'shippingMethod', type: 'radio', id: 'freeShipping', defaultChecked: true }),
								_react2['default'].createElement(
									'label',
									{ className: 'form__label form__label--pointer', htmlFor: 'freeShipping' },
									_react2['default'].createElement(
										'p',
										{ className: 'form__text' },
										'Free shipping (UPS standard), 0 €'
									)
								)
							),
							_react2['default'].createElement(
								'h3',
								{ className: 'payment__method form__title' },
								'Payment method'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row form__row--half' },
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'paymentMethod', type: 'radio', id: 'maestro', defaultChecked: true }),
									_react2['default'].createElement(
										'label',
										{ className: 'form__label form__label--pointer', htmlFor: 'maestro' },
										_react2['default'].createElement(
											'p',
											{ className: 'form__text' },
											_react2['default'].createElement('img', { src: './assets/images/maestro-black.png' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'paymentMethod', type: 'radio', id: 'visa' }),
									_react2['default'].createElement(
										'label',
										{ className: 'form__label form__label--pointer', htmlFor: 'visa' },
										_react2['default'].createElement(
											'p',
											{ className: 'form__text' },
											_react2['default'].createElement('img', { src: './assets/images/visa-black.png' })
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row form__row--half' },
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'paymentMethod', type: 'radio', id: 'paypal' }),
									_react2['default'].createElement(
										'label',
										{ className: 'form__label form__label--pointer', htmlFor: 'paypal' },
										_react2['default'].createElement(
											'p',
											{ className: 'form__text' },
											_react2['default'].createElement('img', { src: './assets/images/paypal-black.png' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'form__column' },
									_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', name: 'paymentMethod', type: 'radio', id: 'americanExpress' }),
									_react2['default'].createElement(
										'label',
										{ className: 'form__label form__label--pointer', htmlFor: 'americanExpress' },
										_react2['default'].createElement(
											'p',
											{ className: 'form__text' },
											_react2['default'].createElement('img', { src: './assets/images/american-black.png' })
										)
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'payment__column' },
							_react2['default'].createElement(
								'h3',
								{ className: 'form__title' },
								'Order summary'
							),
							_react2['default'].createElement(
								'ul',
								{ className: 'payment__products cart__products' },
								Object.keys(this.state.cartItems).map(function (index) {
									var product = that.state.cartItems[index];
									return _react2['default'].createElement(
										'li',
										{ key: index, className: 'payment__product cart__product' },
										_react2['default'].createElement(
											'div',
											{ className: 'cart__column' },
											_react2['default'].createElement('div', { className: 'cart__artist' }),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__details' },
												_react2['default'].createElement(
													'div',
													{ className: 'cart__city' },
													product.city
												),
												', ',
												_react2['default'].createElement(
													'div',
													{ className: 'cart__year' },
													product.year
												)
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__serial' },
												'Serial ',
												_react2['default'].createElement(
													'span',
													{ className: 'cart__number' },
													product.serial,
													'/',
													product.copies
												)
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__price' },
												product.price,
												_react2['default'].createElement(
													'span',
													{ className: 'cart__currency' },
													'€'
												)
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'cart__column' },
											_react2['default'].createElement(
												'div',
												{ className: 'cart__print' },
												_react2['default'].createElement('img', { className: 'cart__image', src: '/static/img/' + product.file + '_min.jpg' })
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__remove button button--left', onClick: that.removeItem.bind(that, index) },
												_react2['default'].createElement(
													'span',
													{ className: 'button__content' },
													'Remove item'
												)
											)
										)
									);
								})
							),
							_react2['default'].createElement(
								'div',
								{ className: 'payment__total cart__total' },
								_react2['default'].createElement(
									'div',
									{ className: 'payment__subtotal cart__subtotal' },
									_react2['default'].createElement(
										'div',
										{ className: 'cart__column' },
										'Subtotal:'
									),
									_react2['default'].createElement(
										'div',
										{ className: 'cart__column' },
										this.state.cartTotal,
										_react2['default'].createElement(
											'span',
											{ className: 'cart__currency' },
											'€'
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'cart__tva' },
									_react2['default'].createElement(
										'div',
										{ className: 'cart__column' },
										'Included TVA:'
									),
									_react2['default'].createElement(
										'div',
										{ className: 'cart__column' },
										this.state.cartTotal,
										_react2['default'].createElement(
											'span',
											{ className: 'cart__currency' },
											'€'
										)
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'cart__bigtotal' },
								_react2['default'].createElement(
									'div',
									{ className: 'cart__column' },
									'Grand total:'
								),
								_react2['default'].createElement(
									'div',
									{ className: 'cart__column' },
									this.state.cartTotal,
									_react2['default'].createElement(
										'span',
										{ className: 'cart__currency' },
										'€'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', type: 'checkbox', id: 'newsletter' }),
								_react2['default'].createElement(
									'label',
									{ className: 'form__label form__label--pointer', htmlFor: 'newsletter' },
									_react2['default'].createElement(
										'p',
										{ className: 'form__text' },
										'News'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'form__row' },
								_react2['default'].createElement('input', { className: 'form__input form__input--checkbox', type: 'checkbox', id: 'conditions' }),
								_react2['default'].createElement(
									'label',
									{ className: 'form__label form__label--pointer', htmlFor: 'conditions' },
									_react2['default'].createElement(
										'p',
										{ className: 'form__text' },
										'I accept the terms and conditions*'
									)
								)
							),
							_react2['default'].createElement(
								'a',
								{ href: '', className: 'payment__pay button', onClick: this.pay.bind(this) },
								_react2['default'].createElement(
									'span',
									{ className: 'button__content' },
									'Proceed to payment'
								)
							)
						)
					),
					_react2['default'].createElement(
						'form',
						{ method: 'post', action: 'https://secure-test.be2bill.com/front/form/process', id: 'myform' },
						_react2['default'].createElement('input', { type: 'hidden', name: 'AMOUNT', value: '1000' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'IDENTIFIER', value: 'CONVOY' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'OPERATIONTYPE', value: 'payment' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'ORDERID', value: 'order_000123' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'CLIENTIDENT', value: 'client_123' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'DESCRIPTION', value: 'art_123456' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'VERSION', value: '2.0' }),
						_react2['default'].createElement('input', { type: 'hidden', name: 'HASH', value: '6b87bfae46eb204950c70058f227f73c1a95827c0b0f95e1afa4ad4525eb67b5' }),
						_react2['default'].createElement('input', { type: 'submit', value: 'Pay with be2bill' })
					)
				)
			);
		}
	}, {
		key: 'pay',
		value: function pay(e) {
			e.preventDefault();
			// <form method="post" action="https://secure-test.be2bill.com/front/form/process" id="myform">
			// 	<input type="hidden" name="3DSECURE" value="yes" />
			// 	<input type="hidden" name="CARDFULLNAME" value="John Doe" />
			// 	<input type="hidden" name="CLIENTEMAIL" value="john.doe@email.com" />
			// 	<input type="hidden" name="HIDECARDFULLNAME" value="yes" />
			// 	<input type="hidden" name="HIDECLIENTEMAIL" value="yes" />
			// 	<input type="hidden" name="AMOUNT" value="1000" />
			// 	<input type="hidden" name="IDENTIFIER" value="CONVOY" />
			// 	<input type="hidden" name="OPERATIONTYPE" value="payment" />
			// 	<input type="hidden" name="ORDERID" value="order_000123" />
			// 	<input type="hidden" name="CLIENTIDENT" value="client_123" />
			// 	<input type="hidden" name="DESCRIPTION" value="art_123456" />
			// 	<input type="hidden" name="VERSION" value="2.0" />
			// 	<input type="hidden" name="HASH" value="6b87bfae46eb204950c70058f227f73c1a95827c0b0f95e1afa4ad4525eb67b5" />
			// 	<input type="submit" value="Pay with be2bill" />
			// </form>

			// _(this.state.cartItems).forEach((item, index) => {
			// 	PrintApi.order(index, item.serial)
			// }).value();

			// CartApi.pay()
			_CartApi2['default'].generatePayButton();
		}
	}, {
		key: 'removeItem',
		value: function removeItem(id) {
			_CartActions2['default'].removeFromCart(id);
			this.setState(_getCartState());
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Payment.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Payment.prototype), 'resize', this).call(this);
		}
	}]);

	return Payment;
})(_Page3['default']);

exports['default'] = Payment;
module.exports = exports['default'];

},{"./../../actions/CartActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js","./../../api/CartApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/CartApi.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/CartStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/CartStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Print.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _PrintStore = require('./../../stores/PrintStore');

var _PrintStore2 = _interopRequireDefault(_PrintStore);

var _PrintApi = require('./../../api/PrintApi');

var _PrintApi2 = _interopRequireDefault(_PrintApi);

var _CartActions = require('./../../actions/CartActions');

var _CartActions2 = _interopRequireDefault(_CartActions);

var _CartStore = require('./../../stores/CartStore');

var _CartStore2 = _interopRequireDefault(_CartStore);

var _ = require('lodash');

var Print = (function (_Page) {
	_inherits(Print, _Page);

	function Print(props) {
		_classCallCheck(this, Print);

		_get(Object.getPrototypeOf(Print.prototype), 'constructor', this).call(this, props);

		// state
		this.state = {
			print: undefined,
			selectedSerial: undefined,
			loadedPrint: undefined,
			cartItems: _CartStore2['default'].getCartItems(),
			validSerials: []
		};

		// function binded
		this._toggleListBinded = this._toggleList.bind(this);
		this._addToCartBinded = this._addToCart.bind(this);
		this._onStoreChangeBinded = this._onStoreChange.bind(this);
		this._onCartStoreChangeBinded = this._onCartStoreChange.bind(this);

		// vars
		this.loaded = false;
		this.validSerials = [];

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Print, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Print.prototype), 'componentDidMount', this).call(this);

			_PrintApi2['default'].getOne(this.props.idSection);
			_PrintStore2['default'].addChangeListener(this._onStoreChangeBinded);
			_CartStore2['default'].addChangeListener(this._onStoreChangeBinded);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			this._loadImage();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var file = undefined;
			if (!this.loaded) {
				this.loaded = true;
				this._loadImage();
			}

			// this._updateSerials()
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_PrintStore2['default'].removeChangeListener(this._onStoreChangeBinded);
			_CartStore2['default'].removeChangeListener(this._onStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var that = this;

			if (this.state.print) {
				this.validSerials = this._getValidSerials();
				this.selectedSerial = this.state.selectedSerial || this._getFirstSerial();
			}

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--print', ref: 'page-wrapper' },
				(function () {
					if (_this.state.print) return _react2['default'].createElement(
						'div',
						{ className: 'print' },
						_this.state.loadedPrint,
						_react2['default'].createElement(
							'div',
							{ className: 'print__infos' },
							_react2['default'].createElement(
								'h2',
								{ className: 'print__title print__title--margin' },
								that.state.print.title
							),
							_react2['default'].createElement(
								'h3',
								{ className: 'print__location' },
								_react2['default'].createElement(
									'span',
									{ className: 'print__city' },
									that.state.print.city,
									', ',
									that.state.print.country,
									','
								),
								' ',
								that.state.print.year
							),
							_react2['default'].createElement(
								'h3',
								{ className: 'print__artist' },
								'Elliott Erwitt'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'print__price text text--small' },
								that.state.print.price,
								'€'
							),
							_react2['default'].createElement(
								'p',
								{ className: 'print__desc text text--small' },
								that.state.print.desc
							),
							_react2['default'].createElement(
								'div',
								{ className: 'print__serials' },
								(function () {
									if (that.state.print.serials.length > 0) {
										return _react2['default'].createElement(
											'div',
											null,
											_react2['default'].createElement(
												'div',
												{ className: 'print__serial-opt' },
												'Serial option'
											),
											_react2['default'].createElement(
												'div',
												{ className: 'print__select' },
												_react2['default'].createElement(
													'div',
													{ className: 'print__serial--selected', onClick: _this._toggleListBinded },
													that.selectedSerial
												),
												_react2['default'].createElement(
													'ul',
													{ className: 'print__serial-list' },
													Object.keys(that.validSerials).map(function (index) {
														var enabled = that.validSerials[index];
														var serial = parseInt(index) + 1;
														// let classSelected = (serial === that.state.serial) ? 'print__serial--selected' : ''
														// let classEnabled = (enabled) ? 'print__serial--enabled' : ''
														if (enabled) {
															return _react2['default'].createElement(
																'li',
																{ className: 'print__serial', onClick: that._selectSerial.bind(that, serial), key: index },
																serial
															);
														} else {
															return _react2['default'].createElement(
																'li',
																{ className: 'print__serial print__serial--disabled', key: index },
																serial
															);
														}
													})
												)
											),
											_react2['default'].createElement(
												'a',
												{ href: '#', className: 'print__buy text text--small button button--reverse', onClick: that._addToCartBinded },
												_react2['default'].createElement(
													'span',
													{ className: 'button__content' },
													'Buy print'
												)
											)
										);
									} else {
										return _react2['default'].createElement(
											'div',
											null,
											'Out of stock'
										);
									}
								})()
							)
						)
					);
				})()
			);
		}

		// _updateSerials() {
		// 	console.log('update validSerials')
		// 	this.validSerials = []
		// 	this.cartSerials = _.pluck(_.filter(this.state.cartItems, { 'id': this.state.print._id }), 'serial')
		// 	_(this.state.print.serials).forEach((value, index) => {
		// 		if (_.indexOf(this.cartSerials, index+1) > -1) this.validSerials[index] = false
		// 		else this.validSerials[index] = value
		// 	}).value()

		// 	// this.setState({
		// 	// 	validSerials: this.validSerials
		// 	// }, () => {
		// 	// 	this._getFirstSerial()
		// 	// })

		// 	this.setState({
		// 		validSerials: this.validSerials,
		// 		selectedSerial: this._getFirstSerial()
		// 	})
		// }

	}, {
		key: '_getValidSerials',
		value: function _getValidSerials() {
			var _this2 = this;

			this.validSerials = [];
			this.cartSerials = _.pluck(_.filter(this.state.cartItems, { 'id': this.state.print._id }), 'serial');
			_(this.state.print.serials).forEach(function (value, index) {
				if (_.indexOf(_this2.cartSerials, index + 1) > -1) _this2.validSerials[index] = false;else _this2.validSerials[index] = value;
			}).value();

			return this.validSerials;
		}
	}, {
		key: '_getFirstSerial',
		value: function _getFirstSerial() {
			return _.indexOf(this.validSerials, true) + 1;
		}
	}, {
		key: '_selectSerial',
		value: function _selectSerial(serial, e) {
			this._toggleList();
			(0, _domquery2['default'])('.serial--enabled').removeClass('serial--enabled');
			(0, _domquery2['default'])(e.target).addClass('serial--enabled');
			this.setState({
				selectedSerial: serial
			});
		}
	}, {
		key: '_addToCart',
		value: function _addToCart(e) {
			e.stopPropagation();
			e.preventDefault();

			var printId = this.state.print._id;
			var update = {
				id: this.state.print._id,
				city: this.state.print.city,
				year: this.state.print.year,
				price: this.state.print.price,
				serial: this.state.selectedSerial,
				file: this.state.print.file,
				copies: this.state.print.copies
			};
			_CartActions2['default'].addToCart(printId, update);
			_CartActions2['default'].updateCartEnabled(true);

			this.setState({
				selectedSerial: this._getFirstSerial()
			});
		}
	}, {
		key: '_toggleList',
		value: function _toggleList() {
			(0, _domquery2['default'])('.print__serial-list').toggleClass('enabled');
		}
	}, {
		key: '_loadImage',
		value: function _loadImage() {
			var that = this,
			    file = undefined;

			file = new Image();
			file.onload = that._onImageLoaded.bind(that);
			file.src = '/static/img/' + this.state.print.file + '_medium.jpg';
		}
	}, {
		key: '_onImageLoaded',
		value: function _onImageLoaded(e) {
			var size = undefined;
			var path = e.explicitOriginalTarget || e.target || e.path[0];
			if (path.height >= path.width * 1.2) size = 'portrait';else size = 'landscape';
			var dim = '27.9 × 35.6 cm'; // gérer la conversion (11 × 14 inches)

			this.print = _react2['default'].createElement(
				'div',
				{ className: 'print__left' },
				_react2['default'].createElement(
					'div',
					{ className: 'print__image print__image--' + size },
					_react2['default'].createElement('img', { src: '/static/img/' + this.state.print.file + '_medium.jpg' }),
					_react2['default'].createElement(
						'div',
						{ className: 'print__tech' },
						_react2['default'].createElement(
							'p',
							null,
							'Silver gelatin print measuring'
						),
						_react2['default'].createElement(
							'p',
							null,
							dim,
							', unframed.'
						),
						_react2['default'].createElement(
							'p',
							null,
							'Printed under the direct supervision of the artist.'
						),
						_react2['default'].createElement(
							'p',
							null,
							'One of a signed, limited edition of ',
							this.state.print.copies,
							'.'
						)
					)
				)
			);

			// if (params.path[0].height >= params.path[0].width*1.2) {
			// 	this.print = <div className='print__left'><div className='print__image print__image--portrait'><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
			// } else {
			// 	this.print = <div className='print__left'><div className='print__image print__image--landscape'><img src={'/static/img/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
			// }
			this.setState({
				'loadedPrint': this.print
			});
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Print.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Print.prototype), 'resize', this).call(this);
		}
	}, {
		key: '_onStoreChange',
		value: function _onStoreChange() {
			var _this3 = this;

			this.setState({
				print: _PrintStore2['default'].getOne(),
				cartItems: _CartStore2['default'].getCartItems()
			}, // selectedSerial: this._getFirstSerial()
			function () {
				_this3.setState({
					selectedSerial: _this3._getFirstSerial()
				});
			});
		}
	}, {
		key: '_onCartStoreChange',
		value: function _onCartStoreChange() {
			this.setState({
				cartItems: _CartStore2['default'].getCartItems()
			});
		}

		// _onStoreChange() {
		// 	this.setState({
		// 		print: PrintStore.getOne(),
		// 		// cartItems: CartStore.getCartItems()
		// 	}, () => {
		// 		this._updateSerials()
		// 		this._loadImage()
		// 		this.setState({
		// 			serial: this._getFirstSerial()
		// 		})
		// 	})
		// }

		// _onCartStoreChange() {
		// 	this.setState({
		// 		cartItems: CartStore.getCartItems()
		// 	}, () => {
		// 		this._updateSerials()
		// 		this.setState({
		// 			serial: this._getFirstSerial()
		// 		})
		// 	})
		// }
	}]);

	return Print;
})(_Page3['default']);

exports['default'] = Print;
module.exports = exports['default'];

},{"./../../actions/CartActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/CartStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/CartStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Privacy = (function (_Page) {
	_inherits(Privacy, _Page);

	function Privacy(props) {
		_classCallCheck(this, Privacy);

		_get(Object.getPrototypeOf(Privacy.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Privacy, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'privacyPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					content.title
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Privacy.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Privacy.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Privacy.prototype), 'resize', this).call(this);
		}
	}]);

	return Privacy;
})(_Page3['default']);

exports['default'] = Privacy;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Project.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppActions = require('./../../actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var _PrintStore = require('./../../stores/PrintStore');

var _PrintStore2 = _interopRequireDefault(_PrintStore);

var _PrintApi = require('./../../api/PrintApi');

var _PrintApi2 = _interopRequireDefault(_PrintApi);

var _PrintActions = require('./../../actions/PrintActions');

var _PrintActions2 = _interopRequireDefault(_PrintActions);

var _PrintConstants = require('./../../constants/PrintConstants');

var _PrintConstants2 = _interopRequireDefault(_PrintConstants);

var _ArtistStore = require('./../../stores/ArtistStore');

var _ArtistStore2 = _interopRequireDefault(_ArtistStore);

var _ArtistApi = require('./../../api/ArtistApi');

var _ArtistApi2 = _interopRequireDefault(_ArtistApi);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _offset = require('./../../utils/offset');

var _offset2 = _interopRequireDefault(_offset);

var _scrollTo = require('./../../utils/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _ = require('lodash');
var scroll = _Utils2['default'].Scroll();

var Project = (function (_Page) {
	_inherits(Project, _Page);

	function Project(props) {
		_classCallCheck(this, Project);

		_get(Object.getPrototypeOf(Project.prototype), 'constructor', this).call(this, props);

		// props
		this.props = props;

		// state
		this.state = {
			artist: undefined,
			slideshow: {},
			print: {},
			prints: {},
			current: 0
		};

		// function binded
		this._showSlideshowBinded = this._showSlideshow.bind(this);
		this._toggleZoomBinded = this._toggleZoom.bind(this);
		this._toggleStoryBinded = this._toggleStory.bind(this);
		this._backToGalleryBinded = this._backToGallery.bind(this);
		this._prevBinded = this._prev.bind(this);
		this._nextBinded = this._next.bind(this);
		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this._rafBinded = this._raf.bind(this);

		// const
		this.OPACITY_MARGE = 30;
		this.OPACITY_DURATION = 300;

		// vars
		this.zoom = false;
		this.slideshowPrints = {};
		this.action = 'init';
		this.currentIndex = -1;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			_get(Object.getPrototypeOf(Project.prototype), 'componentDidMount', this).call(this);

			var that = this;
			var hack = setTimeout(function () {
				that.zoom = _PrintStore2['default'].getZoom();
				if (that.zoom !== undefined) {
					_this.setState({
						current: that.zoom
					});
				}
				// 	PrintApi.getSlideshow(this.props.idSection, that.zoom)
				// } else {
				// 	PrintApi.getSlideshow(this.props.idSection);
				// }
			}, 10);

			_PrintApi2['default'].getByArtist(this.props.idSection);
			_ArtistApi2['default'].getBySlug(this.props.idSection);
			_ArtistStore2['default'].addChangeListener(this._onArtistStoreChangeBinded);
			_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
			// PrintStore.on(PrintConstants.RECEIVE_PRINTS_SLIDESHOW, this._onPrintStoreChangeBinded)	
			// PrintStore.on(PrintConstants.RECEIVE_PRINT, this._onPrintStoreChangeBinded)	

			this._intro = document.querySelector('.project__intro');
			this._raf();

			this._project = (0, _domquery2['default'])('.project');
			this._projectSlideshow = document.querySelector('.project__slideshow');
			this._projectPrints = document.querySelector('.project__prints');
			this._introContent = document.querySelector('.project__intro .project__content');
		}

		// componentDidUpdate(prevProps, prevState) {
		// 	console.log(prevState)	
		// 	console.log(this.state)
		// }

	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ArtistStore2['default'].removeChangeListener(this._onArtistStoreChangeBinded);
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var that = this;
			var current = this.state.prints[this.state.current];

			var name = undefined,
			    bio = undefined,
			    title = undefined,
			    city = undefined,
			    country = undefined,
			    year = undefined,
			    story = undefined,
			    forSale = undefined,
			    url = undefined,
			    projectTitle = undefined,
			    projectDesc = [];

			if (this.state.artist) {
				name = this.state.artist.name;
				bio = this.state.artist.bio;
				projectTitle = this.state.artist.project.title;
				projectDesc = this.state.artist.project.desc;
			}

			if (current) {
				title = current.title;
				city = current.city;
				country = current.country;
				year = current.year;
				story = current.desc;
				forSale = current.forSale;
				url = '#/shop/' + current._id;
				if (!story) this._hideStory();
			}

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--project', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu project__contact' },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + this.props.idSection + '/contact-sheet', className: 'button' },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							'Contact sheet'
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'submenu project__back' },
					_react2['default'].createElement(
						'a',
						{ href: '#', className: 'button', onClick: this._backToGalleryBinded },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							'Back to gallery'
						)
					)
				),
				_react2['default'].createElement(
					'section',
					{ className: 'project' },
					_react2['default'].createElement(
						'div',
						{ className: 'project__intro' },
						_react2['default'].createElement(
							'div',
							{ className: 'project__content' },
							_react2['default'].createElement(
								'h2',
								{ className: 'project__artist' },
								name
							),
							_react2['default'].createElement(
								'p',
								{ className: 'project__desc text text--medium' },
								Object.keys(projectDesc).map(function (index) {
									return _react2['default'].createElement(
										'p',
										{ className: 'project__paragraph', key: index },
										projectDesc[index]
									);
								})
							),
							_react2['default'].createElement(
								'div',
								{ className: 'project__discover', onClick: this._showSlideshowBinded },
								_react2['default'].createElement('div', { className: 'arrow' })
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'project__slideshow' },
						_react2['default'].createElement(
							'div',
							{ className: 'project__content' },
							_react2['default'].createElement(
								'div',
								{ className: 'project__prints' },
								Object.keys(this.state.prints).map(function (id, index) {
									var file = _this2.state.prints[id].file + '_big.jpg';
									var status = index === _this2.state.current ? 'project__print--current' : '';
									return _react2['default'].createElement(
										'div',
										{ className: 'project__print ' + status, onClick: that._toggleZoomBinded, key: id },
										_react2['default'].createElement('img', { className: 'project__image', src: '/static/img/' + file })
									);
								}),
								_react2['default'].createElement(
									'div',
									{ className: 'project__story text text--big' },
									_react2['default'].createElement(
										'p',
										null,
										story
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'project__nav' },
									_react2['default'].createElement(
										'div',
										{ className: 'project__prev', onClick: this._prevBinded },
										_react2['default'].createElement('div', { className: 'arrow' })
									),
									_react2['default'].createElement(
										'div',
										{ className: 'project__next', onClick: this._nextBinded },
										_react2['default'].createElement('div', { className: 'arrow' })
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'project__footer' },
							_react2['default'].createElement(
								'div',
								{ className: 'project__section' },
								_react2['default'].createElement(
									'a',
									{ href: '#', className: 'project__share project__button button button--left button--reverse' },
									_react2['default'].createElement(
										'span',
										{ className: 'button__content' },
										'Share'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'project__section project__infos' },
								(function () {
									if (forSale) return _react2['default'].createElement(
										'div',
										null,
										_react2['default'].createElement(
											'h2',
											{ className: 'print__title print__info--small' },
											title
										),
										_react2['default'].createElement(
											'h3',
											{ className: 'print__location print__info--small' },
											city,
											', ',
											country,
											', ',
											year
										)
									);
								})()
							),
							_react2['default'].createElement(
								'div',
								{ className: 'project__section' },
								(function () {
									if (forSale) return _react2['default'].createElement(
										'div',
										null,
										_react2['default'].createElement(
											'div',
											{ className: 'project__button project__reveal button button--left button--reverse', onClick: _this2._toggleStoryBinded },
											_react2['default'].createElement(
												'span',
												{ className: 'button__content' },
												'The story'
											)
										),
										_react2['default'].createElement(
											'a',
											{ href: url, className: 'project__button project__buy button button--right button--reverse' },
											_react2['default'].createElement(
												'span',
												{ className: 'button__content' },
												'Buy print'
											)
										)
									);
								})()
							)
						)
					)
				)
			);
			// <h3 className='print__artist print__info--small'>{name}</h3>
		}
	}, {
		key: '_raf',
		value: function _raf() {
			if (this.scrollIndex % 3) this.scrollOk = true;else this.scrollOk = true;
			this.scrollIndex++;

			if (this.scrollOk) {
				// let top = window.pageYOffset;
				this.handleScroll();
			}

			scroll(this._rafBinded);
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {

			this.opacityMarge = window.innerHeight / 2;
			this.limitOffset = (0, _offset2['default'])(this._intro);
			this.limitTop = this.limitOffset.top + this.limitOffset.height / 1.5;
			this.introOpacity = 1 - (this.limitTop - this.opacityMarge) / -this.opacityMarge;
			this._intro.style.opacity = this.introOpacity;

			if (this._introContent) {
				if (window.innerHeight - this._introContent.offsetHeight < 200) {
					this._project.addClass('project--relative');
					this._projectSlideshow.style[this.transform] = 'translate(0px, 0px) translateZ(0px)';
				} else {
					this.slideshowY = -window.innerHeight / 2 + this._projectPrints.offsetHeight / 2 - 40;
					this._projectSlideshow.style[this.transform] = 'translate(0px, ' + this.slideshowY + 'px) translateZ(0px)';
					this._project.removeClass('project--relative');
				}
			}

			// this.limitOffset = offset(document.querySelector('.project__intro'))
			// this.OPACITY_MARGE = this.limitOffset.height
			// console.log(this.limitOffset)
			// this.limitTop = this.limitOffset.top - window.innerHeight + this.OPACITY_MARGE
			// this.elOpacity = Utils.Interval(this.limitTop / (-this.OPACITY_DURATION), 0, 1)
			// // this.elY = (1-this.elOpacity) * 50
			// document.querySelector('.project__intro').style.opacity = this.elOpacity
			// el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')
		}
	}, {
		key: '_showSlideshow',
		value: function _showSlideshow() {
			this.slideshowOffsetTop = document.querySelector('.project__slideshow').offsetTop;
			TweenMax.to(window, 1.2, { scrollTo: { y: this.slideshowOffsetTop }, ease: Expo.easeOut });
		}
	}, {
		key: 'initTimelines',
		value: function initTimelines() {}
	}, {
		key: '_toggleZoom',
		value: function _toggleZoom() {
			if (this.zoom) this._zoomOut();else this._zoomIn();
		}
	}, {
		key: '_zoomIn',
		value: function _zoomIn() {
			this.tlZoomIn = new TimelineMax({ paused: true });
			this.tlZoomIn.staggerTo([(0, _domquery2['default'])('.front-container'), (0, _domquery2['default'])('.project__share'), (0, _domquery2['default'])('.project__infos'), (0, _domquery2['default'])('.project__reveal'), (0, _domquery2['default'])('.cart'), (0, _domquery2['default'])('.project__contact')], 0.4, { opacity: 0 }, 0);
			this.tlZoomIn.to((0, _domquery2['default'])('.project__print'), 0.4, { scale: 1.35, ease: Power2.easeOut }, 0);
			this.tlZoomIn.to((0, _domquery2['default'])('.project__prev'), 0.4, { x: -80, ease: Power2.easeOut }, 0);
			this.tlZoomIn.to((0, _domquery2['default'])('.project__next'), 0.4, { x: 80, ease: Power2.easeOut }, 0);
			this.tlZoomIn.addCallback(function () {
				document.querySelector('.project__contact').style.display = 'none';
				document.querySelector('.project__back').style.display = 'block';
			}, 0.4);
			this.tlZoomIn.to((0, _domquery2['default'])('.project__back'), 0.4, { opacity: 1 }, 0.4);

			this.tlZoomIn.play();

			this.zoom = !this.zoom;
		}
	}, {
		key: '_zoomOut',
		value: function _zoomOut() {
			this.tlZoomOut = new TimelineMax({ paused: true });
			this.tlZoomOut.staggerTo([(0, _domquery2['default'])('.front-container'), (0, _domquery2['default'])('.project__share'), (0, _domquery2['default'])('.project__infos'), (0, _domquery2['default'])('.project__reveal'), (0, _domquery2['default'])('.cart')], 0.4, { opacity: 1 }, 0);
			this.tlZoomOut.to((0, _domquery2['default'])('.project__back'), 0.4, { opacity: 0 }, 0);
			this.tlZoomOut.addCallback(function () {
				document.querySelector('.project__contact').style.display = 'block';
				document.querySelector('.project__back').style.display = 'none';
			}, 0.4);
			this.tlZoomOut.to((0, _domquery2['default'])('.project__contact'), 0.4, { opacity: 1 }, 0.4);
			this.tlZoomOut.to((0, _domquery2['default'])('.project__print'), 0.4, { scale: 1, ease: Power2.easeOut }, 0);
			this.tlZoomOut.to((0, _domquery2['default'])('.project__prev'), 0.4, { x: 0, ease: Power2.easeOut }, 0);
			this.tlZoomOut.to((0, _domquery2['default'])('.project__next'), 0.4, { x: 0, ease: Power2.easeOut }, 0);

			this.tlZoomOut.play();

			this.zoom = !this.zoom;
		}
	}, {
		key: '_backToGallery',
		value: function _backToGallery(e) {
			e.preventDefault();
			this._zoomOut();
		}
	}, {
		key: '_toggleStory',
		value: function _toggleStory() {
			(0, _domquery2['default'])('.project__story').toggleClass('enabled');
		}
	}, {
		key: '_hideStory',
		value: function _hideStory() {
			(0, _domquery2['default'])('.project__story').removeClass('enabled');
		}
	}, {
		key: '_prev',
		value: function _prev() {
			// this._hideStory()
			this.setState({
				current: this.state.current - 1 < 0 ? this.nPrints - 1 : this.state.current - 1
			});
		}
	}, {
		key: '_next',
		value: function _next() {
			// this._hideStory()
			this.setState({
				current: this.state.current + 1 >= this.nPrints ? 0 : this.state.current + 1
			});
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Project.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Project.prototype), 'resize', this).call(this);
		}
	}, {
		key: '_onArtistStoreChange',
		value: function _onArtistStoreChange() {
			this.setState({
				artist: _ArtistStore2['default'].getOne() // TODO: afficher l'image suivante uniquement quand elle est chargée
			});
		}
	}, {
		key: '_onPrintStoreChange',
		value: function _onPrintStoreChange() {
			var _this3 = this;

			this.setState({
				prints: _PrintStore2['default'].getArtistPrints()
			}, function () {
				_this3.nPrints = _.size(_this3.state.prints);
			});
		}
	}]);

	return Project;
})(_Page3['default']);

exports['default'] = Project;
module.exports = exports['default'];

},{"./../../actions/AppActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js","./../../actions/PrintActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js","./../../api/ArtistApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/ArtistApi.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../constants/PrintConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/PrintConstants.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/ArtistStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/ArtistStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../../utils/scrollTo":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _ArtistStore = require('./../../stores/ArtistStore');

var _ArtistStore2 = _interopRequireDefault(_ArtistStore);

var _ArtistApi = require('./../../api/ArtistApi');

var _ArtistApi2 = _interopRequireDefault(_ArtistApi);

var Projects = (function (_Page) {
	_inherits(Projects, _Page);

	function Projects(props) {
		_classCallCheck(this, Projects);

		_get(Object.getPrototypeOf(Projects.prototype), 'constructor', this).call(this, props);

		// state
		this.state = {
			artists: {}
		};

		// function binded
		this._onStoreChangeBinded = this._onStoreChange.bind(this);

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Projects, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Projects.prototype), 'componentDidMount', this).call(this);

			_ArtistApi2['default'].getAll();
			_ArtistStore2['default'].addChangeListener(this._onStoreChangeBinded);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ArtistStore2['default'].removeChangeListener(this._onStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			// let artistsData = AppStore.artistsContent()
			// let artistsItems = []
			// for (let artist in artistsData) {
			// 	artistsItems.push(<li key={artist}><a href={'#/project/'+artist}>{artistsData[artist].name}</a></li>)
			// }
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ className: 'page page--projects', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'projects__content' },
					_react2['default'].createElement(
						'h2',
						{ className: 'projects__title text text--title' },
						'Fellows:'
					),
					_react2['default'].createElement(
						'ul',
						null,
						Object.keys(this.state.artists).map(function (index) {
							var artist = that.state.artists[index];
							return _react2['default'].createElement(
								'li',
								{ key: index, className: 'projects__item' },
								_react2['default'].createElement(
									'a',
									{ href: '#/project/' + artist.slug, className: 'button button--big' },
									_react2['default'].createElement(
										'span',
										{ className: 'button__content' },
										artist.name
									)
								)
							);
						})
					)
				)
			);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Projects.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Projects.prototype), 'resize', this).call(this);
		}
	}, {
		key: '_onStoreChange',
		value: function _onStoreChange() {
			this.setState({
				artists: _ArtistStore2['default'].getAll()
			});
		}
	}]);

	return Projects;
})(_Page3['default']);

exports['default'] = Projects;
module.exports = exports['default'];

},{"./../../api/ArtistApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/ArtistApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/ArtistStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/ArtistStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _PrintStore = require('./../../stores/PrintStore');

var _PrintStore2 = _interopRequireDefault(_PrintStore);

var _PrintApi = require('./../../api/PrintApi');

var _PrintApi2 = _interopRequireDefault(_PrintApi);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _offset = require('./../../utils/offset');

var _offset2 = _interopRequireDefault(_offset);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var _scrollTo = require('./../../utils/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var scroll = _Utils2['default'].Scroll();
var _ = require('lodash');
var Masonry = require('masonry-layout');

var Shop = (function (_Page) {
	_inherits(Shop, _Page);

	function Shop(props) {
		_classCallCheck(this, Shop);

		_get(Object.getPrototypeOf(Shop.prototype), 'constructor', this).call(this, props);

		// state
		this.state = {
			prints: {}
		};

		// function binded
		this._showPrintsBinded = this._showPrints.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this._rafBinded = this._raf.bind(this);

		// vars
		this.nImageLoaded = 0;
		this.loaded = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Shop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Shop.prototype), 'componentDidMount', this).call(this);

			_PrintApi2['default'].getForSale();
			_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			var shopData = _AppStore2['default'].shopContent();

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--shop', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'shop__intro' },
					_react2['default'].createElement(
						'h2',
						{ className: 'shop__title' },
						shopData.intro.title
					),
					Object.keys(shopData.intro.paragraphs).map(function (index) {
						return _react2['default'].createElement(
							'p',
							{ className: 'shop__paragraph text text--big', key: index },
							shopData.intro.paragraphs[index]
						);
					}),
					_react2['default'].createElement(
						'div',
						{ className: 'discover shop__discover', onClick: this._showPrintsBinded },
						_react2['default'].createElement(
							'div',
							{ className: 'button' },
							_react2['default'].createElement(
								'span',
								{ className: 'button__content' },
								'Discover Elliott Erwitt\'s prints'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'discover__arrow' },
							_react2['default'].createElement('div', { className: 'arrow arrow--black' })
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'shop' },
					Object.keys(this.state.prints).map(function (id, index) {
						var print = that.state.prints[id];
						// let file = print.file + '_min.jpg'
						var file = print.file + '_medium.jpg';
						// let speed = (index % 2 === 0) ? 'fast' : 'slow'
						return _react2['default'].createElement(
							'div',
							{ className: 'shop__print', key: id },
							_react2['default'].createElement(
								'a',
								{ href: '#/shop/' + id },
								_react2['default'].createElement('img', { src: '/static/img/' + file }),
								_react2['default'].createElement(
									'div',
									{ className: 'shop__hover' },
									_react2['default'].createElement(
										'div',
										{ className: 'shop__detail' },
										_react2['default'].createElement(
											'div',
											{ className: 'print__title' },
											print.title
										),
										_react2['default'].createElement(
											'div',
											{ className: 'print__location' },
											_react2['default'].createElement(
												'div',
												{ className: 'shop__city' },
												print.city,
												', ',
												print.country,
												','
											),
											' ',
											_react2['default'].createElement(
												'div',
												{ className: 'shop__year' },
												print.year
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'shop__price' },
											print.price,
											'€'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'shop__details button button--reverse' },
											_react2['default'].createElement(
												'span',
												{ className: 'button__content' },
												'More details'
											)
										)
									)
								)
							)
						);
					})
				)
			);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var that = this,
			    file = undefined;
			this.max = _.size(this.state.prints);
			if (this.max > 0 && !this.loaded) {
				this.loaded = true;
				_(this.state.prints).forEach(function (print, index) {
					file = new Image();
					file.onload = that.onImageLoaded.bind(that);
					file.src = '/static/img/' + print.file + '_min.jpg';
				}).value();
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(e) {
			this.nImageLoaded++;
			this.grid.layout(); // update grid
		}
	}, {
		key: '_raf',
		value: function _raf() {
			if (this.scrollIndex % 3) this.scrollOk = true;else this.scrollOk = true;
			this.scrollIndex++;

			if (this.scrollOk) {
				// let top = window.pageYOffset;
				this.handleScroll();
			}

			scroll(this._rafBinded);
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {
			var _this = this;

			var top = _Utils2['default'].GetScrollTop();

			_((0, _domquery2['default'])('.shop__print')).forEach(function (el) {
				_this.videoOffset = (0, _offset2['default'])(el);
				_this.scrollTop = _Utils2['default'].GetScrollTop();
				_this.topPosition = el.offsetTop;
				_this.yPosition = (_this.scrollTop - _this.topPosition) * 0.2;

				if ((0, _domquery2['default'])(el).hasClass('js-fast')) {
					el.style[_this.transform] = 'translate(0px, ' + -_this.yPosition + 'px)';
				}

				if ((0, _domquery2['default'])(el).hasClass('js-slow')) {
					el.style[_this.transform] = 'translate(0px, ' + _this.yPosition + 'px)';
				}
			}).value();
		}
	}, {
		key: '_showPrints',
		value: function _showPrints() {
			this.slideshowOffsetTop = document.querySelector('.shop').offsetTop;
			_gsap2['default'].to(window, 1.2, { scrollTo: { y: this.slideshowOffsetTop - 40 }, ease: Power2.easeOut });
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Shop.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Shop.prototype), 'resize', this).call(this);
		}
	}, {
		key: '_onPrintStoreChange',
		value: function _onPrintStoreChange() {
			var _this2 = this;

			this.setState({
				prints: _PrintStore2['default'].getForSale()
			}, function () {
				var grid = document.querySelector('.shop');
				if (grid) {
					_this2.grid = new Masonry(grid, {
						itemSelector: '.shop__print',
						columnWidth: '.shop__print',
						gutter: 50
					});
				}
			});
		}
	}]);

	return Shop;
})(_Page3['default']);

exports['default'] = Shop;
module.exports = exports['default'];

},{"./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../../utils/scrollTo":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","lodash":"lodash","masonry-layout":"masonry-layout","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/config.js":[function(require,module,exports){
'use strict';

var config = {
	'siteurl': 'http://havana.hi9.fr'
	// 'siteurl': 'http://localhost:3000'
};

module.exports = config;

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	WINDOW_RESIZE: 'WINDOW_RESIZE',
	CHANGE_AMBIENT: 'CHANGE_AMBIENT',

	MEDIA_GLOBAL_W: 1920,
	MEDIA_GLOBAL_H: 1080,

	MIN_MIDDLE_W: 960,
	MQ_XSMALL: 320,
	MQ_SMALL: 480,
	MQ_MEDIUM: 768,
	MQ_LARGE: 1024,
	MQ_XLARGE: 1280,
	MQ_XXLARGE: 1680
};
module.exports = exports['default'];

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/ArtistConstants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	RECEIVE_ALL_ARTISTS: 'RECEIVE_ALL_ARTISTS',
	RECEIVE_ARTIST: 'RECEIVE_ARTIST',
	ERROR: 'ERROR'
};
module.exports = exports['default'];

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/CartConstants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	CART_ADD: 'CART_ADD', // Adds item to cart
	CART_REMOVE: 'CART_REMOVE', // Remove item from cart
	CART_VISIBLE: 'CART_VISIBLE', // Shows or hides the cart
	CART_ENABLED: 'CART_ENABLED', // Open or close the cart
	SET_SELECTED: 'SET_SELECTED', // Selects a product option
	RECEIVE_DATA: 'RECEIVE_DATA' //
};
module.exports = exports['default'];

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/PrintConstants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	RECEIVE_ALL_PRINTS: 'RECEIVE_ALL_PRINTS',
	RECEIVE_PRINTS_FORSALE: 'RECEIVE_PRINTS_FORSALE',
	RECEIVE_PRINTS_SLIDESHOW: 'RECEIVE_PRINTS_SLIDESHOW',
	RECEIVE_ARTIST_PRINTS: 'RECEIVE_ARTIST_PRINTS',
	RECEIVE_PRINT: 'RECEIVE_PRINT',
	ERROR: 'ERROR',
	ZOOM: 'ZOOM'
};
module.exports = exports['default'];

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _flux = require('flux');

var _flux2 = _interopRequireDefault(_flux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var AppDispatcher = (0, _objectAssign2['default'])(new _flux2['default'].Dispatcher(), {
	handleViewAction: function handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	},
	handleServerAction: function handleServerAction(action) {
		this.dispatch({
			source: 'SERVER_ACTION',
			action: action
		});
	}
});

exports['default'] = AppDispatcher;
module.exports = exports['default'];

},{"flux":"flux","object-assign":"object-assign","react-mixin":"react-mixin"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/GlobalEvents.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _AppActions = require('./../actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var GlobalEvents = (function () {
	function GlobalEvents() {
		_classCallCheck(this, GlobalEvents);
	}

	_createClass(GlobalEvents, [{
		key: 'init',
		value: function init() {
			window.addEventListener('resize', this.resize);
		}
	}, {
		key: 'resize',
		value: function resize() {
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = setTimeout(function () {
				_AppActions2['default'].windowResize(window.innerWidth, window.innerHeight);
			}, 300);
		}
	}]);

	return GlobalEvents;
})();

exports['default'] = GlobalEvents;
module.exports = exports['default'];

},{"./../actions/AppActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _GlobalData = require('./../../../../www/data/data');

var _GlobalData2 = _interopRequireDefault(_GlobalData);

var _hasher = require('hasher');

var _hasher2 = _interopRequireDefault(_hasher);

var _AppActions = require('./../actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var _crossroads = require('crossroads');

var _crossroads2 = _interopRequireDefault(_crossroads);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Router = (function () {
	function Router() {
		_classCallCheck(this, Router);
	}

	_createClass(Router, [{
		key: 'init',
		value: function init() {
			this.routing = _GlobalData2['default'].routes.routing;
			this.defaultRoute = this.routing['/'];
			this.newHashFounded = false;
			_hasher2['default'].newHash = undefined;
			_hasher2['default'].oldHash = undefined;
			_hasher2['default'].prependHash = '!';
			_hasher2['default'].initialized.add(this._didHasherChange.bind(this));
			_hasher2['default'].changed.add(this._didHasherChange.bind(this));
			this._setupCrossroads();
		}
	}, {
		key: 'beginRouting',
		value: function beginRouting() {
			_hasher2['default'].init();
		}
	}, {
		key: '_setupCrossroads',
		value: function _setupCrossroads() {
			var homeSection = _crossroads2['default'].addRoute('', this._onHomeURLHandler.bind(this), 1);

			var basicSection = _crossroads2['default'].addRoute('{page}', this._onFirstDegreeURLHandler.bind(this), 1);
			// firstDegreeSection.rules = {
			// 	page : ['home', '404', 'fellowship', 'projects', 'shop', 'news', 'contact', 'legal', 'privacy'] //valid sections
			// }

			var projectSection = _crossroads2['default'].addRoute('project/{id}', this._onProjectURLHandler.bind(this), 2);
			projectSection.rules = {
				id: /^[a-z]/
			};

			var gallerySection = _crossroads2['default'].addRoute('project/{id}/contact-sheet', this._onProjectURLHandler.bind(this), 3);
			gallerySection.rules = {
				id: /^[a-z]/
			};

			var shopSection = _crossroads2['default'].addRoute('/shop/{id}', this._onShopURLHandler.bind(this), 2);
			shopSection.rules = {
				id: /^[0-9]/
			};
		}
	}, {
		key: '_onHomeURLHandler',
		value: function _onHomeURLHandler() {
			this._assignRoute('home');
		}
	}, {
		key: '_onFirstDegreeURLHandler',
		value: function _onFirstDegreeURLHandler(pageId) {
			this._assignRoute(pageId);
		}
	}, {
		key: '_onProjectURLHandler',
		value: function _onProjectURLHandler(projectId) {
			this._assignRoute(projectId);
		}
	}, {
		key: '_onShopURLHandler',
		value: function _onShopURLHandler(printId) {
			this._assignRoute(printId);
		}
	}, {
		key: '_onDefaultURLHandler',
		value: function _onDefaultURLHandler() {
			this._sendToDefault();
		}
	}, {
		key: '_assignRoute',
		value: function _assignRoute(id) {
			var hash = _hasher2['default'].getHash();
			var parts = this._getURLParts(hash);
			this._updatePageRoute(hash, parts, parts[0], id);
			this.newHashFounded = true;
		}
	}, {
		key: '_getURLParts',
		value: function _getURLParts(url) {
			var hash = url;
			hash = hash.substr(1);
			return hash.split('/');
		}
	}, {
		key: '_updatePageRoute',
		value: function _updatePageRoute(hash, parts, parent, targetId) {
			_hasher2['default'].oldHash = _hasher2['default'].newHash;
			_hasher2['default'].newHash = {
				hash: hash,
				parts: parts,
				parent: parent,
				targetId: targetId
			};
			_AppActions2['default'].pageHasherChanged(_hasher2['default'].newHash);
		}
	}, {
		key: '_didHasherChange',
		value: function _didHasherChange(newHash, oldHash) {
			this.newHashFounded = false;
			_crossroads2['default'].parse(newHash);
			if (this.newHashFounded) return;
			// If URL don't match a pattern, send to default
			this._onDefaultURLHandler();
		}
	}, {
		key: '_sendToDefault',
		value: function _sendToDefault() {
			_hasher2['default'].setHash(_AppStore2['default'].defaultRoute());
		}
	}], [{
		key: 'getBaseURL',
		value: function getBaseURL() {
			return document.URL.split("#")[0];
		}
	}, {
		key: 'getHash',
		value: function getHash() {
			return _hasher2['default'].getHash();
		}
	}, {
		key: 'getRoutes',
		value: function getRoutes() {
			return _GlobalData2['default'].routes.routing;
		}
	}, {
		key: 'getNewHash',
		value: function getNewHash() {
			return _hasher2['default'].newHash;
		}
	}, {
		key: 'getOldHash',
		value: function getOldHash() {
			return _hasher2['default'].oldHash;
		}
	}, {
		key: 'setHash',
		value: function setHash(hash) {
			_hasher2['default'].setHash(hash);
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../actions/AppActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","crossroads":"crossroads","hasher":"hasher"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _GlobalData = require('./../../../../www/data/data');

var _GlobalData2 = _interopRequireDefault(_GlobalData);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _hash = undefined;

function _pageRouteIdChanged(hash) {
	_hash = hash.item.parent;
}
function _getPageContent() {
	var hashObj = _Router2['default'].getNewHash();
	var content = _GlobalData2['default'].routes.routing[hashObj.hash];
	return content;
}
function _getMenuContent() {
	return _GlobalData2['default'].routes.menu;
}
function _getFooterMenuContent() {
	return _GlobalData2['default'].routes['footer-menu'];
}
function _getAppData() {
	return _GlobalData2['default'].routes;
}
function _getDefaultRoute() {
	return _GlobalData2['default'].routes['default-route'];
}
function _getGlobalContent() {
	return _GlobalData2['default'].routes.content;
}
function _getHome() {
	return _GlobalData2['default'].home;
}
function _getFellowship() {
	return _GlobalData2['default'].fellowship;
}
function _getShop() {
	return _GlobalData2['default'].shop;
}
function _getNews() {
	return _GlobalData2['default'].news;
}
function _getArtists() {
	return _GlobalData2['default'].artists;
}
function _getArtist(id) {
	return _GlobalData2['default'].artists[id];
}

var AppStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
	emitChange: function emitChange(type, item) {
		this.emit(type, item);
	},
	hash: function hash() {
		return _hash;
	},
	pageContent: function pageContent() {
		return _getPageContent();
	},
	menuContent: function menuContent() {
		return _getMenuContent();
	},
	footerMenuContent: function footerMenuContent() {
		return _getFooterMenuContent();
	},
	appData: function appData() {
		return _getAppData();
	},
	defaultRoute: function defaultRoute() {
		return _getDefaultRoute();
	},
	globalContent: function globalContent() {
		return _getGlobalContent();
	},
	homeContent: function homeContent() {
		return _getHome();
	},
	fellowshipContent: function fellowshipContent() {
		return _getFellowship();
	},
	shopContent: function shopContent() {
		return _getShop();
	},
	newsContent: function newsContent() {
		return _getNews();
	},
	artistsContent: function artistsContent() {
		return _getArtists();
	},
	artistContent: function artistContent(id) {
		return _getArtist(id);
	},
	Window: {
		w: window.innerWidth,
		h: window.innerHeight
	},
	dispatcherIndex: _AppDispatcher2['default'].register(function (payload) {
		var action = payload.action;
		switch (action.actionType) {
			case _AppConstants2['default'].PAGE_HASHER_CHANGED:
				_pageRouteIdChanged(action);
				AppStore.emitChange(action.actionType);
				break;
			case _AppConstants2['default'].WINDOW_RESIZE:
				AppStore.Window.w = action.item.windowW;
				AppStore.Window.h = action.item.windowH;
				AppStore.emitChange(action.actionType);
				break;
		}
		return true;
	})
});

exports['default'] = AppStore;
module.exports = exports['default'];

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","eventemitter2":"eventemitter2","object-assign":"object-assign"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/ArtistStore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _ArtistConstants = require('./../constants/ArtistConstants');

var _ArtistConstants2 = _interopRequireDefault(_ArtistConstants);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _GlobalData = require('./../../../../www/data/data');

var _GlobalData2 = _interopRequireDefault(_GlobalData);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var CHANGE_EVENT = 'change';

var _artist = {};
var _artists = {};

function _addArtists(artists) {
	artists.forEach(function (artist) {
		// change forEach to lodash
		if (!_artists[artist._id]) {
			_artists[artist._id] = artist;
		}
	});
}

var ArtistStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
	getAll: function getAll() {
		return _artists;
	},
	getOne: function getOne() {
		return _artist;
	},
	// Emit Change event
	emitChange: function emitChange() {
		this.emit(CHANGE_EVENT);
	},
	// Add change listener
	addChangeListener: function addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	// Remove change listener
	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	dispatcherIndex: _AppDispatcher2['default'].register(function (payload) {
		var action = payload.action;
		switch (action.actionType) {
			case _ArtistConstants2['default'].RECEIVE_ALL_ARTISTS:
				_addArtists(action.item);
				ArtistStore.emitChange();
				break;
			case _ArtistConstants2['default'].RECEIVE_ARTIST:
				_artist = action.item;
				ArtistStore.emitChange();
				break;
		}
		return true;
	})
});

exports['default'] = ArtistStore;
module.exports = exports['default'];

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../constants/ArtistConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/ArtistConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","eventemitter2":"eventemitter2","object-assign":"object-assign"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/CartStore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _CartConstants = require('./../constants/CartConstants');

var _CartConstants2 = _interopRequireDefault(_CartConstants);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _GlobalData = require('./../../../../www/data/data');

var _GlobalData2 = _interopRequireDefault(_GlobalData);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _ = require('lodash');

var CHANGE_EVENT = 'change';

// Define initial data points
var _products = [],
    _cartVisible = true,
    _cartEnabled = false;

// Add product to cart
function _add(printId, update) {
	// update.quantity = printId in _products ? _products[printId].quantity + 1 : 1;
	// _products[printId].push = _.extend({}, _products[printId], update)
	// if (_products[printId]) {
	// 	_products[printId].push(update)
	// } else {
	// 	_products[printId] = []
	// 	_products[printId].push(update)
	// }
	// console.log(_products)

	_products.push(update);
}

// Set cart visibility
function _setCartVisible(cartVisible) {
	_cartVisible = cartVisible;
}

// Set cart enabled
function _setCartEnabled(cartEnabled) {
	_cartEnabled = cartEnabled;
}

// Remove item from cart
function _removeItem(index) {
	_products.splice(index, 1);
}

var CartStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
	getCartItems: function getCartItems() {
		return _products;
	},
	getCartCount: function getCartCount() {
		// let count = 0
		// _(_products).forEach((product, index) => {
		// 	// count += product.quantity
		// 	count += product.length
		// }).value()
		// return count;
		return Object.keys(_products).length;
	},
	getCartTotal: function getCartTotal() {
		var total = 0;
		_(_products).forEach(function (product, index) {
			total += product.price;
		}).value();

		// for(let product in _products){
		// 	if(_products.hasOwnProperty(product)){
		// 		total += _products[product].price * _products[product].quantity;
		// 	}
		// }
		return total.toFixed(2);
	},
	getCartVisible: function getCartVisible() {
		return _cartVisible;
	},
	getCartEnabled: function getCartEnabled() {
		return _cartEnabled;
	},
	// Emit Change event
	emitChange: function emitChange() {
		this.emit(CHANGE_EVENT);
	},
	// Add change listener
	addChangeListener: function addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	// Remove change listener
	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	dispatcherIndex: _AppDispatcher2['default'].register(function (payload) {
		var action = payload.action;

		switch (action.actionType) {
			case _CartConstants2['default'].CART_ADD:
				_add(action.printId, action.update);
				CartStore.emitChange();
				break;
			case _CartConstants2['default'].CART_VISIBLE:
				_setCartVisible(action.cartVisible);
				CartStore.emitChange();
				break;
			case _CartConstants2['default'].CART_ENABLED:
				_setCartEnabled(action.cartEnabled);
				CartStore.emitChange();
				break;
			case _CartConstants2['default'].CART_REMOVE:
				_removeItem(action.index);
				CartStore.emitChange();
				break;
		}

		return true;
	})
});

exports['default'] = CartStore;
module.exports = exports['default'];

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../constants/CartConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/CartConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","eventemitter2":"eventemitter2","lodash":"lodash","object-assign":"object-assign"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _PrintConstants = require('./../constants/PrintConstants');

var _PrintConstants2 = _interopRequireDefault(_PrintConstants);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _GlobalData = require('./../../../../www/data/data');

var _GlobalData2 = _interopRequireDefault(_GlobalData);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _prints = {};
var _printsForSale = {};
var _printsSlideshow = {};
var _artistPrints = {};
var _print = {};
var _printZoomed = undefined;

function _addPrints(prints) {
	_(prints).forEach(function (print) {
		if (!_prints[print._id]) {
			_prints[print._id] = print;
		}
	}).value();
}

function _addPrintsForSale(prints) {
	_(prints).forEach(function (print) {
		if (!_printsForSale[print._id]) {
			_printsForSale[print._id] = print;
		}
	}).value();
}

function _addPrintsSlideshow(result) {
	_printsSlideshow = result;
}

function _addArtistPrints(prints) {
	_artistPrints = prints;
	// _(prints).forEach((print) => {
	// 	if (!_artistPrints[print._id]) {
	// 		_artistPrints[print._id] = print;
	// 	}
	// }).value()
}

var PrintStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
	getAll: function getAll() {
		return _prints;
	},
	getForSale: function getForSale() {
		return _printsForSale;
	},
	getSlideshow: function getSlideshow() {
		return _printsSlideshow;
	},
	getArtistPrints: function getArtistPrints() {
		return _artistPrints;
	},
	getOne: function getOne() {
		return _print;
	},
	getZoom: function getZoom() {
		return _printZoomed;
	},
	// Emit Change event
	emitChange: function emitChange() {
		this.emit(CHANGE_EVENT);
	},
	emitSpeChange: function emitSpeChange() {
		this.emit('RECEIVE_PRINTS_SLIDESHOW');
	},
	// Add change listener
	addChangeListener: function addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	// Remove change listener
	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	dispatcherIndex: _AppDispatcher2['default'].register(function (payload) {
		var action = payload.action;
		switch (action.actionType) {
			case _PrintConstants2['default'].RECEIVE_ALL_PRINTS:
				_addPrints(action.item);
				PrintStore.emitChange();
				break;
			case _PrintConstants2['default'].RECEIVE_PRINTS_FORSALE:
				_addPrintsForSale(action.item);
				PrintStore.emitChange();
				break;
			case _PrintConstants2['default'].RECEIVE_PRINTS_SLIDESHOW:
				_addPrintsSlideshow(action.item);
				PrintStore.emitChange();
				// PrintStore.emitSpeChange('RECEIVE_PRINTS_SLIDESHOW');
				break;
			case _PrintConstants2['default'].RECEIVE_ARTIST_PRINTS:
				_addArtistPrints(action.item);
				PrintStore.emitChange();
				break;
			case _PrintConstants2['default'].RECEIVE_PRINT:
				_print = action.item;
				PrintStore.emitChange();
				break;
			case _PrintConstants2['default'].ZOOM:
				_printZoomed = action.item;
				PrintStore.emitChange();
				break;
		}
		return true;
	})
});

exports['default'] = PrintStore;
module.exports = exports['default'];

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../constants/PrintConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/PrintConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","eventemitter2":"eventemitter2","lodash":"lodash","object-assign":"object-assign"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Autobind.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _is = require('is');

var _is2 = _interopRequireDefault(_is);

function getAllMethods(obj) {
	return Object.getOwnPropertyNames(obj).filter(function (key) {
		return _is2['default'].fn(obj[key]);
	});
}

function autoBind(obj) {
	// console.log('obj -----', obj)
	getAllMethods(obj.constructor.prototype).forEach(function (mtd) {
		// console.log(mtd)
		obj[mtd] = obj[mtd].bind(obj);
	});
}

exports['default'] = autoBind;
module.exports = exports['default'];

},{"is":"is"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utils = (function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'NormalizeMouseCoords',
		value: function NormalizeMouseCoords(e, objWrapper) {
			var posx = 0;
			var posy = 0;
			if (!e) var e = window.event;
			if (e.pageX || e.pageY) {
				posx = e.pageX;
				posy = e.pageY;
			} else if (e.clientX || e.clientY) {
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}
			objWrapper.x = posx;
			objWrapper.y = posy;
			return objWrapper;
		}
	}, {
		key: 'ResizePositionProportionally',
		value: function ResizePositionProportionally(windowW, windowH, contentW, contentH) {
			var aspectRatio = contentW / contentH;
			var scale = windowW / windowH < aspectRatio ? windowH / contentH * 1 : windowW / contentW * 1;
			var newW = contentW * scale;
			var newH = contentH * scale;
			var css = {
				width: newW,
				height: newH,
				left: (windowW >> 1) - (newW >> 1),
				top: (windowH >> 1) - (newH >> 1)
			};

			return css;
		}
	}, {
		key: 'GetScrollTop',
		value: function GetScrollTop() {
			return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
		}
	}, {
		key: 'GetSupportedPropertyName',
		value: function GetSupportedPropertyName(property) {
			var prefixes = ['', 'ms', 'Webkit', 'Moz', 'O'];

			for (var i = 0; i < prefixes.length; i++) {
				var prefix = prefixes[i];
				property = prefix === '' ? property : property.charAt(0).toUpperCase() + property.substring(1).toLowerCase();
				var prop = prefix + property;

				if (typeof document.body.style[prop] != "undefined") return prop;
			}

			return null;
		}
	}, {
		key: 'Scroll',
		value: function Scroll() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
			// IE Fallback, you can even fallback to onscroll
			function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		}
	}, {
		key: 'Interval',
		value: function Interval(value, min, max) {
			return Math.min(Math.max(value, min), max);
		}
	}]);

	return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js":[function(require,module,exports){
"use strict";

module.exports = function (el) {
	if (el.getBoundingClientRect) {
		return el.getBoundingClientRect();
	} else {
		var x = 0,
		    y = 0;
		do {
			x += el.offsetLeft - el.scrollLeft;
			y += el.offsetTop - el.scrollTop;
		} while (el = el.offsetParent);

		return { "left": x, "top": y };
	}
};

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/raf.js":[function(require,module,exports){
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

'use strict';

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
})();

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js":[function(require,module,exports){
(function (global){
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
"use strict";

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";var t = document.documentElement,
      e = window,
      i = function i(_i, r) {
    var s = "x" === r ? "Width" : "Height",
        n = "scroll" + s,
        o = "client" + s,
        a = document.body;return _i === e || _i === t || _i === a ? Math.max(t[n], a[n]) - (e["inner" + s] || t[o] || a[o]) : _i[n] - _i["offset" + s];
  },
      r = _gsScope._gsDefine.plugin({ propName: "scrollTo", API: 2, version: "1.7.5", init: function init(t, r, s) {
      return (this._wdw = t === e, this._target = t, this._tween = s, "object" != typeof r && (r = { y: r }), this.vars = r, this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? (this._addTween(this, "x", this.x, "max" === r.x ? i(t, "x") : r.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != r.y ? (this._addTween(this, "y", this.y, "max" === r.y ? i(t, "y") : r.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0);
    }, set: function set(t) {
      this._super.setRatio.call(this, t);var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
          s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
          n = s - this.yPrev,
          o = r - this.xPrev;this._autoKill && (!this.skipX && (o > 7 || -7 > o) && i(this._target, "x") > r && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && i(this._target, "y") > s && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y;
    } }),
      s = r.prototype;r.max = i, s.getX = function () {
    return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft;
  }, s.getY = function () {
    return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop;
  }, s._kill = function (t) {
    return (t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t));
  };
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/nicolas/Developement/freelance/Havana/src/js/pager/Pager.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _flux = require('flux');

var _flux2 = _interopRequireDefault(_flux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

// Actions
var PagerActions = {
    onPageReady: function onPageReady(hash) {
        PagerDispatcher.handlePagerAction({
            type: PagerConstants.PAGE_IS_READY,
            item: hash
        });
    },
    onTransitionOutComplete: function onTransitionOutComplete() {
        PagerDispatcher.handlePagerAction({
            type: PagerConstants.PAGE_TRANSITION_OUT_COMPLETE,
            item: undefined
        });
    },
    pageTransitionDidFinish: function pageTransitionDidFinish() {
        PagerDispatcher.handlePagerAction({
            type: PagerConstants.PAGE_TRANSITION_DID_FINISH,
            item: undefined
        });
    }
};

// Constants
var PagerConstants = {
    PAGE_IS_READY: 'PAGE_IS_READY',
    PAGE_TRANSITION_IN: 'PAGE_TRANSITION_IN',
    PAGE_TRANSITION_OUT: 'PAGE_TRANSITION_OUT',
    PAGE_TRANSITION_OUT_COMPLETE: 'PAGE_TRANSITION_OUT_COMPLETE',
    PAGE_TRANSITION_IN_PROGRESS: 'PAGE_TRANSITION_IN_PROGRESS',
    PAGE_TRANSITION_DID_FINISH: 'PAGE_TRANSITION_DID_FINISH'
};

// Dispatcher
var PagerDispatcher = (0, _objectAssign2['default'])(new _flux2['default'].Dispatcher(), {
    handlePagerAction: function handlePagerAction(action) {
        this.dispatch(action);
    }
});

// Store
var PagerStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
    firstPageTransition: true,
    pageTransitionState: undefined,
    dispatcherIndex: PagerDispatcher.register(function (payload) {
        var actionType = payload.type;
        var item = payload.item;
        switch (actionType) {
            case PagerConstants.PAGE_IS_READY:
                PagerStore.pageTransitionState = PagerConstants.PAGE_TRANSITION_IN_PROGRESS;
                var type = PagerStore.firstPageTransition ? PagerConstants.PAGE_TRANSITION_IN : PagerConstants.PAGE_TRANSITION_OUT;
                PagerStore.emit(type);
                break;
            case PagerConstants.PAGE_TRANSITION_OUT_COMPLETE:
                var type = PagerConstants.PAGE_TRANSITION_IN;
                PagerStore.emit(type);
                break;
            case PagerConstants.PAGE_TRANSITION_DID_FINISH:
                if (PagerStore.firstPageTransition) PagerStore.firstPageTransition = false;
                PagerStore.pageTransitionState = PagerConstants.PAGE_TRANSITION_DID_FINISH;
                PagerStore.emit(actionType);
                break;
        }
        return true;
    })
});

exports['default'] = {
    PagerStore: PagerStore,
    PagerActions: PagerActions,
    PagerConstants: PagerConstants,
    PagerDispatcher: PagerDispatcher
};
module.exports = exports['default'];

},{"eventemitter2":"eventemitter2","flux":"flux","object-assign":"object-assign","react-mixin":"react-mixin"}],"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BaseComponent.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Autobind = require('./../../app/utils/Autobind');

var _Autobind2 = _interopRequireDefault(_Autobind);

var BaseComponent = (function (_React$Component) {
	_inherits(BaseComponent, _React$Component);

	function BaseComponent(props) {
		_classCallCheck(this, BaseComponent);

		_get(Object.getPrototypeOf(BaseComponent.prototype), 'constructor', this).call(this, props);
		(0, _Autobind2['default'])(this);
	}

	_createClass(BaseComponent, [{
		key: 'render',
		value: function render() {
			return true;
		}
	}]);

	return BaseComponent;
})(_react2['default'].Component);

exports['default'] = BaseComponent;
module.exports = exports['default'];

},{"./../../app/utils/Autobind":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Autobind.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var BasePage = (function (_React$Component) {
	_inherits(BasePage, _React$Component);

	function BasePage(props) {
		_classCallCheck(this, BasePage);

		_get(Object.getPrototypeOf(BasePage.prototype), 'constructor', this).call(this, props);
		this.didTransitionInComplete = this.didTransitionInComplete.bind(this);
		this.didTransitionOutComplete = this.didTransitionOutComplete.bind(this);
		this.tlIn = new TimelineMax({
			onComplete: this.didTransitionInComplete
		});
		this.tlOut = new TimelineMax({
			onComplete: this.didTransitionOutComplete
		});
	}

	_createClass(BasePage, [{
		key: 'render',
		value: function render() {
			_get(Object.getPrototypeOf(BasePage.prototype), 'render', this).call(this);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			this.resize();
			this.setupAnimations();
			setTimeout(function () {
				return _this.props.isReady(_this.props.hash);
			}, 0);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			this.tlIn.from(wrapper, 1, { opacity: 0, ease: Expo.easeInOut });

			// transition Out
			this.tlOut.to(wrapper, 1, { opacity: 0, ease: Expo.easeInOut });

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'willTransitionIn',
		value: function willTransitionIn() {
			this.tlIn.play(0);
		}
	}, {
		key: 'willTransitionOut',
		value: function willTransitionOut() {
			this.tlOut.play(0);
		}
	}, {
		key: 'didTransitionInComplete',
		value: function didTransitionInComplete() {
			var _this2 = this;

			setTimeout(function () {
				return _this2.props.didTransitionInComplete();
			}, 0);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			var _this3 = this;

			setTimeout(function () {
				return _this3.props.didTransitionOutComplete();
			}, 0);
		}
	}, {
		key: 'resize',
		value: function resize() {}
	}, {
		key: 'forceUnmount',
		value: function forceUnmount() {
			this.tlIn.pause(0);
			this.tlOut.pause(0);
			this.didTransitionOutComplete();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.tlIn.clear();
			this.tlOut.clear();
		}
	}]);

	return BasePage;
})(_react2['default'].Component);

exports['default'] = BasePage;
module.exports = exports['default'];

},{"react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePager.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pager = require('./../Pager');

var _lodashStringCapitalize = require('lodash/String/capitalize');

var _lodashStringCapitalize2 = _interopRequireDefault(_lodashStringCapitalize);

var _PrintStore = require('./../../app/stores/PrintStore');

var _PrintStore2 = _interopRequireDefault(_PrintStore);

var _PrintActions = require('./../../app/actions/PrintActions');

var _PrintActions2 = _interopRequireDefault(_PrintActions);

var offset = require('./../../app/utils/offset');

var BasePager = (function (_React$Component) {
	_inherits(BasePager, _React$Component);

	function BasePager(props) {
		_classCallCheck(this, BasePager);

		_get(Object.getPrototypeOf(BasePager.prototype), 'constructor', this).call(this, props);
		this.currentPageDivRef = 'page-b';
		this.willPageTransitionIn = this.willPageTransitionIn.bind(this);
		this.willPageTransitionOut = this.willPageTransitionOut.bind(this);
		this.components = {
			'new-component': undefined,
			'old-component': undefined
		};
	}

	_createClass(BasePager, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'pagesContainer' },
				_react2['default'].createElement('div', { className: 'pages', ref: 'page-a' }),
				_react2['default'].createElement('div', { className: 'pages', ref: 'page-b' })
			);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_Pager.PagerStore.on(_Pager.PagerConstants.PAGE_TRANSITION_IN, this.willPageTransitionIn);
			_Pager.PagerStore.on(_Pager.PagerConstants.PAGE_TRANSITION_OUT, this.willPageTransitionOut);
		}
	}, {
		key: 'setupNewComponent',
		value: function setupNewComponent(hash, Type, idSection) {
			var id = (0, _lodashStringCapitalize2['default'])(hash.replace("/", ""));
			this.oldPageDivRef = this.currentPageDivRef;
			this.currentPageDivRef = this.currentPageDivRef === 'page-a' ? 'page-b' : 'page-a';
			var el = _react2['default'].findDOMNode(this.refs[this.currentPageDivRef]);
			var page = _react2['default'].createElement(Type, {
				id: this.currentPageDivRef,
				isReady: this.onPageReady,
				hash: hash,
				idSection: idSection,
				didTransitionInComplete: this.didPageTransitionInComplete.bind(this),
				didTransitionOutComplete: this.didPageTransitionOutComplete.bind(this)
			});
			this.components['old-component'] = this.components['new-component'];
			this.components['new-component'] = _react2['default'].render(page, el);
			if (_Pager.PagerStore.pageTransitionState === _Pager.PagerConstants.PAGE_TRANSITION_IN_PROGRESS) {
				this.components['old-component'].forceUnmount();
			}
		}
	}, {
		key: 'onPageReady',
		value: function onPageReady(hash) {
			_Pager.PagerActions.onPageReady(hash);
		}
	}, {
		key: 'willPageTransitionIn',
		value: function willPageTransitionIn() {
			this.switchPagesDivIndex();
			this.components['new-component'].willTransitionIn();
		}
	}, {
		key: 'willPageTransitionOut',
		value: function willPageTransitionOut() {
			this.components['old-component'].willTransitionOut();
		}
	}, {
		key: 'didPageTransitionInComplete',
		value: function didPageTransitionInComplete() {
			// console.log('didPageTransitionInComplete')
			_Pager.PagerActions.pageTransitionDidFinish();
			this.unmountComponent('old-component');
		}
	}, {
		key: 'didPageTransitionOutComplete',
		value: function didPageTransitionOutComplete() {
			this.zoom = _PrintStore2['default'].getZoom();
			window.scrollTo(0, 0);
			if (this.zoom !== undefined) {
				// window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop - window.innerHeight*0.2 - 40);
				// window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop);
				window.scrollTo(0, offset(document.querySelector('.project__slideshow')).top);
				_PrintActions2['default'].setPrintZoom(undefined);
			}
			// console.log('didPageTransitionOutComplete')
			_Pager.PagerActions.onTransitionOutComplete();
		}
	}, {
		key: 'switchPagesDivIndex',
		value: function switchPagesDivIndex() {
			var newEl = _react2['default'].findDOMNode(this.refs[this.currentPageDivRef]);
			var oldEl = _react2['default'].findDOMNode(this.refs[this.oldPageDivRef]);
			newEl.style.zIndex = 2;
			oldEl.style.zIndex = 1;
		}
	}, {
		key: 'unmountComponent',
		value: function unmountComponent(ref) {
			if (this.components[ref] !== undefined) {
				var id = this.components[ref].props.id;
				var domToRemove = _react2['default'].findDOMNode(this.refs[id]);
				_react2['default'].unmountComponentAtNode(domToRemove);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_Pager.PagerStore.off(_Pager.PagerConstants.PAGE_TRANSITION_IN, this.willPageTransitionIn);
			_Pager.PagerStore.off(_Pager.PagerConstants.PAGE_TRANSITION_OUT, this.willPageTransitionOut);
			this.unmountComponent('old-component');
			this.unmountComponent('new-component');
		}
	}]);

	return BasePager;
})(_react2['default'].Component);

exports['default'] = BasePager;
module.exports = exports['default'];

},{"./../../app/actions/PrintActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js","./../../app/stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../../app/utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../Pager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/Pager.js","lodash/String/capitalize":"/Users/nicolas/Developement/freelance/Havana/node_modules/lodash/String/capitalize.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/www/data/data.json":[function(require,module,exports){
module.exports={"artists":{"elliott-erwitt":{"name":"Elliott Erwitt","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Cuba 1964","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"elliott-erwitt","nPhotos":8}]},"qiu-yang":{"name":"Qiu Yang","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"qiu-yang","nPhotos":6}]},"philip-sinden":{"name":"Philip Sinden","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 2","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"philip-sinden","nPhotos":4}]},"jack-duet":{"name":"Jack Duet","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 3","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"jack-duet","nPhotos":0}]}},"fellowship":{"fellowship":{"paragraphs":["A fellowship is a communion of people sharing a common passion.","In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.","Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7."]},"biography":{"paragraphs":["A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.","In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy.","In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.","The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision."]}},"home":{"paragraphs":["Cuba has always fascinated and intrigued people from around the world and led to the foundation of the Elliott Erwitt Havana Club 7 Fellowship for Documentary Photography. Founded in a shared passion for Cuba and its people we wish to build a legacy of Cuba today and take it into the future built on the work of Elliott Erwitt.","As the Fellowship evolves you will be able to acquire unique documentary photography and by doing so support future recipients continuing the legacy."]},"news":[{"date":"04.10.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"18.09.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."},{"date":"13.09.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}],"routes":{"content":{"mytext":"some global text"},"menu":[{"id":"fellowship","name":"Fellowship","url":"/fellowship"},{"id":"projects","name":"Projects","url":"/projects"},{"id":"shop","name":"Shop","url":"/shop"},{"id":"news","name":"News","url":"/news"}],"footer-menu":[{"id":"contact","name":"Contact","url":"/contact"},{"id":"privacy","name":"Privacy","url":"/privacy"},{"id":"legal","name":"Legal","url":"/legal"}],"default-route":"","routing":{"":{"title":"homepage","content":"Havana Club 7 Fellowship is aeustiunti <a href='#/fellowship'>fellowship</a> and lantemquiam volores aut epico and <a href='#/projects'>project</a> unt que vererna mendebi. Namenis esed milla nosam vel ea <a href='#/shop'>shop</a> estrum und nexpedion re consequunt. Nam vendio et parcit, comni <a href='#/news'>news</a>"},"/fellowship":{"title":"fellowship page","content":"In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.<br/>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again – this time to initiate the fellowship with Havana Club 7. A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.<br/>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy of Elliott Erwitt and Cuba."},"/projects":{"title":"projects page"},"/shop":{"title":"shop page"},"/news":{"title":"news page"},"/contact":{"title":"contact page"},"/legal":{"title":"legal page"},"/privacy":{"title":"privacy page"}}},"shop":{"intro":{"title":"Discover and buy artwork","paragraphs":["The Fellowship shop is key to the fellowship. Here you can purchase limited edition signed originals by the photographer.","50% of the proceeds will go to support the next fellowship photographer and 50% will go to the photographer. In addition to the proceeds from print sales Havana Club 7 will also fund additional photographers to go to Cuba."]}}}
},{}]},{},["/Users/nicolas/Developement/freelance/Havana/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hY3Rpb25zL0FydGlzdEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvQ2FydEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvUHJpbnRBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQXJ0aXN0QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQ2FydEFwaS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYXBpL1ByaW50QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0NhcnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Db250YWN0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0ZlbGxvd3NoaXAuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvRnJpZW5kcy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9HYWxsZXJ5LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTGVnYWwuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTmV3cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Ob3Rmb3VuZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9QYXltZW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaXZhY3kuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9TaG9wLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25maWcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcHBDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcnRpc3RDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9DYXJ0Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvUHJpbnRDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc2VydmljZXMvUm91dGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9BcnRpc3RTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0NhcnRTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL1ByaW50U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL0F1dG9iaW5kLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9VdGlscy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvb2Zmc2V0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9yYWYuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL3Njcm9sbFRvLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL1BhZ2VyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZVBhZ2VyLmpzIiwid3d3L2RhdGEvZGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzttQkNiZ0IsS0FBSzs7OztvQkFDQSxNQUFNOzs7O3FCQUNULE9BQU87Ozs7bUJBQ1QsS0FBSzs7Ozt5QkFDQyxXQUFXOzs7O0FBRWpDLDRCQUFVLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7O0FBR3hCLElBQUksR0FBRyxHQUFHLHNCQUFTLENBQUE7QUFDbkIs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QUFNLENBQUMsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsY0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGNBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLEtBQUcsQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLFFBQVEsSUFBRSxPQUFPLENBQUMsS0FBRyxDQUFDLEdBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxLQUFLLEtBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7S0FBQyxFQUFDLEdBQUcsRUFBQyxhQUFTLENBQUMsRUFBQztBQUFDLFVBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLO1VBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSztVQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUs7VUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFFLEVBQUUsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssS0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUFDLEVBQUMsQ0FBQztNQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsWUFBVTtBQUFDLFdBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFD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QUM1RCxRQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7QUFDdEIsUUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0dBQ3RCOzs7U0FFZSwwQkFBQyxHQUFHLEVBQUU7QUFDckIsT0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUN0QyxRQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7QUFDdEMsUUFBSSxXQUFXLEdBQUcsbUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNsRCx1QkFBTSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6QztHQUNEOzs7U0FFbUIsZ0NBQUc7QUFDdEIscUJBQVcsR0FBRyxDQUFDLHNCQUFlLGtCQUFrQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzVFLHFCQUFXLEdBQUcsQ0FBQyxzQkFBZSxtQkFBbUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUM5RSxPQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDdEMsT0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0dBQ3RDOzs7UUFwR21CLFNBQVM7R0FBUyxtQkFBTSxTQUFTOztxQkFBakMsU0FBUzs7OztBQ1A5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgKHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBBcHAgZnJvbSAnQXBwJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgUGFnZXIgZnJvbSAnUGFnZXInXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBGYXN0Q2xpY2sgZnJvbSAnZmFzdGNsaWNrJ1xuXG5GYXN0Q2xpY2soZG9jdW1lbnQuYm9keSlcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0Ly8gSW5pdCByb3V0ZXJcblx0XHR2YXIgcm91dGVyID0gbmV3IFJvdXRlcigpXG5cdFx0cm91dGVyLmluaXQoKVxuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cdFx0XG5cdFx0Ly8gUmVuZGVyIHJlYWN0XG5cdFx0UmVhY3QucmVuZGVyKFxuXHRcdFx0PEFwcFRlbXBsYXRlIC8+LFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuICAgIFx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRnJvbnRDb250YWluZXIgZnJvbSAnRnJvbnRDb250YWluZXInXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnUGFnZXNDb250YWluZXInXG5pbXBvcnQgQ2FydCBmcm9tICdDYXJ0J1xuaW1wb3J0IENhcnRTdG9yZSBmcm9tICdDYXJ0U3RvcmUnXG5cbmZ1bmN0aW9uIF9nZXRDYXJ0U3RhdGUoKSB7XG5cdHJldHVybiB7XG5cdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0Y2FydENvdW50OiBDYXJ0U3RvcmUuZ2V0Q2FydENvdW50KCksXG5cdFx0Y2FydFRvdGFsOiBDYXJ0U3RvcmUuZ2V0Q2FydFRvdGFsKCksXG5cdFx0Y2FydFZpc2libGU6IENhcnRTdG9yZS5nZXRDYXJ0VmlzaWJsZSgpLFxuXHRcdGNhcnRFbmFibGVkOiBDYXJ0U3RvcmUuZ2V0Q2FydEVuYWJsZWQoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlID0gX2dldENhcnRTdGF0ZSgpXG5cdFx0dGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uU3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFxuXHRcdENhcnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdENhcnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ndGVtcGxhdGUnPlxuXHRcdFx0XHQ8Y2FudmFzIHJlZj0nY2FudmFzJyBjbGFzc05hbWU9J2NhbnZhcyc+PC9jYW52YXM+XG5cdFx0XHRcdDxGcm9udENvbnRhaW5lciAvPlxuXHRcdFx0XHQ8UGFnZXNDb250YWluZXIgLz5cblx0XHRcdFx0PENhcnRcblx0XHRcdFx0XHRwcm9kdWN0cz17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0SXRlbXMgOiAnJ31cblx0XHRcdFx0XHRjb3VudD17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0Q291bnQgOiAnJ31cblx0XHRcdFx0XHR0b3RhbD17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0VG90YWwgOiAnJ31cblx0XHRcdFx0XHR2aXNpYmxlPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRWaXNpYmxlIDogJyd9XG5cdFx0XHRcdFx0ZW5hYmxlZD17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0RW5hYmxlZCA6ICcnfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0R2xvYmFsRXZlbnRzLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKF9nZXRDYXJ0U3RhdGUoKSlcblx0fVxuXG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCAnZmV0Y2gnXG5cbnZhciBBcnRpc3RBY3Rpb25zID0ge1xuXG4gICAgcmVjZWl2ZUFsbCA6IGZ1bmN0aW9uKGFydGlzdHMpe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BTExfQVJUSVNUUyxcbiAgICAgICAgICAgIGl0ZW06IGFydGlzdHNcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlY2VpdmUgOiBmdW5jdGlvbihhcnRpc3Qpe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1QsXG4gICAgICAgICAgICBpdGVtOiBhcnRpc3RcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXJ0aXN0Q29uc3RhbnRzLkVSUk9SLFxuICAgICAgICAgICAgaXRlbTogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBDYXJ0Q29uc3RhbnRzIGZyb20gJ0NhcnRDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIENhcnRBY3Rpb25zID0ge1xuXG5cdC8vIFJlY2VpdmUgaW5pdGFsIHByb2R1Y3QgZGF0YVxuXHRyZWNlaXZlUHJvZHVjdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuUkVDRUlWRV9EQVRBLFxuXHRcdFx0ZGF0YTogZGF0YVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gU2V0IGN1cnJlbnRseSBzZWxlY3RlZCBwcm9kdWN0IHZhcmlhdGlvblxuXHRzZWxlY3RQcm9kdWN0OiBmdW5jdGlvbihpbmRleCkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuU0VMRUNUX1BST0RVQ1QsXG5cdFx0XHRkYXRhOiBpbmRleFxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gQWRkIGl0ZW0gdG8gY2FydFxuXHRhZGRUb0NhcnQ6IGZ1bmN0aW9uKHByaW50SWQsIHVwZGF0ZSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9BREQsXG5cdFx0XHRwcmludElkOiBwcmludElkLFxuXHRcdFx0dXBkYXRlOiB1cGRhdGVcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuXHRyZW1vdmVGcm9tQ2FydDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfUkVNT1ZFLFxuXHRcdFx0aW5kZXg6IGluZGV4XG5cdFx0fSlcblx0fSxcblxuXHQvLyBVcGRhdGUgY2FydCB2aXNpYmlsaXR5IHN0YXR1c1xuXHR1cGRhdGVDYXJ0VmlzaWJsZTogZnVuY3Rpb24oY2FydFZpc2libGUpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfVklTSUJMRSxcblx0XHRcdGNhcnRWaXNpYmxlOiBjYXJ0VmlzaWJsZVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gVXBkYXRlIGNhcnQgZW5hYmxlZCBzdGF0dXNcblx0dXBkYXRlQ2FydEVuYWJsZWQ6IGZ1bmN0aW9uKGNhcnRFbmFibGVkKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX0VOQUJMRUQsXG5cdFx0XHRjYXJ0RW5hYmxlZDogY2FydEVuYWJsZWRcblx0XHR9KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIFByaW50QWN0aW9ucyA9IHtcblxuXHRyZWNlaXZlQWxsIDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FMTF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlRm9yU2FsZSA6IGZ1bmN0aW9uKHByaW50cyl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfRk9SU0FMRSxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVTbGlkZXNob3cgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVGcm9tQXJ0aXN0IDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlQsXG5cdFx0XHRpdGVtOiBwcmludFxuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5FUlJPUixcblx0XHRcdGl0ZW06IGVycm9yXG5cdFx0fSk7XG5cdH0sXG5cblx0c2V0UHJpbnRab29tIDogZnVuY3Rpb24oaWQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlpPT00sXG5cdFx0XHRpdGVtOiBpZFxuXHRcdH0pO1x0XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmludEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgQXJ0aXN0QWN0aW9ucyBmcm9tICdBcnRpc3RBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9hcnRpc3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRBcnRpc3RBY3Rpb25zLnJlY2VpdmVBbGwoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlTbHVnIDogZnVuY3Rpb24oc2x1Zykge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvYXJ0aXN0LycgKyBzbHVnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdEFydGlzdEFjdGlvbnMucmVjZWl2ZShqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdHBheSA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKCdodHRwczovL3NlY3VyZS10ZXN0LmJlMmJpbGwuY29tL2Zyb250L2Zvcm0vcHJvY2VzcycsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ly8gaGVhZGVyczoge1xuXHRcdFx0XHQvLyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHQvLyB9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuXHRcdFx0XHRPUkRFUklEOiAnMDEyMzQ1Njc4OScsXG5cdFx0XHRcdElERU5USUZJRVI6ICdDT05WT1knLFxuXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblx0Z2VuZXJhdGVQYXlCdXR0b24gOiBmdW5jdGlvbigpIHtcblx0XHQvLyBmZXRjaCgnLi9waHAvaGVsbG8ucGhwJylcblx0XHQvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9mcmVlbGFuY2UvSGF2YW5hL3BocC9oZWxsby5waHAnKVxuXHRcdC8vIC8vIGZldGNoKCcxOTIuMTY4LjEuMzcvZnJlZWxhbmNlL0hhdmFuYS9waHAvaGVsbG8ucGhwJylcblx0XHQvLyBcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdC8vIFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpXG5cdFx0Ly8gXHR9KS50aGVuKGZ1bmN0aW9uKGJvZHkpIHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coYm9keSlcblx0XHQvLyBcdFx0Ly8gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBib2R5XG5cdFx0Ly8gXHR9KVxuXG5cdFx0aHR0cEdldEFzeW5jKCdodHRwOi8vbG9jYWxob3N0L2ZyZWVsYW5jZS9IYXZhbmEvcGhwL2hlbGxvLnBocCcsIChyZXMpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHR9KTtcblx0fVxuXG59O1xuXG5mdW5jdGlvbiBodHRwR2V0QXN5bmModGhlVXJsLCBjYWxsYmFjaylcbntcbiAgICB2YXIgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhtbEh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7IFxuICAgICAgICBpZiAoeG1sSHR0cC5yZWFkeVN0YXRlID09IDQgJiYgeG1sSHR0cC5zdGF0dXMgPT0gMjAwKVxuICAgICAgICAgICAgY2FsbGJhY2soeG1sSHR0cC5yZXNwb25zZVRleHQpO1xuICAgIH1cbiAgICB4bWxIdHRwLm9wZW4oXCJHRVRcIiwgdGhlVXJsLCB0cnVlKTsgLy8gdHJ1ZSBmb3IgYXN5bmNocm9ub3VzIFxuICAgIHhtbEh0dHAuc2VuZChudWxsKTtcbn0iLCJpbXBvcnQgUHJpbnRBY3Rpb25zIGZyb20gJ1ByaW50QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdGdldEFsbCA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUFsbChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRGb3JTYWxlIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMvZm9yc2FsZScpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0UHJpbnRBY3Rpb25zLnJlY2VpdmVGb3JTYWxlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldFNsaWRlc2hvdyA6IGZ1bmN0aW9uKGFydGlzdCwgaWQpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy8nICsgYXJ0aXN0ICsgJy9zbGlkZXNob3cvJyArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlU2xpZGVzaG93KGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldEJ5QXJ0aXN0IDogZnVuY3Rpb24oYXJ0aXN0KSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMvJyArIGFydGlzdClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUZyb21BcnRpc3QoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0T25lIDogZnVuY3Rpb24oaWQpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50LycgKyBpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZShqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRvcmRlciA6IGZ1bmN0aW9uKGlkLCBzZXJpYWwpIHtcblx0XHRjb25zb2xlLmxvZyhzZXJpYWwpXG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludC8nICsgaWQsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQnc2VyaWFsJyA6IHNlcmlhbFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9LFxuXG5cdGNyZWF0ZSA6IGZ1bmN0aW9uKHByaW50KXtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cycsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQncHJpbnQnIDogcHJpbnRcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH1cblxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IENhcnRBY3Rpb25zIGZyb20gJ0NhcnRBY3Rpb25zJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBwcm9wc1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGFzaDogdW5kZWZpbmVkXG5cdFx0fVxuXG5cdFx0Ly8gY29uc3Rcblx0XHR0aGlzLkNBUlRfREVMQVkgPSAyMDAwXG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl9kaWRIYXNoZXJDaGFuZ2VCaW5kZWQgPSB0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLl9kaWRIYXNoZXJDaGFuZ2VCaW5kZWQpXHRcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGRvbSgnYm9keScpLm9uKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcykpXG5cdFx0ZG9tKCcuY2FydF9fY29udGVudCcpLm9uKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0X19jb3VudCcpLm9uKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVDb3VudEVudGVyLmJpbmQodGhpcykpXG5cdFx0ZG9tKCcuY2FydCcpLm9uKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVFbnRlci5iaW5kKHRoaXMpKVxuXHRcdGRvbSgnLmNhcnQnKS5vbignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlTGVhdmUuYmluZCh0aGlzKSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgaXRlbUxhYmVsID0gKHRoaXMucHJvcHMuY291bnQgPiAxKSA/ICdpdGVtcycgOiAnaXRlbSdcblx0XHRsZXQgY2xhc3NlcyA9ICh0aGlzLnByb3BzLmVuYWJsZWQgPyAnY2FydC0tZW5hYmxlZCAnIDogJyAnKSArICh0aGlzLnByb3BzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5oYXNoID09PSAnc2hvcCcgPyAnY2FydC0tdmlzaWJsZScgOiAnJylcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J2NhcnQgJyArIGNsYXNzZXN9IHJlZj0nY2FydCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb3VudCc+Q2FydCDigJQ8c3Bhbj57dGhpcy5wcm9wcy5jb3VudH08L3NwYW4+IHtpdGVtTGFiZWx9PC9kaXY+XG5cdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLmNvdW50ID4gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2NhcnRfX3Byb2R1Y3RzJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnByb2R1Y3RzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBwcm9kdWN0ID0gdGhhdC5wcm9wcy5wcm9kdWN0c1tpbmRleF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICggXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nY2FydF9fcHJvZHVjdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2FydGlzdCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19kZXRhaWxzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY2l0eSc+e3Byb2R1Y3QuY2l0eX08L2Rpdj4sIDxkaXYgY2xhc3NOYW1lPSdjYXJ0X195ZWFyJz57cHJvZHVjdC55ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3NlcmlhbCc+U2VyaWFsIDxzcGFuIGNsYXNzTmFtZT0nY2FydF9fbnVtYmVyJz57cHJvZHVjdC5zZXJpYWx9L3twcm9kdWN0LmNvcGllc308L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19wcmljZSc+e3Byb2R1Y3QucHJpY2V9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaW50Jz48aW1nIGNsYXNzTmFtZT0nY2FydF9faW1hZ2UnIHNyYz17Jy9zdGF0aWMvaW1nLycrcHJvZHVjdC5maWxlKydfbWluLmpwZyd9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcmVtb3ZlIGJ1dHRvbiBidXR0b24tLWxlZnQnIG9uQ2xpY2s9e3RoYXQucmVtb3ZlSXRlbS5iaW5kKHRoYXQsIGluZGV4KX0+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPlJlbW92ZSBpdGVtPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fc3VidG90YWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+U3VidG90YWw6PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz57dGhpcy5wcm9wcy50b3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NoZWNrb3V0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMvcGF5bWVudCcgY2xhc3NOYW1lPSdjYXJ0X19idXR0b24gYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+Q2hlY2sgb3V0PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb250ZW50Jz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fZW1wdHknPlxuXHRcdFx0XHRcdFx0XHRcdFx0WW91IGhhdmUgbm8gaXRlbXMgaW4geW91ciBjYXJ0LlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGUoKSB7XG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQoIXRoaXMucHJvcHMuZW5hYmxlZClcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5wcm9wcy5lbmFibGVkID0gdHJ1ZVxuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRoaXMucHJvcHMuZW5hYmxlZClcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmVuYWJsZWQpIHtcblx0XHRcdHRoaXMucHJvcHMuZW5hYmxlZCA9IGZhbHNlXG5cdFx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZCh0aGlzLnByb3BzLmVuYWJsZWQpXG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlSXRlbShpbmRleCkge1xuXHRcdENhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0KGluZGV4KVxuXHR9XG5cblx0aGFuZGxlQ2xpY2tPdXRzaWRlKGUpIHtcblx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fcmVtb3ZlJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fYnV0dG9uJykpIHtcblx0XHRcdGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fY291bnQnKSkgdGhpcy50b2dnbGUoKVxuXHRcdFx0ZWxzZSB0aGlzLmNsb3NlKClcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGlja0luc2lkZShlKSB7XG5cdFx0aWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX3JlbW92ZScpKSBlLnN0b3BQcm9wYWdhdGlvbigpXG5cdH1cblxuXHRoYW5kbGVDb3VudEVudGVyKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5jbG9zZUNvdW50ZG93bilcblx0XHR0aGlzLmNsb3NlQ291bnRkb3duID0gdW5kZWZpbmVkXG5cdFx0dGhpcy5vcGVuKClcblx0fVxuXG5cdGhhbmRsZUVudGVyKGUpIHtcblx0XHRpZiAodGhpcy5jbG9zZUNvdW50ZG93bikge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VDb3VudGRvd24pXG5cdFx0XHR0aGlzLmNsb3NlQ291bnRkb3duID0gdW5kZWZpbmVkXG5cdFx0XHR0aGlzLm9wZW4oKVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUxlYXZlKGUpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHR0aGlzLmNsb3NlQ291bnRkb3duID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQ291bnRkb3duKVxuXHRcdFx0dGhpcy5jbG9zZUNvdW50ZG93biA9IHVuZGVmaW5lZFxuXHRcdH0sIHRoaXMuQ0FSVF9ERUxBWSlcblx0fVxuXG5cdF9kaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRoYXNoOiBBcHBTdG9yZS5oYXNoKClcblx0XHR9KVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJvbnRDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2VCaW5kZWQgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhhc2g6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2VCaW5kZWQpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IG1lbnVEYXRhID0gQXBwU3RvcmUubWVudUNvbnRlbnQoKVxuXHRcdGxldCBtZW51SXRlbXMgPSBtZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0bGV0IHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0bGV0IGNsYXNzZXMgPSAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKSB8fCAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKydzJykgPyAnYnV0dG9uLS1lbmFibGVkJyA6ICcnXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9eydoZWFkZXJfX2l0ZW0gJyArIGNsYXNzZXN9IGtleT17aW5kZXh9PjxhIGhyZWY9e3BhdGhVcmx9IGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+e2l0ZW0ubmFtZX08L3NwYW4+PC9hPjwvbGk+XG5cdFx0XHQpXG5cdFx0fSkucmV2ZXJzZSgpXG5cdFx0bGV0IGZvb3Rlck1lbnVEYXRhID0gQXBwU3RvcmUuZm9vdGVyTWVudUNvbnRlbnQoKVxuXHRcdGxldCBmb290ZXJNZW51SXRlbXMgPSBmb290ZXJNZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0bGV0IHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0bGV0IGNsYXNzZXMgPSAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKSB8fCAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKydzJykgPyAnYnV0dG9uLS1lbmFibGVkJyA6ICcnXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtwYXRoVXJsfSBjbGFzc05hbWU9J2Zvb3Rlcl9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXJpZ2h0Jz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+e2l0ZW0ubmFtZX08L3NwYW4+PC9hPjwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdmcm9udENvbnRhaW5lcicgY2xhc3NOYW1lPSdmcm9udC1jb250YWluZXInIHJlZj0nZnJvbnQtY29udGFpbmVyJz5cblx0XHRcdFx0PGhlYWRlciBpZD0naGVhZGVyJyBjbGFzc05hbWU9J2hlYWRlcic+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0naGVhZGVyX190aXRsZSc+PGEgaHJlZj0nIy8nPkVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDc8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX19zdWJ0aXRsZSc+RmVsbG93c2hpcDwvZGl2PjwvYT48L2gxPlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSdoZWFkZXJfX21lbnUnPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0naGVhZGVyX19saXN0Jz5cblx0XHRcdFx0XHRcdFx0e21lbnVJdGVtc31cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHQ8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyJz5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7Zm9vdGVyTWVudUl0ZW1zfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aGFzaDogQXBwU3RvcmUuaGFzaCgpXG5cdFx0fSlcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnQmFzZVBhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsIHRoaXMucmVzaXplKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdHN1cGVyLnNldHVwQW5pbWF0aW9ucygpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZXIgZnJvbSAnQmFzZVBhZ2VyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBIb21lIGZyb20gJ0hvbWUnXG5pbXBvcnQgRmVsbG93c2hpcCBmcm9tICdGZWxsb3dzaGlwJ1xuaW1wb3J0IEZyaWVuZHMgZnJvbSAnRnJpZW5kcydcbmltcG9ydCBQcm9qZWN0cyBmcm9tICdQcm9qZWN0cydcbmltcG9ydCBQcm9qZWN0IGZyb20gJ1Byb2plY3QnXG5pbXBvcnQgR2FsbGVyeSBmcm9tICdHYWxsZXJ5J1xuaW1wb3J0IFNob3AgZnJvbSAnU2hvcCdcbmltcG9ydCBQcmludCBmcm9tICdQcmludCdcbmltcG9ydCBOZXdzIGZyb20gJ05ld3MnXG5pbXBvcnQgUGF5bWVudCBmcm9tICdQYXltZW50J1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnQ29udGFjdCdcbmltcG9ydCBMZWdhbCBmcm9tICdMZWdhbCdcbmltcG9ydCBQcml2YWN5IGZyb20gJ1ByaXZhY3knXG5pbXBvcnQgTm90Zm91bmQgZnJvbSAnTm90Zm91bmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VzQ29udGFpbmVyIGV4dGVuZHMgQmFzZVBhZ2VyIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdGxldCBoYXNoID0gUm91dGVyLmdldE5ld0hhc2goKVxuXHRcdGxldCB0eXBlID0gdW5kZWZpbmVkXG5cdFx0bGV0IGlkID0gdW5kZWZpbmVkXG5cblx0XHRzd2l0Y2goaGFzaC5wYXJlbnQpIHtcblx0XHRcdGNhc2UgJyc6XG5cdFx0XHRcdHR5cGUgPSBIb21lXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmZWxsb3dzaGlwJzpcblx0XHRcdFx0dHlwZSA9IEZlbGxvd3NoaXBcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2ZyaWVuZHMnOlxuXHRcdFx0XHR0eXBlID0gRnJpZW5kc1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncHJvamVjdHMnOlxuXHRcdFx0XHR0eXBlID0gUHJvamVjdHNcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Byb2plY3QnOlxuXHRcdFx0XHRpZiAoaGFzaC5wYXJ0cy5sZW5ndGggPiAyKSB7XG5cdFx0XHRcdFx0aWYgKGhhc2gucGFydHNbMl0gPT09ICdjb250YWN0LXNoZWV0Jykge1xuXHRcdFx0XHRcdFx0dHlwZSA9IEdhbGxlcnlcblx0XHRcdFx0XHRcdGlkID0gaGFzaC50YXJnZXRJZFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB6b29tIHN1ciB1bmUgcGhvdG9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9IFByb2plY3Rcblx0XHRcdFx0XHRpZCA9IGhhc2gudGFyZ2V0SWRcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnc2hvcCc6XG5cdFx0XHRcdGlmIChoYXNoLnBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHR0eXBlID0gUHJpbnRcblx0XHRcdFx0XHRpZCA9IGhhc2gudGFyZ2V0SWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0eXBlID0gU2hvcFxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICduZXdzJzpcblx0XHRcdFx0dHlwZSA9IE5ld3Ncblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3BheW1lbnQnOlxuXHRcdFx0XHR0eXBlID0gUGF5bWVudFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnY29udGFjdCc6XG5cdFx0XHRcdHR5cGUgPSBDb250YWN0XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdsZWdhbCc6XG5cdFx0XHRcdHR5cGUgPSBMZWdhbFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncHJpdmFjeSc6XG5cdFx0XHRcdHR5cGUgPSBQcml2YWN5XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0eXBlID0gTm90Zm91bmRcblx0XHR9XG5cdFx0dGhpcy5zZXR1cE5ld0NvbXBvbmVudChoYXNoLnBhcmVudCwgdHlwZSwgaWQpXG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nY29udGFjdFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0e2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnc2Nyb2xsVG8nXG5sZXQgc2Nyb2xsID0gVXRpbHMuU2Nyb2xsKClcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlbGxvd3NoaXAgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0Ly8gcHJvcHNcblx0XHR0aGlzLnByb3BzID0gcHJvcHNcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZXc6ICdiaW9ncmFwaHknXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fZ29Ub0Jpb2dyYXBoeUJpbmRlZCA9IHRoaXMuX2dvVG9CaW9ncmFwaHkuYmluZCh0aGlzKVxuXHRcdHRoaXMuX3RvZ2dsZVZpZGVvQmluZGVkID0gdGhpcy5fdG9nZ2xlVmlkZW8uYmluZCh0aGlzKVxuXHRcdHRoaXMuX3JhZkJpbmRlZCA9IHRoaXMuX3JhZi5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0Ly8gY29uc3Rcblx0XHR0aGlzLlBBUkFMTEFYX01BUkdFID0gMzBcblx0XHR0aGlzLlBBUkFMTEFYX0RVUkFUSU9OID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XG5cdFx0Ly8gdmFyc1xuXHRcdHRoaXMudmlkZW9QbGF5ZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cdFxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0dGhpcy5fbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGltaXQnKVxuXHRcdHRoaXMuX2FydGlzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fYXJ0aXN0Jylcblx0XHR0aGlzLl92aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX192aWRlbycpXG5cdFx0dGhpcy5hcnRpc3RPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fYXJ0aXN0Jykub2Zmc2V0VG9wXG5cdFx0dGhpcy5fZWxsaW90dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19lbGxpb3R0Jylcblx0XHRcblx0XHR0aGlzLl9yYWYoKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBmZWxsb3dzaGlwRGF0YSA9IEFwcFN0b3JlLmZlbGxvd3NoaXBDb250ZW50KClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1mZWxsb3dzaGlwJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51Jz48YSBocmVmPScjL2ZyaWVuZHMnIGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RnJpZW5kcyBvZiB0aGUgZmVsbG93c2hpcDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmZWxsb3dzaGlwJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8gZmVsbG93c2hpcF9fdmlkZW8nPlxuXHRcdFx0XHRcdFx0PHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPSd2aWRlb19fZmlsZSc+XG5cdFx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cblx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9Jy4vYXNzZXRzL3ZpZGVvcy9iZy1ob21lLndlYm0nIHR5cGU9J3ZpZGVvL3dlYm0nIC8+XG5cdFx0XHRcdFx0XHQ8L3ZpZGVvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19wcmVzZW50YXRpb24nPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1iaWcgcGFyYWdyYXBoLS1jZW50ZXInIGRhdGEtZWFzZT0nLjAnPkEgZmVsbG93c2hpcCBpcyBhIGNvbW11bmlvbiBvZiBwZW9wbGUgc2hhcmluZyBhIGNvbW1vbiBwYXNzaW9uLjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwgcGFyYWdyYXBoLS1jZW50ZXInPkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1tZWRpdW0gcGFyYWdyYXBoLS1jZW50ZXInPk1hc3RlciBwaG90b2dyYXBoZXIgRWxsaW90dCBFcndpdHTigJlzIGxpZmVsb25nIGxvdmUgb2YgcGhvdG9ncmFwaHkgYW5kIEN1YmEgaGFzIGJyb3VnaHQgaGltIGJhY2sgdG8gQ3ViYSBhZ2FpbiBhZnRlciA1MSB5ZWFycyDigJMgdGhpcyB0aW1lIHRvIGluaXRpYXRlIHRoZSBmZWxsb3dzaGlwIHdpdGggSGF2YW5hIENsdWIgNy48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cganMtbGltaXQnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4gcGFyYWdyYXBoX19jb2x1bW4tLWxlZnQnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19lbGxpb3R0JyBzcmM9Jy4uL2Fzc2V0cy9pbWFnZXMvZWxsaW90dC1lcndpdHQuanBnJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5BIG5ldyBib2R5IG9mIHdvcmsgd2lsbCBjcmVhdGUgYSBzdGFydGluZyBwb2ludCBmb3IgYSBuZXcgZ2VuZXJhdGlvbiBvZiBwaG90b2dyYXBoZXJzIHRvIHJlbGF0ZSB0bywgdG8gZnVydGhlciBkZXZlbG9wIHRoZWlyIGNyYWZ0IGFuZCBoZWxwIChyZSlkZWZpbmUgdGhlIGdlbnJlIGluIHRoZSAyMXN0IGNlbnR1cnkuICBJbnNwaXJlZCBieSBFbGxpb3R0IEVyd2l0dCwgZXhjZXB0aW9uYWwgdGFsZW50cyBzZWxlY3RlZCBmb3IgdGhlIGZlbGxvd3NoaXAgd2lsbCBlYWNoIGNyZWF0ZSBhIHVuaXF1ZSBib2R5IG9mIHdvcmssIGNhcHR1cmluZyB0aGUgc291bCBvZiBDdWJhIHdoaWNoIHdpbGwgYmUgc2hhcmVkIHdpdGggcGhvdG9ncmFwaHkgbG92ZXJzIHdvcmxkd2lkZS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLW1lZGl1bSBwYXJhZ3JhcGgtLWNlbnRlcic+SW4gdGhlIHNwaXJpdCBvZiBDdWJhLCA3IHBob3RvcyBvZiBlYWNoIGZlbGxvdyB3aWxsIGJlIHNvbGQgdG8gc3VwcG9ydCB0aGUgbmV4dCBwaG90b2dyYXBoZXIgam9pbmluZyB0aGUgZmVsbG93c2hpcCBhbmQgdGh1cyBvZmZlcmluZyBlYWNoIHBob3RvZ3JhcGhlciB0aGUgb3Bwb3J0dW5pdHkgdG8gYmVuZWZpdCB0aGUgbmV4dCBpbiBsaW5lIHRvIGNhcnJ5IG9uIHRoZSBsZWdhY3kuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fcm93Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5JbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgZnVuZCBhIHNpbWlsYXIgYW1vdW50IHRvIGdpdmUgbW9yZSBwaG90b2dyYXBoZXJzIHRoZSBjaGFuY2UgdG8gdGVsbCB0aGUgc3Rvcnkgb2YgQ3ViYS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4gcGFyYWdyYXBoX19jb2x1bW4tLXJpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fZWxsaW90dCcgc3JjPScvc3RhdGljL2ltZy9FUkUyMDE1MDAyVzAwMDMzLTM2QV9tZWRpdW0uanBnJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCBwYXJhZ3JhcGgtLWNlbnRlcic+VGhlIGZvbGxvd2luZyBmZWxsb3dzaGlwIHBob3RvZ3JhcGhlcnMgd2lsbCBiZSBzZWxlY3RlZCBieSBhIGNvbW1pdHRlZSBoZWFkZWQgYnkgRWxsaW90dCBFcndpdHQgY29tcHJpc2luZyBvZiBDdWJhbiBhbmQgaW50ZXJuYXRpb25hbCBwaG90b2dyYXBoeSBwcm9mZXNzaW9uYWxzIGVuc3VyaW5nIHRoZSBuZXh0IGZlbGxvdyB3aWxsIGNvbnRpbnVlIHRoZSBsZWdhY3kgb2YgY3ViYSBhbmQgdGhlIGh1bWFuIGNvbmRpdGlvbiBpbiBDdWJhIHRocm91Z2ggZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGdpdmUgdXMgdGhlaXIgb3duIHZpc2lvbi48L3A+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXNjb3ZlciBmZWxsb3dzaGlwX19kaXNjb3Zlcicgb25DbGljaz17dGhpcy5fZ29Ub0Jpb2dyYXBoeUJpbmRlZH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RGlzY292ZXIgRWxsaW90dCBFcndpdHQncyBiaW9ncmFwaHk8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0Jz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0bmFtZSBwYXJhZ3JhcGggcGFyYWdyYXBoLS1iaWcgcGFyYWdyYXBoLS1jZW50ZXInIGRhdGEtZWFzZT0nLjAnPkVMTElPVFQgRVJXSVRU4oCZUyBCSU9HUkFQSFk8L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkVsbGlvdHQgRXJ3aXR0IGlzIG9uZSBvZiB0aGUgd29ybGTigJlzIG1vc3QgcG9wdWxhciBhbmQgYWRtaXJlZCBwaG90b2dyYXBoZXJzLiBBIHZpc3VhbCBwb2V0IGFuZCBodW1vcmlzdCBvZiBldmVyeWRheSBsaWZlLCBoZSBoYXMgY3JlYXRlZCBzb21lIG9mIHRoZSBtb3N0IG1lbW9yYWJsZSBpbWFnZXMgb2Ygb3VyIHRpbWUsIGZyb20gaGlzIG9ic2VydmF0aW9ucyBvZiBkYWlseSBsaWZlIGF0IHN0cmVldCBsZXZlbCwgdG8gcG9ydHJhaXRzIG9mIHRoZSBpY29uaWMgcGVyc29uYWxpdGllcyBpbmNsdWRpbmcgTWFyaWx5biBNb25yb2Ugb24gdGhlIHNldCBvZiB0aGUgZmlsbSBUaGUgTWlzZml0cyBhbmQgVHJ1bWFuIENhcG90ZeKAmXMgZXBpYyAxOTY2IEJsYWNrIGFuZCBXaGl0ZSBCYWxsIGluIE5ldyBZb3JrIENpdHkuIEhlIGhhcyBwaG90b2dyYXBoZWQgS2hydXNoY2hldiBhbmQgTml4b24gYXJndWluZyBpbiBNb3Njb3csIEZpZGVsIENhc3RybyBhbmQgQ2hlIEd1ZXZhcmEgaW4gSGF2YW5hIGFuZCBQcmVzaWRlbnQgSkZLIGluIHRoZSBPdmFsIG9mZmljZS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVZpZGVvQmluZGVkfT5cblx0XHRcdFx0XHRcdFx0XHQ8dmlkZW8gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19pbnRlcnZpZXcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9Jy4vYXNzZXRzL3ZpZGVvcy9iZy1ob21lLm1wNCcgdHlwZT0ndmlkZW8vbXA0JyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9Jy4vYXNzZXRzL3ZpZGVvcy9iZy1ob21lLndlYm0nIHR5cGU9J3ZpZGVvL3dlYm0nIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWRlbz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX3BsYXkgZW5hYmxlZCc+cGxheSB2aWRlbzwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwgcGFyYWdyYXBoLS1jZW50ZXInPkJvcm4gaW4gUGFyaXMgaW4gMTkyOCB0byBSdXNzaWFuIHBhcmVudHMsIEVyd2l0dCBtb3ZlZCB0byB0aGUgVVMgd2l0aCBoaXMgZmFtaWx5IGluIDE5MzkgYW5kIGl0IHdhcyB0aGVyZSB0aGF0IGhlIG1ldCBFZHdhcmQgU3RlaWNoZW4gYW5kIFJveSBTdHJ5a2VyLiBSZWNydWl0ZWQgdG8gTWFnbnVtIFBob3RvcyBieSBSb2JlcnQgQ2FwYSBpbiAxOTUzIEVyd2l0dCBoYXMgYmVlbiBhIG1lbWJlciBvZiB0aGUgcHJlc3RpZ2lvdXMgYWdlbmN5IGV2ZXIgc2luY2UgYW5kIGhhcyBzZXJ2ZWQgc2V2ZXJhbCB0ZXJtcyBhcyBpdHMgcHJlc2lkZW50LjwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGgnPjxhIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYnV0dG9uIGJ1dHRvbicgaHJlZj0naHR0cDovL3d3dy5lbGxpb3R0ZXJ3aXR0LmNvbScgdGFyZ2V0PSdfYmxhbmsnPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5FbGxpb3R0IEVyd2l0dCBvZmZpY2lhbCB3ZWJzaXRlPC9zcGFuPjwvYT48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPlRvIGRhdGUgRXJ3aXR0IGhhcyBwcm9kdWNlZCBtb3JlIHRoYW4gMjUgcGhvdG9ncmFwaHkgYm9va3MgaW5jbHVkaW5nIEVhc3Rlcm4gRXVyb3BlICgxOTY1KSwgVGhlIFByaXZhdGUgRXhwZXJpZW5jZSAoMTk3NCksIFBlcnNvbmFsIEV4cG9zdXJlcyAoMTk4OCksIFRvIHRoZSBEb2dzICgxOTkyKSwgYW5kIFBlcnNvbmFsIEJlc3QgKDIwMTApLiBIaXMgcGhvdG9ncmFwaHMgaGF2ZSBiZWVuIGZlYXR1cmVkIGluIHNvbG8gc2hvd3MgYWxsIG92ZXIgdGhlIHdvcmxkLCBpbmNsdWRpbmcgYXTCoHRoZSBJQ1AgYW5kIFRoZSBNdXNldW0gb2YgTW9kZXJuIEFydCwgTmV3IFlvcms7IFRoZSBBcnQgSW5zdGl0dXRlIG9mIENoaWNhZ287wqBUaGUgQmFyYmljYW4sIExvbmRvbiwgYW5kIFRoZSBSZWluYSBTb2ZpYSBNdXNldW0sIE1hZHJpZC4gRXJ3aXR0IGxpdmVzIGFuZCB3b3JrcyBpbiBOZXcgWW9yayBDaXR5IGFuZCBsaWtlcyBjaGlsZHJlbiBhbmQgZG9ncy48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJz48YSBocmVmPScjL3Byb2plY3QvZWxsaW90dC1lcndpdHQnIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYnV0dG9uIGJ1dHRvbl9fY29udGVudCc+RGlzY292ZXIgaGlzIHByb2plY3Q8L2E+PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdF9yYWYoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsSW5kZXggJSAzKSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdGVsc2UgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnNjcm9sbEluZGV4KytcblxuXHRcdGlmICh0aGlzLnNjcm9sbE9rKSB7XG5cdFx0XHQvLyBsZXQgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdFx0dGhpcy5faGFuZGxlU2Nyb2xsKClcblx0XHR9XG5cblx0XHRzY3JvbGwodGhpcy5fcmFmQmluZGVkKTtcblx0fVxuXG5cdF9oYW5kbGVTY3JvbGwoKSB7XG5cdFx0aWYgKHRoaXMuX3ZpZGVvICYmIHRoaXMuX2xpbWl0KSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvcCA9IFV0aWxzLkdldFNjcm9sbFRvcCgpXG5cdFx0XHR0aGlzLnZpZGVvT3BhY2l0eSA9IFV0aWxzLkludGVydmFsKDEgLSAodGhpcy5zY3JvbGxUb3AgLyAodGhpcy5fbGltaXQub2Zmc2V0VG9wICsgMTYwIC0gd2luZG93LmlubmVySGVpZ2h0KSksIDAsIDEpXG5cdFx0XHR0aGlzLl92aWRlby5zdHlsZS5vcGFjaXR5ID0gdGhpcy52aWRlb09wYWNpdHlcblx0XHR9XG5cblx0XHRfKGRvbSgnLnBhcmFncmFwaCcpKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcblx0XHRcdHRoaXMuZWFzZSA9IGVsLmRhdGFzZXQuZWFzZSB8fCAwLjNcblx0XHRcdHRoaXMubGltaXRPZmZzZXQgPSBvZmZzZXQoZWwpXG5cdFx0XHQvLyB0aGlzLmxpbWl0VG9wID0gdGhpcy5saW1pdE9mZnNldC50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLlBBUkFMTEFYX01BUkdFXG5cdFx0XHR0aGlzLmxpbWl0VG9wID0gdGhpcy5saW1pdE9mZnNldC50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdHRoaXMuY29lZiA9IFV0aWxzLkludGVydmFsKHRoaXMubGltaXRUb3AgLyAoLXRoaXMuUEFSQUxMQVhfRFVSQVRJT04gLSB0aGlzLmxpbWl0T2Zmc2V0LmhlaWdodCksIDAsIDEpXG5cdFx0XHR0aGlzLmVsWSA9ICgxLXRoaXMuY29lZikgKiAyMDAgKiB0aGlzLmVhc2Vcblx0XHRcdC8vIGVsLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmVsT3BhY2l0eVxuXHRcdFx0ZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyB0aGlzLmVsWSArJ3B4KSB0cmFuc2xhdGVaKDBweCknKVxuXHRcdH0pLnZhbHVlKCk7XG5cdH1cblxuXHRfdG9nZ2xlVmlkZW8oKSB7XG5cdFx0aWYgKHRoaXMudmlkZW9QbGF5ZWQpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19pbnRlcnZpZXcnKS5wYXVzZSgpXG5cdFx0XHRkb20oJy5mZWxsb3dzaGlwX19wbGF5JykuYWRkQ2xhc3MoJ2VuYWJsZWQnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9faW50ZXJ2aWV3JykucGxheSgpXG5cdFx0XHRkb20oJy5mZWxsb3dzaGlwX19wbGF5JykucmVtb3ZlQ2xhc3MoJ2VuYWJsZWQnKVxuXHRcdH1cblx0XHR0aGlzLnZpZGVvUGxheWVkID0gIXRoaXMudmlkZW9QbGF5ZWRcblx0fVxuXG5cdF9nb1RvQmlvZ3JhcGh5KCkge1xuXHRcdHRoaXMuYXJ0aXN0T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpLm9mZnNldFRvcFxuXHRcdFR3ZWVuTWF4LnRvKHdpbmRvdywgMC42LCB7c2Nyb2xsVG86e3k6ICh0aGlzLmFydGlzdE9mZnNldFRvcCAtIDQwKX0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXG5cdFx0aWYgKHdpbmRvd1cvMS44IDwgd2luZG93SCkgZG9tKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcnRyYWl0Jylcblx0XHRlbHNlIGRvbSgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3J0cmFpdCcpXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdjb250YWN0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHRGcmllbmRzIG9mIHRoZSBmZWxsb3dzaGlwXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5sZXQgTWFzb25yeSA9IHJlcXVpcmUoJ21hc29ucnktbGF5b3V0JylcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBwcm9wc1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdHByaW50czogW10sXG5cdFx0XHRsb2FkZWRQcmludHM6IFtdXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZVxuXHRcdHRoaXMubkltYWdlTG9hZGVkID0gMFxuXHRcdHRoaXMucHJpbnRzID0gW11cblx0XHR0aGlzLnNjcm9sbEluZGV4ID0gMFxuXHRcdHRoaXMuc2Nyb2xsT2sgPSBmYWxzZVxuXHRcdHRoaXMudHJhbnNmb3JtID0gVXRpbHMuR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0UHJpbnRBcGkuZ2V0QnlBcnRpc3QodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRcblx0XHR0aGlzLl9yYWYoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsUmFmKVxuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHR9XG5cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlT3V0IH0pXG5cblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgcHJpbnRJbmRleCA9IC0xXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLWdhbGxlcnknIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1Ym1lbnUnPjxhIGhyZWY9eycjL3Byb2plY3QvJyt0aGlzLnByb3BzLmlkU2VjdGlvbn0gY2xhc3NOYW1lPSdidXR0b24nPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5CYWNrIHRvIGdhbGxlcnk8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeSc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUubG9hZGVkUHJpbnRzKS5tYXAoKHllYXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19ncmlkJyBrZXk9e3llYXIrJ18nK2l9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X193aWR0aCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dhbGxlcnlfX2l0ZW0gZ2FsbGVyeV9faXRlbS0tbGFyZ2UgZ2FsbGVyeV9faXRlbS0tZGlzYWJsZWQnPnt5ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnN0YXRlLmxvYWRlZFByaW50c1t5ZWFyXSkubWFwKChwcmludElkLCBqKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5sb2FkZWRQcmludHNbeWVhcl1bcHJpbnRJZF1cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzcmMgPSAnL3N0YXRpYy9pbWcvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdFx0XHRcdFx0XHRcdGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcblx0XHRcdFx0XHRcdFx0XHRcdHByaW50SW5kZXgrK1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLScrcHJpbnQuc2l6ZSsnIGdhbGxlcnlfX2l0ZW0tLScrcmFuZG9tfSBkYXRhLXJhbmRvbT17cmFuZG9tfSBrZXk9e3ByaW50SWR9IG9uQ2xpY2s9e3RoYXQuem9vbVByaW50LmJpbmQodGhhdCwgcHJpbnRJbmRleCl9PjxpbWcgY2xhc3NOYW1lPSdnYWxsZXJ5X19pbWFnZScgc3JjPXtzcmN9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0Xyhkb20oJy5nYWxsZXJ5X19pdGVtJykpLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0dGhpcy5saW1pdE9mZnNldCA9IG9mZnNldChlbClcblx0XHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdFx0dGhpcy5lbE9wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCh0aGlzLmxpbWl0VG9wIC8gKC10aGlzLk9QQUNJVFlfRFVSQVRJT04pLCAwLCAxKVxuXHRcdFx0dGhpcy5lbFkgPSAoMS10aGlzLmVsT3BhY2l0eSkgKiA1MFxuXHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0XHRlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMuZWxZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXHRcdHRoaXMucHJpbnRzRGF0ZSA9IHt9O1xuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgIXRoaXMubG9hZGVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdF8odGhpcy5zdGF0ZS5wcmludHMpLmZvckVhY2goKHByaW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMucHJpbnRzRGF0ZVtwcmludC55ZWFyXSkgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdID0ge31cblx0XHRcdFx0dGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSA9IHByaW50XG5cblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdCwgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSlcblx0XHRcdFx0ZmlsZS5zcmMgPSAnL3N0YXRpYy9pbWcvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JbWFnZUxvYWRlZChwcmludCwgZSkge1xuXHRcdHRoaXMubkltYWdlTG9hZGVkKys7XG5cblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgcGF0aCA9IGUuZXhwbGljaXRPcmlnaW5hbFRhcmdldCB8fCBlLnRhcmdldCB8fCBlLnBhdGhbMF0gXG5cdFx0aWYgKHBhdGguaGVpZ2h0ID49IHBhdGgud2lkdGgqMS4yKSBwcmludC5zaXplID0gJ3NtYWxsJ1xuXHRcdGVsc2UgcHJpbnQuc2l6ZSA9ICdsYXJnZSdcblx0XHRcblx0XHRpZiAodGhpcy5uSW1hZ2VMb2FkZWQgPj0gdGhpcy5tYXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHQnbG9hZGVkUHJpbnRzJzogdGhpcy5wcmludHNEYXRlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdGxldCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19ncmlkJyk7XG5cdFx0XHRcdF8oZ3JpZHMpLmZvckVhY2goKGdyaWQpID0+IHtcblx0XHRcdFx0XHRsZXQgaXNvID0gbmV3IE1hc29ucnkoZ3JpZCwge1xuXHRcdFx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2l0ZW0nLFxuXHRcdFx0XHRcdFx0Y29sdW1uV2lkdGg6ICcuZ2FsbGVyeV9fd2lkdGgnLFxuXHRcdFx0XHRcdFx0Z3V0dGVyOiAyNFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KS52YWx1ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0em9vbVByaW50KGlkKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0XG5cdFx0UHJpbnRBY3Rpb25zLnNldFByaW50Wm9vbShpZClcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxSYWYpXG5cdFx0XG5cdFx0dGhpcy50bEl0ZW1zT3V0ID0gbmV3IFRpbWVsaW5lTWF4KClcblx0XHR0aGlzLnRsSXRlbXNPdXQuc3RhZ2dlclRvKF8uc2h1ZmZsZShkb20oJy5nYWxsZXJ5X19pdGVtJykpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZU91dCB9LCAwLjAxKVxuXHRcdHRoaXMudGxJdGVtc091dC5hZGRDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3Byb2plY3QvJyt0aGF0LnByb3BzLmlkU2VjdGlvbjtcblx0XHR9LCAnLT0wLjInKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uUHJpbnRTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByaW50czogUHJpbnRTdG9yZS5nZXRBcnRpc3RQcmludHMoKVxuXHRcdH0sICgpID0+IHtcblxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMnKVxuXG5cdFx0aWYgKHRoaXMuX2NhbnZhcykge1xuXHRcdFx0dGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0VHdlZW5NYXguc2V0KGRvbSgnLmZyb250LWNvbnRhaW5lcicpLCB7b3BhY2l0eTogMH0pO1xuXHRcdFx0VHdlZW5NYXguc2V0KGRvbSgnLmhvbWUnKSwge29wYWNpdHk6IDB9KTtcblx0XHRcdFR3ZWVuTWF4LnNldChkb20oJy5jYXJ0JyksIHtvcGFjaXR5OiAwfSk7XG5cblx0XHRcdHRoaXMuc2hvd1BhZ2VCaW5kZWQgPSB0aGlzLnNob3dQYWdlLmJpbmQodGhpcylcblx0XHRcdHRoaXMuaW5pdENhbnZhcygpXG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb24oKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgaG9tZURhdGEgPSBBcHBTdG9yZS5ob21lQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLWhvbWUnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ZpZGVvIGhvbWVfX3ZpZGVvJz5cblx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9J3ZpZGVvX19maWxlJz5cblx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cblx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS53ZWJtJyB0eXBlPSd2aWRlby93ZWJtJyAvPlxuXHRcdFx0XHRcdDwvdmlkZW8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZSc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKGhvbWVEYXRhLnBhcmFncmFwaHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naG9tZV9fcGFyYWdyYXBoIHRleHQgdGV4dC0tYmlnJyBrZXk9e2luZGV4fT57aG9tZURhdGEucGFyYWdyYXBoc1tpbmRleF19PC9wPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0XHRcdFx0XHQvLyA8cCBjbGFzc05hbWU9J3RleHQgdGV4dC0tYmlnJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaG9tZURhdGEuY29udGVudH19IC8+XG5cdH1cblxuXHQvLyBzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdC8vIFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdC8vIFx0Ly8gdHJhbnNpdGlvbiBJblxuXHQvLyBcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgeTogd2luZG93LmlubmVySGVpZ2h0LCBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHQvLyBcdC8vIHRyYW5zaXRpb24gT3V0XG5cdC8vIFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0Ly8gXHQvLyByZXNldFxuXHQvLyBcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHQvLyBcdHRoaXMudGxPdXQucGF1c2UoMClcblx0Ly8gfVxuXG5cdGluaXRDYW52YXMoKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdGxldCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuXHRcdHRoaXMuX2NhbnZhcy53aWR0aCA9IHZ3O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB2aDtcblxuXHRcdC8vIGJhY2tncm91bmQgYmxhY2tcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4LnJlY3QoMCwgMCwgdncsIHZoKTtcblx0XHRjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjdHguZmlsbCgpO1xuXG5cdFx0Ly8gY3JvcCBsb2dvXG5cdFx0Y3R4LmZvbnQgPSBcIjQwMCA3MnB4ICdoYzdtb2Rlcm4nXCI7XG5cdFx0Y3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cdFx0Y3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3V0XCI7XG5cdFx0Ly8gY3R4LmZpbGxUZXh0KCdFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3JywgdncvMiwgdmgvMiAtIDE2KTtcblx0XHRjdHguZmlsbFRleHQoJ0VMTElPVFQgRVJXSVRUIEhBVkFOQSBDTFVCIDcnLCB2dy8yLCB2aC8yIC0gMTYpO1xuXHRcdGN0eC5mb250ID0gXCI0MDAgNzJweCAnU3RhbmxleSdcIjtcblx0XHRjdHguZmlsbFRleHQoJ0ZlbGxvd3NoaXAnLCB2dy8yLCB2aC8yICsgNjgpO1xuXHR9XG5cblx0aW5pdEFuaW1hdGlvbigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRcblx0XHR0aGlzLnRsRW50cnkgPSBuZXcgVGltZWxpbmVNYXgoe2RlbGF5OiA0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHR0aGF0Ll9jYW52YXMucmVtb3ZlKClcblx0XHR9fSk7XG5cdFx0dGhpcy50bEVudHJ5LnRvKHRoaXMuX2NhbnZhcywgMSwge29wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cdFx0dGhpcy50bEVudHJ5LnRvKGRvbSgnLmZyb250LWNvbnRhaW5lcicpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC42KVxuXHRcdHRoaXMudGxFbnRyeS50byhkb20oJy5ob21lJyksIDAuNCwge29wYWNpdHk6IDF9LCAwLjYpXG5cdFx0dGhpcy50bEVudHJ5LnRvKGRvbSgnLmNhcnQnKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNilcblx0XHQvLyBUd2Vlbk1heC50byh0aGlzLl9jYW52YXMsIDQsIHt4OiAtdncsIGVhc2U6IFBvd2VyMi5lYXNlT3V0LCBkZWxheTogNCwgb25Db21wbGV0ZTogdGhpcy5zaG93UGFnZUJpbmRlZH0pO1xuXHR9XG5cdFxuXHRzaG93UGFnZSgpIHtcblx0XHRUd2Vlbk1heC50byhkb20oJy5mcm9udC1jb250YWluZXInKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdFR3ZWVuTWF4LnRvKGRvbSgnLmhvbWUnKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdFR3ZWVuTWF4LnRvKGRvbSgnLmNhcnQnKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdHRoaXMuX2NhbnZhcy5yZW1vdmUoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXG5cdFx0aWYgKHdpbmRvd1cvMS44IDwgd2luZG93SCkgZG9tKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcnRyYWl0Jylcblx0XHRlbHNlIGRvbSgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3J0cmFpdCcpXG5cblx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKS5vZmZzZXRIZWlnaHQgPCAyMDApIHtcblx0XHRcdGRvbSgnLmhvbWUnKS5hZGRDbGFzcygnaG9tZS0tcmVsYXRpdmUnKVxuXHRcdH3CoGVsc2Uge1xuXHRcdFx0ZG9tKCcuaG9tZScpLnJlbW92ZUNsYXNzKCdob21lLS1yZWxhdGl2ZScpXG5cdFx0fVxuXHR9XG5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2xlZ2FsUGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHR7Y29udGVudC50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzaWRlXG5cdFx0bGV0IG5ld3NEYXRhID0gQXBwU3RvcmUubmV3c0NvbnRlbnQoKVxuXHRcdGxldCBuZXdzSXRlbXMgPSBuZXdzRGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0aWYgKGluZGV4ICUgMiA9PT0gMCkgeyByZXR1cm4gKFxuXHRcdFx0XHQ8YXJ0aWNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J25ld3NfX2l0ZW0gbmV3c19faXRlbS0tcmlnaHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19jb250ZW50Jz57aXRlbS5jb250ZW50fTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19kYXRlJz57aXRlbS5kYXRlfTwvZGl2PlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQpfSBlbHNlIHsgcmV0dXJuIChcblx0XHRcdFx0PGFydGljbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPSduZXdzX19pdGVtIG5ld3NfX2l0ZW0tLWxlZnQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19kYXRlJz57aXRlbS5kYXRlfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19jb250ZW50Jz57aXRlbS5jb250ZW50fTwvZGl2PlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQpfVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLW5ld3MnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSduZXdzJz57bmV3c0l0ZW1zfTwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGZvdW5kIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSc0MDRQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxwPkVycm9yIDQwNCDigJQgUGFnZSBub3QgZm91bmQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCBDYXJ0U3RvcmUgZnJvbSAnQ2FydFN0b3JlJ1xuaW1wb3J0IENhcnRBcGkgZnJvbSAnQ2FydEFwaSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0bGV0IGhhY2sgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQoZmFsc2UpXG5cdFx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0VmlzaWJsZShmYWxzZSlcblx0XHRcdGNsZWFyVGltZW91dChoYWNrKVxuXHRcdH0sIDApO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydFZpc2libGUodHJ1ZSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1wYXltZW50JyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50Jz5cblx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J3BheW1lbnRfX2Zvcm0gZm9ybSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPkNoZWNrb3V0PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J21haWwnPkVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J21haWwnIGlkPSdtYWlsJy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+U2hpcHBpbmcgYWRkcmVzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cgZm9ybV9fcm93LS1oYWxmJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdmaXJzdG5hbWUnPkZpcnN0IG5hbWUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2ZpcnN0bmFtZScvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2xhc3RuYW1lJz5MYXN0IG5hbWUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2xhc3RuYW1lJy8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0ncGhvbmUnPlRlbGVwaG9uZSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGVsJyBpZD0ncGhvbmUnLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdhZGRyZXNzJz5BZGRyZXNzICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0IGZvcm1fX2lucHV0LS1jb21wJyB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzc0JpcycvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J3ppcCc+WmlwL1Bvc3RhbCBjb2RlICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSd6aXAnLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdjaXR5Jz5DaXR5PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nY2l0eScvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2NvdW50cnknPkNvdW50cnkgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdjb3VudHJ5Jy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nYmlsbEFkZHJlc3MnLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nYmlsbEFkZHJlc3MnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+QmlsbCB0byB0aGUgc2FtZSBhZGRyZXNzPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+U2hpcHBpbmcgbWV0aG9kPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdzaGlwcGluZ01ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSd1cHNTdGFuZGFyZCcvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSd1cHNTdGFuZGFyZCc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5VUFMgU3RhbmRhcmQgLSBEZWxpdmVyeSB3aXRoaW4gMy01IGJ1c2luZXNzIGRheXMsIDEwIOKCrDwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdzaGlwcGluZ01ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSd1cHNFeHByZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3Vwc0V4cHJlc3MnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+VVBTIEV4cHJlc3MgLSBEZWxpdmVyeSB3aXRoaW4gMi0zIGJ1c2luZXNzIGRheXMsIDIwIOKCrDwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdzaGlwcGluZ01ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSdmcmVlU2hpcHBpbmcnIGRlZmF1bHRDaGVja2VkLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nZnJlZVNoaXBwaW5nJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkZyZWUgc2hpcHBpbmcgKFVQUyBzdGFuZGFyZCksIDAg4oKsPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3BheW1lbnRfX21ldGhvZCBmb3JtX190aXRsZSc+UGF5bWVudCBtZXRob2Q8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0nbWFlc3RybycgZGVmYXVsdENoZWNrZWQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J21hZXN0cm8nPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+PGltZyBzcmM9Jy4vYXNzZXRzL2ltYWdlcy9tYWVzdHJvLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ndmlzYScvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3Zpc2EnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+PGltZyBzcmM9Jy4vYXNzZXRzL2ltYWdlcy92aXNhLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ncGF5cGFsJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0ncGF5cGFsJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvcGF5cGFsLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0nYW1lcmljYW5FeHByZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nYW1lcmljYW5FeHByZXNzJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvYW1lcmljYW4tYmxhY2sucG5nJz48L2ltZz48L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX3RpdGxlJz5PcmRlciBzdW1tYXJ5PC9oMz5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ncGF5bWVudF9fcHJvZHVjdHMgY2FydF9fcHJvZHVjdHMnPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNhcnRJdGVtcykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByb2R1Y3QgPSB0aGF0LnN0YXRlLmNhcnRJdGVtc1tpbmRleF07XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdwYXltZW50X19wcm9kdWN0IGNhcnRfX3Byb2R1Y3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2FydGlzdCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fZGV0YWlscyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaXR5Jz57cHJvZHVjdC5jaXR5fTwvZGl2PiwgPGRpdiBjbGFzc05hbWU9J2NhcnRfX3llYXInPntwcm9kdWN0LnllYXJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19zZXJpYWwnPlNlcmlhbCA8c3BhbiBjbGFzc05hbWU9J2NhcnRfX251bWJlcic+e3Byb2R1Y3Quc2VyaWFsfS97cHJvZHVjdC5jb3BpZXN9PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaWNlJz57cHJvZHVjdC5wcmljZX08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpbnQnPjxpbWcgY2xhc3NOYW1lPSdjYXJ0X19pbWFnZScgc3JjPXsnL3N0YXRpYy9pbWcvJytwcm9kdWN0LmZpbGUrJ19taW4uanBnJ30+PC9pbWc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcmVtb3ZlIGJ1dHRvbiBidXR0b24tLWxlZnQnIG9uQ2xpY2s9e3RoYXQucmVtb3ZlSXRlbS5iaW5kKHRoYXQsIGluZGV4KX0+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPlJlbW92ZSBpdGVtPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fdG90YWwgY2FydF9fdG90YWwnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19zdWJ0b3RhbCBjYXJ0X19zdWJ0b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5TdWJ0b3RhbDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnN0YXRlLmNhcnRUb3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3R2YSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5JbmNsdWRlZCBUVkE6PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz57dGhpcy5zdGF0ZS5jYXJ0VG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2JpZ3RvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5HcmFuZCB0b3RhbDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz57dGhpcy5zdGF0ZS5jYXJ0VG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyB0eXBlPSdjaGVja2JveCcgaWQ9J25ld3NsZXR0ZXInLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nbmV3c2xldHRlcic+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5OZXdzPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nY29uZGl0aW9ucycvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdjb25kaXRpb25zJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkkgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyo8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9JycgY2xhc3NOYW1lPSdwYXltZW50X19wYXkgYnV0dG9uJyBvbkNsaWNrPXt0aGlzLnBheS5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+UHJvY2VlZCB0byBwYXltZW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiaHR0cHM6Ly9zZWN1cmUtdGVzdC5iZTJiaWxsLmNvbS9mcm9udC9mb3JtL3Byb2Nlc3NcIiBpZD1cIm15Zm9ybVwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiQU1PVU5UXCIgdmFsdWU9XCIxMDAwXCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIklERU5USUZJRVJcIiB2YWx1ZT1cIkNPTlZPWVwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJPUEVSQVRJT05UWVBFXCIgdmFsdWU9XCJwYXltZW50XCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIk9SREVSSURcIiB2YWx1ZT1cIm9yZGVyXzAwMDEyM1wiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJDTElFTlRJREVOVFwiIHZhbHVlPVwiY2xpZW50XzEyM1wiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJERVNDUklQVElPTlwiIHZhbHVlPVwiYXJ0XzEyMzQ1NlwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJWRVJTSU9OXCIgdmFsdWU9XCIyLjBcIiAvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSEFTSFwiIHZhbHVlPVwiNmI4N2JmYWU0NmViMjA0OTUwYzcwMDU4ZjIyN2Y3M2MxYTk1ODI3YzBiMGY5NWUxYWZhNGFkNDUyNWViNjdiNVwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUGF5IHdpdGggYmUyYmlsbFwiIC8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cGF5KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHQvLyA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiaHR0cHM6Ly9zZWN1cmUtdGVzdC5iZTJiaWxsLmNvbS9mcm9udC9mb3JtL3Byb2Nlc3NcIiBpZD1cIm15Zm9ybVwiPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiM0RTRUNVUkVcIiB2YWx1ZT1cInllc1wiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJDQVJERlVMTE5BTUVcIiB2YWx1ZT1cIkpvaG4gRG9lXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkNMSUVOVEVNQUlMXCIgdmFsdWU9XCJqb2huLmRvZUBlbWFpbC5jb21cIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSElERUNBUkRGVUxMTkFNRVwiIHZhbHVlPVwieWVzXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkhJREVDTElFTlRFTUFJTFwiIHZhbHVlPVwieWVzXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkFNT1VOVFwiIHZhbHVlPVwiMTAwMFwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJJREVOVElGSUVSXCIgdmFsdWU9XCJDT05WT1lcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiT1BFUkFUSU9OVFlQRVwiIHZhbHVlPVwicGF5bWVudFwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJPUkRFUklEXCIgdmFsdWU9XCJvcmRlcl8wMDAxMjNcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiQ0xJRU5USURFTlRcIiB2YWx1ZT1cImNsaWVudF8xMjNcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiREVTQ1JJUFRJT05cIiB2YWx1ZT1cImFydF8xMjM0NTZcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiVkVSU0lPTlwiIHZhbHVlPVwiMi4wXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkhBU0hcIiB2YWx1ZT1cIjZiODdiZmFlNDZlYjIwNDk1MGM3MDA1OGYyMjdmNzNjMWE5NTgyN2MwYjBmOTVlMWFmYTRhZDQ1MjVlYjY3YjVcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlBheSB3aXRoIGJlMmJpbGxcIiAvPlxuXHRcdFx0XHRcdC8vIDwvZm9ybT5cblxuXHRcdC8vIF8odGhpcy5zdGF0ZS5jYXJ0SXRlbXMpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Ly8gXHRQcmludEFwaS5vcmRlcihpbmRleCwgaXRlbS5zZXJpYWwpXG5cdFx0Ly8gfSkudmFsdWUoKTtcblxuXHRcdC8vIENhcnRBcGkucGF5KClcblx0XHRDYXJ0QXBpLmdlbmVyYXRlUGF5QnV0dG9uKClcblx0fVxuXG5cdHJlbW92ZUl0ZW0oaWQpIHtcblx0XHRDYXJ0QWN0aW9ucy5yZW1vdmVGcm9tQ2FydChpZClcblx0XHR0aGlzLnNldFN0YXRlKF9nZXRDYXJ0U3RhdGUoKSlcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBQcmludFN0b3JlIGZyb20gJ1ByaW50U3RvcmUnXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0cHJpbnQ6IHVuZGVmaW5lZCxcblx0XHRcdHNlbGVjdGVkU2VyaWFsOiB1bmRlZmluZWQsXG5cdFx0XHRsb2FkZWRQcmludDogdW5kZWZpbmVkLFxuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0XHR2YWxpZFNlcmlhbHM6IFtdXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fdG9nZ2xlTGlzdEJpbmRlZCA9IHRoaXMuX3RvZ2dsZUxpc3QuYmluZCh0aGlzKVxuXHRcdHRoaXMuX2FkZFRvQ2FydEJpbmRlZCA9IHRoaXMuX2FkZFRvQ2FydC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uU3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uQ2FydFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25DYXJ0U3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXG5cdFx0Ly8gdmFyc1xuXHRcdHRoaXMubG9hZGVkID0gZmFsc2Vcblx0XHR0aGlzLnZhbGlkU2VyaWFscyA9IFtdXG5cdFx0XG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0UHJpbnRBcGkuZ2V0T25lKHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHRcdENhcnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdHRoaXMuX2xvYWRJbWFnZSgpXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IGZpbGVcblx0XHRpZiAoIXRoaXMubG9hZGVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdHRoaXMuX2xvYWRJbWFnZSgpXG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5fdXBkYXRlU2VyaWFscygpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdFx0Q2FydFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUucHJpbnQpIHtcblx0XHRcdHRoaXMudmFsaWRTZXJpYWxzID0gdGhpcy5fZ2V0VmFsaWRTZXJpYWxzKClcblx0XHRcdHRoaXMuc2VsZWN0ZWRTZXJpYWwgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU2VyaWFsIHx8IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJpbnQnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUucHJpbnQpIHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnQnPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkZWRQcmludH1cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbmZvcyc+XG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJpbnRfX3RpdGxlIHByaW50X190aXRsZS0tbWFyZ2luJz57dGhhdC5zdGF0ZS5wcmludC50aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3ByaW50X19sb2NhdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3ByaW50X19jaXR5Jz57dGhhdC5zdGF0ZS5wcmludC5jaXR5fSwge3RoYXQuc3RhdGUucHJpbnQuY291bnRyeX0sPC9zcGFuPiB7dGhhdC5zdGF0ZS5wcmludC55ZWFyfVxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2FydGlzdCc+RWxsaW90dCBFcndpdHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fcHJpY2UgdGV4dCB0ZXh0LS1zbWFsbCc+e3RoYXQuc3RhdGUucHJpbnQucHJpY2V94oKsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwcmludF9fZGVzYyB0ZXh0IHRleHQtLXNtYWxsJz57dGhhdC5zdGF0ZS5wcmludC5kZXNjfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LnN0YXRlLnByaW50LnNlcmlhbHMubGVuZ3RoID4gMCkgeyByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbC1vcHQnPlNlcmlhbCBvcHRpb248L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fc2VsZWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwtLXNlbGVjdGVkJyBvbkNsaWNrPXt0aGlzLl90b2dnbGVMaXN0QmluZGVkfT57dGhhdC5zZWxlY3RlZFNlcmlhbH08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbC1saXN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhhdC52YWxpZFNlcmlhbHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBlbmFibGVkID0gdGhhdC52YWxpZFNlcmlhbHNbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgc2VyaWFsID0gcGFyc2VJbnQoaW5kZXgpKzFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGxldCBjbGFzc1NlbGVjdGVkID0gKHNlcmlhbCA9PT0gdGhhdC5zdGF0ZS5zZXJpYWwpID8gJ3ByaW50X19zZXJpYWwtLXNlbGVjdGVkJyA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBsZXQgY2xhc3NFbmFibGVkID0gKGVuYWJsZWQpID8gJ3ByaW50X19zZXJpYWwtLWVuYWJsZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoPGxpIGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbCcgb25DbGljaz17dGhhdC5fc2VsZWN0U2VyaWFsLmJpbmQodGhhdCwgc2VyaWFsKX0ga2V5PXtpbmRleH0+e3NlcmlhbH08L2xpPilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoPGxpIGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbCBwcmludF9fc2VyaWFsLS1kaXNhYmxlZCcga2V5PXtpbmRleH0+e3NlcmlhbH08L2xpPilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdwcmludF9fYnV5IHRleHQgdGV4dC0tc21hbGwgYnV0dG9uIGJ1dHRvbi0tcmV2ZXJzZScgb25DbGljaz17dGhhdC5fYWRkVG9DYXJ0QmluZGVkfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+QnV5IHByaW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX0gZWxzZSB7IHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5PdXQgb2Ygc3RvY2s8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9KSgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Ly8gX3VwZGF0ZVNlcmlhbHMoKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ3VwZGF0ZSB2YWxpZFNlcmlhbHMnKVxuXHQvLyBcdHRoaXMudmFsaWRTZXJpYWxzID0gW11cblx0Ly8gXHR0aGlzLmNhcnRTZXJpYWxzID0gXy5wbHVjayhfLmZpbHRlcih0aGlzLnN0YXRlLmNhcnRJdGVtcywgeyAnaWQnOiB0aGlzLnN0YXRlLnByaW50Ll9pZCB9KSwgJ3NlcmlhbCcpXG5cdC8vIFx0Xyh0aGlzLnN0YXRlLnByaW50LnNlcmlhbHMpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuXHQvLyBcdFx0aWYgKF8uaW5kZXhPZih0aGlzLmNhcnRTZXJpYWxzLCBpbmRleCsxKSA+IC0xKSB0aGlzLnZhbGlkU2VyaWFsc1tpbmRleF0gPSBmYWxzZVxuXHQvLyBcdFx0ZWxzZSB0aGlzLnZhbGlkU2VyaWFsc1tpbmRleF0gPSB2YWx1ZVxuXHQvLyBcdH0pLnZhbHVlKClcblxuXHQvLyBcdC8vIHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdC8vIFx0dmFsaWRTZXJpYWxzOiB0aGlzLnZhbGlkU2VyaWFsc1xuXHQvLyBcdC8vIH0sICgpID0+IHtcblx0Ly8gXHQvLyBcdHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHQvLyB9KVxuXG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHR2YWxpZFNlcmlhbHM6IHRoaXMudmFsaWRTZXJpYWxzLFxuXHQvLyBcdFx0c2VsZWN0ZWRTZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0X2dldFZhbGlkU2VyaWFscygpIHtcblx0XHR0aGlzLnZhbGlkU2VyaWFscyA9IFtdXG5cdFx0dGhpcy5jYXJ0U2VyaWFscyA9IF8ucGx1Y2soXy5maWx0ZXIodGhpcy5zdGF0ZS5jYXJ0SXRlbXMsIHsgJ2lkJzogdGhpcy5zdGF0ZS5wcmludC5faWQgfSksICdzZXJpYWwnKVxuXHRcdF8odGhpcy5zdGF0ZS5wcmludC5zZXJpYWxzKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdGlmIChfLmluZGV4T2YodGhpcy5jYXJ0U2VyaWFscywgaW5kZXgrMSkgPiAtMSkgdGhpcy52YWxpZFNlcmlhbHNbaW5kZXhdID0gZmFsc2Vcblx0XHRcdGVsc2UgdGhpcy52YWxpZFNlcmlhbHNbaW5kZXhdID0gdmFsdWVcblx0XHR9KS52YWx1ZSgpXG5cblx0XHRyZXR1cm4gdGhpcy52YWxpZFNlcmlhbHNcblx0fVxuXG5cdF9nZXRGaXJzdFNlcmlhbCgpIHtcblx0XHRyZXR1cm4gXy5pbmRleE9mKHRoaXMudmFsaWRTZXJpYWxzLCB0cnVlKSArIDFcblx0fVxuXG5cdF9zZWxlY3RTZXJpYWwoc2VyaWFsLCBlKSB7XG5cdFx0dGhpcy5fdG9nZ2xlTGlzdCgpXG5cdFx0ZG9tKCcuc2VyaWFsLS1lbmFibGVkJykucmVtb3ZlQ2xhc3MoJ3NlcmlhbC0tZW5hYmxlZCcpXG5cdFx0ZG9tKGUudGFyZ2V0KS5hZGRDbGFzcygnc2VyaWFsLS1lbmFibGVkJylcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlbGVjdGVkU2VyaWFsOiBzZXJpYWxcblx0XHR9KVxuXHR9XG5cblx0X2FkZFRvQ2FydChlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0bGV0IHByaW50SWQgPSB0aGlzLnN0YXRlLnByaW50Ll9pZDtcblx0XHRsZXQgdXBkYXRlID0ge1xuXHRcdFx0aWQ6IHRoaXMuc3RhdGUucHJpbnQuX2lkLFxuXHRcdFx0Y2l0eTogdGhpcy5zdGF0ZS5wcmludC5jaXR5LFxuXHRcdFx0eWVhcjogdGhpcy5zdGF0ZS5wcmludC55ZWFyLFxuXHRcdFx0cHJpY2U6IHRoaXMuc3RhdGUucHJpbnQucHJpY2UsXG5cdFx0XHRzZXJpYWw6IHRoaXMuc3RhdGUuc2VsZWN0ZWRTZXJpYWwsXG5cdFx0XHRmaWxlOiB0aGlzLnN0YXRlLnByaW50LmZpbGUsXG5cdFx0XHRjb3BpZXM6IHRoaXMuc3RhdGUucHJpbnQuY29waWVzXG5cdFx0fVxuXHRcdENhcnRBY3Rpb25zLmFkZFRvQ2FydChwcmludElkLCB1cGRhdGUpO1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRydWUpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdH0pXG5cdH1cblxuXHRfdG9nZ2xlTGlzdCgpIHtcblx0XHRkb20oJy5wcmludF9fc2VyaWFsLWxpc3QnKS50b2dnbGVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfbG9hZEltYWdlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXG5cdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0ZmlsZS5vbmxvYWQgPSB0aGF0Ll9vbkltYWdlTG9hZGVkLmJpbmQodGhhdClcblx0XHRmaWxlLnNyYyA9ICcvc3RhdGljL2ltZy8nK3RoaXMuc3RhdGUucHJpbnQuZmlsZSsnX21lZGl1bS5qcGcnXG5cdH1cblxuXHRfb25JbWFnZUxvYWRlZChlKSB7XG5cdFx0bGV0IHNpemVcblx0XHRsZXQgcGF0aCA9IGUuZXhwbGljaXRPcmlnaW5hbFRhcmdldCB8fCBlLnRhcmdldCB8fCBlLnBhdGhbMF0gXG5cdFx0aWYgKHBhdGguaGVpZ2h0ID49IHBhdGgud2lkdGgqMS4yKSBzaXplID0gJ3BvcnRyYWl0J1xuXHRcdGVsc2Ugc2l6ZSA9ICdsYW5kc2NhcGUnXG5cdFx0bGV0IGRpbSA9ICcyNy45IMOXIDM1LjYgY20nIC8vIGfDqXJlciBsYSBjb252ZXJzaW9uICgxMSDDlyAxNCBpbmNoZXMpXG5cblx0XHR0aGlzLnByaW50ID0gPGRpdiBjbGFzc05hbWU9J3ByaW50X19sZWZ0Jz48ZGl2IGNsYXNzTmFtZT17J3ByaW50X19pbWFnZSBwcmludF9faW1hZ2UtLScrc2l6ZX0+PGltZyBzcmM9eycvc3RhdGljL2ltZy8nK3RoaXMuc3RhdGUucHJpbnQuZmlsZSsnX21lZGl1bS5qcGcnfT48L2ltZz48ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3RlY2gnPjxwPlNpbHZlciBnZWxhdGluIHByaW50IG1lYXN1cmluZzwvcD48cD57ZGltfSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblxuXHRcdC8vIGlmIChwYXJhbXMucGF0aFswXS5oZWlnaHQgPj0gcGFyYW1zLnBhdGhbMF0ud2lkdGgqMS4yKSB7XG5cdFx0Ly8gXHR0aGlzLnByaW50ID0gPGRpdiBjbGFzc05hbWU9J3ByaW50X19sZWZ0Jz48ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2ltYWdlIHByaW50X19pbWFnZS0tcG9ydHJhaXQnPjxpbWcgc3JjPXsnL3N0YXRpYy9pbWcvJyt0aGlzLnN0YXRlLnByaW50LmZpbGUrJ19tZWRpdW0uanBnJ30+PC9pbWc+PGRpdiBjbGFzc05hbWU9J3ByaW50X190ZWNoJz48cD5TaWx2ZXIgZ2VsYXRpbiBwcmludCBtZWFzdXJpbmc8L3A+PHA+MjcuOSDDlyAzNS42IGNtICgxMSDDlyAxNCBpbmNoZXMpLCB1bmZyYW1lZC48L3A+PHA+UHJpbnRlZCB1bmRlciB0aGUgZGlyZWN0IHN1cGVydmlzaW9uIG9mIHRoZSBhcnRpc3QuPC9wPjxwPk9uZSBvZiBhIHNpZ25lZCwgbGltaXRlZCBlZGl0aW9uIG9mIHt0aGlzLnN0YXRlLnByaW50LmNvcGllc30uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PlxuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHR0aGlzLnByaW50ID0gPGRpdiBjbGFzc05hbWU9J3ByaW50X19sZWZ0Jz48ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2ltYWdlIHByaW50X19pbWFnZS0tbGFuZHNjYXBlJz48aW1nIHNyYz17Jy9zdGF0aWMvaW1nLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+U2lsdmVyIGdlbGF0aW4gcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQvLyB9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHQnbG9hZGVkUHJpbnQnOiB0aGlzLnByaW50XG5cdFx0fSk7XG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByaW50OiBQcmludFN0b3JlLmdldE9uZSgpLFxuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0XHQvLyBzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0X29uQ2FydFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKClcblx0XHR9KVxuXHR9XG5cblx0Ly8gX29uU3RvcmVDaGFuZ2UoKSB7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKSxcblx0Ly8gXHRcdC8vIGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpXG5cdC8vIFx0fSwgKCkgPT4ge1xuXHQvLyBcdFx0dGhpcy5fdXBkYXRlU2VyaWFscygpXG5cdC8vIFx0XHR0aGlzLl9sb2FkSW1hZ2UoKVxuXHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRcdHNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHQvLyBcdFx0fSlcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0Ly8gX29uQ2FydFN0b3JlQ2hhbmdlKCkge1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKClcblx0Ly8gXHR9LCAoKSA9PiB7XG5cdC8vIFx0XHR0aGlzLl91cGRhdGVTZXJpYWxzKClcblx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0XHRzZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHRcdH0pXG5cdC8vIFx0fSlcblx0Ly8gfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3kgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3ByaXZhY3lQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFByaW50Q29uc3RhbnRzIGZyb20gJ1ByaW50Q29uc3RhbnRzJ1xuaW1wb3J0IEFydGlzdFN0b3JlIGZyb20gJ0FydGlzdFN0b3JlJ1xuaW1wb3J0IEFydGlzdEFwaSBmcm9tICdBcnRpc3RBcGknXG5pbXBvcnQgVHdlZW5tYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJ3Njcm9sbFRvJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0YXJ0aXN0OiB1bmRlZmluZWQsXG5cdFx0XHRzbGlkZXNob3c6IHt9LFxuXHRcdFx0cHJpbnQ6IHt9LFxuXHRcdFx0cHJpbnRzOiB7fSxcblx0XHRcdGN1cnJlbnQ6IDBcblx0XHR9XG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl9zaG93U2xpZGVzaG93QmluZGVkID0gdGhpcy5fc2hvd1NsaWRlc2hvdy5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fdG9nZ2xlWm9vbUJpbmRlZCA9IHRoaXMuX3RvZ2dsZVpvb20uYmluZCh0aGlzKVxuXHRcdHRoaXMuX3RvZ2dsZVN0b3J5QmluZGVkID0gdGhpcy5fdG9nZ2xlU3RvcnkuYmluZCh0aGlzKVxuXHRcdHRoaXMuX2JhY2tUb0dhbGxlcnlCaW5kZWQgPSB0aGlzLl9iYWNrVG9HYWxsZXJ5LmJpbmQodGhpcylcblx0XHR0aGlzLl9wcmV2QmluZGVkID0gdGhpcy5fcHJldi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fbmV4dEJpbmRlZCA9IHRoaXMuX25leHQuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vblByaW50U3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuX3JhZkJpbmRlZCA9IHRoaXMuX3JhZi5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0Ly8gY29uc3Rcblx0XHR0aGlzLk9QQUNJVFlfTUFSR0UgPSAzMFxuXHRcdHRoaXMuT1BBQ0lUWV9EVVJBVElPTiA9IDMwMFxuXHRcdFxuXHRcdC8vIHZhcnNcblx0XHR0aGlzLnpvb20gPSBmYWxzZVxuXHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzID0ge31cblx0XHR0aGlzLmFjdGlvbiA9ICdpbml0J1xuXHRcdHRoaXMuY3VycmVudEluZGV4ID0gLTFcblx0XHR0aGlzLnNjcm9sbEluZGV4ID0gMFxuXHRcdHRoaXMuc2Nyb2xsT2sgPSBmYWxzZVxuXHRcdHRoaXMudHJhbnNmb3JtID0gVXRpbHMuR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IGhhY2sgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoYXQuem9vbSA9IFByaW50U3RvcmUuZ2V0Wm9vbSgpXG5cdFx0XHRpZiAodGhhdC56b29tICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y3VycmVudDogdGhhdC56b29tXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHQvLyBcdFByaW50QXBpLmdldFNsaWRlc2hvdyh0aGlzLnByb3BzLmlkU2VjdGlvbiwgdGhhdC56b29tKVxuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0UHJpbnRBcGkuZ2V0U2xpZGVzaG93KHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRcdC8vIH1cblx0XHR9LCAxMClcblxuXHRcdFByaW50QXBpLmdldEJ5QXJ0aXN0KHRoaXMucHJvcHMuaWRTZWN0aW9uKVxuXHRcdEFydGlzdEFwaS5nZXRCeVNsdWcodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdEFydGlzdFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHQvLyBQcmludFN0b3JlLm9uKFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVywgdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKVx0XG5cdFx0Ly8gUHJpbnRTdG9yZS5vbihQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5ULCB0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpXHRcblxuXHRcdHRoaXMuX2ludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJylcblx0XHR0aGlzLl9yYWYoKVxuXG5cdFx0dGhpcy5fcHJvamVjdCA9IGRvbSgnLnByb2plY3QnKVxuXHRcdHRoaXMuX3Byb2plY3RTbGlkZXNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fc2xpZGVzaG93Jylcblx0XHR0aGlzLl9wcm9qZWN0UHJpbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3ByaW50cycpXG5cdFx0dGhpcy5faW50cm9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvIC5wcm9qZWN0X19jb250ZW50Jylcblx0fVxuXG5cdC8vIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHQvLyBcdGNvbnNvbGUubG9nKHByZXZTdGF0ZSlcdFxuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG5cdC8vIH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcnRpc3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnByaW50c1t0aGlzLnN0YXRlLmN1cnJlbnRdXG5cdFx0XG5cdFx0bGV0IG5hbWUsIGJpbywgdGl0bGUsIGNpdHksIGNvdW50cnksIHllYXIsIHN0b3J5LCBmb3JTYWxlLCB1cmwsIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MgPSBbXVxuXHRcdFxuXHRcdGlmICh0aGlzLnN0YXRlLmFydGlzdCkge1xuXHRcdFx0bmFtZSA9IHRoaXMuc3RhdGUuYXJ0aXN0Lm5hbWVcblx0XHRcdGJpbyA9IHRoaXMuc3RhdGUuYXJ0aXN0LmJpb1xuXHRcdFx0cHJvamVjdFRpdGxlID0gdGhpcy5zdGF0ZS5hcnRpc3QucHJvamVjdC50aXRsZVxuXHRcdFx0cHJvamVjdERlc2MgPSB0aGlzLnN0YXRlLmFydGlzdC5wcm9qZWN0LmRlc2Ncblx0XHR9XG5cblx0XHRpZiAoY3VycmVudCkge1xuXHRcdFx0dGl0bGUgPSBjdXJyZW50LnRpdGxlXG5cdFx0XHRjaXR5ID0gY3VycmVudC5jaXR5XG5cdFx0XHRjb3VudHJ5ID0gY3VycmVudC5jb3VudHJ5XG5cdFx0XHR5ZWFyID0gY3VycmVudC55ZWFyXG5cdFx0XHRzdG9yeSA9IGN1cnJlbnQuZGVzY1xuXHRcdFx0Zm9yU2FsZSA9IGN1cnJlbnQuZm9yU2FsZVxuXHRcdFx0dXJsID0gJyMvc2hvcC8nICsgY3VycmVudC5faWRcblx0XHRcdGlmICghc3RvcnkpIHRoaXMuX2hpZGVTdG9yeSgpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLXByb2plY3QnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51IHByb2plY3RfX2NvbnRhY3QnPjxhIGhyZWY9eycjL3Byb2plY3QvJyt0aGlzLnByb3BzLmlkU2VjdGlvbisnL2NvbnRhY3Qtc2hlZXQnfSBjbGFzc05hbWU9J2J1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkNvbnRhY3Qgc2hlZXQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSBwcm9qZWN0X19iYWNrJz48YSBocmVmPScjJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17dGhpcy5fYmFja1RvR2FsbGVyeUJpbmRlZH0+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkJhY2sgdG8gZ2FsbGVyeTwvc3Bhbj48L2E+PC9kaXY+XG5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0Jz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9faW50cm8nPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0X19hcnRpc3QnPntuYW1lfTwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJvamVjdF9fZGVzYyB0ZXh0IHRleHQtLW1lZGl1bSc+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHByb2plY3REZXNjKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Byb2plY3RfX3BhcmFncmFwaCcga2V5PXtpbmRleH0+e3Byb2plY3REZXNjW2luZGV4XX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2Rpc2NvdmVyJyBvbkNsaWNrPXt0aGlzLl9zaG93U2xpZGVzaG93QmluZGVkfT48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2xpZGVzaG93Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19jb250ZW50Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3ByaW50cyc+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUucHJpbnRzKS5tYXAoKGlkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZpbGUgPSB0aGlzLnN0YXRlLnByaW50c1tpZF0uZmlsZSArICdfYmlnLmpwZydcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzdGF0dXMgPSAoaW5kZXggPT09IHRoaXMuc3RhdGUuY3VycmVudCkgPyAncHJvamVjdF9fcHJpbnQtLWN1cnJlbnQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsncHJvamVjdF9fcHJpbnQgJytzdGF0dXN9IG9uQ2xpY2s9e3RoYXQuX3RvZ2dsZVpvb21CaW5kZWR9IGtleT17aWR9PjxpbWcgY2xhc3NOYW1lPSdwcm9qZWN0X19pbWFnZScgc3JjPXsnL3N0YXRpYy9pbWcvJytmaWxlfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc3RvcnkgdGV4dCB0ZXh0LS1iaWcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3N0b3J5fTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fbmF2Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19wcmV2JyBvbkNsaWNrPXt0aGlzLl9wcmV2QmluZGVkfT48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX25leHQnIG9uQ2xpY2s9e3RoaXMuX25leHRCaW5kZWR9PjxkaXYgY2xhc3NOYW1lPSdhcnJvdyc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fZm9vdGVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NlY3Rpb24nPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0ncHJvamVjdF9fc2hhcmUgcHJvamVjdF9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLWxlZnQgYnV0dG9uLS1yZXZlcnNlJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+U2hhcmU8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NlY3Rpb24gcHJvamVjdF9faW5mb3MnPlxuXHRcdFx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvclNhbGUpIHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJpbnRfX3RpdGxlIHByaW50X19pbmZvLS1zbWFsbCc+e3RpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uIHByaW50X19pbmZvLS1zbWFsbCc+e2NpdHl9LCB7Y291bnRyeX0sIHt5ZWFyfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZm9yU2FsZSkgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fYnV0dG9uIHByb2plY3RfX3JldmVhbCBidXR0b24gYnV0dG9uLS1sZWZ0IGJ1dHRvbi0tcmV2ZXJzZScgb25DbGljaz17dGhpcy5fdG9nZ2xlU3RvcnlCaW5kZWR9PjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5UaGUgc3Rvcnk8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17dXJsfSBjbGFzc05hbWU9J3Byb2plY3RfX2J1dHRvbiBwcm9qZWN0X19idXkgYnV0dG9uIGJ1dHRvbi0tcmlnaHQgYnV0dG9uLS1yZXZlcnNlJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+QnV5IHByaW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gPGgzIGNsYXNzTmFtZT0ncHJpbnRfX2FydGlzdCBwcmludF9faW5mby0tc21hbGwnPntuYW1lfTwvaDM+XG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0Ly8gbGV0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRcdHRoaXMuaGFuZGxlU2Nyb2xsKClcblx0XHR9XG5cblx0XHRzY3JvbGwodGhpcy5fcmFmQmluZGVkKTtcblx0fVxuXG5cdGhhbmRsZVNjcm9sbCgpIHtcblxuXHRcdHRoaXMub3BhY2l0eU1hcmdlID0gd2luZG93LmlubmVySGVpZ2h0LzJcblx0XHR0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuX2ludHJvKVxuXHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCArIHRoaXMubGltaXRPZmZzZXQuaGVpZ2h0IC8gMS41XG5cdFx0dGhpcy5pbnRyb09wYWNpdHkgPSAxIC0gKHRoaXMubGltaXRUb3AgLSB0aGlzLm9wYWNpdHlNYXJnZSkgLyAoLXRoaXMub3BhY2l0eU1hcmdlKVxuXHRcdHRoaXMuX2ludHJvLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmludHJvT3BhY2l0eVxuXG5cblxuXHRcdGlmICh0aGlzLl9pbnRyb0NvbnRlbnQpIHtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLl9pbnRyb0NvbnRlbnQub2Zmc2V0SGVpZ2h0IDwgMjAwKSB7XG5cdFx0XHRcdHRoaXMuX3Byb2plY3QuYWRkQ2xhc3MoJ3Byb2plY3QtLXJlbGF0aXZlJylcblx0XHRcdFx0dGhpcy5fcHJvamVjdFNsaWRlc2hvdy5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsIDBweCkgdHJhbnNsYXRlWigwcHgpJylcblx0XHRcdH3CoGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1kgPSAtIHdpbmRvdy5pbm5lckhlaWdodC8yICsgdGhpcy5fcHJvamVjdFByaW50cy5vZmZzZXRIZWlnaHQvMiAtIDQwXG5cdFx0XHRcdHRoaXMuX3Byb2plY3RTbGlkZXNob3cuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyB0aGlzLnNsaWRlc2hvd1kgKydweCkgdHJhbnNsYXRlWigwcHgpJylcblx0XHRcdFx0dGhpcy5fcHJvamVjdC5yZW1vdmVDbGFzcygncHJvamVjdC0tcmVsYXRpdmUnKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHRoaXMubGltaXRPZmZzZXQgPSBvZmZzZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJykpXG5cdFx0Ly8gdGhpcy5PUEFDSVRZX01BUkdFID0gdGhpcy5saW1pdE9mZnNldC5oZWlnaHRcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0T2Zmc2V0KVxuXHRcdC8vIHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdC8vIHRoaXMuZWxPcGFjaXR5ID0gVXRpbHMuSW50ZXJ2YWwodGhpcy5saW1pdFRvcCAvICgtdGhpcy5PUEFDSVRZX0RVUkFUSU9OKSwgMCwgMSlcblx0XHQvLyAvLyB0aGlzLmVsWSA9ICgxLXRoaXMuZWxPcGFjaXR5KSAqIDUwXG5cdFx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJykuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0Ly8gZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyB0aGlzLmVsWSArJ3B4KSB0cmFuc2xhdGVaKDBweCknKVxuXHR9XG5cblx0X3Nob3dTbGlkZXNob3coKSB7XG5cdFx0dGhpcy5zbGlkZXNob3dPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fc2xpZGVzaG93Jykub2Zmc2V0VG9wXG5cdFx0VHdlZW5NYXgudG8od2luZG93LCAxLjIsIHtzY3JvbGxUbzp7eTogdGhpcy5zbGlkZXNob3dPZmZzZXRUb3B9LCBlYXNlOkV4cG8uZWFzZU91dH0pXG5cdH1cblx0XG5cdGluaXRUaW1lbGluZXMoKSB7XG5cdH1cblxuXHRfdG9nZ2xlWm9vbSgpIHtcblx0XHRpZiAodGhpcy56b29tKSB0aGlzLl96b29tT3V0KClcblx0XHRlbHNlIHRoaXMuX3pvb21JbigpXG5cdH1cblxuXHRfem9vbUluKCkge1xuXHRcdHRoaXMudGxab29tSW4gPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDogdHJ1ZX0pXG5cdFx0dGhpcy50bFpvb21Jbi5zdGFnZ2VyVG8oW1xuXHRcdFx0ZG9tKCcuZnJvbnQtY29udGFpbmVyJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19zaGFyZScpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9faW5mb3MnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3JldmVhbCcpLFxuXHRcdFx0ZG9tKCcuY2FydCcpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fY29udGFjdCcpXG5cdFx0XSwgMC40LCB7b3BhY2l0eTogMH0sIDApXG5cdFx0dGhpcy50bFpvb21Jbi50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtzY2FsZTogMS4zNSwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tSW4udG8oZG9tKCcucHJvamVjdF9fcHJldicpLCAwLjQsIHt4OiAtODAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX25leHQnKSwgMC40LCB7eDogODAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLmFkZENhbGxiYWNrKCgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jb250YWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2JhY2snKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdH0sIDAuNClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX2JhY2snKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNClcblx0XHRcblx0XHR0aGlzLnRsWm9vbUluLnBsYXkoKVxuXG5cdFx0dGhpcy56b29tID0gIXRoaXMuem9vbVxuXHR9XG5cblx0X3pvb21PdXQoKSB7XG5cdFx0dGhpcy50bFpvb21PdXQgPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDogdHJ1ZX0pXG5cdFx0dGhpcy50bFpvb21PdXQuc3RhZ2dlclRvKFtcblx0XHRcdGRvbSgnLmZyb250LWNvbnRhaW5lcicpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fc2hhcmUnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX2luZm9zJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19yZXZlYWwnKSxcblx0XHRcdGRvbSgnLmNhcnQnKVxuXHRcdF0sIDAuNCwge29wYWNpdHk6IDF9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX2JhY2snKSwgMC40LCB7b3BhY2l0eTogMH0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQuYWRkQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2NvbnRhY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2JhY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0fSwgMC40KVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX2NvbnRhY3QnKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNClcblx0XHR0aGlzLnRsWm9vbU91dC50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtzY2FsZTogMSwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX3ByZXYnKSwgMC40LCB7eDogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX25leHQnKSwgMC40LCB7eDogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXG5cdFx0dGhpcy50bFpvb21PdXQucGxheSgpXG5cblx0XHR0aGlzLnpvb20gPSAhdGhpcy56b29tXG5cdH1cblxuXHRfYmFja1RvR2FsbGVyeShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dGhpcy5fem9vbU91dCgpXG5cdH1cblxuXHRfdG9nZ2xlU3RvcnkoKSB7XG5cdFx0ZG9tKCcucHJvamVjdF9fc3RvcnknKS50b2dnbGVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfaGlkZVN0b3J5KCkge1xuXHRcdGRvbSgnLnByb2plY3RfX3N0b3J5JykucmVtb3ZlQ2xhc3MoJ2VuYWJsZWQnKVxuXHR9XG5cblx0X3ByZXYoKSB7XG5cdFx0Ly8gdGhpcy5faGlkZVN0b3J5KClcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnQ6ICh0aGlzLnN0YXRlLmN1cnJlbnQtMSA8IDApID8gdGhpcy5uUHJpbnRzLTEgOiB0aGlzLnN0YXRlLmN1cnJlbnQtMVxuXHRcdH0pXG5cdH1cblxuXHRfbmV4dCgpIHtcblx0XHQvLyB0aGlzLl9oaWRlU3RvcnkoKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogKHRoaXMuc3RhdGUuY3VycmVudCsxID49IHRoaXMublByaW50cykgPyAwIDogdGhpcy5zdGF0ZS5jdXJyZW50KzFcblx0XHR9KVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uQXJ0aXN0U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhcnRpc3Q6IEFydGlzdFN0b3JlLmdldE9uZSgpIC8vIFRPRE86IGFmZmljaGVyIGwnaW1hZ2Ugc3VpdmFudGUgdW5pcXVlbWVudCBxdWFuZCBlbGxlIGVzdCBjaGFyZ8OpZVxuXHRcdH0pXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJpbnRzOiBQcmludFN0b3JlLmdldEFydGlzdFByaW50cygpXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5uUHJpbnRzID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFydGlzdFN0b3JlIGZyb20gJ0FydGlzdFN0b3JlJ1xuaW1wb3J0IEFydGlzdEFwaSBmcm9tICdBcnRpc3RBcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0YXJ0aXN0czoge31cblx0XHR9XG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0QXJ0aXN0QXBpLmdldEFsbCgpO1xuXHRcdEFydGlzdFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXJ0aXN0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0Ly8gbGV0IGFydGlzdHNEYXRhID0gQXBwU3RvcmUuYXJ0aXN0c0NvbnRlbnQoKVxuXHRcdC8vIGxldCBhcnRpc3RzSXRlbXMgPSBbXVxuXHRcdC8vIGZvciAobGV0IGFydGlzdCBpbiBhcnRpc3RzRGF0YSkge1xuXHRcdC8vIFx0YXJ0aXN0c0l0ZW1zLnB1c2goPGxpIGtleT17YXJ0aXN0fT48YSBocmVmPXsnIy9wcm9qZWN0LycrYXJ0aXN0fT57YXJ0aXN0c0RhdGFbYXJ0aXN0XS5uYW1lfTwvYT48L2xpPilcblx0XHQvLyB9XG5cdFx0bGV0IGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLXByb2plY3RzJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0c19fY29udGVudCc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJvamVjdHNfX3RpdGxlIHRleHQgdGV4dC0tdGl0bGUnPkZlbGxvd3M6PC9oMj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5hcnRpc3RzKS5tYXAoZnVuY3Rpb24oaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRsZXQgYXJ0aXN0ID0gdGhhdC5zdGF0ZS5hcnRpc3RzW2luZGV4XTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdwcm9qZWN0c19faXRlbSc+PGEgaHJlZj17JyMvcHJvamVjdC8nK2FydGlzdC5zbHVnfSBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLWJpZyc+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPnthcnRpc3QubmFtZX08L3NwYW4+PC9hPjwvbGk+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uU3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhcnRpc3RzOiBBcnRpc3RTdG9yZS5nZXRBbGwoKVxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnc2Nyb2xsVG8nXG5sZXQgc2Nyb2xsID0gVXRpbHMuU2Nyb2xsKClcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbmxldCBNYXNvbnJ5ID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIFBhZ2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludHM6IHt9XG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fc2hvd1ByaW50c0JpbmRlZCA9IHRoaXMuX3Nob3dQcmludHMuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcmFmQmluZGVkID0gdGhpcy5fcmFmLmJpbmQodGhpcylcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQgPSAwXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRQcmludEFwaS5nZXRGb3JTYWxlKCk7XG5cdFx0UHJpbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBzaG9wRGF0YSA9IEFwcFN0b3JlLnNob3BDb250ZW50KClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1zaG9wJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19pbnRybyc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nc2hvcF9fdGl0bGUnPntzaG9wRGF0YS5pbnRyby50aXRsZX08L2gyPlxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyhzaG9wRGF0YS5pbnRyby5wYXJhZ3JhcGhzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Nob3BfX3BhcmFncmFwaCB0ZXh0IHRleHQtLWJpZycga2V5PXtpbmRleH0+e3Nob3BEYXRhLmludHJvLnBhcmFncmFwaHNbaW5kZXhdfTwvcD5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXIgc2hvcF9fZGlzY292ZXInIG9uQ2xpY2s9e3RoaXMuX3Nob3dQcmludHNCaW5kZWR9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkRpc2NvdmVyIEVsbGlvdHQgRXJ3aXR0J3MgcHJpbnRzPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rpc2NvdmVyX19hcnJvdyc+PGRpdiBjbGFzc05hbWU9J2Fycm93IGFycm93LS1ibGFjayc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcCc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUucHJpbnRzKS5tYXAoZnVuY3Rpb24oaWQsIGluZGV4KXtcblx0XHRcdFx0XHRcdGxldCBwcmludCA9IHRoYXQuc3RhdGUucHJpbnRzW2lkXVxuXHRcdFx0XHRcdFx0Ly8gbGV0IGZpbGUgPSBwcmludC5maWxlICsgJ19taW4uanBnJ1xuXHRcdFx0XHRcdFx0bGV0IGZpbGUgPSBwcmludC5maWxlICsgJ19tZWRpdW0uanBnJ1xuXHRcdFx0XHRcdFx0Ly8gbGV0IHNwZWVkID0gKGluZGV4ICUgMiA9PT0gMCkgPyAnZmFzdCcgOiAnc2xvdydcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19wcmludCcga2V5PXtpZH0+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17JyMvc2hvcC8nK2lkfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXsnL3N0YXRpYy9pbWcvJytmaWxlfT48L2ltZz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19ob3Zlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19kZXRhaWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGl0bGUnPntwcmludC50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uJz48ZGl2IGNsYXNzTmFtZT0nc2hvcF9fY2l0eSc+e3ByaW50LmNpdHl9LCB7cHJpbnQuY291bnRyeX0sPC9kaXY+IDxkaXYgY2xhc3NOYW1lPSdzaG9wX195ZWFyJz57cHJpbnQueWVhcn08L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fcHJpY2UnPntwcmludC5wcmljZX3igqw8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fZGV0YWlscyBidXR0b24gYnV0dG9uLS1yZXZlcnNlJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+TW9yZSBkZXRhaWxzPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXMsIGZpbGVcblx0XHR0aGlzLm1heCA9IF8uc2l6ZSh0aGlzLnN0YXRlLnByaW50cylcblx0XHRpZiAodGhpcy5tYXggPiAwICYmICF0aGlzLmxvYWRlZCkge1xuXHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlXG5cdFx0XHRfKHRoaXMuc3RhdGUucHJpbnRzKS5mb3JFYWNoKChwcmludCwgaW5kZXgpID0+IHtcblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdClcblx0XHRcdFx0ZmlsZS5zcmMgPSAnL3N0YXRpYy9pbWcvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JbWFnZUxvYWRlZChlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrK1xuXHRcdHRoaXMuZ3JpZC5sYXlvdXQoKSAvLyB1cGRhdGUgZ3JpZFxuXHR9XG5cblx0X3JhZigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGxJbmRleCAlIDMpIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXgrK1xuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsT2spIHtcblx0XHRcdC8vIGxldCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0XHR0aGlzLmhhbmRsZVNjcm9sbCgpXG5cdFx0fVxuXG5cdFx0c2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0bGV0IHRvcCA9IFV0aWxzLkdldFNjcm9sbFRvcCgpXG5cblx0XHRfKGRvbSgnLnNob3BfX3ByaW50JykpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvT2Zmc2V0ID0gb2Zmc2V0KGVsKTtcblx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHRcdHRoaXMudG9wUG9zaXRpb24gPSBlbC5vZmZzZXRUb3Bcblx0XHRcdHRoaXMueVBvc2l0aW9uID0gKHRoaXMuc2Nyb2xsVG9wIC0gdGhpcy50b3BQb3NpdGlvbikgKiAwLjI7XG5cblx0XHRcdGlmIChkb20oZWwpLmhhc0NsYXNzKCdqcy1mYXN0JykpIHtcblx0XHRcdFx0ZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyAoLXRoaXMueVBvc2l0aW9uKSArJ3B4KScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZG9tKGVsKS5oYXNDbGFzcygnanMtc2xvdycpKSB7XG5cdFx0XHRcdGVsLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgdGhpcy55UG9zaXRpb24gKydweCknKTtcblx0XHRcdH1cblx0XHR9KS52YWx1ZSgpO1xuXHR9XG5cblx0X3Nob3dQcmludHMoKSB7XG5cdFx0dGhpcy5zbGlkZXNob3dPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLm9mZnNldFRvcFxuXHRcdFR3ZWVuTWF4LnRvKHdpbmRvdywgMS4yLCB7c2Nyb2xsVG86e3k6IHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wIC0gNDB9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSlcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludHM6IFByaW50U3RvcmUuZ2V0Rm9yU2FsZSgpXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0bGV0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpXG5cdFx0XHRpZiAoZ3JpZCkge1xuXHRcdFx0XHR0aGlzLmdyaWQgPSBuZXcgTWFzb25yeShncmlkLCB7XG5cdFx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLnNob3BfX3ByaW50Jyxcblx0XHRcdFx0XHRjb2x1bW5XaWR0aDogJy5zaG9wX19wcmludCcsXG5cdFx0XHRcdFx0Z3V0dGVyOiA1MFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG59XG4iLCJsZXQgY29uZmlnID0ge1xuXHQnc2l0ZXVybCc6ICdodHRwOi8vaGF2YW5hLmhpOS5mcidcblx0Ly8gJ3NpdGV1cmwnOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWc7IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXG5cdE1FRElBX0dMT0JBTF9XOiAxOTIwLFxuXHRNRURJQV9HTE9CQUxfSDogMTA4MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0UkVDRUlWRV9BTExfQVJUSVNUUzogJ1JFQ0VJVkVfQUxMX0FSVElTVFMnLFxuXHRSRUNFSVZFX0FSVElTVDogJ1JFQ0VJVkVfQVJUSVNUJyxcblx0RVJST1I6ICdFUlJPUicsXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRDQVJUX0FERDogJ0NBUlRfQUREJyxcdFx0XHQvLyBBZGRzIGl0ZW0gdG8gY2FydFxuXHRDQVJUX1JFTU9WRTogJ0NBUlRfUkVNT1ZFJyxcdFx0Ly8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5cdENBUlRfVklTSUJMRTogJ0NBUlRfVklTSUJMRScsXHQvLyBTaG93cyBvciBoaWRlcyB0aGUgY2FydFxuXHRDQVJUX0VOQUJMRUQ6ICdDQVJUX0VOQUJMRUQnLFx0Ly8gT3BlbiBvciBjbG9zZSB0aGUgY2FydFxuXHRTRVRfU0VMRUNURUQ6ICdTRVRfU0VMRUNURUQnLFx0Ly8gU2VsZWN0cyBhIHByb2R1Y3Qgb3B0aW9uXG5cdFJFQ0VJVkVfREFUQTogJ1JFQ0VJVkVfREFUQSdcdC8vIFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0UkVDRUlWRV9BTExfUFJJTlRTOiAnUkVDRUlWRV9BTExfUFJJTlRTJyxcblx0UkVDRUlWRV9QUklOVFNfRk9SU0FMRTogJ1JFQ0VJVkVfUFJJTlRTX0ZPUlNBTEUnLFxuXHRSRUNFSVZFX1BSSU5UU19TTElERVNIT1c6ICdSRUNFSVZFX1BSSU5UU19TTElERVNIT1cnLFxuXHRSRUNFSVZFX0FSVElTVF9QUklOVFM6ICdSRUNFSVZFX0FSVElTVF9QUklOVFMnLFxuXHRSRUNFSVZFX1BSSU5UOiAnUkVDRUlWRV9QUklOVCcsXG5cdEVSUk9SOiAnRVJST1InLFxuXHRaT09NOiAnWk9PTScsXG59IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG52YXIgQXBwRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlVmlld0FjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCh7XG5cdFx0XHRzb3VyY2U6ICdWSUVXX0FDVElPTicsXG5cdFx0XHRhY3Rpb246IGFjdGlvblxuXHRcdH0pO1xuXHR9LFxuXHRoYW5kbGVTZXJ2ZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnU0VSVkVSX0FDVElPTicsXG5cdFx0XHRhY3Rpb246IGFjdGlvblxuXHRcdH0pO1xuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGF0Y2hlciIsImltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG4gICAgXHRcbmNsYXNzIEdsb2JhbEV2ZW50cyB7XG5cdGluaXQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuXHRcdHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdEFwcEFjdGlvbnMud2luZG93UmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdFx0fSwgMzAwKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEV2ZW50c1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBoYXNoZXIgZnJvbSAnaGFzaGVyJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBjcm9zc3JvYWRzIGZyb20gJ2Nyb3Nzcm9hZHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFJvdXRlciB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5yb3V0aW5nID0gZGF0YS5yb3V0ZXMucm91dGluZ1xuXHRcdHRoaXMuZGVmYXVsdFJvdXRlID0gdGhpcy5yb3V0aW5nWycvJ11cblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRoYXNoZXIubmV3SGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5vbGRIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLnByZXBlbmRIYXNoID0gJyEnXG5cdFx0aGFzaGVyLmluaXRpYWxpemVkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHRoYXNoZXIuY2hhbmdlZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5fc2V0dXBDcm9zc3JvYWRzKClcblx0fVxuXHRiZWdpblJvdXRpbmcoKSB7XG5cdFx0aGFzaGVyLmluaXQoKVxuXHR9XG5cdF9zZXR1cENyb3Nzcm9hZHMoKSB7XG5cdFx0bGV0IGhvbWVTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgnJywgdGhpcy5fb25Ib21lVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAxKVxuXG5cdFx0bGV0IGJhc2ljU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3twYWdlfScsIHRoaXMuX29uRmlyc3REZWdyZWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDEpXG5cdFx0Ly8gZmlyc3REZWdyZWVTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdC8vIFx0cGFnZSA6IFsnaG9tZScsICc0MDQnLCAnZmVsbG93c2hpcCcsICdwcm9qZWN0cycsICdzaG9wJywgJ25ld3MnLCAnY29udGFjdCcsICdsZWdhbCcsICdwcml2YWN5J10gLy92YWxpZCBzZWN0aW9uc1xuXHRcdC8vIH1cblxuXHRcdGxldCBwcm9qZWN0U2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3Byb2plY3Qve2lkfScsIHRoaXMuX29uUHJvamVjdFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMilcblx0XHRwcm9qZWN0U2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogL15bYS16XS9cblx0XHR9XG5cblx0XHRsZXQgZ2FsbGVyeVNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCdwcm9qZWN0L3tpZH0vY29udGFjdC1zaGVldCcsIHRoaXMuX29uUHJvamVjdFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMylcblx0XHRnYWxsZXJ5U2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogL15bYS16XS9cblx0XHR9XG5cblx0XHRsZXQgc2hvcFNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCcvc2hvcC97aWR9JywgdGhpcy5fb25TaG9wVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAyKVxuXHRcdHNob3BTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0aWQgOiAvXlswLTldL1xuXHRcdH1cblx0fVxuXHRfb25Ib21lVVJMSGFuZGxlcigpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZSgnaG9tZScpXG5cdH1cblx0X29uRmlyc3REZWdyZWVVUkxIYW5kbGVyKHBhZ2VJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHBhZ2VJZClcblx0fVxuXHRfb25Qcm9qZWN0VVJMSGFuZGxlcihwcm9qZWN0SWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwcm9qZWN0SWQpXG5cdH1cblx0X29uU2hvcFVSTEhhbmRsZXIocHJpbnRJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHByaW50SWQpXG5cdH1cblx0X29uRGVmYXVsdFVSTEhhbmRsZXIoKSB7XG5cdFx0dGhpcy5fc2VuZFRvRGVmYXVsdCgpXG5cdH1cblx0X2Fzc2lnblJvdXRlKGlkKSB7XG5cdFx0bGV0IGhhc2ggPSBoYXNoZXIuZ2V0SGFzaCgpXG5cdFx0bGV0IHBhcnRzID0gdGhpcy5fZ2V0VVJMUGFydHMoaGFzaClcblx0XHR0aGlzLl91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcnRzWzBdLCBpZClcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gdHJ1ZVxuXHR9XG5cdF9nZXRVUkxQYXJ0cyh1cmwpIHtcblx0XHRsZXQgaGFzaCA9IHVybFxuXHRcdGhhc2ggPSBoYXNoLnN1YnN0cigxKVxuXHRcdHJldHVybiBoYXNoLnNwbGl0KCcvJylcblx0fVxuXHRfdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJlbnQsIHRhcmdldElkKSB7XG5cdFx0aGFzaGVyLm9sZEhhc2ggPSBoYXNoZXIubmV3SGFzaFxuXHRcdGhhc2hlci5uZXdIYXNoID0ge1xuXHRcdFx0aGFzaDogaGFzaCxcblx0XHRcdHBhcnRzOiBwYXJ0cyxcblx0XHRcdHBhcmVudDogcGFyZW50LFxuXHRcdFx0dGFyZ2V0SWQ6IHRhcmdldElkXG5cdFx0fVxuXHRcdEFwcEFjdGlvbnMucGFnZUhhc2hlckNoYW5nZWQoaGFzaGVyLm5ld0hhc2gpXG5cdH1cblx0X2RpZEhhc2hlckNoYW5nZShuZXdIYXNoLCBvbGRIYXNoKSB7XG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0Y3Jvc3Nyb2Fkcy5wYXJzZShuZXdIYXNoKVxuXHRcdGlmKHRoaXMubmV3SGFzaEZvdW5kZWQpIHJldHVyblxuXHRcdC8vIElmIFVSTCBkb24ndCBtYXRjaCBhIHBhdHRlcm4sIHNlbmQgdG8gZGVmYXVsdFxuXHRcdHRoaXMuX29uRGVmYXVsdFVSTEhhbmRsZXIoKVxuXHR9XG5cdF9zZW5kVG9EZWZhdWx0KCkge1xuXHRcdGhhc2hlci5zZXRIYXNoKEFwcFN0b3JlLmRlZmF1bHRSb3V0ZSgpKVxuXHR9XG5cdHN0YXRpYyBnZXRCYXNlVVJMKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5VUkwuc3BsaXQoXCIjXCIpWzBdXG5cdH1cblx0c3RhdGljIGdldEhhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5nZXRIYXNoKClcblx0fVxuXHRzdGF0aWMgZ2V0Um91dGVzKCkge1xuXHRcdHJldHVybiBkYXRhLnJvdXRlcy5yb3V0aW5nXG5cdH1cblx0c3RhdGljIGdldE5ld0hhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5uZXdIYXNoXG5cdH1cblx0c3RhdGljIGdldE9sZEhhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5vbGRIYXNoXG5cdH1cblx0c3RhdGljIHNldEhhc2goaGFzaCkge1xuXHRcdGhhc2hlci5zZXRIYXNoKGhhc2gpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyXG4iLCJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5cbmxldCBfaGFzaFxuXG5mdW5jdGlvbiBfcGFnZVJvdXRlSWRDaGFuZ2VkKGhhc2gpIHtcblx0X2hhc2ggPSBoYXNoLml0ZW0ucGFyZW50XG59XG5mdW5jdGlvbiBfZ2V0UGFnZUNvbnRlbnQoKSB7XG5cdHZhciBoYXNoT2JqID0gUm91dGVyLmdldE5ld0hhc2goKVxuXHR2YXIgY29udGVudCA9IGRhdGEucm91dGVzLnJvdXRpbmdbaGFzaE9iai5oYXNoXVxuXHRyZXR1cm4gY29udGVudFxufVxuZnVuY3Rpb24gX2dldE1lbnVDb250ZW50KCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXMubWVudVxufVxuZnVuY3Rpb24gX2dldEZvb3Rlck1lbnVDb250ZW50KCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNbJ2Zvb3Rlci1tZW51J11cbn1cbmZ1bmN0aW9uIF9nZXRBcHBEYXRhKCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNcbn1cbmZ1bmN0aW9uIF9nZXREZWZhdWx0Um91dGUoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlc1snZGVmYXVsdC1yb3V0ZSddXG59XG5mdW5jdGlvbiBfZ2V0R2xvYmFsQ29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzLmNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRIb21lKCkge1xuXHRyZXR1cm4gZGF0YS5ob21lXG59XG5mdW5jdGlvbiBfZ2V0RmVsbG93c2hpcCgpIHtcblx0cmV0dXJuIGRhdGEuZmVsbG93c2hpcFxufVxuZnVuY3Rpb24gX2dldFNob3AoKSB7XG5cdHJldHVybiBkYXRhLnNob3Bcbn1cbmZ1bmN0aW9uIF9nZXROZXdzKCkge1xuXHRyZXR1cm4gZGF0YS5uZXdzXG59XG5mdW5jdGlvbiBfZ2V0QXJ0aXN0cygpIHtcblx0cmV0dXJuIGRhdGEuYXJ0aXN0c1xufVxuZnVuY3Rpb24gX2dldEFydGlzdChpZCkge1xuXHRyZXR1cm4gZGF0YS5hcnRpc3RzW2lkXVxufVxuXG52YXIgQXBwU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKHR5cGUsIGl0ZW0pIHtcblx0XHR0aGlzLmVtaXQodHlwZSwgaXRlbSlcblx0fSxcblx0aGFzaDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9oYXNoXG5cdH0sXG5cdHBhZ2VDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldFBhZ2VDb250ZW50KClcblx0fSxcblx0bWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0TWVudUNvbnRlbnQoKVxuXHR9LFxuXHRmb290ZXJNZW51Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRGb290ZXJNZW51Q29udGVudCgpXG5cdH0sXG5cdGFwcERhdGE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0QXBwRGF0YSgpXG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXREZWZhdWx0Um91dGUoKVxuXHR9LFxuXHRnbG9iYWxDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEdsb2JhbENvbnRlbnQoKVxuXHR9LFxuXHRob21lQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRIb21lKClcblx0fSxcblx0ZmVsbG93c2hpcENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0RmVsbG93c2hpcCgpXG5cdH0sXG5cdHNob3BDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldFNob3AoKVxuXHR9LFxuXHRuZXdzQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXROZXdzKClcblx0fSxcblx0YXJ0aXN0c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0QXJ0aXN0cygpXG5cdH0sXG5cdGFydGlzdENvbnRlbnQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0cmV0dXJuIF9nZXRBcnRpc3QoaWQpXG5cdH0sXG5cdFdpbmRvdzoge1xuXHRcdHc6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdGg6IHdpbmRvdy5pbm5lckhlaWdodFxuXHR9LFxuXHRkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG5cdFx0dmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG5cdFx0c3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG5cdFx0XHRjYXNlIEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VEOlxuXHRcdFx0XHRfcGFnZVJvdXRlSWRDaGFuZ2VkKGFjdGlvbilcblx0XHRcdFx0QXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkU6XG5cdFx0XHRcdEFwcFN0b3JlLldpbmRvdy53ID0gYWN0aW9uLml0ZW0ud2luZG93V1xuXHRcdFx0XHRBcHBTdG9yZS5XaW5kb3cuaCA9IGFjdGlvbi5pdGVtLndpbmRvd0hcblx0XHRcdFx0QXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSlcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cblxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdG9yZVxuXG4iLCJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0IEFydGlzdENvbnN0YW50cyBmcm9tICdBcnRpc3RDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5cbmNvbnN0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG5sZXQgX2FydGlzdCA9IHt9O1xubGV0IF9hcnRpc3RzID0ge307XG5cbmZ1bmN0aW9uIF9hZGRBcnRpc3RzKGFydGlzdHMpIHtcblx0YXJ0aXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFydGlzdCkgeyAvLyBjaGFuZ2UgZm9yRWFjaCB0byBsb2Rhc2hcblx0XHRpZiAoIV9hcnRpc3RzW2FydGlzdC5faWRdKSB7XG5cdFx0XHRfYXJ0aXN0c1thcnRpc3QuX2lkXSA9IGFydGlzdDtcblx0XHR9XG5cdH0pO1xufVxuXG5sZXQgQXJ0aXN0U3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGdldEFsbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9hcnRpc3RzXG5cdH0sXG5cdGdldE9uZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9hcnRpc3Q7XG5cdH0sXG5cdC8vIEVtaXQgQ2hhbmdlIGV2ZW50XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuXHR9LFxuXHQvLyBBZGQgY2hhbmdlIGxpc3RlbmVyXG5cdGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdC8vIFJlbW92ZSBjaGFuZ2UgbGlzdGVuZXJcblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdGxldCBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BTExfQVJUSVNUUzpcblx0XHRcdFx0X2FkZEFydGlzdHMoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRBcnRpc3RTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FSVElTVDpcblx0XHRcdFx0X2FydGlzdCA9IGFjdGlvbi5pdGVtO1xuXHRcdFx0XHRBcnRpc3RTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0U3RvcmVcblxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBDYXJ0Q29uc3RhbnRzIGZyb20gJ0NhcnRDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmNvbnN0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG4vLyBEZWZpbmUgaW5pdGlhbCBkYXRhIHBvaW50c1xubGV0IF9wcm9kdWN0cyA9IFtdLCBfY2FydFZpc2libGUgPSB0cnVlLCBfY2FydEVuYWJsZWQgPSBmYWxzZTtcblxuLy8gQWRkIHByb2R1Y3QgdG8gY2FydFxuZnVuY3Rpb24gX2FkZChwcmludElkLCB1cGRhdGUpIHtcblx0Ly8gdXBkYXRlLnF1YW50aXR5ID0gcHJpbnRJZCBpbiBfcHJvZHVjdHMgPyBfcHJvZHVjdHNbcHJpbnRJZF0ucXVhbnRpdHkgKyAxIDogMTtcblx0Ly8gX3Byb2R1Y3RzW3ByaW50SWRdLnB1c2ggPSBfLmV4dGVuZCh7fSwgX3Byb2R1Y3RzW3ByaW50SWRdLCB1cGRhdGUpXG5cdC8vIGlmIChfcHJvZHVjdHNbcHJpbnRJZF0pIHtcblx0Ly8gXHRfcHJvZHVjdHNbcHJpbnRJZF0ucHVzaCh1cGRhdGUpXG5cdC8vIH0gZWxzZSB7XG5cdC8vIFx0X3Byb2R1Y3RzW3ByaW50SWRdID0gW11cblx0Ly8gXHRfcHJvZHVjdHNbcHJpbnRJZF0ucHVzaCh1cGRhdGUpXG5cdC8vIH1cblx0Ly8gY29uc29sZS5sb2coX3Byb2R1Y3RzKVxuXG5cdF9wcm9kdWN0cy5wdXNoKHVwZGF0ZSlcbn1cblxuLy8gU2V0IGNhcnQgdmlzaWJpbGl0eVxuZnVuY3Rpb24gX3NldENhcnRWaXNpYmxlKGNhcnRWaXNpYmxlKSB7XG5cdF9jYXJ0VmlzaWJsZSA9IGNhcnRWaXNpYmxlO1xufVxuXG4vLyBTZXQgY2FydCBlbmFibGVkXG5mdW5jdGlvbiBfc2V0Q2FydEVuYWJsZWQoY2FydEVuYWJsZWQpIHtcblx0X2NhcnRFbmFibGVkID0gY2FydEVuYWJsZWQ7XG59XG5cbi8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0oaW5kZXgpIHtcblx0X3Byb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmxldCBDYXJ0U3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGdldENhcnRJdGVtczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcm9kdWN0cztcblx0fSxcblx0Z2V0Q2FydENvdW50OiBmdW5jdGlvbigpIHtcblx0XHQvLyBsZXQgY291bnQgPSAwXG5cdFx0Ly8gXyhfcHJvZHVjdHMpLmZvckVhY2goKHByb2R1Y3QsIGluZGV4KSA9PiB7XG5cdFx0Ly8gXHQvLyBjb3VudCArPSBwcm9kdWN0LnF1YW50aXR5XG5cdFx0Ly8gXHRjb3VudCArPSBwcm9kdWN0Lmxlbmd0aFxuXHRcdC8vIH0pLnZhbHVlKClcblx0XHQvLyByZXR1cm4gY291bnQ7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKF9wcm9kdWN0cykubGVuZ3RoO1xuXHR9LFxuXHRnZXRDYXJ0VG90YWw6IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0XyhfcHJvZHVjdHMpLmZvckVhY2goKHByb2R1Y3QsIGluZGV4KSA9PiB7XG5cdFx0XHR0b3RhbCArPSBwcm9kdWN0LnByaWNlXG5cdFx0fSkudmFsdWUoKVxuXG5cdFx0Ly8gZm9yKGxldCBwcm9kdWN0IGluIF9wcm9kdWN0cyl7XG5cdFx0Ly8gXHRpZihfcHJvZHVjdHMuaGFzT3duUHJvcGVydHkocHJvZHVjdCkpe1xuXHRcdC8vIFx0XHR0b3RhbCArPSBfcHJvZHVjdHNbcHJvZHVjdF0ucHJpY2UgKiBfcHJvZHVjdHNbcHJvZHVjdF0ucXVhbnRpdHk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdHJldHVybiB0b3RhbC50b0ZpeGVkKDIpO1xuXHR9LFxuXHRnZXRDYXJ0VmlzaWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jYXJ0VmlzaWJsZTtcblx0fSxcblx0Z2V0Q2FydEVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY2FydEVuYWJsZWQ7XG5cdH0sXG5cdC8vIEVtaXQgQ2hhbmdlIGV2ZW50XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuXHR9LFxuXHQvLyBBZGQgY2hhbmdlIGxpc3RlbmVyXG5cdGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdC8vIFJlbW92ZSBjaGFuZ2UgbGlzdGVuZXJcblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdGxldCBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXG5cdFx0c3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuQ0FSVF9BREQ6XG5cdFx0XHRcdF9hZGQoYWN0aW9uLnByaW50SWQsIGFjdGlvbi51cGRhdGUpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX1ZJU0lCTEU6XG5cdFx0XHRcdF9zZXRDYXJ0VmlzaWJsZShhY3Rpb24uY2FydFZpc2libGUpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX0VOQUJMRUQ6XG5cdFx0XHRcdF9zZXRDYXJ0RW5hYmxlZChhY3Rpb24uY2FydEVuYWJsZWQpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX1JFTU9WRTpcblx0XHRcdFx0X3JlbW92ZUl0ZW0oYWN0aW9uLmluZGV4KVxuXHRcdFx0XHRDYXJ0U3RvcmUuZW1pdENoYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdG9yZVxuXG4iLCJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0IFByaW50Q29uc3RhbnRzIGZyb20gJ1ByaW50Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxubGV0IF9wcmludHMgPSB7fTtcbmxldCBfcHJpbnRzRm9yU2FsZSA9IHt9O1xubGV0IF9wcmludHNTbGlkZXNob3cgPSB7fTtcbmxldCBfYXJ0aXN0UHJpbnRzID0ge307XG5sZXQgX3ByaW50ID0ge307XG5sZXQgX3ByaW50Wm9vbWVkO1xuXG5mdW5jdGlvbiBfYWRkUHJpbnRzKHByaW50cykge1xuXHRfKHByaW50cykuZm9yRWFjaCgocHJpbnQpID0+IHtcblx0XHRpZiAoIV9wcmludHNbcHJpbnQuX2lkXSkge1xuXHRcdFx0X3ByaW50c1twcmludC5faWRdID0gcHJpbnQ7XG5cdFx0fVxuXHR9KS52YWx1ZSgpXG59XG5cbmZ1bmN0aW9uIF9hZGRQcmludHNGb3JTYWxlKHByaW50cykge1xuXHRfKHByaW50cykuZm9yRWFjaCgocHJpbnQpID0+IHtcblx0XHRpZiAoIV9wcmludHNGb3JTYWxlW3ByaW50Ll9pZF0pIHtcblx0XHRcdF9wcmludHNGb3JTYWxlW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pLnZhbHVlKClcbn1cblxuZnVuY3Rpb24gX2FkZFByaW50c1NsaWRlc2hvdyhyZXN1bHQpIHtcblx0X3ByaW50c1NsaWRlc2hvdyA9IHJlc3VsdFxufVxuXG5mdW5jdGlvbiBfYWRkQXJ0aXN0UHJpbnRzKHByaW50cykge1xuXHRfYXJ0aXN0UHJpbnRzID0gcHJpbnRzXG5cdC8vIF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHQvLyBcdGlmICghX2FydGlzdFByaW50c1twcmludC5faWRdKSB7XG5cdC8vIFx0XHRfYXJ0aXN0UHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0Ly8gXHR9XG5cdC8vIH0pLnZhbHVlKClcbn1cblxubGV0IFByaW50U3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGdldEFsbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNcblx0fSxcblx0Z2V0Rm9yU2FsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNGb3JTYWxlXG5cdH0sXG5cdGdldFNsaWRlc2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNTbGlkZXNob3dcblx0fSxcblx0Z2V0QXJ0aXN0UHJpbnRzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2FydGlzdFByaW50c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfcHJpbnRcblx0fSxcblx0Z2V0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludFpvb21lZFxuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0ZW1pdFNwZUNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbWl0KCdSRUNFSVZFX1BSSU5UU19TTElERVNIT1cnKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9BTExfUFJJTlRTOlxuXHRcdFx0XHRfYWRkUHJpbnRzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX0ZPUlNBTEU6XG5cdFx0XHRcdF9hZGRQcmludHNGb3JTYWxlKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVzpcblx0XHRcdFx0X2FkZFByaW50c1NsaWRlc2hvdyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHQvLyBQcmludFN0b3JlLmVtaXRTcGVDaGFuZ2UoJ1JFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVycpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RQcmludHMoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVDpcblx0XHRcdFx0X3ByaW50ID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuWk9PTTpcblx0XHRcdFx0X3ByaW50Wm9vbWVkID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFByaW50U3RvcmVcblxuIiwiaW1wb3J0IGlzIGZyb20gJ2lzJztcblxuZnVuY3Rpb24gZ2V0QWxsTWV0aG9kcyhvYmopIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iailcblx0XHQuZmlsdGVyKGtleSA9PiBpcy5mbihvYmpba2V5XSkpXG59XG5cbmZ1bmN0aW9uIGF1dG9CaW5kKG9iaikge1xuXHQvLyBjb25zb2xlLmxvZygnb2JqIC0tLS0tJywgb2JqKVxuICBcdGdldEFsbE1ldGhvZHMob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblx0XHQuZm9yRWFjaChtdGQgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobXRkKVxuXHRcdFx0b2JqW210ZF0gPSBvYmpbbXRkXS5iaW5kKG9iaik7XG5cdFx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b0JpbmQ7IiwiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgTm9ybWFsaXplTW91c2VDb29yZHMoZSwgb2JqV3JhcHBlcikge1xuXHRcdHZhciBwb3N4ID0gMDtcblx0XHR2YXIgcG9zeSA9IDA7XG5cdFx0aWYgKCFlKSB2YXIgZSA9IHdpbmRvdy5ldmVudDtcblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0b2JqV3JhcHBlci54ID0gcG9zeFxuXHRcdG9ialdyYXBwZXIueSA9IHBvc3lcblx0XHRyZXR1cm4gb2JqV3JhcHBlclxuXHR9XG5cdHN0YXRpYyBSZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIGNvbnRlbnRXLCBjb250ZW50SCkge1xuXHRcdHZhciBhc3BlY3RSYXRpbyA9IGNvbnRlbnRXIC8gY29udGVudEhcblx0XHR2YXIgc2NhbGUgPSAoKHdpbmRvd1cgLyB3aW5kb3dIKSA8IGFzcGVjdFJhdGlvKSA/ICh3aW5kb3dIIC8gY29udGVudEgpICogMSA6ICh3aW5kb3dXIC8gY29udGVudFcpICogMVxuXHRcdHZhciBuZXdXID0gY29udGVudFcgKiBzY2FsZVxuXHRcdHZhciBuZXdIID0gY29udGVudEggKiBzY2FsZVxuXHRcdHZhciBjc3MgPSB7XG5cdFx0XHR3aWR0aDogbmV3Vyxcblx0XHRcdGhlaWdodDogbmV3SCxcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKG5ld1cgPj4gMSksXG5cdFx0XHR0b3A6ICh3aW5kb3dIID4+IDEpIC0gKG5ld0ggPj4gMSlcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGNzc1xuXHR9XG5cdHN0YXRpYyBHZXRTY3JvbGxUb3AoKSB7XG5cdFx0cmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgIC0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgMCk7XG5cdH1cblx0c3RhdGljIEdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSBbJycsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcmVmaXggPT09ICcnID8gcHJvcGVydHkgOiBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcmVmaXgrcHJvcGVydHk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BdICE9IFwidW5kZWZpbmVkXCIpIFxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIFNjcm9sbCgpIHtcbiAgICBcdHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvLyBJRSBGYWxsYmFjaywgeW91IGNhbiBldmVuIGZhbGxiYWNrIHRvIG9uc2Nyb2xsXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwLzYwKSB9O1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgSW50ZXJ2YWwodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuXHRpZiAoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdFx0cmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHZhciB4ID0gMCwgeSA9IDA7XG5cdFx0ZG8ge1xuXHRcdFx0eCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcblx0XHRcdHkgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuXHRcdH0gXG5cdFx0d2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KTtcblxuXHRcdHJldHVybiB7IFwibGVmdFwiOiB4LCBcInRvcFwiOiB5IH1cblx0fVxufSIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gXG4vLyBNSVQgbGljZW5zZVxuIFxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxuICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbn0oKSk7IiwiLyohXG4gKiBWRVJTSU9OOiAxLjcuNVxuICogREFURTogMjAxNS0wMi0yNlxuICogVVBEQVRFUyBBTkQgRE9DUyBBVDogaHR0cDovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDgtMjAxNSwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyB3b3JrIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHA6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgc29mdHdhcmUgYWdyZWVtZW50IHRoYXQgd2FzIGlzc3VlZCB3aXRoIHlvdXIgbWVtYmVyc2hpcC5cbiAqIFxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4gKiovXG52YXIgX2dzU2NvcGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOnRoaXN8fHdpbmRvdzsoX2dzU2NvcGUuX2dzUXVldWV8fChfZ3NTY29wZS5fZ3NRdWV1ZT1bXSkpLnB1c2goZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZT13aW5kb3csaT1mdW5jdGlvbihpLHIpe3ZhciBzPVwieFwiPT09cj9cIldpZHRoXCI6XCJIZWlnaHRcIixuPVwic2Nyb2xsXCIrcyxvPVwiY2xpZW50XCIrcyxhPWRvY3VtZW50LmJvZHk7cmV0dXJuIGk9PT1lfHxpPT09dHx8aT09PWE/TWF0aC5tYXgodFtuXSxhW25dKS0oZVtcImlubmVyXCIrc118fHRbb118fGFbb10pOmlbbl0taVtcIm9mZnNldFwiK3NdfSxyPV9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe3Byb3BOYW1lOlwic2Nyb2xsVG9cIixBUEk6Mix2ZXJzaW9uOlwiMS43LjVcIixpbml0OmZ1bmN0aW9uKHQscixzKXtyZXR1cm4gdGhpcy5fd2R3PXQ9PT1lLHRoaXMuX3RhcmdldD10LHRoaXMuX3R3ZWVuPXMsXCJvYmplY3RcIiE9dHlwZW9mIHImJihyPXt5OnJ9KSx0aGlzLnZhcnM9cix0aGlzLl9hdXRvS2lsbD1yLmF1dG9LaWxsIT09ITEsdGhpcy54PXRoaXMueFByZXY9dGhpcy5nZXRYKCksdGhpcy55PXRoaXMueVByZXY9dGhpcy5nZXRZKCksbnVsbCE9ci54Pyh0aGlzLl9hZGRUd2Vlbih0aGlzLFwieFwiLHRoaXMueCxcIm1heFwiPT09ci54P2kodCxcInhcIik6ci54LFwic2Nyb2xsVG9feFwiLCEwKSx0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKFwic2Nyb2xsVG9feFwiKSk6dGhpcy5za2lwWD0hMCxudWxsIT1yLnk/KHRoaXMuX2FkZFR3ZWVuKHRoaXMsXCJ5XCIsdGhpcy55LFwibWF4XCI9PT1yLnk/aSh0LFwieVwiKTpyLnksXCJzY3JvbGxUb195XCIsITApLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goXCJzY3JvbGxUb195XCIpKTp0aGlzLnNraXBZPSEwLCEwfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fc3VwZXIuc2V0UmF0aW8uY2FsbCh0aGlzLHQpO3ZhciByPXRoaXMuX3dkd3x8IXRoaXMuc2tpcFg/dGhpcy5nZXRYKCk6dGhpcy54UHJldixzPXRoaXMuX3dkd3x8IXRoaXMuc2tpcFk/dGhpcy5nZXRZKCk6dGhpcy55UHJldixuPXMtdGhpcy55UHJldixvPXItdGhpcy54UHJldjt0aGlzLl9hdXRvS2lsbCYmKCF0aGlzLnNraXBYJiYobz43fHwtNz5vKSYmaSh0aGlzLl90YXJnZXQsXCJ4XCIpPnImJih0aGlzLnNraXBYPSEwKSwhdGhpcy5za2lwWSYmKG4+N3x8LTc+bikmJmkodGhpcy5fdGFyZ2V0LFwieVwiKT5zJiYodGhpcy5za2lwWT0hMCksdGhpcy5za2lwWCYmdGhpcy5za2lwWSYmKHRoaXMuX3R3ZWVuLmtpbGwoKSx0aGlzLnZhcnMub25BdXRvS2lsbCYmdGhpcy52YXJzLm9uQXV0b0tpbGwuYXBwbHkodGhpcy52YXJzLm9uQXV0b0tpbGxTY29wZXx8dGhpcy5fdHdlZW4sdGhpcy52YXJzLm9uQXV0b0tpbGxQYXJhbXN8fFtdKSkpLHRoaXMuX3dkdz9lLnNjcm9sbFRvKHRoaXMuc2tpcFg/cjp0aGlzLngsdGhpcy5za2lwWT9zOnRoaXMueSk6KHRoaXMuc2tpcFl8fCh0aGlzLl90YXJnZXQuc2Nyb2xsVG9wPXRoaXMueSksdGhpcy5za2lwWHx8KHRoaXMuX3RhcmdldC5zY3JvbGxMZWZ0PXRoaXMueCkpLHRoaXMueFByZXY9dGhpcy54LHRoaXMueVByZXY9dGhpcy55fX0pLHM9ci5wcm90b3R5cGU7ci5tYXg9aSxzLmdldFg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2R3P251bGwhPWUucGFnZVhPZmZzZXQ/ZS5wYWdlWE9mZnNldDpudWxsIT10LnNjcm9sbExlZnQ/dC5zY3JvbGxMZWZ0OmRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDp0aGlzLl90YXJnZXQuc2Nyb2xsTGVmdH0scy5nZXRZPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dkdz9udWxsIT1lLnBhZ2VZT2Zmc2V0P2UucGFnZVlPZmZzZXQ6bnVsbCE9dC5zY3JvbGxUb3A/dC5zY3JvbGxUb3A6ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6dGhpcy5fdGFyZ2V0LnNjcm9sbFRvcH0scy5fa2lsbD1mdW5jdGlvbih0KXtyZXR1cm4gdC5zY3JvbGxUb194JiYodGhpcy5za2lwWD0hMCksdC5zY3JvbGxUb195JiYodGhpcy5za2lwWT0hMCksdGhpcy5fc3VwZXIuX2tpbGwuY2FsbCh0aGlzLHQpfX0pLF9nc1Njb3BlLl9nc0RlZmluZSYmX2dzU2NvcGUuX2dzUXVldWUucG9wKCkoKTsiLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbi8vIEFjdGlvbnNcbnZhciBQYWdlckFjdGlvbnMgPSB7XG4gICAgb25QYWdlUmVhZHk6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZLFxuICAgICAgICBcdGl0ZW06IGhhc2hcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIFx0UGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFLFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBwYWdlVHJhbnNpdGlvbkRpZEZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbi8vIENvbnN0YW50c1xudmFyIFBhZ2VyQ29uc3RhbnRzID0ge1xuXHRQQUdFX0lTX1JFQURZOiAnUEFHRV9JU19SRUFEWScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTjogJ1BBR0VfVFJBTlNJVElPTl9JTicsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVQ6ICdQQUdFX1RSQU5TSVRJT05fT1VUJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTogJ1BBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUnLFxuXHRQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1M6ICdQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MnLFxuXHRQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDogJ1BBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIJyxcbn1cblxuLy8gRGlzcGF0Y2hlclxudmFyIFBhZ2VyRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlUGFnZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uKVxuXHR9XG59KVxuXG4vLyBTdG9yZVxudmFyIFBhZ2VyU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZmlyc3RQYWdlVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBwYWdlVHJhbnNpdGlvblN0YXRlOiB1bmRlZmluZWQsIFxuICAgIGRpc3BhdGNoZXJJbmRleDogUGFnZXJEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IHBheWxvYWQudHlwZVxuICAgICAgICB2YXIgaXRlbSA9IHBheWxvYWQuaXRlbVxuICAgICAgICBzd2l0Y2goYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZOlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1NcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPyBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4gOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOlxuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6XG4gICAgICAgICAgICBcdGlmIChQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24pIFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0hcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLmVtaXQoYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0UGFnZXJTdG9yZTogUGFnZXJTdG9yZSxcblx0UGFnZXJBY3Rpb25zOiBQYWdlckFjdGlvbnMsXG5cdFBhZ2VyQ29uc3RhbnRzOiBQYWdlckNvbnN0YW50cyxcblx0UGFnZXJEaXNwYXRjaGVyOiBQYWdlckRpc3BhdGNoZXJcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdBdXRvYmluZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0YXV0b2JpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMudGxJbiA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGVcblx0XHR9KVxuXHRcdHRoaXMudGxPdXQgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucmVzaXplKClcblx0XHR0aGlzLnNldHVwQW5pbWF0aW9ucygpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmlzUmVhZHkodGhpcy5wcm9wcy5oYXNoKSwgMClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0dmFyIHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy50bEluLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsT3V0LnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xubGV0IG9mZnNldCA9IHJlcXVpcmUoJ29mZnNldCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gJ3BhZ2UtYidcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbi5iaW5kKHRoaXMpXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQgPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jb21wb25lbnRzID0ge1xuXHRcdFx0J25ldy1jb21wb25lbnQnOiB1bmRlZmluZWQsXG5cdFx0XHQnb2xkLWNvbXBvbmVudCc6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXNDb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZXMnIHJlZj0ncGFnZS1hJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VzJyByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0fVxuXG5cdHNldHVwTmV3Q29tcG9uZW50KGhhc2gsIFR5cGUsIGlkU2VjdGlvbikge1xuXHRcdGxldCBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5vbGRQYWdlRGl2UmVmID0gdGhpcy5jdXJyZW50UGFnZURpdlJlZlxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAodGhpcy5jdXJyZW50UGFnZURpdlJlZiA9PT0gJ3BhZ2UtYScpID8gJ3BhZ2UtYicgOiAncGFnZS1hJ1xuXHRcdGxldCBlbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHRsZXQgcGFnZSA9IFxuXHRcdFx0PFR5cGUgXG5cdFx0XHRcdGlkPXt0aGlzLmN1cnJlbnRQYWdlRGl2UmVmfSBcblx0XHRcdFx0aXNSZWFkeT17dGhpcy5vblBhZ2VSZWFkeX0gXG5cdFx0XHRcdGhhc2g9e2hhc2h9XG5cdFx0XHRcdGlkU2VjdGlvbj17aWRTZWN0aW9ufVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKX1cblx0XHRcdC8+XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10gPSB0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddID0gUmVhY3QucmVuZGVyKHBhZ2UsIGVsKVxuXHRcdGlmKFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9PT0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS5mb3JjZVVubW91bnQoKVxuXHRcdH1cblx0fVxuXG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXG5cdHdpbGxQYWdlVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMuc3dpdGNoUGFnZXNEaXZJbmRleCgpXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25JbigpXG5cdH1cblxuXHR3aWxsUGFnZVRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25PdXQoKVxuXHR9XG5cblx0ZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUnKVxuXHRcdFBhZ2VyQWN0aW9ucy5wYWdlVHJhbnNpdGlvbkRpZEZpbmlzaCgpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0fVxuXG5cdGRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0dGhpcy56b29tID0gUHJpbnRTdG9yZS5nZXRab29tKClcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMClcblx0XHRpZiAodGhpcy56b29tICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fc2xpZGVzaG93Jykub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0KjAuMiAtIDQwKTtcblx0XHRcdC8vIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fc2xpZGVzaG93Jykub2Zmc2V0VG9wKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBvZmZzZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3NsaWRlc2hvdycpKS50b3ApO1xuXHRcdFx0UHJpbnRBY3Rpb25zLnNldFByaW50Wm9vbSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZScpXG5cdFx0UGFnZXJBY3Rpb25zLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHN3aXRjaFBhZ2VzRGl2SW5kZXgoKSB7XG5cdFx0dmFyIG5ld0VsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBvbGRFbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLm9sZFBhZ2VEaXZSZWZdKVxuXHRcdG5ld0VsLnN0eWxlLnpJbmRleCA9IDJcblx0XHRvbGRFbC5zdHlsZS56SW5kZXggPSAxXG5cdH1cblxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ25ldy1jb21wb25lbnQnKVxuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XCJhcnRpc3RzXCI6e1wiZWxsaW90dC1lcndpdHRcIjp7XCJuYW1lXCI6XCJFbGxpb3R0IEVyd2l0dFwiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkN1YmEgMTk2NFwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcImVsbGlvdHQtZXJ3aXR0XCIsXCJuUGhvdG9zXCI6OH1dfSxcInFpdS15YW5nXCI6e1wibmFtZVwiOlwiUWl1IFlhbmdcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bVwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcInFpdS15YW5nXCIsXCJuUGhvdG9zXCI6Nn1dfSxcInBoaWxpcC1zaW5kZW5cIjp7XCJuYW1lXCI6XCJQaGlsaXAgU2luZGVuXCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiTG9yZW0gaXBzdW0gMlwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcInBoaWxpcC1zaW5kZW5cIixcIm5QaG90b3NcIjo0fV19LFwiamFjay1kdWV0XCI6e1wibmFtZVwiOlwiSmFjayBEdWV0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiTG9yZW0gaXBzdW0gM1wiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcImphY2stZHVldFwiLFwiblBob3Rvc1wiOjB9XX19LFwiZmVsbG93c2hpcFwiOntcImZlbGxvd3NoaXBcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQSBmZWxsb3dzaGlwIGlzIGEgY29tbXVuaW9uIG9mIHBlb3BsZSBzaGFyaW5nIGEgY29tbW9uIHBhc3Npb24uXCIsXCJJbiBDdWJhIGdlbmVyYXRpb25zIG9mIGFzcGlyaW5nIGRpc3RpbGxlcnMgaGF2ZSBmb2xsb3dlZCB0aGUgZXhhbXBsZSBvZiBhIHNlYXNvbmVkIHJ1bSBtYXN0ZXIgYW5kIHNvIGxlYXJudCB0byBkZXZlbG9wIGFuZCBwZXJmZWN0IHRoZWlyIGNyYWZ0LiBUaGUgRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGNvbWJpbmVzIHRoaXMgcmljaCBoaXN0b3J5IGFuZCB0cmFkaXRpb24gd2l0aCBhIHBhc3Npb24gZm9yIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5LlwiLFwiTWFzdGVyIHBob3RvZ3JhcGhlciBFbGxpb3R0IEVyd2l0dOKAmXMgbGlmZWxvbmcgbG92ZSBvZiBwaG90b2dyYXBoeSBhbmQgQ3ViYSBoYXMgYnJvdWdodCBoaW0gYmFjayB0byBDdWJhIGFnYWluIGFmdGVyIDUxIHllYXJzIOKAkyB0aGlzIHRpbWUgdG8gaW5pdGlhdGUgdGhlIGZlbGxvd3NoaXAgd2l0aCBIYXZhbmEgQ2x1YiA3LlwiXX0sXCJiaW9ncmFwaHlcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQSBuZXcgYm9keSBvZiB3b3JrIHdpbGwgY3JlYXRlIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGEgbmV3IGdlbmVyYXRpb24gb2YgcGhvdG9ncmFwaGVycyB0byByZWxhdGUgdG8sIHRvIGZ1cnRoZXIgZGV2ZWxvcCB0aGVpciBjcmFmdCBhbmQgaGVscCAocmUpZGVmaW5lIHRoZSBnZW5yZSBpbiB0aGUgMjFzdCBjZW50dXJ5LiAgSW5zcGlyZWQgYnkgRWxsaW90dCBFcndpdHQsIGV4Y2VwdGlvbmFsIHRhbGVudHMgc2VsZWN0ZWQgZm9yIHRoZSBmZWxsb3dzaGlwIHdpbGwgZWFjaCBjcmVhdGUgYSB1bmlxdWUgYm9keSBvZiB3b3JrLCBjYXB0dXJpbmcgdGhlIHNvdWwgb2YgQ3ViYSB3aGljaCB3aWxsIGJlIHNoYXJlZCB3aXRoIHBob3RvZ3JhcGh5IGxvdmVycyB3b3JsZHdpZGUuXCIsXCJJbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeS5cIixcIkluIGFkZGl0aW9uIHRvIHRoZSBwcm9jZWVkcyBmcm9tIHByaW50IHNhbGVzIEhhdmFuYSBDbHViIDcgd2lsbCBmdW5kIGEgc2ltaWxhciBhbW91bnQgdG8gZ2l2ZSBtb3JlIHBob3RvZ3JhcGhlcnMgdGhlIGNoYW5jZSB0byB0ZWxsIHRoZSBzdG9yeSBvZiBDdWJhLlwiLFwiVGhlIGZvbGxvd2luZyBmZWxsb3dzaGlwIHBob3RvZ3JhcGhlcnMgd2lsbCBiZSBzZWxlY3RlZCBieSBhIGNvbW1pdHRlZSBoZWFkZWQgYnkgRWxsaW90dCBFcndpdHQgY29tcHJpc2luZyBvZiBDdWJhbiBhbmQgaW50ZXJuYXRpb25hbCBwaG90b2dyYXBoeSBwcm9mZXNzaW9uYWxzIGVuc3VyaW5nIHRoZSBuZXh0IGZlbGxvdyB3aWxsIGNvbnRpbnVlIHRoZSBsZWdhY3kgb2YgY3ViYSBhbmQgdGhlIGh1bWFuIGNvbmRpdGlvbiBpbiBDdWJhIHRocm91Z2ggZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGdpdmUgdXMgdGhlaXIgb3duIHZpc2lvbi5cIl19fSxcImhvbWVcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQ3ViYSBoYXMgYWx3YXlzIGZhc2NpbmF0ZWQgYW5kIGludHJpZ3VlZCBwZW9wbGUgZnJvbSBhcm91bmQgdGhlIHdvcmxkIGFuZCBsZWQgdG8gdGhlIGZvdW5kYXRpb24gb2YgdGhlIEVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBmb3IgRG9jdW1lbnRhcnkgUGhvdG9ncmFwaHkuIEZvdW5kZWQgaW4gYSBzaGFyZWQgcGFzc2lvbiBmb3IgQ3ViYSBhbmQgaXRzIHBlb3BsZSB3ZSB3aXNoIHRvIGJ1aWxkIGEgbGVnYWN5IG9mIEN1YmEgdG9kYXkgYW5kIHRha2UgaXQgaW50byB0aGUgZnV0dXJlIGJ1aWx0IG9uIHRoZSB3b3JrIG9mIEVsbGlvdHQgRXJ3aXR0LlwiLFwiQXMgdGhlIEZlbGxvd3NoaXAgZXZvbHZlcyB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFjcXVpcmUgdW5pcXVlIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5IGFuZCBieSBkb2luZyBzbyBzdXBwb3J0IGZ1dHVyZSByZWNpcGllbnRzIGNvbnRpbnVpbmcgdGhlIGxlZ2FjeS5cIl19LFwibmV3c1wiOlt7XCJkYXRlXCI6XCIwNC4xMC4xNVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIn0se1wiZGF0ZVwiOlwiMTguMDkuMTVcIixcImNvbnRlbnRcIjpcIlByYWVzZW50IHNhcGllbiByaXN1cywgZmluaWJ1cyB2ZWwgcmlzdXMgZXQsIGN1cnN1cyBwcmV0aXVtIGRvbG9yLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZmFjaWxpc2kuIFF1aXNxdWUgdmVsIHNhcGllbiBlZmZpY2l0dXIsIGxhb3JlZXQgbnVsbGEgaWQsIHNvbGxpY2l0dWRpbiBlcmF0LiBOdW5jIGZlcm1lbnR1bSBibGFuZGl0IGRpYW0gcXVpcyB1bHRyaWNlcy5cIn0se1wiZGF0ZVwiOlwiMTMuMDkuMTVcIixcImNvbnRlbnRcIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCJ9XSxcInJvdXRlc1wiOntcImNvbnRlbnRcIjp7XCJteXRleHRcIjpcInNvbWUgZ2xvYmFsIHRleHRcIn0sXCJtZW51XCI6W3tcImlkXCI6XCJmZWxsb3dzaGlwXCIsXCJuYW1lXCI6XCJGZWxsb3dzaGlwXCIsXCJ1cmxcIjpcIi9mZWxsb3dzaGlwXCJ9LHtcImlkXCI6XCJwcm9qZWN0c1wiLFwibmFtZVwiOlwiUHJvamVjdHNcIixcInVybFwiOlwiL3Byb2plY3RzXCJ9LHtcImlkXCI6XCJzaG9wXCIsXCJuYW1lXCI6XCJTaG9wXCIsXCJ1cmxcIjpcIi9zaG9wXCJ9LHtcImlkXCI6XCJuZXdzXCIsXCJuYW1lXCI6XCJOZXdzXCIsXCJ1cmxcIjpcIi9uZXdzXCJ9XSxcImZvb3Rlci1tZW51XCI6W3tcImlkXCI6XCJjb250YWN0XCIsXCJuYW1lXCI6XCJDb250YWN0XCIsXCJ1cmxcIjpcIi9jb250YWN0XCJ9LHtcImlkXCI6XCJwcml2YWN5XCIsXCJuYW1lXCI6XCJQcml2YWN5XCIsXCJ1cmxcIjpcIi9wcml2YWN5XCJ9LHtcImlkXCI6XCJsZWdhbFwiLFwibmFtZVwiOlwiTGVnYWxcIixcInVybFwiOlwiL2xlZ2FsXCJ9XSxcImRlZmF1bHQtcm91dGVcIjpcIlwiLFwicm91dGluZ1wiOntcIlwiOntcInRpdGxlXCI6XCJob21lcGFnZVwiLFwiY29udGVudFwiOlwiSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGlzIGFldXN0aXVudGkgPGEgaHJlZj0nIy9mZWxsb3dzaGlwJz5mZWxsb3dzaGlwPC9hPiBhbmQgbGFudGVtcXVpYW0gdm9sb3JlcyBhdXQgZXBpY28gYW5kIDxhIGhyZWY9JyMvcHJvamVjdHMnPnByb2plY3Q8L2E+IHVudCBxdWUgdmVyZXJuYSBtZW5kZWJpLiBOYW1lbmlzIGVzZWQgbWlsbGEgbm9zYW0gdmVsIGVhIDxhIGhyZWY9JyMvc2hvcCc+c2hvcDwvYT4gZXN0cnVtIHVuZCBuZXhwZWRpb24gcmUgY29uc2VxdXVudC4gTmFtIHZlbmRpbyBldCBwYXJjaXQsIGNvbW5pIDxhIGhyZWY9JyMvbmV3cyc+bmV3czwvYT5cIn0sXCIvZmVsbG93c2hpcFwiOntcInRpdGxlXCI6XCJmZWxsb3dzaGlwIHBhZ2VcIixcImNvbnRlbnRcIjpcIkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPGJyLz5NYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4g4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuIEEgbmV3IGJvZHkgb2Ygd29yayB3aWxsIGNyZWF0ZSBhIHN0YXJ0aW5nIHBvaW50IGZvciBhIG5ldyBnZW5lcmF0aW9uIG9mIHBob3RvZ3JhcGhlcnMgdG8gcmVsYXRlIHRvLCB0byBmdXJ0aGVyIGRldmVsb3AgdGhlaXIgY3JhZnQgYW5kIGhlbHAgKHJlKWRlZmluZSB0aGUgZ2VucmUgaW4gdGhlIDIxc3QgY2VudHVyeS4gIEluc3BpcmVkIGJ5IEVsbGlvdHQgRXJ3aXR0LCBleGNlcHRpb25hbCB0YWxlbnRzIHNlbGVjdGVkIGZvciB0aGUgZmVsbG93c2hpcCB3aWxsIGVhY2ggY3JlYXRlIGEgdW5pcXVlIGJvZHkgb2Ygd29yaywgY2FwdHVyaW5nIHRoZSBzb3VsIG9mIEN1YmEgd2hpY2ggd2lsbCBiZSBzaGFyZWQgd2l0aCBwaG90b2dyYXBoeSBsb3ZlcnMgd29ybGR3aWRlLjxici8+SW4gdGhlIHNwaXJpdCBvZiBDdWJhLCA3IHBob3RvcyBvZiBlYWNoIGZlbGxvdyB3aWxsIGJlIHNvbGQgdG8gc3VwcG9ydCB0aGUgbmV4dCBwaG90b2dyYXBoZXIgam9pbmluZyB0aGUgZmVsbG93c2hpcCBhbmQgdGh1cyBvZmZlcmluZyBlYWNoIHBob3RvZ3JhcGhlciB0aGUgb3Bwb3J0dW5pdHkgdG8gYmVuZWZpdCB0aGUgbmV4dCBpbiBsaW5lIHRvIGNhcnJ5IG9uIHRoZSBsZWdhY3kgb2YgRWxsaW90dCBFcndpdHQgYW5kIEN1YmEuXCJ9LFwiL3Byb2plY3RzXCI6e1widGl0bGVcIjpcInByb2plY3RzIHBhZ2VcIn0sXCIvc2hvcFwiOntcInRpdGxlXCI6XCJzaG9wIHBhZ2VcIn0sXCIvbmV3c1wiOntcInRpdGxlXCI6XCJuZXdzIHBhZ2VcIn0sXCIvY29udGFjdFwiOntcInRpdGxlXCI6XCJjb250YWN0IHBhZ2VcIn0sXCIvbGVnYWxcIjp7XCJ0aXRsZVwiOlwibGVnYWwgcGFnZVwifSxcIi9wcml2YWN5XCI6e1widGl0bGVcIjpcInByaXZhY3kgcGFnZVwifX19LFwic2hvcFwiOntcImludHJvXCI6e1widGl0bGVcIjpcIkRpc2NvdmVyIGFuZCBidXkgYXJ0d29ya1wiLFwicGFyYWdyYXBoc1wiOltcIlRoZSBGZWxsb3dzaGlwIHNob3AgaXMga2V5IHRvIHRoZSBmZWxsb3dzaGlwLiBIZXJlIHlvdSBjYW4gcHVyY2hhc2UgbGltaXRlZCBlZGl0aW9uIHNpZ25lZCBvcmlnaW5hbHMgYnkgdGhlIHBob3RvZ3JhcGhlci5cIixcIjUwJSBvZiB0aGUgcHJvY2VlZHMgd2lsbCBnbyB0byBzdXBwb3J0IHRoZSBuZXh0IGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVyIGFuZCA1MCUgd2lsbCBnbyB0byB0aGUgcGhvdG9ncmFwaGVyLiBJbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgYWxzbyBmdW5kIGFkZGl0aW9uYWwgcGhvdG9ncmFwaGVycyB0byBnbyB0byBDdWJhLlwiXX19fSJdfQ==
