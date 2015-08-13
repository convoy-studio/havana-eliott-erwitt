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

		this.state = { 
			prints: {}
		};

		PrintApi.getAll();
		PrintStore.addChangeListener(this._onPrintStoreChange.bind(this, null));
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentWillUnmount() {
		PrintStore.removeChangeListener(this._onPrintStoreChange.bind(this, null));	
	}

	render() {
		let that = this

		return (
			<div id='shopPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<div className='shop'>
						{Object.keys(this.state.prints).map(function(index){
							let file = that.state.prints[index].file;
							let id = that.state.prints[index]._id;
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
			prints: PrintStore.getAll()
		})
	}
}
