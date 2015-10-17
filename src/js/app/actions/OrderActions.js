import OrderConstants from 'OrderConstants'
import AppDispatcher from 'AppDispatcher'
import 'fetch'

var OrderActions = {

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

export default OrderActions


	  
