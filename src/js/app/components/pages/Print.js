import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import CartActions from 'CartActions'
let _ = require('lodash')

export default class Print extends Page {
	
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')

		this._addToCartBinded = this._addToCart.bind(this)
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
								<a href='#' onClick={that._addToCartBinded}>Buy print</a>
								<img src={'./assets/images/prints/'+this.state.print.file}></img>
								<h1>{this.state.print.city}</h1>
							</div>
						)
					})()}
				</div>
			</div>
		)
	}

	_addToCart(e) {
		e.preventDefault()

		let printId = this.state.print._id;
		let update = {
			city: this.state.print.city,
			year: this.state.print.year,
			price: this.state.print.price
		}
		CartActions.addToCart(printId, update);
		CartActions.updateCartVisible(true);
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
