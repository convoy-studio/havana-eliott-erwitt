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

var AppTemplate = (function (_React$Component) {
	_inherits(AppTemplate, _React$Component);

	function AppTemplate() {
		_classCallCheck(this, AppTemplate);

		_get(Object.getPrototypeOf(AppTemplate.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(AppTemplate, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'template' },
				_react2['default'].createElement(_FrontContainer2['default'], null),
				_react2['default'].createElement(_PagesContainer2['default'], null)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			GlobalEvents.resize();
		}
	}]);

	return AppTemplate;
})(_react2['default'].Component);

exports['default'] = AppTemplate;
module.exports = exports['default'];

},{"./components/FrontContainer":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/FrontContainer.js","./components/PagesContainer":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/PagesContainer.js","./constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/actions/AppActions.js":[function(require,module,exports){
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

},{"./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/FrontContainer.js":[function(require,module,exports){
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
						{ href: pathUrl },
						item.name
					)
				);
			}).reverse();
			var footerMenuData = _AppStore2['default'].footerMenuContent();
			var footerMenuItems = footerMenuData.map(function (item, index) {
				var pathUrl = '#' + item.url;
				return _react2['default'].createElement(
					'li',
					{ key: index },
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
							{ href: '#/home' },
							'Elliott Erwitt — Havana Club 7',
							_react2['default'].createElement('br', null),
							'Fellowship'
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

var _News = require('./pages/News');

var _News2 = _interopRequireDefault(_News);

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
					type = _Shop2['default'];
					break;
				case 'news':
					type = _News2['default'];
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
				case 'home':
					type = _Home2['default'];
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

},{"./../../pager/components/BasePager":"/Users/nicolas/Developement/freelance/Havana/src/js/pager/components/BasePager.js","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","./../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./pages/Contact":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js","./pages/Fellowship":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Fellowship.js","./pages/Gallery":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Gallery.js","./pages/Home":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js","./pages/Legal":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Legal.js","./pages/News":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/News.js","./pages/Notfound":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Notfound.js","./pages/Privacy":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js","./pages/Project":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Project.js","./pages/Projects":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js","./pages/Shop":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Contact.js":[function(require,module,exports){
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

var Fellowship = (function (_Page) {
	_inherits(Fellowship, _Page);

	function Fellowship(props) {
		_classCallCheck(this, Fellowship);

		_get(Object.getPrototypeOf(Fellowship.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');
	}

	_createClass(Fellowship, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'fellowshipPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					content.content
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Fellowship.prototype), 'componentDidMount', this).call(this);
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

var Gallery = (function (_Page) {
	_inherits(Gallery, _Page);

	function Gallery(props) {
		_classCallCheck(this, Gallery);

		_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this, props);

		this.props = props;

		(0, _domquery2['default'])('body').removeClass('body--white').addClass('body--black');

		this.state = {
			photos: []
		};
	}

	_createClass(Gallery, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
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
						this.state.photos
					)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Gallery.prototype), 'componentDidMount', this).call(this);

			var artistData = _AppStore2['default'].artistContent(this.props.idSection),
			    project = artistData.projects[0],
			    filename = undefined,
			    file = undefined,
			    fileUrl = undefined;

			this.photos = [];
			this.nImageLoaded = 0;
			this.max = project.nPhotos;

			for (var i = 1; i <= this.max; ++i) {
				filename = i < 10 ? '0' + i : i;
				fileUrl = './assets/images/albums/' + project.album + '/' + filename + '.jpg';

				file = new Image();
				// file.onload = this.onImageLoaded.bind(this, {
				// 	url: fileUrl,
				// 	index: i
				// });
				file.onload = this.onImageLoaded.bind(this);
				file.src = fileUrl;
			}
		}
	}, {
		key: 'onImageLoaded',
		value: function onImageLoaded(params) {
			this.nImageLoaded++;

			if (params.path[0].height >= params.path[0].width * 1.5) {
				this.photos.push(_react2['default'].createElement(
					'div',
					{ className: 'gallery__item', key: this.nImageLoaded },
					_react2['default'].createElement('img', { className: 'gallery__image', src: params.path[0].src })
				));
			} else {
				this.photos.push(_react2['default'].createElement(
					'div',
					{ className: 'gallery__item gallery__item--large', key: this.nImageLoaded },
					_react2['default'].createElement('img', { className: 'gallery__image', src: params.path[0].src })
				));
			}

			if (this.nImageLoaded >= this.max) {
				this.setState({
					'photos': this.photos
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
	}]);

	return Gallery;
})(_Page3['default']);

exports['default'] = Gallery;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Home.js":[function(require,module,exports){
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
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'homepage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'video' },
					_react2['default'].createElement('video', { autoPlay: true, loop: true, className: 'video__file', src: './assets/videos/bg-home.mp4' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement('p', { dangerouslySetInnerHTML: { __html: content.content } })
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
			var content = _AppStore2['default'].pageContent();
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

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Privacy.js":[function(require,module,exports){
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

var Project = (function (_Page) {
	_inherits(Project, _Page);

	function Project(props) {
		_classCallCheck(this, Project);

		_get(Object.getPrototypeOf(Project.prototype), 'constructor', this).call(this, props);
		this.props = props;
		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Project, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent(),
			    artistData = _AppStore2['default'].artistContent(this.props.idSection),
			    project = artistData.projects[0],
			    photos = [],
			    file = undefined;
			for (var i = 1; i <= project.nPhotos; ++i) {
				file = i < 10 ? '0' + i : i;
				photos.push(_react2['default'].createElement(
					'div',
					{ className: 'project__photo', key: i },
					_react2['default'].createElement('img', { src: './assets/images/albums/' + project.album + '/' + file + '.jpg' })
				));
			}
			return _react2['default'].createElement(
				'div',
				{ id: 'projectPage', ref: 'page-wrapper', className: 'page' },
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
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'section',
						{ className: 'project' },
						_react2['default'].createElement(
							'h2',
							{ className: 'project__artist text text--title' },
							artistData.name
						),
						_react2['default'].createElement(
							'h1',
							{ className: 'project__title text text--subtitle' },
							project.title
						),
						_react2['default'].createElement(
							'p',
							{ className: 'project__desc text text--small' },
							project.desc
						),
						_react2['default'].createElement(
							'div',
							{ className: 'project__album' },
							photos
						),
						_react2['default'].createElement(
							'h2',
							{ className: 'project__artist text text--title' },
							artistData.name
						),
						_react2['default'].createElement(
							'p',
							{ className: 'project__bio text text--small' },
							artistData.bio
						)
					)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Project.prototype), 'componentDidMount', this).call(this);
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
	}]);

	return Project;
})(_Page3['default']);

exports['default'] = Project;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Projects.js":[function(require,module,exports){
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

var Projects = (function (_Page) {
	_inherits(Projects, _Page);

	function Projects(props) {
		_classCallCheck(this, Projects);

		_get(Object.getPrototypeOf(Projects.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Projects, [{
		key: 'render',
		value: function render() {
			var artistsData = _AppStore2['default'].artistsContent();
			var artistsItems = [];
			for (var artist in artistsData) {
				artistsItems.push(_react2['default'].createElement(
					'li',
					{ key: artist },
					_react2['default'].createElement(
						'a',
						{ href: '#/project/' + artist },
						artistsData[artist].name
					)
				));
			}
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'projectsPage', ref: 'page-wrapper', className: 'page' },
				_react2['default'].createElement(
					'div',
					{ className: 'page__content' },
					_react2['default'].createElement(
						'ul',
						null,
						artistsItems
					)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Projects.prototype), 'componentDidMount', this).call(this);
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
	}]);

	return Projects;
})(_Page3['default']);

exports['default'] = Projects;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/pages/Shop.js":[function(require,module,exports){
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

var Shop = (function (_Page) {
	_inherits(Shop, _Page);

	function Shop(props) {
		_classCallCheck(this, Shop);

		_get(Object.getPrototypeOf(Shop.prototype), 'constructor', this).call(this, props);
		(0, _domquery2['default'])('body').removeClass('body--black').addClass('body--white');
	}

	_createClass(Shop, [{
		key: 'render',
		value: function render() {
			var content = _AppStore2['default'].pageContent();
			return _react2['default'].createElement(
				'div',
				{ id: 'shopPage', ref: 'page-wrapper', className: 'page' },
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
			_get(Object.getPrototypeOf(Shop.prototype), 'componentDidMount', this).call(this);
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
	}]);

	return Shop;
})(_Page3['default']);

exports['default'] = Shop;
module.exports = exports['default'];

},{"./../../stores/AppStore":"/Users/nicolas/Developement/freelance/Havana/src/js/app/stores/AppStore.js","./../Page":"/Users/nicolas/Developement/freelance/Havana/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js":[function(require,module,exports){
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
			var basicSection = _crossroads2['default'].addRoute('{page}', this._onFirstDegreeURLHandler.bind(this), 3);
			// basicSection.rules = {
			// 	page : ['home', '404', 'fellowship', 'projects', 'shop', 'news', 'contact', 'legal', 'privacy'] //valid sections
			// }

			var projectSection = _crossroads2['default'].addRoute('{page}/{id}', this._onSecondDegreeURLHandler.bind(this), 3);
			var validIDs = [];
			for (var artist in _GlobalData2['default'].artists) {
				validIDs.push(artist);
			}
			projectSection.rules = {
				page: ['project'],
				id: validIDs
			};

			var gallerySection = _crossroads2['default'].addRoute('{page}/{id}/{sectionId}', this._onThirdDegreeURLHandler.bind(this), 5);
			gallerySection.rules = {
				id: validIDs
			};
		}
	}, {
		key: '_onFirstDegreeURLHandler',
		value: function _onFirstDegreeURLHandler(pageId) {
			this._assignRoute(pageId);
		}
	}, {
		key: '_onSecondDegreeURLHandler',
		value: function _onSecondDegreeURLHandler(pageId, detailId) {
			this._assignRoute(detailId);
		}
	}, {
		key: '_onThirdDegreeURLHandler',
		value: function _onThirdDegreeURLHandler(pageId, detailId, sectionId) {
			this._assignRoute(detailId);
		}
	}, {
		key: '_onWorksURLHandler',
		value: function _onWorksURLHandler(workId) {
			this._assignRoute(workId);
		}
	}, {
		key: '_onBlogPostURLHandler',
		value: function _onBlogPostURLHandler(postId) {
			this._assignRoute(postId);
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
			_AppActions2['default'].pageHasherChanged();
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

},{"./../../../../www/data/data":"/Users/nicolas/Developement/freelance/Havana/www/data/data.json","./../constants/AppConstants":"/Users/nicolas/Developement/freelance/Havana/src/js/app/constants/AppConstants.js","./../dispatchers/AppDispatcher":"/Users/nicolas/Developement/freelance/Havana/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/nicolas/Developement/freelance/Havana/src/js/app/services/Router.js","eventemitter2":"eventemitter2","object-assign":"object-assign"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/Autobind.js":[function(require,module,exports){
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

},{"is":"is"}],"/Users/nicolas/Developement/freelance/Havana/src/js/app/utils/raf.js":[function(require,module,exports){
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

// Actions

var _objectAssign2 = _interopRequireDefault(_objectAssign);

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
module.exports={"artists":{"elliott-erwitt":{"name":"Elliott Erwitt","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Cuba 1964","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"elliott-erwitt","nPhotos":8}]},"qiu-yang":{"name":"Qiu Yang","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"qiu-yang","nPhotos":6}]},"philip-sinden":{"name":"Philip Sinden","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 2","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"philip-sinden","nPhotos":4}]},"jack-duet":{"name":"Jack Duet","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.","projects":[{"title":"Lorem ipsum 3","desc":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices.","album":"jack-duet","nPhotos":0}]}},"news":[{"date":"04.10.15","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},{"date":"18.09.15","content":"Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices."}],"routes":{"content":{"mytext":"some global text"},"menu":[{"id":"fellowship","name":"Fellowship","url":"/fellowship"},{"id":"projects","name":"Projects","url":"/projects"},{"id":"shop","name":"Shop","url":"/shop"},{"id":"news","name":"News","url":"/news"}],"footer-menu":[{"id":"contact","name":"Contact","url":"/contact"},{"id":"legal","name":"Legal","url":"/legal"},{"id":"privacy","name":"Privacy","url":"/privacy"}],"default-route":"/home","routing":{"/home":{"title":"homepage","content":"Havana Club 7 Fellowship is aeustiunti <a href='#/fellowship'>fellowship</a> and lantemquiam volores aut epico and <a href='#/projects'>project</a> unt que vererna mendebi. Namenis esed milla nosam vel ea <a href='#/shop'>shop</a> estrum und nexpedion re consequunt. Nam vendio et parcit, comni <a href='#/news'>news</a>"},"/fellowship":{"title":"fellowship page","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sapien risus, finibus vel risus et, cursus pretium dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Quisque vel sapien efficitur, laoreet nulla id, sollicitudin erat. Nunc fermentum blandit diam quis ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit nisi, porta vel fermentum vitae, commodo et massa. Ut vulputate bibendum porttitor. In pretium urna ut efficitur tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},"/projects":{"title":"projects page"},"/shop":{"title":"shop page"},"/news":{"title":"news page"},"/contact":{"title":"contact page"},"/legal":{"title":"legal page"},"/privacy":{"title":"privacy page"}}}}
},{}]},{},["/Users/nicolas/Developement/freelance/Havana/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvTWFpbi5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvQXBwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL0Zyb250Q29udGFpbmVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL1BhZ2UuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvUGFnZXNDb250YWluZXIuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQ29udGFjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9GZWxsb3dzaGlwLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL0dhbGxlcnkuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9MZWdhbC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9OZXdzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL05vdGZvdW5kLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb21wb25lbnRzL3BhZ2VzL1ByaXZhY3kuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUHJvamVjdC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9Qcm9qZWN0cy5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9TaG9wLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC9zZXJ2aWNlcy9HbG9iYWxFdmVudHMuanMiLCIvVXNlcnMvbmljb2xhcy9EZXZlbG9wZW1lbnQvZnJlZWxhbmNlL0hhdmFuYS9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL1BhZ2VyLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9uaWNvbGFzL0RldmVsb3BlbWVudC9mcmVlbGFuY2UvSGF2YW5hL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL25pY29sYXMvRGV2ZWxvcGVtZW50L2ZyZWVsYW5jZS9IYXZhbmEvc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZVBhZ2VyLmpzIiwid3d3L2RhdGEvZGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7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LGtCQUFrQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzVFLFVBaEZNLFVBQVUsQ0FnRkwsR0FBRyxDQUFDLE9BaEZpQixjQUFjLENBZ0ZoQixtQkFBbUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUM5RSxPQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDdEMsT0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0dBQ3RDOzs7UUFoRm1CLFNBQVM7R0FBUyxtQkFBTSxTQUFTOztxQkFBakMsU0FBUzs7OztBQ0o5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgKHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBBcHAgZnJvbSAnQXBwJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgUGFnZXIgZnJvbSAnUGFnZXInXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBGYXN0Q2xpY2sgZnJvbSAnZmFzdGNsaWNrJ1xuXG5GYXN0Q2xpY2soZG9jdW1lbnQuYm9keSlcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0Ly8gSW5pdCByb3V0ZXJcblx0XHR2YXIgcm91dGVyID0gbmV3IFJvdXRlcigpXG5cdFx0cm91dGVyLmluaXQoKVxuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cdFx0XG5cdFx0Ly8gUmVuZGVyIHJlYWN0XG5cdFx0UmVhY3QucmVuZGVyKFxuXHRcdFx0PEFwcFRlbXBsYXRlIC8+LFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuICAgIFx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBGcm9udENvbnRhaW5lciBmcm9tICdGcm9udENvbnRhaW5lcidcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICdQYWdlc0NvbnRhaW5lcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3RlbXBsYXRlJz5cblx0XHRcdFx0PEZyb250Q29udGFpbmVyIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEdsb2JhbEV2ZW50cy5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJvbnRDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgbWVudURhdGEgPSBBcHBTdG9yZS5tZW51Q29udGVudCgpXG5cdFx0bGV0IG1lbnVJdGVtcyA9IG1lbnVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRsZXQgcGF0aFVybCA9ICcjJyArIGl0ZW0udXJsXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J2hlYWRlcl9faXRlbScga2V5PXtpbmRleH0+PGEgaHJlZj17cGF0aFVybH0+e2l0ZW0ubmFtZX08L2E+PC9saT5cblx0XHRcdClcblx0XHR9KS5yZXZlcnNlKClcblx0XHRsZXQgZm9vdGVyTWVudURhdGEgPSBBcHBTdG9yZS5mb290ZXJNZW51Q29udGVudCgpXG5cdFx0bGV0IGZvb3Rlck1lbnVJdGVtcyA9IGZvb3Rlck1lbnVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRsZXQgcGF0aFVybCA9ICcjJyArIGl0ZW0udXJsXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXtwYXRoVXJsfT57aXRlbS5uYW1lfTwvYT48L2xpPlxuXHRcdFx0KVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nZnJvbnRDb250YWluZXInIGNsYXNzTmFtZT0nZnJvbnQtY29udGFpbmVyJyByZWY9J2Zyb250LWNvbnRhaW5lcic+XG5cdFx0XHRcdDxoZWFkZXIgaWQ9J2hlYWRlcicgY2xhc3NOYW1lPSdoZWFkZXInPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2hlYWRlcl9fdGl0bGUnPjxhIGhyZWY9JyMvaG9tZSc+RWxsaW90dCBFcndpdHQg4oCUIEhhdmFuYSBDbHViIDc8YnIvPkZlbGxvd3NoaXA8L2E+PC9oMT5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0naGVhZGVyX19tZW51Jz5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2hlYWRlcl9fbGlzdCc+XG5cdFx0XHRcdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PGZvb3RlciBpZD0nZm9vdGVyJyBjbGFzc05hbWU9J2Zvb3Rlcic+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e2Zvb3Rlck1lbnVJdGVtc31cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0Ly8gVXBkYXRlIG9yIGhpZ2hsaWdodCBwYXJ0cyBvZiBpbnRlcmZhY2UgZGVwZW5kcyB0aGUgcm91dGVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJ0Jhc2VQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHRzdXBlci5zZXR1cEFuaW1hdGlvbnMoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IEZlbGxvd3NoaXAgZnJvbSAnRmVsbG93c2hpcCdcbmltcG9ydCBQcm9qZWN0cyBmcm9tICdQcm9qZWN0cydcbmltcG9ydCBQcm9qZWN0IGZyb20gJ1Byb2plY3QnXG5pbXBvcnQgR2FsbGVyeSBmcm9tICdHYWxsZXJ5J1xuaW1wb3J0IFNob3AgZnJvbSAnU2hvcCdcbmltcG9ydCBOZXdzIGZyb20gJ05ld3MnXG5pbXBvcnQgQ29udGFjdCBmcm9tICdDb250YWN0J1xuaW1wb3J0IExlZ2FsIGZyb20gJ0xlZ2FsJ1xuaW1wb3J0IFByaXZhY3kgZnJvbSAnUHJpdmFjeSdcbmltcG9ydCBOb3Rmb3VuZCBmcm9tICdOb3Rmb3VuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNDb250YWluZXIgZXh0ZW5kcyBCYXNlUGFnZXIge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0bGV0IGhhc2ggPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG5cdFx0bGV0IHR5cGUgPSB1bmRlZmluZWRcblx0XHRsZXQgaWQgPSB1bmRlZmluZWRcblx0XHRzd2l0Y2goaGFzaC5wYXJlbnQpIHtcblx0XHRcdGNhc2UgJ2ZlbGxvd3NoaXAnOlxuXHRcdFx0XHR0eXBlID0gRmVsbG93c2hpcFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncHJvamVjdHMnOlxuXHRcdFx0XHR0eXBlID0gUHJvamVjdHNcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3Byb2plY3QnOlxuXHRcdFx0XHRpZiAoaGFzaC5wYXJ0cy5sZW5ndGggPiAyKSB7XG5cdFx0XHRcdFx0aWYgKGhhc2gucGFydHNbMl0gPT09ICdnYWxsZXJ5Jykge1xuXHRcdFx0XHRcdFx0dHlwZSA9IEdhbGxlcnlcblx0XHRcdFx0XHRcdGlkID0gaGFzaC50YXJnZXRJZFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB6b29tIHN1ciB1bmUgcGhvdG9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9IFByb2plY3Rcblx0XHRcdFx0XHRpZCA9IGhhc2gudGFyZ2V0SWRcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnc2hvcCc6XG5cdFx0XHRcdHR5cGUgPSBTaG9wXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICduZXdzJzpcblx0XHRcdFx0dHlwZSA9IE5ld3Ncblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NvbnRhY3QnOlxuXHRcdFx0XHR0eXBlID0gQ29udGFjdFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnbGVnYWwnOlxuXHRcdFx0XHR0eXBlID0gTGVnYWxcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3ByaXZhY3knOlxuXHRcdFx0XHR0eXBlID0gUHJpdmFjeVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnaG9tZSc6XG5cdFx0XHRcdHR5cGUgPSBIb21lXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0eXBlID0gTm90Zm91bmRcblx0XHR9XG5cdFx0dGhpcy5zZXR1cE5ld0NvbXBvbmVudChoYXNoLnBhcmVudCwgdHlwZSwgaWQpXG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nY29udGFjdFBhZ2UnIHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2UnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0VGhpcyBpcyBhbiB7Y29udGVudC50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWxsb3dzaGlwIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdmZWxsb3dzaGlwUGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz57Y29udGVudC5jb250ZW50fTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzXG5cblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblxuXHRcdHRoaXMuc3RhdGUgPSB7IFxuXHRcdFx0cGhvdG9zOiBbXVxuXHRcdH07XG5cdH1cblx0XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdnYWxsZXJ5UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51Jz48YSBocmVmPXsnIy9wcm9qZWN0LycrdGhpcy5wcm9wcy5pZFNlY3Rpb259PkJhY2sgdG8gZ2FsbGVyeTwvYT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5Jz5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnBob3Rvc31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cblx0XHRsZXQgYXJ0aXN0RGF0YSA9IEFwcFN0b3JlLmFydGlzdENvbnRlbnQodGhpcy5wcm9wcy5pZFNlY3Rpb24pLFxuXHRcdFx0cHJvamVjdCA9IGFydGlzdERhdGEucHJvamVjdHNbMF0sXG5cdFx0XHRmaWxlbmFtZSwgZmlsZSwgZmlsZVVybFxuXHRcdFxuXHRcdHRoaXMucGhvdG9zID0gW11cblx0XHR0aGlzLm5JbWFnZUxvYWRlZCA9IDBcblx0XHR0aGlzLm1heCA9IHByb2plY3QublBob3Rvc1xuXHRcdFxuXHRcdGZvciAobGV0IGk9MTsgaTw9dGhpcy5tYXg7ICsraSkge1xuXHRcdFx0ZmlsZW5hbWUgPSAoaTwxMCk/JzAnK2k6aVxuXHRcdFx0ZmlsZVVybCA9ICcuL2Fzc2V0cy9pbWFnZXMvYWxidW1zLycrcHJvamVjdC5hbGJ1bSsnLycrZmlsZW5hbWUrJy5qcGcnXG5cblx0XHRcdGZpbGUgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdC8vIGZpbGUub25sb2FkID0gdGhpcy5vbkltYWdlTG9hZGVkLmJpbmQodGhpcywge1xuXHRcdFx0Ly8gXHR1cmw6IGZpbGVVcmwsXG5cdFx0XHQvLyBcdGluZGV4OiBpXG5cdFx0XHQvLyB9KTtcblx0XHRcdGZpbGUub25sb2FkID0gdGhpcy5vbkltYWdlTG9hZGVkLmJpbmQodGhpcyk7XG5cdFx0XHRmaWxlLnNyYyA9IGZpbGVVcmw7XG5cdFx0fVxuXHR9XG5cdFxuXHRvbkltYWdlTG9hZGVkKHBhcmFtcykge1xuXHRcdHRoaXMubkltYWdlTG9hZGVkKys7XG5cblx0XHRpZiAocGFyYW1zLnBhdGhbMF0uaGVpZ2h0ID49IHBhcmFtcy5wYXRoWzBdLndpZHRoKjEuNSkge1xuXHRcdFx0dGhpcy5waG90b3MucHVzaCg8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeV9faXRlbScga2V5PXt0aGlzLm5JbWFnZUxvYWRlZH0+PGltZyBjbGFzc05hbWU9J2dhbGxlcnlfX2ltYWdlJyBzcmM9e3BhcmFtcy5wYXRoWzBdLnNyY30+PC9pbWc+PC9kaXY+KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBob3Rvcy5wdXNoKDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5X19pdGVtIGdhbGxlcnlfX2l0ZW0tLWxhcmdlJyBrZXk9e3RoaXMubkltYWdlTG9hZGVkfT48aW1nIGNsYXNzTmFtZT0nZ2FsbGVyeV9faW1hZ2UnIHNyYz17cGFyYW1zLnBhdGhbMF0uc3JjfT48L2ltZz48L2Rpdj4pXG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLm5JbWFnZUxvYWRlZCA+PSB0aGlzLm1heCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdCdwaG90b3MnOiB0aGlzLnBob3Rvc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblxuXHRyZXNpemUoKSB7XG5cdFx0bGV0IHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdGxldCB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0td2hpdGUnKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS1ibGFjaycpXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdGxldCB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IHk6IHdpbmRvdy5pbm5lckhlaWdodCwgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8od3JhcHBlciwgMSwgeyB5OiB3aW5kb3cuaW5uZXJIZWlnaHQsIG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdob21lcGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XG5cdFx0XHRcdFx0PHZpZGVvIGF1dG9QbGF5IGxvb3AgY2xhc3NOYW1lPSd2aWRlb19fZmlsZScgc3JjPScuL2Fzc2V0cy92aWRlb3MvYmctaG9tZS5tcDQnPjwvdmlkZW8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCc+XG5cdFx0XHRcdFx0PHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnQuY29udGVudH19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2xlZ2FsUGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHRUaGlzIGlzIGFuIHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3MgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRkb20oJ2JvZHknKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdib2R5LS13aGl0ZScpXG5cdFx0XHQuYWRkQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IG5ld3NEYXRhID0gQXBwU3RvcmUubmV3c0NvbnRlbnQoKVxuXHRcdGxldCBuZXdzSXRlbXMgPSBuZXdzRGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8YXJ0aWNsZSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fZGF0ZSc+e2l0ZW0uZGF0ZX08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3c19fY29udGVudCc+e2l0ZW0uY29udGVudH08L2Rpdj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0KVxuXHRcdH0pXG5cdFx0bGV0IGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J25ld3NQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlX19jb250ZW50XCI+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSduZXdzJz57bmV3c0l0ZW1zfTwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3Rmb3VuZCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nNDA0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHQ8cD5FcnJvciA0MDQg4oCUIFBhZ2Ugbm90IGZvdW5kPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3kgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3ByaXZhY3lQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdFRoaXMgaXMgYW4ge2NvbnRlbnQudGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c3VwZXIuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMucHJvcHMgPSBwcm9wc1xuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KCksXG5cdFx0XHRhcnRpc3REYXRhID0gQXBwU3RvcmUuYXJ0aXN0Q29udGVudCh0aGlzLnByb3BzLmlkU2VjdGlvbiksXG5cdFx0XHRwcm9qZWN0ID0gYXJ0aXN0RGF0YS5wcm9qZWN0c1swXSxcblx0XHRcdHBob3RvcyA9IFtdLFxuXHRcdFx0ZmlsZSA9IHVuZGVmaW5lZFxuXHRcdGZvciAobGV0IGk9MTsgaTw9cHJvamVjdC5uUGhvdG9zOyArK2kpIHtcblx0XHRcdGZpbGUgPSAoaTwxMCk/JzAnK2k6aVxuXHRcdFx0cGhvdG9zLnB1c2goPGRpdiBjbGFzc05hbWU9J3Byb2plY3RfX3Bob3RvJyBrZXk9e2l9PjxpbWcgc3JjPXsnLi9hc3NldHMvaW1hZ2VzL2FsYnVtcy8nK3Byb2plY3QuYWxidW0rJy8nK2ZpbGUrJy5qcGcnfT48L2ltZz48L2Rpdj4pXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwcm9qZWN0UGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtZW51Jz48YSBocmVmPXsnIy9wcm9qZWN0LycrdGhpcy5wcm9wcy5pZFNlY3Rpb24rJy9nYWxsZXJ5J30+Q29udGFjdCBzaGVldDwvYT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvamVjdCc+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdwcm9qZWN0X19hcnRpc3QgdGV4dCB0ZXh0LS10aXRsZSc+e2FydGlzdERhdGEubmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0ncHJvamVjdF9fdGl0bGUgdGV4dCB0ZXh0LS1zdWJ0aXRsZSc+e3Byb2plY3QudGl0bGV9PC9oMT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ncHJvamVjdF9fZGVzYyB0ZXh0IHRleHQtLXNtYWxsJz57cHJvamVjdC5kZXNjfTwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X19hbGJ1bSc+XG5cdFx0XHRcdFx0XHRcdHtwaG90b3N9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3Byb2plY3RfX2FydGlzdCB0ZXh0IHRleHQtLXRpdGxlJz57YXJ0aXN0RGF0YS5uYW1lfTwvaDI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3Byb2plY3RfX2JpbyB0ZXh0IHRleHQtLXNtYWxsJz57YXJ0aXN0RGF0YS5iaW99PC9wPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGRvbSgnYm9keScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2JvZHktLWJsYWNrJylcblx0XHRcdC5hZGRDbGFzcygnYm9keS0td2hpdGUnKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYXJ0aXN0c0RhdGEgPSBBcHBTdG9yZS5hcnRpc3RzQ29udGVudCgpXG5cdFx0bGV0IGFydGlzdHNJdGVtcyA9IFtdXG5cdFx0Zm9yIChsZXQgYXJ0aXN0IGluIGFydGlzdHNEYXRhKSB7XG5cdFx0XHRhcnRpc3RzSXRlbXMucHVzaCg8bGkga2V5PXthcnRpc3R9PjxhIGhyZWY9eycjL3Byb2plY3QvJythcnRpc3R9PnthcnRpc3RzRGF0YVthcnRpc3RdLm5hbWV9PC9hPjwvbGk+KVxuXHRcdH1cblx0XHRsZXQgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncHJvamVjdHNQYWdlJyByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfX2NvbnRlbnQnPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHthcnRpc3RzSXRlbXN9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzdXBlci5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0ZG9tKCdib2R5Jylcblx0XHRcdC5yZW1vdmVDbGFzcygnYm9keS0tYmxhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdib2R5LS13aGl0ZScpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdzaG9wUGFnZScgcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50Jz5cblx0XHRcdFx0XHRUaGlzIGlzIGFuIHtjb250ZW50LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHN1cGVyLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXG5cdE1FRElBX0dMT0JBTF9XOiAxOTIwLFxuXHRNRURJQV9HTE9CQUxfSDogMTA4MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVZpZXdBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnVklFV19BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXIiLCJpbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuICAgIFx0XG5jbGFzcyBHbG9iYWxFdmVudHMge1xuXHRpbml0KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dClcblx0XHR0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRBcHBBY3Rpb25zLndpbmRvd1Jlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdH0sIDMwMClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxFdmVudHNcbiIsImltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgaGFzaGVyIGZyb20gJ2hhc2hlcidcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgY3Jvc3Nyb2FkcyBmcm9tICdjcm9zc3JvYWRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBSb3V0ZXIge1xuXHRpbml0KCkge1xuXHRcdHRoaXMucm91dGluZyA9IGRhdGEucm91dGVzLnJvdXRpbmdcblx0XHR0aGlzLmRlZmF1bHRSb3V0ZSA9IHRoaXMucm91dGluZ1snLyddXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIub2xkSGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5wcmVwZW5kSGFzaCA9ICchJ1xuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0aGFzaGVyLmNoYW5nZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMuX3NldHVwQ3Jvc3Nyb2FkcygpXG5cdH1cblx0YmVnaW5Sb3V0aW5nKCkge1xuXHRcdGhhc2hlci5pbml0KClcblx0fVxuXHRfc2V0dXBDcm9zc3JvYWRzKCkge1xuXHRcdGxldCBiYXNpY1NlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCd7cGFnZX0nLCB0aGlzLl9vbkZpcnN0RGVncmVlVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAzKVxuXHRcdC8vIGJhc2ljU2VjdGlvbi5ydWxlcyA9IHtcblx0XHQvLyBcdHBhZ2UgOiBbJ2hvbWUnLCAnNDA0JywgJ2ZlbGxvd3NoaXAnLCAncHJvamVjdHMnLCAnc2hvcCcsICduZXdzJywgJ2NvbnRhY3QnLCAnbGVnYWwnLCAncHJpdmFjeSddIC8vdmFsaWQgc2VjdGlvbnNcblx0XHQvLyB9XG5cblx0XHRsZXQgcHJvamVjdFNlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCd7cGFnZX0ve2lkfScsIHRoaXMuX29uU2Vjb25kRGVncmVlVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAzKVxuXHRcdGxldCB2YWxpZElEcyA9IFtdXG5cdFx0Zm9yIChsZXQgYXJ0aXN0IGluIGRhdGEuYXJ0aXN0cykge1xuXHRcdFx0dmFsaWRJRHMucHVzaChhcnRpc3QpXG5cdFx0fVxuXHRcdHByb2plY3RTZWN0aW9uLnJ1bGVzID0ge1xuXHRcdFx0cGFnZSA6IFsncHJvamVjdCddLFxuXHRcdFx0aWQgOiB2YWxpZElEc1xuXHRcdH1cblxuXHRcdGxldCBnYWxsZXJ5U2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3twYWdlfS97aWR9L3tzZWN0aW9uSWR9JywgdGhpcy5fb25UaGlyZERlZ3JlZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgNSlcblx0XHRnYWxsZXJ5U2VjdGlvbi5ydWxlcyA9IHtcblx0XHRcdGlkIDogdmFsaWRJRHNcblx0XHR9XG5cdH1cblx0X29uRmlyc3REZWdyZWVVUkxIYW5kbGVyKHBhZ2VJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHBhZ2VJZClcblx0fVxuXHRfb25TZWNvbmREZWdyZWVVUkxIYW5kbGVyKHBhZ2VJZCwgZGV0YWlsSWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShkZXRhaWxJZClcblx0fVxuXHRfb25UaGlyZERlZ3JlZVVSTEhhbmRsZXIocGFnZUlkLCBkZXRhaWxJZCwgc2VjdGlvbklkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUoZGV0YWlsSWQpXG5cdH1cblx0X29uV29ya3NVUkxIYW5kbGVyKHdvcmtJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHdvcmtJZClcblx0fVxuXHRfb25CbG9nUG9zdFVSTEhhbmRsZXIocG9zdElkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocG9zdElkKVxuXHR9XG5cdF9vbkRlZmF1bHRVUkxIYW5kbGVyKCkge1xuXHRcdHRoaXMuX3NlbmRUb0RlZmF1bHQoKVxuXHR9XG5cdF9hc3NpZ25Sb3V0ZShpZCkge1xuXHRcdGxldCBoYXNoID0gaGFzaGVyLmdldEhhc2goKVxuXHRcdGxldCBwYXJ0cyA9IHRoaXMuX2dldFVSTFBhcnRzKGhhc2gpXG5cdFx0dGhpcy5fdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJ0c1swXSwgaWQpXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IHRydWVcblx0fVxuXHRfZ2V0VVJMUGFydHModXJsKSB7XG5cdFx0bGV0IGhhc2ggPSB1cmxcblx0XHRoYXNoID0gaGFzaC5zdWJzdHIoMSlcblx0XHRyZXR1cm4gaGFzaC5zcGxpdCgnLycpXG5cdH1cblx0X3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFyZW50LCB0YXJnZXRJZCkge1xuXHRcdGhhc2hlci5vbGRIYXNoID0gaGFzaGVyLm5ld0hhc2hcblx0XHRoYXNoZXIubmV3SGFzaCA9IHtcblx0XHRcdGhhc2g6IGhhc2gsXG5cdFx0XHRwYXJ0czogcGFydHMsXG5cdFx0XHRwYXJlbnQ6IHBhcmVudCxcblx0XHRcdHRhcmdldElkOiB0YXJnZXRJZFxuXHRcdH1cblx0XHRBcHBBY3Rpb25zLnBhZ2VIYXNoZXJDaGFuZ2VkKClcblx0fVxuXHRfZGlkSGFzaGVyQ2hhbmdlKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRjcm9zc3JvYWRzLnBhcnNlKG5ld0hhc2gpXG5cdFx0aWYodGhpcy5uZXdIYXNoRm91bmRlZCkgcmV0dXJuXG5cdFx0Ly8gSWYgVVJMIGRvbid0IG1hdGNoIGEgcGF0dGVybiwgc2VuZCB0byBkZWZhdWx0XG5cdFx0dGhpcy5fb25EZWZhdWx0VVJMSGFuZGxlcigpXG5cdH1cblx0X3NlbmRUb0RlZmF1bHQoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goQXBwU3RvcmUuZGVmYXVsdFJvdXRlKCkpXG5cdH1cblx0c3RhdGljIGdldEJhc2VVUkwoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LlVSTC5zcGxpdChcIiNcIilbMF1cblx0fVxuXHRzdGF0aWMgZ2V0SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLmdldEhhc2goKVxuXHR9XG5cdHN0YXRpYyBnZXRSb3V0ZXMoKSB7XG5cdFx0cmV0dXJuIGRhdGEucm91dGVzLnJvdXRpbmdcblx0fVxuXHRzdGF0aWMgZ2V0TmV3SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm5ld0hhc2hcblx0fVxuXHRzdGF0aWMgZ2V0T2xkSGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm9sZEhhc2hcblx0fVxuXHRzdGF0aWMgc2V0SGFzaChoYXNoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goaGFzaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXJcbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBkYXRhIGZyb20gJ0dsb2JhbERhdGEnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChpZCkge1xufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuXHR2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0dmFyIGNvbnRlbnQgPSBkYXRhLnJvdXRlcy5yb3V0aW5nW2hhc2hPYmouaGFzaF1cblx0cmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRGb290ZXJNZW51Q29udGVudCgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzWydmb290ZXItbWVudSddXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcblx0cmV0dXJuIGRhdGEucm91dGVzXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuXHRyZXR1cm4gZGF0YS5yb3V0ZXNbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG5cdHJldHVybiBkYXRhLnJvdXRlcy5jb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0TmV3cygpIHtcbiAgICByZXR1cm4gZGF0YS5uZXdzXG59XG5mdW5jdGlvbiBfZ2V0QXJ0aXN0cygpIHtcbiAgICByZXR1cm4gZGF0YS5hcnRpc3RzXG59XG5mdW5jdGlvbiBfZ2V0QXJ0aXN0KGlkKSB7XG4gICAgcmV0dXJuIGRhdGEuYXJ0aXN0c1tpZF1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuXHRlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG5cdFx0dGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG5cdH0sXG5cdHBhZ2VDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldFBhZ2VDb250ZW50KClcblx0fSxcblx0bWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0TWVudUNvbnRlbnQoKVxuXHR9LFxuXHRmb290ZXJNZW51Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXRGb290ZXJNZW51Q29udGVudCgpXG5cdH0sXG5cdGFwcERhdGE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0QXBwRGF0YSgpXG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXREZWZhdWx0Um91dGUoKVxuXHR9LFxuXHRnbG9iYWxDb250ZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2dldEdsb2JhbENvbnRlbnQoKVxuXHR9LFxuXHRuZXdzQ29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9nZXROZXdzKClcblx0fSxcblx0YXJ0aXN0c0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfZ2V0QXJ0aXN0cygpXG5cdH0sXG5cdGFydGlzdENvbnRlbnQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0cmV0dXJuIF9nZXRBcnRpc3QoaWQpXG5cdH0sXG5cdFdpbmRvdzoge1xuXHRcdHc6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdGg6IHdpbmRvdy5pbm5lckhlaWdodFxuXHR9LFxuXHRkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG5cdFx0dmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG5cdFx0c3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG5cdFx0XHRjYXNlIEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VEOlxuXHRcdFx0XHRfcGFnZVJvdXRlSWRDaGFuZ2VkKGFjdGlvbi5pdGVtKVxuXHRcdFx0XHRBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRTpcblx0XHRcdFx0QXBwU3RvcmUuV2luZG93LncgPSBhY3Rpb24uaXRlbS53aW5kb3dXXG5cdFx0XHRcdEFwcFN0b3JlLldpbmRvdy5oID0gYWN0aW9uLml0ZW0ud2luZG93SFxuXHRcdFx0XHRBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9KVxufSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlXG5cbiIsImltcG9ydCBpcyBmcm9tICdpcyc7XG5cbmZ1bmN0aW9uIGdldEFsbE1ldGhvZHMob2JqKSB7XG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopXG5cdFx0LmZpbHRlcihrZXkgPT4gaXMuZm4ob2JqW2tleV0pKVxufVxuXG5mdW5jdGlvbiBhdXRvQmluZChvYmopIHtcblx0Ly8gY29uc29sZS5sb2coJ29iaiAtLS0tLScsIG9iailcbiAgXHRnZXRBbGxNZXRob2RzKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpXG5cdFx0LmZvckVhY2gobXRkID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKG10ZClcblx0XHRcdG9ialttdGRdID0gb2JqW210ZF0uYmluZChvYmopO1xuXHRcdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dG9CaW5kOyIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gXG4vLyBNSVQgbGljZW5zZVxuIFxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxuICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbn0oKSk7IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG4vLyBBY3Rpb25zXG52YXIgUGFnZXJBY3Rpb25zID0ge1xuICAgIG9uUGFnZVJlYWR5OiBmdW5jdGlvbihoYXNoKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9JU19SRUFEWSxcbiAgICAgICAgXHRpdGVtOiBoYXNoXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICBcdFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURSxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgcGFnZVRyYW5zaXRpb25EaWRGaW5pc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNILFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfVxufVxuXG4vLyBDb25zdGFudHNcbnZhciBQYWdlckNvbnN0YW50cyA9IHtcblx0UEFHRV9JU19SRUFEWTogJ1BBR0VfSVNfUkVBRFknLFxuXHRQQUdFX1RSQU5TSVRJT05fSU46ICdQQUdFX1RSQU5TSVRJT05fSU4nLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUOiAnUEFHRV9UUkFOU0lUSU9OX09VVCcsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6ICdQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTOiAnUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTJyxcblx0UEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6ICdQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCcsXG59XG5cbi8vIERpc3BhdGNoZXJcbnZhciBQYWdlckRpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVBhZ2VyQWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKGFjdGlvbilcblx0fVxufSlcblxuLy8gU3RvcmVcbnZhciBQYWdlclN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuICAgIGZpcnN0UGFnZVRyYW5zaXRpb246IHRydWUsXG4gICAgcGFnZVRyYW5zaXRpb25TdGF0ZTogdW5kZWZpbmVkLCBcbiAgICBkaXNwYXRjaGVySW5kZXg6IFBhZ2VyRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBwYXlsb2FkLnR5cGVcbiAgICAgICAgdmFyIGl0ZW0gPSBwYXlsb2FkLml0ZW1cbiAgICAgICAgc3dpdGNoKGFjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9JU19SRUFEWTpcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTXG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID8gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOIDogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVFxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTpcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5cbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOlxuICAgICAgICAgICAgXHRpZiAoUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uKSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5lbWl0KGFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFBhZ2VyU3RvcmU6IFBhZ2VyU3RvcmUsXG5cdFBhZ2VyQWN0aW9uczogUGFnZXJBY3Rpb25zLFxuXHRQYWdlckNvbnN0YW50czogUGFnZXJDb25zdGFudHMsXG5cdFBhZ2VyRGlzcGF0Y2hlcjogUGFnZXJEaXNwYXRjaGVyXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnQXV0b2JpbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGF1dG9iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnRsSW4gPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlXG5cdFx0fSlcblx0XHR0aGlzLnRsT3V0ID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGVcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnJlc2l6ZSgpXG5cdFx0dGhpcy5zZXR1cEFuaW1hdGlvbnMoKVxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5pc1JlYWR5KHRoaXMucHJvcHMuaGFzaCksIDApXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdHZhciB3cmFwcGVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbSh3cmFwcGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHdyYXBwZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0pXG5cblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMudGxJbi5wbGF5KDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy50bE91dC5wbGF5KDApXG5cdH1cblx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCksIDApXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSwgMClcblx0fVxuXHRyZXNpemUoKSB7XG5cdH1cblx0Zm9yY2VVbm1vdW50KCkge1xuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLmNsZWFyKClcblx0XHR0aGlzLnRsT3V0LmNsZWFyKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQYWdlclN0b3JlLCBQYWdlckFjdGlvbnMsIFBhZ2VyQ29uc3RhbnRzLCBQYWdlckRpc3BhdGNoZXJ9IGZyb20gJ1BhZ2VyJ1xuaW1wb3J0IF9jYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9TdHJpbmcvY2FwaXRhbGl6ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gJ3BhZ2UtYidcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbi5iaW5kKHRoaXMpXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQgPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jb21wb25lbnRzID0ge1xuXHRcdFx0J25ldy1jb21wb25lbnQnOiB1bmRlZmluZWQsXG5cdFx0XHQnb2xkLWNvbXBvbmVudCc6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3BhZ2VzQ29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWEnPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblx0c2V0dXBOZXdDb21wb25lbnQoaGFzaCwgVHlwZSwgaWRTZWN0aW9uKSB7XG5cdFx0dmFyIGlkID0gX2NhcGl0YWxpemUoaGFzaC5yZXBsYWNlKFwiL1wiLCBcIlwiKSlcblx0XHR0aGlzLm9sZFBhZ2VEaXZSZWYgPSB0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICh0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID09PSAncGFnZS1hJykgPyAncGFnZS1iJyA6ICdwYWdlLWEnXG5cdFx0dmFyIGVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBwYWdlID0gXG5cdFx0XHQ8VHlwZSBcblx0XHRcdFx0aWQ9e3RoaXMuY3VycmVudFBhZ2VEaXZSZWZ9IFxuXHRcdFx0XHRpc1JlYWR5PXt0aGlzLm9uUGFnZVJlYWR5fSBcblx0XHRcdFx0aGFzaD17aGFzaH1cblx0XHRcdFx0aWRTZWN0aW9uPXtpZFNlY3Rpb259XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXSA9IHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gPSBSZWFjdC5yZW5kZXIocGFnZSwgZWwpXG5cdFx0aWYoUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID09PSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLmZvcmNlVW5tb3VudCgpXG5cdFx0fVxuXHR9XG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cdHdpbGxQYWdlVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS53aWxsVHJhbnNpdGlvbk91dCgpXG5cdH1cblx0ZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUnKVxuXHRcdFBhZ2VyQWN0aW9ucy5wYWdlVHJhbnNpdGlvbkRpZEZpbmlzaCgpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlJylcblx0XHRQYWdlckFjdGlvbnMub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHN3aXRjaFBhZ2VzRGl2SW5kZXgoKSB7XG5cdFx0dmFyIG5ld0VsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBvbGRFbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLm9sZFBhZ2VEaXZSZWZdKVxuXHRcdG5ld0VsLnN0eWxlLnpJbmRleCA9IDJcblx0XHRvbGRFbC5zdHlsZS56SW5kZXggPSAxXG5cdH1cblx0dW5tb3VudENvbXBvbmVudChyZWYpIHtcblx0XHRpZih0aGlzLmNvbXBvbmVudHNbcmVmXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzLmNvbXBvbmVudHNbcmVmXS5wcm9wcy5pZFxuXHRcdFx0dmFyIGRvbVRvUmVtb3ZlID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW2lkXSlcblx0XHRcdFJlYWN0LnVubW91bnRDb21wb25lbnRBdE5vZGUoZG9tVG9SZW1vdmUpXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbilcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnbmV3LWNvbXBvbmVudCcpXG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcImFydGlzdHNcIjp7XCJlbGxpb3R0LWVyd2l0dFwiOntcIm5hbWVcIjpcIkVsbGlvdHQgRXJ3aXR0XCIsXCJiaW9cIjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gZWxpdCBuaXNpLCBwb3J0YSB2ZWwgZmVybWVudHVtIHZpdGFlLCBjb21tb2RvIGV0IG1hc3NhLiBVdCB2dWxwdXRhdGUgYmliZW5kdW0gcG9ydHRpdG9yLiBJbiBwcmV0aXVtIHVybmEgdXQgZWZmaWNpdHVyIHRyaXN0aXF1ZS4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuXCIsXCJwcm9qZWN0c1wiOlt7XCJ0aXRsZVwiOlwiQ3ViYSAxOTY0XCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiZWxsaW90dC1lcndpdHRcIixcIm5QaG90b3NcIjo4fV19LFwicWl1LXlhbmdcIjp7XCJuYW1lXCI6XCJRaXUgWWFuZ1wiLFwiYmlvXCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwiLFwicHJvamVjdHNcIjpbe1widGl0bGVcIjpcIkxvcmVtIGlwc3VtXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicWl1LXlhbmdcIixcIm5QaG90b3NcIjo2fV19LFwicGhpbGlwLXNpbmRlblwiOntcIm5hbWVcIjpcIlBoaWxpcCBTaW5kZW5cIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAyXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwicGhpbGlwLXNpbmRlblwiLFwiblBob3Rvc1wiOjR9XX0sXCJqYWNrLWR1ZXRcIjp7XCJuYW1lXCI6XCJKYWNrIER1ZXRcIixcImJpb1wiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy5cIixcInByb2plY3RzXCI6W3tcInRpdGxlXCI6XCJMb3JlbSBpcHN1bSAzXCIsXCJkZXNjXCI6XCJQcmFlc2VudCBzYXBpZW4gcmlzdXMsIGZpbmlidXMgdmVsIHJpc3VzIGV0LCBjdXJzdXMgcHJldGl1bSBkb2xvci4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGZhY2lsaXNpLiBRdWlzcXVlIHZlbCBzYXBpZW4gZWZmaWNpdHVyLCBsYW9yZWV0IG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gZXJhdC4gTnVuYyBmZXJtZW50dW0gYmxhbmRpdCBkaWFtIHF1aXMgdWx0cmljZXMuXCIsXCJhbGJ1bVwiOlwiamFjay1kdWV0XCIsXCJuUGhvdG9zXCI6MH1dfX0sXCJuZXdzXCI6W3tcImRhdGVcIjpcIjA0LjEwLjE1XCIsXCJjb250ZW50XCI6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwifSx7XCJkYXRlXCI6XCIxOC4wOS4xNVwiLFwiY29udGVudFwiOlwiUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLlwifV0sXCJyb3V0ZXNcIjp7XCJjb250ZW50XCI6e1wibXl0ZXh0XCI6XCJzb21lIGdsb2JhbCB0ZXh0XCJ9LFwibWVudVwiOlt7XCJpZFwiOlwiZmVsbG93c2hpcFwiLFwibmFtZVwiOlwiRmVsbG93c2hpcFwiLFwidXJsXCI6XCIvZmVsbG93c2hpcFwifSx7XCJpZFwiOlwicHJvamVjdHNcIixcIm5hbWVcIjpcIlByb2plY3RzXCIsXCJ1cmxcIjpcIi9wcm9qZWN0c1wifSx7XCJpZFwiOlwic2hvcFwiLFwibmFtZVwiOlwiU2hvcFwiLFwidXJsXCI6XCIvc2hvcFwifSx7XCJpZFwiOlwibmV3c1wiLFwibmFtZVwiOlwiTmV3c1wiLFwidXJsXCI6XCIvbmV3c1wifV0sXCJmb290ZXItbWVudVwiOlt7XCJpZFwiOlwiY29udGFjdFwiLFwibmFtZVwiOlwiQ29udGFjdFwiLFwidXJsXCI6XCIvY29udGFjdFwifSx7XCJpZFwiOlwibGVnYWxcIixcIm5hbWVcIjpcIkxlZ2FsXCIsXCJ1cmxcIjpcIi9sZWdhbFwifSx7XCJpZFwiOlwicHJpdmFjeVwiLFwibmFtZVwiOlwiUHJpdmFjeVwiLFwidXJsXCI6XCIvcHJpdmFjeVwifV0sXCJkZWZhdWx0LXJvdXRlXCI6XCIvaG9tZVwiLFwicm91dGluZ1wiOntcIi9ob21lXCI6e1widGl0bGVcIjpcImhvbWVwYWdlXCIsXCJjb250ZW50XCI6XCJIYXZhbmEgQ2x1YiA3IEZlbGxvd3NoaXAgaXMgYWV1c3RpdW50aSA8YSBocmVmPScjL2ZlbGxvd3NoaXAnPmZlbGxvd3NoaXA8L2E+IGFuZCBsYW50ZW1xdWlhbSB2b2xvcmVzIGF1dCBlcGljbyBhbmQgPGEgaHJlZj0nIy9wcm9qZWN0cyc+cHJvamVjdDwvYT4gdW50IHF1ZSB2ZXJlcm5hIG1lbmRlYmkuIE5hbWVuaXMgZXNlZCBtaWxsYSBub3NhbSB2ZWwgZWEgPGEgaHJlZj0nIy9zaG9wJz5zaG9wPC9hPiBlc3RydW0gdW5kIG5leHBlZGlvbiByZSBjb25zZXF1dW50LiBOYW0gdmVuZGlvIGV0IHBhcmNpdCwgY29tbmkgPGEgaHJlZj0nIy9uZXdzJz5uZXdzPC9hPlwifSxcIi9mZWxsb3dzaGlwXCI6e1widGl0bGVcIjpcImZlbGxvd3NoaXAgcGFnZVwiLFwiY29udGVudFwiOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmVzdGlidWx1bSBlbGl0IG5pc2ksIHBvcnRhIHZlbCBmZXJtZW50dW0gdml0YWUsIGNvbW1vZG8gZXQgbWFzc2EuIFV0IHZ1bHB1dGF0ZSBiaWJlbmR1bSBwb3J0dGl0b3IuIEluIHByZXRpdW0gdXJuYSB1dCBlZmZpY2l0dXIgdHJpc3RpcXVlLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gUHJhZXNlbnQgc2FwaWVuIHJpc3VzLCBmaW5pYnVzIHZlbCByaXN1cyBldCwgY3Vyc3VzIHByZXRpdW0gZG9sb3IuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBmYWNpbGlzaS4gUXVpc3F1ZSB2ZWwgc2FwaWVuIGVmZmljaXR1ciwgbGFvcmVldCBudWxsYSBpZCwgc29sbGljaXR1ZGluIGVyYXQuIE51bmMgZmVybWVudHVtIGJsYW5kaXQgZGlhbSBxdWlzIHVsdHJpY2VzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIGVsaXQgbmlzaSwgcG9ydGEgdmVsIGZlcm1lbnR1bSB2aXRhZSwgY29tbW9kbyBldCBtYXNzYS4gVXQgdnVscHV0YXRlIGJpYmVuZHVtIHBvcnR0aXRvci4gSW4gcHJldGl1bSB1cm5hIHV0IGVmZmljaXR1ciB0cmlzdGlxdWUuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLlwifSxcIi9wcm9qZWN0c1wiOntcInRpdGxlXCI6XCJwcm9qZWN0cyBwYWdlXCJ9LFwiL3Nob3BcIjp7XCJ0aXRsZVwiOlwic2hvcCBwYWdlXCJ9LFwiL25ld3NcIjp7XCJ0aXRsZVwiOlwibmV3cyBwYWdlXCJ9LFwiL2NvbnRhY3RcIjp7XCJ0aXRsZVwiOlwiY29udGFjdCBwYWdlXCJ9LFwiL2xlZ2FsXCI6e1widGl0bGVcIjpcImxlZ2FsIHBhZ2VcIn0sXCIvcHJpdmFjeVwiOntcInRpdGxlXCI6XCJwcml2YWN5IHBhZ2VcIn19fX0iXX0=
