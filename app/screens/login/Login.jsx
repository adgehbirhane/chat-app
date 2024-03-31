import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ImageBackground, StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function Login() {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.illustration} source={require("../../../assets/login.png")}>
                <View style={styles.header}>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.textField} placeholder='Enter username' required />
                    <TextInput style={styles.textField} placeholder='Enter password' textContentType='password' />
                    <TouchableOpacity style={styles.button} onPress={() => navigate.push('Menu')} >
                        <View>
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.google_btn]} onPress={() => {/* Handle Google sign-in */ }}>
                        <View>
                            <Text style={styles.buttonText}>SIGN IN WITH GOOGLE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push('SignUp')}>
                        <Text style={styles.text}>Don't have an account? <Text style={styles.link}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
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
    form: {
        flex: 1.5,
        justifyContent: 'center',
        justifyItems: 'center',
        paddingLeft: "10%",
        paddingRight: "5%",
        gap: 12,
    },
    illustration: {
        flex: 1,
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
        fontSize: 16,
        padding: 7,
        paddingLeft: 20,
        backgroundColor: '#e4eaeb'
    },
    button: {
        borderRadius: 5,
        padding: 7,
        borderWidth: 0.2,
        borderRadius: 5,
        backgroundColor: '#2888eb',
    },
    google_btn: {
        backgroundColor: 'darkgray',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    text: {
        color: 'black',
        textAlign: 'center'
    },
    link: {
        color: 'blue'
    }

});
