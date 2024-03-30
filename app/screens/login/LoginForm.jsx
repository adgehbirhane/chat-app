import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginForm() {
    return (
        <View style={styles.login}>
            <Text style={styles.title}>Login</Text>
            {/* <View style={styles.inputs}>
                <TextInput style={styles.textField} placeholder='username' />
                <TextInput style={styles.textField} placeholder='password' />
                <Button style={styles.button} title='SIGN IN' />
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    login: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
