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
					<div className='news-date'>{item.date}</div>
					<div className='news-content'>{item.content}</div>
				</article>
			)
		})
		let content = AppStore.pageContent()
		return (
			<div id='news-page' ref='page-wrapper' className='page-wrapper'>
				<div className="vertical-center-parent">
					<p className="vertical-center-child">
						This is an {content.title}
					</p>
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
