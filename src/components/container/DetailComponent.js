import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {DetailAction, DetailDeep, DetailHighlight} from '../presentation';

class DetailComponent extends Component {

    render() {
        return (
            <ScrollView style={{paddingHorizontal: 10}}>
                <DetailHighlight listing={this.props.listing} />
                <DetailAction/>
                <DetailDeep listing={this.props.listing} owner={this.props.owner}/>
            </ScrollView>
        );
    }
}

export default DetailComponent;
