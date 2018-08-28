import {
	AsyncStorage,
} from 'react-native';

var AppActions = require('../actions/AppActions');

/*export default class CartAPI extends React.Component */
module.exports = {
	getProductData() {
		AsyncStorage.getItem('@Magicademy:products', (err, response) => {
            var data = JSON.parse(response);
			AppActions.receiveProducts(data);
		});
	},

	getVideoLink() {
		AsyncStorage.getItem('@Magicademy:videoLink', (err, response) => {
			var data = JSON.parse(response);
			AppActions.receiveVideoLink(data);
		})
	}
}