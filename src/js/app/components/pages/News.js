import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import Utils from 'Utils'
import offset from 'offset'
import TweenMax from 'gsap'
let scroll = Utils.Scroll()
let _ = require('lodash')

export default class News extends Page {

	constructor(props) {
		super(props)

		this._rafBinded = this._raf.bind(this)

		this.eShow = []
		this.sTop = 0
		this.cTop = 0
		this.scrollIndex = 0
		this.scrollOk = false
		this.transform = Utils.GetSupportedPropertyName('transform')
	}

	componentDidMount() {
		super.componentDidMount()

		this._news = document.querySelector('.news')
		document.querySelector('.page--news').style.height = this._news.offsetHeight + 'px'

		this._raf()
	}

	render() {
		let side
		let newsData = AppStore.newsContent()
		let newsItems = newsData.map((item, index)=>{
			if (index % 2 === 0) { return (
				<article key={index} className='news__item news__item--right'>
					<div className='news__content text'>{item.content}</div>
					<div className='news__date title'>{item.date}</div>
				</article>
			)} else { return (
				<article key={index} className='news__item news__item--left'>
					<div className='news__date title'>{item.date}</div>
					<div className='news__content text'>{item.content}</div>
				</article>
			)}
		})
		return (
			<div className='page page--news' ref='page-wrapper'>
				<section className='news'>{newsItems}</section>
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
		let e;
		this.sTop = Utils.GetScrollTop()
		this.cTop += .1 * (this.sTop - this.cTop)
		e = -this.cTop
		if (this._news) this._news.style[this.transform] = 'translate3d(0, ' + e + 'px, 0)'

		_(dom('.news__item')).forEach((el, index) => {
			this.lTop = offset(el).top
			if (!this.eShow[index]) {
				this.eShow[index] = false
			}

			// in viewport
			if (this.lTop - window.innerHeight < 0 && !this.eShow[index]) {
				this.eShow[index] = true
				TweenMax.to(el, 0.6, {y: 0, opacity: 1, ease: Power2.easeOut, delay: Math.random()*0.2})
			}
			
			// off viewport
			if (this.lTop - window.innerHeight > 0 && this.eShow[index]) {
				this.eShow[index] = false
				TweenMax.set(el, {y: 100, opacity: 0})
			}
		}).value();
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}

}
