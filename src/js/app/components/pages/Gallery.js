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
			// file.onload = this.onImageLoaded.bind(this, {
			// 	url: fileUrl,
			// 	index: i
			// });
			file.onload = this.onImageLoaded.bind(this);
			file.src = fileUrl;
		}
	}
	
	onImageLoaded(params) {
		this.nImageLoaded++;

		if (params.path[0].height >= params.path[0].width*1.5) {
			this.photos.push(<div className='gallery__item' key={this.nImageLoaded}><img className='gallery__image' src={params.path[0].src}></img></div>)
		} else {
			this.photos.push(<div className='gallery__item gallery__item--large' key={this.nImageLoaded}><img className='gallery__image' src={params.path[0].src}></img></div>)
		}
		
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
