import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Result extends Page {

	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')
	}

	render() {
		return (
			<div className='page page--result' ref='page-wrapper'>
				<div className='result'>
					<p className='result__success'>Votre commande à bien été validée</p>
					<a href='#/' className='button button--reverse'><span className='button__content'>Revenir au site</span></a>
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
