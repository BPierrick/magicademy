import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {
	Actions
} from 'react-native-router-flux';
import Sifter from 'sifter';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _products = [], _hasLoaded = false, _videoLink = '', _data = [];

function loadProductData(data) {
	if(_data.length == 0) {
		_data = data;
	}

	_products = data;
	_hasLoaded = true;
}

function loadVideoLink(data) {
	_videoLink = data.videoLink;
}

function loadVideoPage() {
	Actions.productPage();
}

function searchProduct(text) {
	if (_data === undefined || _data.length == 0) {
		return;
	}

	var sifter = new Sifter(_data);
	var result = sifter.search(text, {
		fields: ['name'],
		sort: [{field: 'name', direction: 'asc'}]
	});

	if(result.total == 0 || result.total == _data.length) {
		loadProductData(_data);
		return;
	}

	var productsSearched = [];

	result.items.forEach(element => {
		productsSearched.push(_data[element.id])
	});

	loadProductData(productsSearched);
}

var AppStore = assign({}, EventEmitter.prototype, {
	getProducts: function() {
		return _products;
	},

	getLoaded: function() {
		return _hasLoaded;
	},

	getVideoLink: function() {
		return _videoLink;
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
});

AppDispatcher.register((payload) => {
	var action = payload.action;

	switch(action.actionType) {
		case AppConstants.RECEIVE_DATA:
			loadProductData(action.data);
			break;

		case AppConstants.RECEIVE_LINK:
			loadVideoLink(action.data);
			break;

		case AppConstants.WATCH_VIDEO:
			loadVideoPage();
			break;
		
		case AppConstants.SEARCH_PRODUCT:
			searchProduct(action.data);
			break;

		default:
			return true;
	}

	AppStore.emitChange();

	return true;
});

module.exports = AppStore;