import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
let _ = require('lodash');
let Masonry = require('masonry-layout');

export default class Gallery extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this.loaded = false
		this.nImageLoaded = 0
		this.prints = []
		this.state = { 
			prints: [],
			loadedPrints: []
		};

		PrintApi.getByArtist(this.props.idSection);
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
			<div className='page page--gallery' ref='page-wrapper'>
				<div className='submenu button button--right button--small'><a href={'#/project/'+this.props.idSection}>Back to gallery</a></div>
				<div className='gallery'>
					{Object.keys(this.state.loadedPrints).map((year, i) => {
						return (
							<div className='gallery__grid' key={year+'_'+i}>
								<div className='gallery__item gallery__item--large gallery__item--disabled'>{year}</div>
								{Object.keys(that.state.loadedPrints[year]).map((printId, i) => { 
									let print = that.state.loadedPrints[year][printId]
									let src = './assets/images/prints/'+print.file+'_min.jpg'
									let random = Math.floor(Math.random()*6)
									return (
										<div className={'gallery__item gallery__item--'+print.size+' gallery__item--'+random} key={i}><img className='gallery__image' src={src}></img></div>
									)
								})}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
	
	componentDidUpdate() {
		let that = this, file
		this.max = _.size(this.state.prints)
		this.printsDate = {};
		if (this.max > 0 && !this.loaded) {
			this.loaded = true
			_(this.state.prints).forEach((print, index) => {
				if (!this.printsDate[print.year]) this.printsDate[print.year] = {}
				this.printsDate[print.year][index] = print

				file = new Image()
				file.onload = that.onImageLoaded.bind(that, this.printsDate[print.year][index])
				file.src = './assets/images/prints/'+print.file+'_min.jpg'
			}).value();
		}
	}

	onImageLoaded(print, e) {
		this.nImageLoaded++;

		let path = e.explicitOriginalTarget || e.path[0]
		if (path.height >= path.width*1.2) print.size = 'small'
		else print.size = 'large'
		
		if (this.nImageLoaded >= this.max) {
			this.setState({
				'loadedPrints': this.printsDate
			}, () => {
				let grids = document.querySelectorAll('.gallery__grid');
				_(grids).forEach((grid) => {
					let iso = new Masonry(grid, {
						itemSelector: '.gallery__item',
						columnWidth: 96,
						gutter: 24
					});
				}).value();
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
		this.setState({
			prints: PrintStore.getArtistPrints()
		})
	}
}
