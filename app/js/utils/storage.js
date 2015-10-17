let storage = null;

if(typeof window !== 'undefined'){
	storage = window.localStorage;	
}else {
	storage = false;
}

export default class Storage {

	static set(key, value){
		if(storage){
			if(typeof value == 'object'){
				value = JSON.stringify(value);
			}
			storage.setItem(key, value);
		}
		
	}

	static get(key){
		if(storage){
			let data = storage.getItem(key);
			if(typeof data == 'string'){
				return data;
			}else if(typeof data == 'object'){
				return JSON.parse(data);
			}
			return false;
		}
	}

	static delete(key){
		if(storage){
			storage.deleteItem(key);	
		}
		
	}

}