import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class News extends Page {
	constructor(props) {
		super(props)
	}
	render() {
		let newsData = AppStore.newsContent()
		let newsItems = newsData.map((item, index)=>{
			return(
				<article key={index}>
					<div className='news__date'>{item.date}</div>
					<div className='news__content'>{item.content}</div>
				</article>
			)
		})
		let content = AppStore.pageContent()
		return (
			<div id='newsPage' ref='page-wrapper' className='page'>
				<div className="page__content">
					<section className='news'>{newsItems}</section>
				</div>
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
