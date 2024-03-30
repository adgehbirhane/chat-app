import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, TextInput, TouchableHighlight, View, Animation } from 'react-native';

import { globalStyles } from '../../utils/globalStyles';

const Login = () => (
    <View style={styles.container}>
        <ImageBackground source={require("../../../assets/background.png")} resizeMode="stretch" style={styles.image}>
            <View style={styles.header}>
                <Image style={styles.light1} source={require("../../../assets/light.png")} />
                <Image style={styles.light3} source={require("../../../assets/light.png")} />
            </View>
            <View style={globalStyles.form}>
                <Animation>
                    <TextInput style={styles.textField} placeholder='username' />
                </Animation>
                <TextInput style={styles.textField} placeholder='password' textContentType='password' />
                <TouchableHighlight style={styles.button} >
                    <Button title='SIGN IN' />
                </TouchableHighlight>
            </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    light1: {
        flex: 1,
        height: '80%',
        resizeMode: 'contain',
    },
    light2: {
        flex: 1,
        height: '70%',
        resizeMode: 'contain',
    },
    light3: {
        flex: 1,
        height: '40%',
        resizeMode: 'contain',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    textField: {
        borderWidth: 0.2,
        borderRadius: 5,
        borderColor: 'gray',
        fontSize: 18,
        padding: 5,
        paddingLeft: 15,
    },
    button: {
        borderRadius: 5,
        marginTop: 10,
    }
});

export default Login;