import React from 'react';
import {
    View,
    Text,
    FlatList,
	StyleSheet,
	ImageBackground,
	Animated,
	Platform
} from 'react-native';
import ProductRow from './ProductRow';
import {
	SearchBar
} from 'react-native-elements';
import Sifter from 'sifter';

import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import productAPI from '../utils/productAPI';

const NAVBAR_HEIGHT = 48;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function getProductState() {
    return {
        products: AppStore.getProducts(),
		hasLoaded: AppStore.getLoaded(),
    }
}

export default class Home extends React.Component {

	_clampedScrollValue = 0;
	_offsetValue = 0;
	_scrollValue = 0;

    constructor(props) {
		super(props);
		
		const scrollAnim = new Animated.Value(0);
		const offsetAnim = new Animated.Value(0);

		this.state = Object.assign(getProductState(), {
			scrollAnim,
			offsetAnim,
			clampedScroll: Animated.diffClamp(
				Animated.add(
					scrollAnim.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 1],
						extrapolateLeft: 'clamp',
					}),
					offsetAnim,
				),
				0,
				NAVBAR_HEIGHT,
			),
		});

		this._onChangeProduct = this._onChangeProduct.bind(this);
    }

    componentDidMount() {
		if (!this.state.hasLoaded) {
			productAPI.getProductData();
			productAPI.getVideoLink();
		}

		this.state.scrollAnim.addListener(({ value }) => {
			// This is the same calculations that diffClamp does.
			const diff = value - this._scrollValue;
			this._scrollValue = value;
			this._clampedScrollValue = Math.min(
				Math.max(this._clampedScrollValue + diff, 0),
				NAVBAR_HEIGHT,
			);
		});
		this.state.offsetAnim.addListener(({ value }) => {
			this._offsetValue = value;
		});

		AppStore.addChangeListener(this._onChangeProduct);
    }
    
    componentWillUnmount() {
		AppStore.removeChangeListener(this._onChangeProduct);
		this.state.scrollAnim.removeAllListeners();
    	this.state.offsetAnim.removeAllListeners();
	}
	
	shouldComponentUpdate() {
		if(this.listRef) {
			this.listRef.getNode().scrollToIndex({
			animated: true,
			index: 0,
			viewOffset: 48,
			viewPosition: 0
			});
		}
		return true;
	}

    _onChangeProduct() {
        this.setState(getProductState());
	}

	_onScrollEndDrag = () => {
		this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
	}

	_onMomentumScrollBegin = () => {
		clearTimeout(this._scrollEndTimer);
	}

	_onMomentumScrollEnd = () => {
	// Code to handle scroll end animation will go here.
		const toValue = this._scrollValue > NAVBAR_HEIGHT && this._clampedScrollValue > (NAVBAR_HEIGHT) / 2
		? this._offsetValue + NAVBAR_HEIGHT
		: this._offsetValue - NAVBAR_HEIGHT;

		Animated.timing(this.state.offsetAnim, {
			toValue,
			duration: 350,
			useNativeDriver: true,
		}).start();
	}

	getItemLayout = (data, index) => {
		return { length: 83, offset: 48, index: index}
	}
	
	renderFooter() {
		return(
			<View style={{height: 52}}/>
		);
	}

    render() {
        if (!this.state.hasLoaded) {
			return (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text>Loading...</Text>
				</View>
			);
		}

		const { clampedScroll } = this.state;

		const searchBarTranslate = clampedScroll.interpolate({
			inputRange: [0, NAVBAR_HEIGHT],
			outputRange: [0, -(NAVBAR_HEIGHT)],
			extrapolate: 'clamp',
		});
		const searchBarOpacity = clampedScroll.interpolate({
			inputRange: [0, NAVBAR_HEIGHT],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		});
        
		return(
			<View style={{flex: 1}}>
				
				<ImageBackground
					style={styles.background}
					source={require('../../assets/background.jpg')}
					blurRadius={10}
				>
					<View style={{flex: 1}}>
						<AnimatedFlatList
							style={styles.container}
							data={this.state.products}
							ref={(ref) => {this.listRef = ref;}}
							getItemLayout={this.getItemLayout}
							ListFooterComponent={this.renderFooter()}
							renderItem={({item}) => {return(
								<ProductRow
									product={item}
								/>
							)}}
							keyExtractor={item => item.id}
							scrollEventThrottle={1}
							onScroll={Animated.event(
								[{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
								{ useNativeDriver: true },
							)}
							onMomentumScrollBegin={this._onMomentumScrollBegin}
							onMomentumScrollEnd={this._onMomentumScrollEnd}
							onScrollEndDrag={this._onScrollEndDrag}
						/>
					</View>
					<Animated.View style={[styles.navbar, {transform: [{ translateY: searchBarTranslate }], opacity: searchBarOpacity}]}>
						<SearchBar
							platform='dault'
							lightTheme={true}
							cancelButtonTitle="Cancel"
							placeholder='Rechercher...'
							onChangeText={(text) => AppActions.searchProduct(text)}
						/>
					</Animated.View>
				</ImageBackground>
			</View>
		);
    }
}

var styles = StyleSheet.create({

	navbar: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},

	container: {
		paddingTop: 48
	},

	background: {
		flex: 1,
		backgroundColor: 'rgb(180, 180, 180)'
	}
})