import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
let _ = require('lodash')

export default class Print extends Page {
	
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.state = { 
			print: undefined
		};

		PrintApi.getOne(this.props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentWillUnmount() {
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);	
	}

	render() {
		let that = this

		return (
			<div id='printPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					{(() => {
						if (this.state.print) return (
							<div className='print'>
								<img src={'./assets/images/prints/'+this.state.print.file}></img>
								<h1>{this.state.print.city}</h1>
							</div>
						)
					})()}
				</div>
			</div>
		)
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}

	_onPrintStoreChange() {
		this.setState({
			print: PrintStore.getOne()
		})
	}
}
