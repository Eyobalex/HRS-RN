import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';

export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    return(
        <View style={styles.container}>

            <Headline>Registration</Headline>

            <TextInput
                mode="outlined"
                dense
                style={styles.items}
                label='Name'
                value={name}
                onChangeText={text => setName(text) }/>

            <TextInput
                mode="outlined"
                dense
                style={styles.items}
                label='Email'
                value={email}
                onChangeText={text => setEmail(text) }/>

            <TextInput
                mode="outlined"
                dense
                style={styles.items}

                label='Password'
                value={password}
                onChangeText={text => setPassword(text) }/>

            <Button  mode="contained"
                    style={styles.items}
                    onPress={() => alert(`${password}, ${email}`)}>
                Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 25,
        height: 25,
        // flex: 1,
        // justifyContent: 'space-evenly'
    },
    items:{
        // flex: 1
        marginBottom: 15
    }
})
