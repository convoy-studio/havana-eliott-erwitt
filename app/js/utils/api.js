import callApi from '../middlewares/api';


export default class Api {

	static get(endpoint){
		return callApi({
			endpoint: endpoint
		});
	}

	static post(endpoint, data){
		return callApi({
			endpoint: endpoint,
			method : 'post',
			data: data
		});
	}

	static put(endpoint, data){
		return callApi({
			endpoint: endpoint,
			method : 'put',
			data: data
		});
	}

	static delete(endpoint, data){
		return callApi({
			endpoint: endpoint,
			method : 'delete',
			data: data
		});
	}
}