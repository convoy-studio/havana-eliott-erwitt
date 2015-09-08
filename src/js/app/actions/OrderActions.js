import OrderConstants from 'OrderConstants'
import AppDispatcher from 'AppDispatcher'
import 'fetch'

var OrderActions = {

	created : function(data){
		AppDispatcher.handleServerAction({
			actionType: OrderConstants.CREATED,
			item: data
		});	
	}

}

export default OrderActions


	  
