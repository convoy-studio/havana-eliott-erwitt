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
												_react2['default'].createElement('img', { className: 'cart__image', src: './assets/images/prints/' + product.file + '_min.jpg' })
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

			this._video = (0, _domquery2['default'])('.video');
			this._videoFile = document.querySelector('.video__file');

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
						_react2['default'].createElement('video', { autoPlay: true, loop: true, muted: true, className: 'video__file', src: './assets/videos/bg-home.mp4' })
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
								_react2['default'].createElement('video', { className: 'fellowship__interview', src: './assets/videos/bg-home.mp4' }),
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
					_react2['default'].createElement('video', { autoPlay: true, loop: true, muted: true, className: 'video__file', src: './assets/videos/bg-home.mp4' })
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
			file.src = './assets/images/prints/' + this.state.print.file + '_medium.jpg';
		}
	}, {
		key: '_onImageLoaded',
		value: function _onImageLoaded(e) {
			var size = undefined;
			var path = e.explicitOriginalTarget || e.target || e.path[0];
			if (path.height >= path.width * 1.2) size = 'portrait';else size = 'landscape';

			this.print = _react2['default'].createElement(
				'div',
				{ className: 'print__left' },
				_react2['default'].createElement(
					'div',
					{ className: 'print__image print__image--' + size },
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

			// if (params.path[0].height >= params.path[0].width*1.2) {
			// 	this.print = <div className='print__left'><div className='print__image print__image--portrait'><img src={'./assets/images/prints/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
			// } else {
			// 	this.print = <div className='print__left'><div className='print__image print__image--landscape'><img src={'./assets/images/prints/'+this.state.print.file+'_medium.jpg'}></img><div className='print__tech'><p>Silver gelatin print measuring</p><p>27.9 × 35.6 cm (11 × 14 inches), unframed.</p><p>Printed under the direct supervision of the artist.</p><p>One of a signed, limited edition of {this.state.print.copies}.</p></div></div></div>
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
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			console.log(prevState);
			console.log(this.state);
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
										{ href: '#', className: 'project__button button button--left button--reverse' },
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
												{ className: 'project__button button button--left button--reverse', onClick: _this2._toggleStoryBinded },
												_react2['default'].createElement(
													'span',
													{ className: 'button__content' },
													'The story'
												)
											),
											_react2['default'].createElement(
												'a',
												{ href: url, className: 'project__button button button--right button--reverse' },
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hY3Rpb25zL0FydGlzdEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvQ2FydEFjdGlvbnMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2FjdGlvbnMvUHJpbnRBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQXJ0aXN0QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9hcGkvQ2FydEFwaS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYXBpL1ByaW50QXBpLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0NhcnQuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Db250YWN0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0ZlbGxvd3NoaXAuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvRnJpZW5kcy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9HYWxsZXJ5LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0hvbWUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTGVnYWwuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvTmV3cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Ob3Rmb3VuZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9QYXltZW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaW50LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaXZhY3kuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9TaG9wLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25maWcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcHBDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9BcnRpc3RDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbnN0YW50cy9DYXJ0Q29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvUHJpbnRDb25zdGFudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc2VydmljZXMvUm91dGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3N0b3Jlcy9BcnRpc3RTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0NhcnRTdG9yZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL1ByaW50U3RvcmUuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL0F1dG9iaW5kLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9VdGlscy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvb2Zmc2V0LmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9yYWYuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3V0aWxzL3Njcm9sbFRvLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL1BhZ2VyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZVBhZ2VyLmpzIiwid3d3L2RhdGEvZGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzttQkNiZ0IsS0FBSzs7OztvQkFDQSxNQUFNOzs7O3FCQUNULE9BQU87Ozs7bUJBQ1QsS0FBSzs7Ozt5QkFDQyxXQUFXOzs7O0FBRWpDLDRCQUFVLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7O0FBR3hCLElBQUksR0FBRyxHQUFHLHNCQUFTLENBQUE7QUFDbkIs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Q0FBQyxHQUFDLFFBQVEsR0FBQyxDQUFDO1FBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUcsQ0FBQyxJQUFFLEVBQUMsS0FBRyxDQUFDLElBQUUsRUFBQyxLQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQUFBQyxHQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFDLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUM7TUFBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsY0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGNBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLEtBQUcsQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLFFBQVEsSUFBRSxPQUFPLENBQUMsS0FBRyxDQUFDLEdBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUEsQUFBQyxFQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxLQUFLLEtBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7S0FBQyxFQUFDLEdBQUcsRUFBQyxhQUFTLENBQUMsRUFBQztBQUFDLFVBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLO1VBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSztVQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUs7VUFBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLEFBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFFLEVBQUUsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssS0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQSxBQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUFDLEVBQUMsQ0FBQztNQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsWUFBVTtBQUFDLFdBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLElBQUksSUFBRSxDQUFDLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsWUFBVTtBQUFDLFdBQU8sSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLElBQUksSUFBRSxDQUFDLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUE7R0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxZQUFPLENBQUMsQ0FBQyxVQUFVLEtBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQSxBQUFDLEVBQUMsQ0FBQyxDQUFDLFVBQVUsS0FB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QUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7R0FDdEM7OztRQW5HbUIsU0FBUztHQUFTLG1CQUFNLFNBQVM7O3FCQUFqQyxTQUFTOzs7O0FDTjlCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiAoc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiaW1wb3J0IEFwcCBmcm9tICdBcHAnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBQYWdlciBmcm9tICdQYWdlcidcbmltcG9ydCByYWYgZnJvbSAncmFmJ1xuaW1wb3J0IEZhc3RDbGljayBmcm9tICdmYXN0Y2xpY2snXG5cbkZhc3RDbGljayhkb2N1bWVudC5ib2R5KVxuXG4vLyBTdGFydCBBcHBcbnZhciBhcHAgPSBuZXcgQXBwKClcbmFwcC5pbml0KClcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgQXBwVGVtcGxhdGUgZnJvbSAnQXBwVGVtcGxhdGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBHRXZlbnRzIGZyb20gJ0dsb2JhbEV2ZW50cydcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBJbml0IGdsb2JhbCBldmVudHNcblx0XHR3aW5kb3cuR2xvYmFsRXZlbnRzID0gbmV3IEdFdmVudHMoKVxuXHRcdEdsb2JhbEV2ZW50cy5pbml0KClcblx0XHRcblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcblx0XHQpXG5cblx0XHQvLyBTdGFydCByb3V0aW5nXG5cdFx0cm91dGVyLmJlZ2luUm91dGluZygpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGcm9udENvbnRhaW5lciBmcm9tICdGcm9udENvbnRhaW5lcidcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICdQYWdlc0NvbnRhaW5lcidcbmltcG9ydCBDYXJ0IGZyb20gJ0NhcnQnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcblxuZnVuY3Rpb24gX2dldENhcnRTdGF0ZSgpIHtcblx0cmV0dXJuIHtcblx0XHRjYXJ0SXRlbXM6IENhcnRTdG9yZS5nZXRDYXJ0SXRlbXMoKSxcblx0XHRjYXJ0Q291bnQ6IENhcnRTdG9yZS5nZXRDYXJ0Q291bnQoKSxcblx0XHRjYXJ0VG90YWw6IENhcnRTdG9yZS5nZXRDYXJ0VG90YWwoKSxcblx0XHRjYXJ0VmlzaWJsZTogQ2FydFN0b3JlLmdldENhcnRWaXNpYmxlKCksXG5cdFx0Y2FydEVuYWJsZWQ6IENhcnRTdG9yZS5nZXRDYXJ0RW5hYmxlZCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSBfZ2V0Q2FydFN0YXRlKClcblx0XHR0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25TdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XG5cdFx0Q2FydFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Q2FydFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSd0ZW1wbGF0ZSc+XG5cdFx0XHRcdDxjYW52YXMgcmVmPSdjYW52YXMnIGNsYXNzTmFtZT0nY2FudmFzJz48L2NhbnZhcz5cblx0XHRcdFx0PEZyb250Q29udGFpbmVyIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciAvPlxuXHRcdFx0XHQ8Q2FydFxuXHRcdFx0XHRcdHByb2R1Y3RzPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRJdGVtcyA6ICcnfVxuXHRcdFx0XHRcdGNvdW50PXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRDb3VudCA6ICcnfVxuXHRcdFx0XHRcdHRvdGFsPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRUb3RhbCA6ICcnfVxuXHRcdFx0XHRcdHZpc2libGU9eyh0aGlzLnN0YXRlKSA/IHRoaXMuc3RhdGUuY2FydFZpc2libGUgOiAnJ31cblx0XHRcdFx0XHRlbmFibGVkPXsodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmNhcnRFbmFibGVkIDogJyd9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRHbG9iYWxFdmVudHMucmVzaXplKClcblx0fVxuXG5cdF9vblN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoX2dldENhcnRTdGF0ZSgpKVxuXHR9XG5cbn1cbiIsImltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcblxudmFyIEFwcEFjdGlvbnMgPSB7XG4gICAgcGFnZUhhc2hlckNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2VJZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsXG4gICAgICAgICAgICBpdGVtOiBwYWdlSWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgd2luZG93UmVzaXplOiBmdW5jdGlvbih3aW5kb3dXLCB3aW5kb3dIKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSxcbiAgICAgICAgICAgIGl0ZW06IHsgd2luZG93Vzp3aW5kb3dXLCB3aW5kb3dIOndpbmRvd0ggfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IEFydGlzdENvbnN0YW50cyBmcm9tICdBcnRpc3RDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0ICdmZXRjaCdcblxudmFyIEFydGlzdEFjdGlvbnMgPSB7XG5cbiAgICByZWNlaXZlQWxsIDogZnVuY3Rpb24oYXJ0aXN0cyl7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FMTF9BUlRJU1RTLFxuICAgICAgICAgICAgaXRlbTogYXJ0aXN0c1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVjZWl2ZSA6IGZ1bmN0aW9uKGFydGlzdCl7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FSVElTVCxcbiAgICAgICAgICAgIGl0ZW06IGFydGlzdFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVjZWl2ZUVycm9yIDogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcnRpc3RDb25zdGFudHMuRVJST1IsXG4gICAgICAgICAgICBpdGVtOiBlcnJvclxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0QWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IENhcnRDb25zdGFudHMgZnJvbSAnQ2FydENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgJ2ZldGNoJ1xuXG52YXIgQ2FydEFjdGlvbnMgPSB7XG5cblx0Ly8gUmVjZWl2ZSBpbml0YWwgcHJvZHVjdCBkYXRhXG5cdHJlY2VpdmVQcm9kdWN0OiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5SRUNFSVZFX0RBVEEsXG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fSlcblx0fSxcblxuXHQvLyBTZXQgY3VycmVudGx5IHNlbGVjdGVkIHByb2R1Y3QgdmFyaWF0aW9uXG5cdHNlbGVjdFByb2R1Y3Q6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5TRUxFQ1RfUFJPRFVDVCxcblx0XHRcdGRhdGE6IGluZGV4XG5cdFx0fSlcblx0fSxcblxuXHQvLyBBZGQgaXRlbSB0byBjYXJ0XG5cdGFkZFRvQ2FydDogZnVuY3Rpb24ocHJpbnRJZCwgdXBkYXRlKSB7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogQ2FydENvbnN0YW50cy5DQVJUX0FERCxcblx0XHRcdHByaW50SWQ6IHByaW50SWQsXG5cdFx0XHR1cGRhdGU6IHVwZGF0ZVxuXHRcdH0pXG5cdH0sXG5cblx0Ly8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5cdHJlbW92ZUZyb21DYXJ0OiBmdW5jdGlvbihpbmRleCkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9SRU1PVkUsXG5cdFx0XHRpbmRleDogaW5kZXhcblx0XHR9KVxuXHR9LFxuXG5cdC8vIFVwZGF0ZSBjYXJ0IHZpc2liaWxpdHkgc3RhdHVzXG5cdHVwZGF0ZUNhcnRWaXNpYmxlOiBmdW5jdGlvbihjYXJ0VmlzaWJsZSkge1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IENhcnRDb25zdGFudHMuQ0FSVF9WSVNJQkxFLFxuXHRcdFx0Y2FydFZpc2libGU6IGNhcnRWaXNpYmxlXG5cdFx0fSlcblx0fSxcblxuXHQvLyBVcGRhdGUgY2FydCBlbmFibGVkIHN0YXR1c1xuXHR1cGRhdGVDYXJ0RW5hYmxlZDogZnVuY3Rpb24oY2FydEVuYWJsZWQpIHtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBDYXJ0Q29uc3RhbnRzLkNBUlRfRU5BQkxFRCxcblx0XHRcdGNhcnRFbmFibGVkOiBjYXJ0RW5hYmxlZFxuXHRcdH0pXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0QWN0aW9uc1xuXG5cblx0ICBcbiIsImltcG9ydCBQcmludENvbnN0YW50cyBmcm9tICdQcmludENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgJ2ZldGNoJ1xuXG52YXIgUHJpbnRBY3Rpb25zID0ge1xuXG5cdHJlY2VpdmVBbGwgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQUxMX1BSSU5UUyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmVGb3JTYWxlIDogZnVuY3Rpb24ocHJpbnRzKXtcblx0XHRBcHBEaXNwYXRjaGVyLmhhbmRsZVNlcnZlckFjdGlvbih7XG5cdFx0XHRhY3Rpb25UeXBlOiBQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UU19GT1JTQUxFLFxuXHRcdFx0aXRlbTogcHJpbnRzXG5cdFx0fSk7XG5cdH0sXG5cblx0cmVjZWl2ZVNsaWRlc2hvdyA6IGZ1bmN0aW9uKHByaW50cyl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVFNfU0xJREVTSE9XLFxuXHRcdFx0aXRlbTogcHJpbnRzXG5cdFx0fSk7XG5cdH0sXG5cblx0cmVjZWl2ZUZyb21BcnRpc3QgOiBmdW5jdGlvbihwcmludHMpe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfQVJUSVNUX1BSSU5UUyxcblx0XHRcdGl0ZW06IHByaW50c1xuXHRcdH0pO1xuXHR9LFxuXG5cdHJlY2VpdmUgOiBmdW5jdGlvbihwcmludCl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVCxcblx0XHRcdGl0ZW06IHByaW50XG5cdFx0fSk7XG5cdH0sXG5cblx0cmVjZWl2ZUVycm9yIDogZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdEFwcERpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcblx0XHRcdGFjdGlvblR5cGU6IFByaW50Q29uc3RhbnRzLkVSUk9SLFxuXHRcdFx0aXRlbTogZXJyb3Jcblx0XHR9KTtcblx0fSxcblxuXHRzZXRQcmludFpvb20gOiBmdW5jdGlvbihpZCl7XG5cdFx0QXBwRGlzcGF0Y2hlci5oYW5kbGVTZXJ2ZXJBY3Rpb24oe1xuXHRcdFx0YWN0aW9uVHlwZTogUHJpbnRDb25zdGFudHMuWk9PTSxcblx0XHRcdGl0ZW06IGlkXG5cdFx0fSk7XHRcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW50QWN0aW9uc1xuXG5cblx0ICBcbiIsImltcG9ydCBBcnRpc3RBY3Rpb25zIGZyb20gJ0FydGlzdEFjdGlvbnMnXG5pbXBvcnQgJ2ZldGNoJ1xubGV0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRnZXRBbGwgOiBmdW5jdGlvbigpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL2FydGlzdHMnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdEFydGlzdEFjdGlvbnMucmVjZWl2ZUFsbChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRCeVNsdWcgOiBmdW5jdGlvbihzbHVnKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9hcnRpc3QvJyArIHNsdWcpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0QXJ0aXN0QWN0aW9ucy5yZWNlaXZlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9XG5cbn07IiwiaW1wb3J0IENhcnRBY3Rpb25zIGZyb20gJ0NhcnRBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0cGF5IDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goJ2h0dHBzOi8vc2VjdXJlLXRlc3QuYmUyYmlsbC5jb20vZnJvbnQvZm9ybS9wcm9jZXNzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHQvLyBoZWFkZXJzOiB7XG5cdFx0XHRcdC8vICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdC8vIH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdC8vICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG5cdFx0XHRcdE9SREVSSUQ6ICcwMTIzNDU2Nzg5Jyxcblx0XHRcdFx0SURFTlRJRklFUjogJ0NPTlZPWScsXG5cblx0XHRcdH0pXG5cdFx0fSlcblx0fSxcblxuXHRnZW5lcmF0ZVBheUJ1dHRvbiA6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGZldGNoKCcuL3BocC9oZWxsby5waHAnKVxuXHRcdC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2ZyZWVsYW5jZS9IYXZhbmEvcGhwL2hlbGxvLnBocCcpXG5cdFx0Ly8gLy8gZmV0Y2goJzE5Mi4xNjguMS4zNy9mcmVlbGFuY2UvSGF2YW5hL3BocC9oZWxsby5waHAnKVxuXHRcdC8vIFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXG5cdFx0Ly8gXHRcdHJldHVybiByZXNwb25zZS50ZXh0KClcblx0XHQvLyBcdH0pLnRoZW4oZnVuY3Rpb24oYm9keSkge1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhib2R5KVxuXHRcdC8vIFx0XHQvLyBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGJvZHlcblx0XHQvLyBcdH0pXG5cblx0XHRodHRwR2V0QXN5bmMoJ2h0dHA6Ly9sb2NhbGhvc3QvZnJlZWxhbmNlL0hhdmFuYS9waHAvaGVsbG8ucGhwJywgKHJlcykgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pO1xuXHR9XG5cbn07XG5cbmZ1bmN0aW9uIGh0dHBHZXRBc3luYyh0aGVVcmwsIGNhbGxiYWNrKVxue1xuICAgIHZhciB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG1sSHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHsgXG4gICAgICAgIGlmICh4bWxIdHRwLnJlYWR5U3RhdGUgPT0gNCAmJiB4bWxIdHRwLnN0YXR1cyA9PSAyMDApXG4gICAgICAgICAgICBjYWxsYmFjayh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICAgIHhtbEh0dHAub3BlbihcIkdFVFwiLCB0aGVVcmwsIHRydWUpOyAvLyB0cnVlIGZvciBhc3luY2hyb25vdXMgXG4gICAgeG1sSHR0cC5zZW5kKG51bGwpO1xufSIsImltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0ICdmZXRjaCdcbmxldCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z2V0QWxsIDogZnVuY3Rpb24oKSB7XG5cdFx0ZmV0Y2goY29uZmlnLnNpdGV1cmwgKyAnL2FwaS9wcmludHMnKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlQWxsKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldEZvclNhbGUgOiBmdW5jdGlvbigpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy9mb3JzYWxlJylcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oanNvbikge1xuXHRcdFx0XHRQcmludEFjdGlvbnMucmVjZWl2ZUZvclNhbGUoanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0U2xpZGVzaG93IDogZnVuY3Rpb24oYXJ0aXN0LCBpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzLycgKyBhcnRpc3QgKyAnL3NsaWRlc2hvdy8nICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdFx0UHJpbnRBY3Rpb25zLnJlY2VpdmVTbGlkZXNob3coanNvbilcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwYXJzaW5nIGZhaWxlZCcsIGV4KVxuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0QnlBcnRpc3QgOiBmdW5jdGlvbihhcnRpc3QpIHtcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50cy8nICsgYXJ0aXN0KVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlRnJvbUFydGlzdChqc29uKVxuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oZXgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhcnNpbmcgZmFpbGVkJywgZXgpXG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRPbmUgOiBmdW5jdGlvbihpZCkge1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnQvJyArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdFx0XHRcdFByaW50QWN0aW9ucy5yZWNlaXZlKGpzb24pXG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihleCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHRcdH0pO1xuXHR9LFxuXG5cdG9yZGVyIDogZnVuY3Rpb24oaWQsIHNlcmlhbCkge1xuXHRcdGNvbnNvbGUubG9nKHNlcmlhbClcblx0XHRmZXRjaChjb25maWcuc2l0ZXVybCArICcvYXBpL3ByaW50LycgKyBpZCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdzZXJpYWwnIDogc2VyaWFsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblx0Y3JlYXRlIDogZnVuY3Rpb24ocHJpbnQpe1xuXHRcdGZldGNoKGNvbmZpZy5zaXRldXJsICsgJy9hcGkvcHJpbnRzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdCdwcmludCcgOiBwcmludFxuXHRcdFx0fSlcblx0XHR9KTtcblx0fVxuXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoYXNoOiB1bmRlZmluZWRcblx0XHR9XG5cblx0XHQvLyBjb25zdFxuXHRcdHRoaXMuQ0FSVF9ERUxBWSA9IDIwMDBcblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZCA9IHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuX2RpZEhhc2hlckNoYW5nZUJpbmRlZClcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0ZG9tKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0X19jb250ZW50Jykub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpKVxuXHRcdGRvbSgnLmNhcnRfX2NvdW50Jykub24oJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUNvdW50RW50ZXIuYmluZCh0aGlzKSlcblx0XHRkb20oJy5jYXJ0Jykub24oJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcykpXG5cdFx0ZG9tKCcuY2FydCcpLm9uKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVMZWF2ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBpdGVtTGFiZWwgPSAodGhpcy5wcm9wcy5jb3VudCA+IDEpID8gJ2l0ZW1zJyA6ICdpdGVtJ1xuXHRcdGxldCBjbGFzc2VzID0gKHRoaXMucHJvcHMuZW5hYmxlZCA/ICdjYXJ0LS1lbmFibGVkICcgOiAnICcpICsgKHRoaXMucHJvcHMudmlzaWJsZSAmJiB0aGlzLnN0YXRlLmhhc2ggPT09ICdzaG9wJyA/ICdjYXJ0LS12aXNpYmxlJyA6ICcnKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnY2FydCAnICsgY2xhc3Nlc30gcmVmPSdjYXJ0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvdW50Jz5DYXJ0IOKAlDxzcGFuPnt0aGlzLnByb3BzLmNvdW50fTwvc3Bhbj4ge2l0ZW1MYWJlbH08L2Rpdj5cblx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMuY291bnQgPiAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29udGVudCc+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nY2FydF9fcHJvZHVjdHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMucHJvZHVjdHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByb2R1Y3QgPSB0aGF0LnByb3BzLnByb2R1Y3RzW2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdjYXJ0X19wcm9kdWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fYXJ0aXN0Jz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2RldGFpbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaXR5Jz57cHJvZHVjdC5jaXR5fTwvZGl2PiwgPGRpdiBjbGFzc05hbWU9J2NhcnRfX3llYXInPntwcm9kdWN0LnllYXJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fc2VyaWFsJz5TZXJpYWwgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19udW1iZXInPntwcm9kdWN0LnNlcmlhbH0ve3Byb2R1Y3QuY29waWVzfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaWNlJz57cHJvZHVjdC5wcmljZX08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcHJpbnQnPjxpbWcgY2xhc3NOYW1lPSdjYXJ0X19pbWFnZScgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3Byb2R1Y3QuZmlsZSsnX21pbi5qcGcnfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3JlbW92ZSBidXR0b24gYnV0dG9uLS1sZWZ0JyBvbkNsaWNrPXt0aGF0LnJlbW92ZUl0ZW0uYmluZCh0aGF0LCBpbmRleCl9PjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5SZW1vdmUgaXRlbTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3N1YnRvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlN1YnRvdGFsOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2NvbHVtbic+e3RoaXMucHJvcHMudG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jaGVja291dCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjL3BheW1lbnQnIGNsYXNzTmFtZT0nY2FydF9fYnV0dG9uIGJ1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPkNoZWNrIG91dDwvc3Bhbj48L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29udGVudCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2VtcHR5Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFlvdSBoYXZlIG5vIGl0ZW1zIGluIHlvdXIgY2FydC5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKCF0aGlzLnByb3BzLmVuYWJsZWQpXG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMucHJvcHMuZW5hYmxlZCA9IHRydWVcblx0XHRDYXJ0QWN0aW9ucy51cGRhdGVDYXJ0RW5hYmxlZCh0aGlzLnByb3BzLmVuYWJsZWQpXG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5lbmFibGVkKSB7XG5cdFx0XHR0aGlzLnByb3BzLmVuYWJsZWQgPSBmYWxzZVxuXHRcdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydEVuYWJsZWQodGhpcy5wcm9wcy5lbmFibGVkKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZUl0ZW0oaW5kZXgpIHtcblx0XHRDYXJ0QWN0aW9ucy5yZW1vdmVGcm9tQ2FydChpbmRleClcblx0fVxuXG5cdGhhbmRsZUNsaWNrT3V0c2lkZShlKSB7XG5cdFx0aWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX3JlbW92ZScpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX2J1dHRvbicpKSB7XG5cdFx0XHRpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX2NvdW50JykpIHRoaXMudG9nZ2xlKClcblx0XHRcdGVsc2UgdGhpcy5jbG9zZSgpXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2xpY2tJbnNpZGUoZSkge1xuXHRcdGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19yZW1vdmUnKSkgZS5zdG9wUHJvcGFnYXRpb24oKVxuXHR9XG5cblx0aGFuZGxlQ291bnRFbnRlcihlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VDb3VudGRvd24pXG5cdFx0dGhpcy5jbG9zZUNvdW50ZG93biA9IHVuZGVmaW5lZFxuXHRcdHRoaXMub3BlbigpXG5cdH1cblxuXHRoYW5kbGVFbnRlcihlKSB7XG5cdFx0aWYgKHRoaXMuY2xvc2VDb3VudGRvd24pIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQ291bnRkb3duKVxuXHRcdFx0dGhpcy5jbG9zZUNvdW50ZG93biA9IHVuZGVmaW5lZFxuXHRcdFx0dGhpcy5vcGVuKClcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVMZWF2ZShlKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0dGhpcy5jbG9zZUNvdW50ZG93biA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jbG9zZUNvdW50ZG93bilcblx0XHRcdHRoaXMuY2xvc2VDb3VudGRvd24gPSB1bmRlZmluZWRcblx0XHR9LCB0aGlzLkNBUlRfREVMQVkpXG5cdH1cblxuXHRfZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aGFzaDogQXBwU3RvcmUuaGFzaCgpXG5cdFx0fSlcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdCYXNlQ29tcG9uZW50J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlQmluZGVkID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRoYXNoOiB1bmRlZmluZWRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlQmluZGVkKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBtZW51RGF0YSA9IEFwcFN0b3JlLm1lbnVDb250ZW50KClcblx0XHRsZXQgbWVudUl0ZW1zID0gbWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdGxldCBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdGxldCBjbGFzc2VzID0gKGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuaGFzaCkgfHwgKGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuaGFzaCsncycpID8gJ2J1dHRvbi0tZW5hYmxlZCcgOiAnJ1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXsnaGVhZGVyX19pdGVtICcgKyBjbGFzc2VzfSBrZXk9e2luZGV4fT48YSBocmVmPXtwYXRoVXJsfSBjbGFzc05hbWU9J2J1dHRvbic+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPntpdGVtLm5hbWV9PC9zcGFuPjwvYT48L2xpPlxuXHRcdFx0KVxuXHRcdH0pLnJldmVyc2UoKVxuXHRcdGxldCBmb290ZXJNZW51RGF0YSA9IEFwcFN0b3JlLmZvb3Rlck1lbnVDb250ZW50KClcblx0XHRsZXQgZm9vdGVyTWVudUl0ZW1zID0gZm9vdGVyTWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdGxldCBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdGxldCBjbGFzc2VzID0gKGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuaGFzaCkgfHwgKGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUuaGFzaCsncycpID8gJ2J1dHRvbi0tZW5hYmxlZCcgOiAnJ1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+PGEgaHJlZj17cGF0aFVybH0gY2xhc3NOYW1lPSdmb290ZXJfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1yaWdodCc+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPntpdGVtLm5hbWV9PC9zcGFuPjwvYT48L2xpPlxuXHRcdFx0KVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nZnJvbnRDb250YWluZXInIGNsYXNzTmFtZT0nZnJvbnQtY29udGFpbmVyJyByZWY9J2Zyb250LWNvbnRhaW5lcic+XG5cdFx0XHRcdDxoZWFkZXIgaWQ9J2hlYWRlcicgY2xhc3NOYW1lPSdoZWFkZXInPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2hlYWRlcl9fdGl0bGUnPjxhIGhyZWY9JyMvJz5FbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3PGRpdiBjbGFzc05hbWU9J2hlYWRlcl9fc3VidGl0bGUnPkZlbGxvd3NoaXA8L2Rpdj48L2E+PC9oMT5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0naGVhZGVyX19tZW51Jz5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2hlYWRlcl9fbGlzdCc+XG5cdFx0XHRcdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PGZvb3RlciBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J2Zvb3Rlcic+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e2Zvb3Rlck1lbnVJdGVtc31cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGhhc2g6IEFwcFN0b3JlLmhhc2goKVxuXHRcdH0pXG5cdH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJ0Jhc2VQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRzdXBlci5zZXR1cEFuaW1hdGlvbnMoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IEZlbGxvd3NoaXAgZnJvbSAnRmVsbG93c2hpcCdcbmltcG9ydCBGcmllbmRzIGZyb20gJ0ZyaWVuZHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnUHJvamVjdHMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICdQcm9qZWN0J1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnR2FsbGVyeSdcbmltcG9ydCBTaG9wIGZyb20gJ1Nob3AnXG5pbXBvcnQgUHJpbnQgZnJvbSAnUHJpbnQnXG5pbXBvcnQgTmV3cyBmcm9tICdOZXdzJ1xuaW1wb3J0IFBheW1lbnQgZnJvbSAnUGF5bWVudCdcbmltcG9ydCBDb250YWN0IGZyb20gJ0NvbnRhY3QnXG5pbXBvcnQgTGVnYWwgZnJvbSAnTGVnYWwnXG5pbXBvcnQgUHJpdmFjeSBmcm9tICdQcml2YWN5J1xuaW1wb3J0IE5vdGZvdW5kIGZyb20gJ05vdGZvdW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlc0NvbnRhaW5lciBleHRlbmRzIEJhc2VQYWdlciB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2UgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHRsZXQgaGFzaCA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0XHRsZXQgdHlwZSA9IHVuZGVmaW5lZFxuXHRcdGxldCBpZCA9IHVuZGVmaW5lZFxuXG5cdFx0c3dpdGNoKGhhc2gucGFyZW50KSB7XG5cdFx0XHRjYXNlICcnOlxuXHRcdFx0XHR0eXBlID0gSG9tZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZmVsbG93c2hpcCc6XG5cdFx0XHRcdHR5cGUgPSBGZWxsb3dzaGlwXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmcmllbmRzJzpcblx0XHRcdFx0dHlwZSA9IEZyaWVuZHNcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Byb2plY3RzJzpcblx0XHRcdFx0dHlwZSA9IFByb2plY3RzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwcm9qZWN0Jzpcblx0XHRcdFx0aWYgKGhhc2gucGFydHMubGVuZ3RoID4gMikge1xuXHRcdFx0XHRcdGlmIChoYXNoLnBhcnRzWzJdID09PSAnY29udGFjdC1zaGVldCcpIHtcblx0XHRcdFx0XHRcdHR5cGUgPSBHYWxsZXJ5XG5cdFx0XHRcdFx0XHRpZCA9IGhhc2gudGFyZ2V0SWRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gem9vbSBzdXIgdW5lIHBob3RvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSBQcm9qZWN0XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Nob3AnOlxuXHRcdFx0XHRpZiAoaGFzaC5wYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0dHlwZSA9IFByaW50XG5cdFx0XHRcdFx0aWQgPSBoYXNoLnRhcmdldElkXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9IFNob3Bcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbmV3cyc6XG5cdFx0XHRcdHR5cGUgPSBOZXdzXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdwYXltZW50Jzpcblx0XHRcdFx0dHlwZSA9IFBheW1lbnRcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnRhY3QnOlxuXHRcdFx0XHR0eXBlID0gQ29udGFjdFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbGVnYWwnOlxuXHRcdFx0XHR0eXBlID0gTGVnYWxcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3ByaXZhY3knOlxuXHRcdFx0XHR0eXBlID0gUHJpdmFjeVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9IE5vdGZvdW5kXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXBOZXdDb21wb25lbnQoaGFzaC5wYXJlbnQsIHR5cGUsIGlkKVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2NvbnRhY3RQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJ3Njcm9sbFRvJ1xubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWxsb3dzaGlwIGV4dGVuZHMgUGFnZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2aWV3OiAnYmlvZ3JhcGh5J1xuXHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX2dvVG9CaW9ncmFwaHlCaW5kZWQgPSB0aGlzLl9nb1RvQmlvZ3JhcGh5LmJpbmQodGhpcylcblx0XHR0aGlzLl90b2dnbGVWaWRlb0JpbmRlZCA9IHRoaXMuX3RvZ2dsZVZpZGVvLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5QQVJBTExBWF9NQVJHRSA9IDMwXG5cdFx0dGhpcy5QQVJBTExBWF9EVVJBVElPTiA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFxuXHRcdC8vIHZhcnNcblx0XHR0aGlzLnZpZGVvUGxheWVkID0gZmFsc2Vcblx0XHR0aGlzLnNjcm9sbEluZGV4ID0gMFxuXHRcdHRoaXMuc2Nyb2xsT2sgPSBmYWxzZVxuXHRcdHRoaXMudHJhbnNmb3JtID0gVXRpbHMuR2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKVxuXHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblxuXHRcdHRoaXMuX2xpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxpbWl0Jylcblx0XHR0aGlzLl9hcnRpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpXG5cdFx0dGhpcy5fdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fdmlkZW8nKVxuXHRcdHRoaXMuYXJ0aXN0T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2FydGlzdCcpLm9mZnNldFRvcFxuXHRcdHRoaXMuX2VsbGlvdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9fZWxsaW90dCcpXG5cdFx0XG5cdFx0dGhpcy5fdmlkZW8gPSBkb20oJy52aWRlbycpXG5cdFx0dGhpcy5fdmlkZW9GaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvX19maWxlJylcblx0XHRcblx0XHR0aGlzLl9yYWYoKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBmZWxsb3dzaGlwRGF0YSA9IEFwcFN0b3JlLmZlbGxvd3NoaXBDb250ZW50KClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1mZWxsb3dzaGlwJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51Jz48YSBocmVmPScjL2ZyaWVuZHMnIGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RnJpZW5kcyBvZiB0aGUgZmVsbG93c2hpcDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmZWxsb3dzaGlwJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8gZmVsbG93c2hpcF9fdmlkZW8nPlxuXHRcdFx0XHRcdFx0PHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPSd2aWRlb19fZmlsZScgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS5tcDQnPjwvdmlkZW8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX3ByZXNlbnRhdGlvbic+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLWJpZyBwYXJhZ3JhcGgtLWNlbnRlcicgZGF0YS1lYXNlPScuMCc+QSBmZWxsb3dzaGlwIGlzIGEgY29tbXVuaW9uIG9mIHBlb3BsZSBzaGFyaW5nIGEgY29tbW9uIHBhc3Npb24uPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCBwYXJhZ3JhcGgtLWNlbnRlcic+SW4gQ3ViYSBnZW5lcmF0aW9ucyBvZiBhc3BpcmluZyBkaXN0aWxsZXJzIGhhdmUgZm9sbG93ZWQgdGhlIGV4YW1wbGUgb2YgYSBzZWFzb25lZCBydW0gbWFzdGVyIGFuZCBzbyBsZWFybnQgdG8gZGV2ZWxvcCBhbmQgcGVyZmVjdCB0aGVpciBjcmFmdC4gVGhlIEVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBjb21iaW5lcyB0aGlzIHJpY2ggaGlzdG9yeSBhbmQgdHJhZGl0aW9uIHdpdGggYSBwYXNzaW9uIGZvciBkb2N1bWVudGFyeSBwaG90b2dyYXBoeS48L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLW1lZGl1bSBwYXJhZ3JhcGgtLWNlbnRlcic+TWFzdGVyIHBob3RvZ3JhcGhlciBFbGxpb3R0IEVyd2l0dOKAmXMgbGlmZWxvbmcgbG92ZSBvZiBwaG90b2dyYXBoeSBhbmQgQ3ViYSBoYXMgYnJvdWdodCBoaW0gYmFjayB0byBDdWJhIGFnYWluIGFmdGVyIDUxIHllYXJzIOKAkyB0aGlzIHRpbWUgdG8gaW5pdGlhdGUgdGhlIGZlbGxvd3NoaXAgd2l0aCBIYXZhbmEgQ2x1YiA3LjwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX3JvdyBqcy1saW1pdCc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbiBwYXJhZ3JhcGhfX2NvbHVtbi0tbGVmdCc+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2VsbGlvdHQnIHNyYz0nLi4vYXNzZXRzL2ltYWdlcy9lbGxpb3R0LWVyd2l0dC5qcGcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkEgbmV3IGJvZHkgb2Ygd29yayB3aWxsIGNyZWF0ZSBhIHN0YXJ0aW5nIHBvaW50IGZvciBhIG5ldyBnZW5lcmF0aW9uIG9mIHBob3RvZ3JhcGhlcnMgdG8gcmVsYXRlIHRvLCB0byBmdXJ0aGVyIGRldmVsb3AgdGhlaXIgY3JhZnQgYW5kIGhlbHAgKHJlKWRlZmluZSB0aGUgZ2VucmUgaW4gdGhlIDIxc3QgY2VudHVyeS4gIEluc3BpcmVkIGJ5IEVsbGlvdHQgRXJ3aXR0LCBleGNlcHRpb25hbCB0YWxlbnRzIHNlbGVjdGVkIGZvciB0aGUgZmVsbG93c2hpcCB3aWxsIGVhY2ggY3JlYXRlIGEgdW5pcXVlIGJvZHkgb2Ygd29yaywgY2FwdHVyaW5nIHRoZSBzb3VsIG9mIEN1YmEgd2hpY2ggd2lsbCBiZSBzaGFyZWQgd2l0aCBwaG90b2dyYXBoeSBsb3ZlcnMgd29ybGR3aWRlLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tbWVkaXVtIHBhcmFncmFwaC0tY2VudGVyJz5JbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeS48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHBhcmFncmFwaC0tc21hbGwnPkluIGFkZGl0aW9uIHRvIHRoZSBwcm9jZWVkcyBmcm9tIHByaW50IHNhbGVzIEhhdmFuYSBDbHViIDcgd2lsbCBmdW5kIGEgc2ltaWxhciBhbW91bnQgdG8gZ2l2ZSBtb3JlIHBob3RvZ3JhcGhlcnMgdGhlIGNoYW5jZSB0byB0ZWxsIHRoZSBzdG9yeSBvZiBDdWJhLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbiBwYXJhZ3JhcGhfX2NvbHVtbi0tcmlnaHQnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19lbGxpb3R0JyBzcmM9Jy4uL2Fzc2V0cy9pbWFnZXMvcHJpbnRzL0VSRTIwMTUwMDJXMDAwMzMtMzZBX21lZGl1bS5qcGcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsIHBhcmFncmFwaC0tY2VudGVyJz5UaGUgZm9sbG93aW5nIGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVycyB3aWxsIGJlIHNlbGVjdGVkIGJ5IGEgY29tbWl0dGVlIGhlYWRlZCBieSBFbGxpb3R0IEVyd2l0dCBjb21wcmlzaW5nIG9mIEN1YmFuIGFuZCBpbnRlcm5hdGlvbmFsIHBob3RvZ3JhcGh5IHByb2Zlc3Npb25hbHMgZW5zdXJpbmcgdGhlIG5leHQgZmVsbG93IHdpbGwgY29udGludWUgdGhlIGxlZ2FjeSBvZiBjdWJhIGFuZCB0aGUgaHVtYW4gY29uZGl0aW9uIGluIEN1YmEgdGhyb3VnaCBkb2N1bWVudGFyeSBwaG90b2dyYXBoeSBhbmQgZ2l2ZSB1cyB0aGVpciBvd24gdmlzaW9uLjwvcD5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rpc2NvdmVyIGZlbGxvd3NoaXBfX2Rpc2NvdmVyJyBvbkNsaWNrPXt0aGlzLl9nb1RvQmlvZ3JhcGh5QmluZGVkfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdidXR0b24nPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5EaXNjb3ZlciBFbGxpb3R0IEVyd2l0dCdzIGJpb2dyYXBoeTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXNjb3Zlcl9fYXJyb3cnPjxkaXYgY2xhc3NOYW1lPSdhcnJvdyc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19hcnRpc3QnPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19hcnRpc3RuYW1lIHBhcmFncmFwaCBwYXJhZ3JhcGgtLWJpZyBwYXJhZ3JhcGgtLWNlbnRlcicgZGF0YS1lYXNlPScuMCc+RUxMSU9UVCBFUldJVFTigJlTIEJJT0dSQVBIWTwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcGFyYWdyYXBoLS1zbWFsbCc+RWxsaW90dCBFcndpdHQgaXMgb25lIG9mIHRoZSB3b3JsZOKAmXMgbW9zdCBwb3B1bGFyIGFuZCBhZG1pcmVkIHBob3RvZ3JhcGhlcnMuIEEgdmlzdWFsIHBvZXQgYW5kIGh1bW9yaXN0IG9mIGV2ZXJ5ZGF5IGxpZmUsIGhlIGhhcyBjcmVhdGVkIHNvbWUgb2YgdGhlIG1vc3QgbWVtb3JhYmxlIGltYWdlcyBvZiBvdXIgdGltZSwgZnJvbSBoaXMgb2JzZXJ2YXRpb25zIG9mIGRhaWx5IGxpZmUgYXQgc3RyZWV0IGxldmVsLCB0byBwb3J0cmFpdHMgb2YgdGhlIGljb25pYyBwZXJzb25hbGl0aWVzIGluY2x1ZGluZyBNYXJpbHluIE1vbnJvZSBvbiB0aGUgc2V0IG9mIHRoZSBmaWxtIFRoZSBNaXNmaXRzIGFuZCBUcnVtYW4gQ2Fwb3Rl4oCZcyBlcGljIDE5NjYgQmxhY2sgYW5kIFdoaXRlIEJhbGwgaW4gTmV3IFlvcmsgQ2l0eS4gSGUgaGFzIHBob3RvZ3JhcGhlZCBLaHJ1c2hjaGV2IGFuZCBOaXhvbiBhcmd1aW5nIGluIE1vc2NvdywgRmlkZWwgQ2FzdHJvIGFuZCBDaGUgR3VldmFyYSBpbiBIYXZhbmEgYW5kIFByZXNpZGVudCBKRksgaW4gdGhlIE92YWwgb2ZmaWNlLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJhZ3JhcGhfX2NvbHVtbicgb25DbGljaz17dGhpcy5fdG9nZ2xlVmlkZW9CaW5kZWR9PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWRlbyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2ludGVydmlldycgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS5tcDQnPjwvdmlkZW8+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmZWxsb3dzaGlwX19wbGF5IGVuYWJsZWQnPnBsYXkgdmlkZW88L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsIHBhcmFncmFwaC0tY2VudGVyJz5Cb3JuIGluIFBhcmlzIGluIDE5MjggdG8gUnVzc2lhbiBwYXJlbnRzLCBFcndpdHQgbW92ZWQgdG8gdGhlIFVTIHdpdGggaGlzIGZhbWlseSBpbiAxOTM5IGFuZCBpdCB3YXMgdGhlcmUgdGhhdCBoZSBtZXQgRWR3YXJkIFN0ZWljaGVuIGFuZCBSb3kgU3RyeWtlci4gUmVjcnVpdGVkIHRvIE1hZ251bSBQaG90b3MgYnkgUm9iZXJ0IENhcGEgaW4gMTk1MyBFcndpdHQgaGFzIGJlZW4gYSBtZW1iZXIgb2YgdGhlIHByZXN0aWdpb3VzIGFnZW5jeSBldmVyIHNpbmNlIGFuZCBoYXMgc2VydmVkIHNldmVyYWwgdGVybXMgYXMgaXRzIHByZXNpZGVudC48L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19yb3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFyYWdyYXBoX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoJz48YSBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2J1dHRvbiBidXR0b24nIGhyZWY9J2h0dHA6Ly93d3cuZWxsaW90dGVyd2l0dC5jb20nIHRhcmdldD0nX2JsYW5rJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RWxsaW90dCBFcndpdHQgb2ZmaWNpYWwgd2Vic2l0ZTwvc3Bhbj48L2E+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcmFncmFwaF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwYXJhZ3JhcGgtLXNtYWxsJz5UbyBkYXRlIEVyd2l0dCBoYXMgcHJvZHVjZWQgbW9yZSB0aGFuIDI1IHBob3RvZ3JhcGh5IGJvb2tzIGluY2x1ZGluZyBFYXN0ZXJuIEV1cm9wZSAoMTk2NSksIFRoZSBQcml2YXRlIEV4cGVyaWVuY2UgKDE5NzQpLCBQZXJzb25hbCBFeHBvc3VyZXMgKDE5ODgpLCBUbyB0aGUgRG9ncyAoMTk5MiksIGFuZCBQZXJzb25hbCBCZXN0ICgyMDEwKS4gSGlzIHBob3RvZ3JhcGhzIGhhdmUgYmVlbiBmZWF0dXJlZCBpbiBzb2xvIHNob3dzIGFsbCBvdmVyIHRoZSB3b3JsZCwgaW5jbHVkaW5nIGF0wqB0aGUgSUNQIGFuZCBUaGUgTXVzZXVtIG9mIE1vZGVybiBBcnQsIE5ldyBZb3JrOyBUaGUgQXJ0IEluc3RpdHV0ZSBvZiBDaGljYWdvO8KgVGhlIEJhcmJpY2FuLCBMb25kb24sIGFuZCBUaGUgUmVpbmEgU29maWEgTXVzZXVtLCBNYWRyaWQuIEVyd2l0dCBsaXZlcyBhbmQgd29ya3MgaW4gTmV3IFlvcmsgQ2l0eSBhbmQgbGlrZXMgY2hpbGRyZW4gYW5kIGRvZ3MuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbic+PGEgaHJlZj0nIy9wcm9qZWN0L2VsbGlvdHQtZXJ3aXR0JyBjbGFzc05hbWU9J2ZlbGxvd3NoaXBfX2J1dHRvbiBidXR0b25fX2NvbnRlbnQnPkRpc2NvdmVyIGhpcyBwcm9qZWN0PC9hPjwvZGl2PlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0Ly8gbGV0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRcdHRoaXMuX2hhbmRsZVNjcm9sbCgpXG5cdFx0fVxuXG5cdFx0c2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRfaGFuZGxlU2Nyb2xsKCkge1xuXHRcdGlmICh0aGlzLl92aWRlbyAmJiB0aGlzLl9saW1pdCkge1xuXHRcdFx0dGhpcy5zY3JvbGxUb3AgPSBVdGlscy5HZXRTY3JvbGxUb3AoKVxuXHRcdFx0dGhpcy52aWRlb09wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCgxIC0gKHRoaXMuc2Nyb2xsVG9wIC8gKHRoaXMuX2xpbWl0Lm9mZnNldFRvcCArIDE2MCAtIHdpbmRvdy5pbm5lckhlaWdodCkpLCAwLCAxKVxuXHRcdFx0dGhpcy5fdmlkZW8uc3R5bGUub3BhY2l0eSA9IHRoaXMudmlkZW9PcGFjaXR5XG5cdFx0fVxuXG5cdFx0Xyhkb20oJy5wYXJhZ3JhcGgnKSkuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG5cdFx0XHR0aGlzLmVhc2UgPSBlbC5kYXRhc2V0LmVhc2UgfHwgMC4zXG5cdFx0XHR0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KGVsKVxuXHRcdFx0Ly8gdGhpcy5saW1pdFRvcCA9IHRoaXMubGltaXRPZmZzZXQudG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICsgdGhpcy5QQVJBTExBWF9NQVJHRVxuXHRcdFx0dGhpcy5saW1pdFRvcCA9IHRoaXMubGltaXRPZmZzZXQudG9wIC0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHR0aGlzLmNvZWYgPSBVdGlscy5JbnRlcnZhbCh0aGlzLmxpbWl0VG9wIC8gKC10aGlzLlBBUkFMTEFYX0RVUkFUSU9OIC0gdGhpcy5saW1pdE9mZnNldC5oZWlnaHQpLCAwLCAxKVxuXHRcdFx0dGhpcy5lbFkgPSAoMS10aGlzLmNvZWYpICogMjAwICogdGhpcy5lYXNlXG5cdFx0XHQvLyBlbC5zdHlsZS5vcGFjaXR5ID0gdGhpcy5lbE9wYWNpdHlcblx0XHRcdGVsLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgdGhpcy5lbFkgKydweCkgdHJhbnNsYXRlWigwcHgpJylcblx0XHR9KS52YWx1ZSgpO1xuXHR9XG5cblx0X3RvZ2dsZVZpZGVvKCkge1xuXHRcdGlmICh0aGlzLnZpZGVvUGxheWVkKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVsbG93c2hpcF9faW50ZXJ2aWV3JykucGF1c2UoKVxuXHRcdFx0ZG9tKCcuZmVsbG93c2hpcF9fcGxheScpLmFkZENsYXNzKCdlbmFibGVkJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlbGxvd3NoaXBfX2ludGVydmlldycpLnBsYXkoKVxuXHRcdFx0ZG9tKCcuZmVsbG93c2hpcF9fcGxheScpLnJlbW92ZUNsYXNzKCdlbmFibGVkJylcblx0XHR9XG5cdFx0dGhpcy52aWRlb1BsYXllZCA9ICF0aGlzLnZpZGVvUGxheWVkXG5cdH1cblxuXHRfZ29Ub0Jpb2dyYXBoeSgpIHtcblx0XHR0aGlzLmFydGlzdE9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWxsb3dzaGlwX19hcnRpc3QnKS5vZmZzZXRUb3Bcblx0XHRUd2Vlbk1heC50byh3aW5kb3csIDAuNiwge3Njcm9sbFRvOnt5OiAodGhpcy5hcnRpc3RPZmZzZXRUb3AgLSA0MCl9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSlcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblxuXHRcdGlmICh3aW5kb3dXLzEuOCA8IHdpbmRvd0gpIGRvbSgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3J0cmFpdCcpXG5cdFx0ZWxzZSBkb20oJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9ydHJhaXQnKVxuXHR9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzIGV4dGVuZHMgUGFnZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nY29udGFjdFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0RnJpZW5kcyBvZiB0aGUgZmVsbG93c2hpcFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBQcmludFN0b3JlIGZyb20gJ1ByaW50U3RvcmUnXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5pbXBvcnQgUHJpbnRBY3Rpb25zIGZyb20gJ1ByaW50QWN0aW9ucydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxubGV0IE1hc29ucnkgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpXG5sZXQgc2Nyb2xsID0gVXRpbHMuU2Nyb2xsKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0Ly8gcHJvcHNcblx0XHR0aGlzLnByb3BzID0gcHJvcHNcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRwcmludHM6IFtdLFxuXHRcdFx0bG9hZGVkUHJpbnRzOiBbXVxuXHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcmFmQmluZGVkID0gdGhpcy5fcmFmLmJpbmQodGhpcylcblx0XHRcblx0XHQvLyBjb25zdFxuXHRcdHRoaXMuT1BBQ0lUWV9NQVJHRSA9IDMwXG5cdFx0dGhpcy5PUEFDSVRZX0RVUkFUSU9OID0gMzAwXG5cdFx0XG5cdFx0Ly8gdmFyc1xuXHRcdHRoaXMubG9hZGVkID0gZmFsc2Vcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLnByaW50cyA9IFtdXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdFByaW50QXBpLmdldEJ5QXJ0aXN0KHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0XG5cdFx0dGhpcy5fcmFmKClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbFJhZilcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XHRcblx0fVxuXG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRsZXQgd3JhcHBlciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cblx0XHQvLyB0cmFuc2l0aW9uIEluXG5cdFx0dGhpcy50bEluLmZyb20od3JhcHBlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byh3cmFwcGVyLCAwLjYsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZU91dCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLWdhbGxlcnknIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1Ym1lbnUnPjxhIGhyZWY9eycjL3Byb2plY3QvJyt0aGlzLnByb3BzLmlkU2VjdGlvbn0gY2xhc3NOYW1lPSdidXR0b24nPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5CYWNrIHRvIGdhbGxlcnk8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeSc+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMuc3RhdGUubG9hZGVkUHJpbnRzKS5tYXAoKHllYXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19ncmlkJyBrZXk9e3llYXIrJ18nK2l9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X193aWR0aCc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dhbGxlcnlfX2l0ZW0gZ2FsbGVyeV9faXRlbS0tbGFyZ2UgZ2FsbGVyeV9faXRlbS0tZGlzYWJsZWQnPnt5ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGF0LnN0YXRlLmxvYWRlZFByaW50c1t5ZWFyXSkubWFwKChwcmludElkLCBpKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5sb2FkZWRQcmludHNbeWVhcl1bcHJpbnRJZF1cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzcmMgPSAnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3ByaW50LmZpbGUrJ19taW4uanBnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLScrcHJpbnQuc2l6ZSsnIGdhbGxlcnlfX2l0ZW0tLScrcmFuZG9tfSBkYXRhLXJhbmRvbT17cmFuZG9tfSBrZXk9e2l9IG9uQ2xpY2s9e3RoYXQuem9vbVByaW50LmJpbmQodGhhdCwgcHJpbnRJZCl9PjxpbWcgY2xhc3NOYW1lPSdnYWxsZXJ5X19pbWFnZScgc3JjPXtzcmN9PjwvaW1nPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRfcmFmKCkge1xuXHRcdGlmICh0aGlzLnNjcm9sbEluZGV4ICUgMykgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHRlbHNlIHRoaXMuc2Nyb2xsT2sgPSB0cnVlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCsrXG5cblx0XHRpZiAodGhpcy5zY3JvbGxPaykge1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUmFmID0gc2Nyb2xsKHRoaXMuX3JhZkJpbmRlZCk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0Xyhkb20oJy5nYWxsZXJ5X19pdGVtJykpLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0dGhpcy5saW1pdE9mZnNldCA9IG9mZnNldChlbClcblx0XHRcdHRoaXMubGltaXRUb3AgPSB0aGlzLmxpbWl0T2Zmc2V0LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCArIHRoaXMuT1BBQ0lUWV9NQVJHRVxuXHRcdFx0dGhpcy5lbE9wYWNpdHkgPSBVdGlscy5JbnRlcnZhbCh0aGlzLmxpbWl0VG9wIC8gKC10aGlzLk9QQUNJVFlfRFVSQVRJT04pLCAwLCAxKVxuXHRcdFx0dGhpcy5lbFkgPSAoMS10aGlzLmVsT3BhY2l0eSkgKiA1MFxuXHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9IHRoaXMuZWxPcGFjaXR5XG5cdFx0XHRlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMuZWxZICsncHgpIHRyYW5zbGF0ZVooMHB4KScpXG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXHRcdHRoaXMubWF4ID0gXy5zaXplKHRoaXMuc3RhdGUucHJpbnRzKVxuXHRcdHRoaXMucHJpbnRzRGF0ZSA9IHt9O1xuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgIXRoaXMubG9hZGVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdF8odGhpcy5zdGF0ZS5wcmludHMpLmZvckVhY2goKHByaW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMucHJpbnRzRGF0ZVtwcmludC55ZWFyXSkgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdID0ge31cblx0XHRcdFx0dGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSA9IHByaW50XG5cblx0XHRcdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0XHRcdGZpbGUub25sb2FkID0gdGhhdC5vbkltYWdlTG9hZGVkLmJpbmQodGhhdCwgdGhpcy5wcmludHNEYXRlW3ByaW50LnllYXJdW2luZGV4XSlcblx0XHRcdFx0ZmlsZS5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL3ByaW50cy8nK3ByaW50LmZpbGUrJ19taW4uanBnJ1xuXHRcdFx0fSkudmFsdWUoKTtcblx0XHR9XG5cdH1cblxuXHRvbkltYWdlTG9hZGVkKHByaW50LCBlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrKztcblxuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBwYXRoID0gZS5leHBsaWNpdE9yaWdpbmFsVGFyZ2V0IHx8IGUudGFyZ2V0IHx8IGUucGF0aFswXSBcblx0XHRpZiAocGF0aC5oZWlnaHQgPj0gcGF0aC53aWR0aCoxLjIpIHByaW50LnNpemUgPSAnc21hbGwnXG5cdFx0ZWxzZSBwcmludC5zaXplID0gJ2xhcmdlJ1xuXHRcdFxuXHRcdGlmICh0aGlzLm5JbWFnZUxvYWRlZCA+PSB0aGlzLm1heCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdCdsb2FkZWRQcmludHMnOiB0aGlzLnByaW50c0RhdGVcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0bGV0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX2dyaWQnKTtcblx0XHRcdFx0XyhncmlkcykuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuXHRcdFx0XHRcdGxldCBpc28gPSBuZXcgTWFzb25yeShncmlkLCB7XG5cdFx0XHRcdFx0XHRpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeV9faXRlbScsXG5cdFx0XHRcdFx0XHRjb2x1bW5XaWR0aDogJy5nYWxsZXJ5X193aWR0aCcsXG5cdFx0XHRcdFx0XHRndXR0ZXI6IDI0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR6b29tUHJpbnQoaWQpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHRcblx0XHRQcmludEFjdGlvbnMuc2V0UHJpbnRab29tKGlkKVxuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbFJhZilcblx0XHRcblx0XHR0aGlzLnRsSXRlbXNPdXQgPSBuZXcgVGltZWxpbmVNYXgoKVxuXHRcdHRoaXMudGxJdGVtc091dC5zdGFnZ2VyVG8oXy5zaHVmZmxlKGRvbSgnLmdhbGxlcnlfX2l0ZW0nKSksIDAuNiwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlT3V0IH0sIDAuMDEpXG5cdFx0dGhpcy50bEl0ZW1zT3V0LmFkZENhbGxiYWNrKCgpID0+IHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcHJvamVjdC8nK3RoYXQucHJvcHMuaWRTZWN0aW9uO1xuXHRcdH0sICctPTAuMicpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJpbnRzOiBQcmludFN0b3JlLmdldEFydGlzdFByaW50cygpXG5cdFx0fSwgKCkgPT4ge1xuXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0dGhpcy5fY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbnZhcycpXG5cblx0XHRpZiAodGhpcy5fY2FudmFzKSB7XG5cdFx0XHR0aGlzLl9jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRUd2Vlbk1heC5zZXQoZG9tKCcuZnJvbnQtY29udGFpbmVyJyksIHtvcGFjaXR5OiAwfSk7XG5cdFx0XHRUd2Vlbk1heC5zZXQoZG9tKCcuaG9tZV9fY29udGVudCcpLCB7b3BhY2l0eTogMH0pO1xuXHRcdFx0VHdlZW5NYXguc2V0KGRvbSgnLmNhcnQnKSwge29wYWNpdHk6IDB9KTtcblxuXHRcdFx0dGhpcy5zaG93UGFnZUJpbmRlZCA9IHRoaXMuc2hvd1BhZ2UuYmluZCh0aGlzKVxuXHRcdFx0dGhpcy5pbml0Q2FudmFzKClcblx0XHRcdHRoaXMuaW5pdEFuaW1hdGlvbigpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBob21lRGF0YSA9IEFwcFN0b3JlLmhvbWVDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0taG9tZScgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8nPlxuXHRcdFx0XHRcdDx2aWRlbyBhdXRvUGxheSBsb29wIG11dGVkIGNsYXNzTmFtZT0ndmlkZW9fX2ZpbGUnIHNyYz0nLi9hc3NldHMvdmlkZW9zL2JnLWhvbWUubXA0Jz48L3ZpZGVvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWVfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyhob21lRGF0YS5wYXJhZ3JhcGhzKS5tYXAoKGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hvbWVfX3BhcmFncmFwaCB0ZXh0IHRleHQtLWJpZycga2V5PXtpbmRleH0+e2hvbWVEYXRhLnBhcmFncmFwaHNbaW5kZXhdfTwvcD5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdFx0XHRcdFx0Ly8gPHAgY2xhc3NOYW1lPSd0ZXh0IHRleHQtLWJpZycgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGhvbWVEYXRhLmNvbnRlbnR9fSAvPlxuXHR9XG5cblx0Ly8gc2V0dXBBbmltYXRpb25zKCkge1xuXHQvLyBcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHQvLyBcdC8vIHRyYW5zaXRpb24gSW5cblx0Ly8gXHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0Ly8gXHQvLyB0cmFuc2l0aW9uIE91dFxuXHQvLyBcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMSwgeyB5OiB3aW5kb3cuaW5uZXJIZWlnaHQsIG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdC8vIFx0Ly8gcmVzZXRcblx0Ly8gXHR0aGlzLnRsSW4ucGF1c2UoMClcblx0Ly8gXHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdC8vIH1cblxuXHRpbml0Q2FudmFzKCkge1xuXHRcdGxldCBjdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRsZXQgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblx0XHR0aGlzLl9jYW52YXMud2lkdGggPSB2dztcblx0XHR0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdmg7XG5cblx0XHQvLyBiYWNrZ3JvdW5kIGJsYWNrXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5yZWN0KDAsIDAsIHZ3LCB2aCk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y3R4LmZpbGwoKTtcblxuXHRcdC8vIGNyb3AgbG9nb1xuXHRcdGN0eC5mb250ID0gXCI0MDAgNzJweCAnaGM3bW9kZXJuJ1wiO1xuXHRcdGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXHRcdGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLW91dFwiO1xuXHRcdC8vIGN0eC5maWxsVGV4dCgnRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNycsIHZ3LzIsIHZoLzIgLSAxNik7XG5cdFx0Y3R4LmZpbGxUZXh0KCdFTExJT1RUIEVSV0lUVCBIQVZBTkEgQ0xVQiA3JywgdncvMiwgdmgvMiAtIDE2KTtcblx0XHRjdHguZm9udCA9IFwiNDAwIDcycHggJ1N0YW5sZXknXCI7XG5cdFx0Y3R4LmZpbGxUZXh0KCdGZWxsb3dzaGlwJywgdncvMiwgdmgvMiArIDY4KTtcblx0fVxuXG5cdGluaXRBbmltYXRpb24oKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0XG5cdFx0dGhpcy50bEVudHJ5ID0gbmV3IFRpbWVsaW5lTWF4KHtkZWxheTogNCwgb25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0dGhhdC5fY2FudmFzLnJlbW92ZSgpXG5cdFx0fX0pO1xuXHRcdHRoaXMudGxFbnRyeS50byh0aGlzLl9jYW52YXMsIDEsIHtvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXHRcdHRoaXMudGxFbnRyeS50byhkb20oJy5mcm9udC1jb250YWluZXInKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNilcblx0XHR0aGlzLnRsRW50cnkudG8oZG9tKCcuaG9tZV9fY29udGVudCcpLCAwLjQsIHtvcGFjaXR5OiAxfSwgMC42KVxuXHRcdHRoaXMudGxFbnRyeS50byhkb20oJy5jYXJ0JyksIDAuNCwge29wYWNpdHk6IDF9LCAwLjYpXG5cdFx0Ly8gVHdlZW5NYXgudG8odGhpcy5fY2FudmFzLCA0LCB7eDogLXZ3LCBlYXNlOiBQb3dlcjIuZWFzZU91dCwgZGVsYXk6IDQsIG9uQ29tcGxldGU6IHRoaXMuc2hvd1BhZ2VCaW5kZWR9KTtcblx0fVxuXHRcblx0c2hvd1BhZ2UoKSB7XG5cdFx0VHdlZW5NYXgudG8oZG9tKCcuZnJvbnQtY29udGFpbmVyJyksIDAuNCwge29wYWNpdHk6IDF9KTtcblx0XHRUd2Vlbk1heC50byhkb20oJy5ob21lX19jb250ZW50JyksIDAuNCwge29wYWNpdHk6IDF9KTtcblx0XHRUd2Vlbk1heC50byhkb20oJy5jYXJ0JyksIDAuNCwge29wYWNpdHk6IDF9KTtcblx0XHR0aGlzLl9jYW52YXMucmVtb3ZlKClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKClcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FsIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdsZWdhbFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0e2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3cyBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgc2lkZVxuXHRcdGxldCBuZXdzRGF0YSA9IEFwcFN0b3JlLm5ld3NDb250ZW50KClcblx0XHRsZXQgbmV3c0l0ZW1zID0gbmV3c0RhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdGlmIChpbmRleCAlIDIgPT09IDApIHsgcmV0dXJuIChcblx0XHRcdFx0PGFydGljbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPSduZXdzX19pdGVtIG5ld3NfX2l0ZW0tLXJpZ2h0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fY29udGVudCc+e2l0ZW0uY29udGVudH08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fZGF0ZSc+e2l0ZW0uZGF0ZX08L2Rpdj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0KX0gZWxzZSB7IHJldHVybiAoXG5cdFx0XHRcdDxhcnRpY2xlIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbmV3c19faXRlbSBuZXdzX19pdGVtLS1sZWZ0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fZGF0ZSc+e2l0ZW0uZGF0ZX08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fY29udGVudCc+e2l0ZW0uY29udGVudH08L2Rpdj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0KX1cblx0XHR9KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1uZXdzJyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nbmV3cyc+e25ld3NJdGVtc308L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3Rmb3VuZCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nNDA0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8cD5FcnJvciA0MDQg4oCUIFBhZ2Ugbm90IGZvdW5kPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcbmltcG9ydCBDYXJ0QXBpIGZyb20gJ0NhcnRBcGknXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmZ1bmN0aW9uIF9nZXRDYXJ0U3RhdGUoKSB7XG5cdHJldHVybiB7XG5cdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0Y2FydENvdW50OiBDYXJ0U3RvcmUuZ2V0Q2FydENvdW50KCksXG5cdFx0Y2FydFRvdGFsOiBDYXJ0U3RvcmUuZ2V0Q2FydFRvdGFsKClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXltZW50IGV4dGVuZHMgUGFnZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cblx0XHR0aGlzLnN0YXRlID0gX2dldENhcnRTdGF0ZSgpXG5cdH1cblx0XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblxuXHRcdGxldCBoYWNrID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKGZhbHNlKVxuXHRcdFx0Q2FydEFjdGlvbnMudXBkYXRlQ2FydFZpc2libGUoZmFsc2UpXG5cdFx0XHRjbGVhclRpbWVvdXQoaGFjaylcblx0XHR9LCAwKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRWaXNpYmxlKHRydWUpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcGF5bWVudCcgcmVmPSdwYWdlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudCc+XG5cdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdwYXltZW50X19mb3JtIGZvcm0nPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BheW1lbnRfX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zvcm1fX3RpdGxlJz5DaGVja291dDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdtYWlsJz5FbnRlciB5b3VyIGVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSdtYWlsJyBpZD0nbWFpbCcvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPlNoaXBwaW5nIGFkZHJlc3M8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93IGZvcm1fX3Jvdy0taGFsZic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nZmlyc3RuYW1lJz5GaXJzdCBuYW1lICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdmaXJzdG5hbWUnLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdsYXN0bmFtZSc+TGFzdCBuYW1lICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RleHQnIGlkPSdsYXN0bmFtZScvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwnIGh0bWxGb3I9J3Bob25lJz5UZWxlcGhvbmUgKjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLXRleHQnIHR5cGU9J3RlbCcgaWQ9J3Bob25lJy8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nYWRkcmVzcyc+QWRkcmVzcyAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCBmb3JtX19pbnB1dC0tY29tcCcgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3MnLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2FkZHJlc3NCaXMnLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cgZm9ybV9fcm93LS1oYWxmJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSd6aXAnPlppcC9Qb3N0YWwgY29kZSAqPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nemlwJy8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX2NvbHVtbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCcgaHRtbEZvcj0nY2l0eSc+Q2l0eTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tdGV4dCcgdHlwZT0ndGV4dCcgaWQ9J2NpdHknLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsJyBodG1sRm9yPSdjb3VudHJ5Jz5Db3VudHJ5ICo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS10ZXh0JyB0eXBlPSd0ZXh0JyBpZD0nY291bnRyeScvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyB0eXBlPSdjaGVja2JveCcgaWQ9J2JpbGxBZGRyZXNzJy8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2JpbGxBZGRyZXNzJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkJpbGwgdG8gdGhlIHNhbWUgYWRkcmVzczwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZm9ybV9fdGl0bGUnPlNoaXBwaW5nIG1ldGhvZDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0nc2hpcHBpbmdNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ndXBzU3RhbmRhcmQnLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0ndXBzU3RhbmRhcmQnPjxwIGNsYXNzTmFtZT0nZm9ybV9fdGV4dCc+VVBTIFN0YW5kYXJkIC0gRGVsaXZlcnkgd2l0aGluIDMtNSBidXNpbmVzcyBkYXlzLCAxMCDigqw8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0nc2hpcHBpbmdNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0ndXBzRXhwcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSd1cHNFeHByZXNzJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPlVQUyBFeHByZXNzIC0gRGVsaXZlcnkgd2l0aGluIDItMyBidXNpbmVzcyBkYXlzLCAyMCDigqw8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19yb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1jaGVja2JveCcgbmFtZT0nc2hpcHBpbmdNZXRob2QnIHR5cGU9J3JhZGlvJyBpZD0nZnJlZVNoaXBwaW5nJyBkZWZhdWx0Q2hlY2tlZC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2ZyZWVTaGlwcGluZyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5GcmVlIHNoaXBwaW5nIChVUFMgc3RhbmRhcmQpLCAwIOKCrDwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwYXltZW50X19tZXRob2QgZm9ybV9fdGl0bGUnPlBheW1lbnQgbWV0aG9kPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J21hZXN0cm8nIGRlZmF1bHRDaGVja2VkLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdtYWVzdHJvJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvbWFlc3Ryby1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J3Zpc2EnLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSd2aXNhJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPjxpbWcgc3JjPScuL2Fzc2V0cy9pbWFnZXMvdmlzYS1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3JvdyBmb3JtX19yb3ctLWhhbGYnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J3BheXBhbCcvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J3BheXBhbCc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz48aW1nIHNyYz0nLi9hc3NldHMvaW1hZ2VzL3BheXBhbC1ibGFjay5wbmcnPjwvaW1nPjwvcD48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtX19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyBuYW1lPSdwYXltZW50TWV0aG9kJyB0eXBlPSdyYWRpbycgaWQ9J2FtZXJpY2FuRXhwcmVzcycvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nZm9ybV9fbGFiZWwgZm9ybV9fbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2FtZXJpY2FuRXhwcmVzcyc+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz48aW1nIHNyYz0nLi9hc3NldHMvaW1hZ2VzL2FtZXJpY2FuLWJsYWNrLnBuZyc+PC9pbWc+PC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmb3JtX190aXRsZSc+T3JkZXIgc3VtbWFyeTwvaDM+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3BheW1lbnRfX3Byb2R1Y3RzIGNhcnRfX3Byb2R1Y3RzJz5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5jYXJ0SXRlbXMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBwcm9kdWN0ID0gdGhhdC5zdGF0ZS5jYXJ0SXRlbXNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0ncGF5bWVudF9fcHJvZHVjdCBjYXJ0X19wcm9kdWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19hcnRpc3QnPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2RldGFpbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY2l0eSc+e3Byb2R1Y3QuY2l0eX08L2Rpdj4sIDxkaXYgY2xhc3NOYW1lPSdjYXJ0X195ZWFyJz57cHJvZHVjdC55ZWFyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fc2VyaWFsJz5TZXJpYWwgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19udW1iZXInPntwcm9kdWN0LnNlcmlhbH0ve3Byb2R1Y3QuY29waWVzfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19wcmljZSc+e3Byb2R1Y3QucHJpY2V9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3ByaW50Jz48aW1nIGNsYXNzTmFtZT0nY2FydF9faW1hZ2UnIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytwcm9kdWN0LmZpbGUrJ19taW4uanBnJ30+PC9pbWc+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fcmVtb3ZlIGJ1dHRvbiBidXR0b24tLWxlZnQnIG9uQ2xpY2s9e3RoYXQucmVtb3ZlSXRlbS5iaW5kKHRoYXQsIGluZGV4KX0+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPlJlbW92ZSBpdGVtPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9fdG90YWwgY2FydF9fdG90YWwnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X19zdWJ0b3RhbCBjYXJ0X19zdWJ0b3RhbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5TdWJ0b3RhbDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJ0X19jb2x1bW4nPnt0aGlzLnN0YXRlLmNhcnRUb3RhbH08c3BhbiBjbGFzc05hbWU9J2NhcnRfX2N1cnJlbmN5Jz7igqw8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX3R2YSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5JbmNsdWRlZCBUVkE6PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz57dGhpcy5zdGF0ZS5jYXJ0VG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcnRfX2JpZ3RvdGFsJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz5HcmFuZCB0b3RhbDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FydF9fY29sdW1uJz57dGhpcy5zdGF0ZS5jYXJ0VG90YWx9PHNwYW4gY2xhc3NOYW1lPSdjYXJ0X19jdXJyZW5jeSc+4oKsPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm1fX3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT0nZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWNoZWNrYm94JyB0eXBlPSdjaGVja2JveCcgaWQ9J25ld3NsZXR0ZXInLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtX19sYWJlbCBmb3JtX19sYWJlbC0tcG9pbnRlcicgaHRtbEZvcj0nbmV3c2xldHRlcic+PHAgY2xhc3NOYW1lPSdmb3JtX190ZXh0Jz5OZXdzPC9wPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybV9fcm93Jz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyBpZD0nY29uZGl0aW9ucycvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm1fX2xhYmVsIGZvcm1fX2xhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdjb25kaXRpb25zJz48cCBjbGFzc05hbWU9J2Zvcm1fX3RleHQnPkkgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyo8L3A+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9JycgY2xhc3NOYW1lPSdwYXltZW50X19wYXkgYnV0dG9uJyBvbkNsaWNrPXt0aGlzLnBheS5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+UHJvY2VlZCB0byBwYXltZW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiaHR0cHM6Ly9zZWN1cmUtdGVzdC5iZTJiaWxsLmNvbS9mcm9udC9mb3JtL3Byb2Nlc3NcIiBpZD1cIm15Zm9ybVwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiQU1PVU5UXCIgdmFsdWU9XCIxMDAwXCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIklERU5USUZJRVJcIiB2YWx1ZT1cIkNPTlZPWVwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJPUEVSQVRJT05UWVBFXCIgdmFsdWU9XCJwYXltZW50XCIgLz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIk9SREVSSURcIiB2YWx1ZT1cIm9yZGVyXzAwMDEyM1wiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJDTElFTlRJREVOVFwiIHZhbHVlPVwiY2xpZW50XzEyM1wiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJERVNDUklQVElPTlwiIHZhbHVlPVwiYXJ0XzEyMzQ1NlwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJWRVJTSU9OXCIgdmFsdWU9XCIyLjBcIiAvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSEFTSFwiIHZhbHVlPVwiNmI4N2JmYWU0NmViMjA0OTUwYzcwMDU4ZjIyN2Y3M2MxYTk1ODI3YzBiMGY5NWUxYWZhNGFkNDUyNWViNjdiNVwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUGF5IHdpdGggYmUyYmlsbFwiIC8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cGF5KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHQvLyA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiaHR0cHM6Ly9zZWN1cmUtdGVzdC5iZTJiaWxsLmNvbS9mcm9udC9mb3JtL3Byb2Nlc3NcIiBpZD1cIm15Zm9ybVwiPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiM0RTRUNVUkVcIiB2YWx1ZT1cInllc1wiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJDQVJERlVMTE5BTUVcIiB2YWx1ZT1cIkpvaG4gRG9lXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkNMSUVOVEVNQUlMXCIgdmFsdWU9XCJqb2huLmRvZUBlbWFpbC5jb21cIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSElERUNBUkRGVUxMTkFNRVwiIHZhbHVlPVwieWVzXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkhJREVDTElFTlRFTUFJTFwiIHZhbHVlPVwieWVzXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkFNT1VOVFwiIHZhbHVlPVwiMTAwMFwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJJREVOVElGSUVSXCIgdmFsdWU9XCJDT05WT1lcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiT1BFUkFUSU9OVFlQRVwiIHZhbHVlPVwicGF5bWVudFwiIC8+XG5cdFx0XHRcdFx0Ly8gXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJPUkRFUklEXCIgdmFsdWU9XCJvcmRlcl8wMDAxMjNcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiQ0xJRU5USURFTlRcIiB2YWx1ZT1cImNsaWVudF8xMjNcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiREVTQ1JJUFRJT05cIiB2YWx1ZT1cImFydF8xMjM0NTZcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiVkVSU0lPTlwiIHZhbHVlPVwiMi4wXCIgLz5cblx0XHRcdFx0XHQvLyBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIkhBU0hcIiB2YWx1ZT1cIjZiODdiZmFlNDZlYjIwNDk1MGM3MDA1OGYyMjdmNzNjMWE5NTgyN2MwYjBmOTVlMWFmYTRhZDQ1MjVlYjY3YjVcIiAvPlxuXHRcdFx0XHRcdC8vIFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlBheSB3aXRoIGJlMmJpbGxcIiAvPlxuXHRcdFx0XHRcdC8vIDwvZm9ybT5cblxuXHRcdC8vIF8odGhpcy5zdGF0ZS5jYXJ0SXRlbXMpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Ly8gXHRQcmludEFwaS5vcmRlcihpbmRleCwgaXRlbS5zZXJpYWwpXG5cdFx0Ly8gfSkudmFsdWUoKTtcblxuXHRcdC8vIENhcnRBcGkucGF5KClcblx0XHRDYXJ0QXBpLmdlbmVyYXRlUGF5QnV0dG9uKClcblx0fVxuXG5cdHJlbW92ZUl0ZW0oaWQpIHtcblx0XHRDYXJ0QWN0aW9ucy5yZW1vdmVGcm9tQ2FydChpZClcblx0XHR0aGlzLnNldFN0YXRlKF9nZXRDYXJ0U3RhdGUoKSlcblx0fVxuXG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cblx0cmVzaXplKCkge1xuXHRcdGxldCB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHRsZXQgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBQcmludFN0b3JlIGZyb20gJ1ByaW50U3RvcmUnXG5pbXBvcnQgUHJpbnRBcGkgZnJvbSAnUHJpbnRBcGknXG5pbXBvcnQgQ2FydEFjdGlvbnMgZnJvbSAnQ2FydEFjdGlvbnMnXG5pbXBvcnQgQ2FydFN0b3JlIGZyb20gJ0NhcnRTdG9yZSdcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnQgZXh0ZW5kcyBQYWdlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0cHJpbnQ6IHVuZGVmaW5lZCxcblx0XHRcdHNlbGVjdGVkU2VyaWFsOiB1bmRlZmluZWQsXG5cdFx0XHRsb2FkZWRQcmludDogdW5kZWZpbmVkLFxuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0XHR2YWxpZFNlcmlhbHM6IFtdXG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fdG9nZ2xlTGlzdEJpbmRlZCA9IHRoaXMuX3RvZ2dsZUxpc3QuYmluZCh0aGlzKVxuXHRcdHRoaXMuX2FkZFRvQ2FydEJpbmRlZCA9IHRoaXMuX2FkZFRvQ2FydC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCA9IHRoaXMuX29uU3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuX29uQ2FydFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25DYXJ0U3RvcmVDaGFuZ2UuYmluZCh0aGlzKVxuXG5cdFx0Ly8gdmFyc1xuXHRcdHRoaXMubG9hZGVkID0gZmFsc2Vcblx0XHR0aGlzLnZhbGlkU2VyaWFscyA9IFtdXG5cdFx0XG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdFx0XG5cdFx0UHJpbnRBcGkuZ2V0T25lKHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHRcdENhcnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdHRoaXMuX2xvYWRJbWFnZSgpXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IGZpbGVcblx0XHRpZiAoIXRoaXMubG9hZGVkKSB7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWVcblx0XHRcdHRoaXMuX2xvYWRJbWFnZSgpXG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5fdXBkYXRlU2VyaWFscygpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1x0XG5cdFx0Q2FydFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpc1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUucHJpbnQpIHtcblx0XHRcdHRoaXMudmFsaWRTZXJpYWxzID0gdGhpcy5fZ2V0VmFsaWRTZXJpYWxzKClcblx0XHRcdHRoaXMuc2VsZWN0ZWRTZXJpYWwgPSB0aGlzLnN0YXRlLnNlbGVjdGVkU2VyaWFsIHx8IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJpbnQnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUucHJpbnQpIHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnQnPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkZWRQcmludH1cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbmZvcyc+XG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ncHJpbnRfX3RpdGxlIHByaW50X190aXRsZS0tbWFyZ2luJz57dGhhdC5zdGF0ZS5wcmludC50aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3ByaW50X19sb2NhdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3ByaW50X19jaXR5Jz57dGhhdC5zdGF0ZS5wcmludC5jaXR5fSwge3RoYXQuc3RhdGUucHJpbnQuY291bnRyeX0sPC9zcGFuPiB7dGhhdC5zdGF0ZS5wcmludC55ZWFyfVxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2FydGlzdCc+RWxsaW90dCBFcndpdHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fcHJpY2UgdGV4dCB0ZXh0LS1zbWFsbCc+e3RoYXQuc3RhdGUucHJpbnQucHJpY2V94oKsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdwcmludF9fZGVzYyB0ZXh0IHRleHQtLXNtYWxsJz57dGhhdC5zdGF0ZS5wcmludC5kZXNjfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0eygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGF0LnN0YXRlLnByaW50LnNlcmlhbHMubGVuZ3RoID4gMCkgeyByZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbC1vcHQnPlNlcmlhbCBvcHRpb248L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmludF9fc2VsZWN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19zZXJpYWwtLXNlbGVjdGVkJyBvbkNsaWNrPXt0aGlzLl90b2dnbGVMaXN0QmluZGVkfT57dGhhdC5zZWxlY3RlZFNlcmlhbH08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbC1saXN0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhhdC52YWxpZFNlcmlhbHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBlbmFibGVkID0gdGhhdC52YWxpZFNlcmlhbHNbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgc2VyaWFsID0gcGFyc2VJbnQoaW5kZXgpKzFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGxldCBjbGFzc1NlbGVjdGVkID0gKHNlcmlhbCA9PT0gdGhhdC5zdGF0ZS5zZXJpYWwpID8gJ3ByaW50X19zZXJpYWwtLXNlbGVjdGVkJyA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBsZXQgY2xhc3NFbmFibGVkID0gKGVuYWJsZWQpID8gJ3ByaW50X19zZXJpYWwtLWVuYWJsZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoPGxpIGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbCcgb25DbGljaz17dGhhdC5fc2VsZWN0U2VyaWFsLmJpbmQodGhhdCwgc2VyaWFsKX0ga2V5PXtpbmRleH0+e3NlcmlhbH08L2xpPilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoPGxpIGNsYXNzTmFtZT0ncHJpbnRfX3NlcmlhbCBwcmludF9fc2VyaWFsLS1kaXNhYmxlZCcga2V5PXtpbmRleH0+e3NlcmlhbH08L2xpPilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdwcmludF9fYnV5IHRleHQgdGV4dC0tc21hbGwgYnV0dG9uIGJ1dHRvbi0tcmV2ZXJzZScgb25DbGljaz17dGhhdC5fYWRkVG9DYXJ0QmluZGVkfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+QnV5IHByaW50PC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX0gZWxzZSB7IHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5PdXQgb2Ygc3RvY2s8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9KSgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Ly8gX3VwZGF0ZVNlcmlhbHMoKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ3VwZGF0ZSB2YWxpZFNlcmlhbHMnKVxuXHQvLyBcdHRoaXMudmFsaWRTZXJpYWxzID0gW11cblx0Ly8gXHR0aGlzLmNhcnRTZXJpYWxzID0gXy5wbHVjayhfLmZpbHRlcih0aGlzLnN0YXRlLmNhcnRJdGVtcywgeyAnaWQnOiB0aGlzLnN0YXRlLnByaW50Ll9pZCB9KSwgJ3NlcmlhbCcpXG5cdC8vIFx0Xyh0aGlzLnN0YXRlLnByaW50LnNlcmlhbHMpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuXHQvLyBcdFx0aWYgKF8uaW5kZXhPZih0aGlzLmNhcnRTZXJpYWxzLCBpbmRleCsxKSA+IC0xKSB0aGlzLnZhbGlkU2VyaWFsc1tpbmRleF0gPSBmYWxzZVxuXHQvLyBcdFx0ZWxzZSB0aGlzLnZhbGlkU2VyaWFsc1tpbmRleF0gPSB2YWx1ZVxuXHQvLyBcdH0pLnZhbHVlKClcblxuXHQvLyBcdC8vIHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdC8vIFx0dmFsaWRTZXJpYWxzOiB0aGlzLnZhbGlkU2VyaWFsc1xuXHQvLyBcdC8vIH0sICgpID0+IHtcblx0Ly8gXHQvLyBcdHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHQvLyB9KVxuXG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHR2YWxpZFNlcmlhbHM6IHRoaXMudmFsaWRTZXJpYWxzLFxuXHQvLyBcdFx0c2VsZWN0ZWRTZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0X2dldFZhbGlkU2VyaWFscygpIHtcblx0XHR0aGlzLnZhbGlkU2VyaWFscyA9IFtdXG5cdFx0dGhpcy5jYXJ0U2VyaWFscyA9IF8ucGx1Y2soXy5maWx0ZXIodGhpcy5zdGF0ZS5jYXJ0SXRlbXMsIHsgJ2lkJzogdGhpcy5zdGF0ZS5wcmludC5faWQgfSksICdzZXJpYWwnKVxuXHRcdF8odGhpcy5zdGF0ZS5wcmludC5zZXJpYWxzKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdGlmIChfLmluZGV4T2YodGhpcy5jYXJ0U2VyaWFscywgaW5kZXgrMSkgPiAtMSkgdGhpcy52YWxpZFNlcmlhbHNbaW5kZXhdID0gZmFsc2Vcblx0XHRcdGVsc2UgdGhpcy52YWxpZFNlcmlhbHNbaW5kZXhdID0gdmFsdWVcblx0XHR9KS52YWx1ZSgpXG5cblx0XHRyZXR1cm4gdGhpcy52YWxpZFNlcmlhbHNcblx0fVxuXG5cdF9nZXRGaXJzdFNlcmlhbCgpIHtcblx0XHRyZXR1cm4gXy5pbmRleE9mKHRoaXMudmFsaWRTZXJpYWxzLCB0cnVlKSArIDFcblx0fVxuXG5cdF9zZWxlY3RTZXJpYWwoc2VyaWFsLCBlKSB7XG5cdFx0dGhpcy5fdG9nZ2xlTGlzdCgpXG5cdFx0ZG9tKCcuc2VyaWFsLS1lbmFibGVkJykucmVtb3ZlQ2xhc3MoJ3NlcmlhbC0tZW5hYmxlZCcpXG5cdFx0ZG9tKGUudGFyZ2V0KS5hZGRDbGFzcygnc2VyaWFsLS1lbmFibGVkJylcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlbGVjdGVkU2VyaWFsOiBzZXJpYWxcblx0XHR9KVxuXHR9XG5cblx0X2FkZFRvQ2FydChlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0bGV0IHByaW50SWQgPSB0aGlzLnN0YXRlLnByaW50Ll9pZDtcblx0XHRsZXQgdXBkYXRlID0ge1xuXHRcdFx0aWQ6IHRoaXMuc3RhdGUucHJpbnQuX2lkLFxuXHRcdFx0Y2l0eTogdGhpcy5zdGF0ZS5wcmludC5jaXR5LFxuXHRcdFx0eWVhcjogdGhpcy5zdGF0ZS5wcmludC55ZWFyLFxuXHRcdFx0cHJpY2U6IHRoaXMuc3RhdGUucHJpbnQucHJpY2UsXG5cdFx0XHRzZXJpYWw6IHRoaXMuc3RhdGUuc2VsZWN0ZWRTZXJpYWwsXG5cdFx0XHRmaWxlOiB0aGlzLnN0YXRlLnByaW50LmZpbGUsXG5cdFx0XHRjb3BpZXM6IHRoaXMuc3RhdGUucHJpbnQuY29waWVzXG5cdFx0fVxuXHRcdENhcnRBY3Rpb25zLmFkZFRvQ2FydChwcmludElkLCB1cGRhdGUpO1xuXHRcdENhcnRBY3Rpb25zLnVwZGF0ZUNhcnRFbmFibGVkKHRydWUpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdH0pXG5cdH1cblxuXHRfdG9nZ2xlTGlzdCgpIHtcblx0XHRkb20oJy5wcmludF9fc2VyaWFsLWxpc3QnKS50b2dnbGVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfbG9hZEltYWdlKCkge1xuXHRcdGxldCB0aGF0ID0gdGhpcywgZmlsZVxuXG5cdFx0ZmlsZSA9IG5ldyBJbWFnZSgpXG5cdFx0ZmlsZS5vbmxvYWQgPSB0aGF0Ll9vbkltYWdlTG9hZGVkLmJpbmQodGhhdClcblx0XHRmaWxlLnNyYyA9ICcuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZydcblx0fVxuXG5cdF9vbkltYWdlTG9hZGVkKGUpIHtcblx0XHRsZXQgc2l6ZVxuXHRcdGxldCBwYXRoID0gZS5leHBsaWNpdE9yaWdpbmFsVGFyZ2V0IHx8IGUudGFyZ2V0IHx8IGUucGF0aFswXSBcblx0XHRpZiAocGF0aC5oZWlnaHQgPj0gcGF0aC53aWR0aCoxLjIpIHNpemUgPSAncG9ydHJhaXQnXG5cdFx0ZWxzZSBzaXplID0gJ2xhbmRzY2FwZSdcblxuXHRcdHRoaXMucHJpbnQgPSA8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xlZnQnPjxkaXYgY2xhc3NOYW1lPXsncHJpbnRfX2ltYWdlIHByaW50X19pbWFnZS0tJytzaXplfT48aW1nIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJyt0aGlzLnN0YXRlLnByaW50LmZpbGUrJ19tZWRpdW0uanBnJ30+PC9pbWc+PGRpdiBjbGFzc05hbWU9J3ByaW50X190ZWNoJz48cD5TaWx2ZXIgZ2VsYXRpbiBwcmludCBtZWFzdXJpbmc8L3A+PHA+MjcuOSDDlyAzNS42IGNtICgxMSDDlyAxNCBpbmNoZXMpLCB1bmZyYW1lZC48L3A+PHA+UHJpbnRlZCB1bmRlciB0aGUgZGlyZWN0IHN1cGVydmlzaW9uIG9mIHRoZSBhcnRpc3QuPC9wPjxwPk9uZSBvZiBhIHNpZ25lZCwgbGltaXRlZCBlZGl0aW9uIG9mIHt0aGlzLnN0YXRlLnByaW50LmNvcGllc30uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PlxuXG5cdFx0Ly8gaWYgKHBhcmFtcy5wYXRoWzBdLmhlaWdodCA+PSBwYXJhbXMucGF0aFswXS53aWR0aCoxLjIpIHtcblx0XHQvLyBcdHRoaXMucHJpbnQgPSA8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX2xlZnQnPjxkaXYgY2xhc3NOYW1lPSdwcmludF9faW1hZ2UgcHJpbnRfX2ltYWdlLS1wb3J0cmFpdCc+PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+U2lsdmVyIGdlbGF0aW4gcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dGhpcy5wcmludCA9IDxkaXYgY2xhc3NOYW1lPSdwcmludF9fbGVmdCc+PGRpdiBjbGFzc05hbWU9J3ByaW50X19pbWFnZSBwcmludF9faW1hZ2UtLWxhbmRzY2FwZSc+PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrdGhpcy5zdGF0ZS5wcmludC5maWxlKydfbWVkaXVtLmpwZyd9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPSdwcmludF9fdGVjaCc+PHA+U2lsdmVyIGdlbGF0aW4gcHJpbnQgbWVhc3VyaW5nPC9wPjxwPjI3Ljkgw5cgMzUuNiBjbSAoMTEgw5cgMTQgaW5jaGVzKSwgdW5mcmFtZWQuPC9wPjxwPlByaW50ZWQgdW5kZXIgdGhlIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiB0aGUgYXJ0aXN0LjwvcD48cD5PbmUgb2YgYSBzaWduZWQsIGxpbWl0ZWQgZWRpdGlvbiBvZiB7dGhpcy5zdGF0ZS5wcmludC5jb3BpZXN9LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQvLyB9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHQnbG9hZGVkUHJpbnQnOiB0aGlzLnByaW50XG5cdFx0fSk7XG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByaW50OiBQcmludFN0b3JlLmdldE9uZSgpLFxuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKCksXG5cdFx0XHQvLyBzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzZWxlY3RlZFNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0X29uQ2FydFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKClcblx0XHR9KVxuXHR9XG5cblx0Ly8gX29uU3RvcmVDaGFuZ2UoKSB7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKSxcblx0Ly8gXHRcdC8vIGNhcnRJdGVtczogQ2FydFN0b3JlLmdldENhcnRJdGVtcygpXG5cdC8vIFx0fSwgKCkgPT4ge1xuXHQvLyBcdFx0dGhpcy5fdXBkYXRlU2VyaWFscygpXG5cdC8vIFx0XHR0aGlzLl9sb2FkSW1hZ2UoKVxuXHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRcdHNlcmlhbDogdGhpcy5fZ2V0Rmlyc3RTZXJpYWwoKVxuXHQvLyBcdFx0fSlcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0Ly8gX29uQ2FydFN0b3JlQ2hhbmdlKCkge1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0Y2FydEl0ZW1zOiBDYXJ0U3RvcmUuZ2V0Q2FydEl0ZW1zKClcblx0Ly8gXHR9LCAoKSA9PiB7XG5cdC8vIFx0XHR0aGlzLl91cGRhdGVTZXJpYWxzKClcblx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0XHRzZXJpYWw6IHRoaXMuX2dldEZpcnN0U2VyaWFsKClcblx0Ly8gXHRcdH0pXG5cdC8vIFx0fSlcblx0Ly8gfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3kgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3ByaXZhY3lQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFwaSBmcm9tICdQcmludEFwaSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuaW1wb3J0IFByaW50Q29uc3RhbnRzIGZyb20gJ1ByaW50Q29uc3RhbnRzJ1xuaW1wb3J0IEFydGlzdFN0b3JlIGZyb20gJ0FydGlzdFN0b3JlJ1xuaW1wb3J0IEFydGlzdEFwaSBmcm9tICdBcnRpc3RBcGknXG5pbXBvcnQgVHdlZW5tYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBvZmZzZXQgZnJvbSAnb2Zmc2V0J1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJ3Njcm9sbFRvJ1xubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxubGV0IHNjcm9sbCA9IFV0aWxzLlNjcm9sbCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHByb3BzXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0YXJ0aXN0OiB1bmRlZmluZWQsXG5cdFx0XHRzbGlkZXNob3c6IHt9LFxuXHRcdFx0cHJpbnQ6IHt9XG5cdFx0fVxuXG5cdFx0Ly8gZnVuY3Rpb24gYmluZGVkXG5cdFx0dGhpcy5fc2hvd1NsaWRlc2hvd0JpbmRlZCA9IHRoaXMuX3Nob3dTbGlkZXNob3cuYmluZCh0aGlzKVxuXHRcdHRoaXMuX3RvZ2dsZVpvb21CaW5kZWQgPSB0aGlzLl90b2dnbGVab29tLmJpbmQodGhpcylcblx0XHR0aGlzLl90b2dnbGVTdG9yeUJpbmRlZCA9IHRoaXMuX3RvZ2dsZVN0b3J5LmJpbmQodGhpcylcblx0XHR0aGlzLl9iYWNrVG9HYWxsZXJ5QmluZGVkID0gdGhpcy5fYmFja1RvR2FsbGVyeS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fcHJldkJpbmRlZCA9IHRoaXMuX3ByZXYuYmluZCh0aGlzKVxuXHRcdHRoaXMuX25leHRCaW5kZWQgPSB0aGlzLl9uZXh0LmJpbmQodGhpcylcblx0XHR0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25BcnRpc3RTdG9yZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIGNvbnN0XG5cdFx0dGhpcy5PUEFDSVRZX01BUkdFID0gMzBcblx0XHR0aGlzLk9QQUNJVFlfRFVSQVRJT04gPSAzMDBcblx0XHRcblx0XHQvLyB2YXJzXG5cdFx0dGhpcy56b29tID0gZmFsc2Vcblx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cyA9IHt9XG5cdFx0dGhpcy5hY3Rpb24gPSAnaW5pdCdcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IC0xXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLXdoaXRlJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0tYmxhY2snKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdGxldCBoYWNrID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGF0Lnpvb20gPSBQcmludFN0b3JlLmdldFpvb20oKVxuXHRcdFx0aWYgKHRoYXQuem9vbSkge1xuXHRcdFx0XHRQcmludEFwaS5nZXRTbGlkZXNob3codGhpcy5wcm9wcy5pZFNlY3Rpb24sIHRoYXQuem9vbSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFByaW50QXBpLmdldFNsaWRlc2hvdyh0aGlzLnByb3BzLmlkU2VjdGlvbik7XG5cdFx0XHR9XG5cdFx0fSwgMTApXG5cblx0XHRBcnRpc3RBcGkuZ2V0QnlTbHVnKHRoaXMucHJvcHMuaWRTZWN0aW9uKTtcblx0XHRBcnRpc3RTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdFx0Ly8gUHJpbnRTdG9yZS5vbihQcmludENvbnN0YW50cy5SRUNFSVZFX1BSSU5UU19TTElERVNIT1csIHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZClcdFxuXHRcdC8vIFByaW50U3RvcmUub24oUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVCwgdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkKVx0XG5cblx0XHR0aGlzLl9pbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19pbnRybycpXG5cdFx0dGhpcy5fcmFmKClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdGNvbnNvbGUubG9nKHByZXZTdGF0ZSlcdFxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcnRpc3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkFydGlzdFN0b3JlQ2hhbmdlQmluZGVkKTtcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IG5hbWUsIGJpbywgdGl0bGUsIGNpdHksIGNvdW50cnksIHllYXIsIHN0b3J5LCBmb3JTYWxlLCB1cmwsIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2MgPSBbXVxuXHRcdGlmICh0aGlzLnN0YXRlLmFydGlzdCkge1xuXHRcdFx0bmFtZSA9IHRoaXMuc3RhdGUuYXJ0aXN0Lm5hbWVcblx0XHRcdGJpbyA9IHRoaXMuc3RhdGUuYXJ0aXN0LmJpb1xuXHRcdFx0cHJvamVjdFRpdGxlID0gdGhpcy5zdGF0ZS5hcnRpc3QucHJvamVjdC50aXRsZVxuXHRcdFx0cHJvamVjdERlc2MgPSB0aGlzLnN0YXRlLmFydGlzdC5wcm9qZWN0LmRlc2Ncblx0XHR9XG5cblx0XHRpZiAoXy5zaXplKHRoaXMuc3RhdGUuc2xpZGVzaG93KSA+IDApIHtcblx0XHRcdGlmICh0aGlzLmFjdGlvbiA9PT0gJ2luaXQnKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzID0gdGhpcy5zdGF0ZS5zbGlkZXNob3cucHJpbnRzXG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5hY3Rpb24gPT09ICdwcmV2Jykge1xuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cy5uZXh0ID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudFxuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50ID0gdGhpcy5zbGlkZXNob3dQcmludHMucHJldlxuXHRcdFx0XHR0aGlzLnNsaWRlc2hvd1ByaW50cy5wcmV2ID0gdGhpcy5zdGF0ZS5wcmludFxuXHRcdFx0fSBcblx0XHRcdGlmICh0aGlzLmFjdGlvbiA9PT0gJ25leHQnKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLnByZXYgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5uZXh0XG5cdFx0XHRcdHRoaXMuc2xpZGVzaG93UHJpbnRzLm5leHQgPSB0aGlzLnN0YXRlLnByaW50XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKF8uc2l6ZSh0aGlzLnNsaWRlc2hvd1ByaW50cykgPiAwKSB7XG5cdFx0XHR0aXRsZSA9IHRoaXMuc2xpZGVzaG93UHJpbnRzLmN1cnJlbnQudGl0bGVcblx0XHRcdGNpdHkgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LmNpdHlcblx0XHRcdGNvdW50cnkgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LmNvdW50cnlcblx0XHRcdHllYXIgPSB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50LnllYXJcblx0XHRcdHN0b3J5ID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudC5kZXNjXG5cdFx0XHRmb3JTYWxlID0gdGhpcy5zbGlkZXNob3dQcmludHMuY3VycmVudC5mb3JTYWxlXG5cdFx0XHR1cmwgPSAnIy9zaG9wLycgKyB0aGlzLnNsaWRlc2hvd1ByaW50cy5jdXJyZW50Ll9pZFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLS1wcm9qZWN0JyByZWY9J3BhZ2Utd3JhcHBlcic+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWVudSBwcm9qZWN0X19jb250YWN0Jz48YSBocmVmPXsnIy9wcm9qZWN0LycrdGhpcy5wcm9wcy5pZFNlY3Rpb24rJy9jb250YWN0LXNoZWV0J30gY2xhc3NOYW1lPSdidXR0b24nPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5Db250YWN0IHNoZWV0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1Ym1lbnUgcHJvamVjdF9fYmFjayc+PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9e3RoaXMuX2JhY2tUb0dhbGxlcnlCaW5kZWR9PjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5CYWNrIHRvIGdhbGxlcnk8L3NwYW4+PC9hPjwvZGl2PlxuXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdCc+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2ludHJvJz5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3Byb2plY3RfX2FydGlzdCc+e25hbWV9PC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJvamVjdF9fZGVzYyB0ZXh0IHRleHQtLW1lZGl1bSc+XG5cdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhwcm9qZWN0RGVzYykubWFwKChpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Byb2plY3RfX3BhcmFncmFwaCcga2V5PXtpbmRleH0+e3Byb2plY3REZXNjW2luZGV4XX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19kaXNjb3Zlcicgb25DbGljaz17dGhpcy5fc2hvd1NsaWRlc2hvd0JpbmRlZH0+PGRpdiBjbGFzc05hbWU9J2Fycm93Jz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19zbGlkZXNob3cnPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fcHJpbnRzJz5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zbGlkZXNob3dQcmludHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBmaWxlID0gdGhpcy5zbGlkZXNob3dQcmludHNbaW5kZXhdLmZpbGUgKyAnX2JpZy5qcGcnXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgc3RhdHVzID0gaW5kZXhcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsncHJvamVjdF9fcHJpbnQgcHJvamVjdF9fcHJpbnQtLScrc3RhdHVzfSBvbkNsaWNrPXt0aGF0Ll90b2dnbGVab29tQmluZGVkfSBrZXk9e2luZGV4fT48aW1nIGNsYXNzTmFtZT0ncHJvamVjdF9faW1hZ2UnIHNyYz17Jy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytmaWxlfT48L2ltZz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc3RvcnkgdGV4dCB0ZXh0LS1iaWcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3N0b3J5fTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fbmF2Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19wcmV2JyBvbkNsaWNrPXt0aGlzLl9wcmV2QmluZGVkfT48ZGl2IGNsYXNzTmFtZT0nYXJyb3cnPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX25leHQnIG9uQ2xpY2s9e3RoaXMuX25leHRCaW5kZWR9PjxkaXYgY2xhc3NOYW1lPSdhcnJvdyc+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fZm9vdGVyJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyBjbGFzc05hbWU9J3Byb2plY3RfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1sZWZ0IGJ1dHRvbi0tcmV2ZXJzZSc+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPlNoYXJlPC9zcGFuPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbiBwcm9qZWN0X19pbmZvcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvclNhbGUpIHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3ByaW50X190aXRsZSBwcmludF9faW5mby0tc21hbGwnPnt0aXRsZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncHJpbnRfX2xvY2F0aW9uIHByaW50X19pbmZvLS1zbWFsbCc+e2NpdHl9LCB7Y291bnRyeX0sIHt5ZWFyfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwcmludF9fYXJ0aXN0IHByaW50X19pbmZvLS1zbWFsbCc+e25hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9fc2VjdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvclNhbGUpIHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19idXR0b24gYnV0dG9uIGJ1dHRvbi0tbGVmdCBidXR0b24tLXJldmVyc2UnIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVN0b3J5QmluZGVkfT48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+VGhlIHN0b3J5PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17dXJsfSBjbGFzc05hbWU9J3Byb2plY3RfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1yaWdodCBidXR0b24tLXJldmVyc2UnPjxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uX19jb250ZW50Jz5CdXkgcHJpbnQ8L3NwYW4+PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSgpfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdF9yYWYoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsSW5kZXggJSAzKSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdGVsc2UgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnNjcm9sbEluZGV4KytcblxuXHRcdGlmICh0aGlzLnNjcm9sbE9rKSB7XG5cdFx0XHQvLyBsZXQgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHNjcm9sbCh0aGlzLl9yYWZCaW5kZWQpO1xuXHR9XG5cblx0aGFuZGxlU2Nyb2xsKCkge1xuXG5cdFx0dGhpcy5vcGFjaXR5TWFyZ2UgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuXHRcdHRoaXMubGltaXRPZmZzZXQgPSBvZmZzZXQodGhpcy5faW50cm8pXG5cdFx0dGhpcy5saW1pdFRvcCA9IHRoaXMubGltaXRPZmZzZXQudG9wICsgdGhpcy5saW1pdE9mZnNldC5oZWlnaHQgLyAxLjVcblx0XHR0aGlzLmludHJvT3BhY2l0eSA9IDEgLSAodGhpcy5saW1pdFRvcCAtIHRoaXMub3BhY2l0eU1hcmdlKSAvICgtdGhpcy5vcGFjaXR5TWFyZ2UpXG5cdFx0dGhpcy5faW50cm8uc3R5bGUub3BhY2l0eSA9IHRoaXMuaW50cm9PcGFjaXR5XG5cblx0XHQvLyB0aGlzLmxpbWl0T2Zmc2V0ID0gb2Zmc2V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19pbnRybycpKVxuXHRcdC8vIHRoaXMuT1BBQ0lUWV9NQVJHRSA9IHRoaXMubGltaXRPZmZzZXQuaGVpZ2h0XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5saW1pdE9mZnNldClcblx0XHQvLyB0aGlzLmxpbWl0VG9wID0gdGhpcy5saW1pdE9mZnNldC50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyB0aGlzLk9QQUNJVFlfTUFSR0Vcblx0XHQvLyB0aGlzLmVsT3BhY2l0eSA9IFV0aWxzLkludGVydmFsKHRoaXMubGltaXRUb3AgLyAoLXRoaXMuT1BBQ0lUWV9EVVJBVElPTiksIDAsIDEpXG5cdFx0Ly8gLy8gdGhpcy5lbFkgPSAoMS10aGlzLmVsT3BhY2l0eSkgKiA1MFxuXHRcdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19pbnRybycpLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmVsT3BhY2l0eVxuXHRcdC8vIGVsLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgdGhpcy5lbFkgKydweCkgdHJhbnNsYXRlWigwcHgpJylcblx0fVxuXG5cdF9zaG93U2xpZGVzaG93KCkge1xuXHRcdHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3NsaWRlc2hvdycpLm9mZnNldFRvcFxuXHRcdFR3ZWVuTWF4LnRvKHdpbmRvdywgMS4yLCB7c2Nyb2xsVG86e3k6IHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wfSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pXG5cdH1cblx0XG5cdGluaXRUaW1lbGluZXMoKSB7XG5cdH1cblxuXHRfdG9nZ2xlWm9vbSgpIHtcblx0XHRpZiAodGhpcy56b29tKSB0aGlzLl96b29tT3V0KClcblx0XHRlbHNlIHRoaXMuX3pvb21JbigpXG5cdH1cblxuXHRfem9vbUluKCkge1xuXHRcdHRoaXMudGxab29tSW4gPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDogdHJ1ZX0pXG5cdFx0dGhpcy50bFpvb21Jbi5zdGFnZ2VyVG8oW1xuXHRcdFx0ZG9tKCcuZnJvbnQtY29udGFpbmVyJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19zaGFyZScpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9faW5mb3MnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX3JldmVhbCcpLFxuXHRcdFx0ZG9tKCcuY2FydCcpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fY29udGFjdCcpXG5cdFx0XSwgMC40LCB7b3BhY2l0eTogMH0sIDApXG5cdFx0dGhpcy50bFpvb21Jbi50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtzY2FsZTogMS4zNSwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tSW4udG8oZG9tKCcucHJvamVjdF9fcHJldicpLCAwLjQsIHt4OiAtODAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX25leHQnKSwgMC40LCB7eDogODAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0fSwgMClcblx0XHR0aGlzLnRsWm9vbUluLmFkZENhbGxiYWNrKCgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19jb250YWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2JhY2snKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdH0sIDAuNClcblx0XHR0aGlzLnRsWm9vbUluLnRvKGRvbSgnLnByb2plY3RfX2JhY2snKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNClcblx0XHRcblx0XHR0aGlzLnRsWm9vbUluLnBsYXkoKVxuXG5cdFx0dGhpcy56b29tID0gIXRoaXMuem9vbVxuXHR9XG5cblx0X3pvb21PdXQoKSB7XG5cdFx0dGhpcy50bFpvb21PdXQgPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDogdHJ1ZX0pXG5cdFx0dGhpcy50bFpvb21PdXQuc3RhZ2dlclRvKFtcblx0XHRcdGRvbSgnLmZyb250LWNvbnRhaW5lcicpLFxuXHRcdFx0ZG9tKCcucHJvamVjdF9fc2hhcmUnKSxcblx0XHRcdGRvbSgnLnByb2plY3RfX2luZm9zJyksXG5cdFx0XHRkb20oJy5wcm9qZWN0X19yZXZlYWwnKSxcblx0XHRcdGRvbSgnLmNhcnQnKVxuXHRcdF0sIDAuNCwge29wYWNpdHk6IDF9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX2JhY2snKSwgMC40LCB7b3BhY2l0eTogMH0sIDApXG5cdFx0dGhpcy50bFpvb21PdXQuYWRkQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2NvbnRhY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2JhY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0fSwgMC40KVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX2NvbnRhY3QnKSwgMC40LCB7b3BhY2l0eTogMX0sIDAuNClcblx0XHR0aGlzLnRsWm9vbU91dC50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtzY2FsZTogMSwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX3ByZXYnKSwgMC40LCB7eDogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXHRcdHRoaXMudGxab29tT3V0LnRvKGRvbSgnLnByb2plY3RfX25leHQnKSwgMC40LCB7eDogMCwgZWFzZTogUG93ZXIyLmVhc2VPdXR9LCAwKVxuXG5cdFx0dGhpcy50bFpvb21PdXQucGxheSgpXG5cblx0XHR0aGlzLnpvb20gPSAhdGhpcy56b29tXG5cdH1cblxuXHRfYmFja1RvR2FsbGVyeShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dGhpcy5fem9vbU91dCgpXG5cdH1cblxuXHRfdG9nZ2xlU3RvcnkoKSB7XG5cdFx0ZG9tKCcucHJvamVjdF9fc3RvcnknKS50b2dnbGVDbGFzcygnZW5hYmxlZCcpXG5cdH1cblxuXHRfaGlkZVN0b3J5KCkge1xuXHRcdGRvbSgnLnByb2plY3RfX3N0b3J5JykucmVtb3ZlQ2xhc3MoJ2VuYWJsZWQnKVxuXHR9XG5cblx0X3ByZXYoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cblx0XHR0aGlzLl9oaWRlU3RvcnkoKVxuXHRcdFR3ZWVubWF4LnRvKGRvbSgnLnByb2plY3RfX3ByaW50JyksIDAuNCwge29wYWNpdHk6IDAsIG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdHRoYXQuY3VycmVudEluZGV4ID0gdGhhdC5fZ2V0UHJldkluZGV4KClcblx0XHRcdHRoYXQuYWN0aW9uID0gJ3ByZXYnXG5cdFx0XHRQcmludEFwaS5nZXRPbmUodGhhdC5zdGF0ZS5zbGlkZXNob3cucmVmc1t0aGF0Ll9nZXRQcmV2SW5kZXgoKV0pOyAvLyBUT0RPOiBtZXR0cmUgZW4gY2FjaGUgcG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucyBkZSByZXF1w6p0ZXNcblx0XHR9fSk7XG5cdH1cblxuXHRfbmV4dCgpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblxuXHRcdHRoaXMuX2hpZGVTdG9yeSgpXG5cdFx0VHdlZW5tYXgudG8oZG9tKCcucHJvamVjdF9fcHJpbnQnKSwgMC40LCB7b3BhY2l0eTogMCwgb25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0dGhhdC5jdXJyZW50SW5kZXggPSB0aGF0Ll9nZXROZXh0SW5kZXgoKVxuXHRcdFx0dGhhdC5hY3Rpb24gPSAnbmV4dCdcblx0XHRcdFByaW50QXBpLmdldE9uZSh0aGF0LnN0YXRlLnNsaWRlc2hvdy5yZWZzW3RoYXQuX2dldE5leHRJbmRleCgpXSk7IC8vIFRPRE86IG1ldHRyZSBlbiBjYWNoZSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsb25zIGRlIHJlcXXDqnRlc1xuXHRcdH19KTtcblx0fVxuXG5cdF9nZXRQcmV2SW5kZXgoKSB7XG5cdFx0cmV0dXJuICh0aGlzLmN1cnJlbnRJbmRleC0xIDwgMCkgPyB0aGlzLnN0YXRlLnNsaWRlc2hvdy5yZWZzLmxlbmd0aC0xIDogdGhpcy5jdXJyZW50SW5kZXgtMVxuXHR9XG5cblx0X2dldE5leHRJbmRleCgpIHtcblx0XHRyZXR1cm4gKHRoaXMuY3VycmVudEluZGV4KzEgPiB0aGlzLnN0YXRlLnNsaWRlc2hvdy5yZWZzLmxlbmd0aC0xKSA/IDAgOiB0aGlzLmN1cnJlbnRJbmRleCsxXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25BcnRpc3RTdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdDogQXJ0aXN0U3RvcmUuZ2V0T25lKCkgLy8gVE9ETzogYWZmaWNoZXIgbCdpbWFnZSBzdWl2YW50ZSB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IGNoYXJnw6llXG5cdFx0fSlcblx0fVxuXG5cdF9vblByaW50U3RvcmVDaGFuZ2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzbGlkZXNob3c6IFByaW50U3RvcmUuZ2V0U2xpZGVzaG93KCksXG5cdFx0XHRwcmludDogUHJpbnRTdG9yZS5nZXRPbmUoKVxuXHRcdH0sICgpID0+IHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5zdGF0ZS5zbGlkZXNob3cuY3VycmVudEluZGV4XG5cdFx0XHRUd2Vlbm1heC50byhkb20oJy5wcm9qZWN0X19wcmludCcpLCAwLjQsIHtvcGFjaXR5OiAxfSk7XG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXJ0aXN0U3RvcmUgZnJvbSAnQXJ0aXN0U3RvcmUnXG5pbXBvcnQgQXJ0aXN0QXBpIGZyb20gJ0FydGlzdEFwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHsgXG5cdFx0XHRhcnRpc3RzOiB7fVxuXHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9uIGJpbmRlZFxuXHRcdHRoaXMuX29uU3RvcmVDaGFuZ2VCaW5kZWQgPSB0aGlzLl9vblN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHRcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0XHRcblx0XHRBcnRpc3RBcGkuZ2V0QWxsKCk7XG5cdFx0QXJ0aXN0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcnRpc3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblN0b3JlQ2hhbmdlQmluZGVkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXNcblx0XHQvLyBsZXQgYXJ0aXN0c0RhdGEgPSBBcHBTdG9yZS5hcnRpc3RzQ29udGVudCgpXG5cdFx0Ly8gbGV0IGFydGlzdHNJdGVtcyA9IFtdXG5cdFx0Ly8gZm9yIChsZXQgYXJ0aXN0IGluIGFydGlzdHNEYXRhKSB7XG5cdFx0Ly8gXHRhcnRpc3RzSXRlbXMucHVzaCg8bGkga2V5PXthcnRpc3R9PjxhIGhyZWY9eycjL3Byb2plY3QvJythcnRpc3R9PnthcnRpc3RzRGF0YVthcnRpc3RdLm5hbWV9PC9hPjwvbGk+KVxuXHRcdC8vIH1cblx0XHRsZXQgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS0tcHJvamVjdHMnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2plY3RzX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0c19fdGl0bGUgdGV4dCB0ZXh0LS10aXRsZSc+RmVsbG93czo8L2gyPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmFydGlzdHMpLm1hcChmdW5jdGlvbihpbmRleCl7XG5cdFx0XHRcdFx0XHRcdGxldCBhcnRpc3QgPSB0aGF0LnN0YXRlLmFydGlzdHNbaW5kZXhdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3Byb2plY3RzX19pdGVtJz48YSBocmVmPXsnIy9wcm9qZWN0LycrYXJ0aXN0LnNsdWd9IGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tYmlnJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+e2FydGlzdC5uYW1lfTwvc3Bhbj48L2E+PC9saT5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25TdG9yZUNoYW5nZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFydGlzdHM6IEFydGlzdFN0b3JlLmdldEFsbCgpXG5cdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgUHJpbnRTdG9yZSBmcm9tICdQcmludFN0b3JlJ1xuaW1wb3J0IFByaW50QXBpIGZyb20gJ1ByaW50QXBpJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IG9mZnNldCBmcm9tICdvZmZzZXQnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBzY3JvbGxUbyBmcm9tICdzY3JvbGxUbydcbmxldCBzY3JvbGwgPSBVdGlscy5TY3JvbGwoKVxubGV0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxubGV0IE1hc29ucnkgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wIGV4dGVuZHMgUGFnZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLnN0YXRlID0geyBcblx0XHRcdHByaW50czoge31cblx0XHR9XG5cblx0XHQvLyBmdW5jdGlvbiBiaW5kZWRcblx0XHR0aGlzLl9zaG93UHJpbnRzQmluZGVkID0gdGhpcy5fc2hvd1ByaW50cy5iaW5kKHRoaXMpXG5cdFx0dGhpcy5fb25QcmludFN0b3JlQ2hhbmdlQmluZGVkID0gdGhpcy5fb25QcmludFN0b3JlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLl9yYWZCaW5kZWQgPSB0aGlzLl9yYWYuYmluZCh0aGlzKVxuXHRcdFxuXHRcdC8vIHZhcnNcblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLmxvYWRlZCA9IGZhbHNlXG5cdFx0dGhpcy5zY3JvbGxJbmRleCA9IDBcblx0XHR0aGlzLnNjcm9sbE9rID0gZmFsc2Vcblx0XHR0aGlzLnRyYW5zZm9ybSA9IFV0aWxzLkdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJylcblxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHRcdFxuXHRcdFByaW50QXBpLmdldEZvclNhbGUoKTtcblx0XHRQcmludFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQcmludFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUHJpbnRTdG9yZUNoYW5nZUJpbmRlZCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0bGV0IHNob3BEYXRhID0gQXBwU3RvcmUuc2hvcENvbnRlbnQoKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtLXNob3AnIHJlZj0ncGFnZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX2ludHJvJz5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdzaG9wX190aXRsZSc+e3Nob3BEYXRhLmludHJvLnRpdGxlfTwvaDI+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHNob3BEYXRhLmludHJvLnBhcmFncmFwaHMpLm1hcCgoaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nc2hvcF9fcGFyYWdyYXBoIHRleHQgdGV4dC0tYmlnJyBrZXk9e2luZGV4fT57c2hvcERhdGEuaW50cm8ucGFyYWdyYXBoc1tpbmRleF19PC9wPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXNjb3ZlciBzaG9wX19kaXNjb3Zlcicgb25DbGljaz17dGhpcy5fc2hvd1ByaW50c0JpbmRlZH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJz48c3BhbiBjbGFzc05hbWU9J2J1dHRvbl9fY29udGVudCc+RGlzY292ZXIgRWxsaW90dCBFcndpdHQncyBwcmludHM8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGlzY292ZXJfX2Fycm93Jz48ZGl2IGNsYXNzTmFtZT0nYXJyb3cgYXJyb3ctLWJsYWNrJz48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaG9wJz5cblx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5wcmludHMpLm1hcChmdW5jdGlvbihpZCwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0bGV0IHByaW50ID0gdGhhdC5zdGF0ZS5wcmludHNbaWRdXG5cdFx0XHRcdFx0XHQvLyBsZXQgZmlsZSA9IHByaW50LmZpbGUgKyAnX21pbi5qcGcnXG5cdFx0XHRcdFx0XHRsZXQgZmlsZSA9IHByaW50LmZpbGUgKyAnX21lZGl1bS5qcGcnXG5cdFx0XHRcdFx0XHQvLyBsZXQgc3BlZWQgPSAoaW5kZXggJSAyID09PSAwKSA/ICdmYXN0JyA6ICdzbG93J1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3ByaW50JyBrZXk9e2lkfT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXsnIy9zaG9wLycraWR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9eycuL2Fzc2V0cy9pbWFnZXMvcHJpbnRzLycrZmlsZX0+PC9pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9faG92ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hvcF9fZGV0YWlsJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJpbnRfX3RpdGxlJz57cHJpbnQudGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ByaW50X19sb2NhdGlvbic+PGRpdiBjbGFzc05hbWU9J3Nob3BfX2NpdHknPntwcmludC5jaXR5fSwge3ByaW50LmNvdW50cnl9LDwvZGl2PiA8ZGl2IGNsYXNzTmFtZT0nc2hvcF9feWVhcic+e3ByaW50LnllYXJ9PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX3ByaWNlJz57cHJpbnQucHJpY2V94oKsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Nob3BfX2RldGFpbHMgYnV0dG9uIGJ1dHRvbi0tcmV2ZXJzZSc+PHNwYW4gY2xhc3NOYW1lPSdidXR0b25fX2NvbnRlbnQnPk1vcmUgZGV0YWlsczwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+IFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzLCBmaWxlXG5cdFx0dGhpcy5tYXggPSBfLnNpemUodGhpcy5zdGF0ZS5wcmludHMpXG5cdFx0aWYgKHRoaXMubWF4ID4gMCAmJiAhdGhpcy5sb2FkZWQpIHtcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0Xyh0aGlzLnN0YXRlLnByaW50cykuZm9yRWFjaCgocHJpbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGZpbGUgPSBuZXcgSW1hZ2UoKVxuXHRcdFx0XHRmaWxlLm9ubG9hZCA9IHRoYXQub25JbWFnZUxvYWRlZC5iaW5kKHRoYXQpXG5cdFx0XHRcdGZpbGUuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9wcmludHMvJytwcmludC5maWxlKydfbWluLmpwZydcblx0XHRcdH0pLnZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JbWFnZUxvYWRlZChlKSB7XG5cdFx0dGhpcy5uSW1hZ2VMb2FkZWQrKztcblx0XHRpZiAodGhpcy5uSW1hZ2VMb2FkZWQgPj0gdGhpcy5tYXgpIHtcblx0XHRcdGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKVxuXHRcdFx0aWYgKGdyaWQpIHtcblx0XHRcdFx0bGV0IGlzbyA9IG5ldyBNYXNvbnJ5KGdyaWQsIHtcblx0XHRcdFx0XHRpdGVtU2VsZWN0b3I6ICcuc2hvcF9fcHJpbnQnLFxuXHRcdFx0XHRcdGNvbHVtbldpZHRoOiAnLnNob3BfX3ByaW50Jyxcblx0XHRcdFx0XHRndXR0ZXI6IDUwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdF9yYWYoKSB7XG5cdFx0aWYgKHRoaXMuc2Nyb2xsSW5kZXggJSAzKSB0aGlzLnNjcm9sbE9rID0gdHJ1ZVxuXHRcdGVsc2UgdGhpcy5zY3JvbGxPayA9IHRydWVcblx0XHR0aGlzLnNjcm9sbEluZGV4KytcblxuXHRcdGlmICh0aGlzLnNjcm9sbE9rKSB7XG5cdFx0XHQvLyBsZXQgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdFx0dGhpcy5oYW5kbGVTY3JvbGwoKVxuXHRcdH1cblxuXHRcdHNjcm9sbCh0aGlzLl9yYWZCaW5kZWQpO1xuXHR9XG5cblx0aGFuZGxlU2Nyb2xsKCkge1xuXHRcdGxldCB0b3AgPSBVdGlscy5HZXRTY3JvbGxUb3AoKVxuXG5cdFx0Xyhkb20oJy5zaG9wX19wcmludCcpKS5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0dGhpcy52aWRlb09mZnNldCA9IG9mZnNldChlbCk7XG5cdFx0XHR0aGlzLnNjcm9sbFRvcCA9IFV0aWxzLkdldFNjcm9sbFRvcCgpXG5cdFx0XHR0aGlzLnRvcFBvc2l0aW9uID0gZWwub2Zmc2V0VG9wXG5cdFx0XHR0aGlzLnlQb3NpdGlvbiA9ICh0aGlzLnNjcm9sbFRvcCAtIHRoaXMudG9wUG9zaXRpb24pICogMC4yO1xuXG5cdFx0XHRpZiAoZG9tKGVsKS5oYXNDbGFzcygnanMtZmFzdCcpKSB7XG5cdFx0XHRcdGVsLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9ICgndHJhbnNsYXRlKDBweCwgJysgKC10aGlzLnlQb3NpdGlvbikgKydweCknKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRvbShlbCkuaGFzQ2xhc3MoJ2pzLXNsb3cnKSkge1xuXHRcdFx0XHRlbC5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSAoJ3RyYW5zbGF0ZSgwcHgsICcrIHRoaXMueVBvc2l0aW9uICsncHgpJyk7XG5cdFx0XHR9XG5cdFx0fSkudmFsdWUoKTtcblx0fVxuXG5cdF9zaG93UHJpbnRzKCkge1xuXHRcdHRoaXMuc2xpZGVzaG93T2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKS5vZmZzZXRUb3Bcblx0XHRUd2Vlbk1heC50byh3aW5kb3csIDEuMiwge3Njcm9sbFRvOnt5OiB0aGlzLnNsaWRlc2hvd09mZnNldFRvcCAtIDQwfSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pXG5cdH1cblxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRsZXQgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0bGV0IHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblxuXHRfb25QcmludFN0b3JlQ2hhbmdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJpbnRzOiBQcmludFN0b3JlLmdldEZvclNhbGUoKVxuXHRcdH0pXG5cdH1cbn1cbiIsImxldCBjb25maWcgPSB7XG5cdCdzaXRldXJsJzogJ2h0dHA6Ly9oYXZhbmEuaGk5LmZyJ1xuXHQvLyAnc2l0ZXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZzsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdFdJTkRPV19SRVNJWkU6ICdXSU5ET1dfUkVTSVpFJyxcblx0Q0hBTkdFX0FNQklFTlQ6ICdDSEFOR0VfQU1CSUVOVCcsXG5cblx0TUVESUFfR0xPQkFMX1c6IDE5MjAsXG5cdE1FRElBX0dMT0JBTF9IOiAxMDgwLFxuXG5cdE1JTl9NSURETEVfVzogOTYwLFxuXHRNUV9YU01BTEw6IDMyMCxcblx0TVFfU01BTEw6IDQ4MCxcblx0TVFfTUVESVVNOiA3NjgsXG5cdE1RX0xBUkdFOiAxMDI0LFxuXHRNUV9YTEFSR0U6IDEyODAsXG5cdE1RX1hYTEFSR0U6IDE2ODAsXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRSRUNFSVZFX0FMTF9BUlRJU1RTOiAnUkVDRUlWRV9BTExfQVJUSVNUUycsXG5cdFJFQ0VJVkVfQVJUSVNUOiAnUkVDRUlWRV9BUlRJU1QnLFxuXHRFUlJPUjogJ0VSUk9SJyxcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdENBUlRfQUREOiAnQ0FSVF9BREQnLFx0XHRcdC8vIEFkZHMgaXRlbSB0byBjYXJ0XG5cdENBUlRfUkVNT1ZFOiAnQ0FSVF9SRU1PVkUnLFx0XHQvLyBSZW1vdmUgaXRlbSBmcm9tIGNhcnRcblx0Q0FSVF9WSVNJQkxFOiAnQ0FSVF9WSVNJQkxFJyxcdC8vIFNob3dzIG9yIGhpZGVzIHRoZSBjYXJ0XG5cdENBUlRfRU5BQkxFRDogJ0NBUlRfRU5BQkxFRCcsXHQvLyBPcGVuIG9yIGNsb3NlIHRoZSBjYXJ0XG5cdFNFVF9TRUxFQ1RFRDogJ1NFVF9TRUxFQ1RFRCcsXHQvLyBTZWxlY3RzIGEgcHJvZHVjdCBvcHRpb25cblx0UkVDRUlWRV9EQVRBOiAnUkVDRUlWRV9EQVRBJ1x0Ly8gXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRSRUNFSVZFX0FMTF9QUklOVFM6ICdSRUNFSVZFX0FMTF9QUklOVFMnLFxuXHRSRUNFSVZFX1BSSU5UU19GT1JTQUxFOiAnUkVDRUlWRV9QUklOVFNfRk9SU0FMRScsXG5cdFJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVzogJ1JFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVycsXG5cdFJFQ0VJVkVfQVJUSVNUX1BSSU5UUzogJ1JFQ0VJVkVfQVJUSVNUX1BSSU5UUycsXG5cdFJFQ0VJVkVfUFJJTlQ6ICdSRUNFSVZFX1BSSU5UJyxcblx0RVJST1I6ICdFUlJPUicsXG5cdFpPT006ICdaT09NJyxcbn0iLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbnZhciBBcHBEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVWaWV3QWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKHtcblx0XHRcdHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcblx0XHRcdGFjdGlvbjogYWN0aW9uXG5cdFx0fSk7XG5cdH0sXG5cdGhhbmRsZVNlcnZlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCh7XG5cdFx0XHRzb3VyY2U6ICdTRVJWRVJfQUNUSU9OJyxcblx0XHRcdGFjdGlvbjogYWN0aW9uXG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBEaXNwYXRjaGVyIiwiaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbiAgICBcdFxuY2xhc3MgR2xvYmFsRXZlbnRzIHtcblx0aW5pdCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpXG5cdFx0dGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuXHRcdFx0QXBwQWN0aW9ucy53aW5kb3dSZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHR9LCAzMDApXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsRXZlbnRzXG4iLCJpbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IGhhc2hlciBmcm9tICdoYXNoZXInXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IGNyb3Nzcm9hZHMgZnJvbSAnY3Jvc3Nyb2FkcydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUm91dGVyIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLnJvdXRpbmcgPSBkYXRhLnJvdXRlcy5yb3V0aW5nXG5cdFx0dGhpcy5kZWZhdWx0Um91dGUgPSB0aGlzLnJvdXRpbmdbJy8nXVxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGhhc2hlci5uZXdIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLm9sZEhhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIucHJlcGVuZEhhc2ggPSAnISdcblx0XHRoYXNoZXIuaW5pdGlhbGl6ZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdGhhc2hlci5jaGFuZ2VkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLl9zZXR1cENyb3Nzcm9hZHMoKVxuXHR9XG5cdGJlZ2luUm91dGluZygpIHtcblx0XHRoYXNoZXIuaW5pdCgpXG5cdH1cblx0X3NldHVwQ3Jvc3Nyb2FkcygpIHtcblx0XHRsZXQgaG9tZVNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCcnLCB0aGlzLl9vbkhvbWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDEpXG5cblx0XHRsZXQgYmFzaWNTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgne3BhZ2V9JywgdGhpcy5fb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMSlcblx0XHQvLyBmaXJzdERlZ3JlZVNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0Ly8gXHRwYWdlIDogWydob21lJywgJzQwNCcsICdmZWxsb3dzaGlwJywgJ3Byb2plY3RzJywgJ3Nob3AnLCAnbmV3cycsICdjb250YWN0JywgJ2xlZ2FsJywgJ3ByaXZhY3knXSAvL3ZhbGlkIHNlY3Rpb25zXG5cdFx0Ly8gfVxuXG5cdFx0bGV0IHByb2plY3RTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgncHJvamVjdC97aWR9JywgdGhpcy5fb25Qcm9qZWN0VVJMSGFuZGxlci5iaW5kKHRoaXMpLCAyKVxuXHRcdHByb2plY3RTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0aWQgOiAvXlthLXpdL1xuXHRcdH1cblxuXHRcdGxldCBnYWxsZXJ5U2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3Byb2plY3Qve2lkfS9jb250YWN0LXNoZWV0JywgdGhpcy5fb25Qcm9qZWN0VVJMSGFuZGxlci5iaW5kKHRoaXMpLCAzKVxuXHRcdGdhbGxlcnlTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0aWQgOiAvXlthLXpdL1xuXHRcdH1cblxuXHRcdGxldCBzaG9wU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJy9zaG9wL3tpZH0nLCB0aGlzLl9vblNob3BVUkxIYW5kbGVyLmJpbmQodGhpcyksIDIpXG5cdFx0c2hvcFNlY3Rpb24ucnVsZXMgPSB7XG5cdFx0XHRpZCA6IC9eWzAtOV0vXG5cdFx0fVxuXHR9XG5cdF9vbkhvbWVVUkxIYW5kbGVyKCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKCdob21lJylcblx0fVxuXHRfb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIocGFnZUlkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocGFnZUlkKVxuXHR9XG5cdF9vblByb2plY3RVUkxIYW5kbGVyKHByb2plY3RJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHByb2plY3RJZClcblx0fVxuXHRfb25TaG9wVVJMSGFuZGxlcihwcmludElkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocHJpbnRJZClcblx0fVxuXHRfb25EZWZhdWx0VVJMSGFuZGxlcigpIHtcblx0XHR0aGlzLl9zZW5kVG9EZWZhdWx0KClcblx0fVxuXHRfYXNzaWduUm91dGUoaWQpIHtcblx0XHRsZXQgaGFzaCA9IGhhc2hlci5nZXRIYXNoKClcblx0XHRsZXQgcGFydHMgPSB0aGlzLl9nZXRVUkxQYXJ0cyhoYXNoKVxuXHRcdHRoaXMuX3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFydHNbMF0sIGlkKVxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSB0cnVlXG5cdH1cblx0X2dldFVSTFBhcnRzKHVybCkge1xuXHRcdGxldCBoYXNoID0gdXJsXG5cdFx0aGFzaCA9IGhhc2guc3Vic3RyKDEpXG5cdFx0cmV0dXJuIGhhc2guc3BsaXQoJy8nKVxuXHR9XG5cdF91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcmVudCwgdGFyZ2V0SWQpIHtcblx0XHRoYXNoZXIub2xkSGFzaCA9IGhhc2hlci5uZXdIYXNoXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB7XG5cdFx0XHRoYXNoOiBoYXNoLFxuXHRcdFx0cGFydHM6IHBhcnRzLFxuXHRcdFx0cGFyZW50OiBwYXJlbnQsXG5cdFx0XHR0YXJnZXRJZDogdGFyZ2V0SWRcblx0XHR9XG5cdFx0QXBwQWN0aW9ucy5wYWdlSGFzaGVyQ2hhbmdlZChoYXNoZXIubmV3SGFzaClcblx0fVxuXHRfZGlkSGFzaGVyQ2hhbmdlKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRjcm9zc3JvYWRzLnBhcnNlKG5ld0hhc2gpXG5cdFx0aWYodGhpcy5uZXdIYXNoRm91bmRlZCkgcmV0dXJuXG5cdFx0Ly8gSWYgVVJMIGRvbid0IG1hdGNoIGEgcGF0dGVybiwgc2VuZCB0byBkZWZhdWx0XG5cdFx0dGhpcy5fb25EZWZhdWx0VVJMSGFuZGxlcigpXG5cdH1cblx0X3NlbmRUb0RlZmF1bHQoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goQXBwU3RvcmUuZGVmYXVsdFJvdXRlKCkpXG5cdH1cblx0c3RhdGljIGdldEJhc2VVUkwoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LlVSTC5zcGxpdChcIiNcIilbMF1cblx0fVxuXHRzdGF0aWMgZ2V0SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLmdldEhhc2goKVxuXHR9XG5cdHN0YXRpYyBnZXRSb3V0ZXMoKSB7XG5cdFx0cmV0dXJuIGRhdGEucm91dGVzLnJvdXRpbmdcblx0fVxuXHRzdGF0aWMgZ2V0TmV3SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm5ld0hhc2hcblx0fVxuXHRzdGF0aWMgZ2V0T2xkSGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm9sZEhhc2hcblx0fVxuXHRzdGF0aWMgc2V0SGFzaChoYXNoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goaGFzaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXJcbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcblxubGV0IF9oYXNoXG5cbmZ1bmN0aW9uIF9wYWdlUm91dGVJZENoYW5nZWQoaGFzaCkge1xuXHRfaGFzaCA9IGhhc2guaXRlbS5wYXJlbnRcbn1cbmZ1bmN0aW9uIF9nZXRQYWdlQ29udGVudCgpIHtcblx0dmFyIGhhc2hPYmogPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG5cdHZhciBjb250ZW50ID0gZGF0YS5yb3V0ZXMucm91dGluZ1toYXNoT2JqLmhhc2hdXG5cdHJldHVybiBjb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0TWVudUNvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlcy5tZW51XG59XG5mdW5jdGlvbiBfZ2V0Rm9vdGVyTWVudUNvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlc1snZm9vdGVyLW1lbnUnXVxufVxuZnVuY3Rpb24gX2dldEFwcERhdGEoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlc1xufVxuZnVuY3Rpb24gX2dldERlZmF1bHRSb3V0ZSgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzWydkZWZhdWx0LXJvdXRlJ11cbn1cbmZ1bmN0aW9uIF9nZXRHbG9iYWxDb250ZW50KCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXMuY29udGVudFxufVxuZnVuY3Rpb24gX2dldEhvbWUoKSB7XG5cdHJldHVybiBkYXRhLmhvbWVcbn1cbmZ1bmN0aW9uIF9nZXRGZWxsb3dzaGlwKCkge1xuXHRyZXR1cm4gZGF0YS5mZWxsb3dzaGlwXG59XG5mdW5jdGlvbiBfZ2V0U2hvcCgpIHtcblx0cmV0dXJuIGRhdGEuc2hvcFxufVxuZnVuY3Rpb24gX2dldE5ld3MoKSB7XG5cdHJldHVybiBkYXRhLm5ld3Ncbn1cbmZ1bmN0aW9uIF9nZXRBcnRpc3RzKCkge1xuXHRyZXR1cm4gZGF0YS5hcnRpc3RzXG59XG5mdW5jdGlvbiBfZ2V0QXJ0aXN0KGlkKSB7XG5cdHJldHVybiBkYXRhLmFydGlzdHNbaWRdXG59XG5cbnZhciBBcHBTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcblx0ZW1pdENoYW5nZTogZnVuY3Rpb24odHlwZSwgaXRlbSkge1xuXHRcdHRoaXMuZW1pdCh0eXBlLCBpdGVtKVxuXHR9LFxuXHRoYXNoOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2hhc2hcblx0fSxcblx0cGFnZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0UGFnZUNvbnRlbnQoKVxuXHR9LFxuXHRtZW51Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRNZW51Q29udGVudCgpXG5cdH0sXG5cdGZvb3Rlck1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEZvb3Rlck1lbnVDb250ZW50KClcblx0fSxcblx0YXBwRGF0YTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRBcHBEYXRhKClcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldERlZmF1bHRSb3V0ZSgpXG5cdH0sXG5cdGdsb2JhbENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0R2xvYmFsQ29udGVudCgpXG5cdH0sXG5cdGhvbWVDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEhvbWUoKVxuXHR9LFxuXHRmZWxsb3dzaGlwQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRGZWxsb3dzaGlwKClcblx0fSxcblx0c2hvcENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0U2hvcCgpXG5cdH0sXG5cdG5ld3NDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldE5ld3MoKVxuXHR9LFxuXHRhcnRpc3RzQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRBcnRpc3RzKClcblx0fSxcblx0YXJ0aXN0Q29udGVudDogZnVuY3Rpb24oaWQpIHtcblx0XHRyZXR1cm4gX2dldEFydGlzdChpZClcblx0fSxcblx0V2luZG93OiB7XG5cdFx0dzogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0aDogd2luZG93LmlubmVySGVpZ2h0XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHR2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQ6XG5cdFx0XHRcdF9wYWdlUm91dGVJZENoYW5nZWQoYWN0aW9uKVxuXHRcdFx0XHRBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRTpcblx0XHRcdFx0QXBwU3RvcmUuV2luZG93LncgPSBhY3Rpb24uaXRlbS53aW5kb3dXXG5cdFx0XHRcdEFwcFN0b3JlLldpbmRvdy5oID0gYWN0aW9uLml0ZW0ud2luZG93SFxuXHRcdFx0XHRBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQXJ0aXN0Q29uc3RhbnRzIGZyb20gJ0FydGlzdENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcblxuY29uc3QgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbmxldCBfYXJ0aXN0ID0ge307XG5sZXQgX2FydGlzdHMgPSB7fTtcblxuZnVuY3Rpb24gX2FkZEFydGlzdHMoYXJ0aXN0cykge1xuXHRhcnRpc3RzLmZvckVhY2goZnVuY3Rpb24oYXJ0aXN0KSB7IC8vIGNoYW5nZSBmb3JFYWNoIHRvIGxvZGFzaFxuXHRcdGlmICghX2FydGlzdHNbYXJ0aXN0Ll9pZF0pIHtcblx0XHRcdF9hcnRpc3RzW2FydGlzdC5faWRdID0gYXJ0aXN0O1xuXHRcdH1cblx0fSk7XG59XG5cbmxldCBBcnRpc3RTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcblx0Z2V0QWxsOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2FydGlzdHNcblx0fSxcblx0Z2V0T25lOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2FydGlzdDtcblx0fSxcblx0Ly8gRW1pdCBDaGFuZ2UgZXZlbnRcblx0ZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG5cdH0sXG5cdC8vIEFkZCBjaGFuZ2UgbGlzdGVuZXJcblx0YWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0Ly8gUmVtb3ZlIGNoYW5nZSBsaXN0ZW5lclxuXHRyZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHRkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG5cdFx0bGV0IGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG5cdFx0c3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG5cdFx0XHRjYXNlIEFydGlzdENvbnN0YW50cy5SRUNFSVZFX0FMTF9BUlRJU1RTOlxuXHRcdFx0XHRfYWRkQXJ0aXN0cyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdEFydGlzdFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgQXJ0aXN0Q29uc3RhbnRzLlJFQ0VJVkVfQVJUSVNUOlxuXHRcdFx0XHRfYXJ0aXN0ID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdEFydGlzdFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpc3RTdG9yZVxuXG4iLCJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0IENhcnRDb25zdGFudHMgZnJvbSAnQ2FydENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuY29uc3QgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbi8vIERlZmluZSBpbml0aWFsIGRhdGEgcG9pbnRzXG5sZXQgX3Byb2R1Y3RzID0gW10sIF9jYXJ0VmlzaWJsZSA9IHRydWUsIF9jYXJ0RW5hYmxlZCA9IGZhbHNlO1xuXG4vLyBBZGQgcHJvZHVjdCB0byBjYXJ0XG5mdW5jdGlvbiBfYWRkKHByaW50SWQsIHVwZGF0ZSkge1xuXHQvLyB1cGRhdGUucXVhbnRpdHkgPSBwcmludElkIGluIF9wcm9kdWN0cyA/IF9wcm9kdWN0c1twcmludElkXS5xdWFudGl0eSArIDEgOiAxO1xuXHQvLyBfcHJvZHVjdHNbcHJpbnRJZF0ucHVzaCA9IF8uZXh0ZW5kKHt9LCBfcHJvZHVjdHNbcHJpbnRJZF0sIHVwZGF0ZSlcblx0Ly8gaWYgKF9wcm9kdWN0c1twcmludElkXSkge1xuXHQvLyBcdF9wcm9kdWN0c1twcmludElkXS5wdXNoKHVwZGF0ZSlcblx0Ly8gfSBlbHNlIHtcblx0Ly8gXHRfcHJvZHVjdHNbcHJpbnRJZF0gPSBbXVxuXHQvLyBcdF9wcm9kdWN0c1twcmludElkXS5wdXNoKHVwZGF0ZSlcblx0Ly8gfVxuXHQvLyBjb25zb2xlLmxvZyhfcHJvZHVjdHMpXG5cblx0X3Byb2R1Y3RzLnB1c2godXBkYXRlKVxufVxuXG4vLyBTZXQgY2FydCB2aXNpYmlsaXR5XG5mdW5jdGlvbiBfc2V0Q2FydFZpc2libGUoY2FydFZpc2libGUpIHtcblx0X2NhcnRWaXNpYmxlID0gY2FydFZpc2libGU7XG59XG5cbi8vIFNldCBjYXJ0IGVuYWJsZWRcbmZ1bmN0aW9uIF9zZXRDYXJ0RW5hYmxlZChjYXJ0RW5hYmxlZCkge1xuXHRfY2FydEVuYWJsZWQgPSBjYXJ0RW5hYmxlZDtcbn1cblxuLy8gUmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG5mdW5jdGlvbiBfcmVtb3ZlSXRlbShpbmRleCkge1xuXHRfcHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxubGV0IENhcnRTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcblx0Z2V0Q2FydEl0ZW1zOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX3Byb2R1Y3RzO1xuXHR9LFxuXHRnZXRDYXJ0Q291bnQ6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGxldCBjb3VudCA9IDBcblx0XHQvLyBfKF9wcm9kdWN0cykuZm9yRWFjaCgocHJvZHVjdCwgaW5kZXgpID0+IHtcblx0XHQvLyBcdC8vIGNvdW50ICs9IHByb2R1Y3QucXVhbnRpdHlcblx0XHQvLyBcdGNvdW50ICs9IHByb2R1Y3QubGVuZ3RoXG5cdFx0Ly8gfSkudmFsdWUoKVxuXHRcdC8vIHJldHVybiBjb3VudDtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoX3Byb2R1Y3RzKS5sZW5ndGg7XG5cdH0sXG5cdGdldENhcnRUb3RhbDogZnVuY3Rpb24oKSB7XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRfKF9wcm9kdWN0cykuZm9yRWFjaCgocHJvZHVjdCwgaW5kZXgpID0+IHtcblx0XHRcdHRvdGFsICs9IHByb2R1Y3QucHJpY2Vcblx0XHR9KS52YWx1ZSgpXG5cblx0XHQvLyBmb3IobGV0IHByb2R1Y3QgaW4gX3Byb2R1Y3RzKXtcblx0XHQvLyBcdGlmKF9wcm9kdWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9kdWN0KSl7XG5cdFx0Ly8gXHRcdHRvdGFsICs9IF9wcm9kdWN0c1twcm9kdWN0XS5wcmljZSAqIF9wcm9kdWN0c1twcm9kdWN0XS5xdWFudGl0eTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0cmV0dXJuIHRvdGFsLnRvRml4ZWQoMik7XG5cdH0sXG5cdGdldENhcnRWaXNpYmxlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2NhcnRWaXNpYmxlO1xuXHR9LFxuXHRnZXRDYXJ0RW5hYmxlZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jYXJ0RW5hYmxlZDtcblx0fSxcblx0Ly8gRW1pdCBDaGFuZ2UgZXZlbnRcblx0ZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG5cdH0sXG5cdC8vIEFkZCBjaGFuZ2UgbGlzdGVuZXJcblx0YWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcblx0fSxcblx0Ly8gUmVtb3ZlIGNoYW5nZSBsaXN0ZW5lclxuXHRyZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHRkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG5cdFx0bGV0IGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG5cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgQ2FydENvbnN0YW50cy5DQVJUX0FERDpcblx0XHRcdFx0X2FkZChhY3Rpb24ucHJpbnRJZCwgYWN0aW9uLnVwZGF0ZSlcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfVklTSUJMRTpcblx0XHRcdFx0X3NldENhcnRWaXNpYmxlKGFjdGlvbi5jYXJ0VmlzaWJsZSlcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfRU5BQkxFRDpcblx0XHRcdFx0X3NldENhcnRFbmFibGVkKGFjdGlvbi5jYXJ0RW5hYmxlZClcblx0XHRcdFx0Q2FydFN0b3JlLmVtaXRDaGFuZ2UoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBDYXJ0Q29uc3RhbnRzLkNBUlRfUkVNT1ZFOlxuXHRcdFx0XHRfcmVtb3ZlSXRlbShhY3Rpb24uaW5kZXgpXG5cdFx0XHRcdENhcnRTdG9yZS5lbWl0Q2hhbmdlKClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFN0b3JlXG5cbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgUHJpbnRDb25zdGFudHMgZnJvbSAnUHJpbnRDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgZGF0YSBmcm9tICdHbG9iYWxEYXRhJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5sZXQgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmNvbnN0IENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG5sZXQgX3ByaW50cyA9IHt9O1xubGV0IF9wcmludHNGb3JTYWxlID0ge307XG5sZXQgX3ByaW50c1NsaWRlc2hvdyA9IHt9O1xubGV0IF9hcnRpc3RQcmludHMgPSB7fTtcbmxldCBfcHJpbnQgPSB7fTtcbmxldCBfcHJpbnRab29tZWQ7XG5cbmZ1bmN0aW9uIF9hZGRQcmludHMocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX3ByaW50c1twcmludC5faWRdKSB7XG5cdFx0XHRfcHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pLnZhbHVlKClcbn1cblxuZnVuY3Rpb24gX2FkZFByaW50c0ZvclNhbGUocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX3ByaW50c0ZvclNhbGVbcHJpbnQuX2lkXSkge1xuXHRcdFx0X3ByaW50c0ZvclNhbGVbcHJpbnQuX2lkXSA9IHByaW50O1xuXHRcdH1cblx0fSkudmFsdWUoKVxufVxuXG5mdW5jdGlvbiBfYWRkUHJpbnRzU2xpZGVzaG93KHJlc3VsdCkge1xuXHRfcHJpbnRzU2xpZGVzaG93ID0gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIF9hZGRBcnRpc3RQcmludHMocHJpbnRzKSB7XG5cdF8ocHJpbnRzKS5mb3JFYWNoKChwcmludCkgPT4ge1xuXHRcdGlmICghX2FydGlzdFByaW50c1twcmludC5faWRdKSB7XG5cdFx0XHRfYXJ0aXN0UHJpbnRzW3ByaW50Ll9pZF0gPSBwcmludDtcblx0XHR9XG5cdH0pLnZhbHVlKClcbn1cblxubGV0IFByaW50U3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG5cdGdldEFsbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNcblx0fSxcblx0Z2V0Rm9yU2FsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNGb3JTYWxlXG5cdH0sXG5cdGdldFNsaWRlc2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludHNTbGlkZXNob3dcblx0fSxcblx0Z2V0QXJ0aXN0UHJpbnRzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2FydGlzdFByaW50c1xuXHR9LFxuXHRnZXRPbmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfcHJpbnRcblx0fSxcblx0Z2V0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9wcmludFpvb21lZFxuXHR9LFxuXHQvLyBFbWl0IENoYW5nZSBldmVudFxuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fSxcblx0ZW1pdFNwZUNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbWl0KCdSRUNFSVZFX1BSSU5UU19TTElERVNIT1cnKTtcblx0fSxcblx0Ly8gQWRkIGNoYW5nZSBsaXN0ZW5lclxuXHRhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuXHR9LFxuXHQvLyBSZW1vdmUgY2hhbmdlIGxpc3RlbmVyXG5cdHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG5cdH0sXG5cdGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcblx0XHRsZXQgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cblx0XHRzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9BTExfUFJJTlRTOlxuXHRcdFx0XHRfYWRkUHJpbnRzKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX0ZPUlNBTEU6XG5cdFx0XHRcdF9hZGRQcmludHNGb3JTYWxlKGFjdGlvbi5pdGVtKTtcblx0XHRcdFx0UHJpbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIFByaW50Q29uc3RhbnRzLlJFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVzpcblx0XHRcdFx0X2FkZFByaW50c1NsaWRlc2hvdyhhY3Rpb24uaXRlbSk7XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHQvLyBQcmludFN0b3JlLmVtaXRTcGVDaGFuZ2UoJ1JFQ0VJVkVfUFJJTlRTX1NMSURFU0hPVycpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBQcmludENvbnN0YW50cy5SRUNFSVZFX0FSVElTVF9QUklOVFM6XG5cdFx0XHRcdF9hZGRBcnRpc3RQcmludHMoYWN0aW9uLml0ZW0pO1xuXHRcdFx0XHRQcmludFN0b3JlLmVtaXRDaGFuZ2UoKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuUkVDRUlWRV9QUklOVDpcblx0XHRcdFx0X3ByaW50ID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUHJpbnRDb25zdGFudHMuWk9PTTpcblx0XHRcdFx0X3ByaW50Wm9vbWVkID0gYWN0aW9uLml0ZW07XG5cdFx0XHRcdFByaW50U3RvcmUuZW1pdENoYW5nZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFByaW50U3RvcmVcblxuIiwiaW1wb3J0IGlzIGZyb20gJ2lzJztcblxuZnVuY3Rpb24gZ2V0QWxsTWV0aG9kcyhvYmopIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iailcblx0XHQuZmlsdGVyKGtleSA9PiBpcy5mbihvYmpba2V5XSkpXG59XG5cbmZ1bmN0aW9uIGF1dG9CaW5kKG9iaikge1xuXHQvLyBjb25zb2xlLmxvZygnb2JqIC0tLS0tJywgb2JqKVxuICBcdGdldEFsbE1ldGhvZHMob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblx0XHQuZm9yRWFjaChtdGQgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobXRkKVxuXHRcdFx0b2JqW210ZF0gPSBvYmpbbXRkXS5iaW5kKG9iaik7XG5cdFx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b0JpbmQ7IiwiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgTm9ybWFsaXplTW91c2VDb29yZHMoZSwgb2JqV3JhcHBlcikge1xuXHRcdHZhciBwb3N4ID0gMDtcblx0XHR2YXIgcG9zeSA9IDA7XG5cdFx0aWYgKCFlKSB2YXIgZSA9IHdpbmRvdy5ldmVudDtcblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0b2JqV3JhcHBlci54ID0gcG9zeFxuXHRcdG9ialdyYXBwZXIueSA9IHBvc3lcblx0XHRyZXR1cm4gb2JqV3JhcHBlclxuXHR9XG5cdHN0YXRpYyBSZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIGNvbnRlbnRXLCBjb250ZW50SCkge1xuXHRcdHZhciBhc3BlY3RSYXRpbyA9IGNvbnRlbnRXIC8gY29udGVudEhcblx0XHR2YXIgc2NhbGUgPSAoKHdpbmRvd1cgLyB3aW5kb3dIKSA8IGFzcGVjdFJhdGlvKSA/ICh3aW5kb3dIIC8gY29udGVudEgpICogMSA6ICh3aW5kb3dXIC8gY29udGVudFcpICogMVxuXHRcdHZhciBuZXdXID0gY29udGVudFcgKiBzY2FsZVxuXHRcdHZhciBuZXdIID0gY29udGVudEggKiBzY2FsZVxuXHRcdHZhciBjc3MgPSB7XG5cdFx0XHR3aWR0aDogbmV3Vyxcblx0XHRcdGhlaWdodDogbmV3SCxcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKG5ld1cgPj4gMSksXG5cdFx0XHR0b3A6ICh3aW5kb3dIID4+IDEpIC0gKG5ld0ggPj4gMSlcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGNzc1xuXHR9XG5cdHN0YXRpYyBHZXRTY3JvbGxUb3AoKSB7XG5cdFx0cmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgIC0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgMCk7XG5cdH1cblx0c3RhdGljIEdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSBbJycsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcmVmaXggPT09ICcnID8gcHJvcGVydHkgOiBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcmVmaXgrcHJvcGVydHk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3Byb3BdICE9IFwidW5kZWZpbmVkXCIpIFxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIFNjcm9sbCgpIHtcbiAgICBcdHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvLyBJRSBGYWxsYmFjaywgeW91IGNhbiBldmVuIGZhbGxiYWNrIHRvIG9uc2Nyb2xsXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwLzYwKSB9O1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgSW50ZXJ2YWwodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuXHRpZiAoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdFx0cmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHZhciB4ID0gMCwgeSA9IDA7XG5cdFx0ZG8ge1xuXHRcdFx0eCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcblx0XHRcdHkgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuXHRcdH0gXG5cdFx0d2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KTtcblxuXHRcdHJldHVybiB7IFwibGVmdFwiOiB4LCBcInRvcFwiOiB5IH1cblx0fVxufSIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gXG4vLyBNSVQgbGljZW5zZVxuIFxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxuICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbn0oKSk7IiwiLyohXG4gKiBWRVJTSU9OOiAxLjcuNVxuICogREFURTogMjAxNS0wMi0yNlxuICogVVBEQVRFUyBBTkQgRE9DUyBBVDogaHR0cDovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDgtMjAxNSwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyB3b3JrIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHA6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgc29mdHdhcmUgYWdyZWVtZW50IHRoYXQgd2FzIGlzc3VlZCB3aXRoIHlvdXIgbWVtYmVyc2hpcC5cbiAqIFxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4gKiovXG52YXIgX2dzU2NvcGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOnRoaXN8fHdpbmRvdzsoX2dzU2NvcGUuX2dzUXVldWV8fChfZ3NTY29wZS5fZ3NRdWV1ZT1bXSkpLnB1c2goZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZT13aW5kb3csaT1mdW5jdGlvbihpLHIpe3ZhciBzPVwieFwiPT09cj9cIldpZHRoXCI6XCJIZWlnaHRcIixuPVwic2Nyb2xsXCIrcyxvPVwiY2xpZW50XCIrcyxhPWRvY3VtZW50LmJvZHk7cmV0dXJuIGk9PT1lfHxpPT09dHx8aT09PWE/TWF0aC5tYXgodFtuXSxhW25dKS0oZVtcImlubmVyXCIrc118fHRbb118fGFbb10pOmlbbl0taVtcIm9mZnNldFwiK3NdfSxyPV9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe3Byb3BOYW1lOlwic2Nyb2xsVG9cIixBUEk6Mix2ZXJzaW9uOlwiMS43LjVcIixpbml0OmZ1bmN0aW9uKHQscixzKXtyZXR1cm4gdGhpcy5fd2R3PXQ9PT1lLHRoaXMuX3RhcmdldD10LHRoaXMuX3R3ZWVuPXMsXCJvYmplY3RcIiE9dHlwZW9mIHImJihyPXt5OnJ9KSx0aGlzLnZhcnM9cix0aGlzLl9hdXRvS2lsbD1yLmF1dG9LaWxsIT09ITEsdGhpcy54PXRoaXMueFByZXY9dGhpcy5nZXRYKCksdGhpcy55PXRoaXMueVByZXY9dGhpcy5nZXRZKCksbnVsbCE9ci54Pyh0aGlzLl9hZGRUd2Vlbih0aGlzLFwieFwiLHRoaXMueCxcIm1heFwiPT09ci54P2kodCxcInhcIik6ci54LFwic2Nyb2xsVG9feFwiLCEwKSx0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKFwic2Nyb2xsVG9feFwiKSk6dGhpcy5za2lwWD0hMCxudWxsIT1yLnk/KHRoaXMuX2FkZFR3ZWVuKHRoaXMsXCJ5XCIsdGhpcy55LFwibWF4XCI9PT1yLnk/aSh0LFwieVwiKTpyLnksXCJzY3JvbGxUb195XCIsITApLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goXCJzY3JvbGxUb195XCIpKTp0aGlzLnNraXBZPSEwLCEwfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fc3VwZXIuc2V0UmF0aW8uY2FsbCh0aGlzLHQpO3ZhciByPXRoaXMuX3dkd3x8IXRoaXMuc2tpcFg/dGhpcy5nZXRYKCk6dGhpcy54UHJldixzPXRoaXMuX3dkd3x8IXRoaXMuc2tpcFk/dGhpcy5nZXRZKCk6dGhpcy55UHJldixuPXMtdGhpcy55UHJldixvPXItdGhpcy54UHJldjt0aGlzLl9hdXRvS2lsbCYmKCF0aGlzLnNraXBYJiYobz43fHwtNz5vKSYmaSh0aGlzLl90YXJnZXQsXCJ4XCIpPnImJih0aGlzLnNraXBYPSEwKSwhdGhpcy5za2lwWSYmKG4+N3x8LTc+bikmJmkodGhpcy5fdGFyZ2V0LFwieVwiKT5zJiYodGhpcy5za2lwWT0hMCksdGhpcy5za2lwWCYmdGhpcy5za2lwWSYmKHRoaXMuX3R3ZWVuLmtpbGwoKSx0aGlzLnZhcnMub25BdXRvS2lsbCYmdGhpcy52YXJzLm9uQXV0b0tpbGwuYXBwbHkodGhpcy52YXJzLm9uQXV0b0tpbGxTY29wZXx8dGhpcy5fdHdlZW4sdGhpcy52YXJzLm9uQXV0b0tpbGxQYXJhbXN8fFtdKSkpLHRoaXMuX3dkdz9lLnNjcm9sbFRvKHRoaXMuc2tpcFg/cjp0aGlzLngsdGhpcy5za2lwWT9zOnRoaXMueSk6KHRoaXMuc2tpcFl8fCh0aGlzLl90YXJnZXQuc2Nyb2xsVG9wPXRoaXMueSksdGhpcy5za2lwWHx8KHRoaXMuX3RhcmdldC5zY3JvbGxMZWZ0PXRoaXMueCkpLHRoaXMueFByZXY9dGhpcy54LHRoaXMueVByZXY9dGhpcy55fX0pLHM9ci5wcm90b3R5cGU7ci5tYXg9aSxzLmdldFg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2R3P251bGwhPWUucGFnZVhPZmZzZXQ/ZS5wYWdlWE9mZnNldDpudWxsIT10LnNjcm9sbExlZnQ/dC5zY3JvbGxMZWZ0OmRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDp0aGlzLl90YXJnZXQuc2Nyb2xsTGVmdH0scy5nZXRZPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dkdz9udWxsIT1lLnBhZ2VZT2Zmc2V0P2UucGFnZVlPZmZzZXQ6bnVsbCE9dC5zY3JvbGxUb3A/dC5zY3JvbGxUb3A6ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6dGhpcy5fdGFyZ2V0LnNjcm9sbFRvcH0scy5fa2lsbD1mdW5jdGlvbih0KXtyZXR1cm4gdC5zY3JvbGxUb194JiYodGhpcy5za2lwWD0hMCksdC5zY3JvbGxUb195JiYodGhpcy5za2lwWT0hMCksdGhpcy5fc3VwZXIuX2tpbGwuY2FsbCh0aGlzLHQpfX0pLF9nc1Njb3BlLl9nc0RlZmluZSYmX2dzU2NvcGUuX2dzUXVldWUucG9wKCkoKTsiLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbi8vIEFjdGlvbnNcbnZhciBQYWdlckFjdGlvbnMgPSB7XG4gICAgb25QYWdlUmVhZHk6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZLFxuICAgICAgICBcdGl0ZW06IGhhc2hcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIFx0UGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFLFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBwYWdlVHJhbnNpdGlvbkRpZEZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbi8vIENvbnN0YW50c1xudmFyIFBhZ2VyQ29uc3RhbnRzID0ge1xuXHRQQUdFX0lTX1JFQURZOiAnUEFHRV9JU19SRUFEWScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTjogJ1BBR0VfVFJBTlNJVElPTl9JTicsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVQ6ICdQQUdFX1RSQU5TSVRJT05fT1VUJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTogJ1BBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUnLFxuXHRQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1M6ICdQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MnLFxuXHRQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDogJ1BBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIJyxcbn1cblxuLy8gRGlzcGF0Y2hlclxudmFyIFBhZ2VyRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlUGFnZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uKVxuXHR9XG59KVxuXG4vLyBTdG9yZVxudmFyIFBhZ2VyU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZmlyc3RQYWdlVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBwYWdlVHJhbnNpdGlvblN0YXRlOiB1bmRlZmluZWQsIFxuICAgIGRpc3BhdGNoZXJJbmRleDogUGFnZXJEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IHBheWxvYWQudHlwZVxuICAgICAgICB2YXIgaXRlbSA9IHBheWxvYWQuaXRlbVxuICAgICAgICBzd2l0Y2goYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZOlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1NcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPyBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4gOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOlxuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6XG4gICAgICAgICAgICBcdGlmIChQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24pIFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0hcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLmVtaXQoYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0UGFnZXJTdG9yZTogUGFnZXJTdG9yZSxcblx0UGFnZXJBY3Rpb25zOiBQYWdlckFjdGlvbnMsXG5cdFBhZ2VyQ29uc3RhbnRzOiBQYWdlckNvbnN0YW50cyxcblx0UGFnZXJEaXNwYXRjaGVyOiBQYWdlckRpc3BhdGNoZXJcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdBdXRvYmluZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0YXV0b2JpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMudGxJbiA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGVcblx0XHR9KVxuXHRcdHRoaXMudGxPdXQgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucmVzaXplKClcblx0XHR0aGlzLnNldHVwQW5pbWF0aW9ucygpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmlzUmVhZHkodGhpcy5wcm9wcy5oYXNoKSwgMClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0dmFyIHdyYXBwZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tKHdyYXBwZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSlcblxuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy50bEluLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsT3V0LnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuaW1wb3J0IFByaW50U3RvcmUgZnJvbSAnUHJpbnRTdG9yZSdcbmltcG9ydCBQcmludEFjdGlvbnMgZnJvbSAnUHJpbnRBY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICdwYWdlLWInXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25JbiA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4uYmluZCh0aGlzKVxuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0ID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMuY29tcG9uZW50cyA9IHtcblx0XHRcdCduZXctY29tcG9uZW50JzogdW5kZWZpbmVkLFxuXHRcdFx0J29sZC1jb21wb25lbnQnOiB1bmRlZmluZWRcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3BhZ2VzQ29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VzJyByZWY9J3BhZ2UtYSc+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlcycgcmVmPSdwYWdlLWInPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblxuXHRzZXR1cE5ld0NvbXBvbmVudChoYXNoLCBUeXBlLCBpZFNlY3Rpb24pIHtcblx0XHRsZXQgaWQgPSBfY2FwaXRhbGl6ZShoYXNoLnJlcGxhY2UoXCIvXCIsIFwiXCIpKVxuXHRcdHRoaXMub2xkUGFnZURpdlJlZiA9IHRoaXMuY3VycmVudFBhZ2VEaXZSZWZcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gKHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPT09ICdwYWdlLWEnKSA/ICdwYWdlLWInIDogJ3BhZ2UtYSdcblx0XHRsZXQgZWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0bGV0IHBhZ2UgPSBcblx0XHRcdDxUeXBlIFxuXHRcdFx0XHRpZD17dGhpcy5jdXJyZW50UGFnZURpdlJlZn0gXG5cdFx0XHRcdGlzUmVhZHk9e3RoaXMub25QYWdlUmVhZHl9IFxuXHRcdFx0XHRoYXNoPXtoYXNofVxuXHRcdFx0XHRpZFNlY3Rpb249e2lkU2VjdGlvbn1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddID0gdGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J11cblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSA9IFJlYWN0LnJlbmRlcihwYWdlLCBlbClcblx0XHRpZihQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPT09IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUykge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10uZm9yY2VVbm1vdW50KClcblx0XHR9XG5cdH1cblxuXHRvblBhZ2VSZWFkeShoYXNoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLm9uUGFnZVJlYWR5KGhhc2gpXG5cdH1cblxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cblx0d2lsbFBhZ2VUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uT3V0KClcblx0fVxuXG5cdGRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlJylcblx0XHRQYWdlckFjdGlvbnMucGFnZVRyYW5zaXRpb25EaWRGaW5pc2goKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdH1cblxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHRoaXMuem9vbSA9IFByaW50U3RvcmUuZ2V0Wm9vbSgpXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApXG5cdFx0aWYgKHRoaXMuem9vbSkge1xuXHRcdFx0Ly8gd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKS5vZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQqMC4yIC0gNDApO1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19zbGlkZXNob3cnKS5vZmZzZXRUb3ApO1xuXHRcdFx0UHJpbnRBY3Rpb25zLnNldFByaW50Wm9vbSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZScpXG5cdFx0UGFnZXJBY3Rpb25zLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXG5cdHN3aXRjaFBhZ2VzRGl2SW5kZXgoKSB7XG5cdFx0dmFyIG5ld0VsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBvbGRFbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLm9sZFBhZ2VEaXZSZWZdKVxuXHRcdG5ld0VsLnN0eWxlLnpJbmRleCA9IDJcblx0XHRvbGRFbC5zdHlsZS56SW5kZXggPSAxXG5cdH1cblxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ25ldy1jb21wb25lbnQnKVxuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XCJhcnRpc3RzXCI6e1wiZWxsaW90dC1lcndpdHRcIjp7XCJuYW1lXCI6XCJFbGxpb3R0IEVyd2l0dFwiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkN1YmEgMTk2NFwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcImVsbGlvdHQtZXJ3aXR0XCIsXCJuUGhvdG9zXCI6OH1dfSxcInFpdS15YW5nXCI6e1wibmFtZVwiOlwiUWl1IFlhbmdcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bVwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcInFpdS15YW5nXCIsXCJuUGhvdG9zXCI6Nn1dfSxcInBoaWxpcC1zaW5kZW5cIjp7XCJuYW1lXCI6XCJQaGlsaXAgU2luZGVuXCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiTG9yZW0gaXBzdW0gMlwiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcInBoaWxpcC1zaW5kZW5cIixcIm5QaG90b3NcIjo0fV19LFwiamFjay1kdWV0XCI6e1wibmFtZVwiOlwiSmFjayBEdWV0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiTG9yZW0gaXBzdW0gM1wiLFwiZGVzY1wiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwiLFwiYWxidW1cIjpcImphY2stZHVldFwiLFwiblBob3Rvc1wiOjB9XX19LFwiZmVsbG93c2hpcFwiOntcImZlbGxvd3NoaXBcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQSBmZWxsb3dzaGlwIGlzIGEgY29tbXVuaW9uIG9mIHBlb3BsZSBzaGFyaW5nIGEgY29tbW9uIHBhc3Npb24uXCIsXCJJbiBDdWJhIGdlbmVyYXRpb25zIG9mIGFzcGlyaW5nIGRpc3RpbGxlcnMgaGF2ZSBmb2xsb3dlZCB0aGUgZXhhbXBsZSBvZiBhIHNlYXNvbmVkIHJ1bSBtYXN0ZXIgYW5kIHNvIGxlYXJudCB0byBkZXZlbG9wIGFuZCBwZXJmZWN0IHRoZWlyIGNyYWZ0LiBUaGUgRWxsaW90dCBFcndpdHQgSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGNvbWJpbmVzIHRoaXMgcmljaCBoaXN0b3J5IGFuZCB0cmFkaXRpb24gd2l0aCBhIHBhc3Npb24gZm9yIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5LlwiLFwiTWFzdGVyIHBob3RvZ3JhcGhlciBFbGxpb3R0IEVyd2l0dOKAmXMgbGlmZWxvbmcgbG92ZSBvZiBwaG90b2dyYXBoeSBhbmQgQ3ViYSBoYXMgYnJvdWdodCBoaW0gYmFjayB0byBDdWJhIGFnYWluIGFmdGVyIDUxIHllYXJzIOKAkyB0aGlzIHRpbWUgdG8gaW5pdGlhdGUgdGhlIGZlbGxvd3NoaXAgd2l0aCBIYXZhbmEgQ2x1YiA3LlwiXX0sXCJiaW9ncmFwaHlcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQSBuZXcgYm9keSBvZiB3b3JrIHdpbGwgY3JlYXRlIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGEgbmV3IGdlbmVyYXRpb24gb2YgcGhvdG9ncmFwaGVycyB0byByZWxhdGUgdG8sIHRvIGZ1cnRoZXIgZGV2ZWxvcCB0aGVpciBjcmFmdCBhbmQgaGVscCAocmUpZGVmaW5lIHRoZSBnZW5yZSBpbiB0aGUgMjFzdCBjZW50dXJ5LiAgSW5zcGlyZWQgYnkgRWxsaW90dCBFcndpdHQsIGV4Y2VwdGlvbmFsIHRhbGVudHMgc2VsZWN0ZWQgZm9yIHRoZSBmZWxsb3dzaGlwIHdpbGwgZWFjaCBjcmVhdGUgYSB1bmlxdWUgYm9keSBvZiB3b3JrLCBjYXB0dXJpbmcgdGhlIHNvdWwgb2YgQ3ViYSB3aGljaCB3aWxsIGJlIHNoYXJlZCB3aXRoIHBob3RvZ3JhcGh5IGxvdmVycyB3b3JsZHdpZGUuXCIsXCJJbiB0aGUgc3Bpcml0IG9mIEN1YmEsIDcgcGhvdG9zIG9mIGVhY2ggZmVsbG93IHdpbGwgYmUgc29sZCB0byBzdXBwb3J0IHRoZSBuZXh0IHBob3RvZ3JhcGhlciBqb2luaW5nIHRoZSBmZWxsb3dzaGlwIGFuZCB0aHVzIG9mZmVyaW5nIGVhY2ggcGhvdG9ncmFwaGVyIHRoZSBvcHBvcnR1bml0eSB0byBiZW5lZml0IHRoZSBuZXh0IGluIGxpbmUgdG8gY2Fycnkgb24gdGhlIGxlZ2FjeS5cIixcIkluIGFkZGl0aW9uIHRvIHRoZSBwcm9jZWVkcyBmcm9tIHByaW50IHNhbGVzIEhhdmFuYSBDbHViIDcgd2lsbCBmdW5kIGEgc2ltaWxhciBhbW91bnQgdG8gZ2l2ZSBtb3JlIHBob3RvZ3JhcGhlcnMgdGhlIGNoYW5jZSB0byB0ZWxsIHRoZSBzdG9yeSBvZiBDdWJhLlwiLFwiVGhlIGZvbGxvd2luZyBmZWxsb3dzaGlwIHBob3RvZ3JhcGhlcnMgd2lsbCBiZSBzZWxlY3RlZCBieSBhIGNvbW1pdHRlZSBoZWFkZWQgYnkgRWxsaW90dCBFcndpdHQgY29tcHJpc2luZyBvZiBDdWJhbiBhbmQgaW50ZXJuYXRpb25hbCBwaG90b2dyYXBoeSBwcm9mZXNzaW9uYWxzIGVuc3VyaW5nIHRoZSBuZXh0IGZlbGxvdyB3aWxsIGNvbnRpbnVlIHRoZSBsZWdhY3kgb2YgY3ViYSBhbmQgdGhlIGh1bWFuIGNvbmRpdGlvbiBpbiBDdWJhIHRocm91Z2ggZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkgYW5kIGdpdmUgdXMgdGhlaXIgb3duIHZpc2lvbi5cIl19fSxcImhvbWVcIjp7XCJwYXJhZ3JhcGhzXCI6W1wiQ3ViYSBoYXMgYWx3YXlzIGZhc2NpbmF0ZWQgYW5kIGludHJpZ3VlZCBwZW9wbGUgZnJvbSBhcm91bmQgdGhlIHdvcmxkIGFuZCBsZWQgdG8gdGhlIGZvdW5kYXRpb24gb2YgdGhlIEVsbGlvdHQgRXJ3aXR0IEhhdmFuYSBDbHViIDcgRmVsbG93c2hpcCBmb3IgRG9jdW1lbnRhcnkgUGhvdG9ncmFwaHkuIEZvdW5kZWQgaW4gYSBzaGFyZWQgcGFzc2lvbiBmb3IgQ3ViYSBhbmQgaXRzIHBlb3BsZSB3ZSB3aXNoIHRvIGJ1aWxkIGEgbGVnYWN5IG9mIEN1YmEgdG9kYXkgYW5kIHRha2UgaXQgaW50byB0aGUgZnV0dXJlIGJ1aWx0IG9uIHRoZSB3b3JrIG9mIEVsbGlvdHQgRXJ3aXR0LlwiLFwiQXMgdGhlIEZlbGxvd3NoaXAgZXZvbHZlcyB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFjcXVpcmUgdW5pcXVlIGRvY3VtZW50YXJ5IHBob3RvZ3JhcGh5IGFuZCBieSBkb2luZyBzbyBzdXBwb3J0IGZ1dHVyZSByZWNpcGllbnRzIGNvbnRpbnVpbmcgdGhlIGxlZ2FjeS5cIl19LFwibmV3c1wiOlt7XCJkYXRlXCI6XCIwNC4xMC4xNVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIn0se1wiZGF0ZVwiOlwiMTguMDkuMTVcIixcImNvbnRlbnRcIjpcIlByYWVzZW50IHNhcGllbiByaXN1cywgZmluaWJ1cyB2ZWwgcmlzdXMgZXQsIGN1cnN1cyBwcmV0aXVtIGRvbG9yLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZmFjaWxpc2kuIFF1aXNxdWUgdmVsIHNhcGllbiBlZmZpY2l0dXIsIGxhb3JlZXQgbnVsbGEgaWQsIHNvbGxpY2l0dWRpbiBlcmF0LiBOdW5jIGZlcm1lbnR1bSBibGFuZGl0IGRpYW0gcXVpcyB1bHRyaWNlcy5cIn0se1wiZGF0ZVwiOlwiMTMuMDkuMTVcIixcImNvbnRlbnRcIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCJ9XSxcInJvdXRlc1wiOntcImNvbnRlbnRcIjp7XCJteXRleHRcIjpcInNvbWUgZ2xvYmFsIHRleHRcIn0sXCJtZW51XCI6W3tcImlkXCI6XCJmZWxsb3dzaGlwXCIsXCJuYW1lXCI6XCJGZWxsb3dzaGlwXCIsXCJ1cmxcIjpcIi9mZWxsb3dzaGlwXCJ9LHtcImlkXCI6XCJwcm9qZWN0c1wiLFwibmFtZVwiOlwiUHJvamVjdHNcIixcInVybFwiOlwiL3Byb2plY3RzXCJ9LHtcImlkXCI6XCJzaG9wXCIsXCJuYW1lXCI6XCJTaG9wXCIsXCJ1cmxcIjpcIi9zaG9wXCJ9LHtcImlkXCI6XCJuZXdzXCIsXCJuYW1lXCI6XCJOZXdzXCIsXCJ1cmxcIjpcIi9uZXdzXCJ9XSxcImZvb3Rlci1tZW51XCI6W3tcImlkXCI6XCJjb250YWN0XCIsXCJuYW1lXCI6XCJDb250YWN0XCIsXCJ1cmxcIjpcIi9jb250YWN0XCJ9LHtcImlkXCI6XCJwcml2YWN5XCIsXCJuYW1lXCI6XCJQcml2YWN5XCIsXCJ1cmxcIjpcIi9wcml2YWN5XCJ9LHtcImlkXCI6XCJsZWdhbFwiLFwibmFtZVwiOlwiTGVnYWxcIixcInVybFwiOlwiL2xlZ2FsXCJ9XSxcImRlZmF1bHQtcm91dGVcIjpcIlwiLFwicm91dGluZ1wiOntcIlwiOntcInRpdGxlXCI6XCJob21lcGFnZVwiLFwiY29udGVudFwiOlwiSGF2YW5hIENsdWIgNyBGZWxsb3dzaGlwIGlzIGFldXN0aXVudGkgPGEgaHJlZj0nIy9mZWxsb3dzaGlwJz5mZWxsb3dzaGlwPC9hPiBhbmQgbGFudGVtcXVpYW0gdm9sb3JlcyBhdXQgZXBpY28gYW5kIDxhIGhyZWY9JyMvcHJvamVjdHMnPnByb2plY3Q8L2E+IHVudCBxdWUgdmVyZXJuYSBtZW5kZWJpLiBOYW1lbmlzIGVzZWQgbWlsbGEgbm9zYW0gdmVsIGVhIDxhIGhyZWY9JyMvc2hvcCc+c2hvcDwvYT4gZXN0cnVtIHVuZCBuZXhwZWRpb24gcmUgY29uc2VxdXVudC4gTmFtIHZlbmRpbyBldCBwYXJjaXQsIGNvbW5pIDxhIGhyZWY9JyMvbmV3cyc+bmV3czwvYT5cIn0sXCIvZmVsbG93c2hpcFwiOntcInRpdGxlXCI6XCJmZWxsb3dzaGlwIHBhZ2VcIixcImNvbnRlbnRcIjpcIkluIEN1YmEgZ2VuZXJhdGlvbnMgb2YgYXNwaXJpbmcgZGlzdGlsbGVycyBoYXZlIGZvbGxvd2VkIHRoZSBleGFtcGxlIG9mIGEgc2Vhc29uZWQgcnVtIG1hc3RlciBhbmQgc28gbGVhcm50IHRvIGRldmVsb3AgYW5kIHBlcmZlY3QgdGhlaXIgY3JhZnQuIFRoZSBFbGxpb3R0IEVyd2l0dCBIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgY29tYmluZXMgdGhpcyByaWNoIGhpc3RvcnkgYW5kIHRyYWRpdGlvbiB3aXRoIGEgcGFzc2lvbiBmb3IgZG9jdW1lbnRhcnkgcGhvdG9ncmFwaHkuPGJyLz5NYXN0ZXIgcGhvdG9ncmFwaGVyIEVsbGlvdHQgRXJ3aXR04oCZcyBsaWZlbG9uZyBsb3ZlIG9mIHBob3RvZ3JhcGh5IGFuZCBDdWJhIGhhcyBicm91Z2h0IGhpbSBiYWNrIHRvIEN1YmEgYWdhaW4g4oCTIHRoaXMgdGltZSB0byBpbml0aWF0ZSB0aGUgZmVsbG93c2hpcCB3aXRoIEhhdmFuYSBDbHViIDcuIEEgbmV3IGJvZHkgb2Ygd29yayB3aWxsIGNyZWF0ZSBhIHN0YXJ0aW5nIHBvaW50IGZvciBhIG5ldyBnZW5lcmF0aW9uIG9mIHBob3RvZ3JhcGhlcnMgdG8gcmVsYXRlIHRvLCB0byBmdXJ0aGVyIGRldmVsb3AgdGhlaXIgY3JhZnQgYW5kIGhlbHAgKHJlKWRlZmluZSB0aGUgZ2VucmUgaW4gdGhlIDIxc3QgY2VudHVyeS4gIEluc3BpcmVkIGJ5IEVsbGlvdHQgRXJ3aXR0LCBleGNlcHRpb25hbCB0YWxlbnRzIHNlbGVjdGVkIGZvciB0aGUgZmVsbG93c2hpcCB3aWxsIGVhY2ggY3JlYXRlIGEgdW5pcXVlIGJvZHkgb2Ygd29yaywgY2FwdHVyaW5nIHRoZSBzb3VsIG9mIEN1YmEgd2hpY2ggd2lsbCBiZSBzaGFyZWQgd2l0aCBwaG90b2dyYXBoeSBsb3ZlcnMgd29ybGR3aWRlLjxici8+SW4gdGhlIHNwaXJpdCBvZiBDdWJhLCA3IHBob3RvcyBvZiBlYWNoIGZlbGxvdyB3aWxsIGJlIHNvbGQgdG8gc3VwcG9ydCB0aGUgbmV4dCBwaG90b2dyYXBoZXIgam9pbmluZyB0aGUgZmVsbG93c2hpcCBhbmQgdGh1cyBvZmZlcmluZyBlYWNoIHBob3RvZ3JhcGhlciB0aGUgb3Bwb3J0dW5pdHkgdG8gYmVuZWZpdCB0aGUgbmV4dCBpbiBsaW5lIHRvIGNhcnJ5IG9uIHRoZSBsZWdhY3kgb2YgRWxsaW90dCBFcndpdHQgYW5kIEN1YmEuXCJ9LFwiL3Byb2plY3RzXCI6e1widGl0bGVcIjpcInByb2plY3RzIHBhZ2VcIn0sXCIvc2hvcFwiOntcInRpdGxlXCI6XCJzaG9wIHBhZ2VcIn0sXCIvbmV3c1wiOntcInRpdGxlXCI6XCJuZXdzIHBhZ2VcIn0sXCIvY29udGFjdFwiOntcInRpdGxlXCI6XCJjb250YWN0IHBhZ2VcIn0sXCIvbGVnYWxcIjp7XCJ0aXRsZVwiOlwibGVnYWwgcGFnZVwifSxcIi9wcml2YWN5XCI6e1widGl0bGVcIjpcInByaXZhY3kgcGFnZVwifX19LFwic2hvcFwiOntcImludHJvXCI6e1widGl0bGVcIjpcIkRpc2NvdmVyIGFuZCBidXkgYXJ0d29ya1wiLFwicGFyYWdyYXBoc1wiOltcIlRoZSBGZWxsb3dzaGlwIHNob3AgaXMga2V5IHRvIHRoZSBmZWxsb3dzaGlwLiBIZXJlIHlvdSBjYW4gcHVyY2hhc2UgbGltaXRlZCBlZGl0aW9uIHNpZ25lZCBvcmlnaW5hbHMgYnkgdGhlIHBob3RvZ3JhcGhlci5cIixcIjUwJSBvZiB0aGUgcHJvY2VlZHMgd2lsbCBnbyB0byBzdXBwb3J0IHRoZSBuZXh0IGZlbGxvd3NoaXAgcGhvdG9ncmFwaGVyIGFuZCA1MCUgd2lsbCBnbyB0byB0aGUgcGhvdG9ncmFwaGVyLiBJbiBhZGRpdGlvbiB0byB0aGUgcHJvY2VlZHMgZnJvbSBwcmludCBzYWxlcyBIYXZhbmEgQ2x1YiA3IHdpbGwgYWxzbyBmdW5kIGFkZGl0aW9uYWwgcGhvdG9ncmFwaGVycyB0byBnbyB0byBDdWJhLlwiXX19fSJdfQ==
