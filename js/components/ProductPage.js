import React from 'react';
import {
    View,
    Text,
    WebView,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

import VideoView from './VideoView';
import AppStore from '../stores/AppStore'

var {height, width} = Dimensions.get('window');

function getVideoLink() {
    return {
        videoLink: AppStore.getVideoLink()
    }
}

export default class VideoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = getVideoLink();
    }

    render() {
        var videoLink = this.state.videoLink;
        return(
            <VideoView 
                url={videoLink}
            />
        );
    }
}

var styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },

    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    thumbnail: {
        width: width/3,
        height: width/3,
    },

    name: {
        fontSize: 25,
    },

    description: {

    },

    video: {
        width: width,
        height: 200
    }
})