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
		let basicSection = crossroads.addRoute('{page}', this._onFirstDegreeURLHandler.bind(this), 3)
		// basicSection.rules = {
		// 	page : ['home', '404', 'fellowship', 'projects', 'shop', 'news', 'contact', 'legal', 'privacy'] //valid sections
		// }

		let projectSection = crossroads.addRoute('{page}/{id}', this._onSecondDegreeURLHandler.bind(this), 3)
		let validIDs = []
		for (let artist in data.artists) {
			validIDs.push(artist)
		}
		validIDs.push('55cb17192da00698d0ecead7');
		projectSection.rules = {
			page : ['project', 'shop'],
			id : validIDs
		}

		let gallerySection = crossroads.addRoute('{page}/{id}/{sectionId}', this._onThirdDegreeURLHandler.bind(this), 5)
		gallerySection.rules = {
			id : validIDs
		}
	}
	_onFirstDegreeURLHandler(pageId) {
		this._assignRoute(pageId)
	}
	_onSecondDegreeURLHandler(pageId, detailId) {
		this._assignRoute(detailId)
	}
	_onThirdDegreeURLHandler(pageId, detailId, sectionId) {
		this._assignRoute(detailId)
	}
	_onWorksURLHandler(workId) {
		this._assignRoute(workId)
	}
	_onBlogPostURLHandler(postId) {
		this._assignRoute(postId)
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
		AppActions.pageHasherChanged()
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
