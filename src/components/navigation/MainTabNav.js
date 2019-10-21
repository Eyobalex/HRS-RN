import {BottomNavigation} from 'react-native-paper';
import React from 'react';
import {HomeStackNav, ListingsStackNav} from './index';

export default class MainTabNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'home', title: 'Home', icon: 'account-balance' },
                { key: 'listings', title: 'Listings', icon: 'list' },
            ],
        };
    }
    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        home: () => <HomeStackNav/>,
        listings: () => <ListingsStackNav/>
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                shifting={true}
            />
        );
    }
}
