import Boom from 'boom';
import { sort } from 'prestashop-api-client';
import html2text from 'html-to-text';
const P = Promise;


/**
 * @param {prestashop-api-client:models.Product} product
 * @return {prestashop-api-client:models.Product}
 */
const stripHtml = (product) => {
	let attrs = product.attrs;

	['description', 'description_short'].forEach((attr) => {
		attrs[attr] = html2text.fromString(attrs[attr]);
	});

	return product;
};

/**
 * Given a Product model, return a plain object that represents a print.
 * The return structure should resemble a payload expected by React
 * components defined in:
 *
 *	- app/js/components/pages/shop.js
 *	- app/js/components/pages/print.js
 *
 * @async Promise
 * @param {prestashop-api-client:models.Product} product
 * @return {Object}
 */
const transformProduct = (product) => {
	let data = {product: stripHtml(product)};

	return P.all([
		product.combinations().list(),
		product.images().first(),
	])

	// fetch the names and quantities of each product combination
	.then((result) => {

		let [combos, image] = result;
		data = {...data, combos, image};

		return P.all(combos.map((combo) => {
			combo.stock = 0;
			return combo.product_option_values().first().then((povs) => combo.povs = povs);
		}));
	})

	// assign name and quantity properties to each combination
	.then(() => {
		let {product, image, combos} = data;

		let map_combo = (combo, i) => {
			return {
				id: combo.attrs.id,
				product_id: product.attrs.id,
				name: combo.povs ? combo.povs.attrs.name : '',
				//stock: combo.stock ? combo.stock.attrs.quantity : 0,
				stock: 0,
				logistic_id: combo.attrs.reference,
			};
		};

		combos = combos.map(map_combo).sort(sort.ascending((combo) => combo.name || combo.id));

		let DEPRECATED = 'DEPRECATED';

		let payload = {
			'id': product.attrs.id,
			'name': product.attrs.name,
			'manufacturer': product.attrs.manufacturer_name,
			'image': image ? image.attrs.src : '',
			'description': product.attrs.description,
			'price': product.attrs.price,
			'alt': product.attrs.description_short,
			'combinations': combos,
			//'forsale': combos.reduce((forsale, combo) => combo.stock > 0 || forsale, false),
			'forsale': true,
		};

		return payload;
	})
};

/**
 * Return a route handler function that replies with a list of print payloads
 * @param void
 * @return {Function}
 */
const createListHandler = () => {
	return ;
};

/**
 * Return a route handler function that replies with a single 
 * @param {String} attribute - the PrestaShop product attribute
 * @param {Function} resolver - a function that resolves the value of the attribute given a request
 * @return {Function}
 */
const createAttributeQueryHandler = (attribute, resolver) => {
	return ;
};


export default {

	getForSale : {

		handler: (req, reply) => {
			let {client} = req.server.app.prestashop;
			let {language} = req.params;
			let {cache} = req.server.app;
			let key = `${language}:prints:forsale`
			let payload = cache.get(key);

			if (payload) {
				return reply(payload);
			}

			client.setLanguageIso(language);

			return client.resource('products').list()
				.then((products) => P.all(products.map(transformProduct)))
				.then((payload) => {
					cache.set(key, payload);
					return reply(payload);
				})
				.catch((e) => reply(Boom.badImplementation(e)));
		}
	},

	getOneForsale : {
		handler : (req, reply) => {
			let {client} = req.server.app.prestashop;
			let {token: id, language} = req.params;
			let {cache} = req.server.app;
			let key = `${language}:print:${id}`;
			let payload = cache.get(key);

			if (payload) {
				return reply(payload);
			}

			client.setLanguageIso(language);

			return client.resource('products').get(id)
				.then(transformProduct)
				.then((payload) => {
					cache.set(key, payload);
					return reply(payload);
				})
				.catch((e) => reply(Boom.badImplementation(e)));
		},
	},

};

// vim: ts=2 sts=2 sw=2 noet
