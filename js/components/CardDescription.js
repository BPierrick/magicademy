import React from 'react';

import {
    ImageBackground,
    Text,
    View,
    Animated,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

import {
    CardContent
} from 'react-native-card-view';

import PropTypes from 'prop-types';
import AppActions from '../actions/AppActions';
import CardStore from '../stores/CardStore';

function getSelectedProduct() {
    return CardStore.getSelected()
}

const animationDuration = 300;
const textWidth = 300;
const fontSize = 11;

export default class CardDescription extends React.Component {
    static propTypes = {
        description: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired
	};

    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            textHeight: undefined,
            openCardAnimation: new Animated.Value(0),
            textOpacityAnimation: new Animated.Value(0)
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
            Animated.sequence([
                Animated.timing(
                    this.state.textOpacityAnimation,
                    {
                        toValue: 0,
                        duration: animationDuration
                    }
                ),
                Animated.timing(
                    this.state.openCardAnimation, 
                    {
                        toValue: 0,
                        duration: animationDuration
                    }
                )
            ]).start((state) =>{
                if(!state.finished) {
                    this.state.textOpacityAnimation.setValue(0);
                    this.state.openCardAnimation.setValue(0);
                }
            });
        }

        this.setState({
            isSelected: getSelectedProduct() == this.props.productId
        }, () => {
            let height = this.state.textHeight + 120;

            if(this.state.isSelected)
            {
                Animated.sequence([
                    Animated.timing(
                        this.state.openCardAnimation, 
                        {
                            toValue: height,
                            duration: animationDuration
                        }
                    ),
                    Animated.timing(
                        this.state.textOpacityAnimation,
                        {
                            toValue: 1,
                            duration: animationDuration
                        }
                    )
                ]).start((state) => {
                    if(!state.finished) {
                        this.state.textOpacityAnimation.setValue(1);
                        this.state.openCardAnimation.setValue(height);
                    }
                });
            }
        })
    }

    _getDimentions(event) {
        this.setState({
            textHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let description = this.props.description;
    
        if(this.state.textHeight) {
            return(
                <CardContent>
                    <Animated.View style={{height: this.state.openCardAnimation, justifyContent: 'flex-start'}}>
                            <Animated.Text 
                                style={[styles.description, {opacity: this.state.textOpacityAnimation}]}
                            >
                                {description}
                            </Animated.Text>
                            <Animated.View 
                                style={{opacity: this.state.textOpacityAnimation, justifyContent: 'center'}}
                            >
                                <TouchableOpacity
                                    style={styles.shadow}
                                >
                                    <Button 
                                        title='Regarder la Vidéo'
                                        onPress={() => AppActions.watchVideo()}
                                        color='#c7ab48'
                                    />
                                </TouchableOpacity>
                            </Animated.View>
                    </Animated.View>
                </CardContent>
            );
        } else {
            return(
                <View 
                    style={{flex: 1, opacity: 0}}
                    onLayout={this._getDimentions.bind(this)}
                >
                    <Text style={{opacity: 0}}>
                        {description}
                    </Text>
                </View>
            )
        }
    }
}

var styles = StyleSheet.create({
	description: {
		textAlign: 'justify',
        width: 300,
        marginBottom: 20,
        marginTop: 30
    },
    
    shadow: {
        borderRadius:25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    }
});