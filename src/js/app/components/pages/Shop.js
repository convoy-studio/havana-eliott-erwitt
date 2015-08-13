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
			.removeClass('body--black')
			.addClass('body--white')

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.state = { 
			photos: {}
		};

		PrintApi.getAll();
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
			<div id='shopPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<div className='shop'>
						{Object.keys(this.state.photos).map(function(index){
							let file = that.state.photos[index].file;
							let id = that.state.photos[index]._id;
							return (
								<div className='shop__print' key={index}>
									<a href={'#/shop/'+id}><img src={'./assets/images/prints/'+file}></img></a> 
								</div>
							)
						})}
					</div>
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
			photos: PrintStore.getAll()
		})
	}
}
