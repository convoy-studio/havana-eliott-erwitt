import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Terms extends Page {
	
	constructor(props) {
		super(props)
	}

	render() {
		var content = AppStore.pageContent()
		return (
			<div id='contactPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<h2 className='title'>Terms & conditions</h2>
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
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

}
