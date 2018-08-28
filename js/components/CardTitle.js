import React from 'react';

import {
    ImageBackground,
    Text,
    Image,
    Animated,
    StyleSheet
} from 'react-native';

import {
    CardImage
} from 'react-native-card-view';

import PropTypes from 'prop-types';
import CardStore from '../stores/CardStore';

function getSelectedProduct() {
    return CardStore.getSelected()
}

const animationDuration = 300;

export default class CardTitle extends React.Component {
    static propTypes = {
        image: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired
	};

    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            animation: new Animated.Value(83)
        };

        this._onChangeSelectedProduct = this._onChangeSelectedProduct.bind(this);
    }

    componentDidMount() {
		CardStore.addChangeListener(this.props.productId, this._onChangeSelectedProduct);
    }
    
    componentWillUnmount() {
        CardStore.removeChangeListener(this.props.productId, this._onChangeSelectedProduct);
    }

    _onChangeSelectedProduct() {
        if(this.state.isSelected){
            setTimeout(() => {
                Animated.timing(
                    this.state.animation, {
                        toValue: 83,
                        duration: animationDuration
                    }
                ).start();
            }, animationDuration);
        }

        this.setState({
            isSelected: getSelectedProduct() == this.props.productId
        }, () => {
            if(this.state.isSelected)
            {
                Animated.timing(
                    this.state.animation, {
                        toValue: 300,
                        duration: animationDuration
                    }
                ).start();
            }
        })
    }

    render() {
        let title = this.props.title,
            image = this.props.image;
        

        return(
            <CardImage>
                <ImageBackground
                    style={styles.background}
                    source={image}
                >
                    <Animated.View style={{height: this.state.animation}}>
                        <Text style={styles.title} numberOfLines={2}>{title}</Text>
                    </Animated.View>
                </ImageBackground>
            </CardImage>
        );
    }
}

var styles = StyleSheet.create({
	title: {
		fontSize: 36,
		color: 'white',
		fontWeight: 'bold',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10,
		padding: 10
    },

    background: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: -20,
        width: 300,
        overflow: 'hidden'
    }
});