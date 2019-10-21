import React from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';
import {baseUrl} from '../../constants/baseUrl'
export default function DetailHighlight({listing}) {
    return (
      <Card>
          <Card.Title title={listing.title} subtitle={"Around " + listing.location} right={(props => <Paragraph>{listing.price}</Paragraph>)} />
          <Card.Content>
              <Card.Cover source={{uri : baseUrl + listing.image}}/>
              <Title>{listing.title}</Title>
              <Paragraph>{listing.description}</Paragraph>
          </Card.Content>
      </Card>
    );
}
