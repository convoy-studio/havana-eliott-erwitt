import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Notfound extends Page {
	constructor(props) {
		super(props)
		dom('body')
			.removeClass('body--black')
			.addClass('body--white')
	}
	render() {
		var content = AppStore.pageContent()
		return (
			<div id='404Page' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<p>Error 404 — Page not found</p>
				</div>
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
