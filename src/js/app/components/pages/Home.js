import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'

export default class Home extends Page {
	constructor(props) {
		super(props)
	}
	render() {
		let content = AppStore.pageContent()
		return (
			<div id='homepage' ref='page-wrapper' className='page'>
				<div className='video'>
					<video className='video__file' src='./assets/videos/bg-home.mp4'></video>
				</div>
				<div className='page__content'>
					<p dangerouslySetInnerHTML={{__html: content.content}} />
				</div>
			</div>
		)
	}
	componentDidMount() {
		super.componentDidMount()
	}
	didTransitionInComplete() {
		super.didTransitionInComplete()
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

