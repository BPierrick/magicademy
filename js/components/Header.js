import React from 'react';
import {
    View,
    Image
} from 'react-native';

export default class Header extends React.Component {
    render() {
        return(
            <View
                style={{flex: 1, height: 100}}
            >
                <Image
                    style={{flex: 1, height: 100}}
                    source={'../src/magicademy_logo.png'}
                />
            </View>
        );
    }
}