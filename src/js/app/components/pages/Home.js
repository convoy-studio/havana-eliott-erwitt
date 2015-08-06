import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'

export default class Home extends Page {
	constructor(props) {
		super(props)
		dom('body')
			.removeClass('body--white')
			.addClass('body--black')
	}
	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.from(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

		// transition Out
		this.tlOut.to(wrapper, 1, { y: window.innerHeight, opacity:0, ease:Expo.easeInOut })

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
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

