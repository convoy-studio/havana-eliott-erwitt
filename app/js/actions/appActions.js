import AppConstants from '../constants/appConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

var AppActions = {

    pageHasherChanged: function(pageId) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.PAGE_HASHER_CHANGED,
            item: pageId
        });
    },

    windowResize: function(windowW, windowH) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.WINDOW_RESIZE,
            item: { windowW:windowW, windowH:windowH }
        });
    },

    disableSplash: () => {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SPLASH_DISABLED,
            item: false
        });
    }
}

export default AppActions;
