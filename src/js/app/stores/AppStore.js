import AppDispatcher from 'AppDispatcher'
import AppConstants from 'AppConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'

let _hash

function _pageRouteIdChanged(hash) {
	_hash = hash.item.parent
}
function _getPageContent() {
	var hashObj = Router.getNewHash()
	var content = data.routes.routing[hashObj.hash]
	return content
}
function _getMenuContent() {
	return data.routes.menu
}
function _getFooterMenuContent() {
	return data.routes['footer-menu']
}
function _getAppData() {
	return data.routes
}
function _getDefaultRoute() {
	return data.routes['default-route']
}
function _getGlobalContent() {
	return data.routes.content
}
function _getHome() {
	return data.home
}
function _getFellowship() {
	return data.fellowship
}
function _getShop() {
	return data.shop
}
function _getNews() {
	return data.news
}
function _getArtists() {
	return data.artists
}
function _getArtist(id) {
	return data.artists[id]
}

var AppStore = assign({}, EventEmitter2.prototype, {
	emitChange: function(type, item) {
		this.emit(type, item)
	},
	hash: function() {
		return _hash
	},
	pageContent: function() {
		return _getPageContent()
	},
	menuContent: function() {
		return _getMenuContent()
	},
	footerMenuContent: function() {
		return _getFooterMenuContent()
	},
	appData: function() {
		return _getAppData()
	},
	defaultRoute: function() {
		return _getDefaultRoute()
	},
	globalContent: function() {
		return _getGlobalContent()
	},
	homeContent: function() {
		return _getHome()
	},
	fellowshipContent: function() {
		return _getFellowship()
	},
	shopContent: function() {
		return _getShop()
	},
	newsContent: function() {
		return _getNews()
	},
	artistsContent: function() {
		return _getArtists()
	},
	artistContent: function(id) {
		return _getArtist(id)
	},
	Window: {
		w: window.innerWidth,
		h: window.innerHeight
	},
	isMobile: false,
	dispatcherIndex: AppDispatcher.register(function(payload){
		var action = payload.action
		switch(action.actionType) {
			case AppConstants.PAGE_HASHER_CHANGED:
				_pageRouteIdChanged(action)
				AppStore.emitChange(action.actionType)
				break
			case AppConstants.WINDOW_RESIZE:
				AppStore.Window.w = action.item.windowW
				AppStore.Window.h = action.item.windowH
				if (AppStore.Window.w < 958) {
					AppStore.isMobile = true;
				} else {
					AppStore.isMobile = false;
				}
				AppStore.emitChange(action.actionType)
				break
		}
		return true
	})
})



export default AppStore

