import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {
	Actions
} from 'react-native-router-flux';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

_selectedProductId = -1; _prevSelectedProductId = -1; _isAnimated = false;

function setSelectedProduct(data) {
	_prevSelectedProductId = _selectedProductId;
	_selectedProductId = _selectedProductId == data ? -1 : data;
	_isAnimated = true;
}

var CardStore = assign({}, EventEmitter.prototype, {

	getSelected: function() {
		return _selectedProductId;
	},

	emitChange: function() {
		this.emit('selectedChange' + _selectedProductId);
		this.emit('selectedChange' + _prevSelectedProductId);
	},

	addChangeListener: function(productId, callback) {
		this.on('selectedChange'  + productId, callback);
	},

	removeChangeListener: function(productId, callback) {
		this.removeListener('selectedChange'  + productId, callback);
	},
});

AppDispatcher.register((payload) => {
	var action = payload.action;

	switch(action.actionType) {

		case AppConstants.SELECT_PRODUCT:
			setSelectedProduct(action.data);
			break;

		default:
			return true;
	}

	CardStore.emitChange();

	return true;
});

module.exports = CardStore;