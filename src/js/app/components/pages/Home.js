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
		let homeData = AppStore.homeContent()
		return (
			<div className='page homepage' ref='page-wrapper'>
				<div className='video'>
					<video autoPlay loop className='video__file' src='./assets/videos/bg-home.mp4'></video>
				</div>
				<div className='homepage__content'>
					<p className='text text--title' dangerouslySetInnerHTML={{__html: homeData.content}} />
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

