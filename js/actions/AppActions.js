import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var AppActions = {
	receiveProducts: function(data) {
		AppDispatcher.handleAction({
			actionType: AppConstants.RECEIVE_DATA,
			data: data
		});
	},

	receiveVideoLink: function(data) {
		AppDispatcher.handleAction({
			actionType: AppConstants.RECEIVE_LINK,
			data: data
		})
	},

	selectProduct: function(productId) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SELECT_PRODUCT,
			data: productId
		});
	},

	watchVideo: function() {
		AppDispatcher.handleAction({
			actionType: AppConstants.WATCH_VIDEO
		})
	},

	searchProduct: function(text) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SEARCH_PRODUCT,
			data: text
		});
	}
};

module.exports = AppActions;