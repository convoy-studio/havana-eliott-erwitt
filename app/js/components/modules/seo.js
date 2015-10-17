import React, { Component } from 'react';
import Helmet from 'react-helmet';
let config = require('../../config');

export default class Seo extends Component {

	render() {

		return (
			<Helmet
				meta={[
					{'name': 'description', 'content': this.props.seo.description},
					{'property': 'og:type', 'content': 'article'},
					{'property': 'og:title', 'content': this.props.seo.title},
					{'property': 'og:description', 'content': this.props.seo.description},
					{'property': 'og:url', 'content': this.props.seo.url},
					{'property': 'og:image', 'content': this.props.seo.image},
					{'property': 'twitter:card', 'content': 'summary_large_image'},
					{'property': 'twitter:url', 'content': this.props.seo.url},
					{'property': 'twitter:title', 'content': this.props.seo.title},
					{'property': 'twitter:description', 'content': this.props.seo.description},
					{'property': 'twitter:image', 'content': this.props.seo.image}
				]}
			/>
		);

	}
}