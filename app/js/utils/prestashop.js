import _ from 'lodash';
import path from 'path';
import lang from './lang';
import React from 'react';
const P = Promise;

////////////////////////////////////////////////////////////////////////////////
export const util = {};

/**
 * Browser-safe query serializer
 * @param {Object} query
 * @return {String}
 */
const stringify_query = util.stringify_query = (query) => {
	let encode = encodeURIComponent;
	let pairs = _.map(query, (v, k) => `${encode(k)}=${encode(v)}`);

	return pairs.join('&');
};

////////////////////////////////////////////////////////////////////////////////
export const rest = {};

rest.Client = class Client {

	/**
	 * Return instance configuration defaults
	 * @param void
	 * @return {Object}
	 */
	defaults () {
		return {
			basePath: '/shop.php',
			fetch: fetch, //--> for testing
		};
	}

	/**
	 * @param {Object} options
	 */
	constructor (options={}) {
		this.options = {...this.defaults(), ...options};
	}

	/**
	 * Send a GET request
	 * @param {String} url
	 * @param {Object} query
	 * @return {Response}
	 */
	get (uri, query={}) {
		let url = this.url(uri, query);
		let fopts = this.createFetchOptions({method: 'GET'});
		let fetch = this.options.fetch;

		return fetch(url, fopts).then((response) => {
			this.validateResponse(response);
			return response;
		});
	}

	/**
	 * @param {Object} augments
	 * @return {Object}
	 */
	createFetchOptions (augments={}) {
		return {cache: 'default', ...augments};
	}

	/**
	 * @param {Response} response
	 * @return void
	 * @throws Error
	 */
	validateResponse (response) {
		if (!response.ok) {
			throw new Error('got non-2XX HTTP response status');
		}
	}

}

/**
 * @param void
 * @return {prestashop.rest.Client}
 */
rest.Client.instance = () => {
	if (!this.singleton) {
		this.singleton = new this();
	}
	return this.singleton;
};


const Resource = rest.Resource = class Resource {

	/**
	 * Return instance configuration defaults
	 * @param void
	 * @return {Object}
	 */
	defaults () {
		return {
			rest: rest.Client.instance(),
			root: '/path/to/resource',
		};
	}

	/**
	 * @param {Object} options
	 */
	constructor (options={}) {
		this.options = {...this.defaults(), ...options};
	}

	/**
	 * Return an Array containing loaded* Model instances. Calling contexts
	 * may supply a dictionary of implementation-specific options.
	 * @async Promise
	 * @param {Object} options
	 * @return {Array}
	 */
	list (options={}) {
		throw new Error('not implemented');
	}

	/**
	 * Return a single Model instance identified by id
	 * @async Promise
	 * @param {mixed} id
	 * @return {Model|null}
	 */
	find (id) {
		throw new Error('not implemented');
	}

}

/**
 * Model is a naive attribute container
 */
const Model = rest.Model = class Model {

	/**
	 * Return default model attributes
	 * @param void
	 * @return {Object}
	 */ 
	defaults () {
		return {}; 
	}

	/**
	 * @param {Object} attrs
	 */
	constructor (attrs={}) {
		this.attrs = {...this.defaults(), ...attrs};
	}
}

// vim: ts=2 sts=2 sw=2 noet
