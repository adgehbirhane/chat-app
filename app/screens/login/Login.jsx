import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from './LoginForm';

export default function Login() {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };
    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard} style={styles.container}>
            <ImageBackground style={styles.illustration} source={require("../../../assets/login.png")}>
                <View style={styles.header}>
                </View>
                <LoginForm />
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    illustration: {
        flex: 1,
        resizeMode: 'contain',
    },
});
