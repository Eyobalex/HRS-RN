import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Login, Registration} from '../presentation';
import {createAppContainer} from "react-navigation";
import {BottomNavigation} from 'react-native-paper';
import React from 'react';

// const BottomTabNavigator = createMaterialBottomTabNavigator({
//     SignIn:{ screen: Login},
//     SignUp: {screen: Registration}
// },
//     {
//         initialRouteName: 'SignIn',
//         activeColor: '#f0edf6',
//         inactiveColor: '#3e2465',
//     });
export default class BottomTabNavigator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'signIn', title: 'Sign In', icon: 'person' },
                { key: 'signUp', title: 'Sign Up', icon: 'person-add' },
            ],
        };
    }
    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        signIn: ()=><Login navigation={this.props.navigation}/>,
        signUp: ()=><Registration navigation={this.props.navigation}/>,
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
