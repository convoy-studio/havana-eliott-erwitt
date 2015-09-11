import React from 'react';
import AuthenticatedComponent from 'AuthenticatedComponent'

export default AuthenticatedComponent(class Admin extends React.Component {
	render() {
		return (<h1>Hello {this.props.user ? this.props.user.username : ''}</h1>);
	}
});
