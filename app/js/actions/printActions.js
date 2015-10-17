import PrintConstants from '../constants/printConstants';
import AppDispatcher from '../dispatchers/appDispatcher';
// import 'fetch';

let PrintActions = {

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

	receiveSlideshow : function(prints){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.RECEIVE_PRINTS_SLIDESHOW,
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
	},

	setPrintZoom : function(id){
		AppDispatcher.handleServerAction({
			actionType: PrintConstants.ZOOM,
			item: id
		});	
	}

}

export default PrintActions;