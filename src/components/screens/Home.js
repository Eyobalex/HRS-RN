import React, {Component} from 'react';
import {FeaturedListingComponent} from '../container';
import {Title, Headline, TouchableRipple} from 'react-native-paper';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Services, Subscription} from '../presentation';
// import {ScrollView} from 'react-navigation';
class Home extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container} >
                <View style={styles.services}>
                    <Services />
                </View>
                <View style={styles.featuredContainer}>
                    <Headline style={{elevation: 10}}>Featured Listing</Headline>
                    <FeaturedListingComponent navigation={this.props.navigation} />
                </View>
                <View style={styles.featuredContainer}>
                    <Headline style={{elevation: 10}}>Subscriptions</Headline>
                    <ScrollView automaticallyAdjustContentInsets nestedScrollEnabled horizontal style={styles.featuredContainer}>
                        <Subscription/>
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1

    },
    services:{
        height: 200
    },
    title:{
        paddingHorizontal: 15
    },
    featuredContainer:{
        paddingHorizontal: 10,
        flex: 1
    }
})
