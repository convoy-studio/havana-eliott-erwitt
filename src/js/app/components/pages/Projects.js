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
		let artistsItems = artistsData.map((item, index)=>{
			return(
				<p key={index}>{item.name}</p>
			)
		})
		let content = AppStore.pageContent()
		return (
			<div id='projectsPage' ref='page-wrapper' className='page page--white'>
				<div className='page__content'>
					{artistsItems}
				</div>
			</div>
		)
	}
	componentDidMount() {
		super.componentDidMount()
	}
	// componentWillUnmount() {
	// 	dom('body').removeClass('body--white')
	// }
	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}
}
