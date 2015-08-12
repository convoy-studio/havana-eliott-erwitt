import React from 'react'
import Page from 'Page'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppActions from 'AppActions'
import PrintStore from 'PrintStore'
import PrintApi from 'PrintApi'

export default class Project extends Page {
	constructor(props) {
		super(props)

		this.props = props

		dom('body')
			.removeClass('body--black')
			.addClass('body--white')

		this.state = { 
			prints: {}
		};

		PrintApi.getAll();
		PrintStore.addChangeListener(this._onStoreChange.bind(this, null));

		// create print
		// let print = {
		// 	copies: 10,
		// 	price: 900,
		// 	desc: 'Lorem impsum dolor sit amet.',
		// 	artist: 'Elliott Erwitt',
		// 	city : 'Cuba',
		// 	year : '1964'
		// };
		// PrintApi.create(print);
	}

	render() {
		let that = this
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
			<div id='projectPage' ref='page-wrapper' className='page'>
				<div className='submenu'><a href={'#/project/'+this.props.idSection+'/gallery'}>Contact sheet</a></div>
				<div className='page__content'>
					<section className='project'>
						<div className='project__album'>
							{Object.keys(this.state.prints).map(function(index){
								let src = that.state.prints[index]._id;
								return (
									<div className='project__photo' key={index}><img src={'./assets/images/'+src+'.jpg'}></img></div>
								)
							})}
						</div>
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
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

	_onStoreChange() {
		this.setState({
			prints: PrintStore.getAll()
		})
	}
}
