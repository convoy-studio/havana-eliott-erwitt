import React from 'react'
import BasePager from 'BasePager'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import Router from 'Router'
import Home from 'Home'
import Fellowship from 'Fellowship'
import Projects from 'Projects'
import Project from 'Project'
import Gallery from 'Gallery'
import Shop from 'Shop'
import Print from 'Print'
import News from 'News'
import Payment from 'Payment'
import Contact from 'Contact'
import Legal from 'Legal'
import Privacy from 'Privacy'
import Notfound from 'Notfound'

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
			case 'home':
				type = Home
				break
			case 'fellowship':
				type = Fellowship
				break
			case 'projects':
				type = Projects
				break
			case 'project':
				if (hash.parts.length > 2) {
					if (hash.parts[2] === 'gallery') {
						type = Gallery
						id = hash.targetId
					} else {
						// zoom sur une photo
					}
				} else {
					type = Project
					id = hash.targetId
				}
				break
			case 'shop':
				if (hash.parts.length > 1) {
					type = Print
					id = hash.targetId
				} else {
					type = Shop
				}
				break
			case 'news':
				type = News
				break
			case 'payment':
				type = Payment
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
			default:
				type = Notfound
		}
		this.setupNewComponent(hash.parent, type, id)
	}
}


