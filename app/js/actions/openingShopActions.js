import OpeningShopConstants from '../constants/openingShopConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let OpeningShopActions = {

	receiveAll : function(mails){
		AppDispatcher.handleServerAction({
			actionType: OpeningShopConstants.RECEIVE_ALL_OPENINGSHOP,
			item: mails
		});
	},

	receive : function(mail){
		AppDispatcher.handleServerAction({
			actionType: OpeningShopConstants.RECEIVE_OPENINGSHOP,
			item: mail
		});
	},

	created : function(data){
		AppDispatcher.handleServerAction({
			actionType: OpeningShopConstants.OPENINGSHOP_CREATED,
			item: data
		});	
	}

}

export default OpeningShopActions;