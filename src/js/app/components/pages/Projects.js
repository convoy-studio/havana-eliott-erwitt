import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Projects extends Page {
	constructor(props) {
		super(props)
		dom('body')
			.removeClass('body--black')
			.addClass('body--white')
	}
	render() {
		let artistsData = AppStore.artistsContent()
		let artistsItems = []
		for (let artist in artistsData) {
			artistsItems.push(<li key={artist}><a href={'#/project/'+artist}>{artistsData[artist].name}</a></li>)
		}
		let content = AppStore.pageContent()
		return (
			<div id='projectsPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<ul>
						{artistsItems}
					</ul>
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
