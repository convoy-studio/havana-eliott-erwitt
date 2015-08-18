import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppActions from 'AppActions'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'
import ArtistStore from 'ArtistStore'
import ArtistApi from 'ArtistApi'

export default class Project extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--white')
			.addClass('body--black')
		
		this.state = { 
			artist: undefined,
			prints: {}
		};

		this._onArtistStoreChangeBinded = this._onArtistStoreChange.bind(this)
		this._onPrintStoreChangeBinded = this._onPrintStoreChange.bind(this)

		ArtistApi.getBySlug(this.props.idSection);
		ArtistStore.addChangeListener(this._onArtistStoreChangeBinded);

		PrintApi.getByArtist(this.props.idSection);
		PrintStore.addChangeListener(this._onPrintStoreChangeBinded);
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentWillUnmount() {
		ArtistStore.removeChangeListener(this._onArtistStoreChangeBinded);	
		PrintStore.removeChangeListener(this._onPrintStoreChangeBinded);	
	}

	render() {
		// let content = AppStore.pageContent(),
		// 	artistData = AppStore.artistContent(this.props.idSection),
		// 	project = artistData.projects[0],
		// 	photos = [],
		// 	file = undefined
		// for (let i=1; i<=project.nPhotos; ++i) {
		// 	file = (i<10)?'0'+i:i
		// 	photos.push(<div className='project__photo' key={i}><img src={'./assets/images/albums/'+project.album+'/'+file+'.jpg'}></img></div>)
		// }

		let that = this
		let name, bio, projectTitle, projectDesc
		if (this.state.artist) {
			name = this.state.artist.name
			bio = this.state.artist.bio
			projectTitle = this.state.artist.project.title
			projectDesc = this.state.artist.project.desc
		}

		return (
			<div id='page' ref='page-wrapper'>
				<div className='submenu'><a href={'#/project/'+this.props.idSection+'/gallery'}>Contact sheet</a></div>
				<section className='project'>
					<h2 className='project__artist'>{name}</h2>
					<p className='project__desc text text--medium'>{projectDesc}</p>
					<div className='project__album'>
						{Object.keys(this.state.prints).map(function(index){
							let file = that.state.prints[index].file;
							return (
								<div className='project__photo' key={index}><img src={'./assets/images/prints/'+file}></img></div>
							)
						})}
					</div>
				</section>
			</div>
		)
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	_onArtistStoreChange() {
		this.setState({
			artist: ArtistStore.getOne()
		})
	}

	_onPrintStoreChange() {
		this.setState({
			prints: PrintStore.getArtistPrints()
		})
	}
}
