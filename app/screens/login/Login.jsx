import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { userData } from '../../database/userData';
import { globalStyles } from '../../utils/globalStyles';
import { authStyles } from '../../utils/authStyles';

export default function Login() {

    const navigate = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        const user = userData.find(user => user.username === username && user.password === password);
        if (user) {
            setIsError(false);
            navigate.push('Menu');
            setPassword('');
            setUsername('');
        } else {
            setIsError(true);
            setError('Invalid Credentials');
        }
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard} style={authStyles.container}>
            <View style={authStyles.illustration} >
                <View style={authStyles.form}>
                    <View style={authStyles.header}>
                        <Image
                            source={require('../../../assets/logo.gif')}
                            style={authStyles.logoImage}
                        />
                    </View>
                    {isError && (
                        <View style={globalStyles.errorMessageContainer}>
                            <Text style={globalStyles.errorMessage}>{error}</Text>
                            <TouchableOpacity onPress={() => setIsError(false)} style={authStyles.closeButton}>
                                <MaterialCommunityIcons name="close" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    )}
                    <View style={authStyles.inputContainer}>
                        <TextInput style={authStyles.textField}
                            value={username}
                            onChangeText={setUsername}
                            placeholder='Enter username'
                            required />
                    </View>
                    <View style={authStyles.inputContainer}>
                        <TextInput
                            style={authStyles.textField}
                            placeholder='Enter password'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={toggleShowPassword} style={authStyles.eyeIcon}>
                            <MaterialCommunityIcons
                                name={showPassword ? "eye-off" : "eye"}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={authStyles.button} onPress={handleLogin} >  
                        <View>
                            <Text style={authStyles.buttonText}>LOG IN</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={authStyles.text}>Or</Text>
                    </View>
                    <TouchableOpacity style={[authStyles.button, authStyles.google_btn]} onPress={() => {/* Handle Google sign-in */ }}>
                        <View>
                            <Text style={authStyles.buttonText}>SIGN IN WITH GOOGLE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate.push('SignUp')}>
                        <Text style={authStyles.text}>Don't have an account?
                            <Text style={authStyles.link}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}