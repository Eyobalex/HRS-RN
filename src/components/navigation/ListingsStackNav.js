import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Detail, Listings} from '../screens';
import {Appbar} from 'react-native-paper';
import React from 'react';
import {featureNotImplemented} from '../../constants/Helpers';

const ListingsStackNavigator = createStackNavigator({
    Listings:{
        screen: Listings,
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
                        {navigation.state.routeName === 'Listings' ? <></>: <Appbar.BackAction onPress={() => navigation.goBack()} />}
                        <Appbar.Content title={navigation.state.routeName}/>
                        <Appbar.Action icon="mail"  onPress={()=> featureNotImplemented('Notification')}/>
                    </Appbar>
                ),
            })
        },
        initialRouteName: 'Listings'
    });

export default createAppContainer(ListingsStackNavigator);



