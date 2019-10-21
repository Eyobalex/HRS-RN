import React from 'react';
import {List, Button} from 'react-native-paper';
import {featureNotImplemented} from '../../constants/Helpers';
import {View} from 'react-native';

export default function DetailAction(){
    return (
        <View style={{flex:1}}>
            <List.Accordion
                title={"Actions"}
                left={props => <List.Icon {...props} icon="control-point" />}
                style={{flex:1, justifyContent: 'flex-start'}}
            >
                <Button icon={"done"} onPress={()=> featureNotImplemented("Tenant's")}  mode={"text"}>Make an offer</Button>
                <Button icon={"comment"} onPress={()=> featureNotImplemented("Commenting")} mode={"text"}>Comment on this listing</Button>
                <Button icon={"share"} onPress={()=> featureNotImplemented("Sharing")} mode={"text"}>Share this listing</Button>

            </List.Accordion>
        </View>
    )
}
