import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class News extends Page {
	constructor(props) {
		super(props)
		dom('body')
			.removeClass('body--white')
			.addClass('body--black')
	}
	render() {
		let side
		let newsData = AppStore.newsContent()
		let newsItems = newsData.map((item, index)=>{
			if (index % 2 === 0) { return (
				<article key={index} className='news__item news__item--right'>
					<div className='news__content'>{item.content}</div>
					<div className='news__date'>{item.date}</div>
				</article>
			)} else { return (
				<article key={index} className='news__item news__item--left'>
					<div className='news__date'>{item.date}</div>
					<div className='news__content'>{item.content}</div>
				</article>
			)}
		})
		return (
			<div className='page page--news' ref='page-wrapper'>
				<section className='news'>{newsItems}</section>
			</div>
		)
	}
	componentDidMount() {
		super.componentDidMount()
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
