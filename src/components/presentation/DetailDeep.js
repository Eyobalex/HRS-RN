import React from 'react';
import {DataTable} from 'react-native-paper';
import {Card} from 'react-native-paper';

export default function DetailDeep({listing, owner}) {

    return (
        <Card>
            <Card.Title title={"House Details "}/>
            <Card.Content>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>House Detail</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>Title</DataTable.Cell>
                        <DataTable.Cell>{listing.title}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Price</DataTable.Cell>
                        <DataTable.Cell>{listing.price}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Location</DataTable.Cell>
                        <DataTable.Cell>{listing.location}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Description</DataTable.Cell>
                        <DataTable.Cell>{listing.description}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Header>
                        <DataTable.Title>Owner information</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>Owner Name</DataTable.Cell>
                        <DataTable.Cell>{owner.name}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </Card.Content>
        </Card>
    );

}
