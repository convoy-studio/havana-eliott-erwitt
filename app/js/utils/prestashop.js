import _ from 'lodash';
import path from 'path';
import lang from './lang';

/**
 * Return a query string
 * @param {Object} query
 * @return {String}
 */
const stringify = (query) => {
  let encode = encodeURIComponent;
  let pairs = _.map(query, (v, k) => `${encode(k)}=${encode(v)}`);

  return pairs.join('&');
};


class Client {

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
   * @param 
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
   * @param {String} uri - the request path
   * @param {Object} query - query parameters
   * @return {String}
   */
  url (uri, query) {
    let opts = this.options;
    let url = path.join(opts.basePath, uri);

    if (!lang.empty(query)) {
      url += '?' + stringify(query);
    }

    return url;
  }

  /**
   * @param {Object} augments
   * @return {Object}
   */
  createFetchOptions (augments={}) {
    let opts = this.options;

    return {
      mode: 'cors',
      cache: 'default',
      ...augments,
    };
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

const api = {};

export default { api };

