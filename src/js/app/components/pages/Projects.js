import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import ArtistStore from 'ArtistStore'
import ArtistApi from 'ArtistApi'

export default class Projects extends Page {
	constructor(props) {
		super(props)

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')

		this._onStoreChangeBinded = this._onStoreChange.bind(this)
		this.state = { 
			artists: {}
		};

		ArtistApi.getAll();
		ArtistStore.addChangeListener(this._onStoreChangeBinded);
	}

	componentDidMount() {
		super.componentDidMount()
	}

	componentWillUnmount() {
		ArtistStore.removeChangeListener(this._onStoreChangeBinded);
	}

	render() {
		let that = this
		// let artistsData = AppStore.artistsContent()
		// let artistsItems = []
		// for (let artist in artistsData) {
		// 	artistsItems.push(<li key={artist}><a href={'#/project/'+artist}>{artistsData[artist].name}</a></li>)
		// }
		let content = AppStore.pageContent()
		return (
			<div id='projectsPage' ref='page-wrapper' className='page'>
				<div className='page__content'>
					<ul>
						{Object.keys(this.state.artists).map(function(index){
							let artist = that.state.artists[index];
							return (
								<li key={index}><a href={'#/project/'+artist.slug}>{artist.name}</a></li>
							)
						})}
					</ul>
				</div>
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

	_onStoreChange() {
		this.setState({
			artists: ArtistStore.getAll()
		})
	}
}
