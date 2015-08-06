import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Project extends Page {
	constructor(props) {
		super(props)
		this.props = props
		dom('body')
			.removeClass('body--black')
			.addClass('body--white')
	}
	render() {
		let artistData = AppStore.artistContent(this.props.idSection)
		let content = AppStore.pageContent()
		return (
			<div id='projectPage' ref='page-wrapper' className='page page--white'>
				<div className='page__content'>
					<h2>{artistData.name}</h2>
					<p>{artistData.bio}</p>
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
