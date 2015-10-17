import OrderConstants from '../constants/orderConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let OrderActions = {

	receiveAll : function(orders){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.RECEIVE_ALL_ORDERS,
			item: orders
		});
	},

	receive : function(order){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.RECEIVE_ORDER,
			item: order
		});
	},

	created : function(data){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.CREATED,
			item: data
		});	
	}

}

export default OrderActions;