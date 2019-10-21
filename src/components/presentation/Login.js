import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>

            <Headline>Login</Headline>

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
                    onPress={() => props.navigation.navigate('Main')}>
               Login
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
