import React from 'react'
import FrontContainer from 'FrontContainer'
import PagesContainer from 'PagesContainer'
import Cart from 'Cart'
import CartStore from 'CartStore'

function _getCartState() {
	return {
		cartItems: CartStore.getCartItems(),
		cartCount: CartStore.getCartCount(),
		cartTotal: CartStore.getCartTotal(),
		cartVisible: CartStore.getCartVisible(),
		cartEnabled: CartStore.getCartEnabled(),
	}
}

export default class AppTemplate extends React.Component {
	
	constructor(props) {
		super(props)

		this.state = _getCartState()
		this._onStoreChangeBinded = this._onStoreChange.bind(this)
		
		CartStore.addChangeListener(this._onStoreChangeBinded);
	}

	componentWillUnmount() {
		CartStore.removeChangeListener(this._onStoreChangeBinded);
	}

	render() {
		return (
			<div id='template'>
				<canvas ref='canvas' className='canvas'></canvas>
				<FrontContainer />
				<PagesContainer />
				<Cart
					products={(this.state) ? this.state.cartItems : ''}
					count={(this.state) ? this.state.cartCount : ''}
					total={(this.state) ? this.state.cartTotal : ''}
					visible={(this.state) ? this.state.cartVisible : ''}
					enabled={(this.state) ? this.state.cartEnabled : ''}
				/>
			</div>
		)
	}

	componentDidMount() {
		GlobalEvents.resize()
	}

	_onStoreChange() {
		this.setState(_getCartState())
	}

}
