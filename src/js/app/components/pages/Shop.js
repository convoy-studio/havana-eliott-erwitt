import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'

export default class Shop extends Page {
	
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.state = { 
			prints: {}
		};

		PrintApi.getForSale();
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
		let shopData = AppStore.shopContent()

		return (
			<div id='page page--shop' ref='page-wrapper'>
				<div className='shop__intro text text--bigger'>
					{Object.keys(shopData.intro.paragraphs).map((index) => {
						return (
							<p className='shop__paragraph' key={index}>{shopData.intro.paragraphs[index]}</p>
						)
					})}
				</div>
				<div className='shop'>
					{Object.keys(this.state.prints).map(function(index){
						let print = that.state.prints[index]
						let file = print.file + '_min.jpg'
						let id = print._id
						return (
							<div className='shop__print' key={index}>
								<a href={'#/shop/'+id}>
									<img src={'./assets/images/prints/'+file}></img>
									<div className='shop__hover'>
										<div className='shop__detail'>
											<div className='shop__city'>{print.city}</div>, <div className='shop__year'>{print.year}</div>
											<div className='shop__price'>{print.price}€</div>
										</div>
									</div>
								</a> 
							</div>
						)
					})}
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
			prints: PrintStore.getForSale()
		})
	}
}
