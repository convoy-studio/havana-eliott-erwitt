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

    // pageHasherChanged: function(pageId) {
    //     AppDispatcher.handleViewAction({
    //         actionType: AppConstants.PAGE_HASHER_CHANGED,
    //         item: pageId
    //     })  
    // },

    // windowResize: function(windowW, windowH) {
    //     AppDispatcher.handleViewAction({
    //         actionType: AppConstants.WINDOW_RESIZE,
    //         item: { windowW:windowW, windowH:windowH }
    //     })
    // },

}

export default PrintActions


      
