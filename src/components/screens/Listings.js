import React, {Component} from 'react';
import {ListingsComponent} from '../container';
import {View} from 'react-native';
import {Headline} from 'react-native-paper';


class Listings extends Component {
    render() {

        return (
            <View style={{flex: 1,marginHorizontal: 10 }}>
                {/*<Headline style={{fontSize: 36, height: 50, padding:5}}>Listings</Headline>*/}
                <ListingsComponent navigation={this.props.navigation } />
            </View>
        );
    }
}

export default Listings;
