import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import CartApi from 'CartApi'

export default class Result extends Page {

	constructor(props) {
		super(props)
		this.props
	}

	render() {
		let message
		if (this.props.idSection.result === 'success') {
			message = 'Votre commande à bien été validée'
		} else {
			message = 'Une erreur s\'est produite, la commande a été annulée'
		}
		return (
			<div className='page page--result' ref='page-wrapper'>
				<div className='result'>
					<p className='result__success'>{message}</p>
					<a href='#/' className='button button--reverse'><span className='button__content'>Revenir au site</span></a>
				</div>
			</div>
		)
	}

	componentDidMount() {
		super.componentDidMount()

		console.log(this.props.idSection)
		// CartApi.checkResponse(this.props.idSection)
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
