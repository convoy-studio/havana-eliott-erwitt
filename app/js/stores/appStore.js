import AppDispatcher from '../dispatchers/appDispatcher';
import AppConstants from '../constants/appConstants';
import assign from 'object-assign';
import locales from '../locales/index'
import { EventEmitter } from 'events';
import languages from '../../data/languages'

let getLanguage = (url) => {
	let urlSplitter = url.split('/')
	for (let urlPart of urlSplitter) {
		for (let lang of languages) {
			if(urlPart == lang) return lang
		}
	}
}

let splash = true;

const AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function(type, item) {
		this.emit(type, item);
	},

	getContent: () => {
		return locales[AppStore.Lang()]
	},

	getLink: (url) => {
		return '/' + AppStore.Lang() + url
	},

	Lang: () => {
		let lang = getLanguage((typeof window !== 'undefined') ? location.pathname : 'en')
		if(typeof document !== 'undefined') document.getElementsByTagName('html')[0].setAttribute('lang', lang);
		if (lang === undefined) lang = 'en'
		return lang
	},

	getSplash: () => {
		return splash;
	},

	Window: {
		w: (typeof window !== 'undefined') ? window.innerWidth : 0,
		h: (typeof window !== 'undefined') ? window.innerHeight : 0
	},

	isMobile: false,

	dispatcherIndex: AppDispatcher.register(function(payload){
		let action = payload.action;

		switch(action.actionType) {
			case AppConstants.WINDOW_RESIZE:
				AppStore.Window.w = action.item.windowW;
				AppStore.Window.h = action.item.windowH;
				if (AppStore.Window.w < 958) {
					AppStore.isMobile = true;
				} else {
					AppStore.isMobile = false;
				}
				AppStore.emitChange(action.actionType);
				break;
			case AppConstants.SPLASH_DISABLED:
				splash = action.item,
				AppStore.emitChange(action.actionType);
				break;
		}

		return true;
	})
})

export default AppStore;
