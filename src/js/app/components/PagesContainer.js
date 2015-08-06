import React from 'react'
import BasePager from 'BasePager'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import Router from 'Router'
import Home from 'Home'
import Fellowship from 'Fellowship'
import Projects from 'Projects'
import Project from 'Project'
import Shop from 'Shop'
import News from 'News'
import Contact from 'Contact'
import Legal from 'Legal'
import Privacy from 'Privacy'

export default class PagesContainer extends BasePager {
	constructor(props) {
		super(props)
		this.didHasherChange = this.didHasherChange.bind(this)
	}
	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
		super.componentWillMount()
	}
	componentWillUnmount() {
		AppStore.off(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
		super.componentWillUnmount()
	}
	didHasherChange() {
		let hash = Router.getNewHash()
		let type = undefined
		let id = undefined
		switch(hash.parent) {
			case 'fellowship':
				type = Fellowship
				break
			case 'projects':
				type = Projects
				break
			case 'project':
				type = Project
				id = hash.parts[1]
				break
			case 'shop':
				type = Shop
				break
			case 'news':
				type = News
				break
			case 'contact':
				type = Contact
				break
			case 'legal':
				type = Legal
				break
			case 'privacy':
				type = Privacy
				break
			case 'home':
				type = Home
				break
			default:
				type = Home
		}
		this.setupNewComponent(hash.parent, type, id)
	}
}


