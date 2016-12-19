import React, { Component } from 'react';
import Customer from './customer';
import Cart from './cart';

export default class Secondarymenu extends Component {

	render() {

		return (
      <div className="desktop-menu">
        <ul className="secondary-menu top-menu">
          <Customer />
          <Cart />
        </ul>
      </div>
		);

	}

}

// vim: ts=2 sts=2 sw=2 noet
