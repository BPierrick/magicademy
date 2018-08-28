import React from 'react';

import {
	TouchableHighlight,
} from 'react-native';

import {
	Card,
} from 'react-native-card-view';

import CardTitle from './CardTitle';
import CardDescription from './CardDescription';

import PropTypes from 'prop-types';
import AppActions from '../actions/AppActions';

export default class ProductRow extends React.Component {
	static propTypes = {
		product: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
	}

	render() {
		let product = this.props.product;
		return(
			<TouchableHighlight
				onPress={() => AppActions.selectProduct(product.id)}
				underlayColor='transparent'
				style={{alignItems: 'center'}}
			>			
				<Card styles={{card: {width: 350}}}>
					<CardTitle 
						image={product.image}
						title={product.name}
						productId={product.id}
					/>
					<CardDescription
						description={product.description}
						productId={product.id}
					/>
				</Card>
			</TouchableHighlight>
		);
	}
}