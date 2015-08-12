import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
let _ = require('lodash');

export default class Gallery extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this.loaded = false
		this.nImageLoaded = 0
		this.prints = []
		this.state = { 
			prints: [],
			loadedPrints: []
		};

		PrintApi.getByArtist(props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChange.bind(this, null));
	}
	

	render() {
		let content = AppStore.pageContent()
		return (
			<div id='galleryPage' ref='page-wrapper' className='page'>
				<div className='submenu'><a href={'#/project/'+this.props.idSection}>Back to gallery</a></div>
				<div className='page__content'>
					<div className='gallery'>
						{this.state.loadedPrints}
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		super.componentDidMount()
	}
	
	componentDidUpdate() {
		let that = this, file
		this.max = _.size(this.state.prints)

		if (this.max > 0 && !this.loaded) {
			this.loaded = true
			_(this.state.prints).forEach(function(print) {
				file = new Image()
				file.onload = that.onImageLoaded.bind(that)
				file.src = './assets/images/prints/'+print.file
			}).value();
		}
	}

	onImageLoaded(params) {
		this.nImageLoaded++;

		if (params.path[0].height >= params.path[0].width*1.2) {
			this.prints.push(<div className='gallery__item' key={this.nImageLoaded}><img className='gallery__image' src={params.path[0].src}></img></div>)
		} else {
			this.prints.push(<div className='gallery__item gallery__item--large' key={this.nImageLoaded}><img className='gallery__image' src={params.path[0].src}></img></div>)
		}
		
		if (this.nImageLoaded >= this.max) {
			this.setState({
				'loadedPrints': this.prints
			});
		}
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	_onPrintStoreChange() {
		console.log('store')
		this.setState({
			prints: PrintStore.getAll()
		})
	}
}
