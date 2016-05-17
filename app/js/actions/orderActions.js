import OrderConstants from '../constants/orderConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let OrderActions = {

	receiveAll : function(orders){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.RECEIVE_ALL_ORDERS,
			item: orders
		});
	},

	receivePaid : function(orders){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.RECEIVE_PAID_ORDERS,
			item: orders
		});
	},

	receiveDelivered : function(orders){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.RECEIVE_DELIVERED_ORDERS,
			item: orders
		});
	},

	receive : function(order){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.RECEIVE_ORDER,
			item: order
		});
	},

	stateUpdated : function(data){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.STATE_UPDATED,
			item: data
		});
	},

	created : function(data){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.CREATED,
			item: data
		});
	},

    setPaymentForm: function(data){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.SET_PAYMENT_FORM,
			item: data
		});
	}
}

export default OrderActions;
