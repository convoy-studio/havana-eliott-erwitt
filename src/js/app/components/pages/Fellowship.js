import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Fellowship extends Page {
	constructor(props) {
		super(props)
		dom('body')
			.removeClass('body--white')
			.addClass('body--black')
	}
	render() {
		var content = AppStore.pageContent()
		return (
			<div id='fellowshipPage' ref='page-wrapper' className='page'>
				<div className='page__content'>{content.content}</div>
			</div>
		)
	}
	componentDidMount() {
		super.componentDidMount()
	}
	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}
}
