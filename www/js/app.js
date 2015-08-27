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
		this.props = props;
		this.state = {
			hash: undefined
		};

		this.toggleBinded = this.toggle.bind(this);
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
			this.props.enabled = false;
			_CartActions2['default'].updateCartEnabled(this.props.enabled);
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
												{ className: 'cart__quantity' },
												'Quantity: ',
												product.quantity
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
												_react2['default'].createElement('img', { className: 'cart__image', src: './assets/images/prints/' + product.file + '_min.jpg' })
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__remove button button--left button--small', onClick: that.removeItem.bind(that, index) },
												'Remove item'
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
									{ href: '#/payment', className: 'cart__button button button--center button--small' },
									'Check out'
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
		key: 'removeItem',
		value: function removeItem(id) {
			_CartActions2['default'].removeFromCart(id);
		}
	}, {
		key: 'handleClickOutside',
		value: function handleClickOutside(e) {
			if (e.target.parentNode.classList.contains('cart__count')) this.toggle();else this.close();
		}
	}, {
		key: 'handleClickInside',
		value: function handleClickInside(e) {
			e.stopPropagation();
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
						{ href: pathUrl },
						_react2['default'].createElement(
							'p',
							{ className: 'button button--small' },
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
					{ key: index, className: 'button button--right button--small ' + classes },
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

		this.opacityMarge = window.innerHeight;
		this.videoPlayed = false;
		this.scrollIndex = 0;
		this.scrollOk = false;

		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		this.goToBiographyBinded = this.goToBiography.bind(this);
		this.toggleVideoBinded = this.toggleVideo.bind(this);

		this.rafBinded = this.raf.bind(this);

		this.raf();
	}

	_createClass(Fellowship, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Fellowship.prototype), 'componentDidMount', this).call(this);

			this._limit = document.querySelector('.js-limit');
			this._artistSection = document.querySelector('.fellowship__artist');
			this._video = document.querySelector('.fellowship__video');
			this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop;
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
						{ href: '#/friends' },
						_react2['default'].createElement(
							'p',
							{ className: 'button button--small' },
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
						_react2['default'].createElement('video', { autoPlay: true, loop: true, muted: true, className: 'video__file', src: './assets/videos/bg-home.webm' })
					),
					_react2['default'].createElement(
						'section',
						{ className: 'fellowship__presentation' },
						_react2['default'].createElement(
							'p',
							{ className: 'paragraph paragraph--big paragraph--center' },
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
								_react2['default'].createElement('img', { className: 'fellowship__elliott', src: '../assets/images/prints/ERE2015002W00033-36A_medium.jpg' })
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
						{ className: 'discover fellowship__discover', onClick: this.goToBiographyBinded },
						_react2['default'].createElement(
							'div',
							{ className: 'shop__scroll button button--center button--small' },
							'Discover Elliott Erwitt\'s biography'
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
							{ className: 'fellowship__artistname paragraph paragraph--big paragraph--center' },
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
								{ className: 'paragraph__column', onClick: this.toggleVideoBinded },
								_react2['default'].createElement('video', { className: 'fellowship__interview', src: './assets/videos/bg-home.webm' }),
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
										{ className: 'fellowship__button button button--center button--small', href: 'http://www.elliotterwitt.com', target: '_blank' },
										'Elliott Erwitt official website'
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
							'a',
							{ href: '#/project/elliott-erwitt', className: 'fellowship__button button button--center button--small' },
							'Discover his project'
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
			if (this._video && this._limit) {
				this.limitOffset = (0, _offset2['default'])(this._limit);
				this.limitTop = this.limitOffset.top + this.limitOffset.height / 2;
				// this.videoOpacity = 1 - (this.limitOffset.top - this.opacityMarge) / (-this.opacityMarge)
				this.videoOpacity = 1 - (this.limitTop - this.opacityMarge) / -this.opacityMarge;
				this._video.style.opacity = this.videoOpacity;
			}
		}
	}, {
		key: 'toggleVideo',
		value: function toggleVideo() {
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
		key: 'goToBiography',
		value: function goToBiography() {
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
		}
	}]);

	return Fellowship;
})(_Page3['default']);

exports['default'] = Fellowship;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../../utils/scrollTo":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Friends.js":[function(require,module,exports){
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

		this.props = props;

		this.OPACITY_MARGE = 30;
		this.OPACITY_DURATION = 300;

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.rafBinded = this.raf.bind(this);
		this.loaded = false;
		this.nImageLoaded = 0;
		this.prints = [];
		this.state = {
			prints: [],
			loadedPrints: []
		};
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		this.raf();

		_PrintApi2['default'].getByArtist(this.props.idSection);
		_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
	}

	_createClass(Gallery, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Gallery.prototype), 'componentDidMount', this).call(this);

			this._items0 = document.querySelectorAll('.gallery__item--0');
			this._items1 = document.querySelectorAll('.gallery__item--1');
			this._items2 = document.querySelectorAll('.gallery__item--2');
			this._items3 = document.querySelectorAll('.gallery__item--3');
			this._items4 = document.querySelectorAll('.gallery__item--4');
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
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
		key: 'render',
		value: function render() {
			var that = this;
			return _react2['default'].createElement(
				'div',
				{ className: 'page page--gallery', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu' },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + this.props.idSection },
						_react2['default'].createElement(
							'p',
							{ className: 'button button--small' },
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
							Object.keys(that.state.loadedPrints[year]).map(function (printId, i) {
								var print = that.state.loadedPrints[year][printId];
								var src = './assets/images/prints/' + print.file + '_min.jpg';
								var random = Math.floor(Math.random() * 6);
								return _react2['default'].createElement(
									'div',
									{ className: 'gallery__item gallery__item--' + print.size + ' gallery__item--' + random, 'data-random': random, key: i, onClick: that.zoomPrint.bind(that, printId) },
									_react2['default'].createElement('img', { className: 'gallery__image', src: src })
								);
							})
						);
					})
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

			this.scrollRaf = scroll(this.rafBinded);
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
					file.src = './assets/images/prints/' + print.file + '_min.jpg';
				}).value();
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(print, e) {
			this.nImageLoaded++;

			var that = this;
			var path = e.explicitOriginalTarget || e.path[0];
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
			this.tlItemsOut.to((0, _domquery2['default'])('.gallery__item--0'), 1, { opacity: 0, ease: Expo.easeInOut }, 0);
			this.tlItemsOut.to((0, _domquery2['default'])('.gallery__item--1'), 1, { opacity: 0, ease: Expo.easeInOut }, 0.2);
			this.tlItemsOut.to((0, _domquery2['default'])('.gallery__item--2'), 1, { opacity: 0, ease: Expo.easeInOut }, 0.4);
			this.tlItemsOut.to((0, _domquery2['default'])('.gallery__item--3'), 1, { opacity: 0, ease: Expo.easeInOut }, 0.6);
			this.tlItemsOut.to((0, _domquery2['default'])('.gallery__item--4'), 1, { opacity: 0, ease: Expo.easeInOut }, 0.8);
			this.tlItemsOut.addCallback(function () {
				window.location.href = '#/project/' + that.props.idSection;
			}, 1);
			// this.tlItemsOut.to(dom('.gallery__item--5'), 1, { opacity:0, ease:Expo.easeInOut }, 1)
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
				_gsap2['default'].set((0, _domquery2['default'])('.home__content'), { opacity: 0 });
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
					{ className: 'video' },
					_react2['default'].createElement('video', { autoPlay: true, loop: true, muted: true, className: 'video__file', src: './assets/videos/bg-home.webm' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'home__content' },
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
			this.tlEntry.to(this._canvas, 2, { opacity: 0, ease: Power2.easeOut });
			this.tlEntry.to((0, _domquery2['default'])('.front-container'), 0.8, { opacity: 1 }, 1.6);
			this.tlEntry.to((0, _domquery2['default'])('.home__content'), 0.8, { opacity: 1 }, 1.6);
			this.tlEntry.to((0, _domquery2['default'])('.cart'), 0.8, { opacity: 1 }, 1.6);
			// TweenMax.to(this._canvas, 4, {x: -vw, ease: Power2.easeOut, delay: 4, onComplete: this.showPageBinded});
		}
	}, {
		key: 'showPage',
		value: function showPage() {
			_gsap2['default'].to((0, _domquery2['default'])('.front-container'), 0.4, { opacity: 1 });
			_gsap2['default'].to((0, _domquery2['default'])('.home__content'), 0.4, { opacity: 1 });
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

			// let hack = setTimeout(function() {
			// 	CartActions.updateCartEnabled(false)
			// 	CartActions.updateCartVisible(false)
			// 	clearTimeout(hack)
			// }, 0);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			// CartActions.updateCartVisible(true)
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
							{ className: 'payment__column cart--black' },
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
												{ className: 'cart__quantity' },
												'Quantity: ',
												product.quantity
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
												_react2['default'].createElement('img', { className: 'cart__image', src: './assets/images/prints/' + product.file + '_min.jpg' })
											),
											_react2['default'].createElement(
												'div',
												{ className: 'cart__remove button button--left button--small', onClick: that.removeItem.bind(that, index) },
												'Remove item'
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
										'Subscribe to the newsletter'
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
								{ href: '', className: 'payment__pay button button--center button--small', onClick: this.pay.bind(this) },
								'Proceed to payment'
							)
						)
					)
				)
			);
		}
	}, {
		key: 'pay',
		value: function pay(e) {
			e.preventDefault();

			// _(this.state.cartItems).forEach((item, index) => {
			// 	PrintApi.order(index, item.serial)
			// }).value();

			// CartApi.pay()
			// CartApi.generatePayButton()
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

var _ = require('lodash');

var Print = (function (_Page) {
	_inherits(Print, _Page);

	function Print(props) {
		_classCallCheck(this, Print);

		_get(Object.getPrototypeOf(Print.prototype), 'constructor', this).call(this, props);

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');

		this._toggleListBinded = this._toggleList.bind(this);
		this._addToCartBinded = this._addToCart.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.state = {
			print: undefined,
			serial: undefined,
			loadedPrint: undefined
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
								{ className: 'print__artist' },
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
													that.state.serial
												),
												_react2['default'].createElement(
													'ul',
													{ className: 'print__serial-list' },
													Object.keys(that.state.print.serials).map(function (index) {
														var enabled = that.state.print.serials[index];
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
												{ href: '#', className: 'print__buy text text--small button button--center button--small button--reverse', onClick: that._addToCartBinded },
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
							)
						)
					);
				})()
			);
		}
	}, {
		key: '_getFirstSerial',
		value: function _getFirstSerial() {
			return _.indexOf(this.state.print.serials, true) + 1;
		}
	}, {
		key: '_toggleList',
		value: function _toggleList() {
			(0, _domquery2['default'])('.print__serial-list').toggleClass('enabled');
		}
	}, {
		key: '_selectSerial',
		value: function _selectSerial(serial, e) {
			this._toggleList();
			(0, _domquery2['default'])('.serial--enabled').removeClass('serial--enabled');
			(0, _domquery2['default'])(e.target).addClass('serial--enabled');
			this.setState({
				serial: serial
			});
		}
	}, {
		key: '_addToCart',
		value: function _addToCart(e) {
			e.stopPropagation();
			e.preventDefault();

			var printId = this.state.print._id;
			var update = {
				city: this.state.print.city,
				year: this.state.print.year,
				price: this.state.print.price,
				serial: this.state.serial,
				file: this.state.print.file,
				copies: this.state.print.copies
			};
			_CartActions2['default'].addToCart(printId, update);
			_CartActions2['default'].updateCartEnabled(true);

			var serials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			var index = serials.indexOf(this.state.serial);
			if (index > -1) {
				serials.splice(index, 1);
			}

			// TODO: update temp list
		}
	}, {
		key: '_loadImage',
		value: function _loadImage() {
			var that = this,
			    file = undefined;

			file = new Image();
			file.onload = that._onImageLoaded.bind(that);
			file.src = './assets/images/prints/' + this.state.print.file + '_medium.jpg';
		}
	}, {
		key: '_onImageLoaded',
		value: function _onImageLoaded(params) {
			if (params.path[0].height >= params.path[0].width * 1.2) {
				this.print = _react2['default'].createElement(
					'div',
					{ className: 'print__left' },
					_react2['default'].createElement(
						'div',
						{ className: 'print__image print__image--portrait' },
						_react2['default'].createElement('img', { src: './assets/images/prints/' + this.state.print.file + '_medium.jpg' }),
						_react2['default'].createElement(
							'div',
							{ className: 'print__tech' },
							_react2['default'].createElement(
								'p',
								null,
								'Archival pigment print measuring'
							),
							_react2['default'].createElement(
								'p',
								null,
								'27.9 × 35.6 cm (11 × 14 inches)'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Printed under the direct supervision of the artist.'
							),
							_react2['default'].createElement(
								'p',
								null,
								'One of a signed, limited edition of 10.'
							)
						)
					)
				);
			} else {
				this.print = _react2['default'].createElement(
					'div',
					{ className: 'print__left' },
					_react2['default'].createElement(
						'div',
						{ className: 'print__image print__image--landscape' },
						_react2['default'].createElement('img', { src: './assets/images/prints/' + this.state.print.file + '_medium.jpg' }),
						_react2['default'].createElement(
							'div',
							{ className: 'print__tech' },
							_react2['default'].createElement(
								'p',
								null,
								'Archival pigment print measuring'
							),
							_react2['default'].createElement(
								'p',
								null,
								'27.9 × 35.6 cm (11 × 14 inches)'
							),
							_react2['default'].createElement(
								'p',
								null,
								'Printed under the direct supervision of the artist.'
							),
							_react2['default'].createElement(
								'p',
								null,
								'One of a signed, limited edition of 10.'
							)
						)
					)
				);
			}
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
		key: '_onPrintStoreChange',
		value: function _onPrintStoreChange() {
			var _this2 = this;

			this.setState({
				print: _PrintStore2['default'].getOne()
			}, function () {
				_this2._loadImage();
				_this2.setState({
					serial: _this2._getFirstSerial()
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
		var _this = this;

		_classCallCheck(this, Project);

		_get(Object.getPrototypeOf(Project.prototype), 'constructor', this).call(this, props);

		this.props = props;

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		// dom('.header__title').addClass('header__title--fixed')

		this.state = {
			artist: undefined,
			slideshow: {},
			print: {}
		};

		// this.initTimelines()

		this.zoom = false;
		this.slideshowPrints = {};
		this.action = 'init';
		this.currentIndex = -1;
		this.showSlideshowBinded = this.showSlideshow.bind(this);
		this.toggleZoomBinded = this.toggleZoom.bind(this);
		this.toggleStoryBinded = this.toggleStory.bind(this);
		this._backToGalleryBinded = this.backToGallery.bind(this);
		this._prevBinded = this.prev.bind(this);
		this._nextBinded = this.next.bind(this);
		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.rafBinded = this.raf.bind(this);
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');

		_ArtistApi2['default'].getBySlug(this.props.idSection);
		_ArtistStore2['default'].addChangeListener(this._onArtistStoreChangeBinded);

		var that = this;
		var hack = setTimeout(function () {
			that.zoom = _PrintStore2['default'].getZoom();
			if (that.zoom) {
				_PrintApi2['default'].getSlideshow(_this.props.idSection, that.zoom);
			} else {
				_PrintApi2['default'].getSlideshow(_this.props.idSection);
			}
		}, 10);
		_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Project.prototype), 'componentDidMount', this).call(this);

			this._intro = document.querySelector('.project__intro');
			this.raf();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			// dom('.header__title').removeClass('header__title--fixed')
			_ArtistStore2['default'].removeChangeListener(this._onArtistStoreChangeBinded);
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var that = this;
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

			if (_.size(this.state.slideshow) > 0) {
				if (this.action === 'init') {
					this.slideshowPrints = this.state.slideshow.prints;
				}
				if (this.action === 'prev') {
					this.slideshowPrints.next = this.slideshowPrints.current;
					this.slideshowPrints.current = this.slideshowPrints.prev;
					this.slideshowPrints.prev = this.state.print;
				}
				if (this.action === 'next') {
					this.slideshowPrints.prev = this.slideshowPrints.current;
					this.slideshowPrints.current = this.slideshowPrints.next;
					this.slideshowPrints.next = this.state.print;
				}
				_gsap2['default'].to((0, _domquery2['default'])('.project__print'), 0.4, { opacity: 1 });
			}

			if (_.size(this.slideshowPrints) > 0) {
				title = this.slideshowPrints.current.title;
				city = this.slideshowPrints.current.city;
				country = this.slideshowPrints.current.country;
				year = this.slideshowPrints.current.year;
				story = this.slideshowPrints.current.desc;
				forSale = this.slideshowPrints.current.forSale;
				url = '#/shop/' + this.slideshowPrints.current._id;
			}

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--project', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'submenu project__contact ' },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + this.props.idSection + '/contact-sheet' },
						_react2['default'].createElement(
							'p',
							{ className: 'button button--small' },
							'Contact sheet'
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'submenu project__back ' },
					_react2['default'].createElement(
						'a',
						{ href: '#', onClick: this._backToGalleryBinded },
						_react2['default'].createElement(
							'p',
							{ className: 'button button--small' },
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
								{ className: 'project__discover', onClick: this.showSlideshowBinded },
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
								Object.keys(this.slideshowPrints).map(function (index) {
									var file = _this2.slideshowPrints[index].file + '.jpg';
									var status = index;
									return _react2['default'].createElement(
										'div',
										{ className: 'project__print project__print--' + status, onClick: that.toggleZoomBinded, key: index },
										_react2['default'].createElement('img', { className: 'project__image', src: './assets/images/prints/' + file })
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
							),
							_react2['default'].createElement(
								'div',
								{ className: 'project__footer' },
								_react2['default'].createElement(
									'div',
									{ className: 'project__section' },
									(function () {
										if (forSale) return _react2['default'].createElement(
											'div',
											{ className: 'project__reveal button button--left button--small button--reverse', onClick: _this2.toggleStoryBinded },
											'The story'
										);
									})(),
									_react2['default'].createElement(
										'a',
										{ href: '#', className: 'project__share button button--left button--small button--reverse' },
										'Share'
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
									})(),
									_react2['default'].createElement(
										'h3',
										{ className: 'print__artist print__info--small' },
										name
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'project__section' },
									(function () {
										if (forSale) return _react2['default'].createElement(
											'div',
											null,
											_react2['default'].createElement(
												'a',
												{ href: url, className: 'project__buy button button--right button--small button--reverse' },
												'Buy print'
											)
										);
									})()
								)
							)
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

			this.opacityMarge = window.innerHeight / 2;
			this.limitOffset = (0, _offset2['default'])(this._intro);
			this.limitTop = this.limitOffset.top + this.limitOffset.height / 1.5;
			this.introOpacity = 1 - (this.limitTop - this.opacityMarge) / -this.opacityMarge;
			this._intro.style.opacity = this.introOpacity;

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
		key: 'showSlideshow',
		value: function showSlideshow() {
			this.slideshowOffsetTop = document.querySelector('.project__slideshow').offsetTop;
			TweenMax.to(window, 1.2, { scrollTo: { y: this.slideshowOffsetTop }, ease: Power2.easeOut });
		}
	}, {
		key: 'initTimelines',
		value: function initTimelines() {}
	}, {
		key: 'toggleZoom',
		value: function toggleZoom() {
			if (this.zoom) this.zoomOut();else this.zoomIn();
		}
	}, {
		key: 'zoomIn',
		value: function zoomIn() {
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
		key: 'zoomOut',
		value: function zoomOut() {
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
		key: 'backToGallery',
		value: function backToGallery(e) {
			e.preventDefault();
			this.zoomOut();
		}
	}, {
		key: 'toggleStory',
		value: function toggleStory() {
			(0, _domquery2['default'])('.project__story').toggleClass('enabled');
		}
	}, {
		key: 'hideStory',
		value: function hideStory() {
			(0, _domquery2['default'])('.project__story').removeClass('enabled');
		}
	}, {
		key: 'prev',
		value: function prev() {
			var that = this;

			this.hideStory();
			_gsap2['default'].to((0, _domquery2['default'])('.project__print'), 0.4, { opacity: 0, onComplete: function onComplete() {
					that.currentIndex = that.getPrevIndex();
					that.action = 'prev';
					_PrintApi2['default'].getOne(that.state.slideshow.refs[that.getPrevIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
				} });
		}
	}, {
		key: 'next',
		value: function next() {
			var that = this;

			this.hideStory();
			// that.currentIndex = that.getNextIndex()
			// that.action = 'next'
			// PrintApi.getOne(that.state.slideshow.refs[that.getNextIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
			// Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 0, onComplete: () => {
			// 	that.complete = true
			// 	Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 1});
			// }});
			_gsap2['default'].to((0, _domquery2['default'])('.project__print'), 0.4, { opacity: 0, onComplete: function onComplete() {
					that.currentIndex = that.getNextIndex();
					that.action = 'next';
					_PrintApi2['default'].getOne(that.state.slideshow.refs[that.getNextIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
				} });
		}
	}, {
		key: 'getPrevIndex',
		value: function getPrevIndex() {
			return this.currentIndex - 1 < 0 ? this.state.slideshow.refs.length - 1 : this.currentIndex - 1;
		}
	}, {
		key: 'getNextIndex',
		value: function getNextIndex() {
			return this.currentIndex + 1 > this.state.slideshow.refs.length - 1 ? 0 : this.currentIndex + 1;
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
				slideshow: _PrintStore2['default'].getSlideshow(),
				print: _PrintStore2['default'].getOne()
			}, function () {
				if (_this3.currentIndex === -1) _this3.currentIndex = _this3.state.slideshow.currentIndex;
				// Tweenmax.to(dom('.project__prints'), 0.4, {opacity: 1});
			});
		}
	}]);

	return Project;
})(_Page3['default']);

exports['default'] = Project;
module.exports = exports['default'];

},{"./../../actions/AppActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js","./../../actions/PrintActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js","./../../api/ArtistApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/ArtistApi.js","./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/ArtistStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/ArtistStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../../utils/scrollTo":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js":[function(require,module,exports){
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

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');

		this._showPrintsBinded = this._showPrints.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this.nImageLoaded = 0;
		this.loaded = false;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');
		this.rafBinded = this.raf.bind(this);
		this.state = {
			prints: {}
		};

		// this.raf()

		_PrintApi2['default'].getForSale();
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

		// setupAnimations() {
		// 	let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// 	// transition In
		// 	this.tlIn.to(dom('.front-container'), 0.4, {opacity: 0}, 0);
		// 	this.tlIn.from(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut}, 0.4)
		// 	this.tlIn.addCallback(() => {
		// 		console.log('call')
		// 		dom('body')
		// 			.removeClass('body--black')
		// 			.addClass('body--white')
		// 	}, 1.4)
		// 	this.tlIn.to(dom('.front-container'), 0.4, {opacity: 1}, 1.4);

		// 	// transition Out
		// 	this.tlOut.to(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

		// 	// reset
		// 	this.tlIn.pause(0)
		// 	this.tlOut.pause(0)
		// }

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
							{ className: 'shop__scroll button button--center button--small' },
							'Discover Elliott Erwitt\'s prints'
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
								_react2['default'].createElement('img', { src: './assets/images/prints/' + file }),
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
											{ className: 'shop__details button button--center button--small button--reverse' },
											'More details'
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
					file.src = './assets/images/prints/' + print.file + '_min.jpg';
				}).value();
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(e) {
			this.nImageLoaded++;
			if (this.nImageLoaded >= this.max) {
				var grid = document.querySelector('.shop');
				if (grid) {
					var iso = new Masonry(grid, {
						itemSelector: '.shop__print',
						columnWidth: '.shop__print',
						gutter: 50
					});
				}
			}
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
			var _this = this;

			var top = _Utils2['default'].GetScrollTop();

			_((0, _domquery2['default'])('.shop__print')).forEach(function (el) {
				_this.videoOffset = (0, _offset2['default'])(el);
				_this.scrollTop = _Utils2['default'].GetScrollTop();
				// this.topPosition = Math.floor(this.props.videoID/3) * this.contentHeight
				_this.topPosition = el.offsetTop;
				_this.yPosition = (_this.scrollTop - _this.topPosition) * 0.2;
				// this.yPosition = this.scrollTop * 0.2;

				if ((0, _domquery2['default'])(el).hasClass('js-fast')) {
					el.style[_this.transform] = 'translate(0px, ' + -_this.yPosition + 'px)';
				}

				if ((0, _domquery2['default'])(el).hasClass('js-slow')) {
					el.style[_this.transform] = 'translate(0px, ' + _this.yPosition + 'px)';
				}
			}).value();

			// if (document.querySelector('.fellowship__artist')) {
			// 	document.querySelector('.video__file').style[this.transform] = ('translate(0px, '+ ((top/2)-(window.innerHeight/2)) +'px) translateZ(0)');
			// 	document.querySelector('.fellowship__artist').style[this.transform] = ('translate(0px, '+ (-top/4) +'px) translateZ(0)');
			// 	document.querySelector('.fellowship__elliott').style[this.transform] = ('translate(0px, '+ (-top/4) +'px) translateZ(0)');
			// }
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
			this.setState({
				prints: _PrintStore2['default'].getForSale()
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
		var count = 0;
		_(_products).forEach(function (product, index) {
			count += product.quantity;
		}).value();
		return count;
		// return Object.keys(_products).length;
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
	_(prints).forEach(function (print) {
		if (!_artistPrints[print._id]) {
			_artistPrints[print._id] = print;
		}
	}).value();
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
			if (this.zoom) {
				window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop - window.innerHeight * 0.2 - 40);
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

},{"./../../app/actions/PrintActions":"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/PrintActions.js","./../../app/stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../Pager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/Pager.js","lodash/String/capitalize":"/Users/nicolas/Developement/freelance/Havana/node_modules/lodash/String/capitalize.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/www/data/data.json":[function(require,module,exports){
module.exports={"artists":{"elliott-erwitt":{"name":"Elliott Erwitt","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Cuba 1964","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"elliott-erwitt","nPhotos":8}]},"qiu-yang":{"name":"Qiu Yang","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"qiu-yang","nPhotos":6}]},"philip-sinden":{"name":"Philip Sinden","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 2","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"philip-sinden","nPhotos":4}]},"jack-duet":{"name":"Jack Duet","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 3","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"jack-duet","nPhotos":0}]}},"fellowship":{"fellowship":{"paragraphs":["A fellowship is a communion of people sharing a common passion.","In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.","Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7."]},"biography":{"paragraphs":["A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.","In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy.","In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.","The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision."]}},"home":{"paragraphs":["Cuba has always fascinated and intrigued people from around the world and led to the foundation of the Elliott Erwitt Havana Club 7 Fellowship for Documentary Photography. Founded in a shared passion for Cuba and its people we wish to build a legacy of Cuba today and take it into the future built on the work of Elliott Erwitt.","As the Fellowship evolves you will be able to acquire unique documentary photography and by doing so support future recipients continuing the legacy."]},"news":[{"date":"04.10.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"18.09.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."},{"date":"13.09.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}],"routes":{"content":{"mytext":"some global text"},"menu":[{"id":"fellowship","name":"Fellowship","url":"/fellowship"},{"id":"projects","name":"Projects","url":"/projects"},{"id":"shop","name":"Shop","url":"/shop"},{"id":"news","name":"News","url":"/news"}],"footer-menu":[{"id":"contact","name":"Contact","url":"/contact"},{"id":"privacy","name":"Privacy","url":"/privacy"},{"id":"legal","name":"Legal","url":"/legal"}],"default-route":"","routing":{"":{"title":"homepage","content":"Havana Club 7 Fellowship is aeustiunti <a href='#/fellowship'>fellowship</a> and lantemquiam volores aut epico and <a href='#/projects'>project</a> unt que vererna mendebi. Namenis esed milla nosam vel ea <a href='#/shop'>shop</a> estrum und nexpedion re consequunt. Nam vendio et parcit, comni <a href='#/news'>news</a>"},"/fellowship":{"title":"fellowship page","content":"In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.<br/>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again – this time to initiate the fellowship with Havana Club 7. A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.<br/>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy of Elliott Erwitt and Cuba."},"/projects":{"title":"projects page"},"/shop":{"title":"shop page"},"/news":{"title":"news page"},"/contact":{"title":"contact page"},"/legal":{"title":"legal page"},"/privacy":{"title":"privacy page"}}},"shop":{"intro":{"title":"Discover and buy artwork","paragraphs":["The Fellowship shop is key to the fellowship. Here you can purchase limited edition signed originals by the photographer.","50% of the proceeds will go to support the next fellowship photographer and 50% will go to the photographer. In addition to the proceeds from print sales Havana Club 7 will also fund additional photographers to go to Cuba."]}}}
},{}]},{},["/Users/nicolas/Developement/freelance/Havana/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hY3Rpb25zL0FydGlzdEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvQ2FydEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvUHJpbnRBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQXJ0aXN0QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQ2FydEFwaS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYXBpL1ByaW50QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0NhcnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Db250YWN0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0ZlbGxvd3NoaXAuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvRnJpZW5kcy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9HYWxsZXJ5LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTGVnYWwuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTmV3cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Ob3Rmb3VuZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9QYXltZW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaXZhY3kuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9TaG9wLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25maWcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcHBDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcnRpc3RDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9DYXJ0Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvUHJpbnRDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc2VydmljZXMvUm91dGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9BcnRpc3RTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0NhcnRTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL1ByaW50U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL0F1dG9iaW5kLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9VdGlscy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvb2Zmc2V0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9yYWYuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL3Njcm9sbFRvLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL1BhZ2VyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZVBhZ2VyLmpzIiwid3d3L2RhdGEvZGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzttQkNiZ0IsS0FBSzs7OztvQkFDQSxNQUFNOzs7O3FCQUNULE9BQU87Ozs7bUJBQ1QsS0FBSzs7Ozt5QkFDQyxXQUFXOzs7O0FBRWpDLDRCQUFVLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7O0FBR3hCLElBQUksR0FBRyxHQUFHLHNCQUFTLENBQUE7QUFDbkIs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QUFFM0MsT0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBO0FBQ25DLE9BQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDJCQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3RGLE9BQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDJCQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ3hGLE9BQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDJCQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ3hGLE9BQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDJCQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ3hGLE9BQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLDJCQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ3hGLE9BQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQU07QUFDakMsVUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ3pELEVBQUUsQ0FBQyxD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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsR0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDO01BQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLGNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxjQUFPLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxLQUFHLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxRQUFRLElBQUUsT0FBTyxDQUFDLEtBQUcsQ0FBQyxHQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFBLEFBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksSUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEtBQUssS0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxHQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0tBQUMsRUFBQyxHQUFHLEVBQUMsYUFBUyxDQUFDLEVBQUM7QUFBQyxVQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSztVQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUs7VUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLO1VBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFHLENBQUMsR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFHLENBQUMsR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsS0FBSyxLQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBRSxFQUFFLENBQUMsQ0FBQSxBQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxLQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7S0FBQyxFQUFDLENBQUM7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLFlBQVU7QUFBQyxXQUFPLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUMsVUFBVSxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLFlBQVU7QUFBQyxXQUFPLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBTyxDQUFDLENBQUMsVUFBVSxLQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0dBQUMsQ0FBQTtDQUFDLENBQUMsRUFB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OiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgKHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBBcHAgZnJvbSAnQXBwJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgUGFnZXIgZnJvbSAnUGFnZXInXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBGYXN0Q2xpY2sgZnJvbSAnZmFzdGNsaWNrJ1xuXG5GYXN0Q2xpY2soZG9jdW1lbnQuYm9keSlcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0Ly8gSW5pdCByb3V0ZXJcblx0XHR2YXIgcm91dGVyID0gbmV3IFJvdXRlcigpXG5cdFx0cm91dGVyLmluaXQoKVxuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cdFx0XG5cdFx0Ly8gUmVuZGVyIHJlYWN0XG5cdFx0UmVhY3QucmVuZGVyKFxuXHRcdFx0PEFwcFRlbXBsYXRlIC8+LFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuICAgIFx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRnJvbnRDb250YWluZXIgZnJvbSAnRnJvbnRDb250YWluZXInXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnUGFnZXNDb250YWluZXInXG5pbXBvcnQgQ2FydCBmcm9tICdDYXJ0J1xuaW1wb3J0IENhcnRTdG9yZSBmcm9tICdDYXJ0U3RvcmUnXG5cbmZ1bmN0aW9uIF9nZXRDYXJ0U3RhdGUoKSB7XG5cdHJldHVybiB7XG5cdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0Y2FydENvdW50OiBDYXJ0U3RvcmUuZ2V0Q2FydENvdW50KCksXG5cdFx0Y2FydFRvdGFsOiBDYXJ0U3RvcmUuZ2V0Q2FydFRvdGFsKCksXG5cdFx0Y2FydFZpc2libGU6IENhcnRTdG9yZS5nZXRDYXJ0VmlzaWJsZSgpLFxuXHRcdGNhcnRFbmFibGVkOiBDYXJ0U3RvcmUuZ2V0Q2FydEVuYWJsZWQoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlID0gX2dldENhcnRTdGF0ZSgpXG5cdFx0dGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uU3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFxuXHRcdENhcnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdENhcnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ndGVtcGxhdGUnPlxuXHRcdFx0XHQ8Y2FudmFzIHJlZj0nY2FudmFzJyBjbGFzc05hbWU9J2NhbnZhcyc+PC9jYW52YXM+XG5cdFx0XHRcdDxGcm9udENvbnRhaW5lciAvPlxuXHRcdFx0XHQ8UGFnZXNDb250YWluZXIgLz5cblx0XHRcdFx0PENhcnRcblx0XHRcdFx0XHRwcm9kdWN0cz17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0SXRlbXMgOiAnJ31cblx0XHRcdFx0XHRjb3VudD17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0Q291bnQgOiAnJ31cblx0XHRcdFx0XHR0b3RhbD17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0VG90YWwgOiAnJ31cblx0XHRcdFx0XHR2aXNpYmxlPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRWaXNpYmxlIDogJyd9XG5cdFx0XHRcdFx0ZW5hYmxlZD17KHRoaXMuc3RhdGUpID8gdGhpcy5zdGF0ZS5jYXJ0RW5hYmxlZCA6ICcnfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0R2xvYmFsRXZlbnRzLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKF9nZXRDYXJ0U3RhdGUoKSlcblx0fVxuXG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCAnZmV0Y2gnXG5cbnZhciBBcnRpc3RBY3Rpb25zID0ge1xuXG4gICAgcmVjZWl2ZUFsbCA6IGZ1bmN0aW9uKGFydGlzdHMpe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BTExfQVJUSVNUUyxcbiAgICAgICAgICAgIGl0ZW06IGFydGlzdHNcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlY2VpdmUgOiBmdW5jdGlvbihhcnRpc3Qpe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1QsXG4gICAgICAgICAgICBpdGVtOiBhcnRpc3RcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXJ0aXN0Q29uc3RhbnRzLkVSUk9SLFxuICAgICAgICAgICAgaXRlbTogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBDYXJ0Q29uc3RhbnRzIGZyb20gJ0NhcnRDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIENhcnRBY3Rpb25zID0ge1xuXG5cdC8vIFJlY2VpdmUgaW5pdGFsIHByb2R1Y3QgZGF0YVxuXHRyZWNlaXZlUHJvZHVjdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuUkVDRUlWRV9EQVRBLFxuXHRcdFx0ZGF0YTogZGF0YVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gU2V0IGN1cnJlbnRseSBzZWxlY3RlZCBwcm9kdWN0IHZhcmlhdGlvblxuXHRzZWxlY3RQcm9kdWN0OiBmdW5jdGlvbihpbmRleCkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuU0VMRUNUX1BST0RVQ1QsXG5cdFx0XHRkYXRhOiBpbmRleFxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gQWRkIGl0ZW0gdG8gY2FydFxuXHRhZGRUb0NhcnQ6IGZ1bmN0aW9uKHByaW50SWQsIHVwZGF0ZSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9BREQsXG5cdFx0XHRwcmludElkOiBwcmludElkLFxuXHRcdFx0dXBkYXRlOiB1cGRhdGVcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuXHRyZW1vdmVGcm9tQ2FydDogZnVuY3Rpb24ocHJpbnRJZCkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9SRU1PVkUsXG5cdFx0XHRwcmludElkOiBwcmludElkXG5cdFx0fSlcblx0fSxcblxuXHQvLyBVcGRhdGUgY2FydCB2aXNpYmlsaXR5IHN0YXR1c1xuXHR1cGRhdGVDYXJ0VmlzaWJsZTogZnVuY3Rpb24oY2FydFZpc2libGUpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfVklTSUJMRSxcblx0XHRcdGNhcnRWaXNpYmxlOiBjYXJ0VmlzaWJsZVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gVXBkYXRlIGNhcnQgZW5hYmxlZCBzdGF0dXNcblx0dXBkYXRlQ2FydEVuYWJsZWQ6IGZ1bmN0aW9uKGNhcnRFbmFibGVkKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX0VOQUJMRUQsXG5cdFx0XHRjYXJ0RW5hYmxlZDogY2FydEVuYWJsZWRcblx0XHR9KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIFByaW50QWN0aW9ucyA9IHtcblxuXHRyZWNlaXZlQWxsIDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FMTF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlRm9yU2FsZSA6IGZ1bmN0aW9uKHByaW50cyl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfRk9SU0FMRSxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVTbGlkZXNob3cgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVGcm9tQXJ0aXN0IDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlQsXG5cdFx0XHRpdGVtOiBwcmludFxuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5FUlJPUixcblx0XHRcdGl0ZW06IGVycm9yXG5cdFx0fSk7XG5cdH0sXG5cblx0c2V0UHJpbnRab29tIDogZnVuY3Rpb24oaWQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlpPT00sXG5cdFx0XHRpdGVtOiBpZFxuXHRcdH0pO1x0XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmludEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgQXJ0aXN0QWN0aW9ucyBmcm9tICdBcnRpc3RBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9hcnRpc3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRBcnRpc3RBY3Rpb25zLnJlY2VpdmVBbGwoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlTbHVnIDogZnVuY3Rpb24oc2x1Zykge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvYXJ0aXN0LycgKyBzbHVnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdEFydGlzdEFjdGlvbnMucmVjZWl2ZShqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdHBheSA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKCdodHRwczovL3NlY3VyZS10ZXN0LmJlMmJpbGwuY29tL2Zyb250L2Zvcm0vcHJvY2VzcycsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ly8gaGVhZGVyczoge1xuXHRcdFx0XHQvLyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHQvLyB9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuXHRcdFx0XHRPUkRFUklEOiAnMDEyMzQ1Njc4OSdcblx0XHRcdH0pXG5cdFx0fSlcblx0fSxcblxuXHRnZW5lcmF0ZVBheUJ1dHRvbiA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKCcuL3BocC9oZWxsby5waHAnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS50ZXh0KClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oYm9keSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhib2R5KVxuXHRcdFx0XHQvLyBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGJvZHlcblx0XHRcdH0pXG5cdH1cblxufTsiLCJpbXBvcnQgUHJpbnRBY3Rpb25zIGZyb20gJ1ByaW50QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdGdldEFsbCA6IGZ1bmN0aW9uKCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUFsbChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRGb3JTYWxlIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMvZm9yc2FsZScpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0UHJpbnRBY3Rpb25zLnJlY2VpdmVGb3JTYWxlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldFNsaWRlc2hvdyA6IGZ1bmN0aW9uKGFydGlzdCwgaWQpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy8nICsgYXJ0aXN0ICsgJy9zbGlkZXNob3cvJyArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlU2xpZGVzaG93KGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldEJ5QXJ0aXN0IDogZnVuY3Rpb24oYXJ0aXN0KSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMvJyArIGFydGlzdClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUZyb21BcnRpc3QoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0T25lIDogZnVuY3Rpb24oaWQpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50LycgKyBpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZShqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRvcmRlciA6IGZ1bmN0aW9uKGlkLCBzZXJpYWwpIHtcblx0XHRjb25zb2xlLmxvZyhzZXJpYWwpXG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludC8nICsgaWQsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQnc2VyaWFsJyA6IHNlcmlhbFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9LFxuXG5cdGNyZWF0ZSA6IGZ1bmN0aW9uKHByaW50KXtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cycsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHQncHJpbnQnIDogcHJpbnRcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH1cblxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IENhcnRBY3Rpb25zIGZyb20gJ0NhcnRBY3Rpb25zJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhhc2g6IHVuZGVmaW5lZFxuXHRcdH1cblxuXHRcdHRoaXMudG9nZ2xlQmluZGVkID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZCA9IHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZClcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0ZG9tKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0X19jb250ZW50Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKCF0aGlzLnByb3BzLmVuYWJsZWQpXG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMucHJvcHMuZW5hYmxlZCA9IHRydWVcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZCh0aGlzLnByb3BzLmVuYWJsZWQpXG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnByb3BzLmVuYWJsZWQgPSBmYWxzZVxuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRoaXMucHJvcHMuZW5hYmxlZClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgaXRlbUxhYmVsID0gKHRoaXMucHJvcHMuY291bnQgPiAxKSA/ICdpdGVtcycgOiAnaXRlbSdcblx0XHRsZXQgY2xhc3NlcyA9ICh0aGlzLnByb3BzLmVuYWJsZWQgPyAnY2FydC0tZW5hYmxlZCAnIDogJyAnKSArICh0aGlzLnByb3BzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5oYXNoID09PSAnc2hvcCcgPyAnY2FydC0tdmlzaWJsZScgOiAnJylcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J2NhcnQgJyArIGNsYXNzZXN9IHJlZj0nY2FydCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb3VudCc+Q2FydCDigJQ8c3Bhbj57dGhpcy5wcm9wcy5jb3VudH08L3NwYW4+IHtpdGVtTGFiZWx9PC9kaXY+XG5cdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLmNvdW50ID4gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2NhcnRfX3Byb2R1Y3RzJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnByb2R1Y3RzKS5tYXAoZnVuY3Rpb24oaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgcHJvZHVjdCA9IHRoYXQucHJvcHMucHJvZHVjdHNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2NhcnRfX3Byb2R1Y3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19hcnRpc3QnPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fZGV0YWlscyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NpdHknPntwcm9kdWN0LmNpdHl9PC9kaXY+LCA8ZGl2IGNsYXNzTmFtZT0nY2FydF9feWVhcic+e3Byb2R1Y3QueWVhcn08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19xdWFudGl0eSc+UXVhbnRpdHk6IHtwcm9kdWN0LnF1YW50aXR5fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fc2VyaWFsJz5TZXJpYWwgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19udW1iZXInPntwcm9kdWN0LnNlcmlhbH0ve3Byb2R1Y3QuY29waWVzfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaWNlJz57cHJvZHVjdC5wcmljZX08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpbnQnPjxpbWcgY2xhc3NOYW1lPSdjYXJ0X19pbWFnZScgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3Byb2R1Y3QuZmlsZSsnX21pbi5qcGcnfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3JlbW92ZSBidXR0b24gYnV0dG9uLS1sZWZ0IGJ1dHRvbi0tc21hbGwnIG9uQ2xpY2s9e3RoYXQucmVtb3ZlSXRlbS5iaW5kKHRoYXQsIGluZGV4KX0+UmVtb3ZlIGl0ZW08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3N1YnRvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlN1YnRvdGFsOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+e3RoaXMucHJvcHMudG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaGVja291dCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjL3BheW1lbnQnIGNsYXNzTmFtZT0nY2FydF9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLWNlbnRlciBidXR0b24tLXNtYWxsJz5DaGVjayBvdXQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29udGVudCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2VtcHR5Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFlvdSBoYXZlIG5vIGl0ZW1zIGluIHlvdXIgY2FydC5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cmVtb3ZlSXRlbShpZCkge1xuXHRcdENhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0KGlkKVxuXHR9XG5cblx0aGFuZGxlQ2xpY2tPdXRzaWRlKGUpIHtcblx0XHRpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX2NvdW50JykpIHRoaXMudG9nZ2xlKClcblx0XHRlbHNlIHRoaXMuY2xvc2UoKVxuXHR9XG5cblx0aGFuZGxlQ2xpY2tJbnNpZGUoZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0fVxuXG5cdF9kaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRoYXNoOiBBcHBTdG9yZS5oYXNoKClcblx0XHR9KVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJvbnRDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2VCaW5kZWQgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhhc2g6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2VCaW5kZWQpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IG1lbnVEYXRhID0gQXBwU3RvcmUubWVudUNvbnRlbnQoKVxuXHRcdGxldCBtZW51SXRlbXMgPSBtZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0bGV0IHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0bGV0IGNsYXNzZXMgPSAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKSB8fCAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKydzJykgPyAnYnV0dG9uLS1lbmFibGVkJyA6ICcnXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9eydoZWFkZXJfX2l0ZW0gJyArIGNsYXNzZXN9IGtleT17aW5kZXh9PjxhIGhyZWY9e3BhdGhVcmx9PjxwIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tc21hbGwnPntpdGVtLm5hbWV9PC9wPjwvYT48L2xpPlxuXHRcdFx0KVxuXHRcdH0pLnJldmVyc2UoKVxuXHRcdGxldCBmb290ZXJNZW51RGF0YSA9IEFwcFN0b3JlLmZvb3Rlck1lbnVDb250ZW50KClcblx0XHRsZXQgZm9vdGVyTWVudUl0ZW1zID0gZm9vdGVyTWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdGxldCBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdGxldCBjbGFzc2VzID0gKGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuaGFzaCkgfHwgKGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuaGFzaCsncycpID8gJ2J1dHRvbi0tZW5hYmxlZCcgOiAnJ1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXsnYnV0dG9uIGJ1dHRvbi0tcmlnaHQgYnV0dG9uLS1zbWFsbCAnICsgY2xhc3Nlc30+PGEgaHJlZj17cGF0aFVybH0+e2l0ZW0ubmFtZX08L2E+PC9saT5cblx0XHRcdClcblx0XHR9KVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2Zyb250Q29udGFpbmVyJyBjbGFzc05hbWU9J2Zyb250LWNvbnRhaW5lcicgcmVmPSdmcm9udC1jb250YWluZXInPlxuXHRcdFx0XHQ8aGVhZGVyIGlkPSdoZWFkZXInIGNsYXNzTmFtZT0naGVhZGVyJz5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdoZWFkZXJfX3RpdGxlJz48YSBocmVmPScjLyc+RWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNzxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX3N1YnRpdGxlJz5GZWxsb3dzaGlwPC9kaXY+PC9hPjwvaDE+XG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J2hlYWRlcl9fbWVudSc+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdoZWFkZXJfX2xpc3QnPlxuXHRcdFx0XHRcdFx0XHR7bWVudUl0ZW1zfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXInPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtmb290ZXJNZW51SXRlbXN9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRoYXNoOiBBcHBTdG9yZS5oYXNoKClcblx0XHR9KVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZSBmcm9tICdCYXNlUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0c3VwZXIuc2V0dXBBbmltYXRpb25zKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsIHRoaXMucmVzaXplKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlciBmcm9tICdCYXNlUGFnZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnSG9tZSdcbmltcG9ydCBGZWxsb3dzaGlwIGZyb20gJ0ZlbGxvd3NoaXAnXG5pbXBvcnQgRnJpZW5kcyBmcm9tICdGcmllbmRzJ1xuaW1wb3J0IFByb2plY3RzIGZyb20gJ1Byb2plY3RzJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnUHJvamVjdCdcbmltcG9ydCBHYWxsZXJ5IGZyb20gJ0dhbGxlcnknXG5pbXBvcnQgU2hvcCBmcm9tICdTaG9wJ1xuaW1wb3J0IFByaW50IGZyb20gJ1ByaW50J1xuaW1wb3J0IE5ld3MgZnJvbSAnTmV3cydcbmltcG9ydCBQYXltZW50IGZyb20gJ1BheW1lbnQnXG5pbXBvcnQgQ29udGFjdCBmcm9tICdDb250YWN0J1xuaW1wb3J0IExlZ2FsIGZyb20gJ0xlZ2FsJ1xuaW1wb3J0IFByaXZhY3kgZnJvbSAnUHJpdmFjeSdcbmltcG9ydCBOb3Rmb3VuZCBmcm9tICdOb3Rmb3VuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNDb250YWluZXIgZXh0ZW5kcyBCYXNlUGFnZXIge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0bGV0IGhhc2ggPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG5cdFx0bGV0IHR5cGUgPSB1bmRlZmluZWRcblx0XHRsZXQgaWQgPSB1bmRlZmluZWRcblxuXHRcdHN3aXRjaChoYXNoLnBhcmVudCkge1xuXHRcdFx0Y2FzZSAnJzpcblx0XHRcdFx0dHlwZSA9IEhvbWVcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2ZlbGxvd3NoaXAnOlxuXHRcdFx0XHR0eXBlID0gRmVsbG93c2hpcFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZnJpZW5kcyc6XG5cdFx0XHRcdHR5cGUgPSBGcmllbmRzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwcm9qZWN0cyc6XG5cdFx0XHRcdHR5cGUgPSBQcm9qZWN0c1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncHJvamVjdCc6XG5cdFx0XHRcdGlmIChoYXNoLnBhcnRzLmxlbmd0aCA+IDIpIHtcblx0XHRcdFx0XHRpZiAoaGFzaC5wYXJ0c1syXSA9PT0gJ2NvbnRhY3Qtc2hlZXQnKSB7XG5cdFx0XHRcdFx0XHR0eXBlID0gR2FsbGVyeVxuXHRcdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHpvb20gc3VyIHVuZSBwaG90b1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0eXBlID0gUHJvamVjdFxuXHRcdFx0XHRcdGlkID0gaGFzaC50YXJnZXRJZFxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdzaG9wJzpcblx0XHRcdFx0aWYgKGhhc2gucGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHR5cGUgPSBQcmludFxuXHRcdFx0XHRcdGlkID0gaGFzaC50YXJnZXRJZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSBTaG9wXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ25ld3MnOlxuXHRcdFx0XHR0eXBlID0gTmV3c1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncGF5bWVudCc6XG5cdFx0XHRcdHR5cGUgPSBQYXltZW50XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdjb250YWN0Jzpcblx0XHRcdFx0dHlwZSA9IENvbnRhY3Rcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2xlZ2FsJzpcblx0XHRcdFx0dHlwZSA9IExlZ2FsXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwcml2YWN5Jzpcblx0XHRcdFx0dHlwZSA9IFByaXZhY3lcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHR5cGUgPSBOb3Rmb3VuZFxuXHRcdH1cblx0XHR0aGlzLnNldHVwTmV3Q29tcG9uZW50KGhhc2gucGFyZW50LCB0eXBlLCBpZClcblx0fVxufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdjb250YWN0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHR7Y29udGVudC50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgb2Zmc2V0IGZyb20gJ29mZnNldCdcbmltcG9ydCBzY3JvbGxUbyBmcm9tICdzY3JvbGxUbydcbmxldCBzY3JvbGwgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0IC8vIElFIEZhbGxiYWNrLCB5b3UgY2FuIGV2ZW4gZmFsbGJhY2sgdG8gb25zY3JvbGxcblx0XHRcdCBmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwLzYwKSB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlbGxvd3NoaXAgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2aWV3OiAnYmlvZ3JhcGh5J1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLm9wYWNpdHlNYXJnZSA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMudmlkZW9QbGF5ZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0XG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cdFx0XG5cdFx0dGhpcy5nb1RvQmlvZ3JhcGh5QmluZGVkID0gdGhpcy5nb1RvQmlvZ3JhcGh5LmJpbmQodGhpcylcblx0XHR0aGlzLnRvZ2dsZVZpZGVvQmluZGVkID0gdGhpcy50b2dnbGVWaWRlby5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0dGhpcy5yYWZCaW5kZWQgPSB0aGlzLnJhZi5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0dGhpcy5yYWYoKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0dGhpcy5fbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGltaXQnKVxuXHRcdHRoaXMuX2FydGlzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fYXJ0aXN0Jylcblx0XHR0aGlzLl92aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX192aWRlbycpXG5cdFx0dGhpcy5hcnRpc3RPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fYXJ0aXN0Jykub2Zmc2V0VG9wXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IGZlbGxvd3NoaXBEYXRhID0gQXBwU3RvcmUuZmVsbG93c2hpcENvbnRlbnQoKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLWZlbGxvd3NoaXAnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1Ym1lbnUnPjxhIGhyZWY9JyMvZnJpZW5kcyc+PHAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uLS1zbWFsbCc+RnJpZW5kcyBvZiB0aGUgZmVsbG93c2hpcDwvcD48L2E+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmZWxsb3dzaGlwJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8gZmVsbG93c2hpcF9fdmlkZW8nPlxuXHRcdFx0XHRcdFx0PHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPSd2aWRlb19fZmlsZScgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS53ZWJtJz48L3ZpZGVvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19wcmVzZW50YXRpb24nPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1iaWcgcGFyYWdyYXBoLS1jZW50ZXInPkEgZmVsbG93c2hpcCBpcyBhIGNvbW11bmlvbiBvZiBwZW9wbGUgc2hhcmluZyBhIGNvbW1vbiBwYXNzaW9uLjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwgcGFyYWdyYXBoLS1jZW50ZXInPkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1tZWRpdW0gcGFyYWdyYXBoLS1jZW50ZXInPk1hc3RlciBwaG90b2dyYXBoZXIgRWxsaW90dCBFcndpdHTigJlzIGxpZmVsb25nIGxvdmUgb2YgcGhvdG9ncmFwaHkgYW5kIEN1YmEgaGFzIGJyb3VnaHQgaGltIGJhY2sgdG8gQ3ViYSBhZ2FpbiBhZnRlciA1MSB5ZWFycyDigJMgdGhpcyB0aW1lIHRvIGluaXRpYXRlIHRoZSBmZWxsb3dzaGlwIHdpdGggSGF2YW5hIENsdWIgNy48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cganMtbGltaXQnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4gcGFyYWdyYXBoX19jb2x1bW4tLWxlZnQnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19lbGxpb3R0JyBzcmM9Jy4uL2Fzc2V0cy9pbWFnZXMvZWxsaW90dC1lcndpdHQuanBnJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5BIG5ldyBib2R5IG9mIHdvcmsgd2lsbCBjcmVhdGUgYSBzdGFydGluZyBwb2ludCBmb3IgYSBuZXcgZ2VuZXJhdGlvbiBvZiBwaG90b2dyYXBoZXJzIHRvIHJlbGF0ZSB0bywgdG8gZnVydGhlciBkZXZlbG9wIHRoZWlyIGNyYWZ0IGFuZCBoZWxwIChyZSlkZWZpbmUgdGhlIGdlbnJlIGluIHRoZSAyMXN0IGNlbnR1cnkuICBJbnNwaXJlZCBieSBFbGxpb3R0IEVyd2l0dCwgZXhjZXB0aW9uYWwgdGFsZW50cyBzZWxlY3RlZCBmb3IgdGhlIGZlbGxvd3NoaXAgd2lsbCBlYWNoIGNyZWF0ZSBhIHVuaXF1ZSBib2R5IG9mIHdvcmssIGNhcHR1cmluZyB0aGUgc291bCBvZiBDdWJhIHdoaWNoIHdpbGwgYmUgc2hhcmVkIHdpdGggcGhvdG9ncmFwaHkgbG92ZXJzIHdvcmxkd2lkZS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLW1lZGl1bSBwYXJhZ3JhcGgtLWNlbnRlcic+SW4gdGhlIHNwaXJpdCBvZiBDdWJhLCA3IHBob3RvcyBvZiBlYWNoIGZlbGxvdyB3aWxsIGJlIHNvbGQgdG8gc3VwcG9ydCB0aGUgbmV4dCBwaG90b2dyYXBoZXIgam9pbmluZyB0aGUgZmVsbG93c2hpcCBhbmQgdGh1cyBvZmZlcmluZyBlYWNoIHBob3RvZ3JhcGhlciB0aGUgb3Bwb3J0dW5pdHkgdG8gYmVuZWZpdCB0aGUgbmV4dCBpbiBsaW5lIHRvIGNhcnJ5IG9uIHRoZSBsZWdhY3kuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fcm93Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5JbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgZnVuZCBhIHNpbWlsYXIgYW1vdW50IHRvIGdpdmUgbW9yZSBwaG90b2dyYXBoZXJzIHRoZSBjaGFuY2UgdG8gdGVsbCB0aGUgc3Rvcnkgb2YgQ3ViYS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4gcGFyYWdyYXBoX19jb2x1bW4tLXJpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fZWxsaW90dCcgc3JjPScuLi9hc3NldHMvaW1hZ2VzL3ByaW50cy9FUkUyMDE1MDAyVzAwMDMzLTM2QV9tZWRpdW0uanBnJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCBwYXJhZ3JhcGgtLWNlbnRlcic+VGhlIGZvbGxvd2luZyBmZWxsb3dzaGlwIHBob3RvZ3JhcGhlcnMgd2lsbCBiZSBzZWxlY3RlZCBieSBhIGNvbW1pdHRlZSBoZWFkZWQgYnkgRWxsaW90dCBFcndpdHQgY29tcHJpc2luZyBvZiBDdWJhbiBhbmQgaW50ZXJuYXRpb25hbCBwaG90b2dyYXBoeSBwcm9mZXNzaW9uYWxzIGVuc3VyaW5nIHRoZSBuZXh0IGZlbGxvdyB3aWxsIGNvbnRpbnVlIHRoZSBsZWdhY3kgb2YgY3ViYSBhbmQgdGhlIGh1bWFuIGNvbmRpdGlvbiBpbiBDdWJhIHRocm91Z2ggZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGdpdmUgdXMgdGhlaXIgb3duIHZpc2lvbi48L3A+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXNjb3ZlciBmZWxsb3dzaGlwX19kaXNjb3Zlcicgb25DbGljaz17dGhpcy5nb1RvQmlvZ3JhcGh5QmluZGVkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19zY3JvbGwgYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwnPkRpc2NvdmVyIEVsbGlvdHQgRXJ3aXR0J3MgYmlvZ3JhcGh5PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0Jz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0bmFtZSBwYXJhZ3JhcGggcGFyYWdyYXBoLS1iaWcgcGFyYWdyYXBoLS1jZW50ZXInPkVMTElPVFQgRVJXSVRU4oCZUyBCSU9HUkFQSFk8L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkVsbGlvdHQgRXJ3aXR0IGlzIG9uZSBvZiB0aGUgd29ybGTigJlzIG1vc3QgcG9wdWxhciBhbmQgYWRtaXJlZCBwaG90b2dyYXBoZXJzLiBBIHZpc3VhbCBwb2V0IGFuZCBodW1vcmlzdCBvZiBldmVyeWRheSBsaWZlLCBoZSBoYXMgY3JlYXRlZCBzb21lIG9mIHRoZSBtb3N0IG1lbW9yYWJsZSBpbWFnZXMgb2Ygb3VyIHRpbWUsIGZyb20gaGlzIG9ic2VydmF0aW9ucyBvZiBkYWlseSBsaWZlIGF0IHN0cmVldCBsZXZlbCwgdG8gcG9ydHJhaXRzIG9mIHRoZSBpY29uaWMgcGVyc29uYWxpdGllcyBpbmNsdWRpbmcgTWFyaWx5biBNb25yb2Ugb24gdGhlIHNldCBvZiB0aGUgZmlsbSBUaGUgTWlzZml0cyBhbmQgVHJ1bWFuIENhcG90ZeKAmXMgZXBpYyAxOTY2IEJsYWNrIGFuZCBXaGl0ZSBCYWxsIGluIE5ldyBZb3JrIENpdHkuIEhlIGhhcyBwaG90b2dyYXBoZWQgS2hydXNoY2hldiBhbmQgTml4b24gYXJndWluZyBpbiBNb3Njb3csIEZpZGVsIENhc3RybyBhbmQgQ2hlIEd1ZXZhcmEgaW4gSGF2YW5hIGFuZCBQcmVzaWRlbnQgSkZLIGluIHRoZSBPdmFsIG9mZmljZS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlkZW9CaW5kZWR9PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWRlbyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2ludGVydmlldycgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS53ZWJtJz48L3ZpZGVvPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fcGxheSBlbmFibGVkJz5wbGF5IHZpZGVvPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCBwYXJhZ3JhcGgtLWNlbnRlcic+Qm9ybiBpbiBQYXJpcyBpbiAxOTI4IHRvIFJ1c3NpYW4gcGFyZW50cywgRXJ3aXR0IG1vdmVkIHRvIHRoZSBVUyB3aXRoIGhpcyBmYW1pbHkgaW4gMTkzOSBhbmQgaXQgd2FzIHRoZXJlIHRoYXQgaGUgbWV0IEVkd2FyZCBTdGVpY2hlbiBhbmQgUm95IFN0cnlrZXIuIFJlY3J1aXRlZCB0byBNYWdudW0gUGhvdG9zIGJ5IFJvYmVydCBDYXBhIGluIDE5NTMgRXJ3aXR0IGhhcyBiZWVuIGEgbWVtYmVyIG9mIHRoZSBwcmVzdGlnaW91cyBhZ2VuY3kgZXZlciBzaW5jZSBhbmQgaGFzIHNlcnZlZCBzZXZlcmFsIHRlcm1zIGFzIGl0cyBwcmVzaWRlbnQuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fcm93Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCc+PGEgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19idXR0b24gYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwnIGhyZWY9J2h0dHA6Ly93d3cuZWxsaW90dGVyd2l0dC5jb20nIHRhcmdldD0nX2JsYW5rJz5FbGxpb3R0IEVyd2l0dCBvZmZpY2lhbCB3ZWJzaXRlPC9hPjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCc+VG8gZGF0ZSBFcndpdHQgaGFzIHByb2R1Y2VkIG1vcmUgdGhhbiAyNSBwaG90b2dyYXBoeSBib29rcyBpbmNsdWRpbmcgRWFzdGVybiBFdXJvcGUgKDE5NjUpLCBUaGUgUHJpdmF0ZSBFeHBlcmllbmNlICgxOTc0KSwgUGVyc29uYWwgRXhwb3N1cmVzICgxOTg4KSwgVG8gdGhlIERvZ3MgKDE5OTIpLCBhbmQgUGVyc29uYWwgQmVzdCAoMjAxMCkuIEhpcyBwaG90b2dyYXBocyBoYXZlIGJlZW4gZmVhdHVyZWQgaW4gc29sbyBzaG93cyBhbGwgb3ZlciB0aGUgd29ybGQsIGluY2x1ZGluZyBhdMKgdGhlIElDUCBhbmQgVGhlIE11c2V1bSBvZiBNb2Rlcm4gQXJ0LCBOZXcgWW9yazsgVGhlIEFydCBJbnN0aXR1dGUgb2YgQ2hpY2FnbzvCoFRoZSBCYXJiaWNhbiwgTG9uZG9uLCBhbmQgVGhlIFJlaW5hIFNvZmlhIE11c2V1bSwgTWFkcmlkLiBFcndpdHQgbGl2ZXMgYW5kIHdvcmtzIGluIE5ldyBZb3JrIENpdHkgYW5kIGxpa2VzIGNoaWxkcmVuIGFuZCBkb2dzLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxhIGhyZWY9JyMvcHJvamVjdC9lbGxpb3R0LWVyd2l0dCcgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19idXR0b24gYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwnPkRpc2NvdmVyIGhpcyBwcm9qZWN0PC9hPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRyYWYoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsSW5kZXggJSAzKSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdGVsc2UgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnNjcm9sbEluZGV4KytcblxuXHRcdGlmICh0aGlzLnNjcm9sbE9rKSB7XG5cdFx0XHQvLyBsZXQgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHNjcm9sbCh0aGlzLnJhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0aWYgKHRoaXMuX3ZpZGVvICYmIHRoaXMuX2xpbWl0KSB7XG5cdFx0XHR0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuX2xpbWl0KVxuXHRcdFx0dGhpcy5saW1pdFRvcCA9IHRoaXMubGltaXRPZmZzZXQudG9wICsgdGhpcy5saW1pdE9mZnNldC5oZWlnaHQgLyAyXG5cdFx0XHQvLyB0aGlzLnZpZGVvT3BhY2l0eSA9IDEgLSAodGhpcy5saW1pdE9mZnNldC50b3AgLSB0aGlzLm9wYWNpdHlNYXJnZSkgLyAoLXRoaXMub3BhY2l0eU1hcmdlKVxuXHRcdFx0dGhpcy52aWRlb09wYWNpdHkgPSAxIC0gKHRoaXMubGltaXRUb3AgLSB0aGlzLm9wYWNpdHlNYXJnZSkgLyAoLXRoaXMub3BhY2l0eU1hcmdlKVxuXHRcdFx0dGhpcy5fdmlkZW8uc3R5bGUub3BhY2l0eSA9IHRoaXMudmlkZW9PcGFjaXR5XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlVmlkZW8oKSB7XG5cdFx0aWYgKHRoaXMudmlkZW9QbGF5ZWQpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19pbnRlcnZpZXcnKS5wYXVzZSgpXG5cdFx0XHRkb20oJy5mZWxsb3dzaGlwX19wbGF5JykuYWRkQ2xhc3MoJ2VuYWJsZWQnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9faW50ZXJ2aWV3JykucGxheSgpXG5cdFx0XHRkb20oJy5mZWxsb3dzaGlwX19wbGF5JykucmVtb3ZlQ2xhc3MoJ2VuYWJsZWQnKVxuXHRcdH1cblx0XHR0aGlzLnZpZGVvUGxheWVkID0gIXRoaXMudmlkZW9QbGF5ZWRcblx0fVxuXG5cdGdvVG9CaW9ncmFwaHkoKSB7XG5cdFx0dGhpcy5hcnRpc3RPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fYXJ0aXN0Jykub2Zmc2V0VG9wXG5cdFx0VHdlZW5NYXgudG8od2luZG93LCAwLjYsIHtzY3JvbGxUbzp7eTogKHRoaXMuYXJ0aXN0T2Zmc2V0VG9wIC0gNDApfSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdjb250YWN0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHRGcmllbmRzIG9mIHRoZSBmZWxsb3dzaGlwXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xubGV0IE1hc29ucnkgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpO1xubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnJhZkJpbmRlZCA9IHRoaXMucmFmLmJpbmQodGhpcylcblx0XHR0aGlzLmxvYWRlZCA9IGZhbHNlXG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQgPSAwXG5cdFx0dGhpcy5wcmludHMgPSBbXVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0cHJpbnRzOiBbXSxcblx0XHRcdGxvYWRlZFByaW50czogW11cblx0XHR9O1xuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cblx0XHR0aGlzLnJhZigpXG5cblx0XHRQcmludEFwaS5nZXRCeUFydGlzdCh0aGlzLnByb3BzLmlkU2VjdGlvbik7XG5cdFx0UHJpbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0dGhpcy5faXRlbXMwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX2l0ZW0tLTAnKVxuXHRcdHRoaXMuX2l0ZW1zMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19pdGVtLS0xJylcblx0XHR0aGlzLl9pdGVtczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9faXRlbS0tMicpXG5cdFx0dGhpcy5faXRlbXMzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX2l0ZW0tLTMnKVxuXHRcdHRoaXMuX2l0ZW1zNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19pdGVtLS00Jylcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHR9XG5cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tZ2FsbGVyeScgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSc+PGEgaHJlZj17JyMvcHJvamVjdC8nK3RoaXMucHJvcHMuaWRTZWN0aW9ufT48cCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLXNtYWxsJz5CYWNrIHRvIGdhbGxlcnk8L3A+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeSc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUubG9hZGVkUHJpbnRzKS5tYXAoKHllYXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19ncmlkJyBrZXk9e3llYXIrJ18nK2l9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X193aWR0aCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dhbGxlcnlfX2l0ZW0gZ2FsbGVyeV9faXRlbS0tbGFyZ2UgZ2FsbGVyeV9faXRlbS0tZGlzYWJsZWQnPnt5ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnN0YXRlLmxvYWRlZFByaW50c1t5ZWFyXSkubWFwKChwcmludElkLCBpKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5sb2FkZWRQcmludHNbeWVhcl1bcHJpbnRJZF1cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzcmMgPSAnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3ByaW50LmZpbGUrJ19taW4uanBnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLScrcHJpbnQuc2l6ZSsnIGdhbGxlcnlfX2l0ZW0tLScrcmFuZG9tfSBkYXRhLXJhbmRvbT17cmFuZG9tfSBrZXk9e2l9IG9uQ2xpY2s9e3RoYXQuem9vbVByaW50LmJpbmQodGhhdCwgcHJpbnRJZCl9PjxpbWcgY2xhc3NOYW1lPSdnYWxsZXJ5X19pbWFnZScgc3JjPXtzcmN9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRyYWYoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsSW5kZXggJSAzKSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdGVsc2UgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnNjcm9sbEluZGV4KytcblxuXHRcdGlmICh0aGlzLnNjcm9sbE9rKSB7XG5cdFx0XHQvLyBsZXQgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMucmFmQmluZGVkKTtcblx0fVxuXG5cdGhhbmRsZVNjcm9sbCgpIHtcblx0XHRfKGRvbSgnLmdhbGxlcnlfX2l0ZW0nKSkuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG5cdFx0XHR0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KGVsKVxuXHRcdFx0dGhpcy5saW1pdFRvcCA9IHRoaXMubGltaXRPZmZzZXQudG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICsgdGhpcy5PUEFDSVRZX01BUkdFXG5cdFx0XHR0aGlzLmVsT3BhY2l0eSA9IFV0aWxzLkludGVydmFsKHRoaXMubGltaXRUb3AgLyAoLXRoaXMuT1BBQ0lUWV9EVVJBVElPTiksIDAsIDEpXG5cdFx0XHR0aGlzLmVsWSA9ICgxLXRoaXMuZWxPcGFjaXR5KSAqIDUwXG5cdFx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gdGhpcy5lbE9wYWNpdHlcblx0XHRcdGVsLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgdGhpcy5lbFkgKydweCkgdHJhbnNsYXRlWigwcHgpJylcblx0XHR9KS52YWx1ZSgpO1xuXHR9XG5cdFxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzLCBmaWxlXG5cdFx0dGhpcy5tYXggPSBfLnNpemUodGhpcy5zdGF0ZS5wcmludHMpXG5cdFx0dGhpcy5wcmludHNEYXRlID0ge307XG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiAhdGhpcy5sb2FkZWQpIHtcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0Xyh0aGlzLnN0YXRlLnByaW50cykuZm9yRWFjaCgocHJpbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdKSB0aGlzLnByaW50c0RhdGVbcHJpbnQueWVhcl0gPSB7fVxuXHRcdFx0XHR0aGlzLnByaW50c0RhdGVbcHJpbnQueWVhcl1baW5kZXhdID0gcHJpbnRcblxuXHRcdFx0XHRmaWxlID0gbmV3IEltYWdlKClcblx0XHRcdFx0ZmlsZS5vbmxvYWQgPSB0aGF0Lm9uSW1hZ2VMb2FkZWQuYmluZCh0aGF0LCB0aGlzLnByaW50c0RhdGVbcHJpbnQueWVhcl1baW5kZXhdKVxuXHRcdFx0XHRmaWxlLnNyYyA9ICcuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrcHJpbnQuZmlsZSsnX21pbi5qcGcnXG5cdFx0XHR9KS52YWx1ZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9uSW1hZ2VMb2FkZWQocHJpbnQsIGUpIHtcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCsrO1xuXG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IHBhdGggPSBlLmV4cGxpY2l0T3JpZ2luYWxUYXJnZXQgfHwgZS5wYXRoWzBdXG5cdFx0aWYgKHBhdGguaGVpZ2h0ID49IHBhdGgud2lkdGgqMS4yKSBwcmludC5zaXplID0gJ3NtYWxsJ1xuXHRcdGVsc2UgcHJpbnQuc2l6ZSA9ICdsYXJnZSdcblx0XHRcblx0XHRpZiAodGhpcy5uSW1hZ2VMb2FkZWQgPj0gdGhpcy5tYXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHQnbG9hZGVkUHJpbnRzJzogdGhpcy5wcmludHNEYXRlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdGxldCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19ncmlkJyk7XG5cdFx0XHRcdF8oZ3JpZHMpLmZvckVhY2goKGdyaWQpID0+IHtcblx0XHRcdFx0XHRsZXQgaXNvID0gbmV3IE1hc29ucnkoZ3JpZCwge1xuXHRcdFx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2l0ZW0nLFxuXHRcdFx0XHRcdFx0Y29sdW1uV2lkdGg6ICcuZ2FsbGVyeV9fd2lkdGgnLFxuXHRcdFx0XHRcdFx0Z3V0dGVyOiAyNFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KS52YWx1ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0em9vbVByaW50KGlkKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0XG5cdFx0UHJpbnRBY3Rpb25zLnNldFByaW50Wm9vbShpZClcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxSYWYpXG5cdFx0XG5cdFx0dGhpcy50bEl0ZW1zT3V0ID0gbmV3IFRpbWVsaW5lTWF4KClcblx0XHR0aGlzLnRsSXRlbXNPdXQudG8oZG9tKCcuZ2FsbGVyeV9faXRlbS0tMCcpLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxJdGVtc091dC50byhkb20oJy5nYWxsZXJ5X19pdGVtLS0xJyksIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDAuMilcblx0XHR0aGlzLnRsSXRlbXNPdXQudG8oZG9tKCcuZ2FsbGVyeV9faXRlbS0tMicpLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwLjQpXG5cdFx0dGhpcy50bEl0ZW1zT3V0LnRvKGRvbSgnLmdhbGxlcnlfX2l0ZW0tLTMnKSwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMC42KVxuXHRcdHRoaXMudGxJdGVtc091dC50byhkb20oJy5nYWxsZXJ5X19pdGVtLS00JyksIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDAuOClcblx0XHR0aGlzLnRsSXRlbXNPdXQuYWRkQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9wcm9qZWN0LycrdGhhdC5wcm9wcy5pZFNlY3Rpb247XG5cdFx0fSwgMSlcblx0XHQvLyB0aGlzLnRsSXRlbXNPdXQudG8oZG9tKCcuZ2FsbGVyeV9faXRlbS0tNScpLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAxKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uUHJpbnRTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByaW50czogUHJpbnRTdG9yZS5nZXRBcnRpc3RQcmludHMoKVxuXHRcdH0sICgpID0+IHtcblxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMnKVxuXG5cdFx0aWYgKHRoaXMuX2NhbnZhcykge1xuXHRcdFx0dGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0VHdlZW5NYXguc2V0KGRvbSgnLmZyb250LWNvbnRhaW5lcicpLCB7b3BhY2l0eTogMH0pO1xuXHRcdFx0VHdlZW5NYXguc2V0KGRvbSgnLmhvbWVfX2NvbnRlbnQnKSwge29wYWNpdHk6IDB9KTtcblx0XHRcdFR3ZWVuTWF4LnNldChkb20oJy5jYXJ0JyksIHtvcGFjaXR5OiAwfSk7XG5cblx0XHRcdHRoaXMuc2hvd1BhZ2VCaW5kZWQgPSB0aGlzLnNob3dQYWdlLmJpbmQodGhpcylcblx0XHRcdHRoaXMuaW5pdENhbnZhcygpXG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb24oKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgaG9tZURhdGEgPSBBcHBTdG9yZS5ob21lQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLWhvbWUnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ZpZGVvJz5cblx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9J3ZpZGVvX19maWxlJyBzcmM9Jy4vYXNzZXRzL3ZpZGVvcy9iZy1ob21lLndlYm0nPjwvdmlkZW8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZV9fY29udGVudCc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKGhvbWVEYXRhLnBhcmFncmFwaHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naG9tZV9fcGFyYWdyYXBoIHRleHQgdGV4dC0tYmlnJyBrZXk9e2luZGV4fT57aG9tZURhdGEucGFyYWdyYXBoc1tpbmRleF19PC9wPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0XHRcdFx0XHQvLyA8cCBjbGFzc05hbWU9J3RleHQgdGV4dC0tYmlnJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaG9tZURhdGEuY29udGVudH19IC8+XG5cdH1cblxuXHQvLyBzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdC8vIFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdC8vIFx0Ly8gdHJhbnNpdGlvbiBJblxuXHQvLyBcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgeTogd2luZG93LmlubmVySGVpZ2h0LCBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHQvLyBcdC8vIHRyYW5zaXRpb24gT3V0XG5cdC8vIFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0Ly8gXHQvLyByZXNldFxuXHQvLyBcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHQvLyBcdHRoaXMudGxPdXQucGF1c2UoMClcblx0Ly8gfVxuXG5cdGluaXRDYW52YXMoKSB7XG5cdFx0bGV0IGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdGxldCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuXHRcdHRoaXMuX2NhbnZhcy53aWR0aCA9IHZ3O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB2aDtcblxuXHRcdC8vIGJhY2tncm91bmQgYmxhY2tcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4LnJlY3QoMCwgMCwgdncsIHZoKTtcblx0XHRjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjdHguZmlsbCgpO1xuXG5cdFx0Ly8gY3JvcCBsb2dvXG5cdFx0Y3R4LmZvbnQgPSBcIjQwMCA3MnB4ICdoYzdtb2Rlcm4nXCI7XG5cdFx0Y3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cdFx0Y3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3V0XCI7XG5cdFx0Ly8gY3R4LmZpbGxUZXh0KCdFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3JywgdncvMiwgdmgvMiAtIDE2KTtcblx0XHRjdHguZmlsbFRleHQoJ0VMTElPVFQgRVJXSVRUIEhBVkFOQSBDTFVCIDcnLCB2dy8yLCB2aC8yIC0gMTYpO1xuXHRcdGN0eC5mb250ID0gXCI0MDAgNzJweCAnU3RhbmxleSdcIjtcblx0XHRjdHguZmlsbFRleHQoJ0ZlbGxvd3NoaXAnLCB2dy8yLCB2aC8yICsgNjgpO1xuXHR9XG5cblx0aW5pdEFuaW1hdGlvbigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRcblx0XHR0aGlzLnRsRW50cnkgPSBuZXcgVGltZWxpbmVNYXgoe2RlbGF5OiA0LCBvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHR0aGF0Ll9jYW52YXMucmVtb3ZlKClcblx0XHR9fSk7XG5cdFx0dGhpcy50bEVudHJ5LnRvKHRoaXMuX2NhbnZhcywgMiwge29wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cdFx0dGhpcy50bEVudHJ5LnRvKGRvbSgnLmZyb250LWNvbnRhaW5lcicpLCAwLjgsIHtvcGFjaXR5OiAxfSwgMS42KVxuXHRcdHRoaXMudGxFbnRyeS50byhkb20oJy5ob21lX19jb250ZW50JyksIDAuOCwge29wYWNpdHk6IDF9LCAxLjYpXG5cdFx0dGhpcy50bEVudHJ5LnRvKGRvbSgnLmNhcnQnKSwgMC44LCB7b3BhY2l0eTogMX0sIDEuNilcblx0XHQvLyBUd2Vlbk1heC50byh0aGlzLl9jYW52YXMsIDQsIHt4OiAtdncsIGVhc2U6IFBvd2VyMi5lYXNlT3V0LCBkZWxheTogNCwgb25Db21wbGV0ZTogdGhpcy5zaG93UGFnZUJpbmRlZH0pO1xuXHR9XG5cdFxuXHRzaG93UGFnZSgpIHtcblx0XHRUd2Vlbk1heC50byhkb20oJy5mcm9udC1jb250YWluZXInKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdFR3ZWVuTWF4LnRvKGRvbSgnLmhvbWVfX2NvbnRlbnQnKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdFR3ZWVuTWF4LnRvKGRvbSgnLmNhcnQnKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdHRoaXMuX2NhbnZhcy5yZW1vdmUoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2xlZ2FsUGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHR7Y29udGVudC50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzaWRlXG5cdFx0bGV0IG5ld3NEYXRhID0gQXBwU3RvcmUubmV3c0NvbnRlbnQoKVxuXHRcdGxldCBuZXdzSXRlbXMgPSBuZXdzRGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0aWYgKGluZGV4ICUgMiA9PT0gMCkgeyByZXR1cm4gKFxuXHRcdFx0XHQ8YXJ0aWNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J25ld3NfX2l0ZW0gbmV3c19faXRlbS0tcmlnaHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19jb250ZW50Jz57aXRlbS5jb250ZW50fTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19kYXRlJz57aXRlbS5kYXRlfTwvZGl2PlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQpfSBlbHNlIHsgcmV0dXJuIChcblx0XHRcdFx0PGFydGljbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPSduZXdzX19pdGVtIG5ld3NfX2l0ZW0tLWxlZnQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19kYXRlJz57aXRlbS5kYXRlfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdzX19jb250ZW50Jz57aXRlbS5jb250ZW50fTwvZGl2PlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQpfVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLW5ld3MnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSduZXdzJz57bmV3c0l0ZW1zfTwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGZvdW5kIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSc0MDRQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxwPkVycm9yIDQwNCDigJQgUGFnZSBub3QgZm91bmQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCBDYXJ0U3RvcmUgZnJvbSAnQ2FydFN0b3JlJ1xuaW1wb3J0IENhcnRBcGkgZnJvbSAnQ2FydEFwaSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0Ly8gbGV0IGhhY2sgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQoZmFsc2UpXG5cdFx0Ly8gXHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0VmlzaWJsZShmYWxzZSlcblx0XHQvLyBcdGNsZWFyVGltZW91dChoYWNrKVxuXHRcdC8vIH0sIDApO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gQ2FydEFjdGlvbnMudXBkYXRlQ2FydFZpc2libGUodHJ1ZSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1wYXltZW50JyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50Jz5cblx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J3BheW1lbnRfX2Zvcm0gZm9ybSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPkNoZWNrb3V0PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J21haWwnPkVudGVyIHlvdXIgZW1haWwgYWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J21haWwnIGlkPSdtYWlsJy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+U2hpcHBpbmcgYWRkcmVzczwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cgZm9ybV9fcm93LS1oYWxmJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdmaXJzdG5hbWUnPkZpcnN0IG5hbWUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2ZpcnN0bmFtZScvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2xhc3RuYW1lJz5MYXN0IG5hbWUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2xhc3RuYW1lJy8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0ncGhvbmUnPlRlbGVwaG9uZSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGVsJyBpZD0ncGhvbmUnLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdhZGRyZXNzJz5BZGRyZXNzICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0IGZvcm1fX2lucHV0LS1jb21wJyB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nYWRkcmVzc0JpcycvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J3ppcCc+WmlwL1Bvc3RhbCBjb2RlICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSd6aXAnLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdjaXR5Jz5DaXR5PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nY2l0eScvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2NvdW50cnknPkNvdW50cnkgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdjb3VudHJ5Jy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nYmlsbEFkZHJlc3MnLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nYmlsbEFkZHJlc3MnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+QmlsbCB0byB0aGUgc2FtZSBhZGRyZXNzPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+U2hpcHBpbmcgbWV0aG9kPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdzaGlwcGluZ01ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSd1cHNTdGFuZGFyZCcvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSd1cHNTdGFuZGFyZCc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5VUFMgU3RhbmRhcmQgLSBEZWxpdmVyeSB3aXRoaW4gMy01IGJ1c2luZXNzIGRheXMsIDEwIOKCrDwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdzaGlwcGluZ01ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSd1cHNFeHByZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3Vwc0V4cHJlc3MnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+VVBTIEV4cHJlc3MgLSBEZWxpdmVyeSB3aXRoaW4gMi0zIGJ1c2luZXNzIGRheXMsIDIwIOKCrDwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdzaGlwcGluZ01ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSdmcmVlU2hpcHBpbmcnIGRlZmF1bHRDaGVja2VkLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nZnJlZVNoaXBwaW5nJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkZyZWUgc2hpcHBpbmcgKFVQUyBzdGFuZGFyZCksIDAg4oKsPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3BheW1lbnRfX21ldGhvZCBmb3JtX190aXRsZSc+UGF5bWVudCBtZXRob2Q8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0nbWFlc3RybycgZGVmYXVsdENoZWNrZWQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J21hZXN0cm8nPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+PGltZyBzcmM9Jy4vYXNzZXRzL2ltYWdlcy9tYWVzdHJvLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ndmlzYScvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3Zpc2EnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+PGltZyBzcmM9Jy4vYXNzZXRzL2ltYWdlcy92aXNhLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ncGF5cGFsJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0ncGF5cGFsJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvcGF5cGFsLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3BheW1lbnRNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0nYW1lcmljYW5FeHByZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nYW1lcmljYW5FeHByZXNzJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvYW1lcmljYW4tYmxhY2sucG5nJz48L2ltZz48L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX2NvbHVtbiBjYXJ0LS1ibGFjayc+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX3RpdGxlJz5PcmRlciBzdW1tYXJ5PC9oMz5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ncGF5bWVudF9fcHJvZHVjdHMgY2FydF9fcHJvZHVjdHMnPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNhcnRJdGVtcykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByb2R1Y3QgPSB0aGF0LnN0YXRlLmNhcnRJdGVtc1tpbmRleF07XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdwYXltZW50X19wcm9kdWN0IGNhcnRfX3Byb2R1Y3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2FydGlzdCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fZGV0YWlscyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaXR5Jz57cHJvZHVjdC5jaXR5fTwvZGl2PiwgPGRpdiBjbGFzc05hbWU9J2NhcnRfX3llYXInPntwcm9kdWN0LnllYXJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19xdWFudGl0eSc+UXVhbnRpdHk6IHtwcm9kdWN0LnF1YW50aXR5fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3NlcmlhbCc+U2VyaWFsIDxzcGFuIGNsYXNzTmFtZT0nY2FydF9fbnVtYmVyJz57cHJvZHVjdC5zZXJpYWx9L3twcm9kdWN0LmNvcGllc308L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpY2UnPntwcm9kdWN0LnByaWNlfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19wcmludCc+PGltZyBjbGFzc05hbWU9J2NhcnRfX2ltYWdlJyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrcHJvZHVjdC5maWxlKydfbWluLmpwZyd9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3JlbW92ZSBidXR0b24gYnV0dG9uLS1sZWZ0IGJ1dHRvbi0tc21hbGwnIG9uQ2xpY2s9e3RoYXQucmVtb3ZlSXRlbS5iaW5kKHRoYXQsIGluZGV4KX0+UmVtb3ZlIGl0ZW08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX3RvdGFsIGNhcnRfX3RvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fc3VidG90YWwgY2FydF9fc3VidG90YWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+U3VidG90YWw6PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz57dGhpcy5zdGF0ZS5jYXJ0VG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X190dmEnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+SW5jbHVkZWQgVFZBOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+e3RoaXMuc3RhdGUuY2FydFRvdGFsfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19iaWd0b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+R3JhbmQgdG90YWw6PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+e3RoaXMuc3RhdGUuY2FydFRvdGFsfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnIGlkPSduZXdzbGV0dGVyJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J25ld3NsZXR0ZXInPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+U3Vic2NyaWJlIHRvIHRoZSBuZXdzbGV0dGVyPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nY29uZGl0aW9ucycvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdjb25kaXRpb25zJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkkgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyo8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9JycgY2xhc3NOYW1lPSdwYXltZW50X19wYXkgYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwnIG9uQ2xpY2s9e3RoaXMucGF5LmJpbmQodGhpcyl9PlByb2NlZWQgdG8gcGF5bWVudDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRwYXkoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0Ly8gXyh0aGlzLnN0YXRlLmNhcnRJdGVtcykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHQvLyBcdFByaW50QXBpLm9yZGVyKGluZGV4LCBpdGVtLnNlcmlhbClcblx0XHQvLyB9KS52YWx1ZSgpO1xuXG5cdFx0Ly8gQ2FydEFwaS5wYXkoKVxuXHRcdC8vIENhcnRBcGkuZ2VuZXJhdGVQYXlCdXR0b24oKVxuXHR9XG5cblx0cmVtb3ZlSXRlbShpZCkge1xuXHRcdENhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0KGlkKVxuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblxuXHRcdHRoaXMuX3RvZ2dsZUxpc3RCaW5kZWQgPSB0aGlzLl90b2dnbGVMaXN0LmJpbmQodGhpcylcblx0XHR0aGlzLl9hZGRUb0NhcnRCaW5kZWQgPSB0aGlzLl9hZGRUb0NhcnQuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludDogdW5kZWZpbmVkLFxuXHRcdFx0c2VyaWFsOiB1bmRlZmluZWQsXG5cdFx0XHRsb2FkZWRQcmludDogdW5kZWZpbmVkXG5cdFx0fTtcblxuXHRcdFByaW50QXBpLmdldE9uZSh0aGlzLnByb3BzLmlkU2VjdGlvbik7XG5cdFx0UHJpbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJpbnQnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUucHJpbnQpIHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnQnPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkZWRQcmludH1cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbmZvcyc+XG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJpbnRfX2FydGlzdCc+e3RoYXQuc3RhdGUucHJpbnQudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwcmludF9fbG9jYXRpb24nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcmludF9fY2l0eSc+e3RoYXQuc3RhdGUucHJpbnQuY2l0eX0sIHt0aGF0LnN0YXRlLnByaW50LmNvdW50cnl9LDwvc3Bhbj4ge3RoYXQuc3RhdGUucHJpbnQueWVhcn1cblx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3ByaW50X19hcnRpc3QnPkVsbGlvdHQgRXJ3aXR0PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3ByaWNlIHRleHQgdGV4dC0tc21hbGwnPnt0aGF0LnN0YXRlLnByaW50LnByaWNlfeKCrDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJpbnRfX2Rlc2MgdGV4dCB0ZXh0LS1zbWFsbCc+e3RoYXQuc3RhdGUucHJpbnQuZGVzY308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZXJpYWxzJz5cblx0XHRcdFx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhhdC5zdGF0ZS5wcmludC5zZXJpYWxzLmxlbmd0aCA+IDApIHsgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwtb3B0Jz5TZXJpYWwgb3B0aW9uPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlbGVjdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsLS1zZWxlY3RlZCcgb25DbGljaz17dGhpcy5fdG9nZ2xlTGlzdEJpbmRlZH0+e3RoYXQuc3RhdGUuc2VyaWFsfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsLWxpc3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnN0YXRlLnByaW50LnNlcmlhbHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBlbmFibGVkID0gdGhhdC5zdGF0ZS5wcmludC5zZXJpYWxzW2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHNlcmlhbCA9IHBhcnNlSW50KGluZGV4KSsxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBsZXQgY2xhc3NTZWxlY3RlZCA9IChzZXJpYWwgPT09IHRoYXQuc3RhdGUuc2VyaWFsKSA/ICdwcmludF9fc2VyaWFsLS1zZWxlY3RlZCcgOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbGV0IGNsYXNzRW5hYmxlZCA9IChlbmFibGVkKSA/ICdwcmludF9fc2VyaWFsLS1lbmFibGVkJyA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKDxsaSBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwnIG9uQ2xpY2s9e3RoYXQuX3NlbGVjdFNlcmlhbC5iaW5kKHRoYXQsIHNlcmlhbCl9IGtleT17aW5kZXh9PntzZXJpYWx9PC9saT4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKDxsaSBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwgcHJpbnRfX3NlcmlhbC0tZGlzYWJsZWQnIGtleT17aW5kZXh9PntzZXJpYWx9PC9saT4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0ncHJpbnRfX2J1eSB0ZXh0IHRleHQtLXNtYWxsIGJ1dHRvbiBidXR0b24tLWNlbnRlciBidXR0b24tLXNtYWxsIGJ1dHRvbi0tcmV2ZXJzZScgb25DbGljaz17dGhhdC5fYWRkVG9DYXJ0QmluZGVkfT5CdXkgcHJpbnQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9IGVsc2UgeyByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+T3V0IG9mIHN0b2NrPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHR9KSgpfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSkoKX1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdF9nZXRGaXJzdFNlcmlhbCgpIHtcblx0XHRyZXR1cm4gXy5pbmRleE9mKHRoaXMuc3RhdGUucHJpbnQuc2VyaWFscywgdHJ1ZSkgKyAxXG5cdH1cblxuXHRfdG9nZ2xlTGlzdCgpIHtcblx0XHRkb20oJy5wcmludF9fc2VyaWFsLWxpc3QnKS50b2dnbGVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfc2VsZWN0U2VyaWFsKHNlcmlhbCwgZSkge1xuXHRcdHRoaXMuX3RvZ2dsZUxpc3QoKVxuXHRcdGRvbSgnLnNlcmlhbC0tZW5hYmxlZCcpLnJlbW92ZUNsYXNzKCdzZXJpYWwtLWVuYWJsZWQnKVxuXHRcdGRvbShlLnRhcmdldCkuYWRkQ2xhc3MoJ3NlcmlhbC0tZW5hYmxlZCcpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZXJpYWw6IHNlcmlhbFxuXHRcdH0pXG5cdH1cblxuXHRfYWRkVG9DYXJ0KGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRsZXQgcHJpbnRJZCA9IHRoaXMuc3RhdGUucHJpbnQuX2lkO1xuXHRcdGxldCB1cGRhdGUgPSB7XG5cdFx0XHRjaXR5OiB0aGlzLnN0YXRlLnByaW50LmNpdHksXG5cdFx0XHR5ZWFyOiB0aGlzLnN0YXRlLnByaW50LnllYXIsXG5cdFx0XHRwcmljZTogdGhpcy5zdGF0ZS5wcmludC5wcmljZSxcblx0XHRcdHNlcmlhbDogdGhpcy5zdGF0ZS5zZXJpYWwsXG5cdFx0XHRmaWxlOiB0aGlzLnN0YXRlLnByaW50LmZpbGUsXG5cdFx0XHRjb3BpZXM6IHRoaXMuc3RhdGUucHJpbnQuY29waWVzXG5cdFx0fVxuXHRcdENhcnRBY3Rpb25zLmFkZFRvQ2FydChwcmludElkLCB1cGRhdGUpO1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRydWUpO1xuXG5cdFx0bGV0IHNlcmlhbHMgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTBdXG5cdFx0bGV0IGluZGV4ID0gc2VyaWFscy5pbmRleE9mKHRoaXMuc3RhdGUuc2VyaWFsKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0c2VyaWFscy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IHVwZGF0ZSB0ZW1wIGxpc3Rcblx0fVxuXG5cdF9sb2FkSW1hZ2UoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzLCBmaWxlXG5cblx0XHRmaWxlID0gbmV3IEltYWdlKClcblx0XHRmaWxlLm9ubG9hZCA9IHRoYXQuX29uSW1hZ2VMb2FkZWQuYmluZCh0aGF0KVxuXHRcdGZpbGUuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJyt0aGlzLnN0YXRlLnByaW50LmZpbGUrJ19tZWRpdW0uanBnJ1xuXHR9XG5cblx0X29uSW1hZ2VMb2FkZWQocGFyYW1zKSB7XG5cdFx0aWYgKHBhcmFtcy5wYXRoWzBdLmhlaWdodCA+PSBwYXJhbXMucGF0aFswXS53aWR0aCoxLjIpIHtcblx0XHRcdHRoaXMucHJpbnQgPSA8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xlZnQnPjxkaXYgY2xhc3NOYW1lPSdwcmludF9faW1hZ2UgcHJpbnRfX2ltYWdlLS1wb3J0cmFpdCc+PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+QXJjaGl2YWwgcGlnbWVudCBwcmludCBtZWFzdXJpbmc8L3A+PHA+MjcuOSDDlyAzNS42IGNtICgxMSDDlyAxNCBpbmNoZXMpPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiAxMC48L3A+PC9kaXY+PC9kaXY+PC9kaXY+XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJpbnQgPSA8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xlZnQnPjxkaXYgY2xhc3NOYW1lPSdwcmludF9faW1hZ2UgcHJpbnRfX2ltYWdlLS1sYW5kc2NhcGUnPjxpbWcgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3RoaXMuc3RhdGUucHJpbnQuZmlsZSsnX21lZGl1bS5qcGcnfT48L2ltZz48ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3RlY2gnPjxwPkFyY2hpdmFsIHBpZ21lbnQgcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKTwvcD48cD5QcmludGVkIHVuZGVyIHRoZSBkaXJlY3Qgc3VwZXJ2aXNpb24gb2YgdGhlIGFydGlzdC48L3A+PHA+T25lIG9mIGEgc2lnbmVkLCBsaW1pdGVkIGVkaXRpb24gb2YgMTAuPC9wPjwvZGl2PjwvZGl2PjwvZGl2PlxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdCdsb2FkZWRQcmludCc6IHRoaXMucHJpbnRcblx0XHR9KTtcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuX2xvYWRJbWFnZSgpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2VyaWFsOiB0aGlzLl9nZXRGaXJzdFNlcmlhbCgpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcml2YWN5IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwcml2YWN5UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHR7Y29udGVudC50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBQcmludFN0b3JlIGZyb20gJ1ByaW50U3RvcmUnXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5pbXBvcnQgUHJpbnRBY3Rpb25zIGZyb20gJ1ByaW50QWN0aW9ucydcbmltcG9ydCBBcnRpc3RTdG9yZSBmcm9tICdBcnRpc3RTdG9yZSdcbmltcG9ydCBBcnRpc3RBcGkgZnJvbSAnQXJ0aXN0QXBpJ1xuaW1wb3J0IFR3ZWVubWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgb2Zmc2V0IGZyb20gJ29mZnNldCdcbmltcG9ydCBzY3JvbGxUbyBmcm9tICdzY3JvbGxUbydcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnByb3BzID0gcHJvcHNcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXG5cdFx0Ly8gZG9tKCcuaGVhZGVyX190aXRsZScpLmFkZENsYXNzKCdoZWFkZXJfX3RpdGxlLS1maXhlZCcpXG5cdFx0XG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRhcnRpc3Q6IHVuZGVmaW5lZCxcblx0XHRcdHNsaWRlc2hvdzoge30sXG5cdFx0XHRwcmludDoge31cblx0XHR9O1xuXG5cdFx0Ly8gdGhpcy5pbml0VGltZWxpbmVzKClcblxuXHRcdHRoaXMuem9vbSA9IGZhbHNlXG5cdFx0dGhpcy5zbGlkZXNob3dQcmludHMgPSB7fVxuXHRcdHRoaXMuYWN0aW9uID0gJ2luaXQnXG5cdFx0dGhpcy5jdXJyZW50SW5kZXggPSAtMVxuXHRcdHRoaXMuc2hvd1NsaWRlc2hvd0JpbmRlZCA9IHRoaXMuc2hvd1NsaWRlc2hvdy5iaW5kKHRoaXMpXG5cdFx0dGhpcy50b2dnbGVab29tQmluZGVkID0gdGhpcy50b2dnbGVab29tLmJpbmQodGhpcylcblx0XHR0aGlzLnRvZ2dsZVN0b3J5QmluZGVkID0gdGhpcy50b2dnbGVTdG9yeS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fYmFja1RvR2FsbGVyeUJpbmRlZCA9IHRoaXMuYmFja1RvR2FsbGVyeS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcHJldkJpbmRlZCA9IHRoaXMucHJldi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fbmV4dEJpbmRlZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25BcnRpc3RTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yYWZCaW5kZWQgPSB0aGlzLnJhZi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdEFydGlzdEFwaS5nZXRCeVNsdWcodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdEFydGlzdFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IGhhY2sgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoYXQuem9vbSA9IFByaW50U3RvcmUuZ2V0Wm9vbSgpXG5cdFx0XHRpZiAodGhhdC56b29tKSB7XG5cdFx0XHRcdFByaW50QXBpLmdldFNsaWRlc2hvdyh0aGlzLnByb3BzLmlkU2VjdGlvbiwgdGhhdC56b29tKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHJpbnRBcGkuZ2V0U2xpZGVzaG93KHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRcdH1cblx0XHR9LCAxMClcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0dGhpcy5faW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9faW50cm8nKVxuXHRcdHRoaXMucmFmKClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdC8vIGRvbSgnLmhlYWRlcl9fdGl0bGUnKS5yZW1vdmVDbGFzcygnaGVhZGVyX190aXRsZS0tZml4ZWQnKVxuXHRcdEFydGlzdFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IG5hbWUsIGJpbywgdGl0bGUsIGNpdHksIGNvdW50cnksIHllYXIsIHN0b3J5LCBmb3JTYWxlLCB1cmwsIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MgPSBbXVxuXHRcdGlmICh0aGlzLnN0YXRlLmFydGlzdCkge1xuXHRcdFx0bmFtZSA9IHRoaXMuc3RhdGUuYXJ0aXN0Lm5hbWVcblx0XHRcdGJpbyA9IHRoaXMuc3RhdGUuYXJ0aXN0LmJpb1xuXHRcdFx0cHJvamVjdFRpdGxlID0gdGhpcy5zdGF0ZS5hcnRpc3QucHJvamVjdC50aXRsZVxuXHRcdFx0cHJvamVjdERlc2MgPSB0aGlzLnN0YXRlLmFydGlzdC5wcm9qZWN0LmRlc2Ncblx0XHR9XG5cblx0XHRpZiAoXy5zaXplKHRoaXMuc3RhdGUuc2xpZGVzaG93KSA+IDApIHtcblx0XHRcdGlmICh0aGlzLmFjdGlvbiA9PT0gJ2luaXQnKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzID0gdGhpcy5zdGF0ZS5zbGlkZXNob3cucHJpbnRzXG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5hY3Rpb24gPT09ICdwcmV2Jykge1xuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cy5uZXh0ID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudFxuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50ID0gdGhpcy5zbGlkZXNob3dQcmludHMucHJldlxuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cy5wcmV2ID0gdGhpcy5zdGF0ZS5wcmludFxuXHRcdFx0fSBcblx0XHRcdGlmICh0aGlzLmFjdGlvbiA9PT0gJ25leHQnKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLnByZXYgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5uZXh0XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLm5leHQgPSB0aGlzLnN0YXRlLnByaW50XG5cdFx0XHR9XG5cdFx0XHRUd2Vlbm1heC50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0fVxuXG5cdFx0aWYgKF8uc2l6ZSh0aGlzLnNsaWRlc2hvd1ByaW50cykgPiAwKSB7XG5cdFx0XHR0aXRsZSA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQudGl0bGVcblx0XHRcdGNpdHkgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LmNpdHlcblx0XHRcdGNvdW50cnkgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LmNvdW50cnlcblx0XHRcdHllYXIgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LnllYXJcblx0XHRcdHN0b3J5ID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudC5kZXNjXG5cdFx0XHRmb3JTYWxlID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudC5mb3JTYWxlXG5cdFx0XHR1cmwgPSAnIy9zaG9wLycgKyB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50Ll9pZFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1wcm9qZWN0JyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSBwcm9qZWN0X19jb250YWN0ICc+PGEgaHJlZj17JyMvcHJvamVjdC8nK3RoaXMucHJvcHMuaWRTZWN0aW9uKycvY29udGFjdC1zaGVldCd9PjxwIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tc21hbGwnPkNvbnRhY3Qgc2hlZXQ8L3A+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSBwcm9qZWN0X19iYWNrICc+PGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fYmFja1RvR2FsbGVyeUJpbmRlZH0+PHAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uLS1zbWFsbCc+QmFjayB0byBnYWxsZXJ5PC9wPjwvYT48L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdCc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2ludHJvJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19jb250ZW50Jz5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJvamVjdF9fYXJ0aXN0Jz57bmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Byb2plY3RfX2Rlc2MgdGV4dCB0ZXh0LS1tZWRpdW0nPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhwcm9qZWN0RGVzYykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwcm9qZWN0X19wYXJhZ3JhcGgnIGtleT17aW5kZXh9Pntwcm9qZWN0RGVzY1tpbmRleF19PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19kaXNjb3Zlcicgb25DbGljaz17dGhpcy5zaG93U2xpZGVzaG93QmluZGVkfT48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2xpZGVzaG93Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19jb250ZW50Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3ByaW50cyc+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc2xpZGVzaG93UHJpbnRzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgZmlsZSA9IHRoaXMuc2xpZGVzaG93UHJpbnRzW2luZGV4XS5maWxlICsgJy5qcGcnXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgc3RhdHVzID0gaW5kZXhcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsncHJvamVjdF9fcHJpbnQgcHJvamVjdF9fcHJpbnQtLScrc3RhdHVzfSBvbkNsaWNrPXt0aGF0LnRvZ2dsZVpvb21CaW5kZWR9IGtleT17aW5kZXh9PjxpbWcgY2xhc3NOYW1lPSdwcm9qZWN0X19pbWFnZScgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK2ZpbGV9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19zdG9yeSB0ZXh0IHRleHQtLWJpZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57c3Rvcnl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19uYXYnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3ByZXYnIG9uQ2xpY2s9e3RoaXMuX3ByZXZCaW5kZWR9PjxkaXYgY2xhc3NOYW1lPSdhcnJvdyc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fbmV4dCcgb25DbGljaz17dGhpcy5fbmV4dEJpbmRlZH0+PGRpdiBjbGFzc05hbWU9J2Fycm93Jz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19mb290ZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19zZWN0aW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZm9yU2FsZSkgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fcmV2ZWFsIGJ1dHRvbiBidXR0b24tLWxlZnQgYnV0dG9uLS1zbWFsbCBidXR0b24tLXJldmVyc2UnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU3RvcnlCaW5kZWR9PlRoZSBzdG9yeTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdwcm9qZWN0X19zaGFyZSBidXR0b24gYnV0dG9uLS1sZWZ0IGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1yZXZlcnNlJz5TaGFyZTwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbiBwcm9qZWN0X19pbmZvcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvclNhbGUpIHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3ByaW50X190aXRsZSBwcmludF9faW5mby0tc21hbGwnPnt0aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uIHByaW50X19pbmZvLS1zbWFsbCc+e2NpdHl9LCB7Y291bnRyeX0sIHt5ZWFyfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwcmludF9fYXJ0aXN0IHByaW50X19pbmZvLS1zbWFsbCc+e25hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvclNhbGUpIHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPSdwcm9qZWN0X19idXkgYnV0dG9uIGJ1dHRvbi0tcmlnaHQgYnV0dG9uLS1zbWFsbCBidXR0b24tLXJldmVyc2UnPkJ1eSBwcmludDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRyYWYoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsSW5kZXggJSAzKSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdGVsc2UgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnNjcm9sbEluZGV4KytcblxuXHRcdGlmICh0aGlzLnNjcm9sbE9rKSB7XG5cdFx0XHQvLyBsZXQgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHNjcm9sbCh0aGlzLnJhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cblx0XHR0aGlzLm9wYWNpdHlNYXJnZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG5cdFx0dGhpcy5saW1pdE9mZnNldCA9IG9mZnNldCh0aGlzLl9pbnRybylcblx0XHR0aGlzLmxpbWl0VG9wID0gdGhpcy5saW1pdE9mZnNldC50b3AgKyB0aGlzLmxpbWl0T2Zmc2V0LmhlaWdodCAvIDEuNVxuXHRcdHRoaXMuaW50cm9PcGFjaXR5ID0gMSAtICh0aGlzLmxpbWl0VG9wIC0gdGhpcy5vcGFjaXR5TWFyZ2UpIC8gKC10aGlzLm9wYWNpdHlNYXJnZSlcblx0XHR0aGlzLl9pbnRyby5zdHlsZS5vcGFjaXR5ID0gdGhpcy5pbnRyb09wYWNpdHlcblxuXHRcdC8vIHRoaXMubGltaXRPZmZzZXQgPSBvZmZzZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJykpXG5cdFx0Ly8gdGhpcy5PUEFDSVRZX01BUkdFID0gdGhpcy5saW1pdE9mZnNldC5oZWlnaHRcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0T2Zmc2V0KVxuXHRcdC8vIHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdC8vIHRoaXMuZWxPcGFjaXR5ID0gVXRpbHMuSW50ZXJ2YWwodGhpcy5saW1pdFRvcCAvICgtdGhpcy5PUEFDSVRZX0RVUkFUSU9OKSwgMCwgMSlcblx0XHQvLyAvLyB0aGlzLmVsWSA9ICgxLXRoaXMuZWxPcGFjaXR5KSAqIDUwXG5cdFx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJykuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0Ly8gZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyB0aGlzLmVsWSArJ3B4KSB0cmFuc2xhdGVaKDBweCknKVxuXHR9XG5cblx0c2hvd1NsaWRlc2hvdygpIHtcblx0XHR0aGlzLnNsaWRlc2hvd09mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKS5vZmZzZXRUb3Bcblx0XHRUd2Vlbk1heC50byh3aW5kb3csIDEuMiwge3Njcm9sbFRvOnt5OiB0aGlzLnNsaWRlc2hvd09mZnNldFRvcH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KVxuXHR9XG5cdFxuXHRpbml0VGltZWxpbmVzKCkge1xuXHR9XG5cblx0dG9nZ2xlWm9vbSgpIHtcblx0XHRpZiAodGhpcy56b29tKSB0aGlzLnpvb21PdXQoKVxuXHRcdGVsc2UgdGhpcy56b29tSW4oKVxuXHR9XG5cblx0em9vbUluKCkge1xuXHRcdHRoaXMudGxab29tSW4gPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDogdHJ1ZX0pXG5cdFx0dGhpcy50bFpvb21Jbi5zdGFnZ2VyVG8oW1xuXHRcdFx0ZG9tKCcuZnJvbnQtY29udGFpbmVyJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19zaGFyZScpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9faW5mb3MnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3JldmVhbCcpLFxuXHRcdFx0ZG9tKCcuY2FydCcpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fY29udGFjdCcpXG5cdFx0XSwgMC40LCB7b3BhY2l0eTogMH0sIDApXG5cdFx0dGhpcy50bFpvb21Jbi50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtzY2FsZTogMS4zNSwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tSW4udG8oZG9tKCcucHJvamVjdF9fcHJldicpLCAwLjQsIHt4OiAtODAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX25leHQnKSwgMC40LCB7eDogODAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLmFkZENhbGxiYWNrKCgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jb250YWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2JhY2snKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdH0sIDAuNClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX2JhY2snKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNClcblx0XHRcblx0XHR0aGlzLnRsWm9vbUluLnBsYXkoKVxuXG5cdFx0dGhpcy56b29tID0gIXRoaXMuem9vbVxuXHR9XG5cblx0em9vbU91dCgpIHtcblx0XHR0aGlzLnRsWm9vbU91dCA9IG5ldyBUaW1lbGluZU1heCh7cGF1c2VkOiB0cnVlfSlcblx0XHR0aGlzLnRsWm9vbU91dC5zdGFnZ2VyVG8oW1xuXHRcdFx0ZG9tKCcuZnJvbnQtY29udGFpbmVyJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19zaGFyZScpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9faW5mb3MnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3JldmVhbCcpLFxuXHRcdFx0ZG9tKCcuY2FydCcpXG5cdFx0XSwgMC40LCB7b3BhY2l0eTogMX0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fYmFjaycpLCAwLjQsIHtvcGFjaXR5OiAwfSwgMClcblx0XHR0aGlzLnRsWm9vbU91dC5hZGRDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fY29udGFjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fYmFjaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblx0XHR9LCAwLjQpXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fY29udGFjdCcpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC40KVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX3ByaW50JyksIDAuNCwge3NjYWxlOiAxLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fcHJldicpLCAwLjQsIHt4OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fbmV4dCcpLCAwLjQsIHt4OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cblx0XHR0aGlzLnRsWm9vbU91dC5wbGF5KClcblxuXHRcdHRoaXMuem9vbSA9ICF0aGlzLnpvb21cblx0fVxuXG5cdGJhY2tUb0dhbGxlcnkoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHRoaXMuem9vbU91dCgpXG5cdH1cblxuXHR0b2dnbGVTdG9yeSgpIHtcblx0XHRkb20oJy5wcm9qZWN0X19zdG9yeScpLnRvZ2dsZUNsYXNzKCdlbmFibGVkJylcblx0fVxuXG5cdGhpZGVTdG9yeSgpIHtcblx0XHRkb20oJy5wcm9qZWN0X19zdG9yeScpLnJlbW92ZUNsYXNzKCdlbmFibGVkJylcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHR0aGlzLmhpZGVTdG9yeSgpXG5cdFx0VHdlZW5tYXgudG8oZG9tKCcucHJvamVjdF9fcHJpbnQnKSwgMC40LCB7b3BhY2l0eTogMCwgb25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0dGhhdC5jdXJyZW50SW5kZXggPSB0aGF0LmdldFByZXZJbmRleCgpXG5cdFx0XHR0aGF0LmFjdGlvbiA9ICdwcmV2J1xuXHRcdFx0UHJpbnRBcGkuZ2V0T25lKHRoYXQuc3RhdGUuc2xpZGVzaG93LnJlZnNbdGhhdC5nZXRQcmV2SW5kZXgoKV0pOyAvLyBUT0RPOiBtZXR0cmUgZW4gY2FjaGUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucyBkZSByZXF1w6p0ZXNcblx0XHR9fSk7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXG5cdFx0dGhpcy5oaWRlU3RvcnkoKVxuXHRcdC8vIHRoYXQuY3VycmVudEluZGV4ID0gdGhhdC5nZXROZXh0SW5kZXgoKVxuXHRcdC8vIHRoYXQuYWN0aW9uID0gJ25leHQnXG5cdFx0Ly8gUHJpbnRBcGkuZ2V0T25lKHRoYXQuc3RhdGUuc2xpZGVzaG93LnJlZnNbdGhhdC5nZXROZXh0SW5kZXgoKV0pOyAvLyBUT0RPOiBtZXR0cmUgZW4gY2FjaGUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucyBkZSByZXF1w6p0ZXNcblx0XHQvLyBUd2Vlbm1heC50byhkb20oJy5wcm9qZWN0X19wcmludHMnKSwgMC40LCB7b3BhY2l0eTogMCwgb25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdC8vIFx0dGhhdC5jb21wbGV0ZSA9IHRydWVcblx0XHQvLyBcdFR3ZWVubWF4LnRvKGRvbSgnLnByb2plY3RfX3ByaW50cycpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0Ly8gfX0pO1xuXHRcdFR3ZWVubWF4LnRvKGRvbSgnLnByb2plY3RfX3ByaW50JyksIDAuNCwge29wYWNpdHk6IDAsIG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdHRoYXQuY3VycmVudEluZGV4ID0gdGhhdC5nZXROZXh0SW5kZXgoKVxuXHRcdFx0dGhhdC5hY3Rpb24gPSAnbmV4dCdcblx0XHRcdFByaW50QXBpLmdldE9uZSh0aGF0LnN0YXRlLnNsaWRlc2hvdy5yZWZzW3RoYXQuZ2V0TmV4dEluZGV4KCldKTsgLy8gVE9ETzogbWV0dHJlIGVuIGNhY2hlIHBvdXIgw6l2aXRlciBsZXMgZG91YmxvbnMgZGUgcmVxdcOqdGVzXG5cdFx0fX0pO1xuXHR9XG5cblx0Z2V0UHJldkluZGV4KCkge1xuXHRcdHJldHVybiAodGhpcy5jdXJyZW50SW5kZXgtMSA8IDApID8gdGhpcy5zdGF0ZS5zbGlkZXNob3cucmVmcy5sZW5ndGgtMSA6IHRoaXMuY3VycmVudEluZGV4LTFcblx0fVxuXG5cdGdldE5leHRJbmRleCgpIHtcblx0XHRyZXR1cm4gKHRoaXMuY3VycmVudEluZGV4KzEgPiB0aGlzLnN0YXRlLnNsaWRlc2hvdy5yZWZzLmxlbmd0aC0xKSA/IDAgOiB0aGlzLmN1cnJlbnRJbmRleCsxXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25BcnRpc3RTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdDogQXJ0aXN0U3RvcmUuZ2V0T25lKCkgLy8gVE9ETzogYWZmaWNoZXIgbCdpbWFnZSBzdWl2YW50ZSB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IGNoYXJnw6llXG5cdFx0fSlcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzbGlkZXNob3c6IFByaW50U3RvcmUuZ2V0U2xpZGVzaG93KCksXG5cdFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5zdGF0ZS5zbGlkZXNob3cuY3VycmVudEluZGV4XG5cdFx0XHQvLyBUd2Vlbm1heC50byhkb20oJy5wcm9qZWN0X19wcmludHMnKSwgMC40LCB7b3BhY2l0eTogMX0pO1xuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFydGlzdFN0b3JlIGZyb20gJ0FydGlzdFN0b3JlJ1xuaW1wb3J0IEFydGlzdEFwaSBmcm9tICdBcnRpc3RBcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblxuXHRcdHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vblN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdGFydGlzdHM6IHt9XG5cdFx0fTtcblxuXHRcdEFydGlzdEFwaS5nZXRBbGwoKTtcblx0XHRBcnRpc3RTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFydGlzdFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdC8vIGxldCBhcnRpc3RzRGF0YSA9IEFwcFN0b3JlLmFydGlzdHNDb250ZW50KClcblx0XHQvLyBsZXQgYXJ0aXN0c0l0ZW1zID0gW11cblx0XHQvLyBmb3IgKGxldCBhcnRpc3QgaW4gYXJ0aXN0c0RhdGEpIHtcblx0XHQvLyBcdGFydGlzdHNJdGVtcy5wdXNoKDxsaSBrZXk9e2FydGlzdH0+PGEgaHJlZj17JyMvcHJvamVjdC8nK2FydGlzdH0+e2FydGlzdHNEYXRhW2FydGlzdF0ubmFtZX08L2E+PC9saT4pXG5cdFx0Ly8gfVxuXHRcdGxldCBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1wcm9qZWN0cycgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdHNfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3Byb2plY3RzX190aXRsZSB0ZXh0IHRleHQtLXRpdGxlJz5GZWxsb3dzOjwvaDI+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUuYXJ0aXN0cykubWFwKGZ1bmN0aW9uKGluZGV4KXtcblx0XHRcdFx0XHRcdFx0bGV0IGFydGlzdCA9IHRoYXQuc3RhdGUuYXJ0aXN0c1tpbmRleF07XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0ncHJvamVjdHNfX2l0ZW0gYnV0dG9uJz48YSBocmVmPXsnIy9wcm9qZWN0LycrYXJ0aXN0LnNsdWd9PnthcnRpc3QubmFtZX08L2E+PC9saT5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdHM6IEFydGlzdFN0b3JlLmdldEFsbCgpXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgUHJpbnRTdG9yZSBmcm9tICdQcmludFN0b3JlJ1xuaW1wb3J0IFByaW50QXBpIGZyb20gJ1ByaW50QXBpJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBzY3JvbGxUbyBmcm9tICdzY3JvbGxUbydcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxubGV0IE1hc29ucnkgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wIGV4dGVuZHMgUGFnZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cblx0XHR0aGlzLl9zaG93UHJpbnRzQmluZGVkID0gdGhpcy5fc2hvd1ByaW50cy5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLmxvYWRlZCA9IGZhbHNlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblx0XHR0aGlzLnJhZkJpbmRlZCA9IHRoaXMucmFmLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdHByaW50czoge31cblx0XHR9O1xuXHRcdFxuXHRcdC8vIHRoaXMucmFmKClcblxuXHRcdFByaW50QXBpLmdldEZvclNhbGUoKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHQvLyBzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdC8vIFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdC8vIFx0Ly8gdHJhbnNpdGlvbiBJblxuXHQvLyBcdHRoaXMudGxJbi50byhkb20oJy5mcm9udC1jb250YWluZXInKSwgMC40LCB7b3BhY2l0eTogMH0sIDApO1xuXHQvLyBcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgeTogd2luZG93LmlubmVySGVpZ2h0LCBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXR9LCAwLjQpXG5cdC8vIFx0dGhpcy50bEluLmFkZENhbGxiYWNrKCgpID0+IHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdjYWxsJylcblx0Ly8gXHRcdGRvbSgnYm9keScpXG5cdC8vIFx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHQvLyBcdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0Ly8gXHR9LCAxLjQpXG5cdC8vIFx0dGhpcy50bEluLnRvKGRvbSgnLmZyb250LWNvbnRhaW5lcicpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMS40KTtcblxuXHQvLyBcdC8vIHRyYW5zaXRpb24gT3V0XG5cdC8vIFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0Ly8gXHQvLyByZXNldFxuXHQvLyBcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHQvLyBcdHRoaXMudGxPdXQucGF1c2UoMClcblx0Ly8gfVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgc2hvcERhdGEgPSBBcHBTdG9yZS5zaG9wQ29udGVudCgpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tc2hvcCcgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9faW50cm8nPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3Nob3BfX3RpdGxlJz57c2hvcERhdGEuaW50cm8udGl0bGV9PC9oMj5cblx0XHRcdFx0XHR7T2JqZWN0LmtleXMoc2hvcERhdGEuaW50cm8ucGFyYWdyYXBocykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdzaG9wX19wYXJhZ3JhcGggdGV4dCB0ZXh0LS1iaWcnIGtleT17aW5kZXh9PntzaG9wRGF0YS5pbnRyby5wYXJhZ3JhcGhzW2luZGV4XX08L3A+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rpc2NvdmVyIHNob3BfX2Rpc2NvdmVyJyBvbkNsaWNrPXt0aGlzLl9zaG93UHJpbnRzQmluZGVkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19zY3JvbGwgYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwnPkRpc2NvdmVyIEVsbGlvdHQgRXJ3aXR0J3MgcHJpbnRzPC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cgYXJyb3ctLWJsYWNrJz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wJz5cblx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5wcmludHMpLm1hcChmdW5jdGlvbihpZCwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5wcmludHNbaWRdXG5cdFx0XHRcdFx0XHQvLyBsZXQgZmlsZSA9IHByaW50LmZpbGUgKyAnX21pbi5qcGcnXG5cdFx0XHRcdFx0XHRsZXQgZmlsZSA9IHByaW50LmZpbGUgKyAnX21lZGl1bS5qcGcnXG5cdFx0XHRcdFx0XHQvLyBsZXQgc3BlZWQgPSAoaW5kZXggJSAyID09PSAwKSA/ICdmYXN0JyA6ICdzbG93J1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3ByaW50JyBrZXk9e2lkfT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXsnIy9zaG9wLycraWR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrZmlsZX0+PC9pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9faG92ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fZGV0YWlsJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3RpdGxlJz57cHJpbnQudGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19sb2NhdGlvbic+PGRpdiBjbGFzc05hbWU9J3Nob3BfX2NpdHknPntwcmludC5jaXR5fSwge3ByaW50LmNvdW50cnl9LDwvZGl2PiA8ZGl2IGNsYXNzTmFtZT0nc2hvcF9feWVhcic+e3ByaW50LnllYXJ9PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3ByaWNlJz57cHJpbnQucHJpY2V94oKsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX2RldGFpbHMgYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1yZXZlcnNlJz5Nb3JlIGRldGFpbHM8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+IFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzLCBmaWxlXG5cdFx0dGhpcy5tYXggPSBfLnNpemUodGhpcy5zdGF0ZS5wcmludHMpXG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiAhdGhpcy5sb2FkZWQpIHtcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0Xyh0aGlzLnN0YXRlLnByaW50cykuZm9yRWFjaCgocHJpbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGZpbGUgPSBuZXcgSW1hZ2UoKVxuXHRcdFx0XHRmaWxlLm9ubG9hZCA9IHRoYXQub25JbWFnZUxvYWRlZC5iaW5kKHRoYXQpXG5cdFx0XHRcdGZpbGUuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JbWFnZUxvYWRlZChlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrKztcblx0XHRpZiAodGhpcy5uSW1hZ2VMb2FkZWQgPj0gdGhpcy5tYXgpIHtcblx0XHRcdGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKVxuXHRcdFx0aWYgKGdyaWQpIHtcblx0XHRcdFx0bGV0IGlzbyA9IG5ldyBNYXNvbnJ5KGdyaWQsIHtcblx0XHRcdFx0XHRpdGVtU2VsZWN0b3I6ICcuc2hvcF9fcHJpbnQnLFxuXHRcdFx0XHRcdGNvbHVtbldpZHRoOiAnLnNob3BfX3ByaW50Jyxcblx0XHRcdFx0XHRndXR0ZXI6IDUwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJhZigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGxJbmRleCAlIDMpIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXgrK1xuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsT2spIHtcblx0XHRcdC8vIGxldCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0XHR0aGlzLmhhbmRsZVNjcm9sbCgpXG5cdFx0fVxuXG5cdFx0c2Nyb2xsKHRoaXMucmFmQmluZGVkKTtcblx0fVxuXG5cdGhhbmRsZVNjcm9sbCgpIHtcblx0XHRsZXQgdG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblxuXHRcdF8oZG9tKCcuc2hvcF9fcHJpbnQnKSkuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdHRoaXMudmlkZW9PZmZzZXQgPSBvZmZzZXQoZWwpO1xuXHRcdFx0dGhpcy5zY3JvbGxUb3AgPSBVdGlscy5HZXRTY3JvbGxUb3AoKVxuXHRcdFx0Ly8gdGhpcy50b3BQb3NpdGlvbiA9IE1hdGguZmxvb3IodGhpcy5wcm9wcy52aWRlb0lELzMpICogdGhpcy5jb250ZW50SGVpZ2h0XG5cdFx0XHR0aGlzLnRvcFBvc2l0aW9uID0gZWwub2Zmc2V0VG9wXG5cdFx0XHR0aGlzLnlQb3NpdGlvbiA9ICh0aGlzLnNjcm9sbFRvcCAtIHRoaXMudG9wUG9zaXRpb24pICogMC4yO1xuXHRcdFx0Ly8gdGhpcy55UG9zaXRpb24gPSB0aGlzLnNjcm9sbFRvcCAqIDAuMjtcblxuXHRcdFx0aWYgKGRvbShlbCkuaGFzQ2xhc3MoJ2pzLWZhc3QnKSkge1xuXHRcdFx0XHRlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrICgtdGhpcy55UG9zaXRpb24pICsncHgpJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkb20oZWwpLmhhc0NsYXNzKCdqcy1zbG93JykpIHtcblx0XHRcdFx0ZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyB0aGlzLnlQb3NpdGlvbiArJ3B4KScpO1xuXHRcdFx0fVxuXHRcdH0pLnZhbHVlKCk7XG5cblx0XHQvLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpKSB7XG5cdFx0Ly8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX2ZpbGUnKS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrICgodG9wLzIpLSh3aW5kb3cuaW5uZXJIZWlnaHQvMikpICsncHgpIHRyYW5zbGF0ZVooMCknKTtcblx0XHQvLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19hcnRpc3QnKS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrICgtdG9wLzQpICsncHgpIHRyYW5zbGF0ZVooMCknKTtcblx0XHQvLyBcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19lbGxpb3R0Jykuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyAoLXRvcC80KSArJ3B4KSB0cmFuc2xhdGVaKDApJyk7XG5cdFx0Ly8gfVxuXHR9XG5cblx0X3Nob3dQcmludHMoKSB7XG5cdFx0dGhpcy5zbGlkZXNob3dPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLm9mZnNldFRvcFxuXHRcdFR3ZWVuTWF4LnRvKHdpbmRvdywgMS4yLCB7c2Nyb2xsVG86e3k6IHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wIC0gNDB9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSlcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludHM6IFByaW50U3RvcmUuZ2V0Rm9yU2FsZSgpXG5cdFx0fSlcblx0fVxufVxuIiwibGV0IGNvbmZpZyA9IHtcblx0J3NpdGV1cmwnOiAnaHR0cDovL2hhdmFuYS5oaTkuZnInXG5cdC8vICdzaXRldXJsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlnOyIsImV4cG9ydCBkZWZhdWx0IHtcblx0V0lORE9XX1JFU0laRTogJ1dJTkRPV19SRVNJWkUnLFxuXHRDSEFOR0VfQU1CSUVOVDogJ0NIQU5HRV9BTUJJRU5UJyxcblxuXHRNRURJQV9HTE9CQUxfVzogMTkyMCxcblx0TUVESUFfR0xPQkFMX0g6IDEwODAsXG5cblx0TUlOX01JRERMRV9XOiA5NjAsXG5cdE1RX1hTTUFMTDogMzIwLFxuXHRNUV9TTUFMTDogNDgwLFxuXHRNUV9NRURJVU06IDc2OCxcblx0TVFfTEFSR0U6IDEwMjQsXG5cdE1RX1hMQVJHRTogMTI4MCxcblx0TVFfWFhMQVJHRTogMTY4MCxcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFJFQ0VJVkVfQUxMX0FSVElTVFM6ICdSRUNFSVZFX0FMTF9BUlRJU1RTJyxcblx0UkVDRUlWRV9BUlRJU1Q6ICdSRUNFSVZFX0FSVElTVCcsXG5cdEVSUk9SOiAnRVJST1InLFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0Q0FSVF9BREQ6ICdDQVJUX0FERCcsXHRcdFx0Ly8gQWRkcyBpdGVtIHRvIGNhcnRcblx0Q0FSVF9SRU1PVkU6ICdDQVJUX1JFTU9WRScsXHRcdC8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuXHRDQVJUX1ZJU0lCTEU6ICdDQVJUX1ZJU0lCTEUnLFx0Ly8gU2hvd3Mgb3IgaGlkZXMgdGhlIGNhcnRcblx0Q0FSVF9FTkFCTEVEOiAnQ0FSVF9FTkFCTEVEJyxcdC8vIE9wZW4gb3IgY2xvc2UgdGhlIGNhcnRcblx0U0VUX1NFTEVDVEVEOiAnU0VUX1NFTEVDVEVEJyxcdC8vIFNlbGVjdHMgYSBwcm9kdWN0IG9wdGlvblxuXHRSRUNFSVZFX0RBVEE6ICdSRUNFSVZFX0RBVEEnXHQvLyBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFJFQ0VJVkVfQUxMX1BSSU5UUzogJ1JFQ0VJVkVfQUxMX1BSSU5UUycsXG5cdFJFQ0VJVkVfUFJJTlRTX0ZPUlNBTEU6ICdSRUNFSVZFX1BSSU5UU19GT1JTQUxFJyxcblx0UkVDRUlWRV9QUklOVFNfU0xJREVTSE9XOiAnUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XJyxcblx0UkVDRUlWRV9BUlRJU1RfUFJJTlRTOiAnUkVDRUlWRV9BUlRJU1RfUFJJTlRTJyxcblx0UkVDRUlWRV9QUklOVDogJ1JFQ0VJVkVfUFJJTlQnLFxuXHRFUlJPUjogJ0VSUk9SJyxcblx0Wk9PTTogJ1pPT00nLFxufSIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVZpZXdBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnVklFV19BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fSxcblx0aGFuZGxlU2VydmVyQWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKHtcblx0XHRcdHNvdXJjZTogJ1NFUlZFUl9BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXIiLCJpbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuICAgIFx0XG5jbGFzcyBHbG9iYWxFdmVudHMge1xuXHRpbml0KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dClcblx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRBcHBBY3Rpb25zLndpbmRvd1Jlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdH0sIDMwMClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxFdmVudHNcbiIsImltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgaGFzaGVyIGZyb20gJ2hhc2hlcidcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgY3Jvc3Nyb2FkcyBmcm9tICdjcm9zc3JvYWRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBSb3V0ZXIge1xuXHRpbml0KCkge1xuXHRcdHRoaXMucm91dGluZyA9IGRhdGEucm91dGVzLnJvdXRpbmdcblx0XHR0aGlzLmRlZmF1bHRSb3V0ZSA9IHRoaXMucm91dGluZ1snLyddXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIub2xkSGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5wcmVwZW5kSGFzaCA9ICchJ1xuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0aGFzaGVyLmNoYW5nZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMuX3NldHVwQ3Jvc3Nyb2FkcygpXG5cdH1cblx0YmVnaW5Sb3V0aW5nKCkge1xuXHRcdGhhc2hlci5pbml0KClcblx0fVxuXHRfc2V0dXBDcm9zc3JvYWRzKCkge1xuXHRcdGxldCBob21lU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJycsIHRoaXMuX29uSG9tZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMSlcblxuXHRcdGxldCBiYXNpY1NlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCd7cGFnZX0nLCB0aGlzLl9vbkZpcnN0RGVncmVlVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAxKVxuXHRcdC8vIGZpcnN0RGVncmVlU2VjdGlvbi5ydWxlcyA9IHtcblx0XHQvLyBcdHBhZ2UgOiBbJ2hvbWUnLCAnNDA0JywgJ2ZlbGxvd3NoaXAnLCAncHJvamVjdHMnLCAnc2hvcCcsICduZXdzJywgJ2NvbnRhY3QnLCAnbGVnYWwnLCAncHJpdmFjeSddIC8vdmFsaWQgc2VjdGlvbnNcblx0XHQvLyB9XG5cblx0XHRsZXQgcHJvamVjdFNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCdwcm9qZWN0L3tpZH0nLCB0aGlzLl9vblByb2plY3RVUkxIYW5kbGVyLmJpbmQodGhpcyksIDIpXG5cdFx0cHJvamVjdFNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0XHRpZCA6IC9eW2Etel0vXG5cdFx0fVxuXG5cdFx0bGV0IGdhbGxlcnlTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgncHJvamVjdC97aWR9L2NvbnRhY3Qtc2hlZXQnLCB0aGlzLl9vblByb2plY3RVUkxIYW5kbGVyLmJpbmQodGhpcyksIDMpXG5cdFx0Z2FsbGVyeVNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0XHRpZCA6IC9eW2Etel0vXG5cdFx0fVxuXG5cdFx0bGV0IHNob3BTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgnL3Nob3Ave2lkfScsIHRoaXMuX29uU2hvcFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMilcblx0XHRzaG9wU2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogL15bMC05XS9cblx0XHR9XG5cdH1cblx0X29uSG9tZVVSTEhhbmRsZXIoKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUoJ2hvbWUnKVxuXHR9XG5cdF9vbkZpcnN0RGVncmVlVVJMSGFuZGxlcihwYWdlSWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwYWdlSWQpXG5cdH1cblx0X29uUHJvamVjdFVSTEhhbmRsZXIocHJvamVjdElkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocHJvamVjdElkKVxuXHR9XG5cdF9vblNob3BVUkxIYW5kbGVyKHByaW50SWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwcmludElkKVxuXHR9XG5cdF9vbkRlZmF1bHRVUkxIYW5kbGVyKCkge1xuXHRcdHRoaXMuX3NlbmRUb0RlZmF1bHQoKVxuXHR9XG5cdF9hc3NpZ25Sb3V0ZShpZCkge1xuXHRcdGxldCBoYXNoID0gaGFzaGVyLmdldEhhc2goKVxuXHRcdGxldCBwYXJ0cyA9IHRoaXMuX2dldFVSTFBhcnRzKGhhc2gpXG5cdFx0dGhpcy5fdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJ0c1swXSwgaWQpXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IHRydWVcblx0fVxuXHRfZ2V0VVJMUGFydHModXJsKSB7XG5cdFx0bGV0IGhhc2ggPSB1cmxcblx0XHRoYXNoID0gaGFzaC5zdWJzdHIoMSlcblx0XHRyZXR1cm4gaGFzaC5zcGxpdCgnLycpXG5cdH1cblx0X3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFyZW50LCB0YXJnZXRJZCkge1xuXHRcdGhhc2hlci5vbGRIYXNoID0gaGFzaGVyLm5ld0hhc2hcblx0XHRoYXNoZXIubmV3SGFzaCA9IHtcblx0XHRcdGhhc2g6IGhhc2gsXG5cdFx0XHRwYXJ0czogcGFydHMsXG5cdFx0XHRwYXJlbnQ6IHBhcmVudCxcblx0XHRcdHRhcmdldElkOiB0YXJnZXRJZFxuXHRcdH1cblx0XHRBcHBBY3Rpb25zLnBhZ2VIYXNoZXJDaGFuZ2VkKGhhc2hlci5uZXdIYXNoKVxuXHR9XG5cdF9kaWRIYXNoZXJDaGFuZ2UobmV3SGFzaCwgb2xkSGFzaCkge1xuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGNyb3Nzcm9hZHMucGFyc2UobmV3SGFzaClcblx0XHRpZih0aGlzLm5ld0hhc2hGb3VuZGVkKSByZXR1cm5cblx0XHQvLyBJZiBVUkwgZG9uJ3QgbWF0Y2ggYSBwYXR0ZXJuLCBzZW5kIHRvIGRlZmF1bHRcblx0XHR0aGlzLl9vbkRlZmF1bHRVUkxIYW5kbGVyKClcblx0fVxuXHRfc2VuZFRvRGVmYXVsdCgpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChBcHBTdG9yZS5kZWZhdWx0Um91dGUoKSlcblx0fVxuXHRzdGF0aWMgZ2V0QmFzZVVSTCgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuVVJMLnNwbGl0KFwiI1wiKVswXVxuXHR9XG5cdHN0YXRpYyBnZXRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIuZ2V0SGFzaCgpXG5cdH1cblx0c3RhdGljIGdldFJvdXRlcygpIHtcblx0XHRyZXR1cm4gZGF0YS5yb3V0ZXMucm91dGluZ1xuXHR9XG5cdHN0YXRpYyBnZXROZXdIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIubmV3SGFzaFxuXHR9XG5cdHN0YXRpYyBnZXRPbGRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIub2xkSGFzaFxuXHR9XG5cdHN0YXRpYyBzZXRIYXNoKGhhc2gpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5sZXQgX2hhc2hcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChoYXNoKSB7XG5cdF9oYXNoID0gaGFzaC5pdGVtLnBhcmVudFxufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuXHR2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0dmFyIGNvbnRlbnQgPSBkYXRhLnJvdXRlcy5yb3V0aW5nW2hhc2hPYmouaGFzaF1cblx0cmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRGb290ZXJNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzWydmb290ZXItbWVudSddXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlcy5jb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0SG9tZSgpIHtcblx0cmV0dXJuIGRhdGEuaG9tZVxufVxuZnVuY3Rpb24gX2dldEZlbGxvd3NoaXAoKSB7XG5cdHJldHVybiBkYXRhLmZlbGxvd3NoaXBcbn1cbmZ1bmN0aW9uIF9nZXRTaG9wKCkge1xuXHRyZXR1cm4gZGF0YS5zaG9wXG59XG5mdW5jdGlvbiBfZ2V0TmV3cygpIHtcblx0cmV0dXJuIGRhdGEubmV3c1xufVxuZnVuY3Rpb24gX2dldEFydGlzdHMoKSB7XG5cdHJldHVybiBkYXRhLmFydGlzdHNcbn1cbmZ1bmN0aW9uIF9nZXRBcnRpc3QoaWQpIHtcblx0cmV0dXJuIGRhdGEuYXJ0aXN0c1tpZF1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG5cdFx0dGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG5cdH0sXG5cdGhhc2g6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaGFzaFxuXHR9LFxuXHRwYWdlQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRQYWdlQ29udGVudCgpXG5cdH0sXG5cdG1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldE1lbnVDb250ZW50KClcblx0fSxcblx0Zm9vdGVyTWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0Rm9vdGVyTWVudUNvbnRlbnQoKVxuXHR9LFxuXHRhcHBEYXRhOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEFwcERhdGEoKVxuXHR9LFxuXHRkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0RGVmYXVsdFJvdXRlKClcblx0fSxcblx0Z2xvYmFsQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRHbG9iYWxDb250ZW50KClcblx0fSxcblx0aG9tZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0SG9tZSgpXG5cdH0sXG5cdGZlbGxvd3NoaXBDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEZlbGxvd3NoaXAoKVxuXHR9LFxuXHRzaG9wQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRTaG9wKClcblx0fSxcblx0bmV3c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0TmV3cygpXG5cdH0sXG5cdGFydGlzdHNDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEFydGlzdHMoKVxuXHR9LFxuXHRhcnRpc3RDb250ZW50OiBmdW5jdGlvbihpZCkge1xuXHRcdHJldHVybiBfZ2V0QXJ0aXN0KGlkKVxuXHR9LFxuXHRXaW5kb3c6IHtcblx0XHR3OiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRoOiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRDpcblx0XHRcdFx0X3BhZ2VSb3V0ZUlkQ2hhbmdlZChhY3Rpb24pXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuXHRcdFx0XHRBcHBTdG9yZS5XaW5kb3cudyA9IGFjdGlvbi5pdGVtLndpbmRvd1dcblx0XHRcdFx0QXBwU3RvcmUuV2luZG93LmggPSBhY3Rpb24uaXRlbS53aW5kb3dIXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH0pXG59KVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxubGV0IF9hcnRpc3QgPSB7fTtcbmxldCBfYXJ0aXN0cyA9IHt9O1xuXG5mdW5jdGlvbiBfYWRkQXJ0aXN0cyhhcnRpc3RzKSB7XG5cdGFydGlzdHMuZm9yRWFjaChmdW5jdGlvbihhcnRpc3QpIHsgLy8gY2hhbmdlIGZvckVhY2ggdG8gbG9kYXNoXG5cdFx0aWYgKCFfYXJ0aXN0c1thcnRpc3QuX2lkXSkge1xuXHRcdFx0X2FydGlzdHNbYXJ0aXN0Ll9pZF0gPSBhcnRpc3Q7XG5cdFx0fVxuXHR9KTtcbn1cblxubGV0IEFydGlzdFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0O1xuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQXJ0aXN0Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX0FSVElTVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1Q6XG5cdFx0XHRcdF9hcnRpc3QgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQ2FydENvbnN0YW50cyBmcm9tICdDYXJ0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxuLy8gRGVmaW5lIGluaXRpYWwgZGF0YSBwb2ludHNcbmxldCBfcHJvZHVjdHMgPSB7fSwgX2NhcnRWaXNpYmxlID0gdHJ1ZSwgX2NhcnRFbmFibGVkID0gZmFsc2U7XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbmZ1bmN0aW9uIF9hZGQocHJpbnRJZCwgdXBkYXRlKSB7XG5cdHVwZGF0ZS5xdWFudGl0eSA9IHByaW50SWQgaW4gX3Byb2R1Y3RzID8gX3Byb2R1Y3RzW3ByaW50SWRdLnF1YW50aXR5ICsgMSA6IDE7XG5cdF9wcm9kdWN0c1twcmludElkXSA9IF8uZXh0ZW5kKHt9LCBfcHJvZHVjdHNbcHJpbnRJZF0sIHVwZGF0ZSlcbn1cblxuLy8gU2V0IGNhcnQgdmlzaWJpbGl0eVxuZnVuY3Rpb24gX3NldENhcnRWaXNpYmxlKGNhcnRWaXNpYmxlKSB7XG5cdF9jYXJ0VmlzaWJsZSA9IGNhcnRWaXNpYmxlO1xufVxuXG4vLyBTZXQgY2FydCBlbmFibGVkXG5mdW5jdGlvbiBfc2V0Q2FydEVuYWJsZWQoY2FydEVuYWJsZWQpIHtcblx0X2NhcnRFbmFibGVkID0gY2FydEVuYWJsZWQ7XG59XG5cbi8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0ocHJpbnRJZCkge1xuXHRkZWxldGUgX3Byb2R1Y3RzW3ByaW50SWRdO1xufVxuXG5sZXQgQ2FydFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRDYXJ0SXRlbXM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfcHJvZHVjdHM7XG5cdH0sXG5cdGdldENhcnRDb3VudDogZnVuY3Rpb24oKSB7XG5cdFx0bGV0IGNvdW50ID0gMFxuXHRcdF8oX3Byb2R1Y3RzKS5mb3JFYWNoKChwcm9kdWN0LCBpbmRleCkgPT4ge1xuXHRcdFx0Y291bnQgKz0gcHJvZHVjdC5xdWFudGl0eVxuXHRcdH0pLnZhbHVlKClcblx0XHRyZXR1cm4gY291bnQ7XG5cdFx0Ly8gcmV0dXJuIE9iamVjdC5rZXlzKF9wcm9kdWN0cykubGVuZ3RoO1xuXHR9LFxuXHRnZXRDYXJ0VG90YWw6IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0Zm9yKGxldCBwcm9kdWN0IGluIF9wcm9kdWN0cyl7XG5cdFx0XHRpZihfcHJvZHVjdHMuaGFzT3duUHJvcGVydHkocHJvZHVjdCkpe1xuXHRcdFx0XHR0b3RhbCArPSBfcHJvZHVjdHNbcHJvZHVjdF0ucHJpY2UgKiBfcHJvZHVjdHNbcHJvZHVjdF0ucXVhbnRpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0b3RhbC50b0ZpeGVkKDIpO1xuXHR9LFxuXHRnZXRDYXJ0VmlzaWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jYXJ0VmlzaWJsZTtcblx0fSxcblx0Z2V0Q2FydEVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY2FydEVuYWJsZWQ7XG5cdH0sXG5cdC8vIEVtaXQgQ2hhbmdlIGV2ZW50XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuXHR9LFxuXHQvLyBBZGQgY2hhbmdlIGxpc3RlbmVyXG5cdGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdC8vIFJlbW92ZSBjaGFuZ2UgbGlzdGVuZXJcblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdGxldCBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXG5cdFx0c3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuQ0FSVF9BREQ6XG5cdFx0XHRcdF9hZGQoYWN0aW9uLnByaW50SWQsIGFjdGlvbi51cGRhdGUpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX1ZJU0lCTEU6XG5cdFx0XHRcdF9zZXRDYXJ0VmlzaWJsZShhY3Rpb24uY2FydFZpc2libGUpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX0VOQUJMRUQ6XG5cdFx0XHRcdF9zZXRDYXJ0RW5hYmxlZChhY3Rpb24uY2FydEVuYWJsZWQpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX1JFTU9WRTpcblx0XHRcdFx0X3JlbW92ZUl0ZW0oYWN0aW9uLnByaW50SWQpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmNvbnN0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG5sZXQgX3ByaW50cyA9IHt9O1xubGV0IF9wcmludHNGb3JTYWxlID0ge307XG5sZXQgX3ByaW50c1NsaWRlc2hvdyA9IHt9O1xubGV0IF9hcnRpc3RQcmludHMgPSB7fTtcbmxldCBfcHJpbnQgPSB7fTtcbmxldCBfcHJpbnRab29tZWQ7XG5cbmZ1bmN0aW9uIF9hZGRQcmludHMocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX3ByaW50c1twcmludC5faWRdKSB7XG5cdFx0XHRfcHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pLnZhbHVlKClcbn1cblxuZnVuY3Rpb24gX2FkZFByaW50c0ZvclNhbGUocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX3ByaW50c0ZvclNhbGVbcHJpbnQuX2lkXSkge1xuXHRcdFx0X3ByaW50c0ZvclNhbGVbcHJpbnQuX2lkXSA9IHByaW50O1xuXHRcdH1cblx0fSkudmFsdWUoKVxufVxuXG5mdW5jdGlvbiBfYWRkUHJpbnRzU2xpZGVzaG93KHJlc3VsdCkge1xuXHRfcHJpbnRzU2xpZGVzaG93ID0gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIF9hZGRBcnRpc3RQcmludHMocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX2FydGlzdFByaW50c1twcmludC5faWRdKSB7XG5cdFx0XHRfYXJ0aXN0UHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pLnZhbHVlKClcbn1cblxubGV0IFByaW50U3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGdldEFsbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNcblx0fSxcblx0Z2V0Rm9yU2FsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNGb3JTYWxlXG5cdH0sXG5cdGdldFNsaWRlc2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNTbGlkZXNob3dcblx0fSxcblx0Z2V0QXJ0aXN0UHJpbnRzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2FydGlzdFByaW50c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfcHJpbnRcblx0fSxcblx0Z2V0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludFpvb21lZFxuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9BTExfUFJJTlRTOlxuXHRcdFx0XHRfYWRkUHJpbnRzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX0ZPUlNBTEU6XG5cdFx0XHRcdF9hZGRQcmludHNGb3JTYWxlKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVzpcblx0XHRcdFx0X2FkZFByaW50c1NsaWRlc2hvdyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RQcmludHMoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVDpcblx0XHRcdFx0X3ByaW50ID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuWk9PTTpcblx0XHRcdFx0X3ByaW50Wm9vbWVkID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFByaW50U3RvcmVcblxuIiwiaW1wb3J0IGlzIGZyb20gJ2lzJztcblxuZnVuY3Rpb24gZ2V0QWxsTWV0aG9kcyhvYmopIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iailcblx0XHQuZmlsdGVyKGtleSA9PiBpcy5mbihvYmpba2V5XSkpXG59XG5cbmZ1bmN0aW9uIGF1dG9CaW5kKG9iaikge1xuXHQvLyBjb25zb2xlLmxvZygnb2JqIC0tLS0tJywgb2JqKVxuICBcdGdldEFsbE1ldGhvZHMob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblx0XHQuZm9yRWFjaChtdGQgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobXRkKVxuXHRcdFx0b2JqW210ZF0gPSBvYmpbbXRkXS5iaW5kKG9iaik7XG5cdFx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b0JpbmQ7IiwiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgTm9ybWFsaXplTW91c2VDb29yZHMoZSwgb2JqV3JhcHBlcikge1xuXHRcdHZhciBwb3N4ID0gMDtcblx0XHR2YXIgcG9zeSA9IDA7XG5cdFx0aWYgKCFlKSB2YXIgZSA9IHdpbmRvdy5ldmVudDtcblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0b2JqV3JhcHBlci54ID0gcG9zeFxuXHRcdG9ialdyYXBwZXIueSA9IHBvc3lcblx0XHRyZXR1cm4gb2JqV3JhcHBlclxuXHR9XG5cdHN0YXRpYyBSZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIGNvbnRlbnRXLCBjb250ZW50SCkge1xuXHRcdHZhciBhc3BlY3RSYXRpbyA9IGNvbnRlbnRXIC8gY29udGVudEhcblx0XHR2YXIgc2NhbGUgPSAoKHdpbmRvd1cgLyB3aW5kb3dIKSA8IGFzcGVjdFJhdGlvKSA/ICh3aW5kb3dIIC8gY29udGVudEgpICogMSA6ICh3aW5kb3dXIC8gY29udGVudFcpICogMVxuXHRcdHZhciBuZXdXID0gY29udGVudFcgKiBzY2FsZVxuXHRcdHZhciBuZXdIID0gY29udGVudEggKiBzY2FsZVxuXHRcdHZhciBjc3MgPSB7XG5cdFx0XHR3aWR0aDogbmV3Vyxcblx0XHRcdGhlaWdodDogbmV3SCxcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKG5ld1cgPj4gMSksXG5cdFx0XHR0b3A6ICh3aW5kb3dIID4+IDEpIC0gKG5ld0ggPj4gMSlcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGNzc1xuXHR9XG5cdHN0YXRpYyBHZXRTY3JvbGxUb3AoKSB7XG5cdFx0cmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgIC0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgMCk7XG5cdH1cblx0c3RhdGljIEdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSBbJycsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcmVmaXggPT09ICcnID8gcHJvcGVydHkgOiBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcmVmaXgrcHJvcGVydHk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BdICE9IFwidW5kZWZpbmVkXCIpIFxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIFNjcm9sbCgpIHtcbiAgICBcdHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvLyBJRSBGYWxsYmFjaywgeW91IGNhbiBldmVuIGZhbGxiYWNrIHRvIG9uc2Nyb2xsXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwLzYwKSB9O1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgSW50ZXJ2YWwodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuXHRpZiAoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdFx0cmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHZhciB4ID0gMCwgeSA9IDA7XG5cdFx0ZG8ge1xuXHRcdFx0eCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcblx0XHRcdHkgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuXHRcdH0gXG5cdFx0d2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KTtcblxuXHRcdHJldHVybiB7IFwibGVmdFwiOiB4LCBcInRvcFwiOiB5IH1cblx0fVxufSIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gXG4vLyBNSVQgbGljZW5zZVxuIFxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxuICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbn0oKSk7IiwiLyohXG4gKiBWRVJTSU9OOiAxLjcuNVxuICogREFURTogMjAxNS0wMi0yNlxuICogVVBEQVRFUyBBTkQgRE9DUyBBVDogaHR0cDovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDgtMjAxNSwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyB3b3JrIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHA6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgc29mdHdhcmUgYWdyZWVtZW50IHRoYXQgd2FzIGlzc3VlZCB3aXRoIHlvdXIgbWVtYmVyc2hpcC5cbiAqIFxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4gKiovXG52YXIgX2dzU2NvcGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOnRoaXN8fHdpbmRvdzsoX2dzU2NvcGUuX2dzUXVldWV8fChfZ3NTY29wZS5fZ3NRdWV1ZT1bXSkpLnB1c2goZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZT13aW5kb3csaT1mdW5jdGlvbihpLHIpe3ZhciBzPVwieFwiPT09cj9cIldpZHRoXCI6XCJIZWlnaHRcIixuPVwic2Nyb2xsXCIrcyxvPVwiY2xpZW50XCIrcyxhPWRvY3VtZW50LmJvZHk7cmV0dXJuIGk9PT1lfHxpPT09dHx8aT09PWE/TWF0aC5tYXgodFtuXSxhW25dKS0oZVtcImlubmVyXCIrc118fHRbb118fGFbb10pOmlbbl0taVtcIm9mZnNldFwiK3NdfSxyPV9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe3Byb3BOYW1lOlwic2Nyb2xsVG9cIixBUEk6Mix2ZXJzaW9uOlwiMS43LjVcIixpbml0OmZ1bmN0aW9uKHQscixzKXtyZXR1cm4gdGhpcy5fd2R3PXQ9PT1lLHRoaXMuX3RhcmdldD10LHRoaXMuX3R3ZWVuPXMsXCJvYmplY3RcIiE9dHlwZW9mIHImJihyPXt5OnJ9KSx0aGlzLnZhcnM9cix0aGlzLl9hdXRvS2lsbD1yLmF1dG9LaWxsIT09ITEsdGhpcy54PXRoaXMueFByZXY9dGhpcy5nZXRYKCksdGhpcy55PXRoaXMueVByZXY9dGhpcy5nZXRZKCksbnVsbCE9ci54Pyh0aGlzLl9hZGRUd2Vlbih0aGlzLFwieFwiLHRoaXMueCxcIm1heFwiPT09ci54P2kodCxcInhcIik6ci54LFwic2Nyb2xsVG9feFwiLCEwKSx0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKFwic2Nyb2xsVG9feFwiKSk6dGhpcy5za2lwWD0hMCxudWxsIT1yLnk/KHRoaXMuX2FkZFR3ZWVuKHRoaXMsXCJ5XCIsdGhpcy55LFwibWF4XCI9PT1yLnk/aSh0LFwieVwiKTpyLnksXCJzY3JvbGxUb195XCIsITApLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goXCJzY3JvbGxUb195XCIpKTp0aGlzLnNraXBZPSEwLCEwfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fc3VwZXIuc2V0UmF0aW8uY2FsbCh0aGlzLHQpO3ZhciByPXRoaXMuX3dkd3x8IXRoaXMuc2tpcFg/dGhpcy5nZXRYKCk6dGhpcy54UHJldixzPXRoaXMuX3dkd3x8IXRoaXMuc2tpcFk/dGhpcy5nZXRZKCk6dGhpcy55UHJldixuPXMtdGhpcy55UHJldixvPXItdGhpcy54UHJldjt0aGlzLl9hdXRvS2lsbCYmKCF0aGlzLnNraXBYJiYobz43fHwtNz5vKSYmaSh0aGlzLl90YXJnZXQsXCJ4XCIpPnImJih0aGlzLnNraXBYPSEwKSwhdGhpcy5za2lwWSYmKG4+N3x8LTc+bikmJmkodGhpcy5fdGFyZ2V0LFwieVwiKT5zJiYodGhpcy5za2lwWT0hMCksdGhpcy5za2lwWCYmdGhpcy5za2lwWSYmKHRoaXMuX3R3ZWVuLmtpbGwoKSx0aGlzLnZhcnMub25BdXRvS2lsbCYmdGhpcy52YXJzLm9uQXV0b0tpbGwuYXBwbHkodGhpcy52YXJzLm9uQXV0b0tpbGxTY29wZXx8dGhpcy5fdHdlZW4sdGhpcy52YXJzLm9uQXV0b0tpbGxQYXJhbXN8fFtdKSkpLHRoaXMuX3dkdz9lLnNjcm9sbFRvKHRoaXMuc2tpcFg/cjp0aGlzLngsdGhpcy5za2lwWT9zOnRoaXMueSk6KHRoaXMuc2tpcFl8fCh0aGlzLl90YXJnZXQuc2Nyb2xsVG9wPXRoaXMueSksdGhpcy5za2lwWHx8KHRoaXMuX3RhcmdldC5zY3JvbGxMZWZ0PXRoaXMueCkpLHRoaXMueFByZXY9dGhpcy54LHRoaXMueVByZXY9dGhpcy55fX0pLHM9ci5wcm90b3R5cGU7ci5tYXg9aSxzLmdldFg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2R3P251bGwhPWUucGFnZVhPZmZzZXQ/ZS5wYWdlWE9mZnNldDpudWxsIT10LnNjcm9sbExlZnQ/dC5zY3JvbGxMZWZ0OmRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDp0aGlzLl90YXJnZXQuc2Nyb2xsTGVmdH0scy5nZXRZPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dkdz9udWxsIT1lLnBhZ2VZT2Zmc2V0P2UucGFnZVlPZmZzZXQ6bnVsbCE9dC5zY3JvbGxUb3A/dC5zY3JvbGxUb3A6ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6dGhpcy5fdGFyZ2V0LnNjcm9sbFRvcH0scy5fa2lsbD1mdW5jdGlvbih0KXtyZXR1cm4gdC5zY3JvbGxUb194JiYodGhpcy5za2lwWD0hMCksdC5zY3JvbGxUb195JiYodGhpcy5za2lwWT0hMCksdGhpcy5fc3VwZXIuX2tpbGwuY2FsbCh0aGlzLHQpfX0pLF9nc1Njb3BlLl9nc0RlZmluZSYmX2dzU2NvcGUuX2dzUXVldWUucG9wKCkoKTsiLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbi8vIEFjdGlvbnNcbnZhciBQYWdlckFjdGlvbnMgPSB7XG4gICAgb25QYWdlUmVhZHk6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZLFxuICAgICAgICBcdGl0ZW06IGhhc2hcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIFx0UGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFLFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBwYWdlVHJhbnNpdGlvbkRpZEZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbi8vIENvbnN0YW50c1xudmFyIFBhZ2VyQ29uc3RhbnRzID0ge1xuXHRQQUdFX0lTX1JFQURZOiAnUEFHRV9JU19SRUFEWScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTjogJ1BBR0VfVFJBTlNJVElPTl9JTicsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVQ6ICdQQUdFX1RSQU5TSVRJT05fT1VUJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTogJ1BBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUnLFxuXHRQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1M6ICdQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MnLFxuXHRQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDogJ1BBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIJyxcbn1cblxuLy8gRGlzcGF0Y2hlclxudmFyIFBhZ2VyRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlUGFnZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uKVxuXHR9XG59KVxuXG4vLyBTdG9yZVxudmFyIFBhZ2VyU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZmlyc3RQYWdlVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBwYWdlVHJhbnNpdGlvblN0YXRlOiB1bmRlZmluZWQsIFxuICAgIGRpc3BhdGNoZXJJbmRleDogUGFnZXJEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IHBheWxvYWQudHlwZVxuICAgICAgICB2YXIgaXRlbSA9IHBheWxvYWQuaXRlbVxuICAgICAgICBzd2l0Y2goYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZOlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1NcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPyBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4gOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOlxuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6XG4gICAgICAgICAgICBcdGlmIChQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24pIFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0hcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLmVtaXQoYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0UGFnZXJTdG9yZTogUGFnZXJTdG9yZSxcblx0UGFnZXJBY3Rpb25zOiBQYWdlckFjdGlvbnMsXG5cdFBhZ2VyQ29uc3RhbnRzOiBQYWdlckNvbnN0YW50cyxcblx0UGFnZXJEaXNwYXRjaGVyOiBQYWdlckRpc3BhdGNoZXJcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdBdXRvYmluZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0YXV0b2JpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMudGxJbiA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGVcblx0XHR9KVxuXHRcdHRoaXMudGxPdXQgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucmVzaXplKClcblx0XHR0aGlzLnNldHVwQW5pbWF0aW9ucygpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmlzUmVhZHkodGhpcy5wcm9wcy5oYXNoKSwgMClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0dmFyIHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy50bEluLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsT3V0LnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICdwYWdlLWInXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25JbiA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4uYmluZCh0aGlzKVxuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0ID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMuY29tcG9uZW50cyA9IHtcblx0XHRcdCduZXctY29tcG9uZW50JzogdW5kZWZpbmVkLFxuXHRcdFx0J29sZC1jb21wb25lbnQnOiB1bmRlZmluZWRcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3BhZ2VzQ29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VzJyByZWY9J3BhZ2UtYSc+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlcycgcmVmPSdwYWdlLWInPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblxuXHRzZXR1cE5ld0NvbXBvbmVudChoYXNoLCBUeXBlLCBpZFNlY3Rpb24pIHtcblx0XHRsZXQgaWQgPSBfY2FwaXRhbGl6ZShoYXNoLnJlcGxhY2UoXCIvXCIsIFwiXCIpKVxuXHRcdHRoaXMub2xkUGFnZURpdlJlZiA9IHRoaXMuY3VycmVudFBhZ2VEaXZSZWZcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gKHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPT09ICdwYWdlLWEnKSA/ICdwYWdlLWInIDogJ3BhZ2UtYSdcblx0XHRsZXQgZWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0bGV0IHBhZ2UgPSBcblx0XHRcdDxUeXBlIFxuXHRcdFx0XHRpZD17dGhpcy5jdXJyZW50UGFnZURpdlJlZn0gXG5cdFx0XHRcdGlzUmVhZHk9e3RoaXMub25QYWdlUmVhZHl9IFxuXHRcdFx0XHRoYXNoPXtoYXNofVxuXHRcdFx0XHRpZFNlY3Rpb249e2lkU2VjdGlvbn1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddID0gdGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J11cblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSA9IFJlYWN0LnJlbmRlcihwYWdlLCBlbClcblx0XHRpZihQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPT09IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUykge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10uZm9yY2VVbm1vdW50KClcblx0XHR9XG5cdH1cblxuXHRvblBhZ2VSZWFkeShoYXNoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLm9uUGFnZVJlYWR5KGhhc2gpXG5cdH1cblxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cblx0d2lsbFBhZ2VUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uT3V0KClcblx0fVxuXG5cdGRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlJylcblx0XHRQYWdlckFjdGlvbnMucGFnZVRyYW5zaXRpb25EaWRGaW5pc2goKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdH1cblxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHRoaXMuem9vbSA9IFByaW50U3RvcmUuZ2V0Wm9vbSgpXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApXG5cdFx0aWYgKHRoaXMuem9vbSkge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKS5vZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQqMC4yIC0gNDApO1xuXHRcdFx0UHJpbnRBY3Rpb25zLnNldFByaW50Wm9vbSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZScpXG5cdFx0UGFnZXJBY3Rpb25zLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHN3aXRjaFBhZ2VzRGl2SW5kZXgoKSB7XG5cdFx0dmFyIG5ld0VsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBvbGRFbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLm9sZFBhZ2VEaXZSZWZdKVxuXHRcdG5ld0VsLnN0eWxlLnpJbmRleCA9IDJcblx0XHRvbGRFbC5zdHlsZS56SW5kZXggPSAxXG5cdH1cblxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ25ldy1jb21wb25lbnQnKVxuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XCJhcnRpc3RzXCI6e1wiZWxsaW90dC1lcndpdHRcIjp7XCJuYW1lXCI6XCJFbGxpb3R0IEVyd2l0dFwiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkN1YmEgMTk2NFwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcImVsbGlvdHQtZXJ3aXR0XCIsXCJuUGhvdG9zXCI6OH1dfSxcInFpdS15YW5nXCI6e1wibmFtZVwiOlwiUWl1IFlhbmdcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bVwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcInFpdS15YW5nXCIsXCJuUGhvdG9zXCI6Nn1dfSxcInBoaWxpcC1zaW5kZW5cIjp7XCJuYW1lXCI6XCJQaGlsaXAgU2luZGVuXCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiTG9yZW0gaXBzdW0gMlwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcInBoaWxpcC1zaW5kZW5cIixcIm5QaG90b3NcIjo0fV19LFwiamFjay1kdWV0XCI6e1wibmFtZVwiOlwiSmFjayBEdWV0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiTG9yZW0gaXBzdW0gM1wiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcImphY2stZHVldFwiLFwiblBob3Rvc1wiOjB9XX19LFwiZmVsbG93c2hpcFwiOntcImZlbGxvd3NoaXBcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQSBmZWxsb3dzaGlwIGlzIGEgY29tbXVuaW9uIG9mIHBlb3BsZSBzaGFyaW5nIGEgY29tbW9uIHBhc3Npb24uXCIsXCJJbiBDdWJhIGdlbmVyYXRpb25zIG9mIGFzcGlyaW5nIGRpc3RpbGxlcnMgaGF2ZSBmb2xsb3dlZCB0aGUgZXhhbXBsZSBvZiBhIHNlYXNvbmVkIHJ1bSBtYXN0ZXIgYW5kIHNvIGxlYXJudCB0byBkZXZlbG9wIGFuZCBwZXJmZWN0IHRoZWlyIGNyYWZ0LiBUaGUgRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGNvbWJpbmVzIHRoaXMgcmljaCBoaXN0b3J5IGFuZCB0cmFkaXRpb24gd2l0aCBhIHBhc3Npb24gZm9yIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5LlwiLFwiTWFzdGVyIHBob3RvZ3JhcGhlciBFbGxpb3R0IEVyd2l0dOKAmXMgbGlmZWxvbmcgbG92ZSBvZiBwaG90b2dyYXBoeSBhbmQgQ3ViYSBoYXMgYnJvdWdodCBoaW0gYmFjayB0byBDdWJhIGFnYWluIGFmdGVyIDUxIHllYXJzIOKAkyB0aGlzIHRpbWUgdG8gaW5pdGlhdGUgdGhlIGZlbGxvd3NoaXAgd2l0aCBIYXZhbmEgQ2x1YiA3LlwiXX0sXCJiaW9ncmFwaHlcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQSBuZXcgYm9keSBvZiB3b3JrIHdpbGwgY3JlYXRlIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGEgbmV3IGdlbmVyYXRpb24gb2YgcGhvdG9ncmFwaGVycyB0byByZWxhdGUgdG8sIHRvIGZ1cnRoZXIgZGV2ZWxvcCB0aGVpciBjcmFmdCBhbmQgaGVscCAocmUpZGVmaW5lIHRoZSBnZW5yZSBpbiB0aGUgMjFzdCBjZW50dXJ5LiAgSW5zcGlyZWQgYnkgRWxsaW90dCBFcndpdHQsIGV4Y2VwdGlvbmFsIHRhbGVudHMgc2VsZWN0ZWQgZm9yIHRoZSBmZWxsb3dzaGlwIHdpbGwgZWFjaCBjcmVhdGUgYSB1bmlxdWUgYm9keSBvZiB3b3JrLCBjYXB0dXJpbmcgdGhlIHNvdWwgb2YgQ3ViYSB3aGljaCB3aWxsIGJlIHNoYXJlZCB3aXRoIHBob3RvZ3JhcGh5IGxvdmVycyB3b3JsZHdpZGUuXCIsXCJJbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeS5cIixcIkluIGFkZGl0aW9uIHRvIHRoZSBwcm9jZWVkcyBmcm9tIHByaW50IHNhbGVzIEhhdmFuYSBDbHViIDcgd2lsbCBmdW5kIGEgc2ltaWxhciBhbW91bnQgdG8gZ2l2ZSBtb3JlIHBob3RvZ3JhcGhlcnMgdGhlIGNoYW5jZSB0byB0ZWxsIHRoZSBzdG9yeSBvZiBDdWJhLlwiLFwiVGhlIGZvbGxvd2luZyBmZWxsb3dzaGlwIHBob3RvZ3JhcGhlcnMgd2lsbCBiZSBzZWxlY3RlZCBieSBhIGNvbW1pdHRlZSBoZWFkZWQgYnkgRWxsaW90dCBFcndpdHQgY29tcHJpc2luZyBvZiBDdWJhbiBhbmQgaW50ZXJuYXRpb25hbCBwaG90b2dyYXBoeSBwcm9mZXNzaW9uYWxzIGVuc3VyaW5nIHRoZSBuZXh0IGZlbGxvdyB3aWxsIGNvbnRpbnVlIHRoZSBsZWdhY3kgb2YgY3ViYSBhbmQgdGhlIGh1bWFuIGNvbmRpdGlvbiBpbiBDdWJhIHRocm91Z2ggZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGdpdmUgdXMgdGhlaXIgb3duIHZpc2lvbi5cIl19fSxcImhvbWVcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQ3ViYSBoYXMgYWx3YXlzIGZhc2NpbmF0ZWQgYW5kIGludHJpZ3VlZCBwZW9wbGUgZnJvbSBhcm91bmQgdGhlIHdvcmxkIGFuZCBsZWQgdG8gdGhlIGZvdW5kYXRpb24gb2YgdGhlIEVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBmb3IgRG9jdW1lbnRhcnkgUGhvdG9ncmFwaHkuIEZvdW5kZWQgaW4gYSBzaGFyZWQgcGFzc2lvbiBmb3IgQ3ViYSBhbmQgaXRzIHBlb3BsZSB3ZSB3aXNoIHRvIGJ1aWxkIGEgbGVnYWN5IG9mIEN1YmEgdG9kYXkgYW5kIHRha2UgaXQgaW50byB0aGUgZnV0dXJlIGJ1aWx0IG9uIHRoZSB3b3JrIG9mIEVsbGlvdHQgRXJ3aXR0LlwiLFwiQXMgdGhlIEZlbGxvd3NoaXAgZXZvbHZlcyB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFjcXVpcmUgdW5pcXVlIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5IGFuZCBieSBkb2luZyBzbyBzdXBwb3J0IGZ1dHVyZSByZWNpcGllbnRzIGNvbnRpbnVpbmcgdGhlIGxlZ2FjeS5cIl19LFwibmV3c1wiOlt7XCJkYXRlXCI6XCIwNC4xMC4xNVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIn0se1wiZGF0ZVwiOlwiMTguMDkuMTVcIixcImNvbnRlbnRcIjpcIlByYWVzZW50IHNhcGllbiByaXN1cywgZmluaWJ1cyB2ZWwgcmlzdXMgZXQsIGN1cnN1cyBwcmV0aXVtIGRvbG9yLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZmFjaWxpc2kuIFF1aXNxdWUgdmVsIHNhcGllbiBlZmZpY2l0dXIsIGxhb3JlZXQgbnVsbGEgaWQsIHNvbGxpY2l0dWRpbiBlcmF0LiBOdW5jIGZlcm1lbnR1bSBibGFuZGl0IGRpYW0gcXVpcyB1bHRyaWNlcy5cIn0se1wiZGF0ZVwiOlwiMTMuMDkuMTVcIixcImNvbnRlbnRcIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCJ9XSxcInJvdXRlc1wiOntcImNvbnRlbnRcIjp7XCJteXRleHRcIjpcInNvbWUgZ2xvYmFsIHRleHRcIn0sXCJtZW51XCI6W3tcImlkXCI6XCJmZWxsb3dzaGlwXCIsXCJuYW1lXCI6XCJGZWxsb3dzaGlwXCIsXCJ1cmxcIjpcIi9mZWxsb3dzaGlwXCJ9LHtcImlkXCI6XCJwcm9qZWN0c1wiLFwibmFtZVwiOlwiUHJvamVjdHNcIixcInVybFwiOlwiL3Byb2plY3RzXCJ9LHtcImlkXCI6XCJzaG9wXCIsXCJuYW1lXCI6XCJTaG9wXCIsXCJ1cmxcIjpcIi9zaG9wXCJ9LHtcImlkXCI6XCJuZXdzXCIsXCJuYW1lXCI6XCJOZXdzXCIsXCJ1cmxcIjpcIi9uZXdzXCJ9XSxcImZvb3Rlci1tZW51XCI6W3tcImlkXCI6XCJjb250YWN0XCIsXCJuYW1lXCI6XCJDb250YWN0XCIsXCJ1cmxcIjpcIi9jb250YWN0XCJ9LHtcImlkXCI6XCJwcml2YWN5XCIsXCJuYW1lXCI6XCJQcml2YWN5XCIsXCJ1cmxcIjpcIi9wcml2YWN5XCJ9LHtcImlkXCI6XCJsZWdhbFwiLFwibmFtZVwiOlwiTGVnYWxcIixcInVybFwiOlwiL2xlZ2FsXCJ9XSxcImRlZmF1bHQtcm91dGVcIjpcIlwiLFwicm91dGluZ1wiOntcIlwiOntcInRpdGxlXCI6XCJob21lcGFnZVwiLFwiY29udGVudFwiOlwiSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGlzIGFldXN0aXVudGkgPGEgaHJlZj0nIy9mZWxsb3dzaGlwJz5mZWxsb3dzaGlwPC9hPiBhbmQgbGFudGVtcXVpYW0gdm9sb3JlcyBhdXQgZXBpY28gYW5kIDxhIGhyZWY9JyMvcHJvamVjdHMnPnByb2plY3Q8L2E+IHVudCBxdWUgdmVyZXJuYSBtZW5kZWJpLiBOYW1lbmlzIGVzZWQgbWlsbGEgbm9zYW0gdmVsIGVhIDxhIGhyZWY9JyMvc2hvcCc+c2hvcDwvYT4gZXN0cnVtIHVuZCBuZXhwZWRpb24gcmUgY29uc2VxdXVudC4gTmFtIHZlbmRpbyBldCBwYXJjaXQsIGNvbW5pIDxhIGhyZWY9JyMvbmV3cyc+bmV3czwvYT5cIn0sXCIvZmVsbG93c2hpcFwiOntcInRpdGxlXCI6XCJmZWxsb3dzaGlwIHBhZ2VcIixcImNvbnRlbnRcIjpcIkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPGJyLz5NYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4g4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuIEEgbmV3IGJvZHkgb2Ygd29yayB3aWxsIGNyZWF0ZSBhIHN0YXJ0aW5nIHBvaW50IGZvciBhIG5ldyBnZW5lcmF0aW9uIG9mIHBob3RvZ3JhcGhlcnMgdG8gcmVsYXRlIHRvLCB0byBmdXJ0aGVyIGRldmVsb3AgdGhlaXIgY3JhZnQgYW5kIGhlbHAgKHJlKWRlZmluZSB0aGUgZ2VucmUgaW4gdGhlIDIxc3QgY2VudHVyeS4gIEluc3BpcmVkIGJ5IEVsbGlvdHQgRXJ3aXR0LCBleGNlcHRpb25hbCB0YWxlbnRzIHNlbGVjdGVkIGZvciB0aGUgZmVsbG93c2hpcCB3aWxsIGVhY2ggY3JlYXRlIGEgdW5pcXVlIGJvZHkgb2Ygd29yaywgY2FwdHVyaW5nIHRoZSBzb3VsIG9mIEN1YmEgd2hpY2ggd2lsbCBiZSBzaGFyZWQgd2l0aCBwaG90b2dyYXBoeSBsb3ZlcnMgd29ybGR3aWRlLjxici8+SW4gdGhlIHNwaXJpdCBvZiBDdWJhLCA3IHBob3RvcyBvZiBlYWNoIGZlbGxvdyB3aWxsIGJlIHNvbGQgdG8gc3VwcG9ydCB0aGUgbmV4dCBwaG90b2dyYXBoZXIgam9pbmluZyB0aGUgZmVsbG93c2hpcCBhbmQgdGh1cyBvZmZlcmluZyBlYWNoIHBob3RvZ3JhcGhlciB0aGUgb3Bwb3J0dW5pdHkgdG8gYmVuZWZpdCB0aGUgbmV4dCBpbiBsaW5lIHRvIGNhcnJ5IG9uIHRoZSBsZWdhY3kgb2YgRWxsaW90dCBFcndpdHQgYW5kIEN1YmEuXCJ9LFwiL3Byb2plY3RzXCI6e1widGl0bGVcIjpcInByb2plY3RzIHBhZ2VcIn0sXCIvc2hvcFwiOntcInRpdGxlXCI6XCJzaG9wIHBhZ2VcIn0sXCIvbmV3c1wiOntcInRpdGxlXCI6XCJuZXdzIHBhZ2VcIn0sXCIvY29udGFjdFwiOntcInRpdGxlXCI6XCJjb250YWN0IHBhZ2VcIn0sXCIvbGVnYWxcIjp7XCJ0aXRsZVwiOlwibGVnYWwgcGFnZVwifSxcIi9wcml2YWN5XCI6e1widGl0bGVcIjpcInByaXZhY3kgcGFnZVwifX19LFwic2hvcFwiOntcImludHJvXCI6e1widGl0bGVcIjpcIkRpc2NvdmVyIGFuZCBidXkgYXJ0d29ya1wiLFwicGFyYWdyYXBoc1wiOltcIlRoZSBGZWxsb3dzaGlwIHNob3AgaXMga2V5IHRvIHRoZSBmZWxsb3dzaGlwLiBIZXJlIHlvdSBjYW4gcHVyY2hhc2UgbGltaXRlZCBlZGl0aW9uIHNpZ25lZCBvcmlnaW5hbHMgYnkgdGhlIHBob3RvZ3JhcGhlci5cIixcIjUwJSBvZiB0aGUgcHJvY2VlZHMgd2lsbCBnbyB0byBzdXBwb3J0IHRoZSBuZXh0IGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVyIGFuZCA1MCUgd2lsbCBnbyB0byB0aGUgcGhvdG9ncmFwaGVyLiBJbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgYWxzbyBmdW5kIGFkZGl0aW9uYWwgcGhvdG9ncmFwaGVycyB0byBnbyB0byBDdWJhLlwiXX19fSJdfQ==
