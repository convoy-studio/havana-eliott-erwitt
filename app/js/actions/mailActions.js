import MailConstants from '../constants/mailConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let MailActions = {

	receiveTemplates : function(data){
		AppDispatcher.handleServerAction({
			actionType: MailConstants.RECEIVE_ALL_TEMPLATES,
			item: data
		});
	}

}

export default MailActions;