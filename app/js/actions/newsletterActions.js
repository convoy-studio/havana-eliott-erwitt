import NewsletterConstants from '../constants/newsletterConstants';
import AppDispatcher from '../dispatchers/appDispatcher';

let NewsletterActions = {

	receiveAll : function(mails){
		AppDispatcher.handleServerAction({
			actionType: NewsletterConstants.RECEIVE_ALL_NEWSLETTER,
			item: mails
		});
	},

	receive : function(mail){
		AppDispatcher.handleServerAction({
			actionType: NewsletterConstants.RECEIVE_NEWSLETTER,
			item: mail
		});
	},

	created : function(data){
		AppDispatcher.handleServerAction({
			actionType: NewsletterConstants.NEWSLETTER_CREATED,
			item: data
		});	
	},

	unsubscribed : function(data){
		AppDispatcher.handleServerAction({
			actionType: NewsletterConstants.NEWSLETTER_UNSUBSCRIBE,
			item: data
		});	
	}

}

export default NewsletterActions;