import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import ArtistStore from 'ArtistStore'
import ArtistApi from 'ArtistApi'

export default class Projects extends Page {
	constructor(props) {
		super(props)

		// state
		this.state = { 
			artists: {}
		}

		// function binded
		this._onStoreChangeBinded = this._onStoreChange.bind(this)
	}

	componentDidMount() {
		super.componentDidMount()
		
		ArtistApi.getAll();
		ArtistStore.addChangeListener(this._onStoreChangeBinded);
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
			<div className='page page--projects' ref='page-wrapper'>
				<div className='projects__content'>
					<h2 className='projects__title text text--title'>Fellows:</h2>
					<ul>
						{Object.keys(this.state.artists).map(function(index){
							let artist = that.state.artists[index];
							return (
								<li key={index} className='projects__item'><a href={'#/project/'+artist.slug} className='button button--big'><span className='button__content'>{artist.name}</span></a></li>
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
