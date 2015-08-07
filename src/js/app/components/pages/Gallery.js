import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'

export default class Gallery extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')

		this.state = { 
			photos: []
		};
	}
	

	render() {
		let content = AppStore.pageContent()
		return (
			<div id='galleryPage' ref='page-wrapper' className='page'>
				<div className='submenu'><a href={'#/project/'+this.props.idSection}>Back to gallery</a></div>
				<div className='page__content'>
					<div className='gallery'>
						{this.state.photos}
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		super.componentDidMount()

		let artistData = AppStore.artistContent(this.props.idSection),
			project = artistData.projects[0],
			filename, file, fileUrl
		
		this.photos = []
		this.nImageLoaded = 0
		this.max = project.nPhotos
		
		for (let i=1; i<=this.max; ++i) {
			filename = (i<10)?'0'+i:i
			fileUrl = './assets/images/albums/'+project.album+'/'+filename+'.jpg'

			file = new Image();
			file.onload = this.onImageLoaded.bind(this, {
				url: fileUrl,
				index: i
			});
			file.src = fileUrl;
		}
	}
	
	onImageLoaded(params) {
		this.nImageLoaded++
		this.photos.push(<div className='gallery__item' key={params.index}><img className='gallery__image' src={params.url}></img></div>)
		
		if (this.nImageLoaded >= this.max) {
			this.setState({
				'photos': this.photos
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
}
