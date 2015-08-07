import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Project extends Page {
	constructor(props) {
		super(props)
		this.props = props
		dom('body')
			.removeClass('body--black')
			.addClass('body--white')
	}
	render() {
		let content = AppStore.pageContent(),
			artistData = AppStore.artistContent(this.props.idSection),
			project = artistData.projects[0],
			photos = [],
			file = undefined
		for (let i=1; i<=project.nPhotos; ++i) {
			file = (i<10)?'0'+i:i
			photos.push(<div className='project__photo' key={i}><img src={'./assets/images/albums/'+project.album+'/'+file+'.jpg'}></img></div>)
		}
		return (
			<div id='projectPage' ref='page-wrapper' className='page page--white'>
				<div className='page__content'>
					<section className='project'>
						<h2 className='project__artist text text--title'>{artistData.name}</h2>
						<h1 className='project__title text text--subtitle'>{project.title}</h1>
						<p className='project__desc text text--small'>{project.desc}</p>
						<div className='project__album'>
							{photos}
						</div>
						<h2 className='project__artist text text--title'>{artistData.name}</h2>
						<p className='project__bio text text--small'>{artistData.bio}</p>
					</section>
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
