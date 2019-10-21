import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {Tile} from 'react-native-elements';

export default function Services () {
    return(
        <ScrollView nestedScrollEnabled horizontal style={{height: 0}} bounces>
            <Tile
                imageSrc={{uri: "https://lh3.googleusercontent.com/zszeyucKpsb-gI2trgEIDnBL4bHlk1wQYXP7Kw1PcQUPs_9OsMTz8W1GJN-ziQHL7312FFtOWc-Z5YinUEAuQ6SS=s200"}}
                title={"24/7 Customer Support"}
                featured
                caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, voluptatum."}
                captionStyle={{paddingBottom: 20}}

            />
            <Tile
                imageSrc={{uri: "https://lh3.googleusercontent.com/zszeyucKpsb-gI2trgEIDnBL4bHlk1wQYXP7Kw1PcQUPs_9OsMTz8W1GJN-ziQHL7312FFtOWc-Z5YinUEAuQ6SS=s200"}}
                title={"Money Back Guaranty"}
                featured
                caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, voluptatum."}
                captionStyle={{paddingBottom: 20}}

            />
            <Tile
                imageSrc={{uri: "https://lh3.googleusercontent.com/zszeyucKpsb-gI2trgEIDnBL4bHlk1wQYXP7Kw1PcQUPs_9OsMTz8W1GJN-ziQHL7312FFtOWc-Z5YinUEAuQ6SS=s200"}}
                title={"Build In Money Transfer"}
                featured
                caption={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, voluptatum."}
                captionStyle={{paddingBottom: 20}}

            />

        </ScrollView>
    )

}
