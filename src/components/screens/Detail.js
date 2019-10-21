import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {DetailComponent} from '../container';

class Detail extends Component {
    render() {
        const listing = this.props.navigation.getParam('listing', null);
        const owner = this.props.navigation.getParam('owner', null);
        return (
            <View>
                <DetailComponent listing={listing} owner={owner} />
            </View>
        );
    }
}

export default Detail;
