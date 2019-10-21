import React from 'react';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import {baseUrl} from '../../constants/baseUrl';

export default function Listings({listing, owner, featured, navigation}) {

    if (listing && owner){
        return(
            <Card style={{elevation: 10, marginBottom: 10, paddingHorizontal: 10}}>
                <Card.Title title={(featured? owner.name: listing.title)} subtitle={"Around "+listing.location} left={(props) => <Avatar.Image {...props} source={{uri: baseUrl + owner.image}} />} right={(props => <Paragraph {...props}>{`${listing.price}`}</Paragraph>)} />
                <Card.Cover source={ {uri: baseUrl + listing.image} } />
                <Card.Content>
                    <Title>{listing.title}</Title>
                    <Paragraph>{listing.description}</Paragraph>
                </Card.Content>
            </Card>
        );
    }else {
       return (
           <Card style={{elevation: 10, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'red'}}>
                <Card.Content>
                    <Paragraph style={{color: '#fff'}}>It appears that either a listing or an owner is provided</Paragraph>
                </Card.Content>
           </Card>
       )
    }
}

