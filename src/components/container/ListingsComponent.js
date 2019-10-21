import React, {Component} from 'react';
import {Listings} from '../presentation';
import {FlatList} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {connect} from 'react-redux';
import {fetchListings, fetchUsers} from '../../store/Actions';

const MapStateToProps = state => ({
    listings: state.listings,
    users: state.users
});
const MapDispatchToProps = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchUsers: () => dispatch(fetchUsers())
});

class ListingsComponent extends Component {

    componentDidMount() {
        this.props.fetchListings();
        this.props.fetchUsers();
    }

    constructor(props){
        super(props);
    }
    _keyExtractor= ({item, index})=> index;
    _renderItem= ({item, index}) =>  {
        const o = this.props.users.users.filter((user)=> user.id === item.ownerId)[0];
        const owner = o ? o : {
            id:1,
            name: "Antonyms",
            image: "https://lh3.googleusercontent.com/zszeyucKpsb-gI2trgEIDnBL4bHlk1wQYXP7Kw1PcQUPs_9OsMTz8W1GJN-ziQHL7312FFtOWc-Z5YinUEAuQ6SS"
        };
        return(
            <TouchableRipple onPress={() => this.props.navigation.navigate('Detail', {listing: item, owner:owner})}  >
                <Listings listing={item} owner={owner} featured={false}/>
            </TouchableRipple>
            )
    };
    render() {
        return (
            <FlatList
                nestedScrollEnabled
                data={this.props.listings.listings}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ListingsComponent);
