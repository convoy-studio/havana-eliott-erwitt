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

var _AppConstants = require('./constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _AppStore = require('./stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

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

},{"./components/Cart":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Cart.js","./components/FrontContainer":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/FrontContainer.js","./components/PagesContainer":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/PagesContainer.js","./constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./stores/CartStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/CartStore.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js":[function(require,module,exports){
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
	removeFromCart: function removeFromCart(printId) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].CART_REMOVE,
			printId: printId
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
				ORDERID: '0123456789'
			})
		});
	},

	generatePayButton: function generatePayButton() {
		fetch('./php/hello.php').then(function (response) {
			console.log(response);
			return response.text();
		}).then(function (body) {
			console.log(body);
			// document.body.innerHTML = body
		});
	}

};

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
		// .then(function(response) {
		// 	let prints = JSON.parse(response)
		// 	PrintActions.receiveAll(prints)
		// }).catch(function(error) {
		// 	console.log('request failed', error)
		// })
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _CartActions = require('./../actions/CartActions');

var _CartActions2 = _interopRequireDefault(_CartActions);

var Cart = (function () {
	function Cart(props) {
		_classCallCheck(this, Cart);

		this.props = props;
	}

	_createClass(Cart, [{
		key: 'open',
		value: function open() {
			_CartActions2['default'].updateCartEnabled(true);
		}
	}, {
		key: 'close',
		value: function close() {
			_CartActions2['default'].updateCartEnabled(false);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			var itemLabel = this.props.count > 1 ? 'items' : 'item';

			return _react2['default'].createElement(
				'div',
				{ className: 'cart ' + (this.props.enabled ? 'cart--enabled ' : ' ') + (this.props.visible ? 'cart--visible' : ''), ref: 'cart' },
				_react2['default'].createElement(
					'div',
					{ className: 'cart__count', onClick: this.open },
					'Cart —',
					_react2['default'].createElement(
						'span',
						null,
						this.props.count
					),
					' ',
					itemLabel
				),
				_react2['default'].createElement(
					'div',
					{ className: 'cart__content' },
					_react2['default'].createElement(
						'div',
						{ className: 'cart__close', onClick: this.close },
						'x'
					),
					_react2['default'].createElement(
						'ul',
						{ className: 'payment__products' },
						Object.keys(this.props.products).map(function (id) {
							var product = that.props.products[id];
							return _react2['default'].createElement(
								'li',
								{ key: id, className: 'payment__product' },
								product.city,
								' - ',
								product.year,
								_react2['default'].createElement(
									'div',
									null,
									'quantity: ',
									_react2['default'].createElement(
										'span',
										null,
										product.quantity,
										' (',
										product.serial,
										')'
									)
								),
								_react2['default'].createElement(
									'div',
									{ onClick: that.removeItem.bind(this, id) },
									'Remove item'
								)
							);
						})
					),
					_react2['default'].createElement(
						'div',
						{ className: 'cart__subtotal' },
						'Subtotal: ',
						_react2['default'].createElement(
							'span',
							null,
							this.props.total
						)
					),
					_react2['default'].createElement(
						'a',
						{ href: '#/payment', className: 'cart__checkout' },
						'Check out'
					)
				)
			);
		}
	}, {
		key: 'removeItem',
		value: function removeItem(id) {
			_CartActions2['default'].removeFromCart(id);
		}
	}]);

	return Cart;
})();

exports['default'] = Cart;
module.exports = exports['default'];

},{"./../actions/CartActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/FrontContainer.js":[function(require,module,exports){
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
	}

	_createClass(FrontContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
		}
	}, {
		key: 'render',
		value: function render() {
			var menuData = _AppStore2['default'].menuContent();
			var menuItems = menuData.map(function (item, index) {
				var pathUrl = '#' + item.url;
				return _react2['default'].createElement(
					'li',
					{ className: 'header__item', key: index },
					_react2['default'].createElement(
						'a',
						{ href: pathUrl, className: 'button button--small' },
						item.name
					)
				);
			}).reverse();
			var footerMenuData = _AppStore2['default'].footerMenuContent();
			var footerMenuItems = footerMenuData.map(function (item, index) {
				var pathUrl = '#' + item.url;
				return _react2['default'].createElement(
					'li',
					{ key: index, className: 'button button--right button--small' },
					_react2['default'].createElement(
						'a',
						{ href: pathUrl },
						item.name
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
								{ className: 'heaser__subtitle' },
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
			// Update or highlight parts of interface depends the route
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
				case 'projects':
					type = _Projects2['default'];
					break;
				case 'project':
					if (hash.parts.length > 2) {
						if (hash.parts[2] === 'gallery') {
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

},{"./../../pager/components/BasePager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePager.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./pages/Contact":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js","./pages/Fellowship":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Fellowship.js","./pages/Gallery":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Gallery.js","./pages/Home":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js","./pages/Legal":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Legal.js","./pages/News":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/News.js","./pages/Notfound":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Notfound.js","./pages/Payment":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Payment.js","./pages/Print":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Print.js","./pages/Privacy":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js","./pages/Project":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Project.js","./pages/Projects":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js","./pages/Shop":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js":[function(require,module,exports){
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
					'This is an ',
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

var scroll = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
// IE Fallback, you can even fallback to onscroll
function (callback) {
	window.setTimeout(callback, 1000 / 60);
};

var Fellowship = (function (_Page) {
	_inherits(Fellowship, _Page);

	function Fellowship(props) {
		_classCallCheck(this, Fellowship);

		_get(Object.getPrototypeOf(Fellowship.prototype), 'constructor', this).call(this, props);

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this.state = {
			view: 'biography'
		};
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');
		this.showBiographyBinded = this.showBiography.bind(this);
		this.showInterviewBinded = this.showInterview.bind(this);
		this.rafBinded = this.raf.bind(this);

		this.raf();
	}

	_createClass(Fellowship, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Fellowship.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			var fellowshipData = _AppStore2['default'].fellowshipContent();
			console.log(this.state);

			return _react2['default'].createElement(
				'div',
				{ className: 'page fellowship', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'section',
					{ className: 'fellowship__presentation' },
					_react2['default'].createElement(
						'div',
						{ className: 'video' },
						_react2['default'].createElement('video', { autoPlay: true, loop: true, className: 'video__file', src: './assets/videos/bg-fellowship.mp4' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'fellowship__desc fellowship--text text text--big' },
						Object.keys(fellowshipData.fellowship.paragraphs).map(function (index) {
							return _react2['default'].createElement(
								'p',
								{ className: 'fellowship__paragraph', key: index },
								fellowshipData.fellowship.paragraphs[index]
							);
						})
					),
					_react2['default'].createElement(
						'div',
						{ className: 'fellowship__discover' },
						'Discover Elliott Erwitt\'s biography'
					)
				),
				_react2['default'].createElement(
					'section',
					{ className: 'fellowship__artist' },
					_react2['default'].createElement(
						'div',
						{ className: 'fellowship__background' },
						_react2['default'].createElement('img', { className: 'fellowship__elliott', src: '../assets/images/elliott-erwitt.jpg' })
					),
					(function () {
						if (that.state.view === 'biography') {
							return _react2['default'].createElement(
								'div',
								{ className: 'fellowship__biography fellowship--text text text--medium' },
								Object.keys(fellowshipData.biography.paragraphs).map(function (index) {
									return _react2['default'].createElement(
										'p',
										{ className: 'fellowship__paragraph', key: index },
										fellowshipData.biography.paragraphs[index]
									);
								})
							);
						} else {
							return _react2['default'].createElement(
								'div',
								{ className: 'fellowship__interview' },
								_react2['default'].createElement('video', { autoPlay: true, className: 'fellowship__video', src: './assets/videos/bg-fellowship.mp4' })
							);
						}
					})(),
					_react2['default'].createElement(
						'div',
						{ className: 'fellowship__links' },
						(function () {
							if (that.state.view === 'biography') {
								return _react2['default'].createElement(
									'div',
									{ className: 'fellowship__link button button--center', onClick: that.showInterviewBinded },
									'Video interview'
								);
							} else {
								return _react2['default'].createElement(
									'div',
									{ className: 'fellowship__link button button--center', onClick: that.showBiographyBinded },
									'Biography'
								);
							}
						})(),
						_react2['default'].createElement(
							'a',
							{ href: '#/project/elliott-erwitt', className: 'fellowship__link button button--center' },
							'His project'
						)
					)
				)
			);
		}
	}, {
		key: 'raf',
		value: function raf() {
			if (this.scrollIndex % 3) this.scrollOk = true;else this.scrollOk = true;
			this.scrollIndex++;

			if (this.scrollOk) {
				// let top = window.pageYOffset;
				this.handleScroll();
			}

			scroll(this.rafBinded);
		}
	}, {
		key: 'handleScroll',
		value: function handleScroll() {
			var top = _Utils2['default'].GetScrollTop();

			if (document.querySelector('.fellowship__artist')) {
				document.querySelector('.video__file').style[this.transform] = 'translate(0px, ' + (top / 2 - window.innerHeight / 2) + 'px) translateZ(0)';
				document.querySelector('.fellowship__artist').style[this.transform] = 'translate(0px, ' + -top / 4 + 'px) translateZ(0)';
				document.querySelector('.fellowship__elliott').style[this.transform] = 'translate(0px, ' + -top / 4 + 'px) translateZ(0)';
			}
		}
	}, {
		key: 'showInterview',
		value: function showInterview() {
			this.hideBiography();
			this.setState({
				view: 'interview'
			});
		}
	}, {
		key: 'hideInterview',
		value: function hideInterview() {
			(0, _domquery2['default'])('.fellowship__interview').addClass('fellowship__interview--hidden');
			// TweenMax.to(dom('.fellowship__interview'), 0.4, {opacity: 0});
		}
	}, {
		key: 'showBiography',
		value: function showBiography() {
			this.hideInterview();
			this.setState({
				view: 'biography'
			});
		}
	}, {
		key: 'hideBiography',
		value: function hideBiography() {
			(0, _domquery2['default'])('.fellowship__biography').addClass('fellowship__biography--hidden');
			// console.log('hide bio')
			// TweenMax.to(dom('.fellowship__biography'), 0.4, {opacity: 0});
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
		}
	}]);

	return Fellowship;
})(_Page3['default']);

exports['default'] = Fellowship;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Gallery.js":[function(require,module,exports){
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

var _ = require('lodash');

var Gallery = (function (_Page) {
	_inherits(Gallery, _Page);

	function Gallery(props) {
		_classCallCheck(this, Gallery);

		_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this, props);

		this.props = props;

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.loaded = false;
		this.nImageLoaded = 0;
		this.prints = [];
		this.state = {
			prints: [],
			loadedPrints: []
		};

		_PrintApi2['default'].getByArtist(this.props.idSection);
		_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
	}

	_createClass(Gallery, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Gallery.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'galleryPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu' },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + this.props.idSection },
						'Back to gallery'
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'div',
						{ className: 'gallery' },
						this.state.loadedPrints
					)
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
				_(this.state.prints).forEach(function (print) {
					file = new Image();
					file.onload = that.onImageLoaded.bind(that);
					file.src = './assets/images/prints/' + print.file;
				}).value();
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(params) {
			this.nImageLoaded++;

			if (params.path[0].height >= params.path[0].width * 1.2) {
				this.prints.push(_react2['default'].createElement(
					'div',
					{ className: 'gallery__item', key: this.nImageLoaded },
					_react2['default'].createElement('img', { className: 'gallery__image', src: params.path[0].src })
				));
			} else {
				this.prints.push(_react2['default'].createElement(
					'div',
					{ className: 'gallery__item gallery__item--large', key: this.nImageLoaded },
					_react2['default'].createElement('img', { className: 'gallery__image', src: params.path[0].src })
				));
			}

			if (this.nImageLoaded >= this.max) {
				this.setState({
					'loadedPrints': this.prints
				});
			}
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
			});
		}
	}]);

	return Gallery;
})(_Page3['default']);

exports['default'] = Gallery;
module.exports = exports['default'];

},{"./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js":[function(require,module,exports){
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

var Home = (function (_Page) {
	_inherits(Home, _Page);

	function Home(props) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Home, [{
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			this.tlIn.from(wrapper, 1, { y: window.innerHeight, opacity: 0, ease: Expo.easeInOut });

			// transition Out
			this.tlOut.to(wrapper, 1, { y: window.innerHeight, opacity: 0, ease: Expo.easeInOut });

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'render',
		value: function render() {
			var homeData = _AppStore2['default'].homeContent();
			return _react2['default'].createElement(
				'div',
				{ className: 'page homepage', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'video' },
					_react2['default'].createElement('video', { autoPlay: true, loop: true, className: 'video__file', src: './assets/videos/bg-home.mp4' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'homepage__content' },
					_react2['default'].createElement('p', { className: 'text text--title', dangerouslySetInnerHTML: { __html: homeData.content } })
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Home.prototype), 'componentDidMount', this).call(this);
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
		}
	}]);

	return Home;
})(_Page3['default']);

exports['default'] = Home;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Legal.js":[function(require,module,exports){
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
					'This is an ',
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
			var newsData = _AppStore2['default'].newsContent();
			var newsItems = newsData.map(function (item, index) {
				return _react2['default'].createElement(
					'article',
					{ key: index },
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
			});
			return _react2['default'].createElement(
				'div',
				{ id: 'newsPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'section',
						{ className: 'news' },
						newsItems
					)
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

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

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
				{ id: 'paymentPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'h2',
						null,
						'Payment'
					),
					_react2['default'].createElement(
						'div',
						{ className: 'payment__order' },
						_react2['default'].createElement(
							'h3',
							null,
							'Order summary'
						),
						_react2['default'].createElement(
							'ul',
							{ className: 'payment__products' },
							Object.keys(this.state.cartItems).map(function (index) {
								var product = that.state.cartItems[index];
								return _react2['default'].createElement(
									'li',
									{ key: index, className: 'payment__product' },
									product.city,
									' - ',
									product.year,
									_react2['default'].createElement(
										'div',
										null,
										'quantity: ',
										_react2['default'].createElement(
											'span',
											null,
											product.quantity
										)
									)
								);
							})
						),
						_react2['default'].createElement(
							'div',
							{ className: 'cart__subtotal' },
							'Subtotal: ',
							_react2['default'].createElement(
								'span',
								null,
								this.state.cartTotal
							)
						)
					),
					_react2['default'].createElement(
						'a',
						{ href: '', onClick: this.pay.bind(this) },
						'Proceed to payment'
					)
				)
			);
		}
	}, {
		key: 'pay',
		value: function pay(e) {
			e.preventDefault();

			_(this.state.cartItems).forEach(function (item, index) {
				_PrintApi2['default'].order(index, item.serial);
			}).value();
			// CartApi.pay()
			// CartApi.generatePayButton()
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

var _ = require('lodash');

var Print = (function (_Page) {
	_inherits(Print, _Page);

	function Print(props) {
		_classCallCheck(this, Print);

		_get(Object.getPrototypeOf(Print.prototype), 'constructor', this).call(this, props);

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');

		this._addToCartBinded = this._addToCart.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.state = {
			print: undefined,
			serial: undefined
		};

		_PrintApi2['default'].getOne(this.props.idSection);
		_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
	}

	_createClass(Print, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Print.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var that = this;

			return _react2['default'].createElement(
				'div',
				{ id: 'printPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					(function () {
						if (_this.state.print) return _react2['default'].createElement(
							'div',
							{ className: 'print' },
							_react2['default'].createElement(
								'div',
								{ className: 'serials' },
								(function () {
									if (that.state.print.serials.length > 0) {
										return _react2['default'].createElement(
											'div',
											null,
											_react2['default'].createElement(
												'ul',
												null,
												Object.keys(that.state.print.serials).map(function (index) {
													var serial = that.state.print.serials[index];
													return _react2['default'].createElement(
														'li',
														{ className: serial === that.state.serial ? 'serial serial--enabled' : 'serial', onClick: that._selectSerial.bind(that, serial), key: index },
														serial
													);
												})
											),
											_react2['default'].createElement(
												'a',
												{ href: '#', onClick: that._addToCartBinded },
												'Buy print'
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
							),
							_react2['default'].createElement('img', { src: './assets/images/prints/' + _this.state.print.file }),
							_react2['default'].createElement(
								'h1',
								null,
								_this.state.print.city
							)
						);
					})()
				)
			);
		}
	}, {
		key: '_selectSerial',
		value: function _selectSerial(serial, e) {
			(0, _domquery2['default'])('.serial--enabled').removeClass('serial--enabled');
			(0, _domquery2['default'])(e.target).addClass('serial--enabled');
			this.setState({
				serial: serial
			});
		}
	}, {
		key: '_addToCart',
		value: function _addToCart(e) {
			e.preventDefault();

			var printId = this.state.print._id;
			var update = {
				city: this.state.print.city,
				year: this.state.print.year,
				price: this.state.print.price,
				serial: this.state.serial
			};
			_CartActions2['default'].addToCart(printId, update);
			_CartActions2['default'].updateCartVisible(true);

			var serials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			var index = serials.indexOf(this.state.serial);
			if (index > -1) {
				serials.splice(index, 1);
			}
			console.log(serials);
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
		key: '_onPrintStoreChange',
		value: function _onPrintStoreChange() {
			var _this2 = this;

			this.setState({
				print: _PrintStore2['default'].getOne()
			}, function () {
				_this2.setState({
					serial: _this2.state.print.serials[0]
				});
			});
		}
	}]);

	return Print;
})(_Page3['default']);

exports['default'] = Print;
module.exports = exports['default'];

},{"./../../actions/CartActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/CartActions.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js":[function(require,module,exports){
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
					'This is an ',
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

var _ArtistStore = require('./../../stores/ArtistStore');

var _ArtistStore2 = _interopRequireDefault(_ArtistStore);

var _ArtistApi = require('./../../api/ArtistApi');

var _ArtistApi2 = _interopRequireDefault(_ArtistApi);

var Project = (function (_Page) {
	_inherits(Project, _Page);

	function Project(props) {
		_classCallCheck(this, Project);

		_get(Object.getPrototypeOf(Project.prototype), 'constructor', this).call(this, props);

		this.props = props;

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this.state = {
			artist: undefined,
			prints: {}
		};

		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);

		_ArtistApi2['default'].getBySlug(this.props.idSection);
		_ArtistStore2['default'].addChangeListener(this._onArtistStoreChangeBinded);

		_PrintApi2['default'].getByArtist(this.props.idSection);
		_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Project.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ArtistStore2['default'].removeChangeListener(this._onArtistStoreChangeBinded);
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			// let content = AppStore.pageContent(),
			// 	artistData = AppStore.artistContent(this.props.idSection),
			// 	project = artistData.projects[0],
			// 	photos = [],
			// 	file = undefined
			// for (let i=1; i<=project.nPhotos; ++i) {
			// 	file = (i<10)?'0'+i:i
			// 	photos.push(<div className='project__photo' key={i}><img src={'./assets/images/albums/'+project.album+'/'+file+'.jpg'}></img></div>)
			// }

			var that = this;
			var name = undefined,
			    bio = undefined,
			    projectTitle = undefined,
			    projectDesc = undefined;
			if (this.state.artist) {
				name = this.state.artist.name;
				bio = this.state.artist.bio;
				projectTitle = this.state.artist.project.title;
				projectDesc = this.state.artist.project.desc;
			}

			return _react2['default'].createElement(
				'div',
				{ id: 'page', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu' },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + this.props.idSection + '/gallery' },
						'Contact sheet'
					)
				),
				_react2['default'].createElement(
					'section',
					{ className: 'project' },
					_react2['default'].createElement(
						'h2',
						{ className: 'project__artist' },
						name
					),
					_react2['default'].createElement(
						'p',
						{ className: 'project__desc text text--medium' },
						projectDesc
					),
					_react2['default'].createElement(
						'div',
						{ className: 'project__album' },
						Object.keys(this.state.prints).map(function (index) {
							var file = that.state.prints[index].file;
							return _react2['default'].createElement(
								'div',
								{ className: 'project__photo', key: index },
								_react2['default'].createElement('img', { src: './assets/images/prints/' + file })
							);
						})
					)
				)
			);
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
				artist: _ArtistStore2['default'].getOne()
			});
		}
	}, {
		key: '_onPrintStoreChange',
		value: function _onPrintStoreChange() {
			this.setState({
				prints: _PrintStore2['default'].getArtistPrints()
			});
		}
	}]);

	return Project;
})(_Page3['default']);

exports['default'] = Project;
module.exports = exports['default'];

},{"./../../actions/AppActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js","./../../api/ArtistApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/ArtistApi.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/ArtistStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/ArtistStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js":[function(require,module,exports){
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

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this._onStoreChangeBinded = this._onStoreChange.bind(this);
		this.state = {
			artists: {}
		};

		_ArtistApi2['default'].getAll();
		_ArtistStore2['default'].addChangeListener(this._onStoreChangeBinded);
	}

	_createClass(Projects, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Projects.prototype), 'componentDidMount', this).call(this);
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
				{ className: 'page projects', ref: 'page-wrapper' },
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
								{ key: index, className: 'projects__item button' },
								_react2['default'].createElement(
									'a',
									{ href: '#/project/' + artist.slug },
									artist.name
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

var Shop = (function (_Page) {
	_inherits(Shop, _Page);

	function Shop(props) {
		_classCallCheck(this, Shop);

		_get(Object.getPrototypeOf(Shop.prototype), 'constructor', this).call(this, props);

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.state = {
			photos: {}
		};

		_PrintApi2['default'].getAll();
		_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
	}

	_createClass(Shop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Shop.prototype), 'componentDidMount', this).call(this);
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

			return _react2['default'].createElement(
				'div',
				{ id: 'shopPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'div',
						{ className: 'shop' },
						Object.keys(this.state.photos).map(function (index) {
							var file = that.state.photos[index].file;
							var id = that.state.photos[index]._id;
							return _react2['default'].createElement(
								'div',
								{ className: 'shop__print', key: index },
								_react2['default'].createElement(
									'a',
									{ href: '#/shop/' + id },
									_react2['default'].createElement('img', { src: './assets/images/prints/' + file })
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
			this.setState({
				photos: _PrintStore2['default'].getAll()
			});
		}
	}]);

	return Shop;
})(_Page3['default']);

exports['default'] = Shop;
module.exports = exports['default'];

},{"./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/config.js":[function(require,module,exports){
'use strict';

var config = {
	'siteurl': 'http://localhost:9000'
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
	RECEIVE_ARTIST_PRINTS: 'RECEIVE_ARTIST_PRINTS',
	RECEIVE_PRINT: 'RECEIVE_PRINT',
	ERROR: 'ERROR'
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

			var gallerySection = _crossroads2['default'].addRoute('project/{id}/gallery', this._onProjectURLHandler.bind(this), 3);
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
			_AppActions2['default'].pageHasherChanged(targetId);
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

function _pageRouteIdChanged(id) {}
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
				_pageRouteIdChanged(action.item);
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
var _products = {},
    _cartVisible = true,
    _cartEnabled = false;

// Add product to cart
function _add(printId, update) {
	update.quantity = printId in _products ? _products[printId].quantity + 1 : 1;
	_products[printId] = _.extend({}, _products[printId], update);
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
function _removeItem(printId) {
	delete _products[printId];
}

var CartStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
	getCartItems: function getCartItems() {
		return _products;
	},
	getCartCount: function getCartCount() {
		return Object.keys(_products).length;
	},
	getCartTotal: function getCartTotal() {
		var total = 0;
		for (var product in _products) {
			if (_products.hasOwnProperty(product)) {
				total += _products[product].price * _products[product].quantity;
			}
		}
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
				_removeItem(action.printId);
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

var CHANGE_EVENT = 'change';

var _prints = {};
var _artistPrints = {};
var _print = {};

function _addPrints(prints) {
	prints.forEach(function (print) {
		// change forEach to lodash
		if (!_prints[print._id]) {
			_prints[print._id] = print;
		}
	});
}

function _addArtistPrints(prints) {
	prints.forEach(function (print) {
		// change forEach to lodash
		if (!_artistPrints[print._id]) {
			_artistPrints[print._id] = print;
		}
	});
}

var PrintStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
	getAll: function getAll() {
		return _prints;
	},
	getArtistPrints: function getArtistPrints() {
		return _artistPrints;
	},
	getOne: function getOne() {
		return _print;
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
			case _PrintConstants2['default'].RECEIVE_ALL_PRINTS:
				_addPrints(action.item);
				PrintStore.emitChange();
				break;
			case _PrintConstants2['default'].RECEIVE_ARTIST_PRINTS:
				_addArtistPrints(action.item);
				PrintStore.emitChange();
				break;
			case _PrintConstants2['default'].RECEIVE_PRINT:
				_print = action.item;
				PrintStore.emitChange();
				break;
		}
		return true;
	})
});

exports['default'] = PrintStore;
module.exports = exports['default'];

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../constants/PrintConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/PrintConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","eventemitter2":"eventemitter2","object-assign":"object-assign"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Autobind.js":[function(require,module,exports){
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
	}]);

	return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];

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
				_react2['default'].createElement('div', { style: this.divStyle, ref: 'page-a' }),
				_react2['default'].createElement('div', { style: this.divStyle, ref: 'page-b' })
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

},{"./../Pager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/Pager.js","lodash/String/capitalize":"/Users/nicolas/Developement/freelance/Havana/node_modules/lodash/String/capitalize.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/www/data/data.json":[function(require,module,exports){
module.exports={"artists":{"elliott-erwitt":{"name":"Elliott Erwitt","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Cuba 1964","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"elliott-erwitt","nPhotos":8}]},"qiu-yang":{"name":"Qiu Yang","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"qiu-yang","nPhotos":6}]},"philip-sinden":{"name":"Philip Sinden","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 2","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"philip-sinden","nPhotos":4}]},"jack-duet":{"name":"Jack Duet","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 3","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"jack-duet","nPhotos":0}]}},"fellowship":{"fellowship":{"paragraphs":["A fellowship is a communion of people sharing a common interest. The elliott erwitt havana club 7 fellows aim to leave an undying legacy to the world and to be able to witness its past by documenting the essence of an untouched land, a country that stands still in the late 1950’s revolution.","The fellowship will have a legacy like none other, led by a man whose work has inspired and guided the most prestigious documentary photography agency, magnum. With a storied style, erwitt goes back to the island that gave him one of his most storied assignments.","He will then head a committee of photography’s greatest minds to choose today’s greatest talents and let them explore the human condition in cuba through documentary photography and give us their own vision."]},"biography":{"paragraphs":["Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.","Born in Paris in 1928 to Russian parents, Erwitt moved to the US with his family\u2028in 1939 and it was there that he met Edward Steichen and Roy Stryker. Recruited to Magnum Photos by Robert Capa in 1953 Erwitt has been a member of the prestigious agency ever since and has served several terms as its president. ","To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs."]}},"home":{"content":"Cuba fascinates and intrigues. Havana Club 7 bottles the soul of the island and ships it across the world. In 1964, Elliott Erwitt followed the cuban revolution. Today, he helms a <a href='#/fellowship'>fellowship</a> to capture the cuban renaissance. Our <a href='#/projects'>project</a> will help his endeavor. You can acquire original prints on our <a href='#/shop'>shop</a> and contribute to this experiment’s sustainability."},"news":[{"date":"04.10.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"18.09.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."}],"routes":{"content":{"mytext":"some global text"},"menu":[{"id":"fellowship","name":"Fellowship","url":"/fellowship"},{"id":"projects","name":"Projects","url":"/projects"},{"id":"shop","name":"Shop","url":"/shop"},{"id":"news","name":"News","url":"/news"}],"footer-menu":[{"id":"contact","name":"Contact","url":"/contact"},{"id":"privacy","name":"Privacy","url":"/privacy"},{"id":"legal","name":"Legal","url":"/legal"}],"default-route":"","routing":{"":{"title":"homepage","content":"Havana Club 7 Fellowship is aeustiunti <a href='#/fellowship'>fellowship</a> and lantemquiam volores aut epico and <a href='#/projects'>project</a> unt que vererna mendebi. Namenis esed milla nosam vel ea <a href='#/shop'>shop</a> estrum und nexpedion re consequunt. Nam vendio et parcit, comni <a href='#/news'>news</a>"},"/fellowship":{"title":"fellowship page","content":"In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.<br/>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again – this time to initiate the fellowship with Havana Club 7. A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.<br/>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy of Elliott Erwitt and Cuba."},"/projects":{"title":"projects page"},"/shop":{"title":"shop page"},"/news":{"title":"news page"},"/contact":{"title":"contact page"},"/legal":{"title":"legal page"},"/privacy":{"title":"privacy page"}}}}
},{}]},{},["/Users/nicolas/Developement/freelance/Havana/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hY3Rpb25zL0FydGlzdEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvQ2FydEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvUHJpbnRBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQXJ0aXN0QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQ2FydEFwaS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYXBpL1ByaW50QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0NhcnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Db250YWN0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0ZlbGxvd3NoaXAuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvR2FsbGVyeS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Ib21lLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0xlZ2FsLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL05ld3MuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTm90Zm91bmQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUGF5bWVudC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9QcmludC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcml2YWN5LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1Byb2plY3QuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU2hvcC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29uZmlnLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQXJ0aXN0Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQ2FydENvbnN0YW50cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29uc3RhbnRzL1ByaW50Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zZXJ2aWNlcy9HbG9iYWxFdmVudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zdG9yZXMvQXJ0aXN0U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9DYXJ0U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9QcmludFN0b3JlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvVXRpbHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL3JhZi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlci5qcyIsInd3dy9kYXRhL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7bUJDYmdCLEtBQUs7Ozs7b0JBQ0EsTUFBTTs7OztxQkFDVCxPQUFPOzs7O21CQUNULEtBQUs7Ozs7eUJBQ0MsV0FBVzs7OztBQUVqQyw0QkFBVSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7OztBQUd4QixJQUFJLEdBQUcsR0FBRyxzQkFBUyxDQUFBO0FBQ25CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O3dCQ1ZXLFVBQVU7Ozs7MEJBQ1IsWUFBWTs7OzsyQkFDWCxhQUFhOzs7O3FCQUNuQixPQUFPOzs7O3NCQUNOLFFBQVE7Ozs7NEJBQ1AsY0FBYzs7OztJQUU1QixHQUFHO0FBQ0csVUFETixHQUFHLEdBQ007d0JBRFQsR0FBRztFQUVQOztjQUZJLEdBQUc7O1NBR0osZ0JBQUc7O0FBRU4sT0FBSSxNQUFNLEdBQUcseUJBQVksQ0FBQTtBQUN6QixTQUFN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QUcsbUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtBQUNoRSxPQUFJLEtBQUssR0FBRyxtQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtBQUM1RCxRQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7QUFDdEIsUUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0dBQ3RCOzs7U0FFZSwwQkFBQyxHQUFHLEVBQUU7QUFDckIsT0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUN0QyxRQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7QUFDdEMsUUFBSSxXQUFXLEdBQUcsbUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNsRCx1QkFBTSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6QztHQUNEOzs7U0FFbUIsZ0NBQUc7QUFDdEIscUJBQVcsR0FBRyxDQUFDLHNCQUFlLGtCQUFrQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzVFLHFCQUFXLEdBQUcsQ0FBQyxzQkFBZSxtQkFBbUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUM5RSxPQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDdEMsT0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0dBQ3RDOzs7UUE1Rm1CLFNBQVM7R0FBUyxtQkFBTSxTQUFTOztxQkFBakMsU0FBUzs7OztBQ0o5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgKHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBBcHAgZnJvbSAnQXBwJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgUGFnZXIgZnJvbSAnUGFnZXInXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBGYXN0Q2xpY2sgZnJvbSAnZmFzdGNsaWNrJ1xuXG5GYXN0Q2xpY2soZG9jdW1lbnQuYm9keSlcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0Ly8gSW5pdCByb3V0ZXJcblx0XHR2YXIgcm91dGVyID0gbmV3IFJvdXRlcigpXG5cdFx0cm91dGVyLmluaXQoKVxuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cdFx0XG5cdFx0Ly8gUmVuZGVyIHJlYWN0XG5cdFx0UmVhY3QucmVuZGVyKFxuXHRcdFx0PEFwcFRlbXBsYXRlIC8+LFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuICAgIFx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBGcm9udENvbnRhaW5lciBmcm9tICdGcm9udENvbnRhaW5lcidcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICdQYWdlc0NvbnRhaW5lcidcbmltcG9ydCBDYXJ0IGZyb20gJ0NhcnQnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKSxcblx0XHRjYXJ0VmlzaWJsZTogQ2FydFN0b3JlLmdldENhcnRWaXNpYmxlKCksXG5cdFx0Y2FydEVuYWJsZWQ6IENhcnRTdG9yZS5nZXRDYXJ0RW5hYmxlZCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cblx0XHRDYXJ0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRDYXJ0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3RlbXBsYXRlJz5cblx0XHRcdFx0PEZyb250Q29udGFpbmVyIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciAvPlxuXHRcdFx0XHQ8Q2FydFxuXHRcdFx0XHRcdHByb2R1Y3RzPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRJdGVtcyA6ICcnfVxuXHRcdFx0XHRcdGNvdW50PXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRDb3VudCA6ICcnfVxuXHRcdFx0XHRcdHRvdGFsPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRUb3RhbCA6ICcnfVxuXHRcdFx0XHRcdHZpc2libGU9eyh0aGlzLnN0YXRlKSA/IHRoaXMuc3RhdGUuY2FydFZpc2libGUgOiAnJ31cblx0XHRcdFx0XHRlbmFibGVkPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRFbmFibGVkIDogJyd9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRHbG9iYWxFdmVudHMucmVzaXplKClcblx0fVxuXG5cdF9vblN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cbn1cbiIsImltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcblxudmFyIEFwcEFjdGlvbnMgPSB7XG4gICAgcGFnZUhhc2hlckNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2VJZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsXG4gICAgICAgICAgICBpdGVtOiBwYWdlSWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgd2luZG93UmVzaXplOiBmdW5jdGlvbih3aW5kb3dXLCB3aW5kb3dIKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSxcbiAgICAgICAgICAgIGl0ZW06IHsgd2luZG93Vzp3aW5kb3dXLCB3aW5kb3dIOndpbmRvd0ggfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IEFydGlzdENvbnN0YW50cyBmcm9tICdBcnRpc3RDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIEFydGlzdEFjdGlvbnMgPSB7XG5cbiAgICByZWNlaXZlQWxsIDogZnVuY3Rpb24oYXJ0aXN0cyl7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FMTF9BUlRJU1RTLFxuICAgICAgICAgICAgaXRlbTogYXJ0aXN0c1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVjZWl2ZSA6IGZ1bmN0aW9uKGFydGlzdCl7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FSVElTVCxcbiAgICAgICAgICAgIGl0ZW06IGFydGlzdFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVjZWl2ZUVycm9yIDogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuRVJST1IsXG4gICAgICAgICAgICBpdGVtOiBlcnJvclxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0QWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IENhcnRDb25zdGFudHMgZnJvbSAnQ2FydENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgJ2ZldGNoJ1xuXG52YXIgQ2FydEFjdGlvbnMgPSB7XG5cblx0Ly8gUmVjZWl2ZSBpbml0YWwgcHJvZHVjdCBkYXRhXG5cdHJlY2VpdmVQcm9kdWN0OiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5SRUNFSVZFX0RBVEEsXG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fSlcblx0fSxcblxuXHQvLyBTZXQgY3VycmVudGx5IHNlbGVjdGVkIHByb2R1Y3QgdmFyaWF0aW9uXG5cdHNlbGVjdFByb2R1Y3Q6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5TRUxFQ1RfUFJPRFVDVCxcblx0XHRcdGRhdGE6IGluZGV4XG5cdFx0fSlcblx0fSxcblxuXHQvLyBBZGQgaXRlbSB0byBjYXJ0XG5cdGFkZFRvQ2FydDogZnVuY3Rpb24ocHJpbnRJZCwgdXBkYXRlKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX0FERCxcblx0XHRcdHByaW50SWQ6IHByaW50SWQsXG5cdFx0XHR1cGRhdGU6IHVwZGF0ZVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5cdHJlbW92ZUZyb21DYXJ0OiBmdW5jdGlvbihwcmludElkKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX1JFTU9WRSxcblx0XHRcdHByaW50SWQ6IHByaW50SWRcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFVwZGF0ZSBjYXJ0IHZpc2liaWxpdHkgc3RhdHVzXG5cdHVwZGF0ZUNhcnRWaXNpYmxlOiBmdW5jdGlvbihjYXJ0VmlzaWJsZSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9WSVNJQkxFLFxuXHRcdFx0Y2FydFZpc2libGU6IGNhcnRWaXNpYmxlXG5cdFx0fSlcblx0fSxcblxuXHQvLyBVcGRhdGUgY2FydCBlbmFibGVkIHN0YXR1c1xuXHR1cGRhdGVDYXJ0RW5hYmxlZDogZnVuY3Rpb24oY2FydEVuYWJsZWQpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfRU5BQkxFRCxcblx0XHRcdGNhcnRFbmFibGVkOiBjYXJ0RW5hYmxlZFxuXHRcdH0pXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0QWN0aW9uc1xuXG5cblx0ICBcbiIsImltcG9ydCBQcmludENvbnN0YW50cyBmcm9tICdQcmludENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgJ2ZldGNoJ1xuXG52YXIgUHJpbnRBY3Rpb25zID0ge1xuXG5cdHJlY2VpdmVBbGwgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX1BSSU5UUyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVGcm9tQXJ0aXN0IDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlQsXG5cdFx0XHRpdGVtOiBwcmludFxuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5FUlJPUixcblx0XHRcdGl0ZW06IGVycm9yXG5cdFx0fSk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmludEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgQXJ0aXN0QWN0aW9ucyBmcm9tICdBcnRpc3RBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9hcnRpc3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRBcnRpc3RBY3Rpb25zLnJlY2VpdmVBbGwoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlTbHVnIDogZnVuY3Rpb24oc2x1Zykge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvYXJ0aXN0LycgKyBzbHVnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdEFydGlzdEFjdGlvbnMucmVjZWl2ZShqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdHBheSA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKCdodHRwczovL3NlY3VyZS10ZXN0LmJlMmJpbGwuY29tL2Zyb250L2Zvcm0vcHJvY2VzcycsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ly8gaGVhZGVyczoge1xuXHRcdFx0XHQvLyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHQvLyB9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuXHRcdFx0XHRPUkRFUklEOiAnMDEyMzQ1Njc4OSdcblx0XHRcdH0pXG5cdFx0fSlcblx0fSxcblxuXHRnZW5lcmF0ZVBheUJ1dHRvbiA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKCcuL3BocC9oZWxsby5waHAnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS50ZXh0KClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oYm9keSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhib2R5KVxuXHRcdFx0XHQvLyBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGJvZHlcblx0XHRcdH0pXG5cdH1cblxufTsiLCJpbXBvcnQgUHJpbnRBY3Rpb25zIGZyb20gJ1ByaW50QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdGdldEFsbCA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUFsbChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0XHRcdC8vIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHQvLyBcdGxldCBwcmludHMgPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuXHRcdFx0Ly8gXHRQcmludEFjdGlvbnMucmVjZWl2ZUFsbChwcmludHMpXG5cdFx0XHQvLyB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQnLCBlcnJvcilcblx0XHRcdC8vIH0pXG5cdH0sXG5cblx0Z2V0QnlBcnRpc3QgOiBmdW5jdGlvbihhcnRpc3QpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy8nICsgYXJ0aXN0KVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlRnJvbUFydGlzdChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRPbmUgOiBmdW5jdGlvbihpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnQvJyArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdG9yZGVyIDogZnVuY3Rpb24oaWQsIHNlcmlhbCkge1xuXHRcdGNvbnNvbGUubG9nKHNlcmlhbClcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50LycgKyBpZCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdzZXJpYWwnIDogc2VyaWFsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblx0Y3JlYXRlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdwcmludCcgOiBwcmludFxuXHRcdFx0fSlcblx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRydWUpXG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZChmYWxzZSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgaXRlbUxhYmVsID0gKHRoaXMucHJvcHMuY291bnQgPiAxKSA/ICdpdGVtcycgOiAnaXRlbSdcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J2NhcnQgJyArICh0aGlzLnByb3BzLmVuYWJsZWQgPyAnY2FydC0tZW5hYmxlZCAnIDogJyAnKSArICh0aGlzLnByb3BzLnZpc2libGUgPyAnY2FydC0tdmlzaWJsZScgOiAnJyl9IHJlZj0nY2FydCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb3VudCcgb25DbGljaz17dGhpcy5vcGVufT5DYXJ0IOKAlDxzcGFuPnt0aGlzLnByb3BzLmNvdW50fTwvc3Bhbj4ge2l0ZW1MYWJlbH08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jbG9zZScgb25DbGljaz17dGhpcy5jbG9zZX0+eDwvZGl2PlxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3BheW1lbnRfX3Byb2R1Y3RzJz5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnByb2R1Y3RzKS5tYXAoZnVuY3Rpb24oaWQpe1xuXHRcdFx0XHRcdFx0XHRsZXQgcHJvZHVjdCA9IHRoYXQucHJvcHMucHJvZHVjdHNbaWRdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9J3BheW1lbnRfX3Byb2R1Y3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuY2l0eX0gLSB7cHJvZHVjdC55ZWFyfVxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5xdWFudGl0eTogPHNwYW4+e3Byb2R1Y3QucXVhbnRpdHl9ICh7cHJvZHVjdC5zZXJpYWx9KTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhhdC5yZW1vdmVJdGVtLmJpbmQodGhpcywgaWQpfT5SZW1vdmUgaXRlbTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3N1YnRvdGFsJz5TdWJ0b3RhbDogPHNwYW4+e3RoaXMucHJvcHMudG90YWx9PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdDxhIGhyZWY9JyMvcGF5bWVudCcgY2xhc3NOYW1lPSdjYXJ0X19jaGVja291dCc+Q2hlY2sgb3V0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHJlbW92ZUl0ZW0oaWQpIHtcblx0XHRDYXJ0QWN0aW9ucy5yZW1vdmVGcm9tQ2FydChpZClcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdCYXNlQ29tcG9uZW50J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IG1lbnVEYXRhID0gQXBwU3RvcmUubWVudUNvbnRlbnQoKVxuXHRcdGxldCBtZW51SXRlbXMgPSBtZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0bGV0IHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdoZWFkZXJfX2l0ZW0nIGtleT17aW5kZXh9PjxhIGhyZWY9e3BhdGhVcmx9IGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tc21hbGwnPntpdGVtLm5hbWV9PC9hPjwvbGk+XG5cdFx0XHQpXG5cdFx0fSkucmV2ZXJzZSgpXG5cdFx0bGV0IGZvb3Rlck1lbnVEYXRhID0gQXBwU3RvcmUuZm9vdGVyTWVudUNvbnRlbnQoKVxuXHRcdGxldCBmb290ZXJNZW51SXRlbXMgPSBmb290ZXJNZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0bGV0IHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uLS1yaWdodCBidXR0b24tLXNtYWxsJz48YSBocmVmPXtwYXRoVXJsfT57aXRlbS5uYW1lfTwvYT48L2xpPlxuXHRcdFx0KVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nZnJvbnRDb250YWluZXInIGNsYXNzTmFtZT0nZnJvbnQtY29udGFpbmVyJyByZWY9J2Zyb250LWNvbnRhaW5lcic+XG5cdFx0XHRcdDxoZWFkZXIgaWQ9J2hlYWRlcicgY2xhc3NOYW1lPSdoZWFkZXInPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2hlYWRlcl9fdGl0bGUnPjxhIGhyZWY9JyMvJz5FbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3PGRpdiBjbGFzc05hbWU9J2hlYXNlcl9fc3VidGl0bGUnPkZlbGxvd3NoaXA8L2Rpdj48L2E+PC9oMT5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0naGVhZGVyX19tZW51Jz5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2hlYWRlcl9fbGlzdCc+XG5cdFx0XHRcdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PGZvb3RlciBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J2Zvb3Rlcic+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e2Zvb3Rlck1lbnVJdGVtc31cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0Ly8gVXBkYXRlIG9yIGhpZ2hsaWdodCBwYXJ0cyBvZiBpbnRlcmZhY2UgZGVwZW5kcyB0aGUgcm91dGVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJ0Jhc2VQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRzdXBlci5zZXR1cEFuaW1hdGlvbnMoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IEZlbGxvd3NoaXAgZnJvbSAnRmVsbG93c2hpcCdcbmltcG9ydCBQcm9qZWN0cyBmcm9tICdQcm9qZWN0cydcbmltcG9ydCBQcm9qZWN0IGZyb20gJ1Byb2plY3QnXG5pbXBvcnQgR2FsbGVyeSBmcm9tICdHYWxsZXJ5J1xuaW1wb3J0IFNob3AgZnJvbSAnU2hvcCdcbmltcG9ydCBQcmludCBmcm9tICdQcmludCdcbmltcG9ydCBOZXdzIGZyb20gJ05ld3MnXG5pbXBvcnQgUGF5bWVudCBmcm9tICdQYXltZW50J1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnQ29udGFjdCdcbmltcG9ydCBMZWdhbCBmcm9tICdMZWdhbCdcbmltcG9ydCBQcml2YWN5IGZyb20gJ1ByaXZhY3knXG5pbXBvcnQgTm90Zm91bmQgZnJvbSAnTm90Zm91bmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VzQ29udGFpbmVyIGV4dGVuZHMgQmFzZVBhZ2VyIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdGxldCBoYXNoID0gUm91dGVyLmdldE5ld0hhc2goKVxuXHRcdGxldCB0eXBlID0gdW5kZWZpbmVkXG5cdFx0bGV0IGlkID0gdW5kZWZpbmVkXG5cblx0XHRzd2l0Y2goaGFzaC5wYXJlbnQpIHtcblx0XHRcdGNhc2UgJyc6XG5cdFx0XHRcdHR5cGUgPSBIb21lXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmZWxsb3dzaGlwJzpcblx0XHRcdFx0dHlwZSA9IEZlbGxvd3NoaXBcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Byb2plY3RzJzpcblx0XHRcdFx0dHlwZSA9IFByb2plY3RzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwcm9qZWN0Jzpcblx0XHRcdFx0aWYgKGhhc2gucGFydHMubGVuZ3RoID4gMikge1xuXHRcdFx0XHRcdGlmIChoYXNoLnBhcnRzWzJdID09PSAnZ2FsbGVyeScpIHtcblx0XHRcdFx0XHRcdHR5cGUgPSBHYWxsZXJ5XG5cdFx0XHRcdFx0XHRpZCA9IGhhc2gudGFyZ2V0SWRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gem9vbSBzdXIgdW5lIHBob3RvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSBQcm9qZWN0XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Nob3AnOlxuXHRcdFx0XHRpZiAoaGFzaC5wYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0dHlwZSA9IFByaW50XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9IFNob3Bcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbmV3cyc6XG5cdFx0XHRcdHR5cGUgPSBOZXdzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwYXltZW50Jzpcblx0XHRcdFx0dHlwZSA9IFBheW1lbnRcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnRhY3QnOlxuXHRcdFx0XHR0eXBlID0gQ29udGFjdFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbGVnYWwnOlxuXHRcdFx0XHR0eXBlID0gTGVnYWxcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3ByaXZhY3knOlxuXHRcdFx0XHR0eXBlID0gUHJpdmFjeVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9IE5vdGZvdW5kXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXBOZXdDb21wb25lbnQoaGFzaC5wYXJlbnQsIHR5cGUsIGlkKVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2NvbnRhY3RQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFRoaXMgaXMgYW4ge2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xubGV0IHNjcm9sbCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0IHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQgLy8gSUUgRmFsbGJhY2ssIHlvdSBjYW4gZXZlbiBmYWxsYmFjayB0byBvbnNjcm9sbFxuXHRcdFx0IGZ1bmN0aW9uKGNhbGxiYWNrKXsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAvNjApIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVsbG93c2hpcCBleHRlbmRzIFBhZ2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZXc6ICdiaW9ncmFwaHknXG5cdFx0fVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cdFx0dGhpcy5zaG93QmlvZ3JhcGh5QmluZGVkID0gdGhpcy5zaG93QmlvZ3JhcGh5LmJpbmQodGhpcylcblx0XHR0aGlzLnNob3dJbnRlcnZpZXdCaW5kZWQgPSB0aGlzLnNob3dJbnRlcnZpZXcuYmluZCh0aGlzKVxuXHRcdHRoaXMucmFmQmluZGVkID0gdGhpcy5yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdHRoaXMucmFmKClcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgZmVsbG93c2hpcERhdGEgPSBBcHBTdG9yZS5mZWxsb3dzaGlwQ29udGVudCgpXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBmZWxsb3dzaGlwJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19wcmVzZW50YXRpb24nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XG5cdFx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9J3ZpZGVvX19maWxlJyBzcmM9Jy4vYXNzZXRzL3ZpZGVvcy9iZy1mZWxsb3dzaGlwLm1wNCc+PC92aWRlbz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fZGVzYyBmZWxsb3dzaGlwLS10ZXh0IHRleHQgdGV4dC0tYmlnJz5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhmZWxsb3dzaGlwRGF0YS5mZWxsb3dzaGlwLnBhcmFncmFwaHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX3BhcmFncmFwaCcga2V5PXtpbmRleH0+e2ZlbGxvd3NoaXBEYXRhLmZlbGxvd3NoaXAucGFyYWdyYXBoc1tpbmRleF19PC9wPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fZGlzY292ZXInPkRpc2NvdmVyIEVsbGlvdHQgRXJ3aXR0J3MgYmlvZ3JhcGh5PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2FydGlzdCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2JhY2tncm91bmQnPlxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2VsbGlvdHQnIHNyYz0nLi4vYXNzZXRzL2ltYWdlcy9lbGxpb3R0LWVyd2l0dC5qcGcnIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhhdC5zdGF0ZS52aWV3ID09PSAnYmlvZ3JhcGh5JykgeyByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYmlvZ3JhcGh5IGZlbGxvd3NoaXAtLXRleHQgdGV4dCB0ZXh0LS1tZWRpdW0nPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhmZWxsb3dzaGlwRGF0YS5iaW9ncmFwaHkucGFyYWdyYXBocykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19wYXJhZ3JhcGgnIGtleT17aW5kZXh9PntmZWxsb3dzaGlwRGF0YS5iaW9ncmFwaHkucGFyYWdyYXBoc1tpbmRleF19PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9IGVsc2UgeyByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmVsbG93c2hpcF9faW50ZXJ2aWV3Jz5cblx0XHRcdFx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX192aWRlbycgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctZmVsbG93c2hpcC5tcDQnPjwvdmlkZW8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR9KSgpfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19saW5rcyc+XG5cdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuc3RhdGUudmlldyA9PT0gJ2Jpb2dyYXBoeScpIHsgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fbGluayBidXR0b24gYnV0dG9uLS1jZW50ZXInIG9uQ2xpY2s9e3RoYXQuc2hvd0ludGVydmlld0JpbmRlZH0+VmlkZW8gaW50ZXJ2aWV3PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCl9IGVsc2UgeyByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19saW5rIGJ1dHRvbiBidXR0b24tLWNlbnRlcicgb25DbGljaz17dGhhdC5zaG93QmlvZ3JhcGh5QmluZGVkfT5CaW9ncmFwaHk8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHQ8YSBocmVmPScjL3Byb2plY3QvZWxsaW90dC1lcndpdHQnIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fbGluayBidXR0b24gYnV0dG9uLS1jZW50ZXInPkhpcyBwcm9qZWN0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHJhZigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGxJbmRleCAlIDMpIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXgrK1xuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsT2spIHtcblx0XHRcdC8vIGxldCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0XHR0aGlzLmhhbmRsZVNjcm9sbCgpXG5cdFx0fVxuXG5cdFx0c2Nyb2xsKHRoaXMucmFmQmluZGVkKTtcblx0fVxuXG5cdGhhbmRsZVNjcm9sbCgpIHtcblx0XHRsZXQgdG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHRcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX2ZpbGUnKS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrICgodG9wLzIpLSh3aW5kb3cuaW5uZXJIZWlnaHQvMikpICsncHgpIHRyYW5zbGF0ZVooMCknKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19hcnRpc3QnKS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrICgtdG9wLzQpICsncHgpIHRyYW5zbGF0ZVooMCknKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19lbGxpb3R0Jykuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyAoLXRvcC80KSArJ3B4KSB0cmFuc2xhdGVaKDApJyk7XG5cdFx0fVxuXHR9XG5cblx0c2hvd0ludGVydmlldygpIHtcblx0XHR0aGlzLmhpZGVCaW9ncmFwaHkoKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmlldzogJ2ludGVydmlldydcblx0XHR9KVxuXHR9XG5cblx0aGlkZUludGVydmlldygpIHtcblx0XHRkb20oJy5mZWxsb3dzaGlwX19pbnRlcnZpZXcnKS5hZGRDbGFzcygnZmVsbG93c2hpcF9faW50ZXJ2aWV3LS1oaWRkZW4nKVxuXHRcdC8vIFR3ZWVuTWF4LnRvKGRvbSgnLmZlbGxvd3NoaXBfX2ludGVydmlldycpLCAwLjQsIHtvcGFjaXR5OiAwfSk7XG5cdH1cblxuXHRzaG93QmlvZ3JhcGh5KCkge1xuXHRcdHRoaXMuaGlkZUludGVydmlldygpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2aWV3OiAnYmlvZ3JhcGh5J1xuXHRcdH0pXG5cdH1cblxuXHRoaWRlQmlvZ3JhcGh5KCkge1xuXHRcdGRvbSgnLmZlbGxvd3NoaXBfX2Jpb2dyYXBoeScpLmFkZENsYXNzKCdmZWxsb3dzaGlwX19iaW9ncmFwaHktLWhpZGRlbicpXG5cdFx0Ly8gY29uc29sZS5sb2coJ2hpZGUgYmlvJylcblx0XHQvLyBUd2Vlbk1heC50byhkb20oJy5mZWxsb3dzaGlwX19iaW9ncmFwaHknKSwgMC40LCB7b3BhY2l0eTogMH0pO1xuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cblx0XHR0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vblByaW50U3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMubG9hZGVkID0gZmFsc2Vcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLnByaW50cyA9IFtdXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludHM6IFtdLFxuXHRcdFx0bG9hZGVkUHJpbnRzOiBbXVxuXHRcdH07XG5cblx0XHRQcmludEFwaS5nZXRCeUFydGlzdCh0aGlzLnByb3BzLmlkU2VjdGlvbik7XG5cdFx0UHJpbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2dhbGxlcnlQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1Ym1lbnUnPjxhIGhyZWY9eycjL3Byb2plY3QvJyt0aGlzLnByb3BzLmlkU2VjdGlvbn0+QmFjayB0byBnYWxsZXJ5PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dhbGxlcnknPlxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGVkUHJpbnRzfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiAhdGhpcy5sb2FkZWQpIHtcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0Xyh0aGlzLnN0YXRlLnByaW50cykuZm9yRWFjaChmdW5jdGlvbihwcmludCkge1xuXHRcdFx0XHRmaWxlID0gbmV3IEltYWdlKClcblx0XHRcdFx0ZmlsZS5vbmxvYWQgPSB0aGF0Lm9uSW1hZ2VMb2FkZWQuYmluZCh0aGF0KVxuXHRcdFx0XHRmaWxlLnNyYyA9ICcuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrcHJpbnQuZmlsZVxuXHRcdFx0fSkudmFsdWUoKTtcblx0XHR9XG5cdH1cblxuXHRvbkltYWdlTG9hZGVkKHBhcmFtcykge1xuXHRcdHRoaXMubkltYWdlTG9hZGVkKys7XG5cblx0XHRpZiAocGFyYW1zLnBhdGhbMF0uaGVpZ2h0ID49IHBhcmFtcy5wYXRoWzBdLndpZHRoKjEuMikge1xuXHRcdFx0dGhpcy5wcmludHMucHVzaCg8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeV9faXRlbScga2V5PXt0aGlzLm5JbWFnZUxvYWRlZH0+PGltZyBjbGFzc05hbWU9J2dhbGxlcnlfX2ltYWdlJyBzcmM9e3BhcmFtcy5wYXRoWzBdLnNyY30+PC9pbWc+PC9kaXY+KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByaW50cy5wdXNoKDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLWxhcmdlJyBrZXk9e3RoaXMubkltYWdlTG9hZGVkfT48aW1nIGNsYXNzTmFtZT0nZ2FsbGVyeV9faW1hZ2UnIHNyYz17cGFyYW1zLnBhdGhbMF0uc3JjfT48L2ltZz48L2Rpdj4pXG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLm5JbWFnZUxvYWRlZCA+PSB0aGlzLm1heCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdCdsb2FkZWRQcmludHMnOiB0aGlzLnByaW50c1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uUHJpbnRTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByaW50czogUHJpbnRTdG9yZS5nZXRBcnRpc3RQcmludHMoKVxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgeTogd2luZG93LmlubmVySGVpZ2h0LCBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGhvbWVEYXRhID0gQXBwU3RvcmUuaG9tZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBob21lcGFnZScgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8nPlxuXHRcdFx0XHRcdDx2aWRlbyBhdXRvUGxheSBsb29wIGNsYXNzTmFtZT0ndmlkZW9fX2ZpbGUnIHNyYz0nLi9hc3NldHMvdmlkZW9zL2JnLWhvbWUubXA0Jz48L3ZpZGVvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWVwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQgdGV4dC0tdGl0bGUnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBob21lRGF0YS5jb250ZW50fX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhbCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nbGVnYWxQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFRoaXMgaXMgYW4ge2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3cyBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgbmV3c0RhdGEgPSBBcHBTdG9yZS5uZXdzQ29udGVudCgpXG5cdFx0bGV0IG5ld3NJdGVtcyA9IG5ld3NEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxhcnRpY2xlIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19kYXRlJz57aXRlbS5kYXRlfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19jb250ZW50Jz57aXRlbS5jb250ZW50fTwvZGl2PlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nbmV3c1BhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J25ld3MnPntuZXdzSXRlbXN9PC9zZWN0aW9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGZvdW5kIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSc0MDRQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxwPkVycm9yIDQwNCDigJQgUGFnZSBub3QgZm91bmQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCBDYXJ0U3RvcmUgZnJvbSAnQ2FydFN0b3JlJ1xuaW1wb3J0IENhcnRBcGkgZnJvbSAnQ2FydEFwaSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0bGV0IGhhY2sgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQoZmFsc2UpXG5cdFx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0VmlzaWJsZShmYWxzZSlcblx0XHRcdGNsZWFyVGltZW91dChoYWNrKVxuXHRcdH0sIDApO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydFZpc2libGUodHJ1ZSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwYXltZW50UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8aDI+UGF5bWVudDwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX29yZGVyJz5cblx0XHRcdFx0XHRcdDxoMz5PcmRlciBzdW1tYXJ5PC9oMz5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3BheW1lbnRfX3Byb2R1Y3RzJz5cblx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2FydEl0ZW1zKS5tYXAoZnVuY3Rpb24oaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRcdGxldCBwcm9kdWN0ID0gdGhhdC5zdGF0ZS5jYXJ0SXRlbXNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdwYXltZW50X19wcm9kdWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuY2l0eX0gLSB7cHJvZHVjdC55ZWFyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PnF1YW50aXR5OiA8c3Bhbj57cHJvZHVjdC5xdWFudGl0eX08L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3N1YnRvdGFsJz5TdWJ0b3RhbDogPHNwYW4+e3RoaXMuc3RhdGUuY2FydFRvdGFsfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxhIGhyZWY9Jycgb25DbGljaz17dGhpcy5wYXkuYmluZCh0aGlzKX0+UHJvY2VlZCB0byBwYXltZW50PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHBheShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRfKHRoaXMuc3RhdGUuY2FydEl0ZW1zKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0UHJpbnRBcGkub3JkZXIoaW5kZXgsIGl0ZW0uc2VyaWFsKVxuXHRcdH0pLnZhbHVlKCk7XG5cdFx0Ly8gQ2FydEFwaS5wYXkoKVxuXHRcdC8vIENhcnRBcGkuZ2VuZXJhdGVQYXlCdXR0b24oKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblxuXHRcdHRoaXMuX2FkZFRvQ2FydEJpbmRlZCA9IHRoaXMuX2FkZFRvQ2FydC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdHByaW50OiB1bmRlZmluZWQsXG5cdFx0XHRzZXJpYWw6IHVuZGVmaW5lZFxuXHRcdH07XG5cblx0XHRQcmludEFwaS5nZXRPbmUodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3ByaW50UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnN0YXRlLnByaW50KSByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnQnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZXJpYWxzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuc3RhdGUucHJpbnQuc2VyaWFscy5sZW5ndGggPiAwKSB7IHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoYXQuc3RhdGUucHJpbnQuc2VyaWFscykubWFwKGZ1bmN0aW9uKGluZGV4KXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBzZXJpYWwgPSB0aGF0LnN0YXRlLnByaW50LnNlcmlhbHNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17KHNlcmlhbCA9PT0gdGhhdC5zdGF0ZS5zZXJpYWwpID8gJ3NlcmlhbCBzZXJpYWwtLWVuYWJsZWQnIDogJ3NlcmlhbCd9IG9uQ2xpY2s9e3RoYXQuX3NlbGVjdFNlcmlhbC5iaW5kKHRoYXQsIHNlcmlhbCl9IGtleT17aW5kZXh9PntzZXJpYWx9PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgb25DbGljaz17dGhhdC5fYWRkVG9DYXJ0QmluZGVkfT5CdXkgcHJpbnQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfSBlbHNlIHsgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+T3V0IG9mIHN0b2NrPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJyt0aGlzLnN0YXRlLnByaW50LmZpbGV9PjwvaW1nPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT57dGhpcy5zdGF0ZS5wcmludC5jaXR5fTwvaDE+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0X3NlbGVjdFNlcmlhbChzZXJpYWwsIGUpIHtcblx0XHRkb20oJy5zZXJpYWwtLWVuYWJsZWQnKS5yZW1vdmVDbGFzcygnc2VyaWFsLS1lbmFibGVkJylcblx0XHRkb20oZS50YXJnZXQpLmFkZENsYXNzKCdzZXJpYWwtLWVuYWJsZWQnKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VyaWFsOiBzZXJpYWxcblx0XHR9KVxuXHR9XG5cblx0X2FkZFRvQ2FydChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRsZXQgcHJpbnRJZCA9IHRoaXMuc3RhdGUucHJpbnQuX2lkO1xuXHRcdGxldCB1cGRhdGUgPSB7XG5cdFx0XHRjaXR5OiB0aGlzLnN0YXRlLnByaW50LmNpdHksXG5cdFx0XHR5ZWFyOiB0aGlzLnN0YXRlLnByaW50LnllYXIsXG5cdFx0XHRwcmljZTogdGhpcy5zdGF0ZS5wcmludC5wcmljZSxcblx0XHRcdHNlcmlhbDogdGhpcy5zdGF0ZS5zZXJpYWxcblx0XHR9XG5cdFx0Q2FydEFjdGlvbnMuYWRkVG9DYXJ0KHByaW50SWQsIHVwZGF0ZSk7XG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydFZpc2libGUodHJ1ZSk7XG5cblx0XHRsZXQgc2VyaWFscyA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF1cblx0XHRsZXQgaW5kZXggPSBzZXJpYWxzLmluZGV4T2YodGhpcy5zdGF0ZS5zZXJpYWwpO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRzZXJpYWxzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHNlcmlhbHMpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJpbnQ6IFByaW50U3RvcmUuZ2V0T25lKClcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2VyaWFsOiB0aGlzLnN0YXRlLnByaW50LnNlcmlhbHNbMF1cblx0XHRcdH0pXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3kgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3ByaXZhY3lQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFRoaXMgaXMgYW4ge2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgUHJpbnRTdG9yZSBmcm9tICdQcmludFN0b3JlJ1xuaW1wb3J0IFByaW50QXBpIGZyb20gJ1ByaW50QXBpJ1xuaW1wb3J0IEFydGlzdFN0b3JlIGZyb20gJ0FydGlzdFN0b3JlJ1xuaW1wb3J0IEFydGlzdEFwaSBmcm9tICdBcnRpc3RBcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRhcnRpc3Q6IHVuZGVmaW5lZCxcblx0XHRcdHByaW50czoge31cblx0XHR9O1xuXG5cdFx0dGhpcy5fb25BcnRpc3RTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cblx0XHRBcnRpc3RBcGkuZ2V0QnlTbHVnKHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRBcnRpc3RTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcblxuXHRcdFByaW50QXBpLmdldEJ5QXJ0aXN0KHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcnRpc3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIGxldCBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKSxcblx0XHQvLyBcdGFydGlzdERhdGEgPSBBcHBTdG9yZS5hcnRpc3RDb250ZW50KHRoaXMucHJvcHMuaWRTZWN0aW9uKSxcblx0XHQvLyBcdHByb2plY3QgPSBhcnRpc3REYXRhLnByb2plY3RzWzBdLFxuXHRcdC8vIFx0cGhvdG9zID0gW10sXG5cdFx0Ly8gXHRmaWxlID0gdW5kZWZpbmVkXG5cdFx0Ly8gZm9yIChsZXQgaT0xOyBpPD1wcm9qZWN0Lm5QaG90b3M7ICsraSkge1xuXHRcdC8vIFx0ZmlsZSA9IChpPDEwKT8nMCcraTppXG5cdFx0Ly8gXHRwaG90b3MucHVzaCg8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fcGhvdG8nIGtleT17aX0+PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvYWxidW1zLycrcHJvamVjdC5hbGJ1bSsnLycrZmlsZSsnLmpwZyd9PjwvaW1nPjwvZGl2Pilcblx0XHQvLyB9XG5cblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgbmFtZSwgYmlvLCBwcm9qZWN0VGl0bGUsIHByb2plY3REZXNjXG5cdFx0aWYgKHRoaXMuc3RhdGUuYXJ0aXN0KSB7XG5cdFx0XHRuYW1lID0gdGhpcy5zdGF0ZS5hcnRpc3QubmFtZVxuXHRcdFx0YmlvID0gdGhpcy5zdGF0ZS5hcnRpc3QuYmlvXG5cdFx0XHRwcm9qZWN0VGl0bGUgPSB0aGlzLnN0YXRlLmFydGlzdC5wcm9qZWN0LnRpdGxlXG5cdFx0XHRwcm9qZWN0RGVzYyA9IHRoaXMuc3RhdGUuYXJ0aXN0LnByb2plY3QuZGVzY1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwYWdlJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51Jz48YSBocmVmPXsnIy9wcm9qZWN0LycrdGhpcy5wcm9wcy5pZFNlY3Rpb24rJy9nYWxsZXJ5J30+Q29udGFjdCBzaGVldDwvYT48L2Rpdj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0Jz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0X19hcnRpc3QnPntuYW1lfTwvaDI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwcm9qZWN0X19kZXNjIHRleHQgdGV4dC0tbWVkaXVtJz57cHJvamVjdERlc2N9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19hbGJ1bSc+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5wcmludHMpLm1hcChmdW5jdGlvbihpbmRleCl7XG5cdFx0XHRcdFx0XHRcdGxldCBmaWxlID0gdGhhdC5zdGF0ZS5wcmludHNbaW5kZXhdLmZpbGU7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3Bob3RvJyBrZXk9e2luZGV4fT48aW1nIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytmaWxlfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vbkFydGlzdFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YXJ0aXN0OiBBcnRpc3RTdG9yZS5nZXRPbmUoKVxuXHRcdH0pXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJpbnRzOiBQcmludFN0b3JlLmdldEFydGlzdFByaW50cygpXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXJ0aXN0U3RvcmUgZnJvbSAnQXJ0aXN0U3RvcmUnXG5pbXBvcnQgQXJ0aXN0QXBpIGZyb20gJ0FydGlzdEFwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXG5cdFx0dGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uU3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0YXJ0aXN0czoge31cblx0XHR9O1xuXG5cdFx0QXJ0aXN0QXBpLmdldEFsbCgpO1xuXHRcdEFydGlzdFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXJ0aXN0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0Ly8gbGV0IGFydGlzdHNEYXRhID0gQXBwU3RvcmUuYXJ0aXN0c0NvbnRlbnQoKVxuXHRcdC8vIGxldCBhcnRpc3RzSXRlbXMgPSBbXVxuXHRcdC8vIGZvciAobGV0IGFydGlzdCBpbiBhcnRpc3RzRGF0YSkge1xuXHRcdC8vIFx0YXJ0aXN0c0l0ZW1zLnB1c2goPGxpIGtleT17YXJ0aXN0fT48YSBocmVmPXsnIy9wcm9qZWN0LycrYXJ0aXN0fT57YXJ0aXN0c0RhdGFbYXJ0aXN0XS5uYW1lfTwvYT48L2xpPilcblx0XHQvLyB9XG5cdFx0bGV0IGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHByb2plY3RzJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0c19fY29udGVudCc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJvamVjdHNfX3RpdGxlIHRleHQgdGV4dC0tdGl0bGUnPkZlbGxvd3M6PC9oMj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5hcnRpc3RzKS5tYXAoZnVuY3Rpb24oaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRsZXQgYXJ0aXN0ID0gdGhhdC5zdGF0ZS5hcnRpc3RzW2luZGV4XTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdwcm9qZWN0c19faXRlbSBidXR0b24nPjxhIGhyZWY9eycjL3Byb2plY3QvJythcnRpc3Quc2x1Z30+e2FydGlzdC5uYW1lfTwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YXJ0aXN0czogQXJ0aXN0U3RvcmUuZ2V0QWxsKClcblx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBQcmludFN0b3JlIGZyb20gJ1ByaW50U3RvcmUnXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3AgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwaG90b3M6IHt9XG5cdFx0fTtcblxuXHRcdFByaW50QXBpLmdldEFsbCgpO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3Nob3BQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wJz5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBob3RvcykubWFwKGZ1bmN0aW9uKGluZGV4KXtcblx0XHRcdFx0XHRcdFx0bGV0IGZpbGUgPSB0aGF0LnN0YXRlLnBob3Rvc1tpbmRleF0uZmlsZTtcblx0XHRcdFx0XHRcdFx0bGV0IGlkID0gdGhhdC5zdGF0ZS5waG90b3NbaW5kZXhdLl9pZDtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fcHJpbnQnIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17JyMvc2hvcC8nK2lkfT48aW1nIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytmaWxlfT48L2ltZz48L2E+IFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cGhvdG9zOiBQcmludFN0b3JlLmdldEFsbCgpXG5cdFx0fSlcblx0fVxufVxuIiwibGV0IGNvbmZpZyA9IHtcblx0J3NpdGV1cmwnOiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWc7IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXG5cdE1FRElBX0dMT0JBTF9XOiAxOTIwLFxuXHRNRURJQV9HTE9CQUxfSDogMTA4MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0UkVDRUlWRV9BTExfQVJUSVNUUzogJ1JFQ0VJVkVfQUxMX0FSVElTVFMnLFxuXHRSRUNFSVZFX0FSVElTVDogJ1JFQ0VJVkVfQVJUSVNUJyxcblx0RVJST1I6ICdFUlJPUicsXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRDQVJUX0FERDogJ0NBUlRfQUREJyxcdFx0XHQvLyBBZGRzIGl0ZW0gdG8gY2FydFxuXHRDQVJUX1JFTU9WRTogJ0NBUlRfUkVNT1ZFJyxcdFx0Ly8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5cdENBUlRfVklTSUJMRTogJ0NBUlRfVklTSUJMRScsXHQvLyBTaG93cyBvciBoaWRlcyB0aGUgY2FydFxuXHRDQVJUX0VOQUJMRUQ6ICdDQVJUX0VOQUJMRUQnLFx0Ly8gT3BlbiBvciBjbG9zZSB0aGUgY2FydFxuXHRTRVRfU0VMRUNURUQ6ICdTRVRfU0VMRUNURUQnLFx0Ly8gU2VsZWN0cyBhIHByb2R1Y3Qgb3B0aW9uXG5cdFJFQ0VJVkVfREFUQTogJ1JFQ0VJVkVfREFUQSdcdC8vIFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0UkVDRUlWRV9BTExfUFJJTlRTOiAnUkVDRUlWRV9BTExfUFJJTlRTJyxcblx0UkVDRUlWRV9BUlRJU1RfUFJJTlRTOiAnUkVDRUlWRV9BUlRJU1RfUFJJTlRTJyxcblx0UkVDRUlWRV9QUklOVDogJ1JFQ0VJVkVfUFJJTlQnLFxuXHRFUlJPUjogJ0VSUk9SJyxcbn0iLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbnZhciBBcHBEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVWaWV3QWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKHtcblx0XHRcdHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcblx0XHRcdGFjdGlvbjogYWN0aW9uXG5cdFx0fSk7XG5cdH0sXG5cdGhhbmRsZVNlcnZlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCh7XG5cdFx0XHRzb3VyY2U6ICdTRVJWRVJfQUNUSU9OJyxcblx0XHRcdGFjdGlvbjogYWN0aW9uXG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBEaXNwYXRjaGVyIiwiaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbiAgICBcdFxuY2xhc3MgR2xvYmFsRXZlbnRzIHtcblx0aW5pdCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpXG5cdFx0dGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuXHRcdFx0QXBwQWN0aW9ucy53aW5kb3dSZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHR9LCAzMDApXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsRXZlbnRzXG4iLCJpbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IGhhc2hlciBmcm9tICdoYXNoZXInXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IGNyb3Nzcm9hZHMgZnJvbSAnY3Jvc3Nyb2FkcydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUm91dGVyIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLnJvdXRpbmcgPSBkYXRhLnJvdXRlcy5yb3V0aW5nXG5cdFx0dGhpcy5kZWZhdWx0Um91dGUgPSB0aGlzLnJvdXRpbmdbJy8nXVxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGhhc2hlci5uZXdIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLm9sZEhhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIucHJlcGVuZEhhc2ggPSAnISdcblx0XHRoYXNoZXIuaW5pdGlhbGl6ZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdGhhc2hlci5jaGFuZ2VkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLl9zZXR1cENyb3Nzcm9hZHMoKVxuXHR9XG5cdGJlZ2luUm91dGluZygpIHtcblx0XHRoYXNoZXIuaW5pdCgpXG5cdH1cblx0X3NldHVwQ3Jvc3Nyb2FkcygpIHtcblx0XHRsZXQgaG9tZVNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCcnLCB0aGlzLl9vbkhvbWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDEpXG5cblx0XHRsZXQgYmFzaWNTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgne3BhZ2V9JywgdGhpcy5fb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMSlcblx0XHQvLyBmaXJzdERlZ3JlZVNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0Ly8gXHRwYWdlIDogWydob21lJywgJzQwNCcsICdmZWxsb3dzaGlwJywgJ3Byb2plY3RzJywgJ3Nob3AnLCAnbmV3cycsICdjb250YWN0JywgJ2xlZ2FsJywgJ3ByaXZhY3knXSAvL3ZhbGlkIHNlY3Rpb25zXG5cdFx0Ly8gfVxuXG5cdFx0bGV0IHByb2plY3RTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgncHJvamVjdC97aWR9JywgdGhpcy5fb25Qcm9qZWN0VVJMSGFuZGxlci5iaW5kKHRoaXMpLCAyKVxuXHRcdHByb2plY3RTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0aWQgOiAvXlthLXpdL1xuXHRcdH1cblxuXHRcdGxldCBnYWxsZXJ5U2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3Byb2plY3Qve2lkfS9nYWxsZXJ5JywgdGhpcy5fb25Qcm9qZWN0VVJMSGFuZGxlci5iaW5kKHRoaXMpLCAzKVxuXHRcdGdhbGxlcnlTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0aWQgOiAvXlthLXpdL1xuXHRcdH1cblxuXHRcdGxldCBzaG9wU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJy9zaG9wL3tpZH0nLCB0aGlzLl9vblNob3BVUkxIYW5kbGVyLmJpbmQodGhpcyksIDIpXG5cdFx0c2hvcFNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0XHRpZCA6IC9eWzAtOV0vXG5cdFx0fVxuXHR9XG5cdF9vbkhvbWVVUkxIYW5kbGVyKCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKCdob21lJylcblx0fVxuXHRfb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIocGFnZUlkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocGFnZUlkKVxuXHR9XG5cdF9vblByb2plY3RVUkxIYW5kbGVyKHByb2plY3RJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHByb2plY3RJZClcblx0fVxuXHRfb25TaG9wVVJMSGFuZGxlcihwcmludElkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocHJpbnRJZClcblx0fVxuXHRfb25EZWZhdWx0VVJMSGFuZGxlcigpIHtcblx0XHR0aGlzLl9zZW5kVG9EZWZhdWx0KClcblx0fVxuXHRfYXNzaWduUm91dGUoaWQpIHtcblx0XHRsZXQgaGFzaCA9IGhhc2hlci5nZXRIYXNoKClcblx0XHRsZXQgcGFydHMgPSB0aGlzLl9nZXRVUkxQYXJ0cyhoYXNoKVxuXHRcdHRoaXMuX3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFydHNbMF0sIGlkKVxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSB0cnVlXG5cdH1cblx0X2dldFVSTFBhcnRzKHVybCkge1xuXHRcdGxldCBoYXNoID0gdXJsXG5cdFx0aGFzaCA9IGhhc2guc3Vic3RyKDEpXG5cdFx0cmV0dXJuIGhhc2guc3BsaXQoJy8nKVxuXHR9XG5cdF91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcmVudCwgdGFyZ2V0SWQpIHtcblx0XHRoYXNoZXIub2xkSGFzaCA9IGhhc2hlci5uZXdIYXNoXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB7XG5cdFx0XHRoYXNoOiBoYXNoLFxuXHRcdFx0cGFydHM6IHBhcnRzLFxuXHRcdFx0cGFyZW50OiBwYXJlbnQsXG5cdFx0XHR0YXJnZXRJZDogdGFyZ2V0SWRcblx0XHR9XG5cdFx0QXBwQWN0aW9ucy5wYWdlSGFzaGVyQ2hhbmdlZCh0YXJnZXRJZClcblx0fVxuXHRfZGlkSGFzaGVyQ2hhbmdlKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRjcm9zc3JvYWRzLnBhcnNlKG5ld0hhc2gpXG5cdFx0aWYodGhpcy5uZXdIYXNoRm91bmRlZCkgcmV0dXJuXG5cdFx0Ly8gSWYgVVJMIGRvbid0IG1hdGNoIGEgcGF0dGVybiwgc2VuZCB0byBkZWZhdWx0XG5cdFx0dGhpcy5fb25EZWZhdWx0VVJMSGFuZGxlcigpXG5cdH1cblx0X3NlbmRUb0RlZmF1bHQoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goQXBwU3RvcmUuZGVmYXVsdFJvdXRlKCkpXG5cdH1cblx0c3RhdGljIGdldEJhc2VVUkwoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LlVSTC5zcGxpdChcIiNcIilbMF1cblx0fVxuXHRzdGF0aWMgZ2V0SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLmdldEhhc2goKVxuXHR9XG5cdHN0YXRpYyBnZXRSb3V0ZXMoKSB7XG5cdFx0cmV0dXJuIGRhdGEucm91dGVzLnJvdXRpbmdcblx0fVxuXHRzdGF0aWMgZ2V0TmV3SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm5ld0hhc2hcblx0fVxuXHRzdGF0aWMgZ2V0T2xkSGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm9sZEhhc2hcblx0fVxuXHRzdGF0aWMgc2V0SGFzaChoYXNoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goaGFzaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXJcbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChpZCkge1xufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuXHR2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0dmFyIGNvbnRlbnQgPSBkYXRhLnJvdXRlcy5yb3V0aW5nW2hhc2hPYmouaGFzaF1cblx0cmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRGb290ZXJNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzWydmb290ZXItbWVudSddXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlcy5jb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0SG9tZSgpIHtcbiAgICByZXR1cm4gZGF0YS5ob21lXG59XG5mdW5jdGlvbiBfZ2V0RmVsbG93c2hpcCgpIHtcbiAgICByZXR1cm4gZGF0YS5mZWxsb3dzaGlwXG59XG5mdW5jdGlvbiBfZ2V0TmV3cygpIHtcbiAgICByZXR1cm4gZGF0YS5uZXdzXG59XG5mdW5jdGlvbiBfZ2V0QXJ0aXN0cygpIHtcbiAgICByZXR1cm4gZGF0YS5hcnRpc3RzXG59XG5mdW5jdGlvbiBfZ2V0QXJ0aXN0KGlkKSB7XG4gICAgcmV0dXJuIGRhdGEuYXJ0aXN0c1tpZF1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG5cdFx0dGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG5cdH0sXG5cdHBhZ2VDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldFBhZ2VDb250ZW50KClcblx0fSxcblx0bWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0TWVudUNvbnRlbnQoKVxuXHR9LFxuXHRmb290ZXJNZW51Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRGb290ZXJNZW51Q29udGVudCgpXG5cdH0sXG5cdGFwcERhdGE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0QXBwRGF0YSgpXG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXREZWZhdWx0Um91dGUoKVxuXHR9LFxuXHRnbG9iYWxDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEdsb2JhbENvbnRlbnQoKVxuXHR9LFxuXHRob21lQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRIb21lKClcblx0fSxcblx0ZmVsbG93c2hpcENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0RmVsbG93c2hpcCgpXG5cdH0sXG5cdG5ld3NDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldE5ld3MoKVxuXHR9LFxuXHRhcnRpc3RzQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRBcnRpc3RzKClcblx0fSxcblx0YXJ0aXN0Q29udGVudDogZnVuY3Rpb24oaWQpIHtcblx0XHRyZXR1cm4gX2dldEFydGlzdChpZClcblx0fSxcblx0V2luZG93OiB7XG5cdFx0dzogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0aDogd2luZG93LmlubmVySGVpZ2h0XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHR2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQ6XG5cdFx0XHRcdF9wYWdlUm91dGVJZENoYW5nZWQoYWN0aW9uLml0ZW0pXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuXHRcdFx0XHRBcHBTdG9yZS5XaW5kb3cudyA9IGFjdGlvbi5pdGVtLndpbmRvd1dcblx0XHRcdFx0QXBwU3RvcmUuV2luZG93LmggPSBhY3Rpb24uaXRlbS53aW5kb3dIXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH0pXG59KVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxubGV0IF9hcnRpc3QgPSB7fTtcbmxldCBfYXJ0aXN0cyA9IHt9O1xuXG5mdW5jdGlvbiBfYWRkQXJ0aXN0cyhhcnRpc3RzKSB7XG5cdGFydGlzdHMuZm9yRWFjaChmdW5jdGlvbihhcnRpc3QpIHsgLy8gY2hhbmdlIGZvckVhY2ggdG8gbG9kYXNoXG5cdFx0aWYgKCFfYXJ0aXN0c1thcnRpc3QuX2lkXSkge1xuXHRcdFx0X2FydGlzdHNbYXJ0aXN0Ll9pZF0gPSBhcnRpc3Q7XG5cdFx0fVxuXHR9KTtcbn1cblxubGV0IEFydGlzdFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0O1xuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQXJ0aXN0Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX0FSVElTVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1Q6XG5cdFx0XHRcdF9hcnRpc3QgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQ2FydENvbnN0YW50cyBmcm9tICdDYXJ0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxuLy8gRGVmaW5lIGluaXRpYWwgZGF0YSBwb2ludHNcbmxldCBfcHJvZHVjdHMgPSB7fSwgX2NhcnRWaXNpYmxlID0gdHJ1ZSwgX2NhcnRFbmFibGVkID0gZmFsc2U7XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbmZ1bmN0aW9uIF9hZGQocHJpbnRJZCwgdXBkYXRlKSB7XG5cdHVwZGF0ZS5xdWFudGl0eSA9IHByaW50SWQgaW4gX3Byb2R1Y3RzID8gX3Byb2R1Y3RzW3ByaW50SWRdLnF1YW50aXR5ICsgMSA6IDE7XG5cdF9wcm9kdWN0c1twcmludElkXSA9IF8uZXh0ZW5kKHt9LCBfcHJvZHVjdHNbcHJpbnRJZF0sIHVwZGF0ZSlcbn1cblxuLy8gU2V0IGNhcnQgdmlzaWJpbGl0eVxuZnVuY3Rpb24gX3NldENhcnRWaXNpYmxlKGNhcnRWaXNpYmxlKSB7XG5cdF9jYXJ0VmlzaWJsZSA9IGNhcnRWaXNpYmxlO1xufVxuXG4vLyBTZXQgY2FydCBlbmFibGVkXG5mdW5jdGlvbiBfc2V0Q2FydEVuYWJsZWQoY2FydEVuYWJsZWQpIHtcblx0X2NhcnRFbmFibGVkID0gY2FydEVuYWJsZWQ7XG59XG5cbi8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0ocHJpbnRJZCkge1xuXHRkZWxldGUgX3Byb2R1Y3RzW3ByaW50SWRdO1xufVxuXG5sZXQgQ2FydFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRDYXJ0SXRlbXM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfcHJvZHVjdHM7XG5cdH0sXG5cdGdldENhcnRDb3VudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKF9wcm9kdWN0cykubGVuZ3RoO1xuXHR9LFxuXHRnZXRDYXJ0VG90YWw6IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0Zm9yKGxldCBwcm9kdWN0IGluIF9wcm9kdWN0cyl7XG5cdFx0XHRpZihfcHJvZHVjdHMuaGFzT3duUHJvcGVydHkocHJvZHVjdCkpe1xuXHRcdFx0XHR0b3RhbCArPSBfcHJvZHVjdHNbcHJvZHVjdF0ucHJpY2UgKiBfcHJvZHVjdHNbcHJvZHVjdF0ucXVhbnRpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0b3RhbC50b0ZpeGVkKDIpO1xuXHR9LFxuXHRnZXRDYXJ0VmlzaWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jYXJ0VmlzaWJsZTtcblx0fSxcblx0Z2V0Q2FydEVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY2FydEVuYWJsZWQ7XG5cdH0sXG5cdC8vIEVtaXQgQ2hhbmdlIGV2ZW50XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuXHR9LFxuXHQvLyBBZGQgY2hhbmdlIGxpc3RlbmVyXG5cdGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdC8vIFJlbW92ZSBjaGFuZ2UgbGlzdGVuZXJcblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdGxldCBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXG5cdFx0c3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuQ0FSVF9BREQ6XG5cdFx0XHRcdF9hZGQoYWN0aW9uLnByaW50SWQsIGFjdGlvbi51cGRhdGUpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX1ZJU0lCTEU6XG5cdFx0XHRcdF9zZXRDYXJ0VmlzaWJsZShhY3Rpb24uY2FydFZpc2libGUpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX0VOQUJMRUQ6XG5cdFx0XHRcdF9zZXRDYXJ0RW5hYmxlZChhY3Rpb24uY2FydEVuYWJsZWQpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX1JFTU9WRTpcblx0XHRcdFx0X3JlbW92ZUl0ZW0oYWN0aW9uLnByaW50SWQpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5cbmNvbnN0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG5sZXQgX3ByaW50cyA9IHt9O1xubGV0IF9hcnRpc3RQcmludHMgPSB7fTtcbmxldCBfcHJpbnQgPSB7fTtcblxuZnVuY3Rpb24gX2FkZFByaW50cyhwcmludHMpIHtcblx0cHJpbnRzLmZvckVhY2goZnVuY3Rpb24ocHJpbnQpIHsgLy8gY2hhbmdlIGZvckVhY2ggdG8gbG9kYXNoXG5cdFx0aWYgKCFfcHJpbnRzW3ByaW50Ll9pZF0pIHtcblx0XHRcdF9wcmludHNbcHJpbnQuX2lkXSA9IHByaW50O1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIF9hZGRBcnRpc3RQcmludHMocHJpbnRzKSB7XG5cdHByaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHByaW50KSB7IC8vIGNoYW5nZSBmb3JFYWNoIHRvIGxvZGFzaFxuXHRcdGlmICghX2FydGlzdFByaW50c1twcmludC5faWRdKSB7XG5cdFx0XHRfYXJ0aXN0UHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pO1xufVxuXG5sZXQgUHJpbnRTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcblx0Z2V0QWxsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c1xuXHR9LFxuXHRnZXRBcnRpc3RQcmludHM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0UHJpbnRzXG5cdH0sXG5cdGdldE9uZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludFxuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9BTExfUFJJTlRTOlxuXHRcdFx0XHRfYWRkUHJpbnRzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQVJUSVNUX1BSSU5UUzpcblx0XHRcdFx0X2FkZEFydGlzdFByaW50cyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UOlxuXHRcdFx0XHRfcHJpbnQgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUHJpbnRTdG9yZVxuXG4iLCJpbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5mdW5jdGlvbiBnZXRBbGxNZXRob2RzKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKVxuXHRcdC5maWx0ZXIoa2V5ID0+IGlzLmZuKG9ialtrZXldKSlcbn1cblxuZnVuY3Rpb24gYXV0b0JpbmQob2JqKSB7XG5cdC8vIGNvbnNvbGUubG9nKCdvYmogLS0tLS0nLCBvYmopXG4gIFx0Z2V0QWxsTWV0aG9kcyhvYmouY29uc3RydWN0b3IucHJvdG90eXBlKVxuXHRcdC5mb3JFYWNoKG10ZCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhtdGQpXG5cdFx0XHRvYmpbbXRkXSA9IG9ialttdGRdLmJpbmQob2JqKTtcblx0XHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvQmluZDsiLCJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBOb3JtYWxpemVNb3VzZUNvb3JkcyhlLCBvYmpXcmFwcGVyKSB7XG5cdFx0dmFyIHBvc3ggPSAwO1xuXHRcdHZhciBwb3N5ID0gMDtcblx0XHRpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50O1xuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRvYmpXcmFwcGVyLnggPSBwb3N4XG5cdFx0b2JqV3JhcHBlci55ID0gcG9zeVxuXHRcdHJldHVybiBvYmpXcmFwcGVyXG5cdH1cblx0c3RhdGljIFJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgY29udGVudFcsIGNvbnRlbnRIKSB7XG5cdFx0dmFyIGFzcGVjdFJhdGlvID0gY29udGVudFcgLyBjb250ZW50SFxuXHRcdHZhciBzY2FsZSA9ICgod2luZG93VyAvIHdpbmRvd0gpIDwgYXNwZWN0UmF0aW8pID8gKHdpbmRvd0ggLyBjb250ZW50SCkgKiAxIDogKHdpbmRvd1cgLyBjb250ZW50VykgKiAxXG5cdFx0dmFyIG5ld1cgPSBjb250ZW50VyAqIHNjYWxlXG5cdFx0dmFyIG5ld0ggPSBjb250ZW50SCAqIHNjYWxlXG5cdFx0dmFyIGNzcyA9IHtcblx0XHRcdHdpZHRoOiBuZXdXLFxuXHRcdFx0aGVpZ2h0OiBuZXdILFxuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAobmV3VyA+PiAxKSxcblx0XHRcdHRvcDogKHdpbmRvd0ggPj4gMSkgLSAobmV3SCA+PiAxKVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gY3NzXG5cdH1cblx0c3RhdGljIEdldFNjcm9sbFRvcCgpIHtcblx0XHRyZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcblx0fVxuXHRzdGF0aWMgR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IFsnJywgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICAgICAgICBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByZWZpeCA9PT0gJycgPyBwcm9wZXJ0eSA6IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByZWZpeCtwcm9wZXJ0eTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbcHJvcF0gIT0gXCJ1bmRlZmluZWRcIikgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHNcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gXG4vLyBNSVQgbGljZW5zZVxuIFxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxuICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbn0oKSk7IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG4vLyBBY3Rpb25zXG52YXIgUGFnZXJBY3Rpb25zID0ge1xuICAgIG9uUGFnZVJlYWR5OiBmdW5jdGlvbihoYXNoKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9JU19SRUFEWSxcbiAgICAgICAgXHRpdGVtOiBoYXNoXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICBcdFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURSxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgcGFnZVRyYW5zaXRpb25EaWRGaW5pc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNILFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfVxufVxuXG4vLyBDb25zdGFudHNcbnZhciBQYWdlckNvbnN0YW50cyA9IHtcblx0UEFHRV9JU19SRUFEWTogJ1BBR0VfSVNfUkVBRFknLFxuXHRQQUdFX1RSQU5TSVRJT05fSU46ICdQQUdFX1RSQU5TSVRJT05fSU4nLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUOiAnUEFHRV9UUkFOU0lUSU9OX09VVCcsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6ICdQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTOiAnUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTJyxcblx0UEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6ICdQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCcsXG59XG5cbi8vIERpc3BhdGNoZXJcbnZhciBQYWdlckRpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVBhZ2VyQWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKGFjdGlvbilcblx0fVxufSlcblxuLy8gU3RvcmVcbnZhciBQYWdlclN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuICAgIGZpcnN0UGFnZVRyYW5zaXRpb246IHRydWUsXG4gICAgcGFnZVRyYW5zaXRpb25TdGF0ZTogdW5kZWZpbmVkLCBcbiAgICBkaXNwYXRjaGVySW5kZXg6IFBhZ2VyRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBwYXlsb2FkLnR5cGVcbiAgICAgICAgdmFyIGl0ZW0gPSBwYXlsb2FkLml0ZW1cbiAgICAgICAgc3dpdGNoKGFjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9JU19SRUFEWTpcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTXG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID8gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOIDogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVFxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTpcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5cbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOlxuICAgICAgICAgICAgXHRpZiAoUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uKSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5lbWl0KGFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFBhZ2VyU3RvcmU6IFBhZ2VyU3RvcmUsXG5cdFBhZ2VyQWN0aW9uczogUGFnZXJBY3Rpb25zLFxuXHRQYWdlckNvbnN0YW50czogUGFnZXJDb25zdGFudHMsXG5cdFBhZ2VyRGlzcGF0Y2hlcjogUGFnZXJEaXNwYXRjaGVyXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnQXV0b2JpbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGF1dG9iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnRsSW4gPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlXG5cdFx0fSlcblx0XHR0aGlzLnRsT3V0ID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGVcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnJlc2l6ZSgpXG5cdFx0dGhpcy5zZXR1cEFuaW1hdGlvbnMoKVxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5pc1JlYWR5KHRoaXMucHJvcHMuaGFzaCksIDApXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdHZhciB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMudGxJbi5wbGF5KDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy50bE91dC5wbGF5KDApXG5cdH1cblx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCksIDApXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSwgMClcblx0fVxuXHRyZXNpemUoKSB7XG5cdH1cblx0Zm9yY2VVbm1vdW50KCkge1xuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLmNsZWFyKClcblx0XHR0aGlzLnRsT3V0LmNsZWFyKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQYWdlclN0b3JlLCBQYWdlckFjdGlvbnMsIFBhZ2VyQ29uc3RhbnRzLCBQYWdlckRpc3BhdGNoZXJ9IGZyb20gJ1BhZ2VyJ1xuaW1wb3J0IF9jYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9TdHJpbmcvY2FwaXRhbGl6ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAncGFnZS1iJ1xuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4gPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluLmJpbmQodGhpcylcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dCA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLmNvbXBvbmVudHMgPSB7XG5cdFx0XHQnbmV3LWNvbXBvbmVudCc6IHVuZGVmaW5lZCxcblx0XHRcdCdvbGQtY29tcG9uZW50JzogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwYWdlc0NvbnRhaW5lcic+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3RoaXMuZGl2U3R5bGV9IHJlZj0ncGFnZS1hJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWInPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblxuXHRzZXR1cE5ld0NvbXBvbmVudChoYXNoLCBUeXBlLCBpZFNlY3Rpb24pIHtcblx0XHRsZXQgaWQgPSBfY2FwaXRhbGl6ZShoYXNoLnJlcGxhY2UoXCIvXCIsIFwiXCIpKVxuXHRcdHRoaXMub2xkUGFnZURpdlJlZiA9IHRoaXMuY3VycmVudFBhZ2VEaXZSZWZcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gKHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPT09ICdwYWdlLWEnKSA/ICdwYWdlLWInIDogJ3BhZ2UtYSdcblx0XHRsZXQgZWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0bGV0IHBhZ2UgPSBcblx0XHRcdDxUeXBlIFxuXHRcdFx0XHRpZD17dGhpcy5jdXJyZW50UGFnZURpdlJlZn0gXG5cdFx0XHRcdGlzUmVhZHk9e3RoaXMub25QYWdlUmVhZHl9IFxuXHRcdFx0XHRoYXNoPXtoYXNofVxuXHRcdFx0XHRpZFNlY3Rpb249e2lkU2VjdGlvbn1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddID0gdGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J11cblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSA9IFJlYWN0LnJlbmRlcihwYWdlLCBlbClcblx0XHRpZihQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPT09IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUykge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10uZm9yY2VVbm1vdW50KClcblx0XHR9XG5cdH1cblxuXHRvblBhZ2VSZWFkeShoYXNoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLm9uUGFnZVJlYWR5KGhhc2gpXG5cdH1cblxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cblx0d2lsbFBhZ2VUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uT3V0KClcblx0fVxuXG5cdGRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlJylcblx0XHRQYWdlckFjdGlvbnMucGFnZVRyYW5zaXRpb25EaWRGaW5pc2goKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdH1cblxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlJylcblx0XHRQYWdlckFjdGlvbnMub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXG5cdHVubW91bnRDb21wb25lbnQocmVmKSB7XG5cdFx0aWYodGhpcy5jb21wb25lbnRzW3JlZl0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGlkID0gdGhpcy5jb21wb25lbnRzW3JlZl0ucHJvcHMuaWRcblx0XHRcdHZhciBkb21Ub1JlbW92ZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1tpZF0pXG5cdFx0XHRSZWFjdC51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvbVRvUmVtb3ZlKVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbilcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnbmV3LWNvbXBvbmVudCcpXG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcImFydGlzdHNcIjp7XCJlbGxpb3R0LWVyd2l0dFwiOntcIm5hbWVcIjpcIkVsbGlvdHQgRXJ3aXR0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiQ3ViYSAxOTY0XCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiZWxsaW90dC1lcndpdHRcIixcIm5QaG90b3NcIjo4fV19LFwicWl1LXlhbmdcIjp7XCJuYW1lXCI6XCJRaXUgWWFuZ1wiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkxvcmVtIGlwc3VtXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicWl1LXlhbmdcIixcIm5QaG90b3NcIjo2fV19LFwicGhpbGlwLXNpbmRlblwiOntcIm5hbWVcIjpcIlBoaWxpcCBTaW5kZW5cIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAyXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicGhpbGlwLXNpbmRlblwiLFwiblBob3Rvc1wiOjR9XX0sXCJqYWNrLWR1ZXRcIjp7XCJuYW1lXCI6XCJKYWNrIER1ZXRcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAzXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiamFjay1kdWV0XCIsXCJuUGhvdG9zXCI6MH1dfX0sXCJmZWxsb3dzaGlwXCI6e1wiZmVsbG93c2hpcFwiOntcInBhcmFncmFwaHNcIjpbXCJBIGZlbGxvd3NoaXAgaXMgYSBjb21tdW5pb24gb2YgcGVvcGxlIHNoYXJpbmcgYSBjb21tb24gaW50ZXJlc3QuIFRoZSBlbGxpb3R0IGVyd2l0dCBoYXZhbmEgY2x1YiA3IGZlbGxvd3MgYWltIHRvIGxlYXZlIGFuIHVuZHlpbmcgbGVnYWN5IHRvIHRoZSB3b3JsZCBhbmQgdG8gYmUgYWJsZSB0byB3aXRuZXNzIGl0cyBwYXN0IGJ5IGRvY3VtZW50aW5nIHRoZSBlc3NlbmNlIG9mIGFuIHVudG91Y2hlZCBsYW5kLCBhIGNvdW50cnkgdGhhdCBzdGFuZHMgc3RpbGwgaW4gdGhlIGxhdGUgMTk1MOKAmXMgcmV2b2x1dGlvbi5cIixcIlRoZSBmZWxsb3dzaGlwIHdpbGwgaGF2ZSBhIGxlZ2FjeSBsaWtlIG5vbmUgb3RoZXIsIGxlZCBieSBhIG1hbiB3aG9zZSB3b3JrIGhhcyBpbnNwaXJlZCBhbmQgZ3VpZGVkIHRoZSBtb3N0IHByZXN0aWdpb3VzIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5IGFnZW5jeSwgbWFnbnVtLiBXaXRoIGEgc3RvcmllZCBzdHlsZSwgZXJ3aXR0IGdvZXMgYmFjayB0byB0aGUgaXNsYW5kIHRoYXQgZ2F2ZSBoaW0gb25lIG9mIGhpcyBtb3N0IHN0b3JpZWQgYXNzaWdubWVudHMuXCIsXCJIZSB3aWxsIHRoZW4gaGVhZCBhIGNvbW1pdHRlZSBvZiBwaG90b2dyYXBoeeKAmXMgZ3JlYXRlc3QgbWluZHMgdG8gY2hvb3NlIHRvZGF54oCZcyBncmVhdGVzdCB0YWxlbnRzIGFuZCBsZXQgdGhlbSBleHBsb3JlIHRoZSBodW1hbiBjb25kaXRpb24gaW4gY3ViYSB0aHJvdWdoIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5IGFuZCBnaXZlIHVzIHRoZWlyIG93biB2aXNpb24uXCJdfSxcImJpb2dyYXBoeVwiOntcInBhcmFncmFwaHNcIjpbXCJFbGxpb3R0IEVyd2l0dCBpcyBvbmUgb2YgdGhlIHdvcmxk4oCZcyBtb3N0IHBvcHVsYXIgYW5kIGFkbWlyZWQgcGhvdG9ncmFwaGVycy4gQSB2aXN1YWwgcG9ldCBhbmQgaHVtb3Jpc3Qgb2YgZXZlcnlkYXkgbGlmZSwgaGUgaGFzIGNyZWF0ZWQgc29tZSBvZiB0aGUgbW9zdCBtZW1vcmFibGUgaW1hZ2VzIG9mIG91ciB0aW1lLCBmcm9tIGhpcyBvYnNlcnZhdGlvbnMgb2YgZGFpbHkgbGlmZSBhdCBzdHJlZXQgbGV2ZWwsIHRvIHBvcnRyYWl0cyBvZiB0aGUgaWNvbmljIHBlcnNvbmFsaXRpZXMgaW5jbHVkaW5nIE1hcmlseW4gTW9ucm9lIG9uIHRoZSBzZXQgb2YgdGhlIGZpbG0gVGhlIE1pc2ZpdHMgYW5kIFRydW1hbiBDYXBvdGXigJlzIGVwaWMgMTk2NiBCbGFjayBhbmQgV2hpdGUgQmFsbCBpbiBOZXcgWW9yayBDaXR5LiBIZSBoYXMgcGhvdG9ncmFwaGVkIEtocnVzaGNoZXYgYW5kIE5peG9uIGFyZ3VpbmcgaW4gTW9zY293LCBGaWRlbCBDYXN0cm8gYW5kIENoZSBHdWV2YXJhIGluIEhhdmFuYSBhbmQgUHJlc2lkZW50IEpGSyBpbiB0aGUgT3ZhbCBvZmZpY2UuXCIsXCJCb3JuIGluIFBhcmlzIGluIDE5MjggdG8gUnVzc2lhbiBwYXJlbnRzLCBFcndpdHQgbW92ZWQgdG8gdGhlIFVTIHdpdGggaGlzIGZhbWlseVxcdTIwMjhpbiAxOTM5IGFuZCBpdCB3YXMgdGhlcmUgdGhhdCBoZSBtZXQgRWR3YXJkIFN0ZWljaGVuIGFuZCBSb3kgU3RyeWtlci4gUmVjcnVpdGVkIHRvIE1hZ251bSBQaG90b3MgYnkgUm9iZXJ0IENhcGEgaW4gMTk1MyBFcndpdHQgaGFzIGJlZW4gYSBtZW1iZXIgb2YgdGhlIHByZXN0aWdpb3VzIGFnZW5jeSBldmVyIHNpbmNlIGFuZCBoYXMgc2VydmVkIHNldmVyYWwgdGVybXMgYXMgaXRzIHByZXNpZGVudC4gXCIsXCJUbyBkYXRlIEVyd2l0dCBoYXMgcHJvZHVjZWQgbW9yZSB0aGFuIDI1IHBob3RvZ3JhcGh5IGJvb2tzIGluY2x1ZGluZyBFYXN0ZXJuIEV1cm9wZSAoMTk2NSksIFRoZSBQcml2YXRlIEV4cGVyaWVuY2UgKDE5NzQpLCBQZXJzb25hbCBFeHBvc3VyZXMgKDE5ODgpLCBUbyB0aGUgRG9ncyAoMTk5MiksIGFuZCBQZXJzb25hbCBCZXN0ICgyMDEwKS4gSGlzIHBob3RvZ3JhcGhzIGhhdmUgYmVlbiBmZWF0dXJlZCBpbiBzb2xvIHNob3dzIGFsbCBvdmVyIHRoZSB3b3JsZCwgaW5jbHVkaW5nIGF0wqB0aGUgSUNQIGFuZCBUaGUgTXVzZXVtIG9mIE1vZGVybiBBcnQsIE5ldyBZb3JrOyBUaGUgQXJ0IEluc3RpdHV0ZSBvZiBDaGljYWdvO8KgVGhlIEJhcmJpY2FuLCBMb25kb24sIGFuZCBUaGUgUmVpbmEgU29maWEgTXVzZXVtLCBNYWRyaWQuIEVyd2l0dCBsaXZlcyBhbmQgd29ya3MgaW4gTmV3IFlvcmsgQ2l0eSBhbmQgbGlrZXMgY2hpbGRyZW4gYW5kIGRvZ3MuXCJdfX0sXCJob21lXCI6e1wiY29udGVudFwiOlwiQ3ViYSBmYXNjaW5hdGVzIGFuZCBpbnRyaWd1ZXMuIEhhdmFuYSBDbHViIDcgYm90dGxlcyB0aGUgc291bCBvZiB0aGUgaXNsYW5kIGFuZCBzaGlwcyBpdCBhY3Jvc3MgdGhlIHdvcmxkLiBJbiAxOTY0LCBFbGxpb3R0IEVyd2l0dCBmb2xsb3dlZCB0aGUgY3ViYW4gcmV2b2x1dGlvbi4gVG9kYXksIGhlIGhlbG1zIGEgPGEgaHJlZj0nIy9mZWxsb3dzaGlwJz5mZWxsb3dzaGlwPC9hPiB0byBjYXB0dXJlIHRoZSBjdWJhbiByZW5haXNzYW5jZS4gT3VyIDxhIGhyZWY9JyMvcHJvamVjdHMnPnByb2plY3Q8L2E+IHdpbGwgaGVscCBoaXMgZW5kZWF2b3IuIFlvdSBjYW4gYWNxdWlyZSBvcmlnaW5hbCBwcmludHMgb24gb3VyIDxhIGhyZWY9JyMvc2hvcCc+c2hvcDwvYT4gYW5kIGNvbnRyaWJ1dGUgdG8gdGhpcyBleHBlcmltZW504oCZcyBzdXN0YWluYWJpbGl0eS5cIn0sXCJuZXdzXCI6W3tcImRhdGVcIjpcIjA0LjEwLjE1XCIsXCJjb250ZW50XCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwifSx7XCJkYXRlXCI6XCIxOC4wOS4xNVwiLFwiY29udGVudFwiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwifV0sXCJyb3V0ZXNcIjp7XCJjb250ZW50XCI6e1wibXl0ZXh0XCI6XCJzb21lIGdsb2JhbCB0ZXh0XCJ9LFwibWVudVwiOlt7XCJpZFwiOlwiZmVsbG93c2hpcFwiLFwibmFtZVwiOlwiRmVsbG93c2hpcFwiLFwidXJsXCI6XCIvZmVsbG93c2hpcFwifSx7XCJpZFwiOlwicHJvamVjdHNcIixcIm5hbWVcIjpcIlByb2plY3RzXCIsXCJ1cmxcIjpcIi9wcm9qZWN0c1wifSx7XCJpZFwiOlwic2hvcFwiLFwibmFtZVwiOlwiU2hvcFwiLFwidXJsXCI6XCIvc2hvcFwifSx7XCJpZFwiOlwibmV3c1wiLFwibmFtZVwiOlwiTmV3c1wiLFwidXJsXCI6XCIvbmV3c1wifV0sXCJmb290ZXItbWVudVwiOlt7XCJpZFwiOlwiY29udGFjdFwiLFwibmFtZVwiOlwiQ29udGFjdFwiLFwidXJsXCI6XCIvY29udGFjdFwifSx7XCJpZFwiOlwicHJpdmFjeVwiLFwibmFtZVwiOlwiUHJpdmFjeVwiLFwidXJsXCI6XCIvcHJpdmFjeVwifSx7XCJpZFwiOlwibGVnYWxcIixcIm5hbWVcIjpcIkxlZ2FsXCIsXCJ1cmxcIjpcIi9sZWdhbFwifV0sXCJkZWZhdWx0LXJvdXRlXCI6XCJcIixcInJvdXRpbmdcIjp7XCJcIjp7XCJ0aXRsZVwiOlwiaG9tZXBhZ2VcIixcImNvbnRlbnRcIjpcIkhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBpcyBhZXVzdGl1bnRpIDxhIGhyZWY9JyMvZmVsbG93c2hpcCc+ZmVsbG93c2hpcDwvYT4gYW5kIGxhbnRlbXF1aWFtIHZvbG9yZXMgYXV0IGVwaWNvIGFuZCA8YSBocmVmPScjL3Byb2plY3RzJz5wcm9qZWN0PC9hPiB1bnQgcXVlIHZlcmVybmEgbWVuZGViaS4gTmFtZW5pcyBlc2VkIG1pbGxhIG5vc2FtIHZlbCBlYSA8YSBocmVmPScjL3Nob3AnPnNob3A8L2E+IGVzdHJ1bSB1bmQgbmV4cGVkaW9uIHJlIGNvbnNlcXV1bnQuIE5hbSB2ZW5kaW8gZXQgcGFyY2l0LCBjb21uaSA8YSBocmVmPScjL25ld3MnPm5ld3M8L2E+XCJ9LFwiL2ZlbGxvd3NoaXBcIjp7XCJ0aXRsZVwiOlwiZmVsbG93c2hpcCBwYWdlXCIsXCJjb250ZW50XCI6XCJJbiBDdWJhIGdlbmVyYXRpb25zIG9mIGFzcGlyaW5nIGRpc3RpbGxlcnMgaGF2ZSBmb2xsb3dlZCB0aGUgZXhhbXBsZSBvZiBhIHNlYXNvbmVkIHJ1bSBtYXN0ZXIgYW5kIHNvIGxlYXJudCB0byBkZXZlbG9wIGFuZCBwZXJmZWN0IHRoZWlyIGNyYWZ0LiBUaGUgRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGNvbWJpbmVzIHRoaXMgcmljaCBoaXN0b3J5IGFuZCB0cmFkaXRpb24gd2l0aCBhIHBhc3Npb24gZm9yIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5Ljxici8+TWFzdGVyIHBob3RvZ3JhcGhlciBFbGxpb3R0IEVyd2l0dOKAmXMgbGlmZWxvbmcgbG92ZSBvZiBwaG90b2dyYXBoeSBhbmQgQ3ViYSBoYXMgYnJvdWdodCBoaW0gYmFjayB0byBDdWJhIGFnYWluIOKAkyB0aGlzIHRpbWUgdG8gaW5pdGlhdGUgdGhlIGZlbGxvd3NoaXAgd2l0aCBIYXZhbmEgQ2x1YiA3LiBBIG5ldyBib2R5IG9mIHdvcmsgd2lsbCBjcmVhdGUgYSBzdGFydGluZyBwb2ludCBmb3IgYSBuZXcgZ2VuZXJhdGlvbiBvZiBwaG90b2dyYXBoZXJzIHRvIHJlbGF0ZSB0bywgdG8gZnVydGhlciBkZXZlbG9wIHRoZWlyIGNyYWZ0IGFuZCBoZWxwIChyZSlkZWZpbmUgdGhlIGdlbnJlIGluIHRoZSAyMXN0IGNlbnR1cnkuICBJbnNwaXJlZCBieSBFbGxpb3R0IEVyd2l0dCwgZXhjZXB0aW9uYWwgdGFsZW50cyBzZWxlY3RlZCBmb3IgdGhlIGZlbGxvd3NoaXAgd2lsbCBlYWNoIGNyZWF0ZSBhIHVuaXF1ZSBib2R5IG9mIHdvcmssIGNhcHR1cmluZyB0aGUgc291bCBvZiBDdWJhIHdoaWNoIHdpbGwgYmUgc2hhcmVkIHdpdGggcGhvdG9ncmFwaHkgbG92ZXJzIHdvcmxkd2lkZS48YnIvPkluIHRoZSBzcGlyaXQgb2YgQ3ViYSwgNyBwaG90b3Mgb2YgZWFjaCBmZWxsb3cgd2lsbCBiZSBzb2xkIHRvIHN1cHBvcnQgdGhlIG5leHQgcGhvdG9ncmFwaGVyIGpvaW5pbmcgdGhlIGZlbGxvd3NoaXAgYW5kIHRodXMgb2ZmZXJpbmcgZWFjaCBwaG90b2dyYXBoZXIgdGhlIG9wcG9ydHVuaXR5IHRvIGJlbmVmaXQgdGhlIG5leHQgaW4gbGluZSB0byBjYXJyeSBvbiB0aGUgbGVnYWN5IG9mIEVsbGlvdHQgRXJ3aXR0IGFuZCBDdWJhLlwifSxcIi9wcm9qZWN0c1wiOntcInRpdGxlXCI6XCJwcm9qZWN0cyBwYWdlXCJ9LFwiL3Nob3BcIjp7XCJ0aXRsZVwiOlwic2hvcCBwYWdlXCJ9LFwiL25ld3NcIjp7XCJ0aXRsZVwiOlwibmV3cyBwYWdlXCJ9LFwiL2NvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCBwYWdlXCJ9LFwiL2xlZ2FsXCI6e1widGl0bGVcIjpcImxlZ2FsIHBhZ2VcIn0sXCIvcHJpdmFjeVwiOntcInRpdGxlXCI6XCJwcml2YWN5IHBhZ2VcIn19fX0iXX0=
