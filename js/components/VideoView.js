import React from 'react';
import {
    WebView,
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';

var {height, width} = Dimensions.get('window');

export default class VideoView extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <WebView
                style={styles.video}
                source={{uri: this.props.url}}
            />
        );
    }
}

var styles = StyleSheet.create({
    video: {
        width: width,
        height: 200
    }
});