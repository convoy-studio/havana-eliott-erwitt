import PrintConstants from 'PrintConstants'
import AppDispatcher from 'AppDispatcher'
import 'fetch'

var PrintActions = {

	receiveAll : function(prints){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.RECEIVE_ALL_PRINTS,
			item: prints
		});
	},

	receiveForSale : function(prints){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.RECEIVE_PRINTS_FORSALE,
			item: prints
		});
	},

	receiveFromArtist : function(prints){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.RECEIVE_ARTIST_PRINTS,
			item: prints
		});
	},

	receive : function(print){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.RECEIVE_PRINT,
			item: print
		});
	},

	receiveError : function(error){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.ERROR,
			item: error
		});
	}

}

export default PrintActions


	  
