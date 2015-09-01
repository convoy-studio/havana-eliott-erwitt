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
						{ className: 'discover fellowship__discover', onClick: this._goToBiographyBinded },
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
			this.tlEntry.to(this._canvas, 1, { opacity: 0, ease: Power2.easeOut });
			this.tlEntry.to((0, _domquery2['default'])('.front-container'), 0.4, { opacity: 1 }, 0.6);
			this.tlEntry.to((0, _domquery2['default'])('.home__content'), 0.4, { opacity: 1 }, 0.6);
			this.tlEntry.to((0, _domquery2['default'])('.cart'), 0.4, { opacity: 1 }, 0.6);
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
								{ href: '', className: 'payment__pay button button--center button--small', onClick: this.pay.bind(this) },
								'Proceed to payment'
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
								'Silver gelatin print measuring'
							),
							_react2['default'].createElement(
								'p',
								null,
								'27.9 × 35.6 cm (11 × 14 inches), unframed.'
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
								'Silver gelatin print measuring'
							),
							_react2['default'].createElement(
								'p',
								null,
								'27.9 × 35.6 cm (11 × 14 inches), unframed.'
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
			print: {}
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
				if (that.zoom) {
					_PrintApi2['default'].getSlideshow(_this.props.idSection, that.zoom);
				} else {
					_PrintApi2['default'].getSlideshow(_this.props.idSection);
				}
			}, 10);

			_ArtistApi2['default'].getBySlug(this.props.idSection);
			_ArtistStore2['default'].addChangeListener(this._onArtistStoreChangeBinded);
			_PrintStore2['default'].addChangeListener(this._onPrintStoreChangeBinded);
			// PrintStore.on(PrintConstants.RECEIVE_PRINTS_SLIDESHOW, this._onPrintStoreChangeBinded)	
			// PrintStore.on(PrintConstants.RECEIVE_PRINT, this._onPrintStoreChangeBinded)	

			this._intro = document.querySelector('.project__intro');
			this._raf();
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
									var file = _this2.slideshowPrints[index].file + '_big.jpg';
									var status = index;
									return _react2['default'].createElement(
										'div',
										{ className: 'project__print project__print--' + status, onClick: that._toggleZoomBinded, key: index },
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
												'div',
												{ className: 'project__reveal button button--left button--small button--reverse', onClick: _this2._toggleStoryBinded },
												'The story'
											),
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
			TweenMax.to(window, 1.2, { scrollTo: { y: this.slideshowOffsetTop }, ease: Power2.easeOut });
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
			this.zoomOut();
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
			var that = this;

			this._hideStory();
			_gsap2['default'].to((0, _domquery2['default'])('.project__print'), 0.4, { opacity: 0, onComplete: function onComplete() {
					that.currentIndex = that._getPrevIndex();
					that.action = 'prev';
					_PrintApi2['default'].getOne(that.state.slideshow.refs[that._getPrevIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
				} });
		}
	}, {
		key: '_next',
		value: function _next() {
			var that = this;

			this._hideStory();
			_gsap2['default'].to((0, _domquery2['default'])('.project__print'), 0.4, { opacity: 0, onComplete: function onComplete() {
					that.currentIndex = that._getNextIndex();
					that.action = 'next';
					_PrintApi2['default'].getOne(that.state.slideshow.refs[that._getNextIndex()]); // TODO: mettre en cache pour éviter les doublons de requêtes
				} });
		}
	}, {
		key: '_getPrevIndex',
		value: function _getPrevIndex() {
			return this.currentIndex - 1 < 0 ? this.state.slideshow.refs.length - 1 : this.currentIndex - 1;
		}
	}, {
		key: '_getNextIndex',
		value: function _getNextIndex() {
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
				_gsap2['default'].to((0, _domquery2['default'])('.project__print'), 0.4, { opacity: 1 });
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
				// window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop - window.innerHeight*0.2 - 40);
				window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hY3Rpb25zL0FydGlzdEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvQ2FydEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvUHJpbnRBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQXJ0aXN0QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQ2FydEFwaS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYXBpL1ByaW50QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0NhcnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Db250YWN0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0ZlbGxvd3NoaXAuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvRnJpZW5kcy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9HYWxsZXJ5LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTGVnYWwuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTmV3cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Ob3Rmb3VuZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9QYXltZW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaXZhY3kuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9TaG9wLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25maWcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcHBDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcnRpc3RDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9DYXJ0Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvUHJpbnRDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc2VydmljZXMvUm91dGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9BcnRpc3RTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0NhcnRTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL1ByaW50U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL0F1dG9iaW5kLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9VdGlscy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvb2Zmc2V0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9yYWYuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL3Njcm9sbFRvLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL1BhZ2VyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZVBhZ2VyLmpzIiwid3d3L2RhdGEvZGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzttQkNiZ0IsS0FBSzs7OztvQkFDQSxNQUFNOzs7O3FCQUNULE9BQU87Ozs7bUJBQ1QsS0FBSzs7Ozt5QkFDQyxXQUFXOzs7O0FBRWpDLDRCQUFVLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7O0FBR3hCLElBQUksR0FBRyxHQUFHLHNCQUFTLENBQUE7QUFDbkIs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Q0FBQyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUcsQ0FBQyxJQUFFLEVBQUMsS0FBRyxDQUFDLElBQUUsRUFBQyxLQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxHQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUM7TUFBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsY0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGNBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLEtBQUcsQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLFFBQVEsSUFBRSxPQUFPLENBQUMsS0FBRyxDQUFDLEdBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxLQUFLLEtBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7S0FBQyxFQUFDLEdBQUcsRUFBQyxhQUFTLENBQUMsRUFBQztBQUFDLFVBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLO1VBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSztVQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUs7VUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFFLEVBQUUsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssS0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUFDLEVBQUMsQ0FBQztNQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsWUFBVTtBQUFDLFdBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLElBQUksSUFBRSxDQUFDLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsWUFBVTtBQUFDLFdBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLElBQUksSUFBRSxDQUFDLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxZQUFPLENBQUMsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FB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LENBQUE7R0FDdEM7OztRQW5HbUIsU0FBUztHQUFTLG1CQUFNLFNBQVM7O3FCQUFqQyxTQUFTOzs7O0FDTjlCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiAoc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiaW1wb3J0IEFwcCBmcm9tICdBcHAnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBQYWdlciBmcm9tICdQYWdlcidcbmltcG9ydCByYWYgZnJvbSAncmFmJ1xuaW1wb3J0IEZhc3RDbGljayBmcm9tICdmYXN0Y2xpY2snXG5cbkZhc3RDbGljayhkb2N1bWVudC5ib2R5KVxuXG4vLyBTdGFydCBBcHBcbnZhciBhcHAgPSBuZXcgQXBwKClcbmFwcC5pbml0KClcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgQXBwVGVtcGxhdGUgZnJvbSAnQXBwVGVtcGxhdGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBHRXZlbnRzIGZyb20gJ0dsb2JhbEV2ZW50cydcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBJbml0IGdsb2JhbCBldmVudHNcblx0XHR3aW5kb3cuR2xvYmFsRXZlbnRzID0gbmV3IEdFdmVudHMoKVxuXHRcdEdsb2JhbEV2ZW50cy5pbml0KClcblx0XHRcblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcblx0XHQpXG5cblx0XHQvLyBTdGFydCByb3V0aW5nXG5cdFx0cm91dGVyLmJlZ2luUm91dGluZygpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGcm9udENvbnRhaW5lciBmcm9tICdGcm9udENvbnRhaW5lcidcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICdQYWdlc0NvbnRhaW5lcidcbmltcG9ydCBDYXJ0IGZyb20gJ0NhcnQnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKSxcblx0XHRjYXJ0VmlzaWJsZTogQ2FydFN0b3JlLmdldENhcnRWaXNpYmxlKCksXG5cdFx0Y2FydEVuYWJsZWQ6IENhcnRTdG9yZS5nZXRDYXJ0RW5hYmxlZCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0Q2FydFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Q2FydFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSd0ZW1wbGF0ZSc+XG5cdFx0XHRcdDxjYW52YXMgcmVmPSdjYW52YXMnIGNsYXNzTmFtZT0nY2FudmFzJz48L2NhbnZhcz5cblx0XHRcdFx0PEZyb250Q29udGFpbmVyIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciAvPlxuXHRcdFx0XHQ8Q2FydFxuXHRcdFx0XHRcdHByb2R1Y3RzPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRJdGVtcyA6ICcnfVxuXHRcdFx0XHRcdGNvdW50PXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRDb3VudCA6ICcnfVxuXHRcdFx0XHRcdHRvdGFsPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRUb3RhbCA6ICcnfVxuXHRcdFx0XHRcdHZpc2libGU9eyh0aGlzLnN0YXRlKSA/IHRoaXMuc3RhdGUuY2FydFZpc2libGUgOiAnJ31cblx0XHRcdFx0XHRlbmFibGVkPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRFbmFibGVkIDogJyd9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRHbG9iYWxFdmVudHMucmVzaXplKClcblx0fVxuXG5cdF9vblN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cbn1cbiIsImltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcblxudmFyIEFwcEFjdGlvbnMgPSB7XG4gICAgcGFnZUhhc2hlckNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2VJZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsXG4gICAgICAgICAgICBpdGVtOiBwYWdlSWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgd2luZG93UmVzaXplOiBmdW5jdGlvbih3aW5kb3dXLCB3aW5kb3dIKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSxcbiAgICAgICAgICAgIGl0ZW06IHsgd2luZG93Vzp3aW5kb3dXLCB3aW5kb3dIOndpbmRvd0ggfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IEFydGlzdENvbnN0YW50cyBmcm9tICdBcnRpc3RDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIEFydGlzdEFjdGlvbnMgPSB7XG5cbiAgICByZWNlaXZlQWxsIDogZnVuY3Rpb24oYXJ0aXN0cyl7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FMTF9BUlRJU1RTLFxuICAgICAgICAgICAgaXRlbTogYXJ0aXN0c1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVjZWl2ZSA6IGZ1bmN0aW9uKGFydGlzdCl7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FSVElTVCxcbiAgICAgICAgICAgIGl0ZW06IGFydGlzdFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVjZWl2ZUVycm9yIDogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuRVJST1IsXG4gICAgICAgICAgICBpdGVtOiBlcnJvclxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0QWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IENhcnRDb25zdGFudHMgZnJvbSAnQ2FydENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgJ2ZldGNoJ1xuXG52YXIgQ2FydEFjdGlvbnMgPSB7XG5cblx0Ly8gUmVjZWl2ZSBpbml0YWwgcHJvZHVjdCBkYXRhXG5cdHJlY2VpdmVQcm9kdWN0OiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5SRUNFSVZFX0RBVEEsXG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fSlcblx0fSxcblxuXHQvLyBTZXQgY3VycmVudGx5IHNlbGVjdGVkIHByb2R1Y3QgdmFyaWF0aW9uXG5cdHNlbGVjdFByb2R1Y3Q6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5TRUxFQ1RfUFJPRFVDVCxcblx0XHRcdGRhdGE6IGluZGV4XG5cdFx0fSlcblx0fSxcblxuXHQvLyBBZGQgaXRlbSB0byBjYXJ0XG5cdGFkZFRvQ2FydDogZnVuY3Rpb24ocHJpbnRJZCwgdXBkYXRlKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX0FERCxcblx0XHRcdHByaW50SWQ6IHByaW50SWQsXG5cdFx0XHR1cGRhdGU6IHVwZGF0ZVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5cdHJlbW92ZUZyb21DYXJ0OiBmdW5jdGlvbihpbmRleCkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9SRU1PVkUsXG5cdFx0XHRpbmRleDogaW5kZXhcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFVwZGF0ZSBjYXJ0IHZpc2liaWxpdHkgc3RhdHVzXG5cdHVwZGF0ZUNhcnRWaXNpYmxlOiBmdW5jdGlvbihjYXJ0VmlzaWJsZSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9WSVNJQkxFLFxuXHRcdFx0Y2FydFZpc2libGU6IGNhcnRWaXNpYmxlXG5cdFx0fSlcblx0fSxcblxuXHQvLyBVcGRhdGUgY2FydCBlbmFibGVkIHN0YXR1c1xuXHR1cGRhdGVDYXJ0RW5hYmxlZDogZnVuY3Rpb24oY2FydEVuYWJsZWQpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfRU5BQkxFRCxcblx0XHRcdGNhcnRFbmFibGVkOiBjYXJ0RW5hYmxlZFxuXHRcdH0pXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0QWN0aW9uc1xuXG5cblx0ICBcbiIsImltcG9ydCBQcmludENvbnN0YW50cyBmcm9tICdQcmludENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgJ2ZldGNoJ1xuXG52YXIgUHJpbnRBY3Rpb25zID0ge1xuXG5cdHJlY2VpdmVBbGwgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX1BSSU5UUyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVGb3JTYWxlIDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UU19GT1JTQUxFLFxuXHRcdFx0aXRlbTogcHJpbnRzXG5cdFx0fSk7XG5cdH0sXG5cblx0cmVjZWl2ZVNsaWRlc2hvdyA6IGZ1bmN0aW9uKHByaW50cyl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XLFxuXHRcdFx0aXRlbTogcHJpbnRzXG5cdFx0fSk7XG5cdH0sXG5cblx0cmVjZWl2ZUZyb21BcnRpc3QgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQVJUSVNUX1BSSU5UUyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmUgOiBmdW5jdGlvbihwcmludCl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVCxcblx0XHRcdGl0ZW06IHByaW50XG5cdFx0fSk7XG5cdH0sXG5cblx0cmVjZWl2ZUVycm9yIDogZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLkVSUk9SLFxuXHRcdFx0aXRlbTogZXJyb3Jcblx0XHR9KTtcblx0fSxcblxuXHRzZXRQcmludFpvb20gOiBmdW5jdGlvbihpZCl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuWk9PTSxcblx0XHRcdGl0ZW06IGlkXG5cdFx0fSk7XHRcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW50QWN0aW9uc1xuXG5cblx0ICBcbiIsImltcG9ydCBBcnRpc3RBY3Rpb25zIGZyb20gJ0FydGlzdEFjdGlvbnMnXG5pbXBvcnQgJ2ZldGNoJ1xubGV0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRnZXRBbGwgOiBmdW5jdGlvbigpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL2FydGlzdHMnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdEFydGlzdEFjdGlvbnMucmVjZWl2ZUFsbChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRCeVNsdWcgOiBmdW5jdGlvbihzbHVnKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9hcnRpc3QvJyArIHNsdWcpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0QXJ0aXN0QWN0aW9ucy5yZWNlaXZlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9XG5cbn07IiwiaW1wb3J0IENhcnRBY3Rpb25zIGZyb20gJ0NhcnRBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0cGF5IDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goJ2h0dHBzOi8vc2VjdXJlLXRlc3QuYmUyYmlsbC5jb20vZnJvbnQvZm9ybS9wcm9jZXNzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHQvLyBoZWFkZXJzOiB7XG5cdFx0XHRcdC8vICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdC8vIH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdC8vICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG5cdFx0XHRcdE9SREVSSUQ6ICcwMTIzNDU2Nzg5Jyxcblx0XHRcdFx0SURFTlRJRklFUjogJ0NPTlZPWScsXG5cdFx0XHRcdFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9LFxuXG5cdGdlbmVyYXRlUGF5QnV0dG9uIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goJy4vcGhwL2hlbGxvLnBocCcpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnRleHQoKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihib2R5KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGJvZHkpXG5cdFx0XHRcdC8vIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYm9keVxuXHRcdFx0fSlcblx0fVxuXG59OyIsImltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlQWxsKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldEZvclNhbGUgOiBmdW5jdGlvbigpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy9mb3JzYWxlJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUZvclNhbGUoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0U2xpZGVzaG93IDogZnVuY3Rpb24oYXJ0aXN0LCBpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzLycgKyBhcnRpc3QgKyAnL3NsaWRlc2hvdy8nICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0UHJpbnRBY3Rpb25zLnJlY2VpdmVTbGlkZXNob3coanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlBcnRpc3QgOiBmdW5jdGlvbihhcnRpc3QpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy8nICsgYXJ0aXN0KVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlRnJvbUFydGlzdChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRPbmUgOiBmdW5jdGlvbihpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnQvJyArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdG9yZGVyIDogZnVuY3Rpb24oaWQsIHNlcmlhbCkge1xuXHRcdGNvbnNvbGUubG9nKHNlcmlhbClcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50LycgKyBpZCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdzZXJpYWwnIDogc2VyaWFsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblx0Y3JlYXRlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdwcmludCcgOiBwcmludFxuXHRcdFx0fSlcblx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoYXNoOiB1bmRlZmluZWRcblx0XHR9XG5cblx0XHQvLyBjb25zdFxuXHRcdHRoaXMuQ0FSVF9ERUxBWSA9IDIwMDBcblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZCA9IHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZClcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0ZG9tKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0X19jb250ZW50Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpKVxuXHRcdGRvbSgnLmNhcnRfX2NvdW50Jykub24oJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUNvdW50RW50ZXIuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0Jykub24oJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcykpXG5cdFx0ZG9tKCcuY2FydCcpLm9uKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVMZWF2ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBpdGVtTGFiZWwgPSAodGhpcy5wcm9wcy5jb3VudCA+IDEpID8gJ2l0ZW1zJyA6ICdpdGVtJ1xuXHRcdGxldCBjbGFzc2VzID0gKHRoaXMucHJvcHMuZW5hYmxlZCA/ICdjYXJ0LS1lbmFibGVkICcgOiAnICcpICsgKHRoaXMucHJvcHMudmlzaWJsZSAmJiB0aGlzLnN0YXRlLmhhc2ggPT09ICdzaG9wJyA/ICdjYXJ0LS12aXNpYmxlJyA6ICcnKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnY2FydCAnICsgY2xhc3Nlc30gcmVmPSdjYXJ0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvdW50Jz5DYXJ0IOKAlDxzcGFuPnt0aGlzLnByb3BzLmNvdW50fTwvc3Bhbj4ge2l0ZW1MYWJlbH08L2Rpdj5cblx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMuY291bnQgPiAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29udGVudCc+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nY2FydF9fcHJvZHVjdHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMucHJvZHVjdHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByb2R1Y3QgPSB0aGF0LnByb3BzLnByb2R1Y3RzW2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdjYXJ0X19wcm9kdWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fYXJ0aXN0Jz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2RldGFpbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaXR5Jz57cHJvZHVjdC5jaXR5fTwvZGl2PiwgPGRpdiBjbGFzc05hbWU9J2NhcnRfX3llYXInPntwcm9kdWN0LnllYXJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcXVhbnRpdHknPlF1YW50aXR5OiB7cHJvZHVjdC5xdWFudGl0eX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3NlcmlhbCc+U2VyaWFsIDxzcGFuIGNsYXNzTmFtZT0nY2FydF9fbnVtYmVyJz57cHJvZHVjdC5zZXJpYWx9L3twcm9kdWN0LmNvcGllc308L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19wcmljZSc+e3Byb2R1Y3QucHJpY2V9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaW50Jz48aW1nIGNsYXNzTmFtZT0nY2FydF9faW1hZ2UnIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytwcm9kdWN0LmZpbGUrJ19taW4uanBnJ30+PC9pbWc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19yZW1vdmUgYnV0dG9uIGJ1dHRvbi0tbGVmdCBidXR0b24tLXNtYWxsJyBvbkNsaWNrPXt0aGF0LnJlbW92ZUl0ZW0uYmluZCh0aGF0LCBpbmRleCl9PlJlbW92ZSBpdGVtPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19zdWJ0b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5TdWJ0b3RhbDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnByb3BzLnRvdGFsfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY2hlY2tvdXQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIy9wYXltZW50JyBjbGFzc05hbWU9J2NhcnRfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1jZW50ZXIgYnV0dG9uLS1zbWFsbCc+Q2hlY2sgb3V0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19lbXB0eSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRZb3UgaGF2ZSBubyBpdGVtcyBpbiB5b3VyIGNhcnQuXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKX1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZCghdGhpcy5wcm9wcy5lbmFibGVkKVxuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnByb3BzLmVuYWJsZWQgPSB0cnVlXG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQodGhpcy5wcm9wcy5lbmFibGVkKVxuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZW5hYmxlZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5lbmFibGVkID0gZmFsc2Vcblx0XHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRoaXMucHJvcHMuZW5hYmxlZClcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVJdGVtKGluZGV4KSB7XG5cdFx0Q2FydEFjdGlvbnMucmVtb3ZlRnJvbUNhcnQoaW5kZXgpXG5cdH1cblxuXHRoYW5kbGVDbGlja091dHNpZGUoZSkge1xuXHRcdGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19yZW1vdmUnKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19idXR0b24nKSkge1xuXHRcdFx0aWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19jb3VudCcpKSB0aGlzLnRvZ2dsZSgpXG5cdFx0XHRlbHNlIHRoaXMuY2xvc2UoKVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNsaWNrSW5zaWRlKGUpIHtcblx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fcmVtb3ZlJykpIGUuc3RvcFByb3BhZ2F0aW9uKClcblx0fVxuXG5cdGhhbmRsZUNvdW50RW50ZXIoZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQ291bnRkb3duKVxuXHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSB1bmRlZmluZWRcblx0XHR0aGlzLm9wZW4oKVxuXHR9XG5cblx0aGFuZGxlRW50ZXIoZSkge1xuXHRcdGlmICh0aGlzLmNsb3NlQ291bnRkb3duKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jbG9zZUNvdW50ZG93bilcblx0XHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSB1bmRlZmluZWRcblx0XHRcdHRoaXMub3BlbigpXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlTGVhdmUoZSkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VDb3VudGRvd24pXG5cdFx0XHR0aGlzLmNsb3NlQ291bnRkb3duID0gdW5kZWZpbmVkXG5cdFx0fSwgdGhpcy5DQVJUX0RFTEFZKVxuXHR9XG5cblx0X2RpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGhhc2g6IEFwcFN0b3JlLmhhc2goKVxuXHRcdH0pXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnQmFzZUNvbXBvbmVudCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcm9udENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZUJpbmRlZCA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGFzaDogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZUJpbmRlZClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgbWVudURhdGEgPSBBcHBTdG9yZS5tZW51Q29udGVudCgpXG5cdFx0bGV0IG1lbnVJdGVtcyA9IG1lbnVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRsZXQgcGF0aFVybCA9ICcjJyArIGl0ZW0udXJsXG5cdFx0XHRsZXQgY2xhc3NlcyA9IChpdGVtLmlkID09PSB0aGlzLnN0YXRlLmhhc2gpIHx8IChpdGVtLmlkID09PSB0aGlzLnN0YXRlLmhhc2grJ3MnKSA/ICdidXR0b24tLWVuYWJsZWQnIDogJydcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17J2hlYWRlcl9faXRlbSAnICsgY2xhc3Nlc30ga2V5PXtpbmRleH0+PGEgaHJlZj17cGF0aFVybH0+PHAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uLS1zbWFsbCc+e2l0ZW0ubmFtZX08L3A+PC9hPjwvbGk+XG5cdFx0XHQpXG5cdFx0fSkucmV2ZXJzZSgpXG5cdFx0bGV0IGZvb3Rlck1lbnVEYXRhID0gQXBwU3RvcmUuZm9vdGVyTWVudUNvbnRlbnQoKVxuXHRcdGxldCBmb290ZXJNZW51SXRlbXMgPSBmb290ZXJNZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0bGV0IHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0bGV0IGNsYXNzZXMgPSAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKSB8fCAoaXRlbS5pZCA9PT0gdGhpcy5zdGF0ZS5oYXNoKydzJykgPyAnYnV0dG9uLS1lbmFibGVkJyA6ICcnXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9eydidXR0b24gYnV0dG9uLS1yaWdodCBidXR0b24tLXNtYWxsICcgKyBjbGFzc2VzfT48YSBocmVmPXtwYXRoVXJsfT57aXRlbS5uYW1lfTwvYT48L2xpPlxuXHRcdFx0KVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nZnJvbnRDb250YWluZXInIGNsYXNzTmFtZT0nZnJvbnQtY29udGFpbmVyJyByZWY9J2Zyb250LWNvbnRhaW5lcic+XG5cdFx0XHRcdDxoZWFkZXIgaWQ9J2hlYWRlcicgY2xhc3NOYW1lPSdoZWFkZXInPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2hlYWRlcl9fdGl0bGUnPjxhIGhyZWY9JyMvJz5FbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3PGRpdiBjbGFzc05hbWU9J2hlYWRlcl9fc3VidGl0bGUnPkZlbGxvd3NoaXA8L2Rpdj48L2E+PC9oMT5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0naGVhZGVyX19tZW51Jz5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2hlYWRlcl9fbGlzdCc+XG5cdFx0XHRcdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PGZvb3RlciBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J2Zvb3Rlcic+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e2Zvb3Rlck1lbnVJdGVtc31cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGhhc2g6IEFwcFN0b3JlLmhhc2goKVxuXHRcdH0pXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJ0Jhc2VQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRzdXBlci5zZXR1cEFuaW1hdGlvbnMoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IEZlbGxvd3NoaXAgZnJvbSAnRmVsbG93c2hpcCdcbmltcG9ydCBGcmllbmRzIGZyb20gJ0ZyaWVuZHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnUHJvamVjdHMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICdQcm9qZWN0J1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnR2FsbGVyeSdcbmltcG9ydCBTaG9wIGZyb20gJ1Nob3AnXG5pbXBvcnQgUHJpbnQgZnJvbSAnUHJpbnQnXG5pbXBvcnQgTmV3cyBmcm9tICdOZXdzJ1xuaW1wb3J0IFBheW1lbnQgZnJvbSAnUGF5bWVudCdcbmltcG9ydCBDb250YWN0IGZyb20gJ0NvbnRhY3QnXG5pbXBvcnQgTGVnYWwgZnJvbSAnTGVnYWwnXG5pbXBvcnQgUHJpdmFjeSBmcm9tICdQcml2YWN5J1xuaW1wb3J0IE5vdGZvdW5kIGZyb20gJ05vdGZvdW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlc0NvbnRhaW5lciBleHRlbmRzIEJhc2VQYWdlciB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2UgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHRsZXQgaGFzaCA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0XHRsZXQgdHlwZSA9IHVuZGVmaW5lZFxuXHRcdGxldCBpZCA9IHVuZGVmaW5lZFxuXG5cdFx0c3dpdGNoKGhhc2gucGFyZW50KSB7XG5cdFx0XHRjYXNlICcnOlxuXHRcdFx0XHR0eXBlID0gSG9tZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZmVsbG93c2hpcCc6XG5cdFx0XHRcdHR5cGUgPSBGZWxsb3dzaGlwXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmcmllbmRzJzpcblx0XHRcdFx0dHlwZSA9IEZyaWVuZHNcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Byb2plY3RzJzpcblx0XHRcdFx0dHlwZSA9IFByb2plY3RzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwcm9qZWN0Jzpcblx0XHRcdFx0aWYgKGhhc2gucGFydHMubGVuZ3RoID4gMikge1xuXHRcdFx0XHRcdGlmIChoYXNoLnBhcnRzWzJdID09PSAnY29udGFjdC1zaGVldCcpIHtcblx0XHRcdFx0XHRcdHR5cGUgPSBHYWxsZXJ5XG5cdFx0XHRcdFx0XHRpZCA9IGhhc2gudGFyZ2V0SWRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gem9vbSBzdXIgdW5lIHBob3RvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSBQcm9qZWN0XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Nob3AnOlxuXHRcdFx0XHRpZiAoaGFzaC5wYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0dHlwZSA9IFByaW50XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9IFNob3Bcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbmV3cyc6XG5cdFx0XHRcdHR5cGUgPSBOZXdzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwYXltZW50Jzpcblx0XHRcdFx0dHlwZSA9IFBheW1lbnRcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnRhY3QnOlxuXHRcdFx0XHR0eXBlID0gQ29udGFjdFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbGVnYWwnOlxuXHRcdFx0XHR0eXBlID0gTGVnYWxcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3ByaXZhY3knOlxuXHRcdFx0XHR0eXBlID0gUHJpdmFjeVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9IE5vdGZvdW5kXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXBOZXdDb21wb25lbnQoaGFzaC5wYXJlbnQsIHR5cGUsIGlkKVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2NvbnRhY3RQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJ3Njcm9sbFRvJ1xubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWxsb3dzaGlwIGV4dGVuZHMgUGFnZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2aWV3OiAnYmlvZ3JhcGh5J1xuXHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX2dvVG9CaW9ncmFwaHlCaW5kZWQgPSB0aGlzLl9nb1RvQmlvZ3JhcGh5LmJpbmQodGhpcylcblx0XHR0aGlzLl90b2dnbGVWaWRlb0JpbmRlZCA9IHRoaXMuX3RvZ2dsZVZpZGVvLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5QQVJBTExBWF9NQVJHRSA9IDMwXG5cdFx0dGhpcy5QQVJBTExBWF9EVVJBVElPTiA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFxuXHRcdC8vIHZhcnNcblx0XHR0aGlzLnZpZGVvUGxheWVkID0gZmFsc2Vcblx0XHR0aGlzLnNjcm9sbEluZGV4ID0gMFxuXHRcdHRoaXMuc2Nyb2xsT2sgPSBmYWxzZVxuXHRcdHRoaXMudHJhbnNmb3JtID0gVXRpbHMuR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKVxuXHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblxuXHRcdHRoaXMuX2xpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxpbWl0Jylcblx0XHR0aGlzLl9hcnRpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpXG5cdFx0dGhpcy5fdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fdmlkZW8nKVxuXHRcdHRoaXMuYXJ0aXN0T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpLm9mZnNldFRvcFxuXHRcdHRoaXMuX2VsbGlvdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fZWxsaW90dCcpXG5cdFx0XG5cdFx0dGhpcy5fcmFmKClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgZmVsbG93c2hpcERhdGEgPSBBcHBTdG9yZS5mZWxsb3dzaGlwQ29udGVudCgpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tZmVsbG93c2hpcCcgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSc+PGEgaHJlZj0nIy9mcmllbmRzJz48cCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLXNtYWxsJz5GcmllbmRzIG9mIHRoZSBmZWxsb3dzaGlwPC9wPjwvYT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZlbGxvd3NoaXAnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyBmZWxsb3dzaGlwX192aWRlbyc+XG5cdFx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9J3ZpZGVvX19maWxlJyBzcmM9Jy4vYXNzZXRzL3ZpZGVvcy9iZy1ob21lLndlYm0nPjwvdmlkZW8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX3ByZXNlbnRhdGlvbic+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLWJpZyBwYXJhZ3JhcGgtLWNlbnRlcicgZGF0YS1lYXNlPScuMCc+QSBmZWxsb3dzaGlwIGlzIGEgY29tbXVuaW9uIG9mIHBlb3BsZSBzaGFyaW5nIGEgY29tbW9uIHBhc3Npb24uPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCBwYXJhZ3JhcGgtLWNlbnRlcic+SW4gQ3ViYSBnZW5lcmF0aW9ucyBvZiBhc3BpcmluZyBkaXN0aWxsZXJzIGhhdmUgZm9sbG93ZWQgdGhlIGV4YW1wbGUgb2YgYSBzZWFzb25lZCBydW0gbWFzdGVyIGFuZCBzbyBsZWFybnQgdG8gZGV2ZWxvcCBhbmQgcGVyZmVjdCB0aGVpciBjcmFmdC4gVGhlIEVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBjb21iaW5lcyB0aGlzIHJpY2ggaGlzdG9yeSBhbmQgdHJhZGl0aW9uIHdpdGggYSBwYXNzaW9uIGZvciBkb2N1bWVudGFyeSBwaG90b2dyYXBoeS48L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLW1lZGl1bSBwYXJhZ3JhcGgtLWNlbnRlcic+TWFzdGVyIHBob3RvZ3JhcGhlciBFbGxpb3R0IEVyd2l0dOKAmXMgbGlmZWxvbmcgbG92ZSBvZiBwaG90b2dyYXBoeSBhbmQgQ3ViYSBoYXMgYnJvdWdodCBoaW0gYmFjayB0byBDdWJhIGFnYWluIGFmdGVyIDUxIHllYXJzIOKAkyB0aGlzIHRpbWUgdG8gaW5pdGlhdGUgdGhlIGZlbGxvd3NoaXAgd2l0aCBIYXZhbmEgQ2x1YiA3LjwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX3JvdyBqcy1saW1pdCc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbiBwYXJhZ3JhcGhfX2NvbHVtbi0tbGVmdCc+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2VsbGlvdHQnIHNyYz0nLi4vYXNzZXRzL2ltYWdlcy9lbGxpb3R0LWVyd2l0dC5qcGcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkEgbmV3IGJvZHkgb2Ygd29yayB3aWxsIGNyZWF0ZSBhIHN0YXJ0aW5nIHBvaW50IGZvciBhIG5ldyBnZW5lcmF0aW9uIG9mIHBob3RvZ3JhcGhlcnMgdG8gcmVsYXRlIHRvLCB0byBmdXJ0aGVyIGRldmVsb3AgdGhlaXIgY3JhZnQgYW5kIGhlbHAgKHJlKWRlZmluZSB0aGUgZ2VucmUgaW4gdGhlIDIxc3QgY2VudHVyeS4gIEluc3BpcmVkIGJ5IEVsbGlvdHQgRXJ3aXR0LCBleGNlcHRpb25hbCB0YWxlbnRzIHNlbGVjdGVkIGZvciB0aGUgZmVsbG93c2hpcCB3aWxsIGVhY2ggY3JlYXRlIGEgdW5pcXVlIGJvZHkgb2Ygd29yaywgY2FwdHVyaW5nIHRoZSBzb3VsIG9mIEN1YmEgd2hpY2ggd2lsbCBiZSBzaGFyZWQgd2l0aCBwaG90b2dyYXBoeSBsb3ZlcnMgd29ybGR3aWRlLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tbWVkaXVtIHBhcmFncmFwaC0tY2VudGVyJz5JbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeS48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkluIGFkZGl0aW9uIHRvIHRoZSBwcm9jZWVkcyBmcm9tIHByaW50IHNhbGVzIEhhdmFuYSBDbHViIDcgd2lsbCBmdW5kIGEgc2ltaWxhciBhbW91bnQgdG8gZ2l2ZSBtb3JlIHBob3RvZ3JhcGhlcnMgdGhlIGNoYW5jZSB0byB0ZWxsIHRoZSBzdG9yeSBvZiBDdWJhLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbiBwYXJhZ3JhcGhfX2NvbHVtbi0tcmlnaHQnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19lbGxpb3R0JyBzcmM9Jy4uL2Fzc2V0cy9pbWFnZXMvcHJpbnRzL0VSRTIwMTUwMDJXMDAwMzMtMzZBX21lZGl1bS5qcGcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsIHBhcmFncmFwaC0tY2VudGVyJz5UaGUgZm9sbG93aW5nIGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVycyB3aWxsIGJlIHNlbGVjdGVkIGJ5IGEgY29tbWl0dGVlIGhlYWRlZCBieSBFbGxpb3R0IEVyd2l0dCBjb21wcmlzaW5nIG9mIEN1YmFuIGFuZCBpbnRlcm5hdGlvbmFsIHBob3RvZ3JhcGh5IHByb2Zlc3Npb25hbHMgZW5zdXJpbmcgdGhlIG5leHQgZmVsbG93IHdpbGwgY29udGludWUgdGhlIGxlZ2FjeSBvZiBjdWJhIGFuZCB0aGUgaHVtYW4gY29uZGl0aW9uIGluIEN1YmEgdGhyb3VnaCBkb2N1bWVudGFyeSBwaG90b2dyYXBoeSBhbmQgZ2l2ZSB1cyB0aGVpciBvd24gdmlzaW9uLjwvcD5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rpc2NvdmVyIGZlbGxvd3NoaXBfX2Rpc2NvdmVyJyBvbkNsaWNrPXt0aGlzLl9nb1RvQmlvZ3JhcGh5QmluZGVkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19zY3JvbGwgYnV0dG9uIGJ1dHRvbi0tY2VudGVyIGJ1dHRvbi0tc21hbGwnPkRpc2NvdmVyIEVsbGlvdHQgRXJ3aXR0J3MgYmlvZ3JhcGh5PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0Jz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0bmFtZSBwYXJhZ3JhcGggcGFyYWdyYXBoLS1iaWcgcGFyYWdyYXBoLS1jZW50ZXInIGRhdGEtZWFzZT0nLjAnPkVMTElPVFQgRVJXSVRU4oCZUyBCSU9HUkFQSFk8L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkVsbGlvdHQgRXJ3aXR0IGlzIG9uZSBvZiB0aGUgd29ybGTigJlzIG1vc3QgcG9wdWxhciBhbmQgYWRtaXJlZCBwaG90b2dyYXBoZXJzLiBBIHZpc3VhbCBwb2V0IGFuZCBodW1vcmlzdCBvZiBldmVyeWRheSBsaWZlLCBoZSBoYXMgY3JlYXRlZCBzb21lIG9mIHRoZSBtb3N0IG1lbW9yYWJsZSBpbWFnZXMgb2Ygb3VyIHRpbWUsIGZyb20gaGlzIG9ic2VydmF0aW9ucyBvZiBkYWlseSBsaWZlIGF0IHN0cmVldCBsZXZlbCwgdG8gcG9ydHJhaXRzIG9mIHRoZSBpY29uaWMgcGVyc29uYWxpdGllcyBpbmNsdWRpbmcgTWFyaWx5biBNb25yb2Ugb24gdGhlIHNldCBvZiB0aGUgZmlsbSBUaGUgTWlzZml0cyBhbmQgVHJ1bWFuIENhcG90ZeKAmXMgZXBpYyAxOTY2IEJsYWNrIGFuZCBXaGl0ZSBCYWxsIGluIE5ldyBZb3JrIENpdHkuIEhlIGhhcyBwaG90b2dyYXBoZWQgS2hydXNoY2hldiBhbmQgTml4b24gYXJndWluZyBpbiBNb3Njb3csIEZpZGVsIENhc3RybyBhbmQgQ2hlIEd1ZXZhcmEgaW4gSGF2YW5hIGFuZCBQcmVzaWRlbnQgSkZLIGluIHRoZSBPdmFsIG9mZmljZS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVZpZGVvQmluZGVkfT5cblx0XHRcdFx0XHRcdFx0XHQ8dmlkZW8gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19pbnRlcnZpZXcnIHNyYz0nLi9hc3NldHMvdmlkZW9zL2JnLWhvbWUud2VibSc+PC92aWRlbz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX3BsYXkgZW5hYmxlZCc+cGxheSB2aWRlbzwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwgcGFyYWdyYXBoLS1jZW50ZXInPkJvcm4gaW4gUGFyaXMgaW4gMTkyOCB0byBSdXNzaWFuIHBhcmVudHMsIEVyd2l0dCBtb3ZlZCB0byB0aGUgVVMgd2l0aCBoaXMgZmFtaWx5IGluIDE5MzkgYW5kIGl0IHdhcyB0aGVyZSB0aGF0IGhlIG1ldCBFZHdhcmQgU3RlaWNoZW4gYW5kIFJveSBTdHJ5a2VyLiBSZWNydWl0ZWQgdG8gTWFnbnVtIFBob3RvcyBieSBSb2JlcnQgQ2FwYSBpbiAxOTUzIEVyd2l0dCBoYXMgYmVlbiBhIG1lbWJlciBvZiB0aGUgcHJlc3RpZ2lvdXMgYWdlbmN5IGV2ZXIgc2luY2UgYW5kIGhhcyBzZXJ2ZWQgc2V2ZXJhbCB0ZXJtcyBhcyBpdHMgcHJlc2lkZW50LjwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGgnPjxhIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLWNlbnRlciBidXR0b24tLXNtYWxsJyBocmVmPSdodHRwOi8vd3d3LmVsbGlvdHRlcndpdHQuY29tJyB0YXJnZXQ9J19ibGFuayc+RWxsaW90dCBFcndpdHQgb2ZmaWNpYWwgd2Vic2l0ZTwvYT48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPlRvIGRhdGUgRXJ3aXR0IGhhcyBwcm9kdWNlZCBtb3JlIHRoYW4gMjUgcGhvdG9ncmFwaHkgYm9va3MgaW5jbHVkaW5nIEVhc3Rlcm4gRXVyb3BlICgxOTY1KSwgVGhlIFByaXZhdGUgRXhwZXJpZW5jZSAoMTk3NCksIFBlcnNvbmFsIEV4cG9zdXJlcyAoMTk4OCksIFRvIHRoZSBEb2dzICgxOTkyKSwgYW5kIFBlcnNvbmFsIEJlc3QgKDIwMTApLiBIaXMgcGhvdG9ncmFwaHMgaGF2ZSBiZWVuIGZlYXR1cmVkIGluIHNvbG8gc2hvd3MgYWxsIG92ZXIgdGhlIHdvcmxkLCBpbmNsdWRpbmcgYXTCoHRoZSBJQ1AgYW5kIFRoZSBNdXNldW0gb2YgTW9kZXJuIEFydCwgTmV3IFlvcms7IFRoZSBBcnQgSW5zdGl0dXRlIG9mIENoaWNhZ287wqBUaGUgQmFyYmljYW4sIExvbmRvbiwgYW5kIFRoZSBSZWluYSBTb2ZpYSBNdXNldW0sIE1hZHJpZC4gRXJ3aXR0IGxpdmVzIGFuZCB3b3JrcyBpbiBOZXcgWW9yayBDaXR5IGFuZCBsaWtlcyBjaGlsZHJlbiBhbmQgZG9ncy48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPScjL3Byb2plY3QvZWxsaW90dC1lcndpdHQnIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLWNlbnRlciBidXR0b24tLXNtYWxsJz5EaXNjb3ZlciBoaXMgcHJvamVjdDwvYT5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0X3JhZigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGxJbmRleCAlIDMpIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXgrK1xuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsT2spIHtcblx0XHRcdC8vIGxldCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0XHR0aGlzLl9oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHNjcm9sbCh0aGlzLl9yYWZCaW5kZWQpO1xuXHR9XG5cblx0X2hhbmRsZVNjcm9sbCgpIHtcblx0XHRpZiAodGhpcy5fdmlkZW8gJiYgdGhpcy5fbGltaXQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHRcdHRoaXMudmlkZW9PcGFjaXR5ID0gVXRpbHMuSW50ZXJ2YWwoMSAtICh0aGlzLnNjcm9sbFRvcCAvICh0aGlzLl9saW1pdC5vZmZzZXRUb3AgKyAxNjAgLSB3aW5kb3cuaW5uZXJIZWlnaHQpKSwgMCwgMSlcblx0XHRcdHRoaXMuX3ZpZGVvLnN0eWxlLm9wYWNpdHkgPSB0aGlzLnZpZGVvT3BhY2l0eVxuXHRcdH1cblxuXHRcdF8oZG9tKCcucGFyYWdyYXBoJykpLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0dGhpcy5lYXNlID0gZWwuZGF0YXNldC5lYXNlIHx8IDAuM1xuXHRcdFx0dGhpcy5saW1pdE9mZnNldCA9IG9mZnNldChlbClcblx0XHRcdC8vIHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuUEFSQUxMQVhfTUFSR0Vcblx0XHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0dGhpcy5jb2VmID0gVXRpbHMuSW50ZXJ2YWwodGhpcy5saW1pdFRvcCAvICgtdGhpcy5QQVJBTExBWF9EVVJBVElPTiAtIHRoaXMubGltaXRPZmZzZXQuaGVpZ2h0KSwgMCwgMSlcblx0XHRcdHRoaXMuZWxZID0gKDEtdGhpcy5jb2VmKSAqIDIwMCAqIHRoaXMuZWFzZVxuXHRcdFx0Ly8gZWwuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0XHRlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMuZWxZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXG5cdF90b2dnbGVWaWRlbygpIHtcblx0XHRpZiAodGhpcy52aWRlb1BsYXllZCkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2ludGVydmlldycpLnBhdXNlKClcblx0XHRcdGRvbSgnLmZlbGxvd3NoaXBfX3BsYXknKS5hZGRDbGFzcygnZW5hYmxlZCcpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19pbnRlcnZpZXcnKS5wbGF5KClcblx0XHRcdGRvbSgnLmZlbGxvd3NoaXBfX3BsYXknKS5yZW1vdmVDbGFzcygnZW5hYmxlZCcpXG5cdFx0fVxuXHRcdHRoaXMudmlkZW9QbGF5ZWQgPSAhdGhpcy52aWRlb1BsYXllZFxuXHR9XG5cblx0X2dvVG9CaW9ncmFwaHkoKSB7XG5cdFx0dGhpcy5hcnRpc3RPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fYXJ0aXN0Jykub2Zmc2V0VG9wXG5cdFx0VHdlZW5NYXgudG8od2luZG93LCAwLjYsIHtzY3JvbGxUbzp7eTogKHRoaXMuYXJ0aXN0T2Zmc2V0VG9wIC0gNDApfSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdjb250YWN0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHRGcmllbmRzIG9mIHRoZSBmZWxsb3dzaGlwXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5sZXQgTWFzb25yeSA9IHJlcXVpcmUoJ21hc29ucnktbGF5b3V0JylcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBwcm9wc1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdHByaW50czogW10sXG5cdFx0XHRsb2FkZWRQcmludHM6IFtdXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZVxuXHRcdHRoaXMubkltYWdlTG9hZGVkID0gMFxuXHRcdHRoaXMucHJpbnRzID0gW11cblx0XHR0aGlzLnNjcm9sbEluZGV4ID0gMFxuXHRcdHRoaXMuc2Nyb2xsT2sgPSBmYWxzZVxuXHRcdHRoaXMudHJhbnNmb3JtID0gVXRpbHMuR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0UHJpbnRBcGkuZ2V0QnlBcnRpc3QodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRcblx0XHR0aGlzLl9yYWYoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsUmFmKVxuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcdFxuXHR9XG5cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlT3V0IH0pXG5cblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tZ2FsbGVyeScgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSc+PGEgaHJlZj17JyMvcHJvamVjdC8nK3RoaXMucHJvcHMuaWRTZWN0aW9ufT48cCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLXNtYWxsJz5CYWNrIHRvIGdhbGxlcnk8L3A+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeSc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUubG9hZGVkUHJpbnRzKS5tYXAoKHllYXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19ncmlkJyBrZXk9e3llYXIrJ18nK2l9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X193aWR0aCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dhbGxlcnlfX2l0ZW0gZ2FsbGVyeV9faXRlbS0tbGFyZ2UgZ2FsbGVyeV9faXRlbS0tZGlzYWJsZWQnPnt5ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnN0YXRlLmxvYWRlZFByaW50c1t5ZWFyXSkubWFwKChwcmludElkLCBpKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5sb2FkZWRQcmludHNbeWVhcl1bcHJpbnRJZF1cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzcmMgPSAnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3ByaW50LmZpbGUrJ19taW4uanBnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLScrcHJpbnQuc2l6ZSsnIGdhbGxlcnlfX2l0ZW0tLScrcmFuZG9tfSBkYXRhLXJhbmRvbT17cmFuZG9tfSBrZXk9e2l9IG9uQ2xpY2s9e3RoYXQuem9vbVByaW50LmJpbmQodGhhdCwgcHJpbnRJZCl9PjxpbWcgY2xhc3NOYW1lPSdnYWxsZXJ5X19pbWFnZScgc3JjPXtzcmN9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0Xyhkb20oJy5nYWxsZXJ5X19pdGVtJykpLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0dGhpcy5saW1pdE9mZnNldCA9IG9mZnNldChlbClcblx0XHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdFx0dGhpcy5lbE9wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCh0aGlzLmxpbWl0VG9wIC8gKC10aGlzLk9QQUNJVFlfRFVSQVRJT04pLCAwLCAxKVxuXHRcdFx0dGhpcy5lbFkgPSAoMS10aGlzLmVsT3BhY2l0eSkgKiA1MFxuXHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0XHRlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMuZWxZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXHRcdHRoaXMucHJpbnRzRGF0ZSA9IHt9O1xuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgIXRoaXMubG9hZGVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdF8odGhpcy5zdGF0ZS5wcmludHMpLmZvckVhY2goKHByaW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMucHJpbnRzRGF0ZVtwcmludC55ZWFyXSkgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdID0ge31cblx0XHRcdFx0dGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSA9IHByaW50XG5cblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdCwgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSlcblx0XHRcdFx0ZmlsZS5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3ByaW50LmZpbGUrJ19taW4uanBnJ1xuXHRcdFx0fSkudmFsdWUoKTtcblx0XHR9XG5cdH1cblxuXHRvbkltYWdlTG9hZGVkKHByaW50LCBlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrKztcblxuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBwYXRoID0gZS5leHBsaWNpdE9yaWdpbmFsVGFyZ2V0IHx8IGUucGF0aFswXVxuXHRcdGlmIChwYXRoLmhlaWdodCA+PSBwYXRoLndpZHRoKjEuMikgcHJpbnQuc2l6ZSA9ICdzbWFsbCdcblx0XHRlbHNlIHByaW50LnNpemUgPSAnbGFyZ2UnXG5cdFx0XG5cdFx0aWYgKHRoaXMubkltYWdlTG9hZGVkID49IHRoaXMubWF4KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0J2xvYWRlZFByaW50cyc6IHRoaXMucHJpbnRzRGF0ZVxuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRsZXQgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9fZ3JpZCcpO1xuXHRcdFx0XHRfKGdyaWRzKS5mb3JFYWNoKChncmlkKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGlzbyA9IG5ldyBNYXNvbnJ5KGdyaWQsIHtcblx0XHRcdFx0XHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pdGVtJyxcblx0XHRcdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX3dpZHRoJyxcblx0XHRcdFx0XHRcdGd1dHRlcjogMjRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkudmFsdWUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHpvb21QcmludChpZCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdFxuXHRcdFByaW50QWN0aW9ucy5zZXRQcmludFpvb20oaWQpXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsUmFmKVxuXHRcdFxuXHRcdHRoaXMudGxJdGVtc091dCA9IG5ldyBUaW1lbGluZU1heCgpXG5cdFx0dGhpcy50bEl0ZW1zT3V0LnN0YWdnZXJUbyhfLnNodWZmbGUoZG9tKCcuZ2FsbGVyeV9faXRlbScpKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VPdXQgfSwgMC4wMSlcblx0XHR0aGlzLnRsSXRlbXNPdXQuYWRkQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9wcm9qZWN0LycrdGhhdC5wcm9wcy5pZFNlY3Rpb247XG5cdFx0fSwgJy09MC4yJylcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludHM6IFByaW50U3RvcmUuZ2V0QXJ0aXN0UHJpbnRzKClcblx0XHR9LCAoKSA9PiB7XG5cblx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHR0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FudmFzJylcblxuXHRcdGlmICh0aGlzLl9jYW52YXMpIHtcblx0XHRcdHRoaXMuX2NhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFR3ZWVuTWF4LnNldChkb20oJy5mcm9udC1jb250YWluZXInKSwge29wYWNpdHk6IDB9KTtcblx0XHRcdFR3ZWVuTWF4LnNldChkb20oJy5ob21lX19jb250ZW50JyksIHtvcGFjaXR5OiAwfSk7XG5cdFx0XHRUd2Vlbk1heC5zZXQoZG9tKCcuY2FydCcpLCB7b3BhY2l0eTogMH0pO1xuXG5cdFx0XHR0aGlzLnNob3dQYWdlQmluZGVkID0gdGhpcy5zaG93UGFnZS5iaW5kKHRoaXMpXG5cdFx0XHR0aGlzLmluaXRDYW52YXMoKVxuXHRcdFx0dGhpcy5pbml0QW5pbWF0aW9uKClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGhvbWVEYXRhID0gQXBwU3RvcmUuaG9tZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1ob21lJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XG5cdFx0XHRcdFx0PHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPSd2aWRlb19fZmlsZScgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS53ZWJtJz48L3ZpZGVvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWVfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyhob21lRGF0YS5wYXJhZ3JhcGhzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hvbWVfX3BhcmFncmFwaCB0ZXh0IHRleHQtLWJpZycga2V5PXtpbmRleH0+e2hvbWVEYXRhLnBhcmFncmFwaHNbaW5kZXhdfTwvcD5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdFx0XHRcdFx0Ly8gPHAgY2xhc3NOYW1lPSd0ZXh0IHRleHQtLWJpZycgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGhvbWVEYXRhLmNvbnRlbnR9fSAvPlxuXHR9XG5cblx0Ly8gc2V0dXBBbmltYXRpb25zKCkge1xuXHQvLyBcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHQvLyBcdC8vIHRyYW5zaXRpb24gSW5cblx0Ly8gXHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0Ly8gXHQvLyB0cmFuc2l0aW9uIE91dFxuXHQvLyBcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMSwgeyB5OiB3aW5kb3cuaW5uZXJIZWlnaHQsIG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdC8vIFx0Ly8gcmVzZXRcblx0Ly8gXHR0aGlzLnRsSW4ucGF1c2UoMClcblx0Ly8gXHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdC8vIH1cblxuXHRpbml0Q2FudmFzKCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRsZXQgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblx0XHR0aGlzLl9jYW52YXMud2lkdGggPSB2dztcblx0XHR0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdmg7XG5cblx0XHQvLyBiYWNrZ3JvdW5kIGJsYWNrXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5yZWN0KDAsIDAsIHZ3LCB2aCk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y3R4LmZpbGwoKTtcblxuXHRcdC8vIGNyb3AgbG9nb1xuXHRcdGN0eC5mb250ID0gXCI0MDAgNzJweCAnaGM3bW9kZXJuJ1wiO1xuXHRcdGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXHRcdGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLW91dFwiO1xuXHRcdC8vIGN0eC5maWxsVGV4dCgnRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNycsIHZ3LzIsIHZoLzIgLSAxNik7XG5cdFx0Y3R4LmZpbGxUZXh0KCdFTExJT1RUIEVSV0lUVCBIQVZBTkEgQ0xVQiA3JywgdncvMiwgdmgvMiAtIDE2KTtcblx0XHRjdHguZm9udCA9IFwiNDAwIDcycHggJ1N0YW5sZXknXCI7XG5cdFx0Y3R4LmZpbGxUZXh0KCdGZWxsb3dzaGlwJywgdncvMiwgdmgvMiArIDY4KTtcblx0fVxuXG5cdGluaXRBbmltYXRpb24oKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0XG5cdFx0dGhpcy50bEVudHJ5ID0gbmV3IFRpbWVsaW5lTWF4KHtkZWxheTogNCwgb25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0dGhhdC5fY2FudmFzLnJlbW92ZSgpXG5cdFx0fX0pO1xuXHRcdHRoaXMudGxFbnRyeS50byh0aGlzLl9jYW52YXMsIDEsIHtvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXHRcdHRoaXMudGxFbnRyeS50byhkb20oJy5mcm9udC1jb250YWluZXInKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNilcblx0XHR0aGlzLnRsRW50cnkudG8oZG9tKCcuaG9tZV9fY29udGVudCcpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC42KVxuXHRcdHRoaXMudGxFbnRyeS50byhkb20oJy5jYXJ0JyksIDAuNCwge29wYWNpdHk6IDF9LCAwLjYpXG5cdFx0Ly8gVHdlZW5NYXgudG8odGhpcy5fY2FudmFzLCA0LCB7eDogLXZ3LCBlYXNlOiBQb3dlcjIuZWFzZU91dCwgZGVsYXk6IDQsIG9uQ29tcGxldGU6IHRoaXMuc2hvd1BhZ2VCaW5kZWR9KTtcblx0fVxuXHRcblx0c2hvd1BhZ2UoKSB7XG5cdFx0VHdlZW5NYXgudG8oZG9tKCcuZnJvbnQtY29udGFpbmVyJyksIDAuNCwge29wYWNpdHk6IDF9KTtcblx0XHRUd2Vlbk1heC50byhkb20oJy5ob21lX19jb250ZW50JyksIDAuNCwge29wYWNpdHk6IDF9KTtcblx0XHRUd2Vlbk1heC50byhkb20oJy5jYXJ0JyksIDAuNCwge29wYWNpdHk6IDF9KTtcblx0XHR0aGlzLl9jYW52YXMucmVtb3ZlKClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FsIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdsZWdhbFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0e2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3cyBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgc2lkZVxuXHRcdGxldCBuZXdzRGF0YSA9IEFwcFN0b3JlLm5ld3NDb250ZW50KClcblx0XHRsZXQgbmV3c0l0ZW1zID0gbmV3c0RhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdGlmIChpbmRleCAlIDIgPT09IDApIHsgcmV0dXJuIChcblx0XHRcdFx0PGFydGljbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPSduZXdzX19pdGVtIG5ld3NfX2l0ZW0tLXJpZ2h0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fY29udGVudCc+e2l0ZW0uY29udGVudH08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fZGF0ZSc+e2l0ZW0uZGF0ZX08L2Rpdj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0KX0gZWxzZSB7IHJldHVybiAoXG5cdFx0XHRcdDxhcnRpY2xlIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbmV3c19faXRlbSBuZXdzX19pdGVtLS1sZWZ0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fZGF0ZSc+e2l0ZW0uZGF0ZX08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fY29udGVudCc+e2l0ZW0uY29udGVudH08L2Rpdj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0KX1cblx0XHR9KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1uZXdzJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nbmV3cyc+e25ld3NJdGVtc308L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3Rmb3VuZCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nNDA0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8cD5FcnJvciA0MDQg4oCUIFBhZ2Ugbm90IGZvdW5kPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcbmltcG9ydCBDYXJ0QXBpIGZyb20gJ0NhcnRBcGknXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmZ1bmN0aW9uIF9nZXRDYXJ0U3RhdGUoKSB7XG5cdHJldHVybiB7XG5cdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0Y2FydENvdW50OiBDYXJ0U3RvcmUuZ2V0Q2FydENvdW50KCksXG5cdFx0Y2FydFRvdGFsOiBDYXJ0U3RvcmUuZ2V0Q2FydFRvdGFsKClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXltZW50IGV4dGVuZHMgUGFnZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cblx0XHR0aGlzLnN0YXRlID0gX2dldENhcnRTdGF0ZSgpXG5cdH1cblx0XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblxuXHRcdGxldCBoYWNrID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKGZhbHNlKVxuXHRcdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydFZpc2libGUoZmFsc2UpXG5cdFx0XHRjbGVhclRpbWVvdXQoaGFjaylcblx0XHR9LCAwKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRWaXNpYmxlKHRydWUpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcGF5bWVudCcgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudCc+XG5cdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdwYXltZW50X19mb3JtIGZvcm0nPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX3RpdGxlJz5DaGVja291dDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdtYWlsJz5FbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSdtYWlsJyBpZD0nbWFpbCcvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPlNoaXBwaW5nIGFkZHJlc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nZmlyc3RuYW1lJz5GaXJzdCBuYW1lICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdmaXJzdG5hbWUnLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdsYXN0bmFtZSc+TGFzdCBuYW1lICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdsYXN0bmFtZScvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J3Bob25lJz5UZWxlcGhvbmUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RlbCcgaWQ9J3Bob25lJy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nYWRkcmVzcyc+QWRkcmVzcyAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCBmb3JtX19pbnB1dC0tY29tcCcgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3MnLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3NCaXMnLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cgZm9ybV9fcm93LS1oYWxmJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSd6aXAnPlppcC9Qb3N0YWwgY29kZSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nemlwJy8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nY2l0eSc+Q2l0eTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2NpdHknLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdjb3VudHJ5Jz5Db3VudHJ5ICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nY291bnRyeScvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyB0eXBlPSdjaGVja2JveCcgaWQ9J2JpbGxBZGRyZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2JpbGxBZGRyZXNzJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkJpbGwgdG8gdGhlIHNhbWUgYWRkcmVzczwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPlNoaXBwaW5nIG1ldGhvZDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0nc2hpcHBpbmdNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ndXBzU3RhbmRhcmQnLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0ndXBzU3RhbmRhcmQnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+VVBTIFN0YW5kYXJkIC0gRGVsaXZlcnkgd2l0aGluIDMtNSBidXNpbmVzcyBkYXlzLCAxMCDigqw8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0nc2hpcHBpbmdNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ndXBzRXhwcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSd1cHNFeHByZXNzJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPlVQUyBFeHByZXNzIC0gRGVsaXZlcnkgd2l0aGluIDItMyBidXNpbmVzcyBkYXlzLCAyMCDigqw8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0nc2hpcHBpbmdNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0nZnJlZVNoaXBwaW5nJyBkZWZhdWx0Q2hlY2tlZC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2ZyZWVTaGlwcGluZyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5GcmVlIHNoaXBwaW5nIChVUFMgc3RhbmRhcmQpLCAwIOKCrDwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwYXltZW50X19tZXRob2QgZm9ybV9fdGl0bGUnPlBheW1lbnQgbWV0aG9kPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J21hZXN0cm8nIGRlZmF1bHRDaGVja2VkLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdtYWVzdHJvJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvbWFlc3Ryby1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J3Zpc2EnLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSd2aXNhJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvdmlzYS1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J3BheXBhbCcvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3BheXBhbCc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz48aW1nIHNyYz0nLi9hc3NldHMvaW1hZ2VzL3BheXBhbC1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J2FtZXJpY2FuRXhwcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2FtZXJpY2FuRXhwcmVzcyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz48aW1nIHNyYz0nLi9hc3NldHMvaW1hZ2VzL2FtZXJpY2FuLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+T3JkZXIgc3VtbWFyeTwvaDM+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3BheW1lbnRfX3Byb2R1Y3RzIGNhcnRfX3Byb2R1Y3RzJz5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5jYXJ0SXRlbXMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBwcm9kdWN0ID0gdGhhdC5zdGF0ZS5jYXJ0SXRlbXNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0ncGF5bWVudF9fcHJvZHVjdCBjYXJ0X19wcm9kdWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19hcnRpc3QnPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2RldGFpbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY2l0eSc+e3Byb2R1Y3QuY2l0eX08L2Rpdj4sIDxkaXYgY2xhc3NOYW1lPSdjYXJ0X195ZWFyJz57cHJvZHVjdC55ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcXVhbnRpdHknPlF1YW50aXR5OiB7cHJvZHVjdC5xdWFudGl0eX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19zZXJpYWwnPlNlcmlhbCA8c3BhbiBjbGFzc05hbWU9J2NhcnRfX251bWJlcic+e3Byb2R1Y3Quc2VyaWFsfS97cHJvZHVjdC5jb3BpZXN9PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaWNlJz57cHJvZHVjdC5wcmljZX08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpbnQnPjxpbWcgY2xhc3NOYW1lPSdjYXJ0X19pbWFnZScgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3Byb2R1Y3QuZmlsZSsnX21pbi5qcGcnfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19yZW1vdmUgYnV0dG9uIGJ1dHRvbi0tbGVmdCBidXR0b24tLXNtYWxsJyBvbkNsaWNrPXt0aGF0LnJlbW92ZUl0ZW0uYmluZCh0aGF0LCBpbmRleCl9PlJlbW92ZSBpdGVtPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X190b3RhbCBjYXJ0X190b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX3N1YnRvdGFsIGNhcnRfX3N1YnRvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlN1YnRvdGFsOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+e3RoaXMuc3RhdGUuY2FydFRvdGFsfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fdHZhJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPkluY2x1ZGVkIFRWQTo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnN0YXRlLmNhcnRUb3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fYmlndG90YWwnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPkdyYW5kIHRvdGFsOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnN0YXRlLmNhcnRUb3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nbmV3c2xldHRlcicvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSduZXdzbGV0dGVyJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPk5ld3M8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnIGlkPSdjb25kaXRpb25zJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2NvbmRpdGlvbnMnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+SSBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zKjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nJyBjbGFzc05hbWU9J3BheW1lbnRfX3BheSBidXR0b24gYnV0dG9uLS1jZW50ZXIgYnV0dG9uLS1zbWFsbCcgb25DbGljaz17dGhpcy5wYXkuYmluZCh0aGlzKX0+UHJvY2VlZCB0byBwYXltZW50PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJodHRwczovL3NlY3VyZS10ZXN0LmJlMmJpbGwuY29tL2Zyb250L2Zvcm0vcHJvY2Vzc1wiIGlkPVwibXlmb3JtXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJBTU9VTlRcIiB2YWx1ZT1cIjEwMDBcIiAvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSURFTlRJRklFUlwiIHZhbHVlPVwiQ09OVk9ZXCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIk9QRVJBVElPTlRZUEVcIiB2YWx1ZT1cInBheW1lbnRcIiAvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiT1JERVJJRFwiIHZhbHVlPVwib3JkZXJfMDAwMTIzXCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkNMSUVOVElERU5UXCIgdmFsdWU9XCJjbGllbnRfMTIzXCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkRFU0NSSVBUSU9OXCIgdmFsdWU9XCJhcnRfMTIzNDU2XCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIlZFUlNJT05cIiB2YWx1ZT1cIjIuMFwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJIQVNIXCIgdmFsdWU9XCI2Yjg3YmZhZTQ2ZWIyMDQ5NTBjNzAwNThmMjI3ZjczYzFhOTU4MjdjMGIwZjk1ZTFhZmE0YWQ0NTI1ZWI2N2I1XCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQYXkgd2l0aCBiZTJiaWxsXCIgLz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRwYXkoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdC8vIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJodHRwczovL3NlY3VyZS10ZXN0LmJlMmJpbGwuY29tL2Zyb250L2Zvcm0vcHJvY2Vzc1wiIGlkPVwibXlmb3JtXCI+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIzRFNFQ1VSRVwiIHZhbHVlPVwieWVzXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkNBUkRGVUxMTkFNRVwiIHZhbHVlPVwiSm9obiBEb2VcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiQ0xJRU5URU1BSUxcIiB2YWx1ZT1cImpvaG4uZG9lQGVtYWlsLmNvbVwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJISURFQ0FSREZVTExOQU1FXCIgdmFsdWU9XCJ5ZXNcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSElERUNMSUVOVEVNQUlMXCIgdmFsdWU9XCJ5ZXNcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiQU1PVU5UXCIgdmFsdWU9XCIxMDAwXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIklERU5USUZJRVJcIiB2YWx1ZT1cIkNPTlZPWVwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJPUEVSQVRJT05UWVBFXCIgdmFsdWU9XCJwYXltZW50XCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIk9SREVSSURcIiB2YWx1ZT1cIm9yZGVyXzAwMDEyM1wiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJDTElFTlRJREVOVFwiIHZhbHVlPVwiY2xpZW50XzEyM1wiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJERVNDUklQVElPTlwiIHZhbHVlPVwiYXJ0XzEyMzQ1NlwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJWRVJTSU9OXCIgdmFsdWU9XCIyLjBcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSEFTSFwiIHZhbHVlPVwiNmI4N2JmYWU0NmViMjA0OTUwYzcwMDU4ZjIyN2Y3M2MxYTk1ODI3YzBiMGY5NWUxYWZhNGFkNDUyNWViNjdiNVwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUGF5IHdpdGggYmUyYmlsbFwiIC8+XG5cdFx0XHRcdFx0Ly8gPC9mb3JtPlxuXG5cdFx0Ly8gXyh0aGlzLnN0YXRlLmNhcnRJdGVtcykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHQvLyBcdFByaW50QXBpLm9yZGVyKGluZGV4LCBpdGVtLnNlcmlhbClcblx0XHQvLyB9KS52YWx1ZSgpO1xuXG5cdFx0Ly8gQ2FydEFwaS5wYXkoKVxuXHRcdENhcnRBcGkuZ2VuZXJhdGVQYXlCdXR0b24oKVxuXHR9XG5cblx0cmVtb3ZlSXRlbShpZCkge1xuXHRcdENhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0KGlkKVxuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCBDYXJ0U3RvcmUgZnJvbSAnQ2FydFN0b3JlJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludCBleHRlbmRzIFBhZ2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludDogdW5kZWZpbmVkLFxuXHRcdFx0c2VsZWN0ZWRTZXJpYWw6IHVuZGVmaW5lZCxcblx0XHRcdGxvYWRlZFByaW50OiB1bmRlZmluZWQsXG5cdFx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRcdHZhbGlkU2VyaWFsczogW11cblx0XHR9XG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl90b2dnbGVMaXN0QmluZGVkID0gdGhpcy5fdG9nZ2xlTGlzdC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fYWRkVG9DYXJ0QmluZGVkID0gdGhpcy5fYWRkVG9DYXJ0LmJpbmQodGhpcylcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25DYXJ0U3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vbkNhcnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZVxuXHRcdHRoaXMudmFsaWRTZXJpYWxzID0gW11cblx0XHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRQcmludEFwaS5nZXRPbmUodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0Q2FydFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0dGhpcy5fbG9hZEltYWdlKClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgZmlsZVxuXHRcdGlmICghdGhpcy5sb2FkZWQpIHtcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0dGhpcy5fbG9hZEltYWdlKClcblx0XHR9XG5cblx0XHQvLyB0aGlzLl91cGRhdGVTZXJpYWxzKClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XHRcblx0XHRDYXJ0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHRpZiAodGhpcy5zdGF0ZS5wcmludCkge1xuXHRcdFx0dGhpcy52YWxpZFNlcmlhbHMgPSB0aGlzLl9nZXRWYWxpZFNlcmlhbHMoKVxuXHRcdFx0dGhpcy5zZWxlY3RlZFNlcmlhbCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTZXJpYWwgfHwgdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1wcmludCcgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZS5wcmludCkgcmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludCc+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRlZFByaW50fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2luZm9zJz5cblx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcmludF9fdGl0bGUgcHJpbnRfX3RpdGxlLS1tYXJnaW4nPnt0aGF0LnN0YXRlLnByaW50LnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJpbnRfX2NpdHknPnt0aGF0LnN0YXRlLnByaW50LmNpdHl9LCB7dGhhdC5zdGF0ZS5wcmludC5jb3VudHJ5fSw8L3NwYW4+IHt0aGF0LnN0YXRlLnByaW50LnllYXJ9XG5cdFx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwcmludF9fYXJ0aXN0Jz5FbGxpb3R0IEVyd2l0dDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19wcmljZSB0ZXh0IHRleHQtLXNtYWxsJz57dGhhdC5zdGF0ZS5wcmludC5wcmljZX3igqw8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3ByaW50X19kZXNjIHRleHQgdGV4dC0tc21hbGwnPnt0aGF0LnN0YXRlLnByaW50LmRlc2N9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFscyc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuc3RhdGUucHJpbnQuc2VyaWFscy5sZW5ndGggPiAwKSB7IHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsLW9wdCc+U2VyaWFsIG9wdGlvbjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZWxlY3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbC0tc2VsZWN0ZWQnIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUxpc3RCaW5kZWR9Pnt0aGF0LnNlbGVjdGVkU2VyaWFsfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsLWxpc3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnZhbGlkU2VyaWFscykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGVuYWJsZWQgPSB0aGF0LnZhbGlkU2VyaWFsc1tpbmRleF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBzZXJpYWwgPSBwYXJzZUludChpbmRleCkrMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbGV0IGNsYXNzU2VsZWN0ZWQgPSAoc2VyaWFsID09PSB0aGF0LnN0YXRlLnNlcmlhbCkgPyAncHJpbnRfX3NlcmlhbC0tc2VsZWN0ZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGxldCBjbGFzc0VuYWJsZWQgPSAoZW5hYmxlZCkgPyAncHJpbnRfX3NlcmlhbC0tZW5hYmxlZCcgOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICg8bGkgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsJyBvbkNsaWNrPXt0aGF0Ll9zZWxlY3RTZXJpYWwuYmluZCh0aGF0LCBzZXJpYWwpfSBrZXk9e2luZGV4fT57c2VyaWFsfTwvbGk+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICg8bGkgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsIHByaW50X19zZXJpYWwtLWRpc2FibGVkJyBrZXk9e2luZGV4fT57c2VyaWFsfTwvbGk+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyBjbGFzc05hbWU9J3ByaW50X19idXkgdGV4dCB0ZXh0LS1zbWFsbCBidXR0b24gYnV0dG9uLS1jZW50ZXIgYnV0dG9uLS1zbWFsbCBidXR0b24tLXJldmVyc2UnIG9uQ2xpY2s9e3RoYXQuX2FkZFRvQ2FydEJpbmRlZH0+QnV5IHByaW50PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfSBlbHNlIHsgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2Pk91dCBvZiBzdG9jazwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHQvLyBfdXBkYXRlU2VyaWFscygpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygndXBkYXRlIHZhbGlkU2VyaWFscycpXG5cdC8vIFx0dGhpcy52YWxpZFNlcmlhbHMgPSBbXVxuXHQvLyBcdHRoaXMuY2FydFNlcmlhbHMgPSBfLnBsdWNrKF8uZmlsdGVyKHRoaXMuc3RhdGUuY2FydEl0ZW1zLCB7ICdpZCc6IHRoaXMuc3RhdGUucHJpbnQuX2lkIH0pLCAnc2VyaWFsJylcblx0Ly8gXHRfKHRoaXMuc3RhdGUucHJpbnQuc2VyaWFscykuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG5cdC8vIFx0XHRpZiAoXy5pbmRleE9mKHRoaXMuY2FydFNlcmlhbHMsIGluZGV4KzEpID4gLTEpIHRoaXMudmFsaWRTZXJpYWxzW2luZGV4XSA9IGZhbHNlXG5cdC8vIFx0XHRlbHNlIHRoaXMudmFsaWRTZXJpYWxzW2luZGV4XSA9IHZhbHVlXG5cdC8vIFx0fSkudmFsdWUoKVxuXG5cdC8vIFx0Ly8gdGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0Ly8gXHR2YWxpZFNlcmlhbHM6IHRoaXMudmFsaWRTZXJpYWxzXG5cdC8vIFx0Ly8gfSwgKCkgPT4ge1xuXHQvLyBcdC8vIFx0dGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHQvLyBcdC8vIH0pXG5cblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdHZhbGlkU2VyaWFsczogdGhpcy52YWxpZFNlcmlhbHMsXG5cdC8vIFx0XHRzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHQvLyBcdH0pXG5cdC8vIH1cblxuXHRfZ2V0VmFsaWRTZXJpYWxzKCkge1xuXHRcdHRoaXMudmFsaWRTZXJpYWxzID0gW11cblx0XHR0aGlzLmNhcnRTZXJpYWxzID0gXy5wbHVjayhfLmZpbHRlcih0aGlzLnN0YXRlLmNhcnRJdGVtcywgeyAnaWQnOiB0aGlzLnN0YXRlLnByaW50Ll9pZCB9KSwgJ3NlcmlhbCcpXG5cdFx0Xyh0aGlzLnN0YXRlLnByaW50LnNlcmlhbHMpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKF8uaW5kZXhPZih0aGlzLmNhcnRTZXJpYWxzLCBpbmRleCsxKSA+IC0xKSB0aGlzLnZhbGlkU2VyaWFsc1tpbmRleF0gPSBmYWxzZVxuXHRcdFx0ZWxzZSB0aGlzLnZhbGlkU2VyaWFsc1tpbmRleF0gPSB2YWx1ZVxuXHRcdH0pLnZhbHVlKClcblxuXHRcdHJldHVybiB0aGlzLnZhbGlkU2VyaWFsc1xuXHR9XG5cblx0X2dldEZpcnN0U2VyaWFsKCkge1xuXHRcdHJldHVybiBfLmluZGV4T2YodGhpcy52YWxpZFNlcmlhbHMsIHRydWUpICsgMVxuXHR9XG5cblx0X3NlbGVjdFNlcmlhbChzZXJpYWwsIGUpIHtcblx0XHR0aGlzLl90b2dnbGVMaXN0KClcblx0XHRkb20oJy5zZXJpYWwtLWVuYWJsZWQnKS5yZW1vdmVDbGFzcygnc2VyaWFsLS1lbmFibGVkJylcblx0XHRkb20oZS50YXJnZXQpLmFkZENsYXNzKCdzZXJpYWwtLWVuYWJsZWQnKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWRTZXJpYWw6IHNlcmlhbFxuXHRcdH0pXG5cdH1cblxuXHRfYWRkVG9DYXJ0KGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRsZXQgcHJpbnRJZCA9IHRoaXMuc3RhdGUucHJpbnQuX2lkO1xuXHRcdGxldCB1cGRhdGUgPSB7XG5cdFx0XHRpZDogdGhpcy5zdGF0ZS5wcmludC5faWQsXG5cdFx0XHRjaXR5OiB0aGlzLnN0YXRlLnByaW50LmNpdHksXG5cdFx0XHR5ZWFyOiB0aGlzLnN0YXRlLnByaW50LnllYXIsXG5cdFx0XHRwcmljZTogdGhpcy5zdGF0ZS5wcmludC5wcmljZSxcblx0XHRcdHNlcmlhbDogdGhpcy5zdGF0ZS5zZWxlY3RlZFNlcmlhbCxcblx0XHRcdGZpbGU6IHRoaXMuc3RhdGUucHJpbnQuZmlsZSxcblx0XHRcdGNvcGllczogdGhpcy5zdGF0ZS5wcmludC5jb3BpZXNcblx0XHR9XG5cdFx0Q2FydEFjdGlvbnMuYWRkVG9DYXJ0KHByaW50SWQsIHVwZGF0ZSk7XG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQodHJ1ZSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlbGVjdGVkU2VyaWFsOiB0aGlzLl9nZXRGaXJzdFNlcmlhbCgpXG5cdFx0fSlcblx0fVxuXG5cdF90b2dnbGVMaXN0KCkge1xuXHRcdGRvbSgnLnByaW50X19zZXJpYWwtbGlzdCcpLnRvZ2dsZUNsYXNzKCdlbmFibGVkJylcblx0fVxuXG5cdF9sb2FkSW1hZ2UoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzLCBmaWxlXG5cblx0XHRmaWxlID0gbmV3IEltYWdlKClcblx0XHRmaWxlLm9ubG9hZCA9IHRoYXQuX29uSW1hZ2VMb2FkZWQuYmluZCh0aGF0KVxuXHRcdGZpbGUuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJyt0aGlzLnN0YXRlLnByaW50LmZpbGUrJ19tZWRpdW0uanBnJ1xuXHR9XG5cblx0X29uSW1hZ2VMb2FkZWQocGFyYW1zKSB7XG5cdFx0aWYgKHBhcmFtcy5wYXRoWzBdLmhlaWdodCA+PSBwYXJhbXMucGF0aFswXS53aWR0aCoxLjIpIHtcblx0XHRcdHRoaXMucHJpbnQgPSA8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xlZnQnPjxkaXYgY2xhc3NOYW1lPSdwcmludF9faW1hZ2UgcHJpbnRfX2ltYWdlLS1wb3J0cmFpdCc+PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+U2lsdmVyIGdlbGF0aW4gcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcmludCA9IDxkaXYgY2xhc3NOYW1lPSdwcmludF9fbGVmdCc+PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbWFnZSBwcmludF9faW1hZ2UtLWxhbmRzY2FwZSc+PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+U2lsdmVyIGdlbGF0aW4gcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHQnbG9hZGVkUHJpbnQnOiB0aGlzLnByaW50XG5cdFx0fSk7XG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByaW50OiBQcmludFN0b3JlLmdldE9uZSgpLFxuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0XHQvLyBzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0X29uQ2FydFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKClcblx0XHR9KVxuXHR9XG5cblx0Ly8gX29uU3RvcmVDaGFuZ2UoKSB7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKSxcblx0Ly8gXHRcdC8vIGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpXG5cdC8vIFx0fSwgKCkgPT4ge1xuXHQvLyBcdFx0dGhpcy5fdXBkYXRlU2VyaWFscygpXG5cdC8vIFx0XHR0aGlzLl9sb2FkSW1hZ2UoKVxuXHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRcdHNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHQvLyBcdFx0fSlcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0Ly8gX29uQ2FydFN0b3JlQ2hhbmdlKCkge1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKClcblx0Ly8gXHR9LCAoKSA9PiB7XG5cdC8vIFx0XHR0aGlzLl91cGRhdGVTZXJpYWxzKClcblx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0XHRzZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHRcdH0pXG5cdC8vIFx0fSlcblx0Ly8gfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3kgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3ByaXZhY3lQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFByaW50Q29uc3RhbnRzIGZyb20gJ1ByaW50Q29uc3RhbnRzJ1xuaW1wb3J0IEFydGlzdFN0b3JlIGZyb20gJ0FydGlzdFN0b3JlJ1xuaW1wb3J0IEFydGlzdEFwaSBmcm9tICdBcnRpc3RBcGknXG5pbXBvcnQgVHdlZW5tYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJ3Njcm9sbFRvJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0YXJ0aXN0OiB1bmRlZmluZWQsXG5cdFx0XHRzbGlkZXNob3c6IHt9LFxuXHRcdFx0cHJpbnQ6IHt9XG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fc2hvd1NsaWRlc2hvd0JpbmRlZCA9IHRoaXMuX3Nob3dTbGlkZXNob3cuYmluZCh0aGlzKVxuXHRcdHRoaXMuX3RvZ2dsZVpvb21CaW5kZWQgPSB0aGlzLl90b2dnbGVab29tLmJpbmQodGhpcylcblx0XHR0aGlzLl90b2dnbGVTdG9yeUJpbmRlZCA9IHRoaXMuX3RvZ2dsZVN0b3J5LmJpbmQodGhpcylcblx0XHR0aGlzLl9iYWNrVG9HYWxsZXJ5QmluZGVkID0gdGhpcy5fYmFja1RvR2FsbGVyeS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcHJldkJpbmRlZCA9IHRoaXMuX3ByZXYuYmluZCh0aGlzKVxuXHRcdHRoaXMuX25leHRCaW5kZWQgPSB0aGlzLl9uZXh0LmJpbmQodGhpcylcblx0XHR0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25BcnRpc3RTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy56b29tID0gZmFsc2Vcblx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cyA9IHt9XG5cdFx0dGhpcy5hY3Rpb24gPSAnaW5pdCdcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IC0xXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBoYWNrID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGF0Lnpvb20gPSBQcmludFN0b3JlLmdldFpvb20oKVxuXHRcdFx0aWYgKHRoYXQuem9vbSkge1xuXHRcdFx0XHRQcmludEFwaS5nZXRTbGlkZXNob3codGhpcy5wcm9wcy5pZFNlY3Rpb24sIHRoYXQuem9vbSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFByaW50QXBpLmdldFNsaWRlc2hvdyh0aGlzLnByb3BzLmlkU2VjdGlvbik7XG5cdFx0XHR9XG5cdFx0fSwgMTApXG5cblx0XHRBcnRpc3RBcGkuZ2V0QnlTbHVnKHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRBcnRpc3RTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0Ly8gUHJpbnRTdG9yZS5vbihQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UU19TTElERVNIT1csIHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZClcdFxuXHRcdC8vIFByaW50U3RvcmUub24oUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVCwgdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKVx0XG5cblx0XHR0aGlzLl9pbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19pbnRybycpXG5cdFx0dGhpcy5fcmFmKClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFydGlzdFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQXJ0aXN0U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgbmFtZSwgYmlvLCB0aXRsZSwgY2l0eSwgY291bnRyeSwgeWVhciwgc3RvcnksIGZvclNhbGUsIHVybCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzYyA9IFtdXG5cdFx0aWYgKHRoaXMuc3RhdGUuYXJ0aXN0KSB7XG5cdFx0XHRuYW1lID0gdGhpcy5zdGF0ZS5hcnRpc3QubmFtZVxuXHRcdFx0YmlvID0gdGhpcy5zdGF0ZS5hcnRpc3QuYmlvXG5cdFx0XHRwcm9qZWN0VGl0bGUgPSB0aGlzLnN0YXRlLmFydGlzdC5wcm9qZWN0LnRpdGxlXG5cdFx0XHRwcm9qZWN0RGVzYyA9IHRoaXMuc3RhdGUuYXJ0aXN0LnByb2plY3QuZGVzY1xuXHRcdH1cblxuXHRcdGlmIChfLnNpemUodGhpcy5zdGF0ZS5zbGlkZXNob3cpID4gMCkge1xuXHRcdFx0aWYgKHRoaXMuYWN0aW9uID09PSAnaW5pdCcpIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNob3dQcmludHMgPSB0aGlzLnN0YXRlLnNsaWRlc2hvdy5wcmludHNcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmFjdGlvbiA9PT0gJ3ByZXYnKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLm5leHQgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5wcmV2XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLnByZXYgPSB0aGlzLnN0YXRlLnByaW50XG5cdFx0XHR9IFxuXHRcdFx0aWYgKHRoaXMuYWN0aW9uID09PSAnbmV4dCcpIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNob3dQcmludHMucHJldiA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnRcblx0XHRcdFx0dGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudCA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLm5leHRcblx0XHRcdFx0dGhpcy5zbGlkZXNob3dQcmludHMubmV4dCA9IHRoaXMuc3RhdGUucHJpbnRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoXy5zaXplKHRoaXMuc2xpZGVzaG93UHJpbnRzKSA+IDApIHtcblx0XHRcdHRpdGxlID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudC50aXRsZVxuXHRcdFx0Y2l0eSA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQuY2l0eVxuXHRcdFx0Y291bnRyeSA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQuY291bnRyeVxuXHRcdFx0eWVhciA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQueWVhclxuXHRcdFx0c3RvcnkgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LmRlc2Ncblx0XHRcdGZvclNhbGUgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LmZvclNhbGVcblx0XHRcdHVybCA9ICcjL3Nob3AvJyArIHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQuX2lkXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLXByb2plY3QnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51IHByb2plY3RfX2NvbnRhY3QgJz48YSBocmVmPXsnIy9wcm9qZWN0LycrdGhpcy5wcm9wcy5pZFNlY3Rpb24rJy9jb250YWN0LXNoZWV0J30+PHAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uLS1zbWFsbCc+Q29udGFjdCBzaGVldDwvcD48L2E+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51IHByb2plY3RfX2JhY2sgJz48YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9iYWNrVG9HYWxsZXJ5QmluZGVkfT48cCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLXNtYWxsJz5CYWNrIHRvIGdhbGxlcnk8L3A+PC9hPjwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0Jz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9faW50cm8nPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJvamVjdF9fYXJ0aXN0Jz57bmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwcm9qZWN0X19kZXNjIHRleHQgdGV4dC0tbWVkaXVtJz5cblx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHByb2plY3REZXNjKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJvamVjdF9fcGFyYWdyYXBoJyBrZXk9e2luZGV4fT57cHJvamVjdERlc2NbaW5kZXhdfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2Rpc2NvdmVyJyBvbkNsaWNrPXt0aGlzLl9zaG93U2xpZGVzaG93QmluZGVkfT48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NsaWRlc2hvdyc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fY29udGVudCc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19wcmludHMnPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnNsaWRlc2hvd1ByaW50cykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZpbGUgPSB0aGlzLnNsaWRlc2hvd1ByaW50c1tpbmRleF0uZmlsZSArICdfYmlnLmpwZydcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzdGF0dXMgPSBpbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydwcm9qZWN0X19wcmludCBwcm9qZWN0X19wcmludC0tJytzdGF0dXN9IG9uQ2xpY2s9e3RoYXQuX3RvZ2dsZVpvb21CaW5kZWR9IGtleT17aW5kZXh9PjxpbWcgY2xhc3NOYW1lPSdwcm9qZWN0X19pbWFnZScgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK2ZpbGV9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19zdG9yeSB0ZXh0IHRleHQtLWJpZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57c3Rvcnl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19uYXYnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3ByZXYnIG9uQ2xpY2s9e3RoaXMuX3ByZXZCaW5kZWR9PjxkaXYgY2xhc3NOYW1lPSdhcnJvdyc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fbmV4dCcgb25DbGljaz17dGhpcy5fbmV4dEJpbmRlZH0+PGRpdiBjbGFzc05hbWU9J2Fycm93Jz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19mb290ZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19zZWN0aW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0ncHJvamVjdF9fc2hhcmUgYnV0dG9uIGJ1dHRvbi0tbGVmdCBidXR0b24tLXNtYWxsIGJ1dHRvbi0tcmV2ZXJzZSc+U2hhcmU8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NlY3Rpb24gcHJvamVjdF9faW5mb3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChmb3JTYWxlKSByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcmludF9fdGl0bGUgcHJpbnRfX2luZm8tLXNtYWxsJz57dGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3ByaW50X19sb2NhdGlvbiBwcmludF9faW5mby0tc21hbGwnPntjaXR5fSwge2NvdW50cnl9LCB7eWVhcn08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2FydGlzdCBwcmludF9faW5mby0tc21hbGwnPntuYW1lfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NlY3Rpb24nPlxuXHRcdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChmb3JTYWxlKSByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fcmV2ZWFsIGJ1dHRvbiBidXR0b24tLWxlZnQgYnV0dG9uLS1zbWFsbCBidXR0b24tLXJldmVyc2UnIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVN0b3J5QmluZGVkfT5UaGUgc3Rvcnk8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPSdwcm9qZWN0X19idXkgYnV0dG9uIGJ1dHRvbi0tcmlnaHQgYnV0dG9uLS1zbWFsbCBidXR0b24tLXJldmVyc2UnPkJ1eSBwcmludDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0Ly8gbGV0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRcdHRoaXMuaGFuZGxlU2Nyb2xsKClcblx0XHR9XG5cblx0XHRzY3JvbGwodGhpcy5fcmFmQmluZGVkKTtcblx0fVxuXG5cdGhhbmRsZVNjcm9sbCgpIHtcblxuXHRcdHRoaXMub3BhY2l0eU1hcmdlID0gd2luZG93LmlubmVySGVpZ2h0LzJcblx0XHR0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuX2ludHJvKVxuXHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCArIHRoaXMubGltaXRPZmZzZXQuaGVpZ2h0IC8gMS41XG5cdFx0dGhpcy5pbnRyb09wYWNpdHkgPSAxIC0gKHRoaXMubGltaXRUb3AgLSB0aGlzLm9wYWNpdHlNYXJnZSkgLyAoLXRoaXMub3BhY2l0eU1hcmdlKVxuXHRcdHRoaXMuX2ludHJvLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmludHJvT3BhY2l0eVxuXG5cdFx0Ly8gdGhpcy5saW1pdE9mZnNldCA9IG9mZnNldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9faW50cm8nKSlcblx0XHQvLyB0aGlzLk9QQUNJVFlfTUFSR0UgPSB0aGlzLmxpbWl0T2Zmc2V0LmhlaWdodFxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMubGltaXRPZmZzZXQpXG5cdFx0Ly8gdGhpcy5saW1pdFRvcCA9IHRoaXMubGltaXRPZmZzZXQudG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICsgdGhpcy5PUEFDSVRZX01BUkdFXG5cdFx0Ly8gdGhpcy5lbE9wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCh0aGlzLmxpbWl0VG9wIC8gKC10aGlzLk9QQUNJVFlfRFVSQVRJT04pLCAwLCAxKVxuXHRcdC8vIC8vIHRoaXMuZWxZID0gKDEtdGhpcy5lbE9wYWNpdHkpICogNTBcblx0XHQvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9faW50cm8nKS5zdHlsZS5vcGFjaXR5ID0gdGhpcy5lbE9wYWNpdHlcblx0XHQvLyBlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMuZWxZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cdH1cblxuXHRfc2hvd1NsaWRlc2hvdygpIHtcblx0XHR0aGlzLnNsaWRlc2hvd09mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKS5vZmZzZXRUb3Bcblx0XHRUd2Vlbk1heC50byh3aW5kb3csIDEuMiwge3Njcm9sbFRvOnt5OiB0aGlzLnNsaWRlc2hvd09mZnNldFRvcH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KVxuXHR9XG5cdFxuXHRpbml0VGltZWxpbmVzKCkge1xuXHR9XG5cblx0X3RvZ2dsZVpvb20oKSB7XG5cdFx0aWYgKHRoaXMuem9vbSkgdGhpcy5fem9vbU91dCgpXG5cdFx0ZWxzZSB0aGlzLl96b29tSW4oKVxuXHR9XG5cblx0X3pvb21JbigpIHtcblx0XHR0aGlzLnRsWm9vbUluID0gbmV3IFRpbWVsaW5lTWF4KHtwYXVzZWQ6IHRydWV9KVxuXHRcdHRoaXMudGxab29tSW4uc3RhZ2dlclRvKFtcblx0XHRcdGRvbSgnLmZyb250LWNvbnRhaW5lcicpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fc2hhcmUnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX2luZm9zJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19yZXZlYWwnKSxcblx0XHRcdGRvbSgnLmNhcnQnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX2NvbnRhY3QnKVxuXHRcdF0sIDAuNCwge29wYWNpdHk6IDB9LCAwKVxuXHRcdHRoaXMudGxab29tSW4udG8oZG9tKCcucHJvamVjdF9fcHJpbnQnKSwgMC40LCB7c2NhbGU6IDEuMzUsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX3ByZXYnKSwgMC40LCB7eDogLTgwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21Jbi50byhkb20oJy5wcm9qZWN0X19uZXh0JyksIDAuNCwge3g6IDgwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21Jbi5hZGRDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fY29udGFjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19iYWNrJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblx0XHR9LCAwLjQpXG5cdFx0dGhpcy50bFpvb21Jbi50byhkb20oJy5wcm9qZWN0X19iYWNrJyksIDAuNCwge29wYWNpdHk6IDF9LCAwLjQpXG5cdFx0XG5cdFx0dGhpcy50bFpvb21Jbi5wbGF5KClcblxuXHRcdHRoaXMuem9vbSA9ICF0aGlzLnpvb21cblx0fVxuXG5cdF96b29tT3V0KCkge1xuXHRcdHRoaXMudGxab29tT3V0ID0gbmV3IFRpbWVsaW5lTWF4KHtwYXVzZWQ6IHRydWV9KVxuXHRcdHRoaXMudGxab29tT3V0LnN0YWdnZXJUbyhbXG5cdFx0XHRkb20oJy5mcm9udC1jb250YWluZXInKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3NoYXJlJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19pbmZvcycpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fcmV2ZWFsJyksXG5cdFx0XHRkb20oJy5jYXJ0Jylcblx0XHRdLCAwLjQsIHtvcGFjaXR5OiAxfSwgMClcblx0XHR0aGlzLnRsWm9vbU91dC50byhkb20oJy5wcm9qZWN0X19iYWNrJyksIDAuNCwge29wYWNpdHk6IDB9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LmFkZENhbGxiYWNrKCgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jb250YWN0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19iYWNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdH0sIDAuNClcblx0XHR0aGlzLnRsWm9vbU91dC50byhkb20oJy5wcm9qZWN0X19jb250YWN0JyksIDAuNCwge29wYWNpdHk6IDF9LCAwLjQpXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fcHJpbnQnKSwgMC40LCB7c2NhbGU6IDEsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbU91dC50byhkb20oJy5wcm9qZWN0X19wcmV2JyksIDAuNCwge3g6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbU91dC50byhkb20oJy5wcm9qZWN0X19uZXh0JyksIDAuNCwge3g6IDAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblxuXHRcdHRoaXMudGxab29tT3V0LnBsYXkoKVxuXG5cdFx0dGhpcy56b29tID0gIXRoaXMuem9vbVxuXHR9XG5cblx0X2JhY2tUb0dhbGxlcnkoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHRoaXMuem9vbU91dCgpXG5cdH1cblxuXHRfdG9nZ2xlU3RvcnkoKSB7XG5cdFx0ZG9tKCcucHJvamVjdF9fc3RvcnknKS50b2dnbGVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfaGlkZVN0b3J5KCkge1xuXHRcdGRvbSgnLnByb2plY3RfX3N0b3J5JykucmVtb3ZlQ2xhc3MoJ2VuYWJsZWQnKVxuXHR9XG5cblx0X3ByZXYoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHR0aGlzLl9oaWRlU3RvcnkoKVxuXHRcdFR3ZWVubWF4LnRvKGRvbSgnLnByb2plY3RfX3ByaW50JyksIDAuNCwge29wYWNpdHk6IDAsIG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdHRoYXQuY3VycmVudEluZGV4ID0gdGhhdC5fZ2V0UHJldkluZGV4KClcblx0XHRcdHRoYXQuYWN0aW9uID0gJ3ByZXYnXG5cdFx0XHRQcmludEFwaS5nZXRPbmUodGhhdC5zdGF0ZS5zbGlkZXNob3cucmVmc1t0aGF0Ll9nZXRQcmV2SW5kZXgoKV0pOyAvLyBUT0RPOiBtZXR0cmUgZW4gY2FjaGUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucyBkZSByZXF1w6p0ZXNcblx0XHR9fSk7XG5cdH1cblxuXHRfbmV4dCgpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblxuXHRcdHRoaXMuX2hpZGVTdG9yeSgpXG5cdFx0VHdlZW5tYXgudG8oZG9tKCcucHJvamVjdF9fcHJpbnQnKSwgMC40LCB7b3BhY2l0eTogMCwgb25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0dGhhdC5jdXJyZW50SW5kZXggPSB0aGF0Ll9nZXROZXh0SW5kZXgoKVxuXHRcdFx0dGhhdC5hY3Rpb24gPSAnbmV4dCdcblx0XHRcdFByaW50QXBpLmdldE9uZSh0aGF0LnN0YXRlLnNsaWRlc2hvdy5yZWZzW3RoYXQuX2dldE5leHRJbmRleCgpXSk7IC8vIFRPRE86IG1ldHRyZSBlbiBjYWNoZSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsb25zIGRlIHJlcXXDqnRlc1xuXHRcdH19KTtcblx0fVxuXG5cdF9nZXRQcmV2SW5kZXgoKSB7XG5cdFx0cmV0dXJuICh0aGlzLmN1cnJlbnRJbmRleC0xIDwgMCkgPyB0aGlzLnN0YXRlLnNsaWRlc2hvdy5yZWZzLmxlbmd0aC0xIDogdGhpcy5jdXJyZW50SW5kZXgtMVxuXHR9XG5cblx0X2dldE5leHRJbmRleCgpIHtcblx0XHRyZXR1cm4gKHRoaXMuY3VycmVudEluZGV4KzEgPiB0aGlzLnN0YXRlLnNsaWRlc2hvdy5yZWZzLmxlbmd0aC0xKSA/IDAgOiB0aGlzLmN1cnJlbnRJbmRleCsxXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25BcnRpc3RTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdDogQXJ0aXN0U3RvcmUuZ2V0T25lKCkgLy8gVE9ETzogYWZmaWNoZXIgbCdpbWFnZSBzdWl2YW50ZSB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IGNoYXJnw6llXG5cdFx0fSlcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzbGlkZXNob3c6IFByaW50U3RvcmUuZ2V0U2xpZGVzaG93KCksXG5cdFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5zdGF0ZS5zbGlkZXNob3cuY3VycmVudEluZGV4XG5cdFx0XHRUd2Vlbm1heC50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXJ0aXN0U3RvcmUgZnJvbSAnQXJ0aXN0U3RvcmUnXG5pbXBvcnQgQXJ0aXN0QXBpIGZyb20gJ0FydGlzdEFwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRhcnRpc3RzOiB7fVxuXHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vblN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRBcnRpc3RBcGkuZ2V0QWxsKCk7XG5cdFx0QXJ0aXN0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcnRpc3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHQvLyBsZXQgYXJ0aXN0c0RhdGEgPSBBcHBTdG9yZS5hcnRpc3RzQ29udGVudCgpXG5cdFx0Ly8gbGV0IGFydGlzdHNJdGVtcyA9IFtdXG5cdFx0Ly8gZm9yIChsZXQgYXJ0aXN0IGluIGFydGlzdHNEYXRhKSB7XG5cdFx0Ly8gXHRhcnRpc3RzSXRlbXMucHVzaCg8bGkga2V5PXthcnRpc3R9PjxhIGhyZWY9eycjL3Byb2plY3QvJythcnRpc3R9PnthcnRpc3RzRGF0YVthcnRpc3RdLm5hbWV9PC9hPjwvbGk+KVxuXHRcdC8vIH1cblx0XHRsZXQgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJvamVjdHMnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RzX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0c19fdGl0bGUgdGV4dCB0ZXh0LS10aXRsZSc+RmVsbG93czo8L2gyPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFydGlzdHMpLm1hcChmdW5jdGlvbihpbmRleCl7XG5cdFx0XHRcdFx0XHRcdGxldCBhcnRpc3QgPSB0aGF0LnN0YXRlLmFydGlzdHNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3Byb2plY3RzX19pdGVtIGJ1dHRvbic+PGEgaHJlZj17JyMvcHJvamVjdC8nK2FydGlzdC5zbHVnfT57YXJ0aXN0Lm5hbWV9PC9hPjwvbGk+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uU3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhcnRpc3RzOiBBcnRpc3RTdG9yZS5nZXRBbGwoKVxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnc2Nyb2xsVG8nXG5sZXQgc2Nyb2xsID0gVXRpbHMuU2Nyb2xsKClcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbmxldCBNYXNvbnJ5ID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIFBhZ2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludHM6IHt9XG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fc2hvd1ByaW50c0JpbmRlZCA9IHRoaXMuX3Nob3dQcmludHMuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcmFmQmluZGVkID0gdGhpcy5fcmFmLmJpbmQodGhpcylcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQgPSAwXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRQcmludEFwaS5nZXRGb3JTYWxlKCk7XG5cdFx0UHJpbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBzaG9wRGF0YSA9IEFwcFN0b3JlLnNob3BDb250ZW50KClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1zaG9wJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19pbnRybyc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nc2hvcF9fdGl0bGUnPntzaG9wRGF0YS5pbnRyby50aXRsZX08L2gyPlxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyhzaG9wRGF0YS5pbnRyby5wYXJhZ3JhcGhzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Nob3BfX3BhcmFncmFwaCB0ZXh0IHRleHQtLWJpZycga2V5PXtpbmRleH0+e3Nob3BEYXRhLmludHJvLnBhcmFncmFwaHNbaW5kZXhdfTwvcD5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXIgc2hvcF9fZGlzY292ZXInIG9uQ2xpY2s9e3RoaXMuX3Nob3dQcmludHNCaW5kZWR9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3Njcm9sbCBidXR0b24gYnV0dG9uLS1jZW50ZXIgYnV0dG9uLS1zbWFsbCc+RGlzY292ZXIgRWxsaW90dCBFcndpdHQncyBwcmludHM8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXNjb3Zlcl9fYXJyb3cnPjxkaXYgY2xhc3NOYW1lPSdhcnJvdyBhcnJvdy0tYmxhY2snPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3AnPlxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnByaW50cykubWFwKGZ1bmN0aW9uKGlkLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRsZXQgcHJpbnQgPSB0aGF0LnN0YXRlLnByaW50c1tpZF1cblx0XHRcdFx0XHRcdC8vIGxldCBmaWxlID0gcHJpbnQuZmlsZSArICdfbWluLmpwZydcblx0XHRcdFx0XHRcdGxldCBmaWxlID0gcHJpbnQuZmlsZSArICdfbWVkaXVtLmpwZydcblx0XHRcdFx0XHRcdC8vIGxldCBzcGVlZCA9IChpbmRleCAlIDIgPT09IDApID8gJ2Zhc3QnIDogJ3Nsb3cnXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fcHJpbnQnIGtleT17aWR9PlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9eycjL3Nob3AvJytpZH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytmaWxlfT48L2ltZz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19ob3Zlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19kZXRhaWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGl0bGUnPntwcmludC50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uJz48ZGl2IGNsYXNzTmFtZT0nc2hvcF9fY2l0eSc+e3ByaW50LmNpdHl9LCB7cHJpbnQuY291bnRyeX0sPC9kaXY+IDxkaXYgY2xhc3NOYW1lPSdzaG9wX195ZWFyJz57cHJpbnQueWVhcn08L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fcHJpY2UnPntwcmludC5wcmljZX3igqw8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fZGV0YWlscyBidXR0b24gYnV0dG9uLS1jZW50ZXIgYnV0dG9uLS1zbWFsbCBidXR0b24tLXJldmVyc2UnPk1vcmUgZGV0YWlsczwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXMsIGZpbGVcblx0XHR0aGlzLm1heCA9IF8uc2l6ZSh0aGlzLnN0YXRlLnByaW50cylcblx0XHRpZiAodGhpcy5tYXggPiAwICYmICF0aGlzLmxvYWRlZCkge1xuXHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlXG5cdFx0XHRfKHRoaXMuc3RhdGUucHJpbnRzKS5mb3JFYWNoKChwcmludCwgaW5kZXgpID0+IHtcblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdClcblx0XHRcdFx0ZmlsZS5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3ByaW50LmZpbGUrJ19taW4uanBnJ1xuXHRcdFx0fSkudmFsdWUoKTtcblx0XHR9XG5cdH1cblxuXHRvbkltYWdlTG9hZGVkKGUpIHtcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCsrO1xuXHRcdGlmICh0aGlzLm5JbWFnZUxvYWRlZCA+PSB0aGlzLm1heCkge1xuXHRcdFx0bGV0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpXG5cdFx0XHRpZiAoZ3JpZCkge1xuXHRcdFx0XHRsZXQgaXNvID0gbmV3IE1hc29ucnkoZ3JpZCwge1xuXHRcdFx0XHRcdGl0ZW1TZWxlY3RvcjogJy5zaG9wX19wcmludCcsXG5cdFx0XHRcdFx0Y29sdW1uV2lkdGg6ICcuc2hvcF9fcHJpbnQnLFxuXHRcdFx0XHRcdGd1dHRlcjogNTBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X3JhZigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGxJbmRleCAlIDMpIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXgrK1xuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsT2spIHtcblx0XHRcdC8vIGxldCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0XHR0aGlzLmhhbmRsZVNjcm9sbCgpXG5cdFx0fVxuXG5cdFx0c2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0bGV0IHRvcCA9IFV0aWxzLkdldFNjcm9sbFRvcCgpXG5cblx0XHRfKGRvbSgnLnNob3BfX3ByaW50JykpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvT2Zmc2V0ID0gb2Zmc2V0KGVsKTtcblx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHRcdHRoaXMudG9wUG9zaXRpb24gPSBlbC5vZmZzZXRUb3Bcblx0XHRcdHRoaXMueVBvc2l0aW9uID0gKHRoaXMuc2Nyb2xsVG9wIC0gdGhpcy50b3BQb3NpdGlvbikgKiAwLjI7XG5cblx0XHRcdGlmIChkb20oZWwpLmhhc0NsYXNzKCdqcy1mYXN0JykpIHtcblx0XHRcdFx0ZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyAoLXRoaXMueVBvc2l0aW9uKSArJ3B4KScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZG9tKGVsKS5oYXNDbGFzcygnanMtc2xvdycpKSB7XG5cdFx0XHRcdGVsLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgdGhpcy55UG9zaXRpb24gKydweCknKTtcblx0XHRcdH1cblx0XHR9KS52YWx1ZSgpO1xuXHR9XG5cblx0X3Nob3dQcmludHMoKSB7XG5cdFx0dGhpcy5zbGlkZXNob3dPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLm9mZnNldFRvcFxuXHRcdFR3ZWVuTWF4LnRvKHdpbmRvdywgMS4yLCB7c2Nyb2xsVG86e3k6IHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wIC0gNDB9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSlcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludHM6IFByaW50U3RvcmUuZ2V0Rm9yU2FsZSgpXG5cdFx0fSlcblx0fVxufVxuIiwibGV0IGNvbmZpZyA9IHtcblx0J3NpdGV1cmwnOiAnaHR0cDovL2hhdmFuYS5oaTkuZnInXG5cdC8vICdzaXRldXJsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlnOyIsImV4cG9ydCBkZWZhdWx0IHtcblx0V0lORE9XX1JFU0laRTogJ1dJTkRPV19SRVNJWkUnLFxuXHRDSEFOR0VfQU1CSUVOVDogJ0NIQU5HRV9BTUJJRU5UJyxcblxuXHRNRURJQV9HTE9CQUxfVzogMTkyMCxcblx0TUVESUFfR0xPQkFMX0g6IDEwODAsXG5cblx0TUlOX01JRERMRV9XOiA5NjAsXG5cdE1RX1hTTUFMTDogMzIwLFxuXHRNUV9TTUFMTDogNDgwLFxuXHRNUV9NRURJVU06IDc2OCxcblx0TVFfTEFSR0U6IDEwMjQsXG5cdE1RX1hMQVJHRTogMTI4MCxcblx0TVFfWFhMQVJHRTogMTY4MCxcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFJFQ0VJVkVfQUxMX0FSVElTVFM6ICdSRUNFSVZFX0FMTF9BUlRJU1RTJyxcblx0UkVDRUlWRV9BUlRJU1Q6ICdSRUNFSVZFX0FSVElTVCcsXG5cdEVSUk9SOiAnRVJST1InLFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0Q0FSVF9BREQ6ICdDQVJUX0FERCcsXHRcdFx0Ly8gQWRkcyBpdGVtIHRvIGNhcnRcblx0Q0FSVF9SRU1PVkU6ICdDQVJUX1JFTU9WRScsXHRcdC8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuXHRDQVJUX1ZJU0lCTEU6ICdDQVJUX1ZJU0lCTEUnLFx0Ly8gU2hvd3Mgb3IgaGlkZXMgdGhlIGNhcnRcblx0Q0FSVF9FTkFCTEVEOiAnQ0FSVF9FTkFCTEVEJyxcdC8vIE9wZW4gb3IgY2xvc2UgdGhlIGNhcnRcblx0U0VUX1NFTEVDVEVEOiAnU0VUX1NFTEVDVEVEJyxcdC8vIFNlbGVjdHMgYSBwcm9kdWN0IG9wdGlvblxuXHRSRUNFSVZFX0RBVEE6ICdSRUNFSVZFX0RBVEEnXHQvLyBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFJFQ0VJVkVfQUxMX1BSSU5UUzogJ1JFQ0VJVkVfQUxMX1BSSU5UUycsXG5cdFJFQ0VJVkVfUFJJTlRTX0ZPUlNBTEU6ICdSRUNFSVZFX1BSSU5UU19GT1JTQUxFJyxcblx0UkVDRUlWRV9QUklOVFNfU0xJREVTSE9XOiAnUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XJyxcblx0UkVDRUlWRV9BUlRJU1RfUFJJTlRTOiAnUkVDRUlWRV9BUlRJU1RfUFJJTlRTJyxcblx0UkVDRUlWRV9QUklOVDogJ1JFQ0VJVkVfUFJJTlQnLFxuXHRFUlJPUjogJ0VSUk9SJyxcblx0Wk9PTTogJ1pPT00nLFxufSIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVZpZXdBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnVklFV19BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fSxcblx0aGFuZGxlU2VydmVyQWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKHtcblx0XHRcdHNvdXJjZTogJ1NFUlZFUl9BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXIiLCJpbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuICAgIFx0XG5jbGFzcyBHbG9iYWxFdmVudHMge1xuXHRpbml0KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dClcblx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRBcHBBY3Rpb25zLndpbmRvd1Jlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdH0sIDMwMClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxFdmVudHNcbiIsImltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgaGFzaGVyIGZyb20gJ2hhc2hlcidcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgY3Jvc3Nyb2FkcyBmcm9tICdjcm9zc3JvYWRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBSb3V0ZXIge1xuXHRpbml0KCkge1xuXHRcdHRoaXMucm91dGluZyA9IGRhdGEucm91dGVzLnJvdXRpbmdcblx0XHR0aGlzLmRlZmF1bHRSb3V0ZSA9IHRoaXMucm91dGluZ1snLyddXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIub2xkSGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5wcmVwZW5kSGFzaCA9ICchJ1xuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0aGFzaGVyLmNoYW5nZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMuX3NldHVwQ3Jvc3Nyb2FkcygpXG5cdH1cblx0YmVnaW5Sb3V0aW5nKCkge1xuXHRcdGhhc2hlci5pbml0KClcblx0fVxuXHRfc2V0dXBDcm9zc3JvYWRzKCkge1xuXHRcdGxldCBob21lU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJycsIHRoaXMuX29uSG9tZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMSlcblxuXHRcdGxldCBiYXNpY1NlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCd7cGFnZX0nLCB0aGlzLl9vbkZpcnN0RGVncmVlVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAxKVxuXHRcdC8vIGZpcnN0RGVncmVlU2VjdGlvbi5ydWxlcyA9IHtcblx0XHQvLyBcdHBhZ2UgOiBbJ2hvbWUnLCAnNDA0JywgJ2ZlbGxvd3NoaXAnLCAncHJvamVjdHMnLCAnc2hvcCcsICduZXdzJywgJ2NvbnRhY3QnLCAnbGVnYWwnLCAncHJpdmFjeSddIC8vdmFsaWQgc2VjdGlvbnNcblx0XHQvLyB9XG5cblx0XHRsZXQgcHJvamVjdFNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCdwcm9qZWN0L3tpZH0nLCB0aGlzLl9vblByb2plY3RVUkxIYW5kbGVyLmJpbmQodGhpcyksIDIpXG5cdFx0cHJvamVjdFNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0XHRpZCA6IC9eW2Etel0vXG5cdFx0fVxuXG5cdFx0bGV0IGdhbGxlcnlTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgncHJvamVjdC97aWR9L2NvbnRhY3Qtc2hlZXQnLCB0aGlzLl9vblByb2plY3RVUkxIYW5kbGVyLmJpbmQodGhpcyksIDMpXG5cdFx0Z2FsbGVyeVNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0XHRpZCA6IC9eW2Etel0vXG5cdFx0fVxuXG5cdFx0bGV0IHNob3BTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgnL3Nob3Ave2lkfScsIHRoaXMuX29uU2hvcFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMilcblx0XHRzaG9wU2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogL15bMC05XS9cblx0XHR9XG5cdH1cblx0X29uSG9tZVVSTEhhbmRsZXIoKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUoJ2hvbWUnKVxuXHR9XG5cdF9vbkZpcnN0RGVncmVlVVJMSGFuZGxlcihwYWdlSWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwYWdlSWQpXG5cdH1cblx0X29uUHJvamVjdFVSTEhhbmRsZXIocHJvamVjdElkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocHJvamVjdElkKVxuXHR9XG5cdF9vblNob3BVUkxIYW5kbGVyKHByaW50SWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwcmludElkKVxuXHR9XG5cdF9vbkRlZmF1bHRVUkxIYW5kbGVyKCkge1xuXHRcdHRoaXMuX3NlbmRUb0RlZmF1bHQoKVxuXHR9XG5cdF9hc3NpZ25Sb3V0ZShpZCkge1xuXHRcdGxldCBoYXNoID0gaGFzaGVyLmdldEhhc2goKVxuXHRcdGxldCBwYXJ0cyA9IHRoaXMuX2dldFVSTFBhcnRzKGhhc2gpXG5cdFx0dGhpcy5fdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJ0c1swXSwgaWQpXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IHRydWVcblx0fVxuXHRfZ2V0VVJMUGFydHModXJsKSB7XG5cdFx0bGV0IGhhc2ggPSB1cmxcblx0XHRoYXNoID0gaGFzaC5zdWJzdHIoMSlcblx0XHRyZXR1cm4gaGFzaC5zcGxpdCgnLycpXG5cdH1cblx0X3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFyZW50LCB0YXJnZXRJZCkge1xuXHRcdGhhc2hlci5vbGRIYXNoID0gaGFzaGVyLm5ld0hhc2hcblx0XHRoYXNoZXIubmV3SGFzaCA9IHtcblx0XHRcdGhhc2g6IGhhc2gsXG5cdFx0XHRwYXJ0czogcGFydHMsXG5cdFx0XHRwYXJlbnQ6IHBhcmVudCxcblx0XHRcdHRhcmdldElkOiB0YXJnZXRJZFxuXHRcdH1cblx0XHRBcHBBY3Rpb25zLnBhZ2VIYXNoZXJDaGFuZ2VkKGhhc2hlci5uZXdIYXNoKVxuXHR9XG5cdF9kaWRIYXNoZXJDaGFuZ2UobmV3SGFzaCwgb2xkSGFzaCkge1xuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGNyb3Nzcm9hZHMucGFyc2UobmV3SGFzaClcblx0XHRpZih0aGlzLm5ld0hhc2hGb3VuZGVkKSByZXR1cm5cblx0XHQvLyBJZiBVUkwgZG9uJ3QgbWF0Y2ggYSBwYXR0ZXJuLCBzZW5kIHRvIGRlZmF1bHRcblx0XHR0aGlzLl9vbkRlZmF1bHRVUkxIYW5kbGVyKClcblx0fVxuXHRfc2VuZFRvRGVmYXVsdCgpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChBcHBTdG9yZS5kZWZhdWx0Um91dGUoKSlcblx0fVxuXHRzdGF0aWMgZ2V0QmFzZVVSTCgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuVVJMLnNwbGl0KFwiI1wiKVswXVxuXHR9XG5cdHN0YXRpYyBnZXRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIuZ2V0SGFzaCgpXG5cdH1cblx0c3RhdGljIGdldFJvdXRlcygpIHtcblx0XHRyZXR1cm4gZGF0YS5yb3V0ZXMucm91dGluZ1xuXHR9XG5cdHN0YXRpYyBnZXROZXdIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIubmV3SGFzaFxuXHR9XG5cdHN0YXRpYyBnZXRPbGRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIub2xkSGFzaFxuXHR9XG5cdHN0YXRpYyBzZXRIYXNoKGhhc2gpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5sZXQgX2hhc2hcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChoYXNoKSB7XG5cdF9oYXNoID0gaGFzaC5pdGVtLnBhcmVudFxufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuXHR2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0dmFyIGNvbnRlbnQgPSBkYXRhLnJvdXRlcy5yb3V0aW5nW2hhc2hPYmouaGFzaF1cblx0cmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRGb290ZXJNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzWydmb290ZXItbWVudSddXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlcy5jb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0SG9tZSgpIHtcblx0cmV0dXJuIGRhdGEuaG9tZVxufVxuZnVuY3Rpb24gX2dldEZlbGxvd3NoaXAoKSB7XG5cdHJldHVybiBkYXRhLmZlbGxvd3NoaXBcbn1cbmZ1bmN0aW9uIF9nZXRTaG9wKCkge1xuXHRyZXR1cm4gZGF0YS5zaG9wXG59XG5mdW5jdGlvbiBfZ2V0TmV3cygpIHtcblx0cmV0dXJuIGRhdGEubmV3c1xufVxuZnVuY3Rpb24gX2dldEFydGlzdHMoKSB7XG5cdHJldHVybiBkYXRhLmFydGlzdHNcbn1cbmZ1bmN0aW9uIF9nZXRBcnRpc3QoaWQpIHtcblx0cmV0dXJuIGRhdGEuYXJ0aXN0c1tpZF1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG5cdFx0dGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG5cdH0sXG5cdGhhc2g6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaGFzaFxuXHR9LFxuXHRwYWdlQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRQYWdlQ29udGVudCgpXG5cdH0sXG5cdG1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldE1lbnVDb250ZW50KClcblx0fSxcblx0Zm9vdGVyTWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0Rm9vdGVyTWVudUNvbnRlbnQoKVxuXHR9LFxuXHRhcHBEYXRhOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEFwcERhdGEoKVxuXHR9LFxuXHRkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0RGVmYXVsdFJvdXRlKClcblx0fSxcblx0Z2xvYmFsQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRHbG9iYWxDb250ZW50KClcblx0fSxcblx0aG9tZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0SG9tZSgpXG5cdH0sXG5cdGZlbGxvd3NoaXBDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEZlbGxvd3NoaXAoKVxuXHR9LFxuXHRzaG9wQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRTaG9wKClcblx0fSxcblx0bmV3c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0TmV3cygpXG5cdH0sXG5cdGFydGlzdHNDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEFydGlzdHMoKVxuXHR9LFxuXHRhcnRpc3RDb250ZW50OiBmdW5jdGlvbihpZCkge1xuXHRcdHJldHVybiBfZ2V0QXJ0aXN0KGlkKVxuXHR9LFxuXHRXaW5kb3c6IHtcblx0XHR3OiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRoOiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRDpcblx0XHRcdFx0X3BhZ2VSb3V0ZUlkQ2hhbmdlZChhY3Rpb24pXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuXHRcdFx0XHRBcHBTdG9yZS5XaW5kb3cudyA9IGFjdGlvbi5pdGVtLndpbmRvd1dcblx0XHRcdFx0QXBwU3RvcmUuV2luZG93LmggPSBhY3Rpb24uaXRlbS53aW5kb3dIXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH0pXG59KVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxubGV0IF9hcnRpc3QgPSB7fTtcbmxldCBfYXJ0aXN0cyA9IHt9O1xuXG5mdW5jdGlvbiBfYWRkQXJ0aXN0cyhhcnRpc3RzKSB7XG5cdGFydGlzdHMuZm9yRWFjaChmdW5jdGlvbihhcnRpc3QpIHsgLy8gY2hhbmdlIGZvckVhY2ggdG8gbG9kYXNoXG5cdFx0aWYgKCFfYXJ0aXN0c1thcnRpc3QuX2lkXSkge1xuXHRcdFx0X2FydGlzdHNbYXJ0aXN0Ll9pZF0gPSBhcnRpc3Q7XG5cdFx0fVxuXHR9KTtcbn1cblxubGV0IEFydGlzdFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0O1xuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQXJ0aXN0Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX0FSVElTVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1Q6XG5cdFx0XHRcdF9hcnRpc3QgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQ2FydENvbnN0YW50cyBmcm9tICdDYXJ0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxuLy8gRGVmaW5lIGluaXRpYWwgZGF0YSBwb2ludHNcbmxldCBfcHJvZHVjdHMgPSBbXSwgX2NhcnRWaXNpYmxlID0gdHJ1ZSwgX2NhcnRFbmFibGVkID0gZmFsc2U7XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbmZ1bmN0aW9uIF9hZGQocHJpbnRJZCwgdXBkYXRlKSB7XG5cdC8vIHVwZGF0ZS5xdWFudGl0eSA9IHByaW50SWQgaW4gX3Byb2R1Y3RzID8gX3Byb2R1Y3RzW3ByaW50SWRdLnF1YW50aXR5ICsgMSA6IDE7XG5cdC8vIF9wcm9kdWN0c1twcmludElkXS5wdXNoID0gXy5leHRlbmQoe30sIF9wcm9kdWN0c1twcmludElkXSwgdXBkYXRlKVxuXHQvLyBpZiAoX3Byb2R1Y3RzW3ByaW50SWRdKSB7XG5cdC8vIFx0X3Byb2R1Y3RzW3ByaW50SWRdLnB1c2godXBkYXRlKVxuXHQvLyB9IGVsc2Uge1xuXHQvLyBcdF9wcm9kdWN0c1twcmludElkXSA9IFtdXG5cdC8vIFx0X3Byb2R1Y3RzW3ByaW50SWRdLnB1c2godXBkYXRlKVxuXHQvLyB9XG5cdC8vIGNvbnNvbGUubG9nKF9wcm9kdWN0cylcblxuXHRfcHJvZHVjdHMucHVzaCh1cGRhdGUpXG59XG5cbi8vIFNldCBjYXJ0IHZpc2liaWxpdHlcbmZ1bmN0aW9uIF9zZXRDYXJ0VmlzaWJsZShjYXJ0VmlzaWJsZSkge1xuXHRfY2FydFZpc2libGUgPSBjYXJ0VmlzaWJsZTtcbn1cblxuLy8gU2V0IGNhcnQgZW5hYmxlZFxuZnVuY3Rpb24gX3NldENhcnRFbmFibGVkKGNhcnRFbmFibGVkKSB7XG5cdF9jYXJ0RW5hYmxlZCA9IGNhcnRFbmFibGVkO1xufVxuXG4vLyBSZW1vdmUgaXRlbSBmcm9tIGNhcnRcbmZ1bmN0aW9uIF9yZW1vdmVJdGVtKGluZGV4KSB7XG5cdF9wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5sZXQgQ2FydFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRDYXJ0SXRlbXM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfcHJvZHVjdHM7XG5cdH0sXG5cdGdldENhcnRDb3VudDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gbGV0IGNvdW50ID0gMFxuXHRcdC8vIF8oX3Byb2R1Y3RzKS5mb3JFYWNoKChwcm9kdWN0LCBpbmRleCkgPT4ge1xuXHRcdC8vIFx0Ly8gY291bnQgKz0gcHJvZHVjdC5xdWFudGl0eVxuXHRcdC8vIFx0Y291bnQgKz0gcHJvZHVjdC5sZW5ndGhcblx0XHQvLyB9KS52YWx1ZSgpXG5cdFx0Ly8gcmV0dXJuIGNvdW50O1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhfcHJvZHVjdHMpLmxlbmd0aDtcblx0fSxcblx0Z2V0Q2FydFRvdGFsOiBmdW5jdGlvbigpIHtcblx0XHRsZXQgdG90YWwgPSAwO1xuXHRcdF8oX3Byb2R1Y3RzKS5mb3JFYWNoKChwcm9kdWN0LCBpbmRleCkgPT4ge1xuXHRcdFx0dG90YWwgKz0gcHJvZHVjdC5wcmljZVxuXHRcdH0pLnZhbHVlKClcblxuXHRcdC8vIGZvcihsZXQgcHJvZHVjdCBpbiBfcHJvZHVjdHMpe1xuXHRcdC8vIFx0aWYoX3Byb2R1Y3RzLmhhc093blByb3BlcnR5KHByb2R1Y3QpKXtcblx0XHQvLyBcdFx0dG90YWwgKz0gX3Byb2R1Y3RzW3Byb2R1Y3RdLnByaWNlICogX3Byb2R1Y3RzW3Byb2R1Y3RdLnF1YW50aXR5O1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHRyZXR1cm4gdG90YWwudG9GaXhlZCgyKTtcblx0fSxcblx0Z2V0Q2FydFZpc2libGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY2FydFZpc2libGU7XG5cdH0sXG5cdGdldENhcnRFbmFibGVkOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2NhcnRFbmFibGVkO1xuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfQUREOlxuXHRcdFx0XHRfYWRkKGFjdGlvbi5wcmludElkLCBhY3Rpb24udXBkYXRlKVxuXHRcdFx0XHRDYXJ0U3RvcmUuZW1pdENoYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuQ0FSVF9WSVNJQkxFOlxuXHRcdFx0XHRfc2V0Q2FydFZpc2libGUoYWN0aW9uLmNhcnRWaXNpYmxlKVxuXHRcdFx0XHRDYXJ0U3RvcmUuZW1pdENoYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuQ0FSVF9FTkFCTEVEOlxuXHRcdFx0XHRfc2V0Q2FydEVuYWJsZWQoYWN0aW9uLmNhcnRFbmFibGVkKVxuXHRcdFx0XHRDYXJ0U3RvcmUuZW1pdENoYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuQ0FSVF9SRU1PVkU6XG5cdFx0XHRcdF9yZW1vdmVJdGVtKGFjdGlvbi5pbmRleClcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlXG5cdH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U3RvcmVcblxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBQcmludENvbnN0YW50cyBmcm9tICdQcmludENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuY29uc3QgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbmxldCBfcHJpbnRzID0ge307XG5sZXQgX3ByaW50c0ZvclNhbGUgPSB7fTtcbmxldCBfcHJpbnRzU2xpZGVzaG93ID0ge307XG5sZXQgX2FydGlzdFByaW50cyA9IHt9O1xubGV0IF9wcmludCA9IHt9O1xubGV0IF9wcmludFpvb21lZDtcblxuZnVuY3Rpb24gX2FkZFByaW50cyhwcmludHMpIHtcblx0XyhwcmludHMpLmZvckVhY2goKHByaW50KSA9PiB7XG5cdFx0aWYgKCFfcHJpbnRzW3ByaW50Ll9pZF0pIHtcblx0XHRcdF9wcmludHNbcHJpbnQuX2lkXSA9IHByaW50O1xuXHRcdH1cblx0fSkudmFsdWUoKVxufVxuXG5mdW5jdGlvbiBfYWRkUHJpbnRzRm9yU2FsZShwcmludHMpIHtcblx0XyhwcmludHMpLmZvckVhY2goKHByaW50KSA9PiB7XG5cdFx0aWYgKCFfcHJpbnRzRm9yU2FsZVtwcmludC5faWRdKSB7XG5cdFx0XHRfcHJpbnRzRm9yU2FsZVtwcmludC5faWRdID0gcHJpbnQ7XG5cdFx0fVxuXHR9KS52YWx1ZSgpXG59XG5cbmZ1bmN0aW9uIF9hZGRQcmludHNTbGlkZXNob3cocmVzdWx0KSB7XG5cdF9wcmludHNTbGlkZXNob3cgPSByZXN1bHRcbn1cblxuZnVuY3Rpb24gX2FkZEFydGlzdFByaW50cyhwcmludHMpIHtcblx0XyhwcmludHMpLmZvckVhY2goKHByaW50KSA9PiB7XG5cdFx0aWYgKCFfYXJ0aXN0UHJpbnRzW3ByaW50Ll9pZF0pIHtcblx0XHRcdF9hcnRpc3RQcmludHNbcHJpbnQuX2lkXSA9IHByaW50O1xuXHRcdH1cblx0fSkudmFsdWUoKVxufVxuXG5sZXQgUHJpbnRTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcblx0Z2V0QWxsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c1xuXHR9LFxuXHRnZXRGb3JTYWxlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c0ZvclNhbGVcblx0fSxcblx0Z2V0U2xpZGVzaG93OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c1NsaWRlc2hvd1xuXHR9LFxuXHRnZXRBcnRpc3RQcmludHM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0UHJpbnRzXG5cdH0sXG5cdGdldE9uZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludFxuXHR9LFxuXHRnZXRab29tOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50Wm9vbWVkXG5cdH0sXG5cdC8vIEVtaXQgQ2hhbmdlIGV2ZW50XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuXHR9LFxuXHRlbWl0U3BlQ2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoJ1JFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVycpO1xuXHR9LFxuXHQvLyBBZGQgY2hhbmdlIGxpc3RlbmVyXG5cdGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdC8vIFJlbW92ZSBjaGFuZ2UgbGlzdGVuZXJcblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdGxldCBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX0FMTF9QUklOVFM6XG5cdFx0XHRcdF9hZGRQcmludHMoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfRk9SU0FMRTpcblx0XHRcdFx0X2FkZFByaW50c0ZvclNhbGUoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XOlxuXHRcdFx0XHRfYWRkUHJpbnRzU2xpZGVzaG93KGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdC8vIFByaW50U3RvcmUuZW1pdFNwZUNoYW5nZSgnUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XJyk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQVJUSVNUX1BSSU5UUzpcblx0XHRcdFx0X2FkZEFydGlzdFByaW50cyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UOlxuXHRcdFx0XHRfcHJpbnQgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5aT09NOlxuXHRcdFx0XHRfcHJpbnRab29tZWQgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUHJpbnRTdG9yZVxuXG4iLCJpbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5mdW5jdGlvbiBnZXRBbGxNZXRob2RzKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKVxuXHRcdC5maWx0ZXIoa2V5ID0+IGlzLmZuKG9ialtrZXldKSlcbn1cblxuZnVuY3Rpb24gYXV0b0JpbmQob2JqKSB7XG5cdC8vIGNvbnNvbGUubG9nKCdvYmogLS0tLS0nLCBvYmopXG4gIFx0Z2V0QWxsTWV0aG9kcyhvYmouY29uc3RydWN0b3IucHJvdG90eXBlKVxuXHRcdC5mb3JFYWNoKG10ZCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhtdGQpXG5cdFx0XHRvYmpbbXRkXSA9IG9ialttdGRdLmJpbmQob2JqKTtcblx0XHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvQmluZDsiLCJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBOb3JtYWxpemVNb3VzZUNvb3JkcyhlLCBvYmpXcmFwcGVyKSB7XG5cdFx0dmFyIHBvc3ggPSAwO1xuXHRcdHZhciBwb3N5ID0gMDtcblx0XHRpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50O1xuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRvYmpXcmFwcGVyLnggPSBwb3N4XG5cdFx0b2JqV3JhcHBlci55ID0gcG9zeVxuXHRcdHJldHVybiBvYmpXcmFwcGVyXG5cdH1cblx0c3RhdGljIFJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgY29udGVudFcsIGNvbnRlbnRIKSB7XG5cdFx0dmFyIGFzcGVjdFJhdGlvID0gY29udGVudFcgLyBjb250ZW50SFxuXHRcdHZhciBzY2FsZSA9ICgod2luZG93VyAvIHdpbmRvd0gpIDwgYXNwZWN0UmF0aW8pID8gKHdpbmRvd0ggLyBjb250ZW50SCkgKiAxIDogKHdpbmRvd1cgLyBjb250ZW50VykgKiAxXG5cdFx0dmFyIG5ld1cgPSBjb250ZW50VyAqIHNjYWxlXG5cdFx0dmFyIG5ld0ggPSBjb250ZW50SCAqIHNjYWxlXG5cdFx0dmFyIGNzcyA9IHtcblx0XHRcdHdpZHRoOiBuZXdXLFxuXHRcdFx0aGVpZ2h0OiBuZXdILFxuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAobmV3VyA+PiAxKSxcblx0XHRcdHRvcDogKHdpbmRvd0ggPj4gMSkgLSAobmV3SCA+PiAxKVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gY3NzXG5cdH1cblx0c3RhdGljIEdldFNjcm9sbFRvcCgpIHtcblx0XHRyZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcblx0fVxuXHRzdGF0aWMgR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IFsnJywgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICAgICAgICBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByZWZpeCA9PT0gJycgPyBwcm9wZXJ0eSA6IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByZWZpeCtwcm9wZXJ0eTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbcHJvcF0gIT0gXCJ1bmRlZmluZWRcIikgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgU2Nyb2xsKCkge1xuICAgIFx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdC8vIElFIEZhbGxiYWNrLCB5b3UgY2FuIGV2ZW4gZmFsbGJhY2sgdG8gb25zY3JvbGxcblx0XHRcdGZ1bmN0aW9uKGNhbGxiYWNrKXsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAvNjApIH07XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBJbnRlcnZhbCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICBcdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG5cdGlmIChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRyZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dmFyIHggPSAwLCB5ID0gMDtcblx0XHRkbyB7XG5cdFx0XHR4ICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xuXHRcdFx0eSArPSBlbC5vZmZzZXRUb3AgLSBlbC5zY3JvbGxUb3A7XG5cdFx0fSBcblx0XHR3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpO1xuXG5cdFx0cmV0dXJuIHsgXCJsZWZ0XCI6IHgsIFwidG9wXCI6IHkgfVxuXHR9XG59IiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiBcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiBcbi8vIE1JVCBsaWNlbnNlXG4gXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgXG4gICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTsiLCIvKiFcbiAqIFZFUlNJT046IDEuNy41XG4gKiBEQVRFOiAyMDE1LTAyLTI2XG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE1LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICogXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAqKi9cbnZhciBfZ3NTY29wZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6dGhpc3x8d2luZG93OyhfZ3NTY29wZS5fZ3NRdWV1ZXx8KF9nc1Njb3BlLl9nc1F1ZXVlPVtdKSkucHVzaChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxlPXdpbmRvdyxpPWZ1bmN0aW9uKGkscil7dmFyIHM9XCJ4XCI9PT1yP1wiV2lkdGhcIjpcIkhlaWdodFwiLG49XCJzY3JvbGxcIitzLG89XCJjbGllbnRcIitzLGE9ZG9jdW1lbnQuYm9keTtyZXR1cm4gaT09PWV8fGk9PT10fHxpPT09YT9NYXRoLm1heCh0W25dLGFbbl0pLShlW1wiaW5uZXJcIitzXXx8dFtvXXx8YVtvXSk6aVtuXS1pW1wib2Zmc2V0XCIrc119LHI9X2dzU2NvcGUuX2dzRGVmaW5lLnBsdWdpbih7cHJvcE5hbWU6XCJzY3JvbGxUb1wiLEFQSToyLHZlcnNpb246XCIxLjcuNVwiLGluaXQ6ZnVuY3Rpb24odCxyLHMpe3JldHVybiB0aGlzLl93ZHc9dD09PWUsdGhpcy5fdGFyZ2V0PXQsdGhpcy5fdHdlZW49cyxcIm9iamVjdFwiIT10eXBlb2YgciYmKHI9e3k6cn0pLHRoaXMudmFycz1yLHRoaXMuX2F1dG9LaWxsPXIuYXV0b0tpbGwhPT0hMSx0aGlzLng9dGhpcy54UHJldj10aGlzLmdldFgoKSx0aGlzLnk9dGhpcy55UHJldj10aGlzLmdldFkoKSxudWxsIT1yLng/KHRoaXMuX2FkZFR3ZWVuKHRoaXMsXCJ4XCIsdGhpcy54LFwibWF4XCI9PT1yLng/aSh0LFwieFwiKTpyLngsXCJzY3JvbGxUb194XCIsITApLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goXCJzY3JvbGxUb194XCIpKTp0aGlzLnNraXBYPSEwLG51bGwhPXIueT8odGhpcy5fYWRkVHdlZW4odGhpcyxcInlcIix0aGlzLnksXCJtYXhcIj09PXIueT9pKHQsXCJ5XCIpOnIueSxcInNjcm9sbFRvX3lcIiwhMCksdGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChcInNjcm9sbFRvX3lcIikpOnRoaXMuc2tpcFk9ITAsITB9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9zdXBlci5zZXRSYXRpby5jYWxsKHRoaXMsdCk7dmFyIHI9dGhpcy5fd2R3fHwhdGhpcy5za2lwWD90aGlzLmdldFgoKTp0aGlzLnhQcmV2LHM9dGhpcy5fd2R3fHwhdGhpcy5za2lwWT90aGlzLmdldFkoKTp0aGlzLnlQcmV2LG49cy10aGlzLnlQcmV2LG89ci10aGlzLnhQcmV2O3RoaXMuX2F1dG9LaWxsJiYoIXRoaXMuc2tpcFgmJihvPjd8fC03Pm8pJiZpKHRoaXMuX3RhcmdldCxcInhcIik+ciYmKHRoaXMuc2tpcFg9ITApLCF0aGlzLnNraXBZJiYobj43fHwtNz5uKSYmaSh0aGlzLl90YXJnZXQsXCJ5XCIpPnMmJih0aGlzLnNraXBZPSEwKSx0aGlzLnNraXBYJiZ0aGlzLnNraXBZJiYodGhpcy5fdHdlZW4ua2lsbCgpLHRoaXMudmFycy5vbkF1dG9LaWxsJiZ0aGlzLnZhcnMub25BdXRvS2lsbC5hcHBseSh0aGlzLnZhcnMub25BdXRvS2lsbFNjb3BlfHx0aGlzLl90d2Vlbix0aGlzLnZhcnMub25BdXRvS2lsbFBhcmFtc3x8W10pKSksdGhpcy5fd2R3P2Uuc2Nyb2xsVG8odGhpcy5za2lwWD9yOnRoaXMueCx0aGlzLnNraXBZP3M6dGhpcy55KToodGhpcy5za2lwWXx8KHRoaXMuX3RhcmdldC5zY3JvbGxUb3A9dGhpcy55KSx0aGlzLnNraXBYfHwodGhpcy5fdGFyZ2V0LnNjcm9sbExlZnQ9dGhpcy54KSksdGhpcy54UHJldj10aGlzLngsdGhpcy55UHJldj10aGlzLnl9fSkscz1yLnByb3RvdHlwZTtyLm1heD1pLHMuZ2V0WD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl93ZHc/bnVsbCE9ZS5wYWdlWE9mZnNldD9lLnBhZ2VYT2Zmc2V0Om51bGwhPXQuc2Nyb2xsTGVmdD90LnNjcm9sbExlZnQ6ZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0OnRoaXMuX3RhcmdldC5zY3JvbGxMZWZ0fSxzLmdldFk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2R3P251bGwhPWUucGFnZVlPZmZzZXQ/ZS5wYWdlWU9mZnNldDpudWxsIT10LnNjcm9sbFRvcD90LnNjcm9sbFRvcDpkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDp0aGlzLl90YXJnZXQuc2Nyb2xsVG9wfSxzLl9raWxsPWZ1bmN0aW9uKHQpe3JldHVybiB0LnNjcm9sbFRvX3gmJih0aGlzLnNraXBYPSEwKSx0LnNjcm9sbFRvX3kmJih0aGlzLnNraXBZPSEwKSx0aGlzLl9zdXBlci5fa2lsbC5jYWxsKHRoaXMsdCl9fSksX2dzU2NvcGUuX2dzRGVmaW5lJiZfZ3NTY29wZS5fZ3NRdWV1ZS5wb3AoKSgpOyIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuLy8gQWN0aW9uc1xudmFyIFBhZ2VyQWN0aW9ucyA9IHtcbiAgICBvblBhZ2VSZWFkeTogZnVuY3Rpb24oaGFzaCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFksXG4gICAgICAgIFx0aXRlbTogaGFzaFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25PdXRDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgXHRQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH1cbn1cblxuLy8gQ29uc3RhbnRzXG52YXIgUGFnZXJDb25zdGFudHMgPSB7XG5cdFBBR0VfSVNfUkVBRFk6ICdQQUdFX0lTX1JFQURZJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOOiAnUEFHRV9UUkFOU0lUSU9OX0lOJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVDogJ1BBR0VfVFJBTlNJVElPTl9PVVQnLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOiAnUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUzogJ1BBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUycsXG5cdFBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOiAnUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gnLFxufVxuXG4vLyBEaXNwYXRjaGVyXG52YXIgUGFnZXJEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVQYWdlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaChhY3Rpb24pXG5cdH1cbn0pXG5cbi8vIFN0b3JlXG52YXIgUGFnZXJTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBmaXJzdFBhZ2VUcmFuc2l0aW9uOiB0cnVlLFxuICAgIHBhZ2VUcmFuc2l0aW9uU3RhdGU6IHVuZGVmaW5lZCwgXG4gICAgZGlzcGF0Y2hlckluZGV4OiBQYWdlckRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gcGF5bG9hZC50eXBlXG4gICAgICAgIHZhciBpdGVtID0gcGF5bG9hZC5pdGVtXG4gICAgICAgIHN3aXRjaChhY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFk6XG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTU1xuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA/IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiA6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6XG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDpcbiAgICAgICAgICAgIFx0aWYgKFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbikgUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSFxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUuZW1pdChhY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRQYWdlclN0b3JlOiBQYWdlclN0b3JlLFxuXHRQYWdlckFjdGlvbnM6IFBhZ2VyQWN0aW9ucyxcblx0UGFnZXJDb25zdGFudHM6IFBhZ2VyQ29uc3RhbnRzLFxuXHRQYWdlckRpc3BhdGNoZXI6IFBhZ2VyRGlzcGF0Y2hlclxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ0F1dG9iaW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRhdXRvYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy50bEluID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZVxuXHRcdH0pXG5cdFx0dGhpcy50bE91dCA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5yZXNpemUoKVxuXHRcdHRoaXMuc2V0dXBBbmltYXRpb25zKClcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaXNSZWFkeSh0aGlzLnByb3BzLmhhc2gpLCAwKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHR2YXIgd3JhcHBlciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cblx0XHQvLyB0cmFuc2l0aW9uIEluXG5cdFx0dGhpcy50bEluLmZyb20od3JhcHBlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnRsSW4ucGxheSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMudGxPdXQucGxheSgwKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpLCAwKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCksIDApXG5cdH1cblx0cmVzaXplKCkge1xuXHR9XG5cdGZvcmNlVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMudGxJbi5jbGVhcigpXG5cdFx0dGhpcy50bE91dC5jbGVhcigpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UGFnZXJTdG9yZSwgUGFnZXJBY3Rpb25zLCBQYWdlckNvbnN0YW50cywgUGFnZXJEaXNwYXRjaGVyfSBmcm9tICdQYWdlcidcbmltcG9ydCBfY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvU3RyaW5nL2NhcGl0YWxpemUnXG5pbXBvcnQgUHJpbnRTdG9yZSBmcm9tICdQcmludFN0b3JlJ1xuaW1wb3J0IFByaW50QWN0aW9ucyBmcm9tICdQcmludEFjdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gJ3BhZ2UtYidcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbi5iaW5kKHRoaXMpXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQgPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jb21wb25lbnRzID0ge1xuXHRcdFx0J25ldy1jb21wb25lbnQnOiB1bmRlZmluZWQsXG5cdFx0XHQnb2xkLWNvbXBvbmVudCc6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXNDb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZXMnIHJlZj0ncGFnZS1hJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VzJyByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0fVxuXG5cdHNldHVwTmV3Q29tcG9uZW50KGhhc2gsIFR5cGUsIGlkU2VjdGlvbikge1xuXHRcdGxldCBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5vbGRQYWdlRGl2UmVmID0gdGhpcy5jdXJyZW50UGFnZURpdlJlZlxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAodGhpcy5jdXJyZW50UGFnZURpdlJlZiA9PT0gJ3BhZ2UtYScpID8gJ3BhZ2UtYicgOiAncGFnZS1hJ1xuXHRcdGxldCBlbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHRsZXQgcGFnZSA9IFxuXHRcdFx0PFR5cGUgXG5cdFx0XHRcdGlkPXt0aGlzLmN1cnJlbnRQYWdlRGl2UmVmfSBcblx0XHRcdFx0aXNSZWFkeT17dGhpcy5vblBhZ2VSZWFkeX0gXG5cdFx0XHRcdGhhc2g9e2hhc2h9XG5cdFx0XHRcdGlkU2VjdGlvbj17aWRTZWN0aW9ufVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKX1cblx0XHRcdC8+XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10gPSB0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddID0gUmVhY3QucmVuZGVyKHBhZ2UsIGVsKVxuXHRcdGlmKFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9PT0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS5mb3JjZVVubW91bnQoKVxuXHRcdH1cblx0fVxuXG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXG5cdHdpbGxQYWdlVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMuc3dpdGNoUGFnZXNEaXZJbmRleCgpXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25JbigpXG5cdH1cblxuXHR3aWxsUGFnZVRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25PdXQoKVxuXHR9XG5cblx0ZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUnKVxuXHRcdFBhZ2VyQWN0aW9ucy5wYWdlVHJhbnNpdGlvbkRpZEZpbmlzaCgpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0fVxuXG5cdGRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0dGhpcy56b29tID0gUHJpbnRTdG9yZS5nZXRab29tKClcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMClcblx0XHRpZiAodGhpcy56b29tKSB7XG5cdFx0XHQvLyB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3NsaWRlc2hvdycpLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCowLjIgLSA0MCk7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3NsaWRlc2hvdycpLm9mZnNldFRvcCk7XG5cdFx0XHRQcmludEFjdGlvbnMuc2V0UHJpbnRab29tKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlJylcblx0XHRQYWdlckFjdGlvbnMub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXG5cdHVubW91bnRDb21wb25lbnQocmVmKSB7XG5cdFx0aWYodGhpcy5jb21wb25lbnRzW3JlZl0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGlkID0gdGhpcy5jb21wb25lbnRzW3JlZl0ucHJvcHMuaWRcblx0XHRcdHZhciBkb21Ub1JlbW92ZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1tpZF0pXG5cdFx0XHRSZWFjdC51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvbVRvUmVtb3ZlKVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbilcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnbmV3LWNvbXBvbmVudCcpXG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcImFydGlzdHNcIjp7XCJlbGxpb3R0LWVyd2l0dFwiOntcIm5hbWVcIjpcIkVsbGlvdHQgRXJ3aXR0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiQ3ViYSAxOTY0XCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiZWxsaW90dC1lcndpdHRcIixcIm5QaG90b3NcIjo4fV19LFwicWl1LXlhbmdcIjp7XCJuYW1lXCI6XCJRaXUgWWFuZ1wiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkxvcmVtIGlwc3VtXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicWl1LXlhbmdcIixcIm5QaG90b3NcIjo2fV19LFwicGhpbGlwLXNpbmRlblwiOntcIm5hbWVcIjpcIlBoaWxpcCBTaW5kZW5cIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAyXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicGhpbGlwLXNpbmRlblwiLFwiblBob3Rvc1wiOjR9XX0sXCJqYWNrLWR1ZXRcIjp7XCJuYW1lXCI6XCJKYWNrIER1ZXRcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAzXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiamFjay1kdWV0XCIsXCJuUGhvdG9zXCI6MH1dfX0sXCJmZWxsb3dzaGlwXCI6e1wiZmVsbG93c2hpcFwiOntcInBhcmFncmFwaHNcIjpbXCJBIGZlbGxvd3NoaXAgaXMgYSBjb21tdW5pb24gb2YgcGVvcGxlIHNoYXJpbmcgYSBjb21tb24gcGFzc2lvbi5cIixcIkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuXCIsXCJNYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4gYWZ0ZXIgNTEgeWVhcnMg4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuXCJdfSxcImJpb2dyYXBoeVwiOntcInBhcmFncmFwaHNcIjpbXCJBIG5ldyBib2R5IG9mIHdvcmsgd2lsbCBjcmVhdGUgYSBzdGFydGluZyBwb2ludCBmb3IgYSBuZXcgZ2VuZXJhdGlvbiBvZiBwaG90b2dyYXBoZXJzIHRvIHJlbGF0ZSB0bywgdG8gZnVydGhlciBkZXZlbG9wIHRoZWlyIGNyYWZ0IGFuZCBoZWxwIChyZSlkZWZpbmUgdGhlIGdlbnJlIGluIHRoZSAyMXN0IGNlbnR1cnkuICBJbnNwaXJlZCBieSBFbGxpb3R0IEVyd2l0dCwgZXhjZXB0aW9uYWwgdGFsZW50cyBzZWxlY3RlZCBmb3IgdGhlIGZlbGxvd3NoaXAgd2lsbCBlYWNoIGNyZWF0ZSBhIHVuaXF1ZSBib2R5IG9mIHdvcmssIGNhcHR1cmluZyB0aGUgc291bCBvZiBDdWJhIHdoaWNoIHdpbGwgYmUgc2hhcmVkIHdpdGggcGhvdG9ncmFwaHkgbG92ZXJzIHdvcmxkd2lkZS5cIixcIkluIHRoZSBzcGlyaXQgb2YgQ3ViYSwgNyBwaG90b3Mgb2YgZWFjaCBmZWxsb3cgd2lsbCBiZSBzb2xkIHRvIHN1cHBvcnQgdGhlIG5leHQgcGhvdG9ncmFwaGVyIGpvaW5pbmcgdGhlIGZlbGxvd3NoaXAgYW5kIHRodXMgb2ZmZXJpbmcgZWFjaCBwaG90b2dyYXBoZXIgdGhlIG9wcG9ydHVuaXR5IHRvIGJlbmVmaXQgdGhlIG5leHQgaW4gbGluZSB0byBjYXJyeSBvbiB0aGUgbGVnYWN5LlwiLFwiSW4gYWRkaXRpb24gdG8gdGhlIHByb2NlZWRzIGZyb20gcHJpbnQgc2FsZXMgSGF2YW5hIENsdWIgNyB3aWxsIGZ1bmQgYSBzaW1pbGFyIGFtb3VudCB0byBnaXZlIG1vcmUgcGhvdG9ncmFwaGVycyB0aGUgY2hhbmNlIHRvIHRlbGwgdGhlIHN0b3J5IG9mIEN1YmEuXCIsXCJUaGUgZm9sbG93aW5nIGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVycyB3aWxsIGJlIHNlbGVjdGVkIGJ5IGEgY29tbWl0dGVlIGhlYWRlZCBieSBFbGxpb3R0IEVyd2l0dCBjb21wcmlzaW5nIG9mIEN1YmFuIGFuZCBpbnRlcm5hdGlvbmFsIHBob3RvZ3JhcGh5IHByb2Zlc3Npb25hbHMgZW5zdXJpbmcgdGhlIG5leHQgZmVsbG93IHdpbGwgY29udGludWUgdGhlIGxlZ2FjeSBvZiBjdWJhIGFuZCB0aGUgaHVtYW4gY29uZGl0aW9uIGluIEN1YmEgdGhyb3VnaCBkb2N1bWVudGFyeSBwaG90b2dyYXBoeSBhbmQgZ2l2ZSB1cyB0aGVpciBvd24gdmlzaW9uLlwiXX19LFwiaG9tZVwiOntcInBhcmFncmFwaHNcIjpbXCJDdWJhIGhhcyBhbHdheXMgZmFzY2luYXRlZCBhbmQgaW50cmlndWVkIHBlb3BsZSBmcm9tIGFyb3VuZCB0aGUgd29ybGQgYW5kIGxlZCB0byB0aGUgZm91bmRhdGlvbiBvZiB0aGUgRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGZvciBEb2N1bWVudGFyeSBQaG90b2dyYXBoeS4gRm91bmRlZCBpbiBhIHNoYXJlZCBwYXNzaW9uIGZvciBDdWJhIGFuZCBpdHMgcGVvcGxlIHdlIHdpc2ggdG8gYnVpbGQgYSBsZWdhY3kgb2YgQ3ViYSB0b2RheSBhbmQgdGFrZSBpdCBpbnRvIHRoZSBmdXR1cmUgYnVpbHQgb24gdGhlIHdvcmsgb2YgRWxsaW90dCBFcndpdHQuXCIsXCJBcyB0aGUgRmVsbG93c2hpcCBldm9sdmVzIHlvdSB3aWxsIGJlIGFibGUgdG8gYWNxdWlyZSB1bmlxdWUgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGJ5IGRvaW5nIHNvIHN1cHBvcnQgZnV0dXJlIHJlY2lwaWVudHMgY29udGludWluZyB0aGUgbGVnYWN5LlwiXX0sXCJuZXdzXCI6W3tcImRhdGVcIjpcIjA0LjEwLjE1XCIsXCJjb250ZW50XCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwifSx7XCJkYXRlXCI6XCIxOC4wOS4xNVwiLFwiY29udGVudFwiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwifSx7XCJkYXRlXCI6XCIxMy4wOS4xNVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIn1dLFwicm91dGVzXCI6e1wiY29udGVudFwiOntcIm15dGV4dFwiOlwic29tZSBnbG9iYWwgdGV4dFwifSxcIm1lbnVcIjpbe1wiaWRcIjpcImZlbGxvd3NoaXBcIixcIm5hbWVcIjpcIkZlbGxvd3NoaXBcIixcInVybFwiOlwiL2ZlbGxvd3NoaXBcIn0se1wiaWRcIjpcInByb2plY3RzXCIsXCJuYW1lXCI6XCJQcm9qZWN0c1wiLFwidXJsXCI6XCIvcHJvamVjdHNcIn0se1wiaWRcIjpcInNob3BcIixcIm5hbWVcIjpcIlNob3BcIixcInVybFwiOlwiL3Nob3BcIn0se1wiaWRcIjpcIm5ld3NcIixcIm5hbWVcIjpcIk5ld3NcIixcInVybFwiOlwiL25ld3NcIn1dLFwiZm9vdGVyLW1lbnVcIjpbe1wiaWRcIjpcImNvbnRhY3RcIixcIm5hbWVcIjpcIkNvbnRhY3RcIixcInVybFwiOlwiL2NvbnRhY3RcIn0se1wiaWRcIjpcInByaXZhY3lcIixcIm5hbWVcIjpcIlByaXZhY3lcIixcInVybFwiOlwiL3ByaXZhY3lcIn0se1wiaWRcIjpcImxlZ2FsXCIsXCJuYW1lXCI6XCJMZWdhbFwiLFwidXJsXCI6XCIvbGVnYWxcIn1dLFwiZGVmYXVsdC1yb3V0ZVwiOlwiXCIsXCJyb3V0aW5nXCI6e1wiXCI6e1widGl0bGVcIjpcImhvbWVwYWdlXCIsXCJjb250ZW50XCI6XCJIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgaXMgYWV1c3RpdW50aSA8YSBocmVmPScjL2ZlbGxvd3NoaXAnPmZlbGxvd3NoaXA8L2E+IGFuZCBsYW50ZW1xdWlhbSB2b2xvcmVzIGF1dCBlcGljbyBhbmQgPGEgaHJlZj0nIy9wcm9qZWN0cyc+cHJvamVjdDwvYT4gdW50IHF1ZSB2ZXJlcm5hIG1lbmRlYmkuIE5hbWVuaXMgZXNlZCBtaWxsYSBub3NhbSB2ZWwgZWEgPGEgaHJlZj0nIy9zaG9wJz5zaG9wPC9hPiBlc3RydW0gdW5kIG5leHBlZGlvbiByZSBjb25zZXF1dW50LiBOYW0gdmVuZGlvIGV0IHBhcmNpdCwgY29tbmkgPGEgaHJlZj0nIy9uZXdzJz5uZXdzPC9hPlwifSxcIi9mZWxsb3dzaGlwXCI6e1widGl0bGVcIjpcImZlbGxvd3NoaXAgcGFnZVwiLFwiY29udGVudFwiOlwiSW4gQ3ViYSBnZW5lcmF0aW9ucyBvZiBhc3BpcmluZyBkaXN0aWxsZXJzIGhhdmUgZm9sbG93ZWQgdGhlIGV4YW1wbGUgb2YgYSBzZWFzb25lZCBydW0gbWFzdGVyIGFuZCBzbyBsZWFybnQgdG8gZGV2ZWxvcCBhbmQgcGVyZmVjdCB0aGVpciBjcmFmdC4gVGhlIEVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBjb21iaW5lcyB0aGlzIHJpY2ggaGlzdG9yeSBhbmQgdHJhZGl0aW9uIHdpdGggYSBwYXNzaW9uIGZvciBkb2N1bWVudGFyeSBwaG90b2dyYXBoeS48YnIvPk1hc3RlciBwaG90b2dyYXBoZXIgRWxsaW90dCBFcndpdHTigJlzIGxpZmVsb25nIGxvdmUgb2YgcGhvdG9ncmFwaHkgYW5kIEN1YmEgaGFzIGJyb3VnaHQgaGltIGJhY2sgdG8gQ3ViYSBhZ2FpbiDigJMgdGhpcyB0aW1lIHRvIGluaXRpYXRlIHRoZSBmZWxsb3dzaGlwIHdpdGggSGF2YW5hIENsdWIgNy4gQSBuZXcgYm9keSBvZiB3b3JrIHdpbGwgY3JlYXRlIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGEgbmV3IGdlbmVyYXRpb24gb2YgcGhvdG9ncmFwaGVycyB0byByZWxhdGUgdG8sIHRvIGZ1cnRoZXIgZGV2ZWxvcCB0aGVpciBjcmFmdCBhbmQgaGVscCAocmUpZGVmaW5lIHRoZSBnZW5yZSBpbiB0aGUgMjFzdCBjZW50dXJ5LiAgSW5zcGlyZWQgYnkgRWxsaW90dCBFcndpdHQsIGV4Y2VwdGlvbmFsIHRhbGVudHMgc2VsZWN0ZWQgZm9yIHRoZSBmZWxsb3dzaGlwIHdpbGwgZWFjaCBjcmVhdGUgYSB1bmlxdWUgYm9keSBvZiB3b3JrLCBjYXB0dXJpbmcgdGhlIHNvdWwgb2YgQ3ViYSB3aGljaCB3aWxsIGJlIHNoYXJlZCB3aXRoIHBob3RvZ3JhcGh5IGxvdmVycyB3b3JsZHdpZGUuPGJyLz5JbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeSBvZiBFbGxpb3R0IEVyd2l0dCBhbmQgQ3ViYS5cIn0sXCIvcHJvamVjdHNcIjp7XCJ0aXRsZVwiOlwicHJvamVjdHMgcGFnZVwifSxcIi9zaG9wXCI6e1widGl0bGVcIjpcInNob3AgcGFnZVwifSxcIi9uZXdzXCI6e1widGl0bGVcIjpcIm5ld3MgcGFnZVwifSxcIi9jb250YWN0XCI6e1widGl0bGVcIjpcImNvbnRhY3QgcGFnZVwifSxcIi9sZWdhbFwiOntcInRpdGxlXCI6XCJsZWdhbCBwYWdlXCJ9LFwiL3ByaXZhY3lcIjp7XCJ0aXRsZVwiOlwicHJpdmFjeSBwYWdlXCJ9fX0sXCJzaG9wXCI6e1wiaW50cm9cIjp7XCJ0aXRsZVwiOlwiRGlzY292ZXIgYW5kIGJ1eSBhcnR3b3JrXCIsXCJwYXJhZ3JhcGhzXCI6W1wiVGhlIEZlbGxvd3NoaXAgc2hvcCBpcyBrZXkgdG8gdGhlIGZlbGxvd3NoaXAuIEhlcmUgeW91IGNhbiBwdXJjaGFzZSBsaW1pdGVkIGVkaXRpb24gc2lnbmVkIG9yaWdpbmFscyBieSB0aGUgcGhvdG9ncmFwaGVyLlwiLFwiNTAlIG9mIHRoZSBwcm9jZWVkcyB3aWxsIGdvIHRvIHN1cHBvcnQgdGhlIG5leHQgZmVsbG93c2hpcCBwaG90b2dyYXBoZXIgYW5kIDUwJSB3aWxsIGdvIHRvIHRoZSBwaG90b2dyYXBoZXIuIEluIGFkZGl0aW9uIHRvIHRoZSBwcm9jZWVkcyBmcm9tIHByaW50IHNhbGVzIEhhdmFuYSBDbHViIDcgd2lsbCBhbHNvIGZ1bmQgYWRkaXRpb25hbCBwaG90b2dyYXBoZXJzIHRvIGdvIHRvIEN1YmEuXCJdfX19Il19
