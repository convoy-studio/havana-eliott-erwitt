import AppDispatcher from 'AppDispatcher'
import AppConstants from 'AppConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import data from 'GlobalData'
import Router from 'Router'

function _pageRouteIdChanged(id) {
}
function _getPageContent() {
	// console.log(data)
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
	newsContent: function() {
		return _getNews()
	},
	artistsContent: function() {
		return _getArtists()
	},
	artistContent: function(id) {
		console.log(id)
		return _getArtist(id)
	},
	Window: {
		w: window.innerWidth,
		h: window.innerHeight
	},
	dispatcherIndex: AppDispatcher.register(function(payload){
		var action = payload.action
		switch(action.actionType) {
			case AppConstants.PAGE_HASHER_CHANGED:
				_pageRouteIdChanged(action.item)
				AppStore.emitChange(action.actionType)
				break
			case AppConstants.WINDOW_RESIZE:
				AppStore.Window.w = action.item.windowW
				AppStore.Window.h = action.item.windowH
				AppStore.emitChange(action.actionType)
				break
		}
		return true
	})
})



export default AppStore

