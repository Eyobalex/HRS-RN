import React, {Component} from 'react';
import {Listings} from '../presentation';
import {FlatList, Text, View} from 'react-native';
import {ActivityIndicator, TouchableRipple} from 'react-native-paper';
import {connect} from 'react-redux';
import {fetchListings, fetchUsers} from '../../store/Actions';

const MapStateToProps = (store) => ({
    listings: store.listings,
    users: store.users
});

const MapDispatchToProps = dispatch => ({
    fetchListings:() => dispatch(fetchListings()),
    fetchUsers:() => dispatch(fetchUsers())
});

class FeaturedListingComponent extends Component {

    componentDidMount() {
        this.props.fetchListings();
        this.props.fetchUsers();
    }

    _KeyExtractor =({item, index}) => index;
    _renderItem = ({item, index}) =>{

        // alert(JSON.stringify(this.props.users.users.filter((user)=> user.id === item.ownerId)))
        const o = this.props.users.users.filter((user)=> user.id === item.ownerId)[0];
        const owner = o ? o : {
            id:1,
            name: "Antonyms",
            image: "https://lh3.googleusercontent.com/zszeyucKpsb-gI2trgEIDnBL4bHlk1wQYXP7Kw1PcQUPs_9OsMTz8W1GJN-ziQHL7312FFtOWc-Z5YinUEAuQ6SS"
        };
        return (
            <TouchableRipple
                onPress={() => this.props.navigation.navigate('Detail', {listing: item, owner: owner}) }
                rippleColor="rgba(0, 0, 0, .32)"
            >
                {/*<Text>h</Text>*/}
                <Listings owner={owner} listing={item} featured={true}/>
            </TouchableRipple>
            )
                }
    render() {



        if (this.props.listings.isLoading){
            return <ActivityIndicator animating={true} size={'large'} color={'green'} />;
        }else if (this.props.listings.error){
            return <View>
                <Text> {this.props.listings.error}</Text>
            </View>
        }else {
            return (
                <FlatList
                    nestedScrollEnabled
                    data={this.props.listings.listings}
                    keyExtractor={this._KeyExtractor}
                    renderItem={this._renderItem}/>

            );

        }
        // return (this.state.listings.map((item, index) =>(
        //     <FeaturedListing listing={item} owner={this.state.owner}/>
        // )));
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(FeaturedListingComponent);
