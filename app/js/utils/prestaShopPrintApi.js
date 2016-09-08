import { rest, sort } from 'prestashop-api-client';
import PrintActions from '../actions/printActions';
const P = Promise;

/**
 * Given a Product model, return a plain object that represents a print.
 * The return structure should resemble a payload expected by React
 * components defined in:
 *
 *	- app/js/components/pages/shop.js
 *	- app/js/components/pages/print.js
 *
 * @param {prestashop-api-client:models.Product} product
 * @return {Object}
 */
const transformProduct = (product) => {
	let data = {product};

	// load product relations
	return P.all([
		product.manufacturer().first(),
		product.combinations().list(),
		product.images().first(),
	])

	// hold onto the product relations, then fetch the names and quantities 
	// of each product combination
	.then((result) => {
		let [manufacturer, combos, image] = result;
		data = {...data, manufacturer, combos, image};

		return P.all([
			P.all(combos.map(combo => combo.product_option_values().list())),
			P.all(combos.map(combo => combo.stock_availables().first())),
		])
	})

	// assign the "name" property to each combination
	.then((result) => {
		let {product, manufacturer, combos, image} = data;
		let [povs, stocks] = result;

		// the combination name comes from product_option_values()
		let assign_name = (combo, i) => combo.set('name', povs[i].name);
		let assign_quantity = (combo, i) => combo.set('quantity', stocks[i].quantity);

		let assign_props = (combo, i) => {
			assign_name(combo, i);
			assign_quantity(combo, i);
			return combo;
		};

		data.combos = combos.map(assign_props);
	})

	.then(() => {
		let {product, manufacturer, combos, image} = data;

		combos = combos.sort(sort.ascending((combo) => combo.name));

		let serials = combos.map((combo) => combo.quantity > 0);

		let deprecated = 'DEPRECATED';

		return {
			'token': product.id,
			'title': product.name,
			'city': deprecated,
			'country': deprecated,
			'year': deprecated,
			'file': deprecated,
			'image': image.src,
			'alt': product.description_short,
			'copies': serials.length,
			'serials': serials,
			'desc': product.description,
			'price': product.price,
			'forsale': product.available_for_order,
			'logistic_id': null, // what do we do about this?
		};

	})

};

export default class {

	/**
	 * Return instance configuration defaults
	 * @param void
	 * @return {Object}
	 */
	defaults () {
		return {
			client: null,
		};
	}

	/**
	 * @param {Object} options
	 *	@param {String} language
	 *	@param {prestashop-api-client:rest.Client} client
	 */
	constructor (options={}) {
		this.options = {...this.defaults(), ...options};
		this.client = this.options.client;
	}

	/**
	 * Retrieve a list of Products from the Prestashop API, then convert them to
	 * Print payloads.
	 * @async Promise
	 * @param void
	 * @return {Array}
	 */
	getForSale () {
		return this.client.resource('products').list()
		.then((products) => P.all(products.map(transformProduct)))
		.then((prints) => PrintActions.receiveForSale(prints))
	}

	/**
	 * Retrive a single Product from the Prestashop API, then convert it to a
	 * Print payload.
	 * @async Promise
	 * @param mixed id
	 * @return {Object}
	 */
	getOne (id) {
		return this.client.resource('products').get(id)
		.then(transformProduct)
		.then((print) => PrintActions.receive(print))
	}

}

// vim: ts=2 sts=2 sw=2 noet
