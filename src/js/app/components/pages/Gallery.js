import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import PrintActions from 'PrintActions'
import Utils from 'Utils'
import offset from 'offset'
let _ = require('lodash')
let Masonry = require('masonry-layout')
let scroll = Utils.Scroll()

export default class Gallery extends Page {
	constructor(props) {
		super(props)

		// props
		this.props = props

		// state
		this.state = { 
			prints: [],
			loadedPrints: []
		}

		// function binded
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)
		this._rafBinded = this._raf.bind(this)
		
		// const
		this.OPACITY_MARGE = 30
		this.OPACITY_DURATION = 300
		
		// vars
		this.loaded = false
		this.nImageLoaded = 0
		this.prints = []
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')
	}

	componentDidMount() {
		super.componentDidMount()
		
		PrintApi.getByArtist(this.props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
		
		this._raf()
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.scrollRaf)
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);	
	}

	setupAnimations() {
		let wrapper = React.findDOMNode(this.refs['page-wrapper'])

		// transition In
		this.tlIn.from(wrapper, 1, { opacity:0, ease:Expo.easeInOut })

		// transition Out
		this.tlOut.to(wrapper, 0.6, { opacity:0, ease:Expo.easeOut })

		// reset
		this.tlIn.pause(0)
		this.tlOut.pause(0)
	}

	render() {
		let that = this
		let printIndex = -1
		return (
			<div className='page page--gallery' ref='page-wrapper'>
				<div className='submenu'><a href={'#/project/'+this.props.idSection} className='button'><span className='button__content'>Back to gallery</span></a></div>
				<div className='gallery'>
					{Object.keys(this.state.loadedPrints).map((year, i) => {
						return (
							<div className='gallery__grid' key={year+'_'+i}>
								<div className='gallery__width'></div>
								<div className='gallery__item gallery__item--large gallery__item--disabled'>{year}</div>
								{Object.keys(that.state.loadedPrints[year]).map((printId, j) => { 
									let print = that.state.loadedPrints[year][printId]
									let src = '/static/img/'+print.file+'_min.jpg'
									let random = Math.floor(Math.random()*6)
									printIndex++
									return (
										<div className={'gallery__item gallery__item--'+print.size+' gallery__item--'+random} data-random={random} key={printId} onClick={that.zoomPrint.bind(that, printIndex)}><img className='gallery__image' src={src}></img></div>
									)
								})}
							</div>
						)
					})}
				</div>
			</div>
		)
	}

	_raf() {
		if (this.scrollIndex % 3) this.scrollOk = true
		else this.scrollOk = true
		this.scrollIndex++

		if (this.scrollOk) {
			this.handleScroll()
		}

		this.scrollRaf = scroll(this._rafBinded);
	}

	handleScroll() {
		_(dom('.gallery__item')).forEach((el, index) => {
			this.limitOffset = offset(el)
			this.limitTop = this.limitOffset.top - window.innerHeight + this.OPACITY_MARGE
			this.elOpacity = Utils.Interval(this.limitTop / (-this.OPACITY_DURATION), 0, 1)
			this.elY = (1-this.elOpacity) * 50
			el.style.opacity = this.elOpacity
			el.style[this.transform] = ('translate(0px, '+ this.elY +'px) translateZ(0px)')
		}).value();
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
				file.src = '/static/img/'+print.file+'_min.jpg'
			}).value();
		}
	}

	onImageLoaded(print, e) {
		this.nImageLoaded++;

		let that = this
		let path = e.explicitOriginalTarget || e.target || e.path[0] 
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
						columnWidth: '.gallery__width',
						gutter: 24
					});
				}).value();
			});
		}
	}

	zoomPrint(id) {
		let that = this
		
		PrintActions.setPrintZoom(id)
		window.cancelAnimationFrame(this.scrollRaf)
		
		this.tlItemsOut = new TimelineMax()
		this.tlItemsOut.staggerTo(_.shuffle(dom('.gallery__item')), 0.6, { opacity:0, ease:Expo.easeOut }, 0.01)
		this.tlItemsOut.addCallback(() => {
			window.location.href = '#/project/'+that.props.idSection;
		}, '-=0.2')
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
		}, () => {

		})
	}
}
