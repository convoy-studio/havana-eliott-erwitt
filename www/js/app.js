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
	},

	// Receive be2bill form
	receiveForm: function receiveForm(data) {
		_AppDispatcher2['default'].handleServerAction({
			actionType: _CartConstants2['default'].RECEIVE_FORM,
			data: data
		});
	},

	// Receive be2bill result verification
	receiveCheck: function receiveCheck(data) {
		console.log(data);
		// AppDispatcher.handleServerAction({
		// 	actionType: CartConstants.RECEIVE_CHECK,
		// 	data: data
		// })
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

	generatePayButton: function generatePayButton(options) {
		var data = 'total=' + options.total;

		fetch('http://localhost/freelance/Havana/php/buy.php', {
			method: 'post',
			headers: {
				'Accept': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		}).then(function (response) {
			return response.text();
		}).then(function (body) {
			_CartActions2['default'].receiveForm(body);
		})['catch'](function (err) {
			console.log('parsing failed', err);
		});
	},

	checkResponse: function checkResponse(options) {
		var data = '';
		for (var key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}
		console.log(data);
		fetch('http://localhost/freelance/Havana/php/check.php', {
			method: 'post',
			headers: {
				'Accept': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		}).then(function (response) {
			return response.text();
		}).then(function (body) {
			_CartActions2['default'].receiveCheck(body);
		})['catch'](function (err) {
			console.log('parsing failed', err);
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

var _Utils = require('./../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var scroll = _Utils2['default'].Scroll();

var Page = (function (_BasePage) {
	_inherits(Page, _BasePage);

	function Page(props) {
		_classCallCheck(this, Page);

		_get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);

		// console.log('scrollTo 0')
		// window.scrollTo(0, 0)

		// console.log('cancel raf')
		// window.cancelAnimationFrame(window.scrollRaf)
		// window.cancelAnimationFrame(window.pageScrollRaf)
		// window.scrollTo(0,0)

		this.resize = this.resize.bind(this);
		this.sTop = 0;
		this.cTop = 0;
		this.pTop = 0;
		this.pageScrollIndex = 0;
		this.pageScrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');
		this._pageRafBinded = this.pageRaf.bind(this);
	}

	_createClass(Page, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].WINDOW_RESIZE, this.resize);
			_get(Object.getPrototypeOf(Page.prototype), 'componentWillMount', this).call(this);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);

			// this.pageRaf()
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
	}, {
		key: 'pageRaf',
		value: function pageRaf() {
			if (this.pageScrollIndex % 3) this.pageScrollOk = true;else this.pageScrollOk = true;
			this.pageScrollIndex++;

			if (this.pageScrollOk) {
				this.pageHandleScroll();
			}

			window.pageScrollRaf = scroll(this._pageRafBinded);
		}
	}, {
		key: 'pageHandleScroll',
		value: function pageHandleScroll() {
			var e = undefined;
			this.sTop = _Utils2['default'].GetScrollTop();
			this.cTop += .1 * (this.sTop - this.cTop);
			this.pTop = -this.cTop;
			if (document.querySelector('.js-smooth')) document.querySelector('.js-smooth').style[this.transform] = 'translate3d(0, ' + this.pTop + 'px, 0)';
		}
	}]);

	return Page;
})(_BasePage3['default']);

exports['default'] = Page;
module.exports = exports['default'];

},{"./../../pager/components/BasePage":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePage.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/PagesContainer.js":[function(require,module,exports){
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

var _Result = require('./pages/Result');

var _Result2 = _interopRequireDefault(_Result);

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
			var oldHash = _Router2['default'].getOldHash();
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
					if (hash.parts.length > 1) {
						type = _Result2['default'];
						id = hash.targetId;
					} else {
						type = _Payment2['default'];
					}
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
			this.setupNewComponent(hash.parent, type, id, oldHash);
		}
	}]);

	return PagesContainer;
})(_BasePager3['default']);

exports['default'] = PagesContainer;
module.exports = exports['default'];

},{"./../../pager/components/BasePager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePager.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./pages/Contact":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js","./pages/Fellowship":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Fellowship.js","./pages/Friends":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Friends.js","./pages/Gallery":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Gallery.js","./pages/Home":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js","./pages/Legal":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Legal.js","./pages/News":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/News.js","./pages/Notfound":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Notfound.js","./pages/Payment":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Payment.js","./pages/Print":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Print.js","./pages/Privacy":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js","./pages/Project":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Project.js","./pages/Projects":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js","./pages/Result":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Result.js","./pages/Shop":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js":[function(require,module,exports){
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
		this.eShow = [];
		this.speed = .2;
		this.nImageLoaded = 0;
		this.sTop = 0;
		this.cTop = 0;
		this.eTop = 0;
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

			this._fellowship = document.querySelector('.fellowship');
			this._limit = document.querySelector('.js-limit');
			this._video = document.querySelector('.fellowship__video');
			this.artistOffsetTop = document.querySelector('.fellowship__artist').offsetTop;

			document.querySelector('.page').style.height = this._fellowship.offsetHeight + 'px';

			this._loadImages();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.cancelAnimationFrame(this.scrollRaf);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			this.tlIn.addCallback(this._rafBinded, 0);
			this.tlIn.to(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0);
			this.tlIn.from(wrapper, 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);

			// transition Out
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(wrapper, 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
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
					{ className: 'video fellowship__video' },
					_react2['default'].createElement(
						'video',
						{ autoPlay: true, loop: true, muted: true, className: 'video__file' },
						_react2['default'].createElement('source', { src: '/static/videos/bg-home.mp4', type: 'video/mp4' }),
						_react2['default'].createElement('source', { src: '/static/videos/bg-home.webm', type: 'video/webm' })
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'fellowship js-smooth' },
					_react2['default'].createElement(
						'section',
						{ className: 'fellowship__presentation' },
						_react2['default'].createElement(
							'p',
							{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--big paragraph--center', 'data-ease': '.0' },
							'A fellowship is a communion of people sharing a common passion.'
						),
						_react2['default'].createElement(
							'p',
							{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small paragraph--center' },
							'In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.'
						),
						_react2['default'].createElement(
							'p',
							{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--medium paragraph--center' },
							'Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7.'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'paragraph__row js-limit' },
							_react2['default'].createElement(
								'div',
								{ 'data-speed': '.05', className: 'js-parallax paragraph__column paragraph__column--left' },
								_react2['default'].createElement('img', { className: 'fellowship__elliott', src: '../assets/images/elliott-erwitt.jpg' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'paragraph__column' },
								_react2['default'].createElement(
									'p',
									{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small' },
									'A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.'
								)
							)
						),
						_react2['default'].createElement(
							'p',
							{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--medium paragraph--center' },
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
									{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small' },
									'In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.'
								)
							),
							_react2['default'].createElement(
								'div',
								{ 'data-speed': '.1', className: 'js-parallax paragraph__column paragraph__column--right' },
								_react2['default'].createElement('img', { className: 'fellowship__elliott', src: '/static/img/ERE2015002W00033-36A_medium.jpg' })
							)
						),
						_react2['default'].createElement(
							'p',
							{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small paragraph--center' },
							'The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision.'
						)
					),
					_react2['default'].createElement(
						'div',
						{ 'data-speed': '.1', className: 'js-parallax discover fellowship__discover', onClick: this._goToBiographyBinded },
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
							{ 'data-speed': '.1', className: 'js-parallax fellowship__artistname paragraph paragraph--big paragraph--center', 'data-ease': '.0' },
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
									{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small' },
									'Elliott Erwitt is one of the world’s most popular and admired photographers. A visual poet and humorist of everyday life, he has created some of the most memorable images of our time, from his observations of daily life at street level, to portraits of the iconic personalities including Marilyn Monroe on the set of the film The Misfits and Truman Capote’s epic 1966 Black and White Ball in New York City. He has photographed Khrushchev and Nixon arguing in Moscow, Fidel Castro and Che Guevara in Havana and President JFK in the Oval office.'
								)
							),
							_react2['default'].createElement(
								'div',
								{ 'data-speed': '.1', className: 'js-parallax paragraph__column', onClick: this._toggleVideoBinded },
								_react2['default'].createElement(
									'video',
									{ className: 'fellowship__interview' },
									_react2['default'].createElement('source', { src: '/static/videos/bg-home.mp4', type: 'video/mp4' }),
									_react2['default'].createElement('source', { src: '/static/videos/bg-home.webm', type: 'video/webm' })
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
							{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small paragraph--center' },
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
									{ 'data-speed': '.2', className: 'js-parallax paragraph' },
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
									{ 'data-speed': '.2', className: 'js-parallax paragraph paragraph--small' },
									'To date Erwitt has produced more than 25 photography books including Eastern Europe (1965), The Private Experience (1974), Personal Exposures (1988), To the Dogs (1992), and Personal Best (2010). His photographs have been featured in solo shows all over the world, including at the ICP and The Museum of Modern Art, New York; The Art Institute of Chicago; The Barbican, London, and The Reina Sofia Museum, Madrid. Erwitt lives and works in New York City and likes children and dogs.'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'button js-parallax' },
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
				this._handleScroll();
			}

			// window.scrollRaf = scroll(this._rafBinded);
			this.scrollRaf = scroll(this._rafBinded);
		}
	}, {
		key: '_handleScroll',
		value: function _handleScroll() {
			var _this = this;

			var e = undefined;
			this.sTop = _Utils2['default'].GetScrollTop();
			this.cTop += .1 * (this.sTop - this.cTop);
			e = -this.cTop;
			if (this._fellowship) this._fellowship.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';

			if (this._video && this._limit) {
				this.scrollTop = _Utils2['default'].GetScrollTop();
				this.videoOpacity = _Utils2['default'].Interval(1 - this.scrollTop / (this._limit.offsetTop + 160 - window.innerHeight), 0, 1);
				this._video.style.opacity = this.videoOpacity;
			}

			_((0, _domquery2['default'])('.js-parallax')).forEach(function (el, index) {
				_this.lTop = (0, _offset2['default'])(el).top;

				if (!_this.eShow[index]) {
					_this.eShow[index] = false;
				}

				// in viewport
				if (_this.lTop - window.innerHeight < 0 && !_this.eShow[index]) {
					_this.eShow[index] = true;
					_gsap2['default'].to(el, 0.6, { y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random() * 0.2 });
				}

				// off viewport
				if (_this.lTop - window.innerHeight > 0 && _this.eShow[index]) {
					_this.eShow[index] = false;
					_gsap2['default'].set(el, { y: 100, opacity: 0 });
				}
			}).value();
		}
	}, {
		key: '_loadImages',
		value: function _loadImages() {
			var _this2 = this;

			var that = this,
			    file = undefined;
			this.max = _.size((0, _domquery2['default'])('.fellowship img'));
			_((0, _domquery2['default'])('.fellowship img')).forEach((function (img, index) {
				file = new Image();
				file.onload = _this2._onImageLoaded.bind(_this2);
				// file.src = '/static/img/'+img.src+'.jpg'
				file.src = img.src;
			}).bind(this)).value();
		}
	}, {
		key: '_onImageLoaded',
		value: function _onImageLoaded(e) {
			this.nImageLoaded++;

			if (this.nImageLoaded >= this.max) {
				document.querySelector('.page--fellowship').style.height = this._fellowship.offsetHeight + 'px';
			}
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
		this.speed = 2;
		this.sTop = 0;
		this.cTop = 0;
		this.eShow = [];
		// this.eTop = []
		this.eTop = 0;
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

			this._gallery = document.querySelector('.gallery');
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
			this.tlIn.addCallback(this._rafBinded, 0);
			this.tlIn.to(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0);
			this.tlIn.from(document.querySelector('.submenu'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);
			this.tlIn.set(wrapper, { opacity: 1, ease: Power2.easeInOut }, 0);

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'updateAnimationOut',
		value: function updateAnimationOut() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			this.tlOut.clear();
			this.tlOut.staggerTo(_.shuffle((0, _domquery2['default'])('.gallery__item')), 0.6, { opacity: 0, ease: Power2.easeOut }, 0.01);
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(wrapper, 0.6, { opacity: 0, ease: Power2.easeOut }, '-=0.6');
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
					{ className: 'gallery js-smooth' },
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

			var e = undefined;
			this.sTop = _Utils2['default'].GetScrollTop();
			this.cTop += .1 * (this.sTop - this.cTop);
			e = -this.cTop;
			if (this._gallery) {
				this._gallery.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
			}

			_((0, _domquery2['default'])('.gallery__item')).forEach(function (el, index) {
				_this.lTop = (0, _offset2['default'])(el).top;
				if (!_this.eShow[index]) {
					_this.eShow[index] = false;
					// TweenMax.set(el, {y: 100, opacity: 0})
				}

				// in viewport
				if (_this.lTop - window.innerHeight < 0 && !_this.eShow[index]) {
					_this.eShow[index] = true;
					TweenMax.to(el, 0.6, { y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random() * 0.2 });
				}

				// off viewport
				if (_this.lTop - window.innerHeight > 0 && _this.eShow[index]) {
					_this.eShow[index] = false;
					TweenMax.set(el, { y: 100, opacity: 0 });
				}

				// this.limitOffset = offset(el)
				// this.limitTop = this.limitOffset.top - window.innerHeight + this.OPACITY_MARGE
				// this.elOpacity = Utils.Interval(this.limitTop / (-this.OPACITY_DURATION), 0, 1)
				// this.elY = (1-this.elOpacity) * 50
				// el.style.opacity = this.elOpacity
				// el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')
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
			var _this3 = this;

			this.nImageLoaded++;

			var that = this;
			var path = e.explicitOriginalTarget || e.target || e.path[0];
			if (path.height >= path.width * 1.2) print.size = 'small';else print.size = 'large';

			if (this.nImageLoaded >= this.max) {
				this.setState({
					'loadedPrints': this.printsDate
				}, function () {
					document.querySelector('.page--gallery').style.height = _this3._gallery.offsetHeight + 'px';
					_this3.updateAnimationOut();
				});
			}
		}
	}, {
		key: 'zoomPrint',
		value: function zoomPrint(id) {
			var that = this;

			_PrintActions2['default'].setPrintZoom(id);
			window.cancelAnimationFrame(this.scrollRaf);

			// this.tlItemsOut = new TimelineMax()
			// this.tlItemsOut.staggerTo(_.shuffle(dom('.gallery__item')), 0.6, { opacity:0, ease:Expo.easeOut }, 0.01)
			// this.tlItemsOut.addCallback(() => {
			window.location.href = '#/project/' + that.props.idSection;
			// }, '-=0.2')
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
		this.props = props;

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Home.prototype), 'componentDidMount', this).call(this);

			this._canvas = document.querySelector('.canvas');

			if (this._canvas && this.props.oldHash === undefined) {
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
						_react2['default'].createElement('source', { src: '/static/videos/bg-home.mp4', type: 'video/mp4' }),
						_react2['default'].createElement('source', { src: '/static/videos/bg-home.webm', type: 'video/webm' })
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

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _offset = require('./../../utils/offset');

var _offset2 = _interopRequireDefault(_offset);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var scroll = _Utils2['default'].Scroll();
var _ = require('lodash');

var News = (function (_Page) {
	_inherits(News, _Page);

	function News(props) {
		_classCallCheck(this, News);

		_get(Object.getPrototypeOf(News.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this._rafBinded = this._raf.bind(this);

		this.eShow = [];
		this.sTop = 0;
		this.cTop = 0;
		this.scrollIndex = 0;
		this.scrollOk = false;
		this.transform = _Utils2['default'].GetSupportedPropertyName('transform');
	}

	_createClass(News, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(News.prototype), 'componentDidMount', this).call(this);

			this._news = document.querySelector('.news');
			document.querySelector('.page--news').style.height = this._news.offsetHeight + 'px';

			this._raf();
		}
	}, {
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

			var e = undefined;
			this.sTop = _Utils2['default'].GetScrollTop();
			this.cTop += .1 * (this.sTop - this.cTop);
			e = -this.cTop;
			if (this._news) this._news.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';

			_((0, _domquery2['default'])('.news__item')).forEach(function (el, index) {
				_this.lTop = (0, _offset2['default'])(el).top;
				if (!_this.eShow[index]) {
					_this.eShow[index] = false;
				}

				// in viewport
				if (_this.lTop - window.innerHeight < 0 && !_this.eShow[index]) {
					_this.eShow[index] = true;
					_gsap2['default'].to(el, 0.6, { y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random() * 0.2 });
				}

				// off viewport
				if (_this.lTop - window.innerHeight > 0 && _this.eShow[index]) {
					_this.eShow[index] = false;
					_gsap2['default'].set(el, { y: 100, opacity: 0 });
				}
			}).value();
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

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Notfound.js":[function(require,module,exports){
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
		this.state.form = undefined;
	}

	_createClass(Payment, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Payment.prototype), 'componentDidMount', this).call(this);

			this._onStoreChangeBinded = this._onStoreChange.bind(this);

			var hack = setTimeout(function () {
				_CartActions2['default'].updateCartEnabled(false);
				_CartActions2['default'].updateCartVisible(false);
				clearTimeout(hack);
			}, 0);

			_CartStore2['default'].addChangeListener(this._onStoreChangeBinded);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_CartActions2['default'].updateCartVisible(true);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			this.tlIn.set(wrapper, { opacity: 1 }, 0);
			this.tlIn.to(document.querySelector('.page__overlay--payment'), 0.4, { y: window.innerHeight, ease: Power2.easeOut }, 0);
			this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0.4);
			this.tlIn.from(document.querySelector('.payment'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0.4);

			// transition Out
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(document.querySelector('.payment'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);
			this.tlOut.to(document.querySelector('.page__overlay--payment'), 0.4, { y: 0, ease: Power2.easeOut }, 0.6);
			this.tlOut.set(wrapper, { opacity: 0 });

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
				{ className: 'page page--payment', ref: 'page-wrapper' },
				_react2['default'].createElement('div', { className: 'page__overlay page__overlay--payment' }),
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
					_react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.state.form } })
				)
			);
		}
	}, {
		key: 'pay',
		value: function pay(e) {
			e.preventDefault();

			_CartApi2['default'].generatePayButton({
				email: 'hello@aze.com',
				firstname: 'Nicolas',
				lastname: 'Daniel',
				phone: '0102030405',
				address: '23 rue xxx',
				zip: '12345',
				city: 'Azerty',
				country: 'France',
				total: this.state.cartTotal * 100
			});
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
	}, {
		key: '_onStoreChange',
		value: function _onStoreChange() {
			this.setState({
				form: _CartStore2['default'].getForm()
			}, function () {
				if (document.querySelector('#paymentForm')) document.querySelector('#paymentForm').submit();
			});
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
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			// if (this.props.oldHash.parent === 'shop') {
			// 	this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
			// 	this.tlIn.set(document.querySelector('.print'), { opacity:1 }, 0)
			// 	this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
			// } else {
			this.tlIn.set(wrapper, { opacity: 1 }, 0);
			this.tlIn.to(document.querySelector('.page__overlay--print'), 0.4, { y: window.innerHeight, ease: Power2.easeOut }, 0);
			this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0.4);
			this.tlIn.from(document.querySelector('.print'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0.4);
			// }

			// transition Out
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(document.querySelector('.print'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);
			this.tlOut.to(document.querySelector('.page__overlay--print'), 0.4, { y: 0, ease: Power2.easeOut }, 0.6);
			this.tlOut.set(wrapper, { opacity: 0 });

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var that = this;
			var title = undefined,
			    city = undefined,
			    country = undefined,
			    year = undefined,
			    price = undefined,
			    desc = undefined,
			    serials = undefined;

			if (this.state.print) {
				this.validSerials = this._getValidSerials();
				this.selectedSerial = this.state.selectedSerial || this._getFirstSerial();

				title = this.state.print.title;
				city = this.state.print.city;
				country = this.state.print.country;
				year = this.state.print.year;
				price = this.state.print.price;
				desc = this.state.print.desc;
				serials = this.state.print.serials;
			}

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--print', ref: 'page-wrapper' },
				_react2['default'].createElement('div', { className: 'page__overlay page__overlay--print' }),
				_react2['default'].createElement(
					'div',
					{ className: 'print' },
					this.state.loadedPrint,
					_react2['default'].createElement(
						'div',
						{ className: 'print__infos' },
						_react2['default'].createElement(
							'h2',
							{ className: 'print__title print__title--margin' },
							title
						),
						_react2['default'].createElement(
							'h3',
							{ className: 'print__location' },
							_react2['default'].createElement(
								'span',
								{ className: 'print__city' },
								city,
								', ',
								country,
								','
							),
							' ',
							year
						),
						_react2['default'].createElement(
							'h3',
							{ className: 'print__artist' },
							'Elliott Erwitt'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'print__price text text--small' },
							price,
							'€'
						),
						_react2['default'].createElement(
							'p',
							{ className: 'print__desc text text--small' },
							desc
						),
						_react2['default'].createElement(
							'div',
							{ className: 'print__serials' },
							(function () {
								if (serials && serials.length > 0) {
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
				)
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
		this.nImageLoaded = 0;
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
					(0, _domquery2['default'])('.project__slideshow').removeClass('project__slideshow--disabled');
					(0, _domquery2['default'])('.project__discover').removeClass('project__discover--disabled');
					(0, _domquery2['default'])('.project__loading').addClass('project__loading--disabled');
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

			this._project = document.querySelector('.project');
			this._projectSlideshow = document.querySelector('.project__slideshow');
			this._projectPrints = document.querySelector('.project__prints');
			this._introContent = document.querySelector('.project__intro .project__content');
			this._pageProject = document.querySelector('.page--project');
		}

		// componentDidUpdate(prevProps, prevState) {
		// 	console.log(prevState)	
		// 	console.log(this.state)
		// }

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _this2 = this;

			var file = undefined;
			this.max = _.size(this.state.prints);
			if (this.max > 0 && !this.loaded && this.zoom === undefined) {
				this.loaded = true;
				_(this.state.prints).forEach((function (print, index) {
					file = new Image();
					file.onload = _this2.onImageLoaded.bind(_this2);
					file.src = '/static/img/' + print.file + '_big.jpg';
				}).bind(this)).value();
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(e) {
			this.nImageLoaded++;

			if (this.nImageLoaded >= this.max) {
				// console.log('all loaded')
				// setTimeout(() => {
				(0, _domquery2['default'])('.project__slideshow').removeClass('project__slideshow--disabled');
				(0, _domquery2['default'])('.project__discover').removeClass('project__discover--disabled');
				(0, _domquery2['default'])('.project__loading').addClass('project__loading--disabled');
				// }, 4000)

				this._pageProject.style.height = document.querySelector('.project').offsetHeight + 'px';
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ArtistStore2['default'].removeChangeListener(this._onArtistStoreChangeBinded);
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			this.tlIn.staggerFrom([document.querySelector('.project__artist'), document.querySelector('.project__desc')], 0.6, { y: 50, ease: Power2.easeOut }, 0.1);
			this.tlIn.to(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0);
			this.tlIn.from(wrapper, 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);

			// transition Out
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(wrapper, 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

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
								{ className: 'project__loading' },
								'Chargement...'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'project__discover project__discover--disabled', onClick: this._showSlideshowBinded },
								_react2['default'].createElement('div', { className: 'arrow' })
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'project__slideshow project__slideshow--disabled' },
						_react2['default'].createElement(
							'div',
							{ className: 'project__content' },
							_react2['default'].createElement(
								'div',
								{ className: 'project__prints' },
								Object.keys(this.state.prints).map(function (id, index) {
									var file = _this3.state.prints[id].file + '_big.jpg';
									var status = index === _this3.state.current ? 'project__print--current' : '';
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
											{ className: 'project__button project__reveal button button--left button--reverse', onClick: _this3._toggleStoryBinded },
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
			var e = undefined;
			this.sTop = _Utils2['default'].GetScrollTop();
			this.cTop += .1 * (this.sTop - this.cTop);
			e = -this.cTop;
			if (this._project) {
				this._project.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';
			}

			this.opacityMarge = window.innerHeight / 2;
			this.limitOffset = (0, _offset2['default'])(this._intro);
			this.limitTop = this.limitOffset.top + this.limitOffset.height / 1.5;
			this.introOpacity = 1 - (this.limitTop - this.opacityMarge) / -this.opacityMarge;
			this._intro.style.opacity = this.introOpacity;

			if (this._introContent && this._pageProject && this._project) {
				if (window.innerHeight - this._introContent.offsetHeight < 200) {
					this._project.classList.add('project--relative');
					this._projectSlideshow.style[this.transform] = 'translate(0px, 0px) translateZ(0px)';
					this._pageProject.style.height = document.querySelector('.project').offsetHeight + 'px';
				} else {
					this.slideshowY = -window.innerHeight / 2 + this._projectPrints.offsetHeight / 2 - 40;
					this._projectSlideshow.style[this.transform] = 'translate(0px, ' + this.slideshowY + 'px) translateZ(0px)';
					this._project.classList.remove('project--relative');
					this._pageProject.style.height = this._project.offsetHeight + this.slideshowY + 'px';
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
			TweenMax.to(window, 0.6, { scrollTo: { y: this.slideshowOffsetTop }, ease: Power2.easeOut });
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
			var _this4 = this;

			this.setState({
				prints: _PrintStore2['default'].getArtistPrints()
			}, function () {
				_this4.nPrints = _.size(_this4.state.prints);
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

},{"./../../api/ArtistApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/ArtistApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/ArtistStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/ArtistStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Result.js":[function(require,module,exports){
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

var _CartApi = require('./../../api/CartApi');

var _CartApi2 = _interopRequireDefault(_CartApi);

var Result = (function (_Page) {
	_inherits(Result, _Page);

	function Result(props) {
		_classCallCheck(this, Result);

		_get(Object.getPrototypeOf(Result.prototype), 'constructor', this).call(this, props);
		this.props;

		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Result, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'page page--result', ref: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'result' },
					_react2['default'].createElement(
						'p',
						{ className: 'result__success' },
						'Votre commande à bien été validée'
					),
					_react2['default'].createElement(
						'a',
						{ href: '#/', className: 'button button--reverse' },
						_react2['default'].createElement(
							'span',
							{ className: 'button__content' },
							'Revenir au site'
						)
					)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Result.prototype), 'componentDidMount', this).call(this);

			console.log(this.props.idSection);
			_CartApi2['default'].checkResponse(this.props.idSection);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			_get(Object.getPrototypeOf(Result.prototype), 'didTransitionOutComplete', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Result.prototype), 'resize', this).call(this);
		}
	}]);

	return Result;
})(_Page3['default']);

exports['default'] = Result;
module.exports = exports['default'];

},{"./../../api/CartApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/CartApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js":[function(require,module,exports){
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
// let Masonry = require('masonry-layout');

var Shop = (function (_Page) {
	_inherits(Shop, _Page);

	function Shop(props) {
		_classCallCheck(this, Shop);

		_get(Object.getPrototypeOf(Shop.prototype), 'constructor', this).call(this, props);

		// props
		this.props = props;

		// state
		this.state = {
			prints: {},
			loaded: false
		};

		// function binded
		this._showPrintsBinded = this._showPrints.bind(this);
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this);
		this._rafBinded = this._raf.bind(this);

		// vars
		this.eShow = [];
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

			this._shop = document.querySelector('.shop');

			// if (this.props.oldHash && this.props.oldHash.parent === 'shop' && this.props.oldHash.parts.length > 1) {
			// 	// console.log(document.querySelector('.shop').offsetTop, offset(dom('.shop')).top)
			// 	// window.scrollTo(0, offset(dom('.shop')).top)
			// 	setTimeout(() => {
			// 		window.scrollTo(0, document.querySelector('.shop').offsetTop)
			// 	}, 1000)
			// }

			// window.scrollTo(0,0)
			// console.log('init raf shop')
			this._raf();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.cancelAnimationFrame(this.scrollRaf);
			_PrintStore2['default'].removeChangeListener(this._onPrintStoreChangeBinded);
		}

		// setupAnimations() {
		// 	let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// 	// transition In
		// 	this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0.6)
		// 	this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0.6)

		// 	// transition Out
		// 	this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity:0, ease:Power2.easeOut }, 0)
		// 	this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)

		// 	// reset
		// 	this.tlIn.pause(0)
		// 	this.tlOut.pause(0)
		// }

	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			var wrapper = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			// transition In
			// if ((this.props.oldHash && (this.props.oldHash.parent === 'shop' && this.props.oldHash.parts.length > 1) || this.props.oldHash.parent === 'payment') {
			// 	this.tlIn.addCallback(this._rafBinded, 0)
			// 	this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity:1, ease:Power2.easeOut }, 0)
			// 	this.tlIn.set(document.querySelector('.shop'), { opacity:1 }, 0)
			// 	this.tlIn.from(wrapper, 0.6, { opacity:0, ease:Power2.easeInOut }, 0)
			// } else {
			this.tlIn.set(wrapper, { opacity: 1 }, 0);
			this.tlIn.to(document.querySelector('.page__overlay--shop'), 0.4, { y: window.innerHeight, ease: Power2.easeOut }, 0);
			this.tlIn.addCallback(this._rafBinded, 0.4);
			this.tlIn.from(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0.4);
			this.tlIn.from(document.querySelector('.shop'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0.4);
			// }

			// transition Out
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(document.querySelector('.shop'), 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);
			this.tlOut.to(document.querySelector('.page__overlay--shop'), 0.4, { y: 0, ease: Power2.easeOut }, 0.6);
			this.tlOut.set(wrapper, { opacity: 0 });

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'render',
		value: function render() {
			var that = this;
			var shopData = _AppStore2['default'].shopContent();

			return _react2['default'].createElement(
				'div',
				{ className: 'page page--shop', ref: 'page-wrapper' },
				_react2['default'].createElement('div', { className: 'page__overlay page__overlay--shop' }),
				_react2['default'].createElement(
					'div',
					{ className: 'shop js-smooth' },
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
						{ className: 'shop__list' },
						Object.keys(this.state.prints).map(function (id, index) {
							var print = that.state.prints[id];
							var file = print.file + '_medium.jpg';
							// let speed = (index % 2 === 0) ? 'fast' : 'slow'
							// let side = (index % 2 === 0) ? 'left' : 'right'
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

			if (this.nImageLoaded >= this.max) {
				document.querySelector('.page--shop').style.height = this._shop.offsetHeight + 'px';
			}
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

			var e = undefined;
			this.sTop = _Utils2['default'].GetScrollTop();
			this.cTop += .1 * (this.sTop - this.cTop);
			e = -this.cTop;
			if (this._shop) this._shop.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)';

			_((0, _domquery2['default'])('.shop__print')).forEach(function (el, index) {
				_this.lTop = (0, _offset2['default'])(el).top;
				if (!_this.eShow[index]) {
					_this.eShow[index] = false;
				}

				// in viewport
				if (_this.lTop - window.innerHeight < 0 && !_this.eShow[index]) {
					_this.eShow[index] = true;
					_gsap2['default'].to(el, 0.6, { y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random() * 0.2 });
				}

				// off viewport
				if (_this.lTop - window.innerHeight > 0 && _this.eShow[index]) {
					_this.eShow[index] = false;
					_gsap2['default'].set(el, { y: 100, opacity: 0 });
				}
			}).value();
		}
	}, {
		key: '_showPrints',
		value: function _showPrints() {
			this.slideshowOffsetTop = document.querySelector('.shop__list').offsetTop;
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

},{"./../../api/PrintApi":"/Users/nicolas/Developement/freelance/Havana/src/js/app/api/PrintApi.js","./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../../stores/PrintStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/PrintStore.js","./../../utils/Utils":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Utils.js","./../../utils/offset":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/offset.js","./../../utils/scrollTo":"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/scrollTo.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","gsap":"gsap","lodash":"lodash","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/config.js":[function(require,module,exports){
'use strict';

var config = {
	'siteurl': 'http://havana.hi9.fr'
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
	RECEIVE_DATA: 'RECEIVE_DATA',
	RECEIVE_FORM: 'RECEIVE_FORM',
	RECEIVE_CHECK: 'RECEIVE_CHECK'
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

			var resultSection = _crossroads2['default'].addRoute('/payment/result{?query}', this._onResultURLHandler.bind(this), 2);
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
		key: '_onResultURLHandler',
		value: function _onResultURLHandler(query) {
			this._assignRoute(query);
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
			// window.scrollTo(0, 0)
			// if (this.zoom !== undefined) {
			// 	window.scrollTo(0, offset(document.querySelector('.project__slideshow')).top);
			// 	PrintActions.setPrintZoom(undefined);
			// }
			// if (this.hash.parent === 'shop' && this.oldHash && this.oldHash.parent === 'shop' && this.oldHash.parts.length > 1) {
			// 	window.scrollTo(0, offset(document.querySelector('.shop')).top - 60)
			// }

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
    _cartEnabled = false,
    _form = undefined;

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

function _addForm(data) {
	_form = data;
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
	getForm: function getForm() {
		return _form;
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
			case _CartConstants2['default'].RECEIVE_FORM:
				_addForm(action.data);
				CartStore.emitChange();
				break;
			case _CartConstants2['default'].RECEIVE_CHECK:
				_addForm(action.data);
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
			this.tlIn.to(document.querySelector('.header__title'), 0.6, { opacity: 1, ease: Power2.easeOut }, 0);
			this.tlIn.from(wrapper, 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);

			// transition Out
			this.tlOut.to(document.querySelector('.header__title'), 0.6, { opacity: 0, ease: Power2.easeOut }, 0);
			this.tlOut.to(wrapper, 0.6, { opacity: 0, ease: Power2.easeInOut }, 0);

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
		this.props = props;
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
		value: function setupNewComponent(hash, Type, idSection, oldHash) {
			var id = (0, _lodashStringCapitalize2['default'])(hash.replace("/", ""));
			this.hash = hash;
			this.oldHash = oldHash;
			this.oldPageDivRef = this.currentPageDivRef;
			this.currentPageDivRef = this.currentPageDivRef === 'page-a' ? 'page-b' : 'page-a';
			var el = _react2['default'].findDOMNode(this.refs[this.currentPageDivRef]);
			var page = _react2['default'].createElement(Type, {
				id: this.currentPageDivRef,
				isReady: this.onPageReady,
				hash: hash,
				oldHash: oldHash,
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
			_Pager.PagerActions.pageTransitionDidFinish();
			this.unmountComponent('old-component');
		}
	}, {
		key: 'didPageTransitionOutComplete',
		value: function didPageTransitionOutComplete() {
			this.zoom = _PrintStore2['default'].getZoom();

			window.scrollTo(0, 0);
			if (this.zoom !== undefined) {
				_PrintActions2['default'].setPrintZoom(undefined);

				this._projectSlideshow = document.querySelector('.project__slideshow');
				this._projectPrints = document.querySelector('.project__prints');
				this._introContent = document.querySelector('.project__intro .project__content');
				if (window.innerHeight - this._introContent.offsetHeight < 200) {
					window.scrollTo(0, document.querySelector('.project__slideshow').offsetTop);
				} else {
					this.slideshowY = -window.innerHeight / 2 + this._projectPrints.offsetHeight / 2 - 40;
					window.scrollTo(0, document.querySelector('.project').offsetHeight - document.querySelector('.project__slideshow').offsetHeight + this.slideshowY);
				}
			}
			if (this.hash.parent === 'shop' && this.oldHash && this.oldHash.parent === 'shop' && this.oldHash.parts.length > 1) {
				window.scrollTo(0, offset(document.querySelector('.shop')).top - 60);
			}

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
module.exports={"artists":{"elliott-erwitt":{"name":"Elliott Erwitt","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Cuba 1964","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"elliott-erwitt","nPhotos":8}]},"qiu-yang":{"name":"Qiu Yang","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"qiu-yang","nPhotos":6}]},"philip-sinden":{"name":"Philip Sinden","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 2","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"philip-sinden","nPhotos":4}]},"jack-duet":{"name":"Jack Duet","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 3","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"jack-duet","nPhotos":0}]}},"fellowship":{"fellowship":{"paragraphs":["A fellowship is a communion of people sharing a common passion.","In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.","Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again after 51 years – this time to initiate the fellowship with Havana Club 7."]},"biography":{"paragraphs":["A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.","In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy.","In addition to the proceeds from print sales Havana Club 7 will fund a similar amount to give more photographers the chance to tell the story of Cuba.","The following fellowship photographers will be selected by a committee headed by Elliott Erwitt comprising of Cuban and international photography professionals ensuring the next fellow will continue the legacy of cuba and the human condition in Cuba through documentary photography and give us their own vision."]}},"home":{"paragraphs":["Cuba has always fascinated and intrigued people from around the world and led to the foundation of the Elliott Erwitt Havana Club 7 Fellowship for Documentary Photography. Founded in a shared passion for Cuba and its people we wish to build a legacy of Cuba today and take it into the future built on the work of Elliott Erwitt.","As the Fellowship evolves you will be able to acquire unique documentary photography and by doing so support future recipients continuing the legacy."]},"news":[{"date":"04.10.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"18.09.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."},{"date":"13.09.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"09.09.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"27.08.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."},{"date":"23.08.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"18.08.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"01.08.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."},{"date":"22.07.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}],"routes":{"content":{"mytext":"some global text"},"menu":[{"id":"fellowship","name":"Fellowship","url":"/fellowship"},{"id":"projects","name":"Projects","url":"/projects"},{"id":"shop","name":"Shop","url":"/shop"},{"id":"news","name":"News","url":"/news"}],"footer-menu":[{"id":"contact","name":"Contact","url":"/contact"},{"id":"privacy","name":"Privacy","url":"/privacy"},{"id":"legal","name":"Legal","url":"/legal"}],"default-route":"","routing":{"":{"title":"homepage","content":"Havana Club 7 Fellowship is aeustiunti <a href='#/fellowship'>fellowship</a> and lantemquiam volores aut epico and <a href='#/projects'>project</a> unt que vererna mendebi. Namenis esed milla nosam vel ea <a href='#/shop'>shop</a> estrum und nexpedion re consequunt. Nam vendio et parcit, comni <a href='#/news'>news</a>"},"/fellowship":{"title":"fellowship page","content":"In Cuba generations of aspiring distillers have followed the example of a seasoned rum master and so learnt to develop and perfect their craft. The Elliott Erwitt Havana Club 7 Fellowship combines this rich history and tradition with a passion for documentary photography.<br/>Master photographer Elliott Erwitt’s lifelong love of photography and Cuba has brought him back to Cuba again – this time to initiate the fellowship with Havana Club 7. A new body of work will create a starting point for a new generation of photographers to relate to, to further develop their craft and help (re)define the genre in the 21st century.  Inspired by Elliott Erwitt, exceptional talents selected for the fellowship will each create a unique body of work, capturing the soul of Cuba which will be shared with photography lovers worldwide.<br/>In the spirit of Cuba, 7 photos of each fellow will be sold to support the next photographer joining the fellowship and thus offering each photographer the opportunity to benefit the next in line to carry on the legacy of Elliott Erwitt and Cuba."},"/projects":{"title":"projects page"},"/shop":{"title":"shop page"},"/news":{"title":"news page"},"/contact":{"title":"contact page"},"/legal":{"title":"legal page"},"/privacy":{"title":"privacy page"}}},"shop":{"intro":{"title":"Discover and buy artwork","paragraphs":["The Fellowship shop is key to the fellowship. Here you can purchase limited edition signed originals by the photographer.","50% of the proceeds will go to support the next fellowship photographer and 50% will go to the photographer. In addition to the proceeds from print sales Havana Club 7 will also fund additional photographers to go to Cuba."]}}}
},{}]},{},["/Users/nicolas/Developement/freelance/Havana/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hY3Rpb25zL0FydGlzdEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvQ2FydEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvUHJpbnRBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQXJ0aXN0QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQ2FydEFwaS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYXBpL1ByaW50QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0NhcnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Db250YWN0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0ZlbGxvd3NoaXAuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvRnJpZW5kcy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9HYWxsZXJ5LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTGVnYWwuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTmV3cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Ob3Rmb3VuZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9QYXltZW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaXZhY3kuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9SZXN1bHQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU2hvcC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29uZmlnLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQXJ0aXN0Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQ2FydENvbnN0YW50cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29uc3RhbnRzL1ByaW50Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zZXJ2aWNlcy9HbG9iYWxFdmVudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zdG9yZXMvQXJ0aXN0U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9DYXJ0U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9QcmludFN0b3JlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvVXRpbHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL29mZnNldC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9zY3JvbGxUby5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlci5qcyIsInd3dy9kYXRhL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7bUJDYmdCLEtBQUs7Ozs7b0JBQ0EsTUFBTTs7OztxQkFDVCxPQUFPOzs7O21CQUNULEtBQUs7Ozs7eUJBQ0Ms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LENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxLQUFHLENBQUMsSUFBRSxFQUFDLEtBQUcsQ0FBQyxJQUFFLEVBQUMsS0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsR0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBQyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDO01BQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLGNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxjQUFPLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxLQUFHLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxRQUFRLElBQUUsT0FBTyxDQUFDLEtBQUcsQ0FBQyxHQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFBLEFBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksSUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEtBQUssS0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxHQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0tBQUMsRUFBQyxHQUFHLEVBQUMsYUFBUyxDQUFDLEVBQUM7QUFBQyxVQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSztVQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUs7VUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLO1VBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFHLENBQUMsR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFHLENBQUMsR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBLEFBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsS0FBSyxLQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBRSxFQUFFLENBQUMsQ0FBQSxBQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsS0FBSyxLQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxBQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7S0FBQyxFQUFDLENBQUM7TUFBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLFlBQVU7QUFBQyxXQUFPLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUMsVUFBVSxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxHQUFDLFlBQVU7QUFBQyxXQUFPLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFBO0dBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsWUFBTyxDQUFDLENBQUMsVUFBVSxLQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxFQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVB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U0FBUyxFQUFFO0FBQ3RDLFFBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQTtBQUN0QyxRQUFJLFdBQVcsR0FBRyxtQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2xELHVCQUFNLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pDO0dBQ0Q7OztTQUVtQixnQ0FBRztBQUN0QixxQkFBVyxHQUFHLENBQUMsc0JBQWUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDNUUscUJBQVcsR0FBRyxDQUFDLHNCQUFlLG1CQUFtQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlFLE9BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUN0QyxPQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7R0FDdEM7OztRQWxIbUIsU0FBUztHQUFTLG1CQUFNLFNBQVM7O3FCQUFqQyxTQUFTOzs7O0FDUDlCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiAoc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiaW1wb3J0IEFwcCBmcm9tICdBcHAnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBQYWdlciBmcm9tICdQYWdlcidcbmltcG9ydCByYWYgZnJvbSAncmFmJ1xuaW1wb3J0IEZhc3RDbGljayBmcm9tICdmYXN0Y2xpY2snXG5cbkZhc3RDbGljayhkb2N1bWVudC5ib2R5KVxuXG4vLyBTdGFydCBBcHBcbnZhciBhcHAgPSBuZXcgQXBwKClcbmFwcC5pbml0KClcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgQXBwVGVtcGxhdGUgZnJvbSAnQXBwVGVtcGxhdGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBHRXZlbnRzIGZyb20gJ0dsb2JhbEV2ZW50cydcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBJbml0IGdsb2JhbCBldmVudHNcblx0XHR3aW5kb3cuR2xvYmFsRXZlbnRzID0gbmV3IEdFdmVudHMoKVxuXHRcdEdsb2JhbEV2ZW50cy5pbml0KClcblx0XHRcblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcblx0XHQpXG5cblx0XHQvLyBTdGFydCByb3V0aW5nXG5cdFx0cm91dGVyLmJlZ2luUm91dGluZygpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGcm9udENvbnRhaW5lciBmcm9tICdGcm9udENvbnRhaW5lcidcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICdQYWdlc0NvbnRhaW5lcidcbmltcG9ydCBDYXJ0IGZyb20gJ0NhcnQnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKSxcblx0XHRjYXJ0VmlzaWJsZTogQ2FydFN0b3JlLmdldENhcnRWaXNpYmxlKCksXG5cdFx0Y2FydEVuYWJsZWQ6IENhcnRTdG9yZS5nZXRDYXJ0RW5hYmxlZCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0Q2FydFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Q2FydFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSd0ZW1wbGF0ZSc+XG5cdFx0XHRcdDxjYW52YXMgcmVmPSdjYW52YXMnIGNsYXNzTmFtZT0nY2FudmFzJz48L2NhbnZhcz5cblx0XHRcdFx0PEZyb250Q29udGFpbmVyIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciAvPlxuXHRcdFx0XHQ8Q2FydFxuXHRcdFx0XHRcdHByb2R1Y3RzPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRJdGVtcyA6ICcnfVxuXHRcdFx0XHRcdGNvdW50PXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRDb3VudCA6ICcnfVxuXHRcdFx0XHRcdHRvdGFsPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRUb3RhbCA6ICcnfVxuXHRcdFx0XHRcdHZpc2libGU9eyh0aGlzLnN0YXRlKSA/IHRoaXMuc3RhdGUuY2FydFZpc2libGUgOiAnJ31cblx0XHRcdFx0XHRlbmFibGVkPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRFbmFibGVkIDogJyd9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRHbG9iYWxFdmVudHMucmVzaXplKClcblx0fVxuXG5cdF9vblN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cbn1cbiIsImltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcblxudmFyIEFwcEFjdGlvbnMgPSB7XG4gICAgcGFnZUhhc2hlckNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2VJZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsXG4gICAgICAgICAgICBpdGVtOiBwYWdlSWRcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCAnZmV0Y2gnXG5cbnZhciBBcnRpc3RBY3Rpb25zID0ge1xuXG4gICAgcmVjZWl2ZUFsbCA6IGZ1bmN0aW9uKGFydGlzdHMpe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BTExfQVJUSVNUUyxcbiAgICAgICAgICAgIGl0ZW06IGFydGlzdHNcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlY2VpdmUgOiBmdW5jdGlvbihhcnRpc3Qpe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1QsXG4gICAgICAgICAgICBpdGVtOiBhcnRpc3RcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXJ0aXN0Q29uc3RhbnRzLkVSUk9SLFxuICAgICAgICAgICAgaXRlbTogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBDYXJ0Q29uc3RhbnRzIGZyb20gJ0NhcnRDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIENhcnRBY3Rpb25zID0ge1xuXG5cdC8vIFJlY2VpdmUgaW5pdGFsIHByb2R1Y3QgZGF0YVxuXHRyZWNlaXZlUHJvZHVjdDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuUkVDRUlWRV9EQVRBLFxuXHRcdFx0ZGF0YTogZGF0YVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gU2V0IGN1cnJlbnRseSBzZWxlY3RlZCBwcm9kdWN0IHZhcmlhdGlvblxuXHRzZWxlY3RQcm9kdWN0OiBmdW5jdGlvbihpbmRleCkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuU0VMRUNUX1BST0RVQ1QsXG5cdFx0XHRkYXRhOiBpbmRleFxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gQWRkIGl0ZW0gdG8gY2FydFxuXHRhZGRUb0NhcnQ6IGZ1bmN0aW9uKHByaW50SWQsIHVwZGF0ZSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9BREQsXG5cdFx0XHRwcmludElkOiBwcmludElkLFxuXHRcdFx0dXBkYXRlOiB1cGRhdGVcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuXHRyZW1vdmVGcm9tQ2FydDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfUkVNT1ZFLFxuXHRcdFx0aW5kZXg6IGluZGV4XG5cdFx0fSlcblx0fSxcblxuXHQvLyBVcGRhdGUgY2FydCB2aXNpYmlsaXR5IHN0YXR1c1xuXHR1cGRhdGVDYXJ0VmlzaWJsZTogZnVuY3Rpb24oY2FydFZpc2libGUpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfVklTSUJMRSxcblx0XHRcdGNhcnRWaXNpYmxlOiBjYXJ0VmlzaWJsZVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gVXBkYXRlIGNhcnQgZW5hYmxlZCBzdGF0dXNcblx0dXBkYXRlQ2FydEVuYWJsZWQ6IGZ1bmN0aW9uKGNhcnRFbmFibGVkKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX0VOQUJMRUQsXG5cdFx0XHRjYXJ0RW5hYmxlZDogY2FydEVuYWJsZWRcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFJlY2VpdmUgYmUyYmlsbCBmb3JtXG5cdHJlY2VpdmVGb3JtOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5SRUNFSVZFX0ZPUk0sXG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fSlcblx0fSxcblxuXHQvLyBSZWNlaXZlIGJlMmJpbGwgcmVzdWx0IHZlcmlmaWNhdGlvblxuXHRyZWNlaXZlQ2hlY2s6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdC8vIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHQvLyBcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuUkVDRUlWRV9DSEVDSyxcblx0XHQvLyBcdGRhdGE6IGRhdGFcblx0XHQvLyB9KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIFByaW50QWN0aW9ucyA9IHtcblxuXHRyZWNlaXZlQWxsIDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FMTF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlRm9yU2FsZSA6IGZ1bmN0aW9uKHByaW50cyl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfRk9SU0FMRSxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVTbGlkZXNob3cgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVGcm9tQXJ0aXN0IDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFMsXG5cdFx0XHRpdGVtOiBwcmludHNcblx0XHR9KTtcblx0fSxcblxuXHRyZWNlaXZlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlQsXG5cdFx0XHRpdGVtOiBwcmludFxuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVFcnJvciA6IGZ1bmN0aW9uKGVycm9yKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5FUlJPUixcblx0XHRcdGl0ZW06IGVycm9yXG5cdFx0fSk7XG5cdH0sXG5cblx0c2V0UHJpbnRab29tIDogZnVuY3Rpb24oaWQpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlpPT00sXG5cdFx0XHRpdGVtOiBpZFxuXHRcdH0pO1x0XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmludEFjdGlvbnNcblxuXG5cdCAgXG4iLCJpbXBvcnQgQXJ0aXN0QWN0aW9ucyBmcm9tICdBcnRpc3RBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9hcnRpc3RzJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRBcnRpc3RBY3Rpb25zLnJlY2VpdmVBbGwoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlTbHVnIDogZnVuY3Rpb24oc2x1Zykge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvYXJ0aXN0LycgKyBzbHVnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdEFydGlzdEFjdGlvbnMucmVjZWl2ZShqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCAnZmV0Y2gnXG5sZXQgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdGdlbmVyYXRlUGF5QnV0dG9uIDogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdGxldCBkYXRhID0gJ3RvdGFsPScrb3B0aW9ucy50b3RhbFxuXG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvZnJlZWxhbmNlL0hhdmFuYS9waHAvYnV5LnBocCcsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IGRhdGFcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpXG5cdFx0fSkudGhlbihmdW5jdGlvbihib2R5KSB7XG5cdFx0XHRDYXJ0QWN0aW9ucy5yZWNlaXZlRm9ybShib2R5KVxuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXJyKVxuXHRcdH0pO1xuXHR9LFxuXG5cdGNoZWNrUmVzcG9uc2UgOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0bGV0IGRhdGEgPSAnJztcblx0XHRmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuXHRcdFx0aWYgKGRhdGEgIT0gXCJcIikge1xuXHRcdFx0XHRkYXRhICs9IFwiJlwiO1xuXHRcdFx0fVxuXHRcdFx0ZGF0YSArPSBrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zW2tleV0pO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2ZyZWVsYW5jZS9IYXZhbmEvcGhwL2NoZWNrLnBocCcsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuXHRcdFx0fSxcblx0XHRcdGJvZHk6IGRhdGFcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpXG5cdFx0fSkudGhlbihmdW5jdGlvbihib2R5KSB7XG5cdFx0XHRDYXJ0QWN0aW9ucy5yZWNlaXZlQ2hlY2soYm9keSlcblx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGVycilcblx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlQWxsKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldEZvclNhbGUgOiBmdW5jdGlvbigpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy9mb3JzYWxlJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUZvclNhbGUoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0U2xpZGVzaG93IDogZnVuY3Rpb24oYXJ0aXN0LCBpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzLycgKyBhcnRpc3QgKyAnL3NsaWRlc2hvdy8nICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0UHJpbnRBY3Rpb25zLnJlY2VpdmVTbGlkZXNob3coanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlBcnRpc3QgOiBmdW5jdGlvbihhcnRpc3QpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy8nICsgYXJ0aXN0KVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlRnJvbUFydGlzdChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRPbmUgOiBmdW5jdGlvbihpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnQvJyArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdG9yZGVyIDogZnVuY3Rpb24oaWQsIHNlcmlhbCkge1xuXHRcdGNvbnNvbGUubG9nKHNlcmlhbClcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50LycgKyBpZCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdzZXJpYWwnIDogc2VyaWFsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblx0Y3JlYXRlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdwcmludCcgOiBwcmludFxuXHRcdFx0fSlcblx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoYXNoOiB1bmRlZmluZWRcblx0XHR9XG5cblx0XHQvLyBjb25zdFxuXHRcdHRoaXMuQ0FSVF9ERUxBWSA9IDIwMDBcblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZCA9IHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZClcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0ZG9tKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0X19jb250ZW50Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpKVxuXHRcdGRvbSgnLmNhcnRfX2NvdW50Jykub24oJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUNvdW50RW50ZXIuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0Jykub24oJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcykpXG5cdFx0ZG9tKCcuY2FydCcpLm9uKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVMZWF2ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBpdGVtTGFiZWwgPSAodGhpcy5wcm9wcy5jb3VudCA+IDEpID8gJ2l0ZW1zJyA6ICdpdGVtJ1xuXHRcdGxldCBjbGFzc2VzID0gKHRoaXMucHJvcHMuZW5hYmxlZCA/ICdjYXJ0LS1lbmFibGVkICcgOiAnICcpICsgKHRoaXMucHJvcHMudmlzaWJsZSAmJiB0aGlzLnN0YXRlLmhhc2ggPT09ICdzaG9wJyA/ICdjYXJ0LS12aXNpYmxlJyA6ICcnKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnY2FydCAnICsgY2xhc3Nlc30gcmVmPSdjYXJ0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvdW50Jz5DYXJ0IOKAlDxzcGFuPnt0aGlzLnByb3BzLmNvdW50fTwvc3Bhbj4ge2l0ZW1MYWJlbH08L2Rpdj5cblx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMuY291bnQgPiAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29udGVudCc+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nY2FydF9fcHJvZHVjdHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMucHJvZHVjdHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByb2R1Y3QgPSB0aGF0LnByb3BzLnByb2R1Y3RzW2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdjYXJ0X19wcm9kdWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fYXJ0aXN0Jz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2RldGFpbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaXR5Jz57cHJvZHVjdC5jaXR5fTwvZGl2PiwgPGRpdiBjbGFzc05hbWU9J2NhcnRfX3llYXInPntwcm9kdWN0LnllYXJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fc2VyaWFsJz5TZXJpYWwgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19udW1iZXInPntwcm9kdWN0LnNlcmlhbH0ve3Byb2R1Y3QuY29waWVzfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaWNlJz57cHJvZHVjdC5wcmljZX08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpbnQnPjxpbWcgY2xhc3NOYW1lPSdjYXJ0X19pbWFnZScgc3JjPXsnL3N0YXRpYy9pbWcvJytwcm9kdWN0LmZpbGUrJ19taW4uanBnJ30+PC9pbWc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19yZW1vdmUgYnV0dG9uIGJ1dHRvbi0tbGVmdCcgb25DbGljaz17dGhhdC5yZW1vdmVJdGVtLmJpbmQodGhhdCwgaW5kZXgpfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+UmVtb3ZlIGl0ZW08L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19zdWJ0b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5TdWJ0b3RhbDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnByb3BzLnRvdGFsfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY2hlY2tvdXQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIy9wYXltZW50JyBjbGFzc05hbWU9J2NhcnRfX2J1dHRvbiBidXR0b24nPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5DaGVjayBvdXQ8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19lbXB0eSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRZb3UgaGF2ZSBubyBpdGVtcyBpbiB5b3VyIGNhcnQuXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKX1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZCghdGhpcy5wcm9wcy5lbmFibGVkKVxuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnByb3BzLmVuYWJsZWQgPSB0cnVlXG5cdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQodGhpcy5wcm9wcy5lbmFibGVkKVxuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZW5hYmxlZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5lbmFibGVkID0gZmFsc2Vcblx0XHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRoaXMucHJvcHMuZW5hYmxlZClcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVJdGVtKGluZGV4KSB7XG5cdFx0Q2FydEFjdGlvbnMucmVtb3ZlRnJvbUNhcnQoaW5kZXgpXG5cdH1cblxuXHRoYW5kbGVDbGlja091dHNpZGUoZSkge1xuXHRcdGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19yZW1vdmUnKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19idXR0b24nKSkge1xuXHRcdFx0aWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19jb3VudCcpKSB0aGlzLnRvZ2dsZSgpXG5cdFx0XHRlbHNlIHRoaXMuY2xvc2UoKVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNsaWNrSW5zaWRlKGUpIHtcblx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fcmVtb3ZlJykpIGUuc3RvcFByb3BhZ2F0aW9uKClcblx0fVxuXG5cdGhhbmRsZUNvdW50RW50ZXIoZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQ291bnRkb3duKVxuXHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSB1bmRlZmluZWRcblx0XHR0aGlzLm9wZW4oKVxuXHR9XG5cblx0aGFuZGxlRW50ZXIoZSkge1xuXHRcdGlmICh0aGlzLmNsb3NlQ291bnRkb3duKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jbG9zZUNvdW50ZG93bilcblx0XHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSB1bmRlZmluZWRcblx0XHRcdHRoaXMub3BlbigpXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlTGVhdmUoZSkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VDb3VudGRvd24pXG5cdFx0XHR0aGlzLmNsb3NlQ291bnRkb3duID0gdW5kZWZpbmVkXG5cdFx0fSwgdGhpcy5DQVJUX0RFTEFZKVxuXHR9XG5cblx0X2RpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGhhc2g6IEFwcFN0b3JlLmhhc2goKVxuXHRcdH0pXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnQmFzZUNvbXBvbmVudCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcm9udENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZUJpbmRlZCA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGFzaDogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZUJpbmRlZClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgbWVudURhdGEgPSBBcHBTdG9yZS5tZW51Q29udGVudCgpXG5cdFx0bGV0IG1lbnVJdGVtcyA9IG1lbnVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRsZXQgcGF0aFVybCA9ICcjJyArIGl0ZW0udXJsXG5cdFx0XHRsZXQgY2xhc3NlcyA9IChpdGVtLmlkID09PSB0aGlzLnN0YXRlLmhhc2gpIHx8IChpdGVtLmlkID09PSB0aGlzLnN0YXRlLmhhc2grJ3MnKSA/ICdidXR0b24tLWVuYWJsZWQnIDogJydcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17J2hlYWRlcl9faXRlbSAnICsgY2xhc3Nlc30ga2V5PXtpbmRleH0+PGEgaHJlZj17cGF0aFVybH0gY2xhc3NOYW1lPSdidXR0b24nPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz57aXRlbS5uYW1lfTwvc3Bhbj48L2E+PC9saT5cblx0XHRcdClcblx0XHR9KS5yZXZlcnNlKClcblx0XHRsZXQgZm9vdGVyTWVudURhdGEgPSBBcHBTdG9yZS5mb290ZXJNZW51Q29udGVudCgpXG5cdFx0bGV0IGZvb3Rlck1lbnVJdGVtcyA9IGZvb3Rlck1lbnVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRsZXQgcGF0aFVybCA9ICcjJyArIGl0ZW0udXJsXG5cdFx0XHRsZXQgY2xhc3NlcyA9IChpdGVtLmlkID09PSB0aGlzLnN0YXRlLmhhc2gpIHx8IChpdGVtLmlkID09PSB0aGlzLnN0YXRlLmhhc2grJ3MnKSA/ICdidXR0b24tLWVuYWJsZWQnIDogJydcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e3BhdGhVcmx9IGNsYXNzTmFtZT0nZm9vdGVyX19idXR0b24gYnV0dG9uIGJ1dHRvbi0tcmlnaHQnPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz57aXRlbS5uYW1lfTwvc3Bhbj48L2E+PC9saT5cblx0XHRcdClcblx0XHR9KVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2Zyb250Q29udGFpbmVyJyBjbGFzc05hbWU9J2Zyb250LWNvbnRhaW5lcicgcmVmPSdmcm9udC1jb250YWluZXInPlxuXHRcdFx0XHQ8aGVhZGVyIGlkPSdoZWFkZXInIGNsYXNzTmFtZT0naGVhZGVyJz5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdoZWFkZXJfX3RpdGxlJz48YSBocmVmPScjLyc+RWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNzxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX3N1YnRpdGxlJz5GZWxsb3dzaGlwPC9kaXY+PC9hPjwvaDE+XG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J2hlYWRlcl9fbWVudSc+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdoZWFkZXJfX2xpc3QnPlxuXHRcdFx0XHRcdFx0XHR7bWVudUl0ZW1zfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXInPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtmb290ZXJNZW51SXRlbXN9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRoYXNoOiBBcHBTdG9yZS5oYXNoKClcblx0XHR9KVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZSBmcm9tICdCYXNlUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBjb25zb2xlLmxvZygnc2Nyb2xsVG8gMCcpXG5cdFx0Ly8gd2luZG93LnNjcm9sbFRvKDAsIDApXG5cblx0XHQvLyBjb25zb2xlLmxvZygnY2FuY2VsIHJhZicpXG5cdFx0Ly8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHdpbmRvdy5zY3JvbGxSYWYpXG5cdFx0Ly8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHdpbmRvdy5wYWdlU2Nyb2xsUmFmKVxuXHRcdC8vIHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zVG9wID0gMFxuXHRcdHRoaXMuY1RvcCA9IDBcblx0XHR0aGlzLnBUb3AgPSAwXG5cdFx0dGhpcy5wYWdlU2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5wYWdlU2Nyb2xsT2sgPSBmYWxzZVxuXHRcdHRoaXMudHJhbnNmb3JtID0gVXRpbHMuR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKVxuXHRcdHRoaXMuX3BhZ2VSYWZCaW5kZWQgPSB0aGlzLnBhZ2VSYWYuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cblx0XHQvLyB0aGlzLnBhZ2VSYWYoKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRzdXBlci5zZXR1cEFuaW1hdGlvbnMoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG5cdHBhZ2VSYWYoKSB7XG5cdFx0aWYgKHRoaXMucGFnZVNjcm9sbEluZGV4ICUgMykgdGhpcy5wYWdlU2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnBhZ2VTY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnBhZ2VTY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5wYWdlU2Nyb2xsT2spIHtcblx0XHRcdHRoaXMucGFnZUhhbmRsZVNjcm9sbCgpXG5cdFx0fVxuXG5cdFx0d2luZG93LnBhZ2VTY3JvbGxSYWYgPSBzY3JvbGwodGhpcy5fcGFnZVJhZkJpbmRlZCk7XG5cdH1cblx0cGFnZUhhbmRsZVNjcm9sbCgpIHtcblx0XHRsZXQgZTtcblx0XHR0aGlzLnNUb3AgPSBVdGlscy5HZXRTY3JvbGxUb3AoKVxuXHRcdHRoaXMuY1RvcCArPSAuMSAqICh0aGlzLnNUb3AgLSB0aGlzLmNUb3ApXG5cdFx0dGhpcy5wVG9wID0gLXRoaXMuY1RvcFxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc21vb3RoJykpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zbW9vdGgnKS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlM2QoMCwgJyArIHRoaXMucFRvcCArICdweCwgMCknXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZXIgZnJvbSAnQmFzZVBhZ2VyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBIb21lIGZyb20gJ0hvbWUnXG5pbXBvcnQgRmVsbG93c2hpcCBmcm9tICdGZWxsb3dzaGlwJ1xuaW1wb3J0IEZyaWVuZHMgZnJvbSAnRnJpZW5kcydcbmltcG9ydCBQcm9qZWN0cyBmcm9tICdQcm9qZWN0cydcbmltcG9ydCBQcm9qZWN0IGZyb20gJ1Byb2plY3QnXG5pbXBvcnQgR2FsbGVyeSBmcm9tICdHYWxsZXJ5J1xuaW1wb3J0IFNob3AgZnJvbSAnU2hvcCdcbmltcG9ydCBQcmludCBmcm9tICdQcmludCdcbmltcG9ydCBOZXdzIGZyb20gJ05ld3MnXG5pbXBvcnQgUGF5bWVudCBmcm9tICdQYXltZW50J1xuaW1wb3J0IFJlc3VsdCBmcm9tICdSZXN1bHQnXG5pbXBvcnQgQ29udGFjdCBmcm9tICdDb250YWN0J1xuaW1wb3J0IExlZ2FsIGZyb20gJ0xlZ2FsJ1xuaW1wb3J0IFByaXZhY3kgZnJvbSAnUHJpdmFjeSdcbmltcG9ydCBOb3Rmb3VuZCBmcm9tICdOb3Rmb3VuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNDb250YWluZXIgZXh0ZW5kcyBCYXNlUGFnZXIge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0bGV0IG9sZEhhc2ggPSBSb3V0ZXIuZ2V0T2xkSGFzaCgpXG5cdFx0bGV0IGhhc2ggPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG5cdFx0bGV0IHR5cGUgPSB1bmRlZmluZWRcblx0XHRsZXQgaWQgPSB1bmRlZmluZWRcblxuXHRcdHN3aXRjaChoYXNoLnBhcmVudCkge1xuXHRcdFx0Y2FzZSAnJzpcblx0XHRcdFx0dHlwZSA9IEhvbWVcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2ZlbGxvd3NoaXAnOlxuXHRcdFx0XHR0eXBlID0gRmVsbG93c2hpcFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZnJpZW5kcyc6XG5cdFx0XHRcdHR5cGUgPSBGcmllbmRzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwcm9qZWN0cyc6XG5cdFx0XHRcdHR5cGUgPSBQcm9qZWN0c1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncHJvamVjdCc6XG5cdFx0XHRcdGlmIChoYXNoLnBhcnRzLmxlbmd0aCA+IDIpIHtcblx0XHRcdFx0XHRpZiAoaGFzaC5wYXJ0c1syXSA9PT0gJ2NvbnRhY3Qtc2hlZXQnKSB7XG5cdFx0XHRcdFx0XHR0eXBlID0gR2FsbGVyeVxuXHRcdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHpvb20gc3VyIHVuZSBwaG90b1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0eXBlID0gUHJvamVjdFxuXHRcdFx0XHRcdGlkID0gaGFzaC50YXJnZXRJZFxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdzaG9wJzpcblx0XHRcdFx0aWYgKGhhc2gucGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHR5cGUgPSBQcmludFxuXHRcdFx0XHRcdGlkID0gaGFzaC50YXJnZXRJZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSBTaG9wXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ25ld3MnOlxuXHRcdFx0XHR0eXBlID0gTmV3c1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncGF5bWVudCc6XG5cdFx0XHRcdGlmIChoYXNoLnBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHR0eXBlID0gUmVzdWx0XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9IFBheW1lbnRcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnY29udGFjdCc6XG5cdFx0XHRcdHR5cGUgPSBDb250YWN0XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdsZWdhbCc6XG5cdFx0XHRcdHR5cGUgPSBMZWdhbFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncHJpdmFjeSc6XG5cdFx0XHRcdHR5cGUgPSBQcml2YWN5XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0eXBlID0gTm90Zm91bmRcblx0XHR9XG5cdFx0dGhpcy5zZXR1cE5ld0NvbXBvbmVudChoYXNoLnBhcmVudCwgdHlwZSwgaWQsIG9sZEhhc2gpXG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nY29udGFjdFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0e2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnc2Nyb2xsVG8nXG5sZXQgc2Nyb2xsID0gVXRpbHMuU2Nyb2xsKClcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlbGxvd3NoaXAgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0Ly8gcHJvcHNcblx0XHR0aGlzLnByb3BzID0gcHJvcHNcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZXc6ICdiaW9ncmFwaHknXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fZ29Ub0Jpb2dyYXBoeUJpbmRlZCA9IHRoaXMuX2dvVG9CaW9ncmFwaHkuYmluZCh0aGlzKVxuXHRcdHRoaXMuX3RvZ2dsZVZpZGVvQmluZGVkID0gdGhpcy5fdG9nZ2xlVmlkZW8uYmluZCh0aGlzKVxuXHRcdHRoaXMuX3JhZkJpbmRlZCA9IHRoaXMuX3JhZi5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0Ly8gY29uc3Rcblx0XHR0aGlzLlBBUkFMTEFYX01BUkdFID0gMzBcblx0XHR0aGlzLlBBUkFMTEFYX0RVUkFUSU9OID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XG5cdFx0Ly8gdmFyc1xuXHRcdHRoaXMuZVNob3cgPSBbXVxuXHRcdHRoaXMuc3BlZWQgPSAuMlxuXHRcdHRoaXMubkltYWdlTG9hZGVkID0gMFxuXHRcdHRoaXMuc1RvcCA9IDBcblx0XHR0aGlzLmNUb3AgPSAwXG5cdFx0dGhpcy5lVG9wID0gMFxuXHRcdHRoaXMudmlkZW9QbGF5ZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXggPSAwXG5cdFx0dGhpcy5zY3JvbGxPayA9IGZhbHNlXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBVdGlscy5HZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXG5cdFxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0dGhpcy5fZmVsbG93c2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwJylcblx0XHR0aGlzLl9saW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1saW1pdCcpXG5cdFx0dGhpcy5fdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fdmlkZW8nKVxuXHRcdHRoaXMuYXJ0aXN0T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpLm9mZnNldFRvcFxuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5zdHlsZS5oZWlnaHQgPSB0aGlzLl9mZWxsb3dzaGlwLm9mZnNldEhlaWdodCArICdweCdcblxuXHRcdHRoaXMuX2xvYWRJbWFnZXMoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsUmFmKVx0XG5cdH1cblxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5hZGRDYWxsYmFjayh0aGlzLl9yYWZCaW5kZWQsIDApXG5cdFx0dGhpcy50bEluLnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RpdGxlJyksIDAuNiwgeyBvcGFjaXR5OjEsIGVhc2U6UG93ZXIyLmVhc2VPdXQgfSwgMClcblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190aXRsZScpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDApXG5cdFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblxuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBmZWxsb3dzaGlwRGF0YSA9IEFwcFN0b3JlLmZlbGxvd3NoaXBDb250ZW50KClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1mZWxsb3dzaGlwJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51Jz48YSBocmVmPScjL2ZyaWVuZHMnIGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RnJpZW5kcyBvZiB0aGUgZmVsbG93c2hpcDwvc3Bhbj48L2E+PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ZpZGVvIGZlbGxvd3NoaXBfX3ZpZGVvJz5cblx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbG9vcCBtdXRlZCBjbGFzc05hbWU9J3ZpZGVvX19maWxlJz5cblx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPScvc3RhdGljL3ZpZGVvcy9iZy1ob21lLm1wNCcgdHlwZT0ndmlkZW8vbXA0JyAvPlxuXHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9Jy9zdGF0aWMvdmlkZW9zL2JnLWhvbWUud2VibScgdHlwZT0ndmlkZW8vd2VibScgLz5cblx0XHRcdFx0XHQ8L3ZpZGVvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmVsbG93c2hpcCBqcy1zbW9vdGgnPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fcHJlc2VudGF0aW9uJz5cblx0XHRcdFx0XHRcdDxwIGRhdGEtc3BlZWQ9Jy4yJyBjbGFzc05hbWU9J2pzLXBhcmFsbGF4IHBhcmFncmFwaCBwYXJhZ3JhcGgtLWJpZyBwYXJhZ3JhcGgtLWNlbnRlcicgZGF0YS1lYXNlPScuMCc+QSBmZWxsb3dzaGlwIGlzIGEgY29tbXVuaW9uIG9mIHBlb3BsZSBzaGFyaW5nIGEgY29tbW9uIHBhc3Npb24uPC9wPlxuXHRcdFx0XHRcdFx0PHAgZGF0YS1zcGVlZD0nLjInIGNsYXNzTmFtZT0nanMtcGFyYWxsYXggcGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwgcGFyYWdyYXBoLS1jZW50ZXInPkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPC9wPlxuXHRcdFx0XHRcdFx0PHAgZGF0YS1zcGVlZD0nLjInIGNsYXNzTmFtZT0nanMtcGFyYWxsYXggcGFyYWdyYXBoIHBhcmFncmFwaC0tbWVkaXVtIHBhcmFncmFwaC0tY2VudGVyJz5NYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4gYWZ0ZXIgNTEgeWVhcnMg4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fcm93IGpzLWxpbWl0Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBkYXRhLXNwZWVkPScuMDUnIGNsYXNzTmFtZT0nanMtcGFyYWxsYXggcGFyYWdyYXBoX19jb2x1bW4gcGFyYWdyYXBoX19jb2x1bW4tLWxlZnQnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19lbGxpb3R0JyBzcmM9Jy4uL2Fzc2V0cy9pbWFnZXMvZWxsaW90dC1lcndpdHQuanBnJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBkYXRhLXNwZWVkPScuMicgY2xhc3NOYW1lPSdqcy1wYXJhbGxheCBwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCc+QSBuZXcgYm9keSBvZiB3b3JrIHdpbGwgY3JlYXRlIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGEgbmV3IGdlbmVyYXRpb24gb2YgcGhvdG9ncmFwaGVycyB0byByZWxhdGUgdG8sIHRvIGZ1cnRoZXIgZGV2ZWxvcCB0aGVpciBjcmFmdCBhbmQgaGVscCAocmUpZGVmaW5lIHRoZSBnZW5yZSBpbiB0aGUgMjFzdCBjZW50dXJ5LiAgSW5zcGlyZWQgYnkgRWxsaW90dCBFcndpdHQsIGV4Y2VwdGlvbmFsIHRhbGVudHMgc2VsZWN0ZWQgZm9yIHRoZSBmZWxsb3dzaGlwIHdpbGwgZWFjaCBjcmVhdGUgYSB1bmlxdWUgYm9keSBvZiB3b3JrLCBjYXB0dXJpbmcgdGhlIHNvdWwgb2YgQ3ViYSB3aGljaCB3aWxsIGJlIHNoYXJlZCB3aXRoIHBob3RvZ3JhcGh5IGxvdmVycyB3b3JsZHdpZGUuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgZGF0YS1zcGVlZD0nLjInIGNsYXNzTmFtZT0nanMtcGFyYWxsYXggcGFyYWdyYXBoIHBhcmFncmFwaC0tbWVkaXVtIHBhcmFncmFwaC0tY2VudGVyJz5JbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeS48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGRhdGEtc3BlZWQ9Jy4yJyBjbGFzc05hbWU9J2pzLXBhcmFsbGF4IHBhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5JbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgZnVuZCBhIHNpbWlsYXIgYW1vdW50IHRvIGdpdmUgbW9yZSBwaG90b2dyYXBoZXJzIHRoZSBjaGFuY2UgdG8gdGVsbCB0aGUgc3Rvcnkgb2YgQ3ViYS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGRhdGEtc3BlZWQ9Jy4xJyBjbGFzc05hbWU9J2pzLXBhcmFsbGF4IHBhcmFncmFwaF9fY29sdW1uIHBhcmFncmFwaF9fY29sdW1uLS1yaWdodCc+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2VsbGlvdHQnIHNyYz0nL3N0YXRpYy9pbWcvRVJFMjAxNTAwMlcwMDAzMy0zNkFfbWVkaXVtLmpwZycgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGRhdGEtc3BlZWQ9Jy4yJyBjbGFzc05hbWU9J2pzLXBhcmFsbGF4IHBhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsIHBhcmFncmFwaC0tY2VudGVyJz5UaGUgZm9sbG93aW5nIGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVycyB3aWxsIGJlIHNlbGVjdGVkIGJ5IGEgY29tbWl0dGVlIGhlYWRlZCBieSBFbGxpb3R0IEVyd2l0dCBjb21wcmlzaW5nIG9mIEN1YmFuIGFuZCBpbnRlcm5hdGlvbmFsIHBob3RvZ3JhcGh5IHByb2Zlc3Npb25hbHMgZW5zdXJpbmcgdGhlIG5leHQgZmVsbG93IHdpbGwgY29udGludWUgdGhlIGxlZ2FjeSBvZiBjdWJhIGFuZCB0aGUgaHVtYW4gY29uZGl0aW9uIGluIEN1YmEgdGhyb3VnaCBkb2N1bWVudGFyeSBwaG90b2dyYXBoeSBhbmQgZ2l2ZSB1cyB0aGVpciBvd24gdmlzaW9uLjwvcD5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PGRpdiBkYXRhLXNwZWVkPScuMScgY2xhc3NOYW1lPSdqcy1wYXJhbGxheCBkaXNjb3ZlciBmZWxsb3dzaGlwX19kaXNjb3Zlcicgb25DbGljaz17dGhpcy5fZ29Ub0Jpb2dyYXBoeUJpbmRlZH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RGlzY292ZXIgRWxsaW90dCBFcndpdHQncyBiaW9ncmFwaHk8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYXJ0aXN0Jz5cblx0XHRcdFx0XHRcdDxwIGRhdGEtc3BlZWQ9Jy4xJyBjbGFzc05hbWU9J2pzLXBhcmFsbGF4IGZlbGxvd3NoaXBfX2FydGlzdG5hbWUgcGFyYWdyYXBoIHBhcmFncmFwaC0tYmlnIHBhcmFncmFwaC0tY2VudGVyJyBkYXRhLWVhc2U9Jy4wJz5FTExJT1RUIEVSV0lUVOKAmVMgQklPR1JBUEhZPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fcm93Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBkYXRhLXNwZWVkPScuMicgY2xhc3NOYW1lPSdqcy1wYXJhbGxheCBwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCc+RWxsaW90dCBFcndpdHQgaXMgb25lIG9mIHRoZSB3b3JsZOKAmXMgbW9zdCBwb3B1bGFyIGFuZCBhZG1pcmVkIHBob3RvZ3JhcGhlcnMuIEEgdmlzdWFsIHBvZXQgYW5kIGh1bW9yaXN0IG9mIGV2ZXJ5ZGF5IGxpZmUsIGhlIGhhcyBjcmVhdGVkIHNvbWUgb2YgdGhlIG1vc3QgbWVtb3JhYmxlIGltYWdlcyBvZiBvdXIgdGltZSwgZnJvbSBoaXMgb2JzZXJ2YXRpb25zIG9mIGRhaWx5IGxpZmUgYXQgc3RyZWV0IGxldmVsLCB0byBwb3J0cmFpdHMgb2YgdGhlIGljb25pYyBwZXJzb25hbGl0aWVzIGluY2x1ZGluZyBNYXJpbHluIE1vbnJvZSBvbiB0aGUgc2V0IG9mIHRoZSBmaWxtIFRoZSBNaXNmaXRzIGFuZCBUcnVtYW4gQ2Fwb3Rl4oCZcyBlcGljIDE5NjYgQmxhY2sgYW5kIFdoaXRlIEJhbGwgaW4gTmV3IFlvcmsgQ2l0eS4gSGUgaGFzIHBob3RvZ3JhcGhlZCBLaHJ1c2hjaGV2IGFuZCBOaXhvbiBhcmd1aW5nIGluIE1vc2NvdywgRmlkZWwgQ2FzdHJvIGFuZCBDaGUgR3VldmFyYSBpbiBIYXZhbmEgYW5kIFByZXNpZGVudCBKRksgaW4gdGhlIE92YWwgb2ZmaWNlLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgZGF0YS1zcGVlZD0nLjEnIGNsYXNzTmFtZT0nanMtcGFyYWxsYXggcGFyYWdyYXBoX19jb2x1bW4nIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVZpZGVvQmluZGVkfT5cblx0XHRcdFx0XHRcdFx0XHQ8dmlkZW8gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19pbnRlcnZpZXcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9Jy9zdGF0aWMvdmlkZW9zL2JnLWhvbWUubXA0JyB0eXBlPSd2aWRlby9tcDQnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c291cmNlIHNyYz0nL3N0YXRpYy92aWRlb3MvYmctaG9tZS53ZWJtJyB0eXBlPSd2aWRlby93ZWJtJyAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlkZW8+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19wbGF5IGVuYWJsZWQnPnBsYXkgdmlkZW88L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBkYXRhLXNwZWVkPScuMicgY2xhc3NOYW1lPSdqcy1wYXJhbGxheCBwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCBwYXJhZ3JhcGgtLWNlbnRlcic+Qm9ybiBpbiBQYXJpcyBpbiAxOTI4IHRvIFJ1c3NpYW4gcGFyZW50cywgRXJ3aXR0IG1vdmVkIHRvIHRoZSBVUyB3aXRoIGhpcyBmYW1pbHkgaW4gMTkzOSBhbmQgaXQgd2FzIHRoZXJlIHRoYXQgaGUgbWV0IEVkd2FyZCBTdGVpY2hlbiBhbmQgUm95IFN0cnlrZXIuIFJlY3J1aXRlZCB0byBNYWdudW0gUGhvdG9zIGJ5IFJvYmVydCBDYXBhIGluIDE5NTMgRXJ3aXR0IGhhcyBiZWVuIGEgbWVtYmVyIG9mIHRoZSBwcmVzdGlnaW91cyBhZ2VuY3kgZXZlciBzaW5jZSBhbmQgaGFzIHNlcnZlZCBzZXZlcmFsIHRlcm1zIGFzIGl0cyBwcmVzaWRlbnQuPC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fcm93Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBkYXRhLXNwZWVkPScuMicgY2xhc3NOYW1lPSdqcy1wYXJhbGxheCBwYXJhZ3JhcGgnPjxhIGNsYXNzTmFtZT0nZmVsbG93c2hpcF9fYnV0dG9uIGJ1dHRvbicgaHJlZj0naHR0cDovL3d3dy5lbGxpb3R0ZXJ3aXR0LmNvbScgdGFyZ2V0PSdfYmxhbmsnPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5FbGxpb3R0IEVyd2l0dCBvZmZpY2lhbCB3ZWJzaXRlPC9zcGFuPjwvYT48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGRhdGEtc3BlZWQ9Jy4yJyBjbGFzc05hbWU9J2pzLXBhcmFsbGF4IHBhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5UbyBkYXRlIEVyd2l0dCBoYXMgcHJvZHVjZWQgbW9yZSB0aGFuIDI1IHBob3RvZ3JhcGh5IGJvb2tzIGluY2x1ZGluZyBFYXN0ZXJuIEV1cm9wZSAoMTk2NSksIFRoZSBQcml2YXRlIEV4cGVyaWVuY2UgKDE5NzQpLCBQZXJzb25hbCBFeHBvc3VyZXMgKDE5ODgpLCBUbyB0aGUgRG9ncyAoMTk5MiksIGFuZCBQZXJzb25hbCBCZXN0ICgyMDEwKS4gSGlzIHBob3RvZ3JhcGhzIGhhdmUgYmVlbiBmZWF0dXJlZCBpbiBzb2xvIHNob3dzIGFsbCBvdmVyIHRoZSB3b3JsZCwgaW5jbHVkaW5nIGF0wqB0aGUgSUNQIGFuZCBUaGUgTXVzZXVtIG9mIE1vZGVybiBBcnQsIE5ldyBZb3JrOyBUaGUgQXJ0IEluc3RpdHV0ZSBvZiBDaGljYWdvO8KgVGhlIEJhcmJpY2FuLCBMb25kb24sIGFuZCBUaGUgUmVpbmEgU29maWEgTXVzZXVtLCBNYWRyaWQuIEVyd2l0dCBsaXZlcyBhbmQgd29ya3MgaW4gTmV3IFlvcmsgQ2l0eSBhbmQgbGlrZXMgY2hpbGRyZW4gYW5kIGRvZ3MuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbiBqcy1wYXJhbGxheCc+PGEgaHJlZj0nIy9wcm9qZWN0L2VsbGlvdHQtZXJ3aXR0JyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2J1dHRvbiBidXR0b25fX2NvbnRlbnQnPkRpc2NvdmVyIGhpcyBwcm9qZWN0PC9hPjwvZGl2PlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0dGhpcy5faGFuZGxlU2Nyb2xsKClcblx0XHR9XG5cblx0XHQvLyB3aW5kb3cuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdFx0dGhpcy5zY3JvbGxSYWYgPSBzY3JvbGwodGhpcy5fcmFmQmluZGVkKTtcblx0fVxuXG5cdF9oYW5kbGVTY3JvbGwoKSB7XG5cdFx0bGV0IGU7XG5cdFx0dGhpcy5zVG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHR0aGlzLmNUb3AgKz0gLjEgKiAodGhpcy5zVG9wIC0gdGhpcy5jVG9wKVxuXHRcdGUgPSAtdGhpcy5jVG9wXG5cdFx0aWYgKHRoaXMuX2ZlbGxvd3NoaXApIHRoaXMuX2ZlbGxvd3NoaXAuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBlICsgJ3B4LCAwKSdcblxuXHRcdGlmICh0aGlzLl92aWRlbyAmJiB0aGlzLl9saW1pdCkge1xuXHRcdFx0dGhpcy5zY3JvbGxUb3AgPSBVdGlscy5HZXRTY3JvbGxUb3AoKVxuXHRcdFx0dGhpcy52aWRlb09wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCgxIC0gKHRoaXMuc2Nyb2xsVG9wIC8gKHRoaXMuX2xpbWl0Lm9mZnNldFRvcCArIDE2MCAtIHdpbmRvdy5pbm5lckhlaWdodCkpLCAwLCAxKVxuXHRcdFx0dGhpcy5fdmlkZW8uc3R5bGUub3BhY2l0eSA9IHRoaXMudmlkZW9PcGFjaXR5XG5cdFx0fVxuXG5cdFx0Xyhkb20oJy5qcy1wYXJhbGxheCcpKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcblx0XHRcdHRoaXMubFRvcCA9IG9mZnNldChlbCkudG9wXG5cdFx0XHRcblx0XHRcdGlmICghdGhpcy5lU2hvd1tpbmRleF0pIHtcblx0XHRcdFx0dGhpcy5lU2hvd1tpbmRleF0gPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBpbiB2aWV3cG9ydFxuXHRcdFx0aWYgKHRoaXMubFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCA8IDAgJiYgIXRoaXMuZVNob3dbaW5kZXhdKSB7XG5cdFx0XHRcdHRoaXMuZVNob3dbaW5kZXhdID0gdHJ1ZVxuXHRcdFx0XHRUd2Vlbk1heC50byhlbCwgMC42LCB7eTogMCwgb3BhY2l0eTogMSwgZWFzZTogUG93ZXIyLmVhc2VPdXQsIGRlbGF5OiBNYXRoLnJhbmRvbSgpKjAuMn0pXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIG9mZiB2aWV3cG9ydFxuXHRcdFx0aWYgKHRoaXMubFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCA+IDAgJiYgdGhpcy5lU2hvd1tpbmRleF0pIHtcblx0XHRcdFx0dGhpcy5lU2hvd1tpbmRleF0gPSBmYWxzZVxuXHRcdFx0XHRUd2Vlbk1heC5zZXQoZWwsIHt5OiAxMDAsIG9wYWNpdHk6IDB9KVxuXHRcdFx0fVxuXG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXG5cdF9sb2FkSW1hZ2VzKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKGRvbSgnLmZlbGxvd3NoaXAgaW1nJykpXG5cdFx0Xyhkb20oJy5mZWxsb3dzaGlwIGltZycpKS5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XG5cdFx0XHRmaWxlID0gbmV3IEltYWdlKClcblx0XHRcdGZpbGUub25sb2FkID0gdGhpcy5fb25JbWFnZUxvYWRlZC5iaW5kKHRoaXMpXG5cdFx0XHQvLyBmaWxlLnNyYyA9ICcvc3RhdGljL2ltZy8nK2ltZy5zcmMrJy5qcGcnXG5cdFx0XHRmaWxlLnNyYyA9IGltZy5zcmNcblx0XHR9LmJpbmQodGhpcykpLnZhbHVlKCk7XG5cdH1cblxuXHRfb25JbWFnZUxvYWRlZChlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrKztcblxuXHRcdGlmICh0aGlzLm5JbWFnZUxvYWRlZCA+PSB0aGlzLm1heCkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtLWZlbGxvd3NoaXAnKS5zdHlsZS5oZWlnaHQgPSB0aGlzLl9mZWxsb3dzaGlwLm9mZnNldEhlaWdodCArICdweCdcblx0XHR9XG5cdH1cblxuXHRfdG9nZ2xlVmlkZW8oKSB7XG5cdFx0aWYgKHRoaXMudmlkZW9QbGF5ZWQpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19pbnRlcnZpZXcnKS5wYXVzZSgpXG5cdFx0XHRkb20oJy5mZWxsb3dzaGlwX19wbGF5JykuYWRkQ2xhc3MoJ2VuYWJsZWQnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9faW50ZXJ2aWV3JykucGxheSgpXG5cdFx0XHRkb20oJy5mZWxsb3dzaGlwX19wbGF5JykucmVtb3ZlQ2xhc3MoJ2VuYWJsZWQnKVxuXHRcdH1cblx0XHR0aGlzLnZpZGVvUGxheWVkID0gIXRoaXMudmlkZW9QbGF5ZWRcblx0fVxuXG5cdF9nb1RvQmlvZ3JhcGh5KCkge1xuXHRcdHRoaXMuYXJ0aXN0T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpLm9mZnNldFRvcFxuXHRcdFR3ZWVuTWF4LnRvKHdpbmRvdywgMC42LCB7c2Nyb2xsVG86e3k6ICh0aGlzLmFydGlzdE9mZnNldFRvcCAtIDQwKX0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXG5cdFx0aWYgKHdpbmRvd1cvMS44IDwgd2luZG93SCkgZG9tKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcnRyYWl0Jylcblx0XHRlbHNlIGRvbSgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3J0cmFpdCcpXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdjb250YWN0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHRGcmllbmRzIG9mIHRoZSBmZWxsb3dzaGlwXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5sZXQgTWFzb25yeSA9IHJlcXVpcmUoJ21hc29ucnktbGF5b3V0JylcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBwcm9wc1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdHByaW50czogW10sXG5cdFx0XHRsb2FkZWRQcmludHM6IFtdXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5zcGVlZCA9IDJcblx0XHR0aGlzLnNUb3AgPSAwXG5cdFx0dGhpcy5jVG9wID0gMFxuXHRcdHRoaXMuZVNob3cgPSBbXVxuXHRcdC8vIHRoaXMuZVRvcCA9IFtdXG5cdFx0dGhpcy5lVG9wID0gMFxuXHRcdHRoaXMubG9hZGVkID0gZmFsc2Vcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLnByaW50cyA9IFtdXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0XG5cdFx0UHJpbnRBcGkuZ2V0QnlBcnRpc3QodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKTtcblxuXHRcdHRoaXMuX2dhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxSYWYpXG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdH1cblxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5hZGRDYWxsYmFjayh0aGlzLl9yYWZCaW5kZWQsIDApXG5cdFx0dGhpcy50bEluLnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RpdGxlJyksIDAuNiwgeyBvcGFjaXR5OjEsIGVhc2U6UG93ZXIyLmVhc2VPdXQgfSwgMClcblx0XHR0aGlzLnRsSW4uZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWVudScpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsSW4uc2V0KHdyYXBwZXIsIHsgb3BhY2l0eToxLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblxuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cblx0dXBkYXRlQW5pbWF0aW9uT3V0KCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblx0XHRcblx0XHR0aGlzLnRsT3V0LmNsZWFyKClcblx0XHR0aGlzLnRsT3V0LnN0YWdnZXJUbyhfLnNodWZmbGUoZG9tKCcuZ2FsbGVyeV9faXRlbScpKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwLjAxKVxuXHRcdHRoaXMudGxPdXQudG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHRcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAnLT0wLjYnKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBwcmludEluZGV4ID0gLTFcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tZ2FsbGVyeScgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSc+PGEgaHJlZj17JyMvcHJvamVjdC8nK3RoaXMucHJvcHMuaWRTZWN0aW9ufSBjbGFzc05hbWU9J2J1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkJhY2sgdG8gZ2FsbGVyeTwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5IGpzLXNtb290aCc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUubG9hZGVkUHJpbnRzKS5tYXAoKHllYXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19ncmlkJyBrZXk9e3llYXIrJ18nK2l9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X193aWR0aCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dhbGxlcnlfX2l0ZW0gZ2FsbGVyeV9faXRlbS0tbGFyZ2UgZ2FsbGVyeV9faXRlbS0tZGlzYWJsZWQnPnt5ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnN0YXRlLmxvYWRlZFByaW50c1t5ZWFyXSkubWFwKChwcmludElkLCBqKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5sb2FkZWRQcmludHNbeWVhcl1bcHJpbnRJZF1cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzcmMgPSAnL3N0YXRpYy9pbWcvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdFx0XHRcdFx0XHRcdGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcblx0XHRcdFx0XHRcdFx0XHRcdHByaW50SW5kZXgrK1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLScrcHJpbnQuc2l6ZSsnIGdhbGxlcnlfX2l0ZW0tLScrcmFuZG9tfSBkYXRhLXJhbmRvbT17cmFuZG9tfSBrZXk9e3ByaW50SWR9IG9uQ2xpY2s9e3RoYXQuem9vbVByaW50LmJpbmQodGhhdCwgcHJpbnRJbmRleCl9PjxpbWcgY2xhc3NOYW1lPSdnYWxsZXJ5X19pbWFnZScgc3JjPXtzcmN9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0bGV0IGU7XG5cdFx0dGhpcy5zVG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHR0aGlzLmNUb3AgKz0gLjEgKiAodGhpcy5zVG9wIC0gdGhpcy5jVG9wKVxuXHRcdGUgPSAtdGhpcy5jVG9wXG5cdFx0aWYgKHRoaXMuX2dhbGxlcnkpIHtcblx0XHRcdHRoaXMuX2dhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBlICsgJ3B4LCAwKSdcblx0XHR9XG5cblxuXHRcdF8oZG9tKCcuZ2FsbGVyeV9faXRlbScpKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcblx0XHRcdHRoaXMubFRvcCA9IG9mZnNldChlbCkudG9wXG5cdFx0XHRpZiAoIXRoaXMuZVNob3dbaW5kZXhdKSB7XG5cdFx0XHRcdHRoaXMuZVNob3dbaW5kZXhdID0gZmFsc2Vcblx0XHRcdFx0Ly8gVHdlZW5NYXguc2V0KGVsLCB7eTogMTAwLCBvcGFjaXR5OiAwfSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gaW4gdmlld3BvcnRcblx0XHRcdGlmICh0aGlzLmxUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPCAwICYmICF0aGlzLmVTaG93W2luZGV4XSkge1xuXHRcdFx0XHR0aGlzLmVTaG93W2luZGV4XSA9IHRydWVcblx0XHRcdFx0VHdlZW5NYXgudG8oZWwsIDAuNiwge3k6IDAsIG9wYWNpdHk6IDEsIGVhc2U6IFBvd2VyMi5lYXNlT3V0LCBkZWxheTogTWF0aC5yYW5kb20oKSowLjJ9KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBvZmYgdmlld3BvcnRcblx0XHRcdGlmICh0aGlzLmxUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPiAwICYmIHRoaXMuZVNob3dbaW5kZXhdKSB7XG5cdFx0XHRcdHRoaXMuZVNob3dbaW5kZXhdID0gZmFsc2Vcblx0XHRcdFx0VHdlZW5NYXguc2V0KGVsLCB7eTogMTAwLCBvcGFjaXR5OiAwfSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gdGhpcy5saW1pdE9mZnNldCA9IG9mZnNldChlbClcblx0XHRcdC8vIHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdFx0Ly8gdGhpcy5lbE9wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCh0aGlzLmxpbWl0VG9wIC8gKC10aGlzLk9QQUNJVFlfRFVSQVRJT04pLCAwLCAxKVxuXHRcdFx0Ly8gdGhpcy5lbFkgPSAoMS10aGlzLmVsT3BhY2l0eSkgKiA1MFxuXHRcdFx0Ly8gZWwuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0XHQvLyBlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMuZWxZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cblx0XHR9KS52YWx1ZSgpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXHRcdHRoaXMucHJpbnRzRGF0ZSA9IHt9O1xuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgIXRoaXMubG9hZGVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdF8odGhpcy5zdGF0ZS5wcmludHMpLmZvckVhY2goKHByaW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMucHJpbnRzRGF0ZVtwcmludC55ZWFyXSkgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdID0ge31cblx0XHRcdFx0dGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSA9IHByaW50XG5cblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdCwgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSlcblx0XHRcdFx0ZmlsZS5zcmMgPSAnL3N0YXRpYy9pbWcvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JbWFnZUxvYWRlZChwcmludCwgZSkge1xuXHRcdHRoaXMubkltYWdlTG9hZGVkKys7XG5cblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRsZXQgcGF0aCA9IGUuZXhwbGljaXRPcmlnaW5hbFRhcmdldCB8fCBlLnRhcmdldCB8fCBlLnBhdGhbMF0gXG5cdFx0aWYgKHBhdGguaGVpZ2h0ID49IHBhdGgud2lkdGgqMS4yKSBwcmludC5zaXplID0gJ3NtYWxsJ1xuXHRcdGVsc2UgcHJpbnQuc2l6ZSA9ICdsYXJnZSdcblx0XHRcblx0XHRpZiAodGhpcy5uSW1hZ2VMb2FkZWQgPj0gdGhpcy5tYXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHQnbG9hZGVkUHJpbnRzJzogdGhpcy5wcmludHNEYXRlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLS1nYWxsZXJ5Jykuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fZ2FsbGVyeS5vZmZzZXRIZWlnaHQgKyAncHgnXG5cdFx0XHRcdHRoaXMudXBkYXRlQW5pbWF0aW9uT3V0KClcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHpvb21QcmludChpZCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdFxuXHRcdFByaW50QWN0aW9ucy5zZXRQcmludFpvb20oaWQpXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsUmFmKVxuXHRcdFxuXHRcdC8vIHRoaXMudGxJdGVtc091dCA9IG5ldyBUaW1lbGluZU1heCgpXG5cdFx0Ly8gdGhpcy50bEl0ZW1zT3V0LnN0YWdnZXJUbyhfLnNodWZmbGUoZG9tKCcuZ2FsbGVyeV9faXRlbScpKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VPdXQgfSwgMC4wMSlcblx0XHQvLyB0aGlzLnRsSXRlbXNPdXQuYWRkQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9wcm9qZWN0LycrdGhhdC5wcm9wcy5pZFNlY3Rpb247XG5cdFx0Ly8gfSwgJy09MC4yJylcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludHM6IFByaW50U3RvcmUuZ2V0QXJ0aXN0UHJpbnRzKClcblx0XHR9LCAoKSA9PiB7XG5cblx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHR0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FudmFzJylcblxuXHRcdGlmICh0aGlzLl9jYW52YXMgJiYgdGhpcy5wcm9wcy5vbGRIYXNoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX2NhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFR3ZWVuTWF4LnNldChkb20oJy5mcm9udC1jb250YWluZXInKSwge29wYWNpdHk6IDB9KTtcblx0XHRcdFR3ZWVuTWF4LnNldChkb20oJy5ob21lJyksIHtvcGFjaXR5OiAwfSk7XG5cdFx0XHRUd2Vlbk1heC5zZXQoZG9tKCcuY2FydCcpLCB7b3BhY2l0eTogMH0pO1xuXG5cdFx0XHR0aGlzLnNob3dQYWdlQmluZGVkID0gdGhpcy5zaG93UGFnZS5iaW5kKHRoaXMpXG5cdFx0XHR0aGlzLmluaXRDYW52YXMoKVxuXHRcdFx0dGhpcy5pbml0QW5pbWF0aW9uKClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGhvbWVEYXRhID0gQXBwU3RvcmUuaG9tZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1ob21lJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyBob21lX192aWRlbyc+XG5cdFx0XHRcdFx0PHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPSd2aWRlb19fZmlsZSc+XG5cdFx0XHRcdFx0XHQ8c291cmNlIHNyYz0nL3N0YXRpYy92aWRlb3MvYmctaG9tZS5tcDQnIHR5cGU9J3ZpZGVvL21wNCcgLz5cblx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPScvc3RhdGljL3ZpZGVvcy9iZy1ob21lLndlYm0nIHR5cGU9J3ZpZGVvL3dlYm0nIC8+XG5cdFx0XHRcdFx0PC92aWRlbz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lJz5cblx0XHRcdFx0XHR7T2JqZWN0LmtleXMoaG9tZURhdGEucGFyYWdyYXBocykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdob21lX19wYXJhZ3JhcGggdGV4dCB0ZXh0LS1iaWcnIGtleT17aW5kZXh9Pntob21lRGF0YS5wYXJhZ3JhcGhzW2luZGV4XX08L3A+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHRcdFx0XHRcdC8vIDxwIGNsYXNzTmFtZT0ndGV4dCB0ZXh0LS1iaWcnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBob21lRGF0YS5jb250ZW50fX0gLz5cblx0fVxuXG5cdC8vIHNldHVwQW5pbWF0aW9ucygpIHtcblx0Ly8gXHRsZXQgd3JhcHBlciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cblx0Ly8gXHQvLyB0cmFuc2l0aW9uIEluXG5cdC8vIFx0dGhpcy50bEluLmZyb20od3JhcHBlciwgMSwgeyB5OiB3aW5kb3cuaW5uZXJIZWlnaHQsIG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdC8vIFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0Ly8gXHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDEsIHsgeTogd2luZG93LmlubmVySGVpZ2h0LCBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHQvLyBcdC8vIHJlc2V0XG5cdC8vIFx0dGhpcy50bEluLnBhdXNlKDApXG5cdC8vIFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHQvLyB9XG5cblx0aW5pdENhbnZhcygpIHtcblx0XHRsZXQgY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0bGV0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0bGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gdnc7XG5cdFx0dGhpcy5fY2FudmFzLmhlaWdodCA9IHZoO1xuXG5cdFx0Ly8gYmFja2dyb3VuZCBibGFja1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHgucmVjdCgwLCAwLCB2dywgdmgpO1xuXHRcdGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGN0eC5maWxsKCk7XG5cblx0XHQvLyBjcm9wIGxvZ29cblx0XHRjdHguZm9udCA9IFwiNDAwIDcycHggJ2hjN21vZGVybidcIjtcblx0XHRjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblx0XHRjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdXRcIjtcblx0XHQvLyBjdHguZmlsbFRleHQoJ0VsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcnLCB2dy8yLCB2aC8yIC0gMTYpO1xuXHRcdGN0eC5maWxsVGV4dCgnRUxMSU9UVCBFUldJVFQgSEFWQU5BIENMVUIgNycsIHZ3LzIsIHZoLzIgLSAxNik7XG5cdFx0Y3R4LmZvbnQgPSBcIjQwMCA3MnB4ICdTdGFubGV5J1wiO1xuXHRcdGN0eC5maWxsVGV4dCgnRmVsbG93c2hpcCcsIHZ3LzIsIHZoLzIgKyA2OCk7XG5cdH1cblxuXHRpbml0QW5pbWF0aW9uKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdFxuXHRcdHRoaXMudGxFbnRyeSA9IG5ldyBUaW1lbGluZU1heCh7ZGVsYXk6IDQsIG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdHRoYXQuX2NhbnZhcy5yZW1vdmUoKVxuXHRcdH19KTtcblx0XHR0aGlzLnRsRW50cnkudG8odGhpcy5fY2FudmFzLCAxLCB7b3BhY2l0eTogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblx0XHR0aGlzLnRsRW50cnkudG8oZG9tKCcuZnJvbnQtY29udGFpbmVyJyksIDAuNCwge29wYWNpdHk6IDF9LCAwLjYpXG5cdFx0dGhpcy50bEVudHJ5LnRvKGRvbSgnLmhvbWUnKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNilcblx0XHR0aGlzLnRsRW50cnkudG8oZG9tKCcuY2FydCcpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC42KVxuXHRcdC8vIFR3ZWVuTWF4LnRvKHRoaXMuX2NhbnZhcywgNCwge3g6IC12dywgZWFzZTogUG93ZXIyLmVhc2VPdXQsIGRlbGF5OiA0LCBvbkNvbXBsZXRlOiB0aGlzLnNob3dQYWdlQmluZGVkfSk7XG5cdH1cblx0XG5cdHNob3dQYWdlKCkge1xuXHRcdFR3ZWVuTWF4LnRvKGRvbSgnLmZyb250LWNvbnRhaW5lcicpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0VHdlZW5NYXgudG8oZG9tKCcuaG9tZScpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0VHdlZW5NYXgudG8oZG9tKCcuY2FydCcpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0dGhpcy5fY2FudmFzLnJlbW92ZSgpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cblx0XHRpZiAod2luZG93Vy8xLjggPCB3aW5kb3dIKSBkb20oJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9ydHJhaXQnKVxuXHRcdGVsc2UgZG9tKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcnRyYWl0JylcblxuXHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpLm9mZnNldEhlaWdodCA8IDIwMCkge1xuXHRcdFx0ZG9tKCcuaG9tZScpLmFkZENsYXNzKCdob21lLS1yZWxhdGl2ZScpXG5cdFx0fcKgZWxzZSB7XG5cdFx0XHRkb20oJy5ob21lJykucmVtb3ZlQ2xhc3MoJ2hvbWUtLXJlbGF0aXZlJylcblx0XHR9XG5cdH1cblxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhbCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nbGVnYWxQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgb2Zmc2V0IGZyb20gJ29mZnNldCdcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3MgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXG5cdFx0dGhpcy5fcmFmQmluZGVkID0gdGhpcy5fcmFmLmJpbmQodGhpcylcblxuXHRcdHRoaXMuZVNob3cgPSBbXVxuXHRcdHRoaXMuc1RvcCA9IDBcblx0XHR0aGlzLmNUb3AgPSAwXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblxuXHRcdHRoaXMuX25ld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cycpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtLW5ld3MnKS5zdHlsZS5oZWlnaHQgPSB0aGlzLl9uZXdzLm9mZnNldEhlaWdodCArICdweCdcblxuXHRcdHRoaXMuX3JhZigpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNpZGVcblx0XHRsZXQgbmV3c0RhdGEgPSBBcHBTdG9yZS5uZXdzQ29udGVudCgpXG5cdFx0bGV0IG5ld3NJdGVtcyA9IG5ld3NEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRpZiAoaW5kZXggJSAyID09PSAwKSB7IHJldHVybiAoXG5cdFx0XHRcdDxhcnRpY2xlIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbmV3c19faXRlbSBuZXdzX19pdGVtLS1yaWdodCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25ld3NfX2NvbnRlbnQnPntpdGVtLmNvbnRlbnR9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25ld3NfX2RhdGUnPntpdGVtLmRhdGV9PC9kaXY+XG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdCl9IGVsc2UgeyByZXR1cm4gKFxuXHRcdFx0XHQ8YXJ0aWNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J25ld3NfX2l0ZW0gbmV3c19faXRlbS0tbGVmdCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25ld3NfX2RhdGUnPntpdGVtLmRhdGV9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25ld3NfX2NvbnRlbnQnPntpdGVtLmNvbnRlbnR9PC9kaXY+XG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdCl9XG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tbmV3cycgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J25ld3MnPntuZXdzSXRlbXN9PC9zZWN0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0X3JhZigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGxJbmRleCAlIDMpIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0ZWxzZSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdHRoaXMuc2Nyb2xsSW5kZXgrK1xuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsT2spIHtcblx0XHRcdHRoaXMuaGFuZGxlU2Nyb2xsKClcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFJhZiA9IHNjcm9sbCh0aGlzLl9yYWZCaW5kZWQpO1xuXHR9XG5cblx0aGFuZGxlU2Nyb2xsKCkge1xuXHRcdGxldCBlO1xuXHRcdHRoaXMuc1RvcCA9IFV0aWxzLkdldFNjcm9sbFRvcCgpXG5cdFx0dGhpcy5jVG9wICs9IC4xICogKHRoaXMuc1RvcCAtIHRoaXMuY1RvcClcblx0XHRlID0gLXRoaXMuY1RvcFxuXHRcdGlmICh0aGlzLl9uZXdzKSB0aGlzLl9uZXdzLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUzZCgwLCAnICsgZSArICdweCwgMCknXG5cblx0XHRfKGRvbSgnLm5ld3NfX2l0ZW0nKSkuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG5cdFx0XHR0aGlzLmxUb3AgPSBvZmZzZXQoZWwpLnRvcFxuXHRcdFx0aWYgKCF0aGlzLmVTaG93W2luZGV4XSkge1xuXHRcdFx0XHR0aGlzLmVTaG93W2luZGV4XSA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdC8vIGluIHZpZXdwb3J0XG5cdFx0XHRpZiAodGhpcy5sVG9wIC0gd2luZG93LmlubmVySGVpZ2h0IDwgMCAmJiAhdGhpcy5lU2hvd1tpbmRleF0pIHtcblx0XHRcdFx0dGhpcy5lU2hvd1tpbmRleF0gPSB0cnVlXG5cdFx0XHRcdFR3ZWVuTWF4LnRvKGVsLCAwLjYsIHt5OiAwLCBvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZU91dCwgZGVsYXk6IE1hdGgucmFuZG9tKCkqMC4yfSlcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gb2ZmIHZpZXdwb3J0XG5cdFx0XHRpZiAodGhpcy5sVG9wIC0gd2luZG93LmlubmVySGVpZ2h0ID4gMCAmJiB0aGlzLmVTaG93W2luZGV4XSkge1xuXHRcdFx0XHR0aGlzLmVTaG93W2luZGV4XSA9IGZhbHNlXG5cdFx0XHRcdFR3ZWVuTWF4LnNldChlbCwge3k6IDEwMCwgb3BhY2l0eTogMH0pXG5cdFx0XHR9XG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Zm91bmQgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9JzQwNFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0PHA+RXJyb3IgNDA0IOKAlCBQYWdlIG5vdCBmb3VuZDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IENhcnRBY3Rpb25zIGZyb20gJ0NhcnRBY3Rpb25zJ1xuaW1wb3J0IENhcnRTdG9yZSBmcm9tICdDYXJ0U3RvcmUnXG5pbXBvcnQgQ2FydEFwaSBmcm9tICdDYXJ0QXBpJ1xuaW1wb3J0IFByaW50QXBpIGZyb20gJ1ByaW50QXBpJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5mdW5jdGlvbiBfZ2V0Q2FydFN0YXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpLFxuXHRcdGNhcnRDb3VudDogQ2FydFN0b3JlLmdldENhcnRDb3VudCgpLFxuXHRcdGNhcnRUb3RhbDogQ2FydFN0b3JlLmdldENhcnRUb3RhbCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5bWVudCBleHRlbmRzIFBhZ2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IF9nZXRDYXJ0U3RhdGUoKVxuXHRcdHRoaXMuc3RhdGUuZm9ybSA9IHVuZGVmaW5lZFxuXHR9XG5cdFxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cblx0XHRsZXQgaGFjayA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZChmYWxzZSlcblx0XHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRWaXNpYmxlKGZhbHNlKVxuXHRcdFx0Y2xlYXJUaW1lb3V0KGhhY2spXG5cdFx0fSwgMCk7XG5cblx0XHRDYXJ0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0VmlzaWJsZSh0cnVlKVxuXHR9XG5cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uc2V0KHdyYXBwZXIsIHsgb3BhY2l0eTogMSB9LCAwKVxuXHRcdHRoaXMudGxJbi50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fb3ZlcmxheS0tcGF5bWVudCcpLCAwLjQsIHsgeTogd2luZG93LmlubmVySGVpZ2h0LCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDApXG5cdFx0dGhpcy50bEluLmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MSwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwLjQpXG5cdFx0dGhpcy50bEluLmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheW1lbnQnKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZUluT3V0IH0sIDAuNClcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190aXRsZScpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDApXG5cdFx0dGhpcy50bE91dC50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudCcpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsT3V0LnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19vdmVybGF5LS1wYXltZW50JyksIDAuNCwgeyB5OiAwLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDAuNilcblx0XHR0aGlzLnRsT3V0LnNldCh3cmFwcGVyLCB7IG9wYWNpdHk6MCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcGF5bWVudCcgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fb3ZlcmxheSBwYWdlX19vdmVybGF5LS1wYXltZW50Jz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnQnPlxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT0ncGF5bWVudF9fZm9ybSBmb3JtJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+Q2hlY2tvdXQ8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nbWFpbCc+RW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0nbWFpbCcgaWQ9J21haWwnLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX3RpdGxlJz5TaGlwcGluZyBhZGRyZXNzPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2ZpcnN0bmFtZSc+Rmlyc3QgbmFtZSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nZmlyc3RuYW1lJy8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nbGFzdG5hbWUnPkxhc3QgbmFtZSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nbGFzdG5hbWUnLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdwaG9uZSc+VGVsZXBob25lICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZWwnIGlkPSdwaG9uZScvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2FkZHJlc3MnPkFkZHJlc3MgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQgZm9ybV9faW5wdXQtLWNvbXAnIHR5cGU9J3RleHQnIGlkPSdhZGRyZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdhZGRyZXNzQmlzJy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nemlwJz5aaXAvUG9zdGFsIGNvZGUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J3ppcCcvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J2NpdHknPkNpdHk8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdjaXR5Jy8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nY291bnRyeSc+Q291bnRyeSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2NvdW50cnknLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnIGlkPSdiaWxsQWRkcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdiaWxsQWRkcmVzcyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5CaWxsIHRvIHRoZSBzYW1lIGFkZHJlc3M8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX3RpdGxlJz5TaGlwcGluZyBtZXRob2Q8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3NoaXBwaW5nTWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J3Vwc1N0YW5kYXJkJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3Vwc1N0YW5kYXJkJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPlVQUyBTdGFuZGFyZCAtIERlbGl2ZXJ5IHdpdGhpbiAzLTUgYnVzaW5lc3MgZGF5cywgMTAg4oKsPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3NoaXBwaW5nTWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J3Vwc0V4cHJlc3MnLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0ndXBzRXhwcmVzcyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5VUFMgRXhwcmVzcyAtIERlbGl2ZXJ5IHdpdGhpbiAyLTMgYnVzaW5lc3MgZGF5cywgMjAg4oKsPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIG5hbWU9J3NoaXBwaW5nTWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J2ZyZWVTaGlwcGluZycgZGVmYXVsdENoZWNrZWQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdmcmVlU2hpcHBpbmcnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+RnJlZSBzaGlwcGluZyAoVVBTIHN0YW5kYXJkKSwgMCDigqw8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncGF5bWVudF9fbWV0aG9kIGZvcm1fX3RpdGxlJz5QYXltZW50IG1ldGhvZDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cgZm9ybV9fcm93LS1oYWxmJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0ncGF5bWVudE1ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSdtYWVzdHJvJyBkZWZhdWx0Q2hlY2tlZC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nbWFlc3Rybyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz48aW1nIHNyYz0nLi9hc3NldHMvaW1hZ2VzL21hZXN0cm8tYmxhY2sucG5nJz48L2ltZz48L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0ncGF5bWVudE1ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSd2aXNhJy8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0ndmlzYSc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz48aW1nIHNyYz0nLi9hc3NldHMvaW1hZ2VzL3Zpc2EtYmxhY2sucG5nJz48L2ltZz48L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cgZm9ybV9fcm93LS1oYWxmJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0ncGF5bWVudE1ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSdwYXlwYWwnLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdwYXlwYWwnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+PGltZyBzcmM9Jy4vYXNzZXRzL2ltYWdlcy9wYXlwYWwtYmxhY2sucG5nJz48L2ltZz48L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0ncGF5bWVudE1ldGhvZCcgdHlwZT0ncmFkaW8nIGlkPSdhbWVyaWNhbkV4cHJlc3MnLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdhbWVyaWNhbkV4cHJlc3MnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+PGltZyBzcmM9Jy4vYXNzZXRzL2ltYWdlcy9hbWVyaWNhbi1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPk9yZGVyIHN1bW1hcnk8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdwYXltZW50X19wcm9kdWN0cyBjYXJ0X19wcm9kdWN0cyc+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUuY2FydEl0ZW1zKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgcHJvZHVjdCA9IHRoYXQuc3RhdGUuY2FydEl0ZW1zW2luZGV4XTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3BheW1lbnRfX3Byb2R1Y3QgY2FydF9fcHJvZHVjdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fYXJ0aXN0Jz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19kZXRhaWxzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NpdHknPntwcm9kdWN0LmNpdHl9PC9kaXY+LCA8ZGl2IGNsYXNzTmFtZT0nY2FydF9feWVhcic+e3Byb2R1Y3QueWVhcn08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3NlcmlhbCc+U2VyaWFsIDxzcGFuIGNsYXNzTmFtZT0nY2FydF9fbnVtYmVyJz57cHJvZHVjdC5zZXJpYWx9L3twcm9kdWN0LmNvcGllc308L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpY2UnPntwcm9kdWN0LnByaWNlfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19wcmludCc+PGltZyBjbGFzc05hbWU9J2NhcnRfX2ltYWdlJyBzcmM9eycvc3RhdGljL2ltZy8nK3Byb2R1Y3QuZmlsZSsnX21pbi5qcGcnfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19yZW1vdmUgYnV0dG9uIGJ1dHRvbi0tbGVmdCcgb25DbGljaz17dGhhdC5yZW1vdmVJdGVtLmJpbmQodGhhdCwgaW5kZXgpfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+UmVtb3ZlIGl0ZW08L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X190b3RhbCBjYXJ0X190b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX3N1YnRvdGFsIGNhcnRfX3N1YnRvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlN1YnRvdGFsOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+e3RoaXMuc3RhdGUuY2FydFRvdGFsfTxzcGFuIGNsYXNzTmFtZT0nY2FydF9fY3VycmVuY3knPuKCrDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fdHZhJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPkluY2x1ZGVkIFRWQTo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnN0YXRlLmNhcnRUb3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fYmlndG90YWwnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPkdyYW5kIHRvdGFsOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnN0YXRlLmNhcnRUb3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nbmV3c2xldHRlcicvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSduZXdzbGV0dGVyJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPk5ld3M8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnIGlkPSdjb25kaXRpb25zJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2NvbmRpdGlvbnMnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+SSBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zKjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPScnIGNsYXNzTmFtZT0ncGF5bWVudF9fcGF5IGJ1dHRvbicgb25DbGljaz17dGhpcy5wYXkuYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPlByb2NlZWQgdG8gcGF5bWVudDwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmZvcm19fSAvPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cGF5KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdENhcnRBcGkuZ2VuZXJhdGVQYXlCdXR0b24oe1xuXHRcdFx0ZW1haWw6ICdoZWxsb0BhemUuY29tJyxcblx0XHRcdGZpcnN0bmFtZTogJ05pY29sYXMnLFxuXHRcdFx0bGFzdG5hbWU6ICdEYW5pZWwnLFxuXHRcdFx0cGhvbmU6ICcwMTAyMDMwNDA1Jyxcblx0XHRcdGFkZHJlc3M6ICcyMyBydWUgeHh4Jyxcblx0XHRcdHppcDogJzEyMzQ1Jyxcblx0XHRcdGNpdHk6ICdBemVydHknLFxuXHRcdFx0Y291bnRyeTogJ0ZyYW5jZScsXG5cdFx0XHR0b3RhbDogdGhpcy5zdGF0ZS5jYXJ0VG90YWwgKiAxMDBcblx0XHR9KVxuXHR9XG5cblx0cmVtb3ZlSXRlbShpZCkge1xuXHRcdENhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0KGlkKVxuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uU3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb3JtOiBDYXJ0U3RvcmUuZ2V0Rm9ybSgpXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXltZW50Rm9ybScpKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF5bWVudEZvcm0nKS5zdWJtaXQoKVxuXHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBDYXJ0QWN0aW9ucyBmcm9tICdDYXJ0QWN0aW9ucydcbmltcG9ydCBDYXJ0U3RvcmUgZnJvbSAnQ2FydFN0b3JlJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludCBleHRlbmRzIFBhZ2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludDogdW5kZWZpbmVkLFxuXHRcdFx0c2VsZWN0ZWRTZXJpYWw6IHVuZGVmaW5lZCxcblx0XHRcdGxvYWRlZFByaW50OiB1bmRlZmluZWQsXG5cdFx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRcdHZhbGlkU2VyaWFsczogW11cblx0XHR9XG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl90b2dnbGVMaXN0QmluZGVkID0gdGhpcy5fdG9nZ2xlTGlzdC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fYWRkVG9DYXJ0QmluZGVkID0gdGhpcy5fYWRkVG9DYXJ0LmJpbmQodGhpcylcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25DYXJ0U3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vbkNhcnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZVxuXHRcdHRoaXMudmFsaWRTZXJpYWxzID0gW11cblx0XHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS1ibGFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRQcmludEFwaS5nZXRPbmUodGhpcy5wcm9wcy5pZFNlY3Rpb24pO1xuXHRcdFByaW50U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0Q2FydFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0dGhpcy5fbG9hZEltYWdlKClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgZmlsZVxuXHRcdGlmICghdGhpcy5sb2FkZWQpIHtcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0dGhpcy5fbG9hZEltYWdlKClcblx0XHR9XG5cblx0XHQvLyB0aGlzLl91cGRhdGVTZXJpYWxzKClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFByaW50U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XHRcblx0XHRDYXJ0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdC8vIGlmICh0aGlzLnByb3BzLm9sZEhhc2gucGFyZW50ID09PSAnc2hvcCcpIHtcblx0XHQvLyBcdHRoaXMudGxJbi5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RpdGxlJyksIDAuNiwgeyBvcGFjaXR5OjEsIGVhc2U6UG93ZXIyLmVhc2VPdXQgfSwgMClcblx0XHQvLyBcdHRoaXMudGxJbi5zZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW50JyksIHsgb3BhY2l0eToxIH0sIDApXG5cdFx0Ly8gXHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0dGhpcy50bEluLnNldCh3cmFwcGVyLCB7IG9wYWNpdHk6IDEgfSwgMClcblx0XHRcdHRoaXMudGxJbi50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fb3ZlcmxheS0tcHJpbnQnKSwgMC40LCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHRcdFx0dGhpcy50bEluLmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MSwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwLjQpXG5cdFx0XHR0aGlzLnRsSW4uZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbnQnKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZUluT3V0IH0sIDAuNClcblx0XHQvLyB9XG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHRcdHRoaXMudGxPdXQudG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW50JyksIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6UG93ZXIyLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxPdXQudG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX292ZXJsYXktLXByaW50JyksIDAuNCwgeyB5OiAwLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDAuNilcblx0XHR0aGlzLnRsT3V0LnNldCh3cmFwcGVyLCB7IG9wYWNpdHk6MCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IHRpdGxlLCBjaXR5LCBjb3VudHJ5LCB5ZWFyLCBwcmljZSwgZGVzYywgc2VyaWFsc1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUucHJpbnQpIHtcblx0XHRcdHRoaXMudmFsaWRTZXJpYWxzID0gdGhpcy5fZ2V0VmFsaWRTZXJpYWxzKClcblx0XHRcdHRoaXMuc2VsZWN0ZWRTZXJpYWwgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU2VyaWFsIHx8IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblxuXHRcdFx0dGl0bGUgPSB0aGlzLnN0YXRlLnByaW50LnRpdGxlXG5cdFx0XHRjaXR5ID0gdGhpcy5zdGF0ZS5wcmludC5jaXR5XG5cdFx0XHRjb3VudHJ5ID0gdGhpcy5zdGF0ZS5wcmludC5jb3VudHJ5XG5cdFx0XHR5ZWFyID0gdGhpcy5zdGF0ZS5wcmludC55ZWFyXG5cdFx0XHRwcmljZSA9IHRoaXMuc3RhdGUucHJpbnQucHJpY2Vcblx0XHRcdGRlc2MgPSB0aGlzLnN0YXRlLnByaW50LmRlc2Ncblx0XHRcdHNlcmlhbHMgPSB0aGlzLnN0YXRlLnByaW50LnNlcmlhbHNcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJpbnQnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX292ZXJsYXkgcGFnZV9fb3ZlcmxheS0tcHJpbnQnPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludCc+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkZWRQcmludH1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9faW5mb3MnPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcmludF9fdGl0bGUgcHJpbnRfX3RpdGxlLS1tYXJnaW4nPnt0aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwcmludF9fbG9jYXRpb24nPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJpbnRfX2NpdHknPntjaXR5fSwge2NvdW50cnl9LDwvc3Bhbj4ge3llYXJ9XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3ByaW50X19hcnRpc3QnPkVsbGlvdHQgRXJ3aXR0PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19wcmljZSB0ZXh0IHRleHQtLXNtYWxsJz57cHJpY2V94oKsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJpbnRfX2Rlc2MgdGV4dCB0ZXh0LS1zbWFsbCc+e2Rlc2N9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbHMnPlxuXHRcdFx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHNlcmlhbHMgJiYgc2VyaWFscy5sZW5ndGggPiAwKSB7IHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwtb3B0Jz5TZXJpYWwgb3B0aW9uPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZWxlY3QnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwtLXNlbGVjdGVkJyBvbkNsaWNrPXt0aGlzLl90b2dnbGVMaXN0QmluZGVkfT57dGhhdC5zZWxlY3RlZFNlcmlhbH08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwtbGlzdCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnZhbGlkU2VyaWFscykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBlbmFibGVkID0gdGhhdC52YWxpZFNlcmlhbHNbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHNlcmlhbCA9IHBhcnNlSW50KGluZGV4KSsxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbGV0IGNsYXNzU2VsZWN0ZWQgPSAoc2VyaWFsID09PSB0aGF0LnN0YXRlLnNlcmlhbCkgPyAncHJpbnRfX3NlcmlhbC0tc2VsZWN0ZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBsZXQgY2xhc3NFbmFibGVkID0gKGVuYWJsZWQpID8gJ3ByaW50X19zZXJpYWwtLWVuYWJsZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZW5hYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICg8bGkgY2xhc3NOYW1lPSdwcmludF9fc2VyaWFsJyBvbkNsaWNrPXt0aGF0Ll9zZWxlY3RTZXJpYWwuYmluZCh0aGF0LCBzZXJpYWwpfSBrZXk9e2luZGV4fT57c2VyaWFsfTwvbGk+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKDxsaSBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwgcHJpbnRfX3NlcmlhbC0tZGlzYWJsZWQnIGtleT17aW5kZXh9PntzZXJpYWx9PC9saT4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdwcmludF9fYnV5IHRleHQgdGV4dC0tc21hbGwgYnV0dG9uIGJ1dHRvbi0tcmV2ZXJzZScgb25DbGljaz17dGhhdC5fYWRkVG9DYXJ0QmluZGVkfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+QnV5IHByaW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfSBlbHNlIHsgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5PdXQgb2Ygc3RvY2s8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdC8vIF91cGRhdGVTZXJpYWxzKCkge1xuXHQvLyBcdGNvbnNvbGUubG9nKCd1cGRhdGUgdmFsaWRTZXJpYWxzJylcblx0Ly8gXHR0aGlzLnZhbGlkU2VyaWFscyA9IFtdXG5cdC8vIFx0dGhpcy5jYXJ0U2VyaWFscyA9IF8ucGx1Y2soXy5maWx0ZXIodGhpcy5zdGF0ZS5jYXJ0SXRlbXMsIHsgJ2lkJzogdGhpcy5zdGF0ZS5wcmludC5faWQgfSksICdzZXJpYWwnKVxuXHQvLyBcdF8odGhpcy5zdGF0ZS5wcmludC5zZXJpYWxzKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0Ly8gXHRcdGlmIChfLmluZGV4T2YodGhpcy5jYXJ0U2VyaWFscywgaW5kZXgrMSkgPiAtMSkgdGhpcy52YWxpZFNlcmlhbHNbaW5kZXhdID0gZmFsc2Vcblx0Ly8gXHRcdGVsc2UgdGhpcy52YWxpZFNlcmlhbHNbaW5kZXhdID0gdmFsdWVcblx0Ly8gXHR9KS52YWx1ZSgpXG5cblx0Ly8gXHQvLyB0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHQvLyBcdHZhbGlkU2VyaWFsczogdGhpcy52YWxpZFNlcmlhbHNcblx0Ly8gXHQvLyB9LCAoKSA9PiB7XG5cdC8vIFx0Ly8gXHR0aGlzLl9nZXRGaXJzdFNlcmlhbCgpXG5cdC8vIFx0Ly8gfSlcblxuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0dmFsaWRTZXJpYWxzOiB0aGlzLnZhbGlkU2VyaWFscyxcblx0Ly8gXHRcdHNlbGVjdGVkU2VyaWFsOiB0aGlzLl9nZXRGaXJzdFNlcmlhbCgpXG5cdC8vIFx0fSlcblx0Ly8gfVxuXG5cdF9nZXRWYWxpZFNlcmlhbHMoKSB7XG5cdFx0dGhpcy52YWxpZFNlcmlhbHMgPSBbXVxuXHRcdHRoaXMuY2FydFNlcmlhbHMgPSBfLnBsdWNrKF8uZmlsdGVyKHRoaXMuc3RhdGUuY2FydEl0ZW1zLCB7ICdpZCc6IHRoaXMuc3RhdGUucHJpbnQuX2lkIH0pLCAnc2VyaWFsJylcblx0XHRfKHRoaXMuc3RhdGUucHJpbnQuc2VyaWFscykuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoXy5pbmRleE9mKHRoaXMuY2FydFNlcmlhbHMsIGluZGV4KzEpID4gLTEpIHRoaXMudmFsaWRTZXJpYWxzW2luZGV4XSA9IGZhbHNlXG5cdFx0XHRlbHNlIHRoaXMudmFsaWRTZXJpYWxzW2luZGV4XSA9IHZhbHVlXG5cdFx0fSkudmFsdWUoKVxuXG5cdFx0cmV0dXJuIHRoaXMudmFsaWRTZXJpYWxzXG5cdH1cblxuXHRfZ2V0Rmlyc3RTZXJpYWwoKSB7XG5cdFx0cmV0dXJuIF8uaW5kZXhPZih0aGlzLnZhbGlkU2VyaWFscywgdHJ1ZSkgKyAxXG5cdH1cblxuXHRfc2VsZWN0U2VyaWFsKHNlcmlhbCwgZSkge1xuXHRcdHRoaXMuX3RvZ2dsZUxpc3QoKVxuXHRcdGRvbSgnLnNlcmlhbC0tZW5hYmxlZCcpLnJlbW92ZUNsYXNzKCdzZXJpYWwtLWVuYWJsZWQnKVxuXHRcdGRvbShlLnRhcmdldCkuYWRkQ2xhc3MoJ3NlcmlhbC0tZW5hYmxlZCcpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFNlcmlhbDogc2VyaWFsXG5cdFx0fSlcblx0fVxuXG5cdF9hZGRUb0NhcnQoZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdGxldCBwcmludElkID0gdGhpcy5zdGF0ZS5wcmludC5faWQ7XG5cdFx0bGV0IHVwZGF0ZSA9IHtcblx0XHRcdGlkOiB0aGlzLnN0YXRlLnByaW50Ll9pZCxcblx0XHRcdGNpdHk6IHRoaXMuc3RhdGUucHJpbnQuY2l0eSxcblx0XHRcdHllYXI6IHRoaXMuc3RhdGUucHJpbnQueWVhcixcblx0XHRcdHByaWNlOiB0aGlzLnN0YXRlLnByaW50LnByaWNlLFxuXHRcdFx0c2VyaWFsOiB0aGlzLnN0YXRlLnNlbGVjdGVkU2VyaWFsLFxuXHRcdFx0ZmlsZTogdGhpcy5zdGF0ZS5wcmludC5maWxlLFxuXHRcdFx0Y29waWVzOiB0aGlzLnN0YXRlLnByaW50LmNvcGllc1xuXHRcdH1cblx0XHRDYXJ0QWN0aW9ucy5hZGRUb0NhcnQocHJpbnRJZCwgdXBkYXRlKTtcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZCh0cnVlKTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWRTZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0XHR9KVxuXHR9XG5cblx0X3RvZ2dsZUxpc3QoKSB7XG5cdFx0ZG9tKCcucHJpbnRfX3NlcmlhbC1saXN0JykudG9nZ2xlQ2xhc3MoJ2VuYWJsZWQnKVxuXHR9XG5cblx0X2xvYWRJbWFnZSgpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXMsIGZpbGVcblxuXHRcdGZpbGUgPSBuZXcgSW1hZ2UoKVxuXHRcdGZpbGUub25sb2FkID0gdGhhdC5fb25JbWFnZUxvYWRlZC5iaW5kKHRoYXQpXG5cdFx0ZmlsZS5zcmMgPSAnL3N0YXRpYy9pbWcvJyt0aGlzLnN0YXRlLnByaW50LmZpbGUrJ19tZWRpdW0uanBnJ1xuXHR9XG5cblx0X29uSW1hZ2VMb2FkZWQoZSkge1xuXHRcdGxldCBzaXplXG5cdFx0bGV0IHBhdGggPSBlLmV4cGxpY2l0T3JpZ2luYWxUYXJnZXQgfHwgZS50YXJnZXQgfHwgZS5wYXRoWzBdIFxuXHRcdGlmIChwYXRoLmhlaWdodCA+PSBwYXRoLndpZHRoKjEuMikgc2l6ZSA9ICdwb3J0cmFpdCdcblx0XHRlbHNlIHNpemUgPSAnbGFuZHNjYXBlJ1xuXHRcdGxldCBkaW0gPSAnMjcuOSDDlyAzNS42IGNtJyAvLyBnw6lyZXIgbGEgY29udmVyc2lvbiAoMTEgw5cgMTQgaW5jaGVzKVxuXG5cdFx0dGhpcy5wcmludCA9IDxkaXYgY2xhc3NOYW1lPSdwcmludF9fbGVmdCc+PGRpdiBjbGFzc05hbWU9eydwcmludF9faW1hZ2UgcHJpbnRfX2ltYWdlLS0nK3NpemV9PjxpbWcgc3JjPXsnL3N0YXRpYy9pbWcvJyt0aGlzLnN0YXRlLnByaW50LmZpbGUrJ19tZWRpdW0uanBnJ30+PC9pbWc+PGRpdiBjbGFzc05hbWU9J3ByaW50X190ZWNoJz48cD5TaWx2ZXIgZ2VsYXRpbiBwcmludCBtZWFzdXJpbmc8L3A+PHA+e2RpbX0sIHVuZnJhbWVkLjwvcD48cD5QcmludGVkIHVuZGVyIHRoZSBkaXJlY3Qgc3VwZXJ2aXNpb24gb2YgdGhlIGFydGlzdC48L3A+PHA+T25lIG9mIGEgc2lnbmVkLCBsaW1pdGVkIGVkaXRpb24gb2Yge3RoaXMuc3RhdGUucHJpbnQuY29waWVzfS48L3A+PC9kaXY+PC9kaXY+PC9kaXY+XG5cblx0XHQvLyBpZiAocGFyYW1zLnBhdGhbMF0uaGVpZ2h0ID49IHBhcmFtcy5wYXRoWzBdLndpZHRoKjEuMikge1xuXHRcdC8vIFx0dGhpcy5wcmludCA9IDxkaXYgY2xhc3NOYW1lPSdwcmludF9fbGVmdCc+PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbWFnZSBwcmludF9faW1hZ2UtLXBvcnRyYWl0Jz48aW1nIHNyYz17Jy9zdGF0aWMvaW1nLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+U2lsdmVyIGdlbGF0aW4gcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dGhpcy5wcmludCA9IDxkaXYgY2xhc3NOYW1lPSdwcmludF9fbGVmdCc+PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbWFnZSBwcmludF9faW1hZ2UtLWxhbmRzY2FwZSc+PGltZyBzcmM9eycvc3RhdGljL2ltZy8nK3RoaXMuc3RhdGUucHJpbnQuZmlsZSsnX21lZGl1bS5qcGcnfT48L2ltZz48ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3RlY2gnPjxwPlNpbHZlciBnZWxhdGluIHByaW50IG1lYXN1cmluZzwvcD48cD4yNy45IMOXIDM1LjYgY20gKDExIMOXIDE0IGluY2hlcyksIHVuZnJhbWVkLjwvcD48cD5QcmludGVkIHVuZGVyIHRoZSBkaXJlY3Qgc3VwZXJ2aXNpb24gb2YgdGhlIGFydGlzdC48L3A+PHA+T25lIG9mIGEgc2lnbmVkLCBsaW1pdGVkIGVkaXRpb24gb2Yge3RoaXMuc3RhdGUucHJpbnQuY29waWVzfS48L3A+PC9kaXY+PC9kaXY+PC9kaXY+XG5cdFx0Ly8gfVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0J2xvYWRlZFByaW50JzogdGhpcy5wcmludFxuXHRcdH0pO1xuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cblx0X29uU3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKSxcblx0XHRcdGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpLFxuXHRcdFx0Ly8gc2VsZWN0ZWRTZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2VsZWN0ZWRTZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdF9vbkNhcnRTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpXG5cdFx0fSlcblx0fVxuXG5cdC8vIF9vblN0b3JlQ2hhbmdlKCkge1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0cHJpbnQ6IFByaW50U3RvcmUuZ2V0T25lKCksXG5cdC8vIFx0XHQvLyBjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKVxuXHQvLyBcdH0sICgpID0+IHtcblx0Ly8gXHRcdHRoaXMuX3VwZGF0ZVNlcmlhbHMoKVxuXHQvLyBcdFx0dGhpcy5fbG9hZEltYWdlKClcblx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0XHRzZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHRcdH0pXG5cdC8vIFx0fSlcblx0Ly8gfVxuXG5cdC8vIF9vbkNhcnRTdG9yZUNoYW5nZSgpIHtcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpXG5cdC8vIFx0fSwgKCkgPT4ge1xuXHQvLyBcdFx0dGhpcy5fdXBkYXRlU2VyaWFscygpXG5cdC8vIFx0XHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdFx0c2VyaWFsOiB0aGlzLl9nZXRGaXJzdFNlcmlhbCgpXG5cdC8vIFx0XHR9KVxuXHQvLyBcdH0pXG5cdC8vIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcml2YWN5IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwcml2YWN5UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHR7Y29udGVudC50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBQcmludFN0b3JlIGZyb20gJ1ByaW50U3RvcmUnXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5pbXBvcnQgUHJpbnRBY3Rpb25zIGZyb20gJ1ByaW50QWN0aW9ucydcbmltcG9ydCBQcmludENvbnN0YW50cyBmcm9tICdQcmludENvbnN0YW50cydcbmltcG9ydCBBcnRpc3RTdG9yZSBmcm9tICdBcnRpc3RTdG9yZSdcbmltcG9ydCBBcnRpc3RBcGkgZnJvbSAnQXJ0aXN0QXBpJ1xuaW1wb3J0IFR3ZWVubWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgb2Zmc2V0IGZyb20gJ29mZnNldCdcbmltcG9ydCBzY3JvbGxUbyBmcm9tICdzY3JvbGxUbydcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBwcm9wc1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdGFydGlzdDogdW5kZWZpbmVkLFxuXHRcdFx0c2xpZGVzaG93OiB7fSxcblx0XHRcdHByaW50OiB7fSxcblx0XHRcdHByaW50czoge30sXG5cdFx0XHRjdXJyZW50OiAwXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fc2hvd1NsaWRlc2hvd0JpbmRlZCA9IHRoaXMuX3Nob3dTbGlkZXNob3cuYmluZCh0aGlzKVxuXHRcdHRoaXMuX3RvZ2dsZVpvb21CaW5kZWQgPSB0aGlzLl90b2dnbGVab29tLmJpbmQodGhpcylcblx0XHR0aGlzLl90b2dnbGVTdG9yeUJpbmRlZCA9IHRoaXMuX3RvZ2dsZVN0b3J5LmJpbmQodGhpcylcblx0XHR0aGlzLl9iYWNrVG9HYWxsZXJ5QmluZGVkID0gdGhpcy5fYmFja1RvR2FsbGVyeS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcHJldkJpbmRlZCA9IHRoaXMuX3ByZXYuYmluZCh0aGlzKVxuXHRcdHRoaXMuX25leHRCaW5kZWQgPSB0aGlzLl9uZXh0LmJpbmQodGhpcylcblx0XHR0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25BcnRpc3RTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQgPSAwXG5cdFx0dGhpcy56b29tID0gZmFsc2Vcblx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cyA9IHt9XG5cdFx0dGhpcy5hY3Rpb24gPSAnaW5pdCdcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IC0xXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBoYWNrID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGF0Lnpvb20gPSBQcmludFN0b3JlLmdldFpvb20oKVxuXHRcdFx0aWYgKHRoYXQuem9vbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoYXQuem9vbVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRkb20oJy5wcm9qZWN0X19zbGlkZXNob3cnKS5yZW1vdmVDbGFzcygncHJvamVjdF9fc2xpZGVzaG93LS1kaXNhYmxlZCcpXG5cdFx0XHRcdGRvbSgnLnByb2plY3RfX2Rpc2NvdmVyJykucmVtb3ZlQ2xhc3MoJ3Byb2plY3RfX2Rpc2NvdmVyLS1kaXNhYmxlZCcpXG5cdFx0XHRcdGRvbSgnLnByb2plY3RfX2xvYWRpbmcnKS5hZGRDbGFzcygncHJvamVjdF9fbG9hZGluZy0tZGlzYWJsZWQnKVxuXHRcdFx0fVxuXHRcdFx0Ly8gXHRQcmludEFwaS5nZXRTbGlkZXNob3codGhpcy5wcm9wcy5pZFNlY3Rpb24sIHRoYXQuem9vbSlcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdFByaW50QXBpLmdldFNsaWRlc2hvdyh0aGlzLnByb3BzLmlkU2VjdGlvbik7XG5cdFx0XHQvLyB9XG5cdFx0fSwgMTApXG5cblx0XHRQcmludEFwaS5nZXRCeUFydGlzdCh0aGlzLnByb3BzLmlkU2VjdGlvbilcblx0XHRBcnRpc3RBcGkuZ2V0QnlTbHVnKHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRBcnRpc3RTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0Ly8gUHJpbnRTdG9yZS5vbihQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UU19TTElERVNIT1csIHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZClcdFxuXHRcdC8vIFByaW50U3RvcmUub24oUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVCwgdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKVx0XG5cblx0XHR0aGlzLl9pbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19pbnRybycpXG5cdFx0dGhpcy5fcmFmKClcblxuXHRcdHRoaXMuX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpXG5cdFx0dGhpcy5fcHJvamVjdFNsaWRlc2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKVxuXHRcdHRoaXMuX3Byb2plY3RQcmludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fcHJpbnRzJylcblx0XHR0aGlzLl9pbnRyb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9faW50cm8gLnByb2plY3RfX2NvbnRlbnQnKVxuXHRcdHRoaXMuX3BhZ2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtLXByb2plY3QnKVxuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdC8vIFx0Y29uc29sZS5sb2cocHJldlN0YXRlKVx0XG5cdC8vIFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZSlcblx0Ly8gfVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgIXRoaXMubG9hZGVkICYmIHRoaXMuem9vbSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdF8odGhpcy5zdGF0ZS5wcmludHMpLmZvckVhY2goKHByaW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRmaWxlID0gbmV3IEltYWdlKClcblx0XHRcdFx0ZmlsZS5vbmxvYWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzKVxuXHRcdFx0XHRmaWxlLnNyYyA9ICcvc3RhdGljL2ltZy8nK3ByaW50LmZpbGUrJ19iaWcuanBnJ1xuXHRcdFx0fS5iaW5kKHRoaXMpKS52YWx1ZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9uSW1hZ2VMb2FkZWQoZSkge1xuXHRcdHRoaXMubkltYWdlTG9hZGVkKys7XG5cblx0XHRpZiAodGhpcy5uSW1hZ2VMb2FkZWQgPj0gdGhpcy5tYXgpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdhbGwgbG9hZGVkJylcblx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRkb20oJy5wcm9qZWN0X19zbGlkZXNob3cnKS5yZW1vdmVDbGFzcygncHJvamVjdF9fc2xpZGVzaG93LS1kaXNhYmxlZCcpXG5cdFx0XHRcdGRvbSgnLnByb2plY3RfX2Rpc2NvdmVyJykucmVtb3ZlQ2xhc3MoJ3Byb2plY3RfX2Rpc2NvdmVyLS1kaXNhYmxlZCcpXG5cdFx0XHRcdGRvbSgnLnByb2plY3RfX2xvYWRpbmcnKS5hZGRDbGFzcygncHJvamVjdF9fbG9hZGluZy0tZGlzYWJsZWQnKVxuXHRcdFx0Ly8gfSwgNDAwMClcblxuXHRcdFx0dGhpcy5fcGFnZVByb2plY3Quc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5vZmZzZXRIZWlnaHQgKyAncHgnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXJ0aXN0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25BcnRpc3RTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0UHJpbnRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblByaW50U3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uc3RhZ2dlckZyb20oW1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2FydGlzdCcpLFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2Rlc2MnKVxuXHRcdF0sIDAuNiwgeyB5OjUwLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDAuMSlcblx0XHR0aGlzLnRsSW4udG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MSwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHRcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6UG93ZXIyLmVhc2VJbk91dCB9LCAwKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RpdGxlJyksIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6UG93ZXIyLmVhc2VPdXQgfSwgMClcblx0XHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6UG93ZXIyLmVhc2VJbk91dCB9LCAwKVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnByaW50c1t0aGlzLnN0YXRlLmN1cnJlbnRdXG5cdFx0XG5cdFx0bGV0IG5hbWUsIGJpbywgdGl0bGUsIGNpdHksIGNvdW50cnksIHllYXIsIHN0b3J5LCBmb3JTYWxlLCB1cmwsIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MgPSBbXVxuXHRcdFxuXHRcdGlmICh0aGlzLnN0YXRlLmFydGlzdCkge1xuXHRcdFx0bmFtZSA9IHRoaXMuc3RhdGUuYXJ0aXN0Lm5hbWVcblx0XHRcdGJpbyA9IHRoaXMuc3RhdGUuYXJ0aXN0LmJpb1xuXHRcdFx0cHJvamVjdFRpdGxlID0gdGhpcy5zdGF0ZS5hcnRpc3QucHJvamVjdC50aXRsZVxuXHRcdFx0cHJvamVjdERlc2MgPSB0aGlzLnN0YXRlLmFydGlzdC5wcm9qZWN0LmRlc2Ncblx0XHR9XG5cblx0XHRpZiAoY3VycmVudCkge1xuXHRcdFx0dGl0bGUgPSBjdXJyZW50LnRpdGxlXG5cdFx0XHRjaXR5ID0gY3VycmVudC5jaXR5XG5cdFx0XHRjb3VudHJ5ID0gY3VycmVudC5jb3VudHJ5XG5cdFx0XHR5ZWFyID0gY3VycmVudC55ZWFyXG5cdFx0XHRzdG9yeSA9IGN1cnJlbnQuZGVzY1xuXHRcdFx0Zm9yU2FsZSA9IGN1cnJlbnQuZm9yU2FsZVxuXHRcdFx0dXJsID0gJyMvc2hvcC8nICsgY3VycmVudC5faWRcblx0XHRcdGlmICghc3RvcnkpIHRoaXMuX2hpZGVTdG9yeSgpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLXByb2plY3QnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51IHByb2plY3RfX2NvbnRhY3QnPjxhIGhyZWY9eycjL3Byb2plY3QvJyt0aGlzLnByb3BzLmlkU2VjdGlvbisnL2NvbnRhY3Qtc2hlZXQnfSBjbGFzc05hbWU9J2J1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkNvbnRhY3Qgc2hlZXQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSBwcm9qZWN0X19iYWNrJz48YSBocmVmPScjJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17dGhpcy5fYmFja1RvR2FsbGVyeUJpbmRlZH0+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkJhY2sgdG8gZ2FsbGVyeTwvc3Bhbj48L2E+PC9kaXY+XG5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9qZWN0Jz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9faW50cm8nPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0X19hcnRpc3QnPntuYW1lfTwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJvamVjdF9fZGVzYyB0ZXh0IHRleHQtLW1lZGl1bSc+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHByb2plY3REZXNjKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Byb2plY3RfX3BhcmFncmFwaCcga2V5PXtpbmRleH0+e3Byb2plY3REZXNjW2luZGV4XX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2xvYWRpbmcnPkNoYXJnZW1lbnQuLi48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2Rpc2NvdmVyIHByb2plY3RfX2Rpc2NvdmVyLS1kaXNhYmxlZCcgb25DbGljaz17dGhpcy5fc2hvd1NsaWRlc2hvd0JpbmRlZH0+PGRpdiBjbGFzc05hbWU9J2Fycm93Jz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NsaWRlc2hvdyBwcm9qZWN0X19zbGlkZXNob3ctLWRpc2FibGVkJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19jb250ZW50Jz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3ByaW50cyc+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUucHJpbnRzKS5tYXAoKGlkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZpbGUgPSB0aGlzLnN0YXRlLnByaW50c1tpZF0uZmlsZSArICdfYmlnLmpwZydcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzdGF0dXMgPSAoaW5kZXggPT09IHRoaXMuc3RhdGUuY3VycmVudCkgPyAncHJvamVjdF9fcHJpbnQtLWN1cnJlbnQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsncHJvamVjdF9fcHJpbnQgJytzdGF0dXN9IG9uQ2xpY2s9e3RoYXQuX3RvZ2dsZVpvb21CaW5kZWR9IGtleT17aWR9PjxpbWcgY2xhc3NOYW1lPSdwcm9qZWN0X19pbWFnZScgc3JjPXsnL3N0YXRpYy9pbWcvJytmaWxlfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc3RvcnkgdGV4dCB0ZXh0LS1iaWcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3N0b3J5fTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fbmF2Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19wcmV2JyBvbkNsaWNrPXt0aGlzLl9wcmV2QmluZGVkfT48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX25leHQnIG9uQ2xpY2s9e3RoaXMuX25leHRCaW5kZWR9PjxkaXYgY2xhc3NOYW1lPSdhcnJvdyc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fZm9vdGVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NlY3Rpb24nPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0ncHJvamVjdF9fc2hhcmUgcHJvamVjdF9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLWxlZnQgYnV0dG9uLS1yZXZlcnNlJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+U2hhcmU8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3NlY3Rpb24gcHJvamVjdF9faW5mb3MnPlxuXHRcdFx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvclNhbGUpIHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJpbnRfX3RpdGxlIHByaW50X19pbmZvLS1zbWFsbCc+e3RpdGxlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uIHByaW50X19pbmZvLS1zbWFsbCc+e2NpdHl9LCB7Y291bnRyeX0sIHt5ZWFyfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZm9yU2FsZSkgcmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fYnV0dG9uIHByb2plY3RfX3JldmVhbCBidXR0b24gYnV0dG9uLS1sZWZ0IGJ1dHRvbi0tcmV2ZXJzZScgb25DbGljaz17dGhpcy5fdG9nZ2xlU3RvcnlCaW5kZWR9PjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5UaGUgc3Rvcnk8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17dXJsfSBjbGFzc05hbWU9J3Byb2plY3RfX2J1dHRvbiBwcm9qZWN0X19idXkgYnV0dG9uIGJ1dHRvbi0tcmlnaHQgYnV0dG9uLS1yZXZlcnNlJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+QnV5IHByaW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0Ly8gPGgzIGNsYXNzTmFtZT0ncHJpbnRfX2FydGlzdCBwcmludF9faW5mby0tc21hbGwnPntuYW1lfTwvaDM+XG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0Ly8gbGV0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRcdHRoaXMuaGFuZGxlU2Nyb2xsKClcblx0XHR9XG5cblx0XHRzY3JvbGwodGhpcy5fcmFmQmluZGVkKTtcblx0fVxuXG5cdGhhbmRsZVNjcm9sbCgpIHtcblx0XHRsZXQgZTtcblx0XHR0aGlzLnNUb3AgPSBVdGlscy5HZXRTY3JvbGxUb3AoKVxuXHRcdHRoaXMuY1RvcCArPSAuMSAqICh0aGlzLnNUb3AgLSB0aGlzLmNUb3ApXG5cdFx0ZSA9IC10aGlzLmNUb3Bcblx0XHRpZiAodGhpcy5fcHJvamVjdCkge1xuXHRcdFx0dGhpcy5fcHJvamVjdC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlM2QoMCwgJyArIGUgKyAncHgsIDApJ1xuXHRcdH1cblxuXHRcdHRoaXMub3BhY2l0eU1hcmdlID0gd2luZG93LmlubmVySGVpZ2h0LzJcblx0XHR0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuX2ludHJvKVxuXHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCArIHRoaXMubGltaXRPZmZzZXQuaGVpZ2h0IC8gMS41XG5cdFx0dGhpcy5pbnRyb09wYWNpdHkgPSAxIC0gKHRoaXMubGltaXRUb3AgLSB0aGlzLm9wYWNpdHlNYXJnZSkgLyAoLXRoaXMub3BhY2l0eU1hcmdlKVxuXHRcdHRoaXMuX2ludHJvLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmludHJvT3BhY2l0eVxuXG5cdFx0aWYgKHRoaXMuX2ludHJvQ29udGVudCAmJiB0aGlzLl9wYWdlUHJvamVjdCAmJiB0aGlzLl9wcm9qZWN0KSB7XG5cdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5faW50cm9Db250ZW50Lm9mZnNldEhlaWdodCA8IDIwMCkge1xuXHRcdFx0XHR0aGlzLl9wcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtLXJlbGF0aXZlJylcblx0XHRcdFx0dGhpcy5fcHJvamVjdFNsaWRlc2hvdy5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsIDBweCkgdHJhbnNsYXRlWigwcHgpJylcblx0XHRcdFx0dGhpcy5fcGFnZVByb2plY3Quc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5vZmZzZXRIZWlnaHQgKyAncHgnXG5cdFx0XHR9wqBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNob3dZID0gLSB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIHRoaXMuX3Byb2plY3RQcmludHMub2Zmc2V0SGVpZ2h0LzIgLSA0MFxuXHRcdFx0XHR0aGlzLl9wcm9qZWN0U2xpZGVzaG93LnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgdGhpcy5zbGlkZXNob3dZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cdFx0XHRcdHRoaXMuX3Byb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdC0tcmVsYXRpdmUnKVxuXHRcdFx0XHR0aGlzLl9wYWdlUHJvamVjdC5zdHlsZS5oZWlnaHQgPSAodGhpcy5fcHJvamVjdC5vZmZzZXRIZWlnaHQgKyB0aGlzLnNsaWRlc2hvd1kpICsgJ3B4J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHRoaXMubGltaXRPZmZzZXQgPSBvZmZzZXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJykpXG5cdFx0Ly8gdGhpcy5PUEFDSVRZX01BUkdFID0gdGhpcy5saW1pdE9mZnNldC5oZWlnaHRcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0T2Zmc2V0KVxuXHRcdC8vIHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdC8vIHRoaXMuZWxPcGFjaXR5ID0gVXRpbHMuSW50ZXJ2YWwodGhpcy5saW1pdFRvcCAvICgtdGhpcy5PUEFDSVRZX0RVUkFUSU9OKSwgMCwgMSlcblx0XHQvLyAvLyB0aGlzLmVsWSA9ICgxLXRoaXMuZWxPcGFjaXR5KSAqIDUwXG5cdFx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2ludHJvJykuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0Ly8gZWwuc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gKCd0cmFuc2xhdGUoMHB4LCAnKyB0aGlzLmVsWSArJ3B4KSB0cmFuc2xhdGVaKDBweCknKVxuXHR9XG5cblx0X3Nob3dTbGlkZXNob3coKSB7XG5cdFx0dGhpcy5zbGlkZXNob3dPZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fc2xpZGVzaG93Jykub2Zmc2V0VG9wXG5cdFx0VHdlZW5NYXgudG8od2luZG93LCAwLjYsIHtzY3JvbGxUbzp7eTogdGhpcy5zbGlkZXNob3dPZmZzZXRUb3B9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSlcblx0fVxuXHRcblx0aW5pdFRpbWVsaW5lcygpIHtcblx0fVxuXG5cdF90b2dnbGVab29tKCkge1xuXHRcdGlmICh0aGlzLnpvb20pIHRoaXMuX3pvb21PdXQoKVxuXHRcdGVsc2UgdGhpcy5fem9vbUluKClcblx0fVxuXG5cdF96b29tSW4oKSB7XG5cdFx0dGhpcy50bFpvb21JbiA9IG5ldyBUaW1lbGluZU1heCh7cGF1c2VkOiB0cnVlfSlcblx0XHR0aGlzLnRsWm9vbUluLnN0YWdnZXJUbyhbXG5cdFx0XHRkb20oJy5mcm9udC1jb250YWluZXInKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3NoYXJlJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19pbmZvcycpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fcmV2ZWFsJyksXG5cdFx0XHRkb20oJy5jYXJ0JyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19jb250YWN0Jylcblx0XHRdLCAwLjQsIHtvcGFjaXR5OiAwfSwgMClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX3ByaW50JyksIDAuNCwge3NjYWxlOiAxLjM1LCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21Jbi50byhkb20oJy5wcm9qZWN0X19wcmV2JyksIDAuNCwge3g6IC04MCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tSW4udG8oZG9tKCcucHJvamVjdF9fbmV4dCcpLCAwLjQsIHt4OiA4MCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tSW4uYWRkQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2NvbnRhY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fYmFjaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cdFx0fSwgMC40KVxuXHRcdHRoaXMudGxab29tSW4udG8oZG9tKCcucHJvamVjdF9fYmFjaycpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC40KVxuXHRcdFxuXHRcdHRoaXMudGxab29tSW4ucGxheSgpXG5cblx0XHR0aGlzLnpvb20gPSAhdGhpcy56b29tXG5cdH1cblxuXHRfem9vbU91dCgpIHtcblx0XHR0aGlzLnRsWm9vbU91dCA9IG5ldyBUaW1lbGluZU1heCh7cGF1c2VkOiB0cnVlfSlcblx0XHR0aGlzLnRsWm9vbU91dC5zdGFnZ2VyVG8oW1xuXHRcdFx0ZG9tKCcuZnJvbnQtY29udGFpbmVyJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19zaGFyZScpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9faW5mb3MnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3JldmVhbCcpLFxuXHRcdFx0ZG9tKCcuY2FydCcpXG5cdFx0XSwgMC40LCB7b3BhY2l0eTogMX0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fYmFjaycpLCAwLjQsIHtvcGFjaXR5OiAwfSwgMClcblx0XHR0aGlzLnRsWm9vbU91dC5hZGRDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fY29udGFjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fYmFjaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblx0XHR9LCAwLjQpXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fY29udGFjdCcpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC40KVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX3ByaW50JyksIDAuNCwge3NjYWxlOiAxLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fcHJldicpLCAwLjQsIHt4OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQudG8oZG9tKCcucHJvamVjdF9fbmV4dCcpLCAwLjQsIHt4OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0sIDApXG5cblx0XHR0aGlzLnRsWm9vbU91dC5wbGF5KClcblxuXHRcdHRoaXMuem9vbSA9ICF0aGlzLnpvb21cblx0fVxuXG5cdF9iYWNrVG9HYWxsZXJ5KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR0aGlzLl96b29tT3V0KClcblx0fVxuXG5cdF90b2dnbGVTdG9yeSgpIHtcblx0XHRkb20oJy5wcm9qZWN0X19zdG9yeScpLnRvZ2dsZUNsYXNzKCdlbmFibGVkJylcblx0fVxuXG5cdF9oaWRlU3RvcnkoKSB7XG5cdFx0ZG9tKCcucHJvamVjdF9fc3RvcnknKS5yZW1vdmVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfcHJldigpIHtcblx0XHQvLyB0aGlzLl9oaWRlU3RvcnkoKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogKHRoaXMuc3RhdGUuY3VycmVudC0xIDwgMCkgPyB0aGlzLm5QcmludHMtMSA6IHRoaXMuc3RhdGUuY3VycmVudC0xXG5cdFx0fSlcblx0fVxuXG5cdF9uZXh0KCkge1xuXHRcdC8vIHRoaXMuX2hpZGVTdG9yeSgpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OiAodGhpcy5zdGF0ZS5jdXJyZW50KzEgPj0gdGhpcy5uUHJpbnRzKSA/IDAgOiB0aGlzLnN0YXRlLmN1cnJlbnQrMVxuXHRcdH0pXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25BcnRpc3RTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdDogQXJ0aXN0U3RvcmUuZ2V0T25lKCkgLy8gVE9ETzogYWZmaWNoZXIgbCdpbWFnZSBzdWl2YW50ZSB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IGNoYXJnw6llXG5cdFx0fSlcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcmludHM6IFByaW50U3RvcmUuZ2V0QXJ0aXN0UHJpbnRzKClcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLm5QcmludHMgPSBfLnNpemUodGhpcy5zdGF0ZS5wcmludHMpXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXJ0aXN0U3RvcmUgZnJvbSAnQXJ0aXN0U3RvcmUnXG5pbXBvcnQgQXJ0aXN0QXBpIGZyb20gJ0FydGlzdEFwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRhcnRpc3RzOiB7fVxuXHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vblN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRBcnRpc3RBcGkuZ2V0QWxsKCk7XG5cdFx0QXJ0aXN0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcnRpc3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHQvLyBsZXQgYXJ0aXN0c0RhdGEgPSBBcHBTdG9yZS5hcnRpc3RzQ29udGVudCgpXG5cdFx0Ly8gbGV0IGFydGlzdHNJdGVtcyA9IFtdXG5cdFx0Ly8gZm9yIChsZXQgYXJ0aXN0IGluIGFydGlzdHNEYXRhKSB7XG5cdFx0Ly8gXHRhcnRpc3RzSXRlbXMucHVzaCg8bGkga2V5PXthcnRpc3R9PjxhIGhyZWY9eycjL3Byb2plY3QvJythcnRpc3R9PnthcnRpc3RzRGF0YVthcnRpc3RdLm5hbWV9PC9hPjwvbGk+KVxuXHRcdC8vIH1cblx0XHRsZXQgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJvamVjdHMnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RzX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0c19fdGl0bGUgdGV4dCB0ZXh0LS10aXRsZSc+RmVsbG93czo8L2gyPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFydGlzdHMpLm1hcChmdW5jdGlvbihpbmRleCl7XG5cdFx0XHRcdFx0XHRcdGxldCBhcnRpc3QgPSB0aGF0LnN0YXRlLmFydGlzdHNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3Byb2plY3RzX19pdGVtJz48YSBocmVmPXsnIy9wcm9qZWN0LycrYXJ0aXN0LnNsdWd9IGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tYmlnJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+e2FydGlzdC5uYW1lfTwvc3Bhbj48L2E+PC9saT5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdHM6IEFydGlzdFN0b3JlLmdldEFsbCgpXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQ2FydEFwaSBmcm9tICdDYXJ0QXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyBQYWdlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMucHJvcHNcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1yZXN1bHQnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jlc3VsdCc+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdyZXN1bHRfX3N1Y2Nlc3MnPlZvdHJlIGNvbW1hbmRlIMOgIGJpZW4gw6l0w6kgdmFsaWTDqWU8L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj0nIy8nIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tcmV2ZXJzZSc+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPlJldmVuaXIgYXUgc2l0ZTwvc3Bhbj48L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5pZFNlY3Rpb24pXG5cdFx0Q2FydEFwaS5jaGVja1Jlc3BvbnNlKHRoaXMucHJvcHMuaWRTZWN0aW9uKVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgc2Nyb2xsVG8gZnJvbSAnc2Nyb2xsVG8nXG5sZXQgc2Nyb2xsID0gVXRpbHMuU2Nyb2xsKClcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbi8vIGxldCBNYXNvbnJ5ID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIFBhZ2Uge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0cHJpbnRzOiB7fSxcblx0XHRcdGxvYWRlZDogZmFsc2Vcblx0XHR9XG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl9zaG93UHJpbnRzQmluZGVkID0gdGhpcy5fc2hvd1ByaW50cy5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIHZhcnNcblx0XHR0aGlzLmVTaG93ID0gW11cblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLmxvYWRlZCA9IGZhbHNlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdFByaW50QXBpLmdldEZvclNhbGUoKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cblx0XHR0aGlzLl9zaG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKVxuXG5cdFx0Ly8gaWYgKHRoaXMucHJvcHMub2xkSGFzaCAmJiB0aGlzLnByb3BzLm9sZEhhc2gucGFyZW50ID09PSAnc2hvcCcgJiYgdGhpcy5wcm9wcy5vbGRIYXNoLnBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJykub2Zmc2V0VG9wLCBvZmZzZXQoZG9tKCcuc2hvcCcpKS50b3ApXG5cdFx0Ly8gXHQvLyB3aW5kb3cuc2Nyb2xsVG8oMCwgb2Zmc2V0KGRvbSgnLnNob3AnKSkudG9wKVxuXHRcdC8vIFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRcdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLm9mZnNldFRvcClcblx0XHQvLyBcdH0sIDEwMDApXG5cdFx0Ly8gfVxuXG5cdFx0Ly8gd2luZG93LnNjcm9sbFRvKDAsMClcblx0XHQvLyBjb25zb2xlLmxvZygnaW5pdCByYWYgc2hvcCcpXG5cdFx0dGhpcy5fcmFmKClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbFJhZilcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHQvLyBzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdC8vIFx0bGV0IHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdC8vIFx0Ly8gdHJhbnNpdGlvbiBJblxuXHQvLyBcdHRoaXMudGxJbi5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RpdGxlJyksIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6UG93ZXIyLmVhc2VPdXQgfSwgMC42KVxuXHQvLyBcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6UG93ZXIyLmVhc2VJbk91dCB9LCAwLjYpXG5cblx0Ly8gXHQvLyB0cmFuc2l0aW9uIE91dFxuXHQvLyBcdHRoaXMudGxPdXQudG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHQvLyBcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZUluT3V0IH0sIDApXG5cblx0Ly8gXHQvLyByZXNldFxuXHQvLyBcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHQvLyBcdHRoaXMudGxPdXQucGF1c2UoMClcblx0Ly8gfVxuXG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRsZXQgd3JhcHBlciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cblx0XHQvLyB0cmFuc2l0aW9uIEluXG5cdFx0Ly8gaWYgKCh0aGlzLnByb3BzLm9sZEhhc2ggJiYgKHRoaXMucHJvcHMub2xkSGFzaC5wYXJlbnQgPT09ICdzaG9wJyAmJiB0aGlzLnByb3BzLm9sZEhhc2gucGFydHMubGVuZ3RoID4gMSkgfHwgdGhpcy5wcm9wcy5vbGRIYXNoLnBhcmVudCA9PT0gJ3BheW1lbnQnKSB7XG5cdFx0Ly8gXHR0aGlzLnRsSW4uYWRkQ2FsbGJhY2sodGhpcy5fcmFmQmluZGVkLCAwKVxuXHRcdC8vIFx0dGhpcy50bEluLmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MSwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHRcdC8vIFx0dGhpcy50bEluLnNldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLCB7IG9wYWNpdHk6MSB9LCAwKVxuXHRcdC8vIFx0dGhpcy50bEluLmZyb20od3JhcHBlciwgMC42LCB7IG9wYWNpdHk6MCwgZWFzZTpQb3dlcjIuZWFzZUluT3V0IH0sIDApXG5cdFx0Ly8gfSBlbHNlIHtcblx0XHRcdHRoaXMudGxJbi5zZXQod3JhcHBlciwgeyBvcGFjaXR5OiAxIH0sIDApXG5cdFx0XHR0aGlzLnRsSW4udG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX292ZXJsYXktLXNob3AnKSwgMC40LCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwKVxuXHRcdFx0dGhpcy50bEluLmFkZENhbGxiYWNrKHRoaXMuX3JhZkJpbmRlZCwgMC40KVxuXHRcdFx0dGhpcy50bEluLmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdGl0bGUnKSwgMC42LCB7IG9wYWNpdHk6MSwgZWFzZTpQb3dlcjIuZWFzZU91dCB9LCAwLjQpXG5cdFx0XHR0aGlzLnRsSW4uZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMC40KVxuXHRcdC8vIH1cblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190aXRsZScpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDApXG5cdFx0dGhpcy50bE91dC50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsT3V0LnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19vdmVybGF5LS1zaG9wJyksIDAuNCwgeyB5OiAwLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDAuNilcblx0XHR0aGlzLnRsT3V0LnNldCh3cmFwcGVyLCB7IG9wYWNpdHk6MCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IHNob3BEYXRhID0gQXBwU3RvcmUuc2hvcENvbnRlbnQoKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLXNob3AnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX292ZXJsYXkgcGFnZV9fb3ZlcmxheS0tc2hvcCc+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wIGpzLXNtb290aCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX2ludHJvJz5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3Nob3BfX3RpdGxlJz57c2hvcERhdGEuaW50cm8udGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhzaG9wRGF0YS5pbnRyby5wYXJhZ3JhcGhzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdzaG9wX19wYXJhZ3JhcGggdGV4dCB0ZXh0LS1iaWcnIGtleT17aW5kZXh9PntzaG9wRGF0YS5pbnRyby5wYXJhZ3JhcGhzW2luZGV4XX08L3A+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rpc2NvdmVyIHNob3BfX2Rpc2NvdmVyJyBvbkNsaWNrPXt0aGlzLl9zaG93UHJpbnRzQmluZGVkfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkRpc2NvdmVyIEVsbGlvdHQgRXJ3aXR0J3MgcHJpbnRzPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cgYXJyb3ctLWJsYWNrJz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wX19saXN0Jz5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnByaW50cykubWFwKGZ1bmN0aW9uKGlkLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdGxldCBwcmludCA9IHRoYXQuc3RhdGUucHJpbnRzW2lkXVxuXHRcdFx0XHRcdFx0XHRsZXQgZmlsZSA9IHByaW50LmZpbGUgKyAnX21lZGl1bS5qcGcnXG5cdFx0XHRcdFx0XHRcdC8vIGxldCBzcGVlZCA9IChpbmRleCAlIDIgPT09IDApID8gJ2Zhc3QnIDogJ3Nsb3cnXG5cdFx0XHRcdFx0XHRcdC8vIGxldCBzaWRlID0gKGluZGV4ICUgMiA9PT0gMCkgPyAnbGVmdCcgOiAncmlnaHQnXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3ByaW50JyBrZXk9e2lkfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9eycjL3Nob3AvJytpZH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXsnL3N0YXRpYy9pbWcvJytmaWxlfT48L2ltZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX2hvdmVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fZGV0YWlsJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGl0bGUnPntwcmludC50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fbG9jYXRpb24nPjxkaXYgY2xhc3NOYW1lPSdzaG9wX19jaXR5Jz57cHJpbnQuY2l0eX0sIHtwcmludC5jb3VudHJ5fSw8L2Rpdj4gPGRpdiBjbGFzc05hbWU9J3Nob3BfX3llYXInPntwcmludC55ZWFyfTwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3ByaWNlJz57cHJpbnQucHJpY2V94oKsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fZGV0YWlscyBidXR0b24gYnV0dG9uLS1yZXZlcnNlJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+TW9yZSBkZXRhaWxzPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT4gXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXMsIGZpbGVcblx0XHR0aGlzLm1heCA9IF8uc2l6ZSh0aGlzLnN0YXRlLnByaW50cylcblx0XHRpZiAodGhpcy5tYXggPiAwICYmICF0aGlzLmxvYWRlZCkge1xuXHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlXG5cdFx0XHRfKHRoaXMuc3RhdGUucHJpbnRzKS5mb3JFYWNoKChwcmludCwgaW5kZXgpID0+IHtcblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdClcblx0XHRcdFx0ZmlsZS5zcmMgPSAnL3N0YXRpYy9pbWcvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JbWFnZUxvYWRlZChlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrKztcblxuXHRcdGlmICh0aGlzLm5JbWFnZUxvYWRlZCA+PSB0aGlzLm1heCkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtLXNob3AnKS5zdHlsZS5oZWlnaHQgPSB0aGlzLl9zaG9wLm9mZnNldEhlaWdodCArICdweCdcblx0XHR9XG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0bGV0IGU7XG5cdFx0dGhpcy5zVG9wID0gVXRpbHMuR2V0U2Nyb2xsVG9wKClcblx0XHR0aGlzLmNUb3AgKz0gLjEgKiAodGhpcy5zVG9wIC0gdGhpcy5jVG9wKVxuXHRcdGUgPSAtdGhpcy5jVG9wXG5cdFx0aWYgKHRoaXMuX3Nob3ApIHRoaXMuX3Nob3Auc3R5bGVbdGhpcy50cmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBlICsgJ3B4LCAwKSdcblxuXHRcdF8oZG9tKCcuc2hvcF9fcHJpbnQnKSkuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG5cdFx0XHR0aGlzLmxUb3AgPSBvZmZzZXQoZWwpLnRvcFxuXHRcdFx0aWYgKCF0aGlzLmVTaG93W2luZGV4XSkge1xuXHRcdFx0XHR0aGlzLmVTaG93W2luZGV4XSA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdC8vIGluIHZpZXdwb3J0XG5cdFx0XHRpZiAodGhpcy5sVG9wIC0gd2luZG93LmlubmVySGVpZ2h0IDwgMCAmJiAhdGhpcy5lU2hvd1tpbmRleF0pIHtcblx0XHRcdFx0dGhpcy5lU2hvd1tpbmRleF0gPSB0cnVlXG5cdFx0XHRcdFR3ZWVuTWF4LnRvKGVsLCAwLjYsIHt5OiAwLCBvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZU91dCwgZGVsYXk6IE1hdGgucmFuZG9tKCkqMC4yfSlcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gb2ZmIHZpZXdwb3J0XG5cdFx0XHRpZiAodGhpcy5sVG9wIC0gd2luZG93LmlubmVySGVpZ2h0ID4gMCAmJiB0aGlzLmVTaG93W2luZGV4XSkge1xuXHRcdFx0XHR0aGlzLmVTaG93W2luZGV4XSA9IGZhbHNlXG5cdFx0XHRcdFR3ZWVuTWF4LnNldChlbCwge3k6IDEwMCwgb3BhY2l0eTogMH0pXG5cdFx0XHR9XG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXG5cdF9zaG93UHJpbnRzKCkge1xuXHRcdHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3BfX2xpc3QnKS5vZmZzZXRUb3Bcblx0XHRUd2Vlbk1heC50byh3aW5kb3csIDEuMiwge3Njcm9sbFRvOnt5OiB0aGlzLnNsaWRlc2hvd09mZnNldFRvcCAtIDQwfSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJpbnRzOiBQcmludFN0b3JlLmdldEZvclNhbGUoKVxuXHRcdH0pXG5cdH1cbn1cbiIsImxldCBjb25maWcgPSB7XG5cdCdzaXRldXJsJzogJ2h0dHA6Ly9oYXZhbmEuaGk5LmZyJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWc7IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXG5cdE1FRElBX0dMT0JBTF9XOiAxOTIwLFxuXHRNRURJQV9HTE9CQUxfSDogMTA4MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0UkVDRUlWRV9BTExfQVJUSVNUUzogJ1JFQ0VJVkVfQUxMX0FSVElTVFMnLFxuXHRSRUNFSVZFX0FSVElTVDogJ1JFQ0VJVkVfQVJUSVNUJyxcblx0RVJST1I6ICdFUlJPUicsXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRDQVJUX0FERDogJ0NBUlRfQUREJyxcdFx0XHQvLyBBZGRzIGl0ZW0gdG8gY2FydFxuXHRDQVJUX1JFTU9WRTogJ0NBUlRfUkVNT1ZFJyxcdFx0Ly8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5cdENBUlRfVklTSUJMRTogJ0NBUlRfVklTSUJMRScsXHQvLyBTaG93cyBvciBoaWRlcyB0aGUgY2FydFxuXHRDQVJUX0VOQUJMRUQ6ICdDQVJUX0VOQUJMRUQnLFx0Ly8gT3BlbiBvciBjbG9zZSB0aGUgY2FydFxuXHRTRVRfU0VMRUNURUQ6ICdTRVRfU0VMRUNURUQnLFx0Ly8gU2VsZWN0cyBhIHByb2R1Y3Qgb3B0aW9uXG5cdFJFQ0VJVkVfREFUQTogJ1JFQ0VJVkVfREFUQScsXG5cdFJFQ0VJVkVfRk9STTogJ1JFQ0VJVkVfRk9STScsXG5cdFJFQ0VJVkVfQ0hFQ0s6ICdSRUNFSVZFX0NIRUNLJ1xufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0UkVDRUlWRV9BTExfUFJJTlRTOiAnUkVDRUlWRV9BTExfUFJJTlRTJyxcblx0UkVDRUlWRV9QUklOVFNfRk9SU0FMRTogJ1JFQ0VJVkVfUFJJTlRTX0ZPUlNBTEUnLFxuXHRSRUNFSVZFX1BSSU5UU19TTElERVNIT1c6ICdSRUNFSVZFX1BSSU5UU19TTElERVNIT1cnLFxuXHRSRUNFSVZFX0FSVElTVF9QUklOVFM6ICdSRUNFSVZFX0FSVElTVF9QUklOVFMnLFxuXHRSRUNFSVZFX1BSSU5UOiAnUkVDRUlWRV9QUklOVCcsXG5cdEVSUk9SOiAnRVJST1InLFxuXHRaT09NOiAnWk9PTScsXG59IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG52YXIgQXBwRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlVmlld0FjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCh7XG5cdFx0XHRzb3VyY2U6ICdWSUVXX0FDVElPTicsXG5cdFx0XHRhY3Rpb246IGFjdGlvblxuXHRcdH0pO1xuXHR9LFxuXHRoYW5kbGVTZXJ2ZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnU0VSVkVSX0FDVElPTicsXG5cdFx0XHRhY3Rpb246IGFjdGlvblxuXHRcdH0pO1xuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGF0Y2hlciIsImltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG4gICAgXHRcbmNsYXNzIEdsb2JhbEV2ZW50cyB7XG5cdGluaXQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KVxuXHRcdHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdEFwcEFjdGlvbnMud2luZG93UmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdFx0fSwgMzAwKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEV2ZW50c1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBoYXNoZXIgZnJvbSAnaGFzaGVyJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBjcm9zc3JvYWRzIGZyb20gJ2Nyb3Nzcm9hZHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFJvdXRlciB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5yb3V0aW5nID0gZGF0YS5yb3V0ZXMucm91dGluZ1xuXHRcdHRoaXMuZGVmYXVsdFJvdXRlID0gdGhpcy5yb3V0aW5nWycvJ11cblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRoYXNoZXIubmV3SGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5vbGRIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLnByZXBlbmRIYXNoID0gJyEnXG5cdFx0aGFzaGVyLmluaXRpYWxpemVkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHRoYXNoZXIuY2hhbmdlZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5fc2V0dXBDcm9zc3JvYWRzKClcblx0fVxuXHRiZWdpblJvdXRpbmcoKSB7XG5cdFx0aGFzaGVyLmluaXQoKVxuXHR9XG5cdF9zZXR1cENyb3Nzcm9hZHMoKSB7XG5cdFx0bGV0IGhvbWVTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgnJywgdGhpcy5fb25Ib21lVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAxKVxuXG5cdFx0bGV0IGJhc2ljU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3twYWdlfScsIHRoaXMuX29uRmlyc3REZWdyZWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDEpXG5cdFx0Ly8gZmlyc3REZWdyZWVTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdC8vIFx0cGFnZSA6IFsnaG9tZScsICc0MDQnLCAnZmVsbG93c2hpcCcsICdwcm9qZWN0cycsICdzaG9wJywgJ25ld3MnLCAnY29udGFjdCcsICdsZWdhbCcsICdwcml2YWN5J10gLy92YWxpZCBzZWN0aW9uc1xuXHRcdC8vIH1cblxuXHRcdGxldCBwcm9qZWN0U2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3Byb2plY3Qve2lkfScsIHRoaXMuX29uUHJvamVjdFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMilcblx0XHRwcm9qZWN0U2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogL15bYS16XS9cblx0XHR9XG5cblx0XHRsZXQgZ2FsbGVyeVNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCdwcm9qZWN0L3tpZH0vY29udGFjdC1zaGVldCcsIHRoaXMuX29uUHJvamVjdFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMylcblx0XHRnYWxsZXJ5U2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogL15bYS16XS9cblx0XHR9XG5cblx0XHRsZXQgc2hvcFNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCcvc2hvcC97aWR9JywgdGhpcy5fb25TaG9wVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAyKVxuXHRcdHNob3BTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0aWQgOiAvXlswLTldL1xuXHRcdH1cblxuXHRcdGxldCByZXN1bHRTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgnL3BheW1lbnQvcmVzdWx0ez9xdWVyeX0nLCB0aGlzLl9vblJlc3VsdFVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMilcblx0fVxuXHRfb25Ib21lVVJMSGFuZGxlcigpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZSgnaG9tZScpXG5cdH1cblx0X29uRmlyc3REZWdyZWVVUkxIYW5kbGVyKHBhZ2VJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHBhZ2VJZClcblx0fVxuXHRfb25Qcm9qZWN0VVJMSGFuZGxlcihwcm9qZWN0SWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwcm9qZWN0SWQpXG5cdH1cblx0X29uU2hvcFVSTEhhbmRsZXIocHJpbnRJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHByaW50SWQpXG5cdH1cblx0X29uUmVzdWx0VVJMSGFuZGxlcihxdWVyeSkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHF1ZXJ5KVx0XG5cdH1cblx0X29uRGVmYXVsdFVSTEhhbmRsZXIoKSB7XG5cdFx0dGhpcy5fc2VuZFRvRGVmYXVsdCgpXG5cdH1cblx0X2Fzc2lnblJvdXRlKGlkKSB7XG5cdFx0bGV0IGhhc2ggPSBoYXNoZXIuZ2V0SGFzaCgpXG5cdFx0bGV0IHBhcnRzID0gdGhpcy5fZ2V0VVJMUGFydHMoaGFzaClcblx0XHR0aGlzLl91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcnRzWzBdLCBpZClcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gdHJ1ZVxuXHR9XG5cdF9nZXRVUkxQYXJ0cyh1cmwpIHtcblx0XHRsZXQgaGFzaCA9IHVybFxuXHRcdGhhc2ggPSBoYXNoLnN1YnN0cigxKVxuXHRcdHJldHVybiBoYXNoLnNwbGl0KCcvJylcblx0fVxuXHRfdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJlbnQsIHRhcmdldElkKSB7XG5cdFx0aGFzaGVyLm9sZEhhc2ggPSBoYXNoZXIubmV3SGFzaFxuXHRcdGhhc2hlci5uZXdIYXNoID0ge1xuXHRcdFx0aGFzaDogaGFzaCxcblx0XHRcdHBhcnRzOiBwYXJ0cyxcblx0XHRcdHBhcmVudDogcGFyZW50LFxuXHRcdFx0dGFyZ2V0SWQ6IHRhcmdldElkXG5cdFx0fVxuXHRcdEFwcEFjdGlvbnMucGFnZUhhc2hlckNoYW5nZWQoaGFzaGVyLm5ld0hhc2gpXG5cdH1cblx0X2RpZEhhc2hlckNoYW5nZShuZXdIYXNoLCBvbGRIYXNoKSB7XG5cdFx0Ly8gd2luZG93LnNjcm9sbFRvKDAsIDApXG5cdFx0Ly8gaWYgKHRoaXMuem9vbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gXHR3aW5kb3cuc2Nyb2xsVG8oMCwgb2Zmc2V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKSkudG9wKTtcblx0XHQvLyBcdFByaW50QWN0aW9ucy5zZXRQcmludFpvb20odW5kZWZpbmVkKTtcblx0XHQvLyB9XG5cdFx0Ly8gaWYgKHRoaXMuaGFzaC5wYXJlbnQgPT09ICdzaG9wJyAmJiB0aGlzLm9sZEhhc2ggJiYgdGhpcy5vbGRIYXNoLnBhcmVudCA9PT0gJ3Nob3AnICYmIHRoaXMub2xkSGFzaC5wYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0Ly8gXHR3aW5kb3cuc2Nyb2xsVG8oMCwgb2Zmc2V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJykpLnRvcCAtIDYwKVxuXHRcdC8vIH1cblxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGNyb3Nzcm9hZHMucGFyc2UobmV3SGFzaClcblx0XHRpZih0aGlzLm5ld0hhc2hGb3VuZGVkKSByZXR1cm5cblx0XHQvLyBJZiBVUkwgZG9uJ3QgbWF0Y2ggYSBwYXR0ZXJuLCBzZW5kIHRvIGRlZmF1bHRcblx0XHR0aGlzLl9vbkRlZmF1bHRVUkxIYW5kbGVyKClcblx0fVxuXHRfc2VuZFRvRGVmYXVsdCgpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChBcHBTdG9yZS5kZWZhdWx0Um91dGUoKSlcblx0fVxuXHRzdGF0aWMgZ2V0QmFzZVVSTCgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuVVJMLnNwbGl0KFwiI1wiKVswXVxuXHR9XG5cdHN0YXRpYyBnZXRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIuZ2V0SGFzaCgpXG5cdH1cblx0c3RhdGljIGdldFJvdXRlcygpIHtcblx0XHRyZXR1cm4gZGF0YS5yb3V0ZXMucm91dGluZ1xuXHR9XG5cdHN0YXRpYyBnZXROZXdIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIubmV3SGFzaFxuXHR9XG5cdHN0YXRpYyBnZXRPbGRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIub2xkSGFzaFxuXHR9XG5cdHN0YXRpYyBzZXRIYXNoKGhhc2gpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5sZXQgX2hhc2hcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChoYXNoKSB7XG5cdF9oYXNoID0gaGFzaC5pdGVtLnBhcmVudFxufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuXHR2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0dmFyIGNvbnRlbnQgPSBkYXRhLnJvdXRlcy5yb3V0aW5nW2hhc2hPYmouaGFzaF1cblx0cmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRGb290ZXJNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzWydmb290ZXItbWVudSddXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlcy5jb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0SG9tZSgpIHtcblx0cmV0dXJuIGRhdGEuaG9tZVxufVxuZnVuY3Rpb24gX2dldEZlbGxvd3NoaXAoKSB7XG5cdHJldHVybiBkYXRhLmZlbGxvd3NoaXBcbn1cbmZ1bmN0aW9uIF9nZXRTaG9wKCkge1xuXHRyZXR1cm4gZGF0YS5zaG9wXG59XG5mdW5jdGlvbiBfZ2V0TmV3cygpIHtcblx0cmV0dXJuIGRhdGEubmV3c1xufVxuZnVuY3Rpb24gX2dldEFydGlzdHMoKSB7XG5cdHJldHVybiBkYXRhLmFydGlzdHNcbn1cbmZ1bmN0aW9uIF9nZXRBcnRpc3QoaWQpIHtcblx0cmV0dXJuIGRhdGEuYXJ0aXN0c1tpZF1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG5cdFx0dGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG5cdH0sXG5cdGhhc2g6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaGFzaFxuXHR9LFxuXHRwYWdlQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRQYWdlQ29udGVudCgpXG5cdH0sXG5cdG1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldE1lbnVDb250ZW50KClcblx0fSxcblx0Zm9vdGVyTWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0Rm9vdGVyTWVudUNvbnRlbnQoKVxuXHR9LFxuXHRhcHBEYXRhOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEFwcERhdGEoKVxuXHR9LFxuXHRkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0RGVmYXVsdFJvdXRlKClcblx0fSxcblx0Z2xvYmFsQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRHbG9iYWxDb250ZW50KClcblx0fSxcblx0aG9tZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0SG9tZSgpXG5cdH0sXG5cdGZlbGxvd3NoaXBDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEZlbGxvd3NoaXAoKVxuXHR9LFxuXHRzaG9wQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRTaG9wKClcblx0fSxcblx0bmV3c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0TmV3cygpXG5cdH0sXG5cdGFydGlzdHNDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEFydGlzdHMoKVxuXHR9LFxuXHRhcnRpc3RDb250ZW50OiBmdW5jdGlvbihpZCkge1xuXHRcdHJldHVybiBfZ2V0QXJ0aXN0KGlkKVxuXHR9LFxuXHRXaW5kb3c6IHtcblx0XHR3OiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRoOiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRDpcblx0XHRcdFx0X3BhZ2VSb3V0ZUlkQ2hhbmdlZChhY3Rpb24pXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuXHRcdFx0XHRBcHBTdG9yZS5XaW5kb3cudyA9IGFjdGlvbi5pdGVtLndpbmRvd1dcblx0XHRcdFx0QXBwU3RvcmUuV2luZG93LmggPSBhY3Rpb24uaXRlbS53aW5kb3dIXG5cdFx0XHRcdEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH0pXG59KVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcnRpc3RDb25zdGFudHMgZnJvbSAnQXJ0aXN0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxubGV0IF9hcnRpc3QgPSB7fTtcbmxldCBfYXJ0aXN0cyA9IHt9O1xuXG5mdW5jdGlvbiBfYWRkQXJ0aXN0cyhhcnRpc3RzKSB7XG5cdGFydGlzdHMuZm9yRWFjaChmdW5jdGlvbihhcnRpc3QpIHsgLy8gY2hhbmdlIGZvckVhY2ggdG8gbG9kYXNoXG5cdFx0aWYgKCFfYXJ0aXN0c1thcnRpc3QuX2lkXSkge1xuXHRcdFx0X2FydGlzdHNbYXJ0aXN0Ll9pZF0gPSBhcnRpc3Q7XG5cdFx0fVxuXHR9KTtcbn1cblxubGV0IEFydGlzdFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRnZXRBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0O1xuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQXJ0aXN0Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX0FSVElTVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBBcnRpc3RDb25zdGFudHMuUkVDRUlWRV9BUlRJU1Q6XG5cdFx0XHRcdF9hcnRpc3QgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0QXJ0aXN0U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQ2FydENvbnN0YW50cyBmcm9tICdDYXJ0Q29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IGRhdGEgZnJvbSAnR2xvYmFsRGF0YSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxuLy8gRGVmaW5lIGluaXRpYWwgZGF0YSBwb2ludHNcbmxldCBfcHJvZHVjdHMgPSBbXSwgX2NhcnRWaXNpYmxlID0gdHJ1ZSwgX2NhcnRFbmFibGVkID0gZmFsc2UsIF9mb3JtO1xuXG4vLyBBZGQgcHJvZHVjdCB0byBjYXJ0XG5mdW5jdGlvbiBfYWRkKHByaW50SWQsIHVwZGF0ZSkge1xuXHQvLyB1cGRhdGUucXVhbnRpdHkgPSBwcmludElkIGluIF9wcm9kdWN0cyA/IF9wcm9kdWN0c1twcmludElkXS5xdWFudGl0eSArIDEgOiAxO1xuXHQvLyBfcHJvZHVjdHNbcHJpbnRJZF0ucHVzaCA9IF8uZXh0ZW5kKHt9LCBfcHJvZHVjdHNbcHJpbnRJZF0sIHVwZGF0ZSlcblx0Ly8gaWYgKF9wcm9kdWN0c1twcmludElkXSkge1xuXHQvLyBcdF9wcm9kdWN0c1twcmludElkXS5wdXNoKHVwZGF0ZSlcblx0Ly8gfSBlbHNlIHtcblx0Ly8gXHRfcHJvZHVjdHNbcHJpbnRJZF0gPSBbXVxuXHQvLyBcdF9wcm9kdWN0c1twcmludElkXS5wdXNoKHVwZGF0ZSlcblx0Ly8gfVxuXHQvLyBjb25zb2xlLmxvZyhfcHJvZHVjdHMpXG5cblx0X3Byb2R1Y3RzLnB1c2godXBkYXRlKVxufVxuXG4vLyBTZXQgY2FydCB2aXNpYmlsaXR5XG5mdW5jdGlvbiBfc2V0Q2FydFZpc2libGUoY2FydFZpc2libGUpIHtcblx0X2NhcnRWaXNpYmxlID0gY2FydFZpc2libGU7XG59XG5cbi8vIFNldCBjYXJ0IGVuYWJsZWRcbmZ1bmN0aW9uIF9zZXRDYXJ0RW5hYmxlZChjYXJ0RW5hYmxlZCkge1xuXHRfY2FydEVuYWJsZWQgPSBjYXJ0RW5hYmxlZDtcbn1cblxuLy8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5mdW5jdGlvbiBfcmVtb3ZlSXRlbShpbmRleCkge1xuXHRfcHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gX2FkZEZvcm0oZGF0YSkge1xuXHRfZm9ybSA9IGRhdGE7XG59XG5cbmxldCBDYXJ0U3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGdldENhcnRJdGVtczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcm9kdWN0cztcblx0fSxcblx0Z2V0Q2FydENvdW50OiBmdW5jdGlvbigpIHtcblx0XHQvLyBsZXQgY291bnQgPSAwXG5cdFx0Ly8gXyhfcHJvZHVjdHMpLmZvckVhY2goKHByb2R1Y3QsIGluZGV4KSA9PiB7XG5cdFx0Ly8gXHQvLyBjb3VudCArPSBwcm9kdWN0LnF1YW50aXR5XG5cdFx0Ly8gXHRjb3VudCArPSBwcm9kdWN0Lmxlbmd0aFxuXHRcdC8vIH0pLnZhbHVlKClcblx0XHQvLyByZXR1cm4gY291bnQ7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKF9wcm9kdWN0cykubGVuZ3RoO1xuXHR9LFxuXHRnZXRDYXJ0VG90YWw6IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0XyhfcHJvZHVjdHMpLmZvckVhY2goKHByb2R1Y3QsIGluZGV4KSA9PiB7XG5cdFx0XHR0b3RhbCArPSBwcm9kdWN0LnByaWNlXG5cdFx0fSkudmFsdWUoKVxuXG5cdFx0Ly8gZm9yKGxldCBwcm9kdWN0IGluIF9wcm9kdWN0cyl7XG5cdFx0Ly8gXHRpZihfcHJvZHVjdHMuaGFzT3duUHJvcGVydHkocHJvZHVjdCkpe1xuXHRcdC8vIFx0XHR0b3RhbCArPSBfcHJvZHVjdHNbcHJvZHVjdF0ucHJpY2UgKiBfcHJvZHVjdHNbcHJvZHVjdF0ucXVhbnRpdHk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdHJldHVybiB0b3RhbC50b0ZpeGVkKDIpO1xuXHR9LFxuXHRnZXRDYXJ0VmlzaWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jYXJ0VmlzaWJsZTtcblx0fSxcblx0Z2V0Q2FydEVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY2FydEVuYWJsZWQ7XG5cdH0sXG5cdGdldEZvcm06IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZm9ybTtcblx0fSxcblx0Ly8gRW1pdCBDaGFuZ2UgZXZlbnRcblx0ZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG5cdH0sXG5cdC8vIEFkZCBjaGFuZ2UgbGlzdGVuZXJcblx0YWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0Ly8gUmVtb3ZlIGNoYW5nZSBsaXN0ZW5lclxuXHRyZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHRkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG5cdFx0bGV0IGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG5cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX0FERDpcblx0XHRcdFx0X2FkZChhY3Rpb24ucHJpbnRJZCwgYWN0aW9uLnVwZGF0ZSlcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfVklTSUJMRTpcblx0XHRcdFx0X3NldENhcnRWaXNpYmxlKGFjdGlvbi5jYXJ0VmlzaWJsZSlcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfRU5BQkxFRDpcblx0XHRcdFx0X3NldENhcnRFbmFibGVkKGFjdGlvbi5jYXJ0RW5hYmxlZClcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfUkVNT1ZFOlxuXHRcdFx0XHRfcmVtb3ZlSXRlbShhY3Rpb24uaW5kZXgpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5SRUNFSVZFX0ZPUk06XG5cdFx0XHRcdF9hZGRGb3JtKGFjdGlvbi5kYXRhKVxuXHRcdFx0XHRDYXJ0U3RvcmUuZW1pdENoYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIENhcnRDb25zdGFudHMuUkVDRUlWRV9DSEVDSzpcblx0XHRcdFx0X2FkZEZvcm0oYWN0aW9uLmRhdGEpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmNvbnN0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG5sZXQgX3ByaW50cyA9IHt9O1xubGV0IF9wcmludHNGb3JTYWxlID0ge307XG5sZXQgX3ByaW50c1NsaWRlc2hvdyA9IHt9O1xubGV0IF9hcnRpc3RQcmludHMgPSB7fTtcbmxldCBfcHJpbnQgPSB7fTtcbmxldCBfcHJpbnRab29tZWQ7XG5cbmZ1bmN0aW9uIF9hZGRQcmludHMocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX3ByaW50c1twcmludC5faWRdKSB7XG5cdFx0XHRfcHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pLnZhbHVlKClcbn1cblxuZnVuY3Rpb24gX2FkZFByaW50c0ZvclNhbGUocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX3ByaW50c0ZvclNhbGVbcHJpbnQuX2lkXSkge1xuXHRcdFx0X3ByaW50c0ZvclNhbGVbcHJpbnQuX2lkXSA9IHByaW50O1xuXHRcdH1cblx0fSkudmFsdWUoKVxufVxuXG5mdW5jdGlvbiBfYWRkUHJpbnRzU2xpZGVzaG93KHJlc3VsdCkge1xuXHRfcHJpbnRzU2xpZGVzaG93ID0gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIF9hZGRBcnRpc3RQcmludHMocHJpbnRzKSB7XG5cdF9hcnRpc3RQcmludHMgPSBwcmludHNcblx0Ly8gXyhwcmludHMpLmZvckVhY2goKHByaW50KSA9PiB7XG5cdC8vIFx0aWYgKCFfYXJ0aXN0UHJpbnRzW3ByaW50Ll9pZF0pIHtcblx0Ly8gXHRcdF9hcnRpc3RQcmludHNbcHJpbnQuX2lkXSA9IHByaW50O1xuXHQvLyBcdH1cblx0Ly8gfSkudmFsdWUoKVxufVxuXG5sZXQgUHJpbnRTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcblx0Z2V0QWxsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c1xuXHR9LFxuXHRnZXRGb3JTYWxlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c0ZvclNhbGVcblx0fSxcblx0Z2V0U2xpZGVzaG93OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50c1NsaWRlc2hvd1xuXHR9LFxuXHRnZXRBcnRpc3RQcmludHM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfYXJ0aXN0UHJpbnRzXG5cdH0sXG5cdGdldE9uZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludFxuXHR9LFxuXHRnZXRab29tOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3ByaW50Wm9vbWVkXG5cdH0sXG5cdC8vIEVtaXQgQ2hhbmdlIGV2ZW50XG5cdGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuXHR9LFxuXHRlbWl0U3BlQ2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoJ1JFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVycpO1xuXHR9LFxuXHQvLyBBZGQgY2hhbmdlIGxpc3RlbmVyXG5cdGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdC8vIFJlbW92ZSBjaGFuZ2UgbGlzdGVuZXJcblx0cmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0ZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuXHRcdGxldCBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuXHRcdHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX0FMTF9QUklOVFM6XG5cdFx0XHRcdF9hZGRQcmludHMoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfRk9SU0FMRTpcblx0XHRcdFx0X2FkZFByaW50c0ZvclNhbGUoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XOlxuXHRcdFx0XHRfYWRkUHJpbnRzU2xpZGVzaG93KGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdC8vIFByaW50U3RvcmUuZW1pdFNwZUNoYW5nZSgnUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XJyk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQVJUSVNUX1BSSU5UUzpcblx0XHRcdFx0X2FkZEFydGlzdFByaW50cyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UOlxuXHRcdFx0XHRfcHJpbnQgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5aT09NOlxuXHRcdFx0XHRfcHJpbnRab29tZWQgPSBhY3Rpb24uaXRlbTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUHJpbnRTdG9yZVxuXG4iLCJpbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5mdW5jdGlvbiBnZXRBbGxNZXRob2RzKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKVxuXHRcdC5maWx0ZXIoa2V5ID0+IGlzLmZuKG9ialtrZXldKSlcbn1cblxuZnVuY3Rpb24gYXV0b0JpbmQob2JqKSB7XG5cdC8vIGNvbnNvbGUubG9nKCdvYmogLS0tLS0nLCBvYmopXG4gIFx0Z2V0QWxsTWV0aG9kcyhvYmouY29uc3RydWN0b3IucHJvdG90eXBlKVxuXHRcdC5mb3JFYWNoKG10ZCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhtdGQpXG5cdFx0XHRvYmpbbXRkXSA9IG9ialttdGRdLmJpbmQob2JqKTtcblx0XHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvQmluZDsiLCJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBOb3JtYWxpemVNb3VzZUNvb3JkcyhlLCBvYmpXcmFwcGVyKSB7XG5cdFx0dmFyIHBvc3ggPSAwO1xuXHRcdHZhciBwb3N5ID0gMDtcblx0XHRpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50O1xuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRvYmpXcmFwcGVyLnggPSBwb3N4XG5cdFx0b2JqV3JhcHBlci55ID0gcG9zeVxuXHRcdHJldHVybiBvYmpXcmFwcGVyXG5cdH1cblx0c3RhdGljIFJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgY29udGVudFcsIGNvbnRlbnRIKSB7XG5cdFx0dmFyIGFzcGVjdFJhdGlvID0gY29udGVudFcgLyBjb250ZW50SFxuXHRcdHZhciBzY2FsZSA9ICgod2luZG93VyAvIHdpbmRvd0gpIDwgYXNwZWN0UmF0aW8pID8gKHdpbmRvd0ggLyBjb250ZW50SCkgKiAxIDogKHdpbmRvd1cgLyBjb250ZW50VykgKiAxXG5cdFx0dmFyIG5ld1cgPSBjb250ZW50VyAqIHNjYWxlXG5cdFx0dmFyIG5ld0ggPSBjb250ZW50SCAqIHNjYWxlXG5cdFx0dmFyIGNzcyA9IHtcblx0XHRcdHdpZHRoOiBuZXdXLFxuXHRcdFx0aGVpZ2h0OiBuZXdILFxuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAobmV3VyA+PiAxKSxcblx0XHRcdHRvcDogKHdpbmRvd0ggPj4gMSkgLSAobmV3SCA+PiAxKVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gY3NzXG5cdH1cblx0c3RhdGljIEdldFNjcm9sbFRvcCgpIHtcblx0XHRyZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcblx0fVxuXHRzdGF0aWMgR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IFsnJywgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICAgICAgICBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByZWZpeCA9PT0gJycgPyBwcm9wZXJ0eSA6IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByZWZpeCtwcm9wZXJ0eTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbcHJvcF0gIT0gXCJ1bmRlZmluZWRcIikgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgU2Nyb2xsKCkge1xuICAgIFx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdC8vIElFIEZhbGxiYWNrLCB5b3UgY2FuIGV2ZW4gZmFsbGJhY2sgdG8gb25zY3JvbGxcblx0XHRcdGZ1bmN0aW9uKGNhbGxiYWNrKXsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAvNjApIH07XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBJbnRlcnZhbCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICBcdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG5cdGlmIChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRyZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dmFyIHggPSAwLCB5ID0gMDtcblx0XHRkbyB7XG5cdFx0XHR4ICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xuXHRcdFx0eSArPSBlbC5vZmZzZXRUb3AgLSBlbC5zY3JvbGxUb3A7XG5cdFx0fSBcblx0XHR3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpO1xuXG5cdFx0cmV0dXJuIHsgXCJsZWZ0XCI6IHgsIFwidG9wXCI6IHkgfVxuXHR9XG59IiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiBcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiBcbi8vIE1JVCBsaWNlbnNlXG4gXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgXG4gICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTsiLCIvKiFcbiAqIFZFUlNJT046IDEuNy41XG4gKiBEQVRFOiAyMDE1LTAyLTI2XG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE1LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICogXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAqKi9cbnZhciBfZ3NTY29wZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6dGhpc3x8d2luZG93OyhfZ3NTY29wZS5fZ3NRdWV1ZXx8KF9nc1Njb3BlLl9nc1F1ZXVlPVtdKSkucHVzaChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxlPXdpbmRvdyxpPWZ1bmN0aW9uKGkscil7dmFyIHM9XCJ4XCI9PT1yP1wiV2lkdGhcIjpcIkhlaWdodFwiLG49XCJzY3JvbGxcIitzLG89XCJjbGllbnRcIitzLGE9ZG9jdW1lbnQuYm9keTtyZXR1cm4gaT09PWV8fGk9PT10fHxpPT09YT9NYXRoLm1heCh0W25dLGFbbl0pLShlW1wiaW5uZXJcIitzXXx8dFtvXXx8YVtvXSk6aVtuXS1pW1wib2Zmc2V0XCIrc119LHI9X2dzU2NvcGUuX2dzRGVmaW5lLnBsdWdpbih7cHJvcE5hbWU6XCJzY3JvbGxUb1wiLEFQSToyLHZlcnNpb246XCIxLjcuNVwiLGluaXQ6ZnVuY3Rpb24odCxyLHMpe3JldHVybiB0aGlzLl93ZHc9dD09PWUsdGhpcy5fdGFyZ2V0PXQsdGhpcy5fdHdlZW49cyxcIm9iamVjdFwiIT10eXBlb2YgciYmKHI9e3k6cn0pLHRoaXMudmFycz1yLHRoaXMuX2F1dG9LaWxsPXIuYXV0b0tpbGwhPT0hMSx0aGlzLng9dGhpcy54UHJldj10aGlzLmdldFgoKSx0aGlzLnk9dGhpcy55UHJldj10aGlzLmdldFkoKSxudWxsIT1yLng/KHRoaXMuX2FkZFR3ZWVuKHRoaXMsXCJ4XCIsdGhpcy54LFwibWF4XCI9PT1yLng/aSh0LFwieFwiKTpyLngsXCJzY3JvbGxUb194XCIsITApLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goXCJzY3JvbGxUb194XCIpKTp0aGlzLnNraXBYPSEwLG51bGwhPXIueT8odGhpcy5fYWRkVHdlZW4odGhpcyxcInlcIix0aGlzLnksXCJtYXhcIj09PXIueT9pKHQsXCJ5XCIpOnIueSxcInNjcm9sbFRvX3lcIiwhMCksdGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChcInNjcm9sbFRvX3lcIikpOnRoaXMuc2tpcFk9ITAsITB9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9zdXBlci5zZXRSYXRpby5jYWxsKHRoaXMsdCk7dmFyIHI9dGhpcy5fd2R3fHwhdGhpcy5za2lwWD90aGlzLmdldFgoKTp0aGlzLnhQcmV2LHM9dGhpcy5fd2R3fHwhdGhpcy5za2lwWT90aGlzLmdldFkoKTp0aGlzLnlQcmV2LG49cy10aGlzLnlQcmV2LG89ci10aGlzLnhQcmV2O3RoaXMuX2F1dG9LaWxsJiYoIXRoaXMuc2tpcFgmJihvPjd8fC03Pm8pJiZpKHRoaXMuX3RhcmdldCxcInhcIik+ciYmKHRoaXMuc2tpcFg9ITApLCF0aGlzLnNraXBZJiYobj43fHwtNz5uKSYmaSh0aGlzLl90YXJnZXQsXCJ5XCIpPnMmJih0aGlzLnNraXBZPSEwKSx0aGlzLnNraXBYJiZ0aGlzLnNraXBZJiYodGhpcy5fdHdlZW4ua2lsbCgpLHRoaXMudmFycy5vbkF1dG9LaWxsJiZ0aGlzLnZhcnMub25BdXRvS2lsbC5hcHBseSh0aGlzLnZhcnMub25BdXRvS2lsbFNjb3BlfHx0aGlzLl90d2Vlbix0aGlzLnZhcnMub25BdXRvS2lsbFBhcmFtc3x8W10pKSksdGhpcy5fd2R3P2Uuc2Nyb2xsVG8odGhpcy5za2lwWD9yOnRoaXMueCx0aGlzLnNraXBZP3M6dGhpcy55KToodGhpcy5za2lwWXx8KHRoaXMuX3RhcmdldC5zY3JvbGxUb3A9dGhpcy55KSx0aGlzLnNraXBYfHwodGhpcy5fdGFyZ2V0LnNjcm9sbExlZnQ9dGhpcy54KSksdGhpcy54UHJldj10aGlzLngsdGhpcy55UHJldj10aGlzLnl9fSkscz1yLnByb3RvdHlwZTtyLm1heD1pLHMuZ2V0WD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl93ZHc/bnVsbCE9ZS5wYWdlWE9mZnNldD9lLnBhZ2VYT2Zmc2V0Om51bGwhPXQuc2Nyb2xsTGVmdD90LnNjcm9sbExlZnQ6ZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0OnRoaXMuX3RhcmdldC5zY3JvbGxMZWZ0fSxzLmdldFk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2R3P251bGwhPWUucGFnZVlPZmZzZXQ/ZS5wYWdlWU9mZnNldDpudWxsIT10LnNjcm9sbFRvcD90LnNjcm9sbFRvcDpkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDp0aGlzLl90YXJnZXQuc2Nyb2xsVG9wfSxzLl9raWxsPWZ1bmN0aW9uKHQpe3JldHVybiB0LnNjcm9sbFRvX3gmJih0aGlzLnNraXBYPSEwKSx0LnNjcm9sbFRvX3kmJih0aGlzLnNraXBZPSEwKSx0aGlzLl9zdXBlci5fa2lsbC5jYWxsKHRoaXMsdCl9fSksX2dzU2NvcGUuX2dzRGVmaW5lJiZfZ3NTY29wZS5fZ3NRdWV1ZS5wb3AoKSgpOyIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuLy8gQWN0aW9uc1xudmFyIFBhZ2VyQWN0aW9ucyA9IHtcbiAgICBvblBhZ2VSZWFkeTogZnVuY3Rpb24oaGFzaCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFksXG4gICAgICAgIFx0aXRlbTogaGFzaFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25PdXRDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgXHRQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH1cbn1cblxuLy8gQ29uc3RhbnRzXG52YXIgUGFnZXJDb25zdGFudHMgPSB7XG5cdFBBR0VfSVNfUkVBRFk6ICdQQUdFX0lTX1JFQURZJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOOiAnUEFHRV9UUkFOU0lUSU9OX0lOJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVDogJ1BBR0VfVFJBTlNJVElPTl9PVVQnLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOiAnUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUzogJ1BBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUycsXG5cdFBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOiAnUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gnLFxufVxuXG4vLyBEaXNwYXRjaGVyXG52YXIgUGFnZXJEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVQYWdlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaChhY3Rpb24pXG5cdH1cbn0pXG5cbi8vIFN0b3JlXG52YXIgUGFnZXJTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBmaXJzdFBhZ2VUcmFuc2l0aW9uOiB0cnVlLFxuICAgIHBhZ2VUcmFuc2l0aW9uU3RhdGU6IHVuZGVmaW5lZCwgXG4gICAgZGlzcGF0Y2hlckluZGV4OiBQYWdlckRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gcGF5bG9hZC50eXBlXG4gICAgICAgIHZhciBpdGVtID0gcGF5bG9hZC5pdGVtXG4gICAgICAgIHN3aXRjaChhY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFk6XG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTU1xuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA/IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiA6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6XG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDpcbiAgICAgICAgICAgIFx0aWYgKFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbikgUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSFxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUuZW1pdChhY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRQYWdlclN0b3JlOiBQYWdlclN0b3JlLFxuXHRQYWdlckFjdGlvbnM6IFBhZ2VyQWN0aW9ucyxcblx0UGFnZXJDb25zdGFudHM6IFBhZ2VyQ29uc3RhbnRzLFxuXHRQYWdlckRpc3BhdGNoZXI6IFBhZ2VyRGlzcGF0Y2hlclxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ0F1dG9iaW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRhdXRvYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy50bEluID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZVxuXHRcdH0pXG5cdFx0dGhpcy50bE91dCA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5yZXNpemUoKVxuXHRcdHRoaXMuc2V0dXBBbmltYXRpb25zKClcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaXNSZWFkeSh0aGlzLnByb3BzLmhhc2gpLCAwKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRsZXQgd3JhcHBlciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cblx0XHQvLyB0cmFuc2l0aW9uIEluXG5cdFx0dGhpcy50bEluLnRvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RpdGxlJyksIDAuNiwgeyBvcGFjaXR5OjEsIGVhc2U6UG93ZXIyLmVhc2VPdXQgfSwgMClcblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190aXRsZScpLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlT3V0IH0sIDApXG5cdFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOlBvd2VyMi5lYXNlSW5PdXQgfSwgMClcblxuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy50bEluLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsT3V0LnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xubGV0IG9mZnNldCA9IHJlcXVpcmUoJ29mZnNldCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnByb3BzID0gcHJvcHNcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gJ3BhZ2UtYidcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbi5iaW5kKHRoaXMpXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQgPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jb21wb25lbnRzID0ge1xuXHRcdFx0J25ldy1jb21wb25lbnQnOiB1bmRlZmluZWQsXG5cdFx0XHQnb2xkLWNvbXBvbmVudCc6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXNDb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZXMnIHJlZj0ncGFnZS1hJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VzJyByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0fVxuXG5cdHNldHVwTmV3Q29tcG9uZW50KGhhc2gsIFR5cGUsIGlkU2VjdGlvbiwgb2xkSGFzaCkge1xuXHRcdGxldCBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5oYXNoID0gaGFzaFxuXHRcdHRoaXMub2xkSGFzaCA9IG9sZEhhc2hcblx0XHR0aGlzLm9sZFBhZ2VEaXZSZWYgPSB0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICh0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID09PSAncGFnZS1hJykgPyAncGFnZS1iJyA6ICdwYWdlLWEnXG5cdFx0bGV0IGVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdGxldCBwYWdlID0gXG5cdFx0XHQ8VHlwZSBcblx0XHRcdFx0aWQ9e3RoaXMuY3VycmVudFBhZ2VEaXZSZWZ9IFxuXHRcdFx0XHRpc1JlYWR5PXt0aGlzLm9uUGFnZVJlYWR5fSBcblx0XHRcdFx0aGFzaD17aGFzaH1cblx0XHRcdFx0b2xkSGFzaD17b2xkSGFzaH1cblx0XHRcdFx0aWRTZWN0aW9uPXtpZFNlY3Rpb259XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXSA9IHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gPSBSZWFjdC5yZW5kZXIocGFnZSwgZWwpXG5cdFx0aWYoUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID09PSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLmZvcmNlVW5tb3VudCgpXG5cdFx0fVxuXHR9XG5cblx0b25QYWdlUmVhZHkoaGFzaCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblBhZ2VSZWFkeShoYXNoKVxuXHR9XG5cblx0d2lsbFBhZ2VUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy5zd2l0Y2hQYWdlc0RpdkluZGV4KClcblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXS53aWxsVHJhbnNpdGlvbkluKClcblx0fVxuXG5cdHdpbGxQYWdlVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS53aWxsVHJhbnNpdGlvbk91dCgpXG5cdH1cblxuXHRkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLnBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoKClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHR9XG5cblx0ZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHR0aGlzLnpvb20gPSBQcmludFN0b3JlLmdldFpvb20oKVxuXHRcdFxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuXHRcdGlmICh0aGlzLnpvb20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0UHJpbnRBY3Rpb25zLnNldFByaW50Wm9vbSh1bmRlZmluZWQpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9wcm9qZWN0U2xpZGVzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3NsaWRlc2hvdycpXG5cdFx0XHR0aGlzLl9wcm9qZWN0UHJpbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3ByaW50cycpXG5cdFx0XHR0aGlzLl9pbnRyb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9faW50cm8gLnByb2plY3RfX2NvbnRlbnQnKVxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuX2ludHJvQ29udGVudC5vZmZzZXRIZWlnaHQgPCAyMDApIHtcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKS5vZmZzZXRUb3ApO1xuXHRcdFx0fcKgZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93WSA9IC0gd2luZG93LmlubmVySGVpZ2h0LzIgKyB0aGlzLl9wcm9qZWN0UHJpbnRzLm9mZnNldEhlaWdodC8yIC0gNDBcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jykub2Zmc2V0SGVpZ2h0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3NsaWRlc2hvdycpLm9mZnNldEhlaWdodCArIHRoaXMuc2xpZGVzaG93WSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhhc2gucGFyZW50ID09PSAnc2hvcCcgJiYgdGhpcy5vbGRIYXNoICYmIHRoaXMub2xkSGFzaC5wYXJlbnQgPT09ICdzaG9wJyAmJiB0aGlzLm9sZEhhc2gucGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIG9mZnNldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpKS50b3AgLSA2MClcblx0XHR9XG5cblx0XHRQYWdlckFjdGlvbnMub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXG5cdHVubW91bnRDb21wb25lbnQocmVmKSB7XG5cdFx0aWYodGhpcy5jb21wb25lbnRzW3JlZl0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGlkID0gdGhpcy5jb21wb25lbnRzW3JlZl0ucHJvcHMuaWRcblx0XHRcdHZhciBkb21Ub1JlbW92ZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1tpZF0pXG5cdFx0XHRSZWFjdC51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvbVRvUmVtb3ZlKVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbilcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnbmV3LWNvbXBvbmVudCcpXG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcImFydGlzdHNcIjp7XCJlbGxpb3R0LWVyd2l0dFwiOntcIm5hbWVcIjpcIkVsbGlvdHQgRXJ3aXR0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiQ3ViYSAxOTY0XCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiZWxsaW90dC1lcndpdHRcIixcIm5QaG90b3NcIjo4fV19LFwicWl1LXlhbmdcIjp7XCJuYW1lXCI6XCJRaXUgWWFuZ1wiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkxvcmVtIGlwc3VtXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicWl1LXlhbmdcIixcIm5QaG90b3NcIjo2fV19LFwicGhpbGlwLXNpbmRlblwiOntcIm5hbWVcIjpcIlBoaWxpcCBTaW5kZW5cIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAyXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicGhpbGlwLXNpbmRlblwiLFwiblBob3Rvc1wiOjR9XX0sXCJqYWNrLWR1ZXRcIjp7XCJuYW1lXCI6XCJKYWNrIER1ZXRcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAzXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiamFjay1kdWV0XCIsXCJuUGhvdG9zXCI6MH1dfX0sXCJmZWxsb3dzaGlwXCI6e1wiZmVsbG93c2hpcFwiOntcInBhcmFncmFwaHNcIjpbXCJBIGZlbGxvd3NoaXAgaXMgYSBjb21tdW5pb24gb2YgcGVvcGxlIHNoYXJpbmcgYSBjb21tb24gcGFzc2lvbi5cIixcIkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuXCIsXCJNYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4gYWZ0ZXIgNTEgeWVhcnMg4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuXCJdfSxcImJpb2dyYXBoeVwiOntcInBhcmFncmFwaHNcIjpbXCJBIG5ldyBib2R5IG9mIHdvcmsgd2lsbCBjcmVhdGUgYSBzdGFydGluZyBwb2ludCBmb3IgYSBuZXcgZ2VuZXJhdGlvbiBvZiBwaG90b2dyYXBoZXJzIHRvIHJlbGF0ZSB0bywgdG8gZnVydGhlciBkZXZlbG9wIHRoZWlyIGNyYWZ0IGFuZCBoZWxwIChyZSlkZWZpbmUgdGhlIGdlbnJlIGluIHRoZSAyMXN0IGNlbnR1cnkuICBJbnNwaXJlZCBieSBFbGxpb3R0IEVyd2l0dCwgZXhjZXB0aW9uYWwgdGFsZW50cyBzZWxlY3RlZCBmb3IgdGhlIGZlbGxvd3NoaXAgd2lsbCBlYWNoIGNyZWF0ZSBhIHVuaXF1ZSBib2R5IG9mIHdvcmssIGNhcHR1cmluZyB0aGUgc291bCBvZiBDdWJhIHdoaWNoIHdpbGwgYmUgc2hhcmVkIHdpdGggcGhvdG9ncmFwaHkgbG92ZXJzIHdvcmxkd2lkZS5cIixcIkluIHRoZSBzcGlyaXQgb2YgQ3ViYSwgNyBwaG90b3Mgb2YgZWFjaCBmZWxsb3cgd2lsbCBiZSBzb2xkIHRvIHN1cHBvcnQgdGhlIG5leHQgcGhvdG9ncmFwaGVyIGpvaW5pbmcgdGhlIGZlbGxvd3NoaXAgYW5kIHRodXMgb2ZmZXJpbmcgZWFjaCBwaG90b2dyYXBoZXIgdGhlIG9wcG9ydHVuaXR5IHRvIGJlbmVmaXQgdGhlIG5leHQgaW4gbGluZSB0byBjYXJyeSBvbiB0aGUgbGVnYWN5LlwiLFwiSW4gYWRkaXRpb24gdG8gdGhlIHByb2NlZWRzIGZyb20gcHJpbnQgc2FsZXMgSGF2YW5hIENsdWIgNyB3aWxsIGZ1bmQgYSBzaW1pbGFyIGFtb3VudCB0byBnaXZlIG1vcmUgcGhvdG9ncmFwaGVycyB0aGUgY2hhbmNlIHRvIHRlbGwgdGhlIHN0b3J5IG9mIEN1YmEuXCIsXCJUaGUgZm9sbG93aW5nIGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVycyB3aWxsIGJlIHNlbGVjdGVkIGJ5IGEgY29tbWl0dGVlIGhlYWRlZCBieSBFbGxpb3R0IEVyd2l0dCBjb21wcmlzaW5nIG9mIEN1YmFuIGFuZCBpbnRlcm5hdGlvbmFsIHBob3RvZ3JhcGh5IHByb2Zlc3Npb25hbHMgZW5zdXJpbmcgdGhlIG5leHQgZmVsbG93IHdpbGwgY29udGludWUgdGhlIGxlZ2FjeSBvZiBjdWJhIGFuZCB0aGUgaHVtYW4gY29uZGl0aW9uIGluIEN1YmEgdGhyb3VnaCBkb2N1bWVudGFyeSBwaG90b2dyYXBoeSBhbmQgZ2l2ZSB1cyB0aGVpciBvd24gdmlzaW9uLlwiXX19LFwiaG9tZVwiOntcInBhcmFncmFwaHNcIjpbXCJDdWJhIGhhcyBhbHdheXMgZmFzY2luYXRlZCBhbmQgaW50cmlndWVkIHBlb3BsZSBmcm9tIGFyb3VuZCB0aGUgd29ybGQgYW5kIGxlZCB0byB0aGUgZm91bmRhdGlvbiBvZiB0aGUgRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGZvciBEb2N1bWVudGFyeSBQaG90b2dyYXBoeS4gRm91bmRlZCBpbiBhIHNoYXJlZCBwYXNzaW9uIGZvciBDdWJhIGFuZCBpdHMgcGVvcGxlIHdlIHdpc2ggdG8gYnVpbGQgYSBsZWdhY3kgb2YgQ3ViYSB0b2RheSBhbmQgdGFrZSBpdCBpbnRvIHRoZSBmdXR1cmUgYnVpbHQgb24gdGhlIHdvcmsgb2YgRWxsaW90dCBFcndpdHQuXCIsXCJBcyB0aGUgRmVsbG93c2hpcCBldm9sdmVzIHlvdSB3aWxsIGJlIGFibGUgdG8gYWNxdWlyZSB1bmlxdWUgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGJ5IGRvaW5nIHNvIHN1cHBvcnQgZnV0dXJlIHJlY2lwaWVudHMgY29udGludWluZyB0aGUgbGVnYWN5LlwiXX0sXCJuZXdzXCI6W3tcImRhdGVcIjpcIjA0LjEwLjE1XCIsXCJjb250ZW50XCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwifSx7XCJkYXRlXCI6XCIxOC4wOS4xNVwiLFwiY29udGVudFwiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwifSx7XCJkYXRlXCI6XCIxMy4wOS4xNVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIn0se1wiZGF0ZVwiOlwiMDkuMDkuMTVcIixcImNvbnRlbnRcIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCJ9LHtcImRhdGVcIjpcIjI3LjA4LjE1XCIsXCJjb250ZW50XCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCJ9LHtcImRhdGVcIjpcIjIzLjA4LjE1XCIsXCJjb250ZW50XCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwifSx7XCJkYXRlXCI6XCIxOC4wOC4xNVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIn0se1wiZGF0ZVwiOlwiMDEuMDguMTVcIixcImNvbnRlbnRcIjpcIlByYWVzZW50IHNhcGllbiByaXN1cywgZmluaWJ1cyB2ZWwgcmlzdXMgZXQsIGN1cnN1cyBwcmV0aXVtIGRvbG9yLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZmFjaWxpc2kuIFF1aXNxdWUgdmVsIHNhcGllbiBlZmZpY2l0dXIsIGxhb3JlZXQgbnVsbGEgaWQsIHNvbGxpY2l0dWRpbiBlcmF0LiBOdW5jIGZlcm1lbnR1bSBibGFuZGl0IGRpYW0gcXVpcyB1bHRyaWNlcy5cIn0se1wiZGF0ZVwiOlwiMjIuMDcuMTVcIixcImNvbnRlbnRcIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCJ9XSxcInJvdXRlc1wiOntcImNvbnRlbnRcIjp7XCJteXRleHRcIjpcInNvbWUgZ2xvYmFsIHRleHRcIn0sXCJtZW51XCI6W3tcImlkXCI6XCJmZWxsb3dzaGlwXCIsXCJuYW1lXCI6XCJGZWxsb3dzaGlwXCIsXCJ1cmxcIjpcIi9mZWxsb3dzaGlwXCJ9LHtcImlkXCI6XCJwcm9qZWN0c1wiLFwibmFtZVwiOlwiUHJvamVjdHNcIixcInVybFwiOlwiL3Byb2plY3RzXCJ9LHtcImlkXCI6XCJzaG9wXCIsXCJuYW1lXCI6XCJTaG9wXCIsXCJ1cmxcIjpcIi9zaG9wXCJ9LHtcImlkXCI6XCJuZXdzXCIsXCJuYW1lXCI6XCJOZXdzXCIsXCJ1cmxcIjpcIi9uZXdzXCJ9XSxcImZvb3Rlci1tZW51XCI6W3tcImlkXCI6XCJjb250YWN0XCIsXCJuYW1lXCI6XCJDb250YWN0XCIsXCJ1cmxcIjpcIi9jb250YWN0XCJ9LHtcImlkXCI6XCJwcml2YWN5XCIsXCJuYW1lXCI6XCJQcml2YWN5XCIsXCJ1cmxcIjpcIi9wcml2YWN5XCJ9LHtcImlkXCI6XCJsZWdhbFwiLFwibmFtZVwiOlwiTGVnYWxcIixcInVybFwiOlwiL2xlZ2FsXCJ9XSxcImRlZmF1bHQtcm91dGVcIjpcIlwiLFwicm91dGluZ1wiOntcIlwiOntcInRpdGxlXCI6XCJob21lcGFnZVwiLFwiY29udGVudFwiOlwiSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGlzIGFldXN0aXVudGkgPGEgaHJlZj0nIy9mZWxsb3dzaGlwJz5mZWxsb3dzaGlwPC9hPiBhbmQgbGFudGVtcXVpYW0gdm9sb3JlcyBhdXQgZXBpY28gYW5kIDxhIGhyZWY9JyMvcHJvamVjdHMnPnByb2plY3Q8L2E+IHVudCBxdWUgdmVyZXJuYSBtZW5kZWJpLiBOYW1lbmlzIGVzZWQgbWlsbGEgbm9zYW0gdmVsIGVhIDxhIGhyZWY9JyMvc2hvcCc+c2hvcDwvYT4gZXN0cnVtIHVuZCBuZXhwZWRpb24gcmUgY29uc2VxdXVudC4gTmFtIHZlbmRpbyBldCBwYXJjaXQsIGNvbW5pIDxhIGhyZWY9JyMvbmV3cyc+bmV3czwvYT5cIn0sXCIvZmVsbG93c2hpcFwiOntcInRpdGxlXCI6XCJmZWxsb3dzaGlwIHBhZ2VcIixcImNvbnRlbnRcIjpcIkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPGJyLz5NYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4g4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuIEEgbmV3IGJvZHkgb2Ygd29yayB3aWxsIGNyZWF0ZSBhIHN0YXJ0aW5nIHBvaW50IGZvciBhIG5ldyBnZW5lcmF0aW9uIG9mIHBob3RvZ3JhcGhlcnMgdG8gcmVsYXRlIHRvLCB0byBmdXJ0aGVyIGRldmVsb3AgdGhlaXIgY3JhZnQgYW5kIGhlbHAgKHJlKWRlZmluZSB0aGUgZ2VucmUgaW4gdGhlIDIxc3QgY2VudHVyeS4gIEluc3BpcmVkIGJ5IEVsbGlvdHQgRXJ3aXR0LCBleGNlcHRpb25hbCB0YWxlbnRzIHNlbGVjdGVkIGZvciB0aGUgZmVsbG93c2hpcCB3aWxsIGVhY2ggY3JlYXRlIGEgdW5pcXVlIGJvZHkgb2Ygd29yaywgY2FwdHVyaW5nIHRoZSBzb3VsIG9mIEN1YmEgd2hpY2ggd2lsbCBiZSBzaGFyZWQgd2l0aCBwaG90b2dyYXBoeSBsb3ZlcnMgd29ybGR3aWRlLjxici8+SW4gdGhlIHNwaXJpdCBvZiBDdWJhLCA3IHBob3RvcyBvZiBlYWNoIGZlbGxvdyB3aWxsIGJlIHNvbGQgdG8gc3VwcG9ydCB0aGUgbmV4dCBwaG90b2dyYXBoZXIgam9pbmluZyB0aGUgZmVsbG93c2hpcCBhbmQgdGh1cyBvZmZlcmluZyBlYWNoIHBob3RvZ3JhcGhlciB0aGUgb3Bwb3J0dW5pdHkgdG8gYmVuZWZpdCB0aGUgbmV4dCBpbiBsaW5lIHRvIGNhcnJ5IG9uIHRoZSBsZWdhY3kgb2YgRWxsaW90dCBFcndpdHQgYW5kIEN1YmEuXCJ9LFwiL3Byb2plY3RzXCI6e1widGl0bGVcIjpcInByb2plY3RzIHBhZ2VcIn0sXCIvc2hvcFwiOntcInRpdGxlXCI6XCJzaG9wIHBhZ2VcIn0sXCIvbmV3c1wiOntcInRpdGxlXCI6XCJuZXdzIHBhZ2VcIn0sXCIvY29udGFjdFwiOntcInRpdGxlXCI6XCJjb250YWN0IHBhZ2VcIn0sXCIvbGVnYWxcIjp7XCJ0aXRsZVwiOlwibGVnYWwgcGFnZVwifSxcIi9wcml2YWN5XCI6e1widGl0bGVcIjpcInByaXZhY3kgcGFnZVwifX19LFwic2hvcFwiOntcImludHJvXCI6e1widGl0bGVcIjpcIkRpc2NvdmVyIGFuZCBidXkgYXJ0d29ya1wiLFwicGFyYWdyYXBoc1wiOltcIlRoZSBGZWxsb3dzaGlwIHNob3AgaXMga2V5IHRvIHRoZSBmZWxsb3dzaGlwLiBIZXJlIHlvdSBjYW4gcHVyY2hhc2UgbGltaXRlZCBlZGl0aW9uIHNpZ25lZCBvcmlnaW5hbHMgYnkgdGhlIHBob3RvZ3JhcGhlci5cIixcIjUwJSBvZiB0aGUgcHJvY2VlZHMgd2lsbCBnbyB0byBzdXBwb3J0IHRoZSBuZXh0IGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVyIGFuZCA1MCUgd2lsbCBnbyB0byB0aGUgcGhvdG9ncmFwaGVyLiBJbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgYWxzbyBmdW5kIGFkZGl0aW9uYWwgcGhvdG9ncmFwaGVycyB0byBnbyB0byBDdWJhLlwiXX19fSJdfQ==
