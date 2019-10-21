import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Home, Detail} from '../screens';
import {Appbar} from 'react-native-paper';
import React from 'react';
import {featureNotImplemented} from '../../constants/Helpers';

const HomeStackNavigator = createStackNavigator({
    Home:{
        screen: Home,
    },
    Detail:{
        screen: Detail,
    }
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            // alert(JSON.stringify(navigation))
            return ({
                header: (
                    <Appbar>
                        {navigation.state.routeName === 'Home' ? <></>: <Appbar.BackAction onPress={() => navigation.goBack()} />}
                        <Appbar.Content title={navigation.state.routeName}/>
                        <Appbar.Action icon="mail"  onPress={()=> featureNotImplemented('Notification')}/>
                    </Appbar>
                ),
            })
        },
        initialRouteName: 'Home'
    });

export default createAppContainer(HomeStackNavigator);



