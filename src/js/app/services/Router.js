import data from 'GlobalData'
import hasher from 'hasher'
import AppActions from 'AppActions'
import crossroads from 'crossroads'
import AppStore from 'AppStore'

class Router {
	init() {
		this.routing = data.routes.routing
		this.defaultRoute = this.routing['/']
		this.newHashFounded = false
		hasher.newHash = undefined
		hasher.oldHash = undefined
		hasher.prependHash = '!'
		hasher.initialized.add(this._didHasherChange.bind(this))
		hasher.changed.add(this._didHasherChange.bind(this))
		this._setupCrossroads()
	}
	beginRouting() {
		hasher.init()
	}
	_setupCrossroads() {
		let homeSection = crossroads.addRoute('', this._onHomeURLHandler.bind(this), 1)

		let basicSection = crossroads.addRoute('{page}', this._onFirstDegreeURLHandler.bind(this), 1)
		// firstDegreeSection.rules = {
		// 	page : ['home', '404', 'fellowship', 'projects', 'shop', 'news', 'contact', 'legal', 'privacy'] //valid sections
		// }

		let projectSection = crossroads.addRoute('project/{id}', this._onProjectURLHandler.bind(this), 2)
		projectSection.rules = {
			id : /^[a-z]/
		}

		let gallerySection = crossroads.addRoute('project/{id}/contact-sheet', this._onProjectURLHandler.bind(this), 3)
		gallerySection.rules = {
			id : /^[a-z]/
		}

		let shopSection = crossroads.addRoute('/shop/{id}', this._onShopURLHandler.bind(this), 2)
		shopSection.rules = {
			id : /^[0-9]/
		}
	}
	_onHomeURLHandler() {
		this._assignRoute('home')
	}
	_onFirstDegreeURLHandler(pageId) {
		this._assignRoute(pageId)
	}
	_onProjectURLHandler(projectId) {
		this._assignRoute(projectId)
	}
	_onShopURLHandler(printId) {
		this._assignRoute(printId)
	}
	_onDefaultURLHandler() {
		this._sendToDefault()
	}
	_assignRoute(id) {
		let hash = hasher.getHash()
		let parts = this._getURLParts(hash)
		this._updatePageRoute(hash, parts, parts[0], id)
		this.newHashFounded = true
	}
	_getURLParts(url) {
		let hash = url
		hash = hash.substr(1)
		return hash.split('/')
	}
	_updatePageRoute(hash, parts, parent, targetId) {
		hasher.oldHash = hasher.newHash
		hasher.newHash = {
			hash: hash,
			parts: parts,
			parent: parent,
			targetId: targetId
		}
		AppActions.pageHasherChanged(hasher.newHash)
	}
	_didHasherChange(newHash, oldHash) {
		this.newHashFounded = false
		crossroads.parse(newHash)
		if(this.newHashFounded) return
		// If URL don't match a pattern, send to default
		this._onDefaultURLHandler()
	}
	_sendToDefault() {
		hasher.setHash(AppStore.defaultRoute())
	}
	static getBaseURL() {
		return document.URL.split("#")[0]
	}
	static getHash() {
		return hasher.getHash()
	}
	static getRoutes() {
		return data.routes.routing
	}
	static getNewHash() {
		return hasher.newHash
	}
	static getOldHash() {
		return hasher.oldHash
	}
	static setHash(hash) {
		hasher.setHash(hash)
	}
}

export default Router
