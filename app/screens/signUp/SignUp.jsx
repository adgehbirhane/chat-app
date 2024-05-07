import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { userData } from '../../database/userData';
import { globalStyles } from '../../utils/globalStyles';
import { authStyles } from '../../utils/authStyles';

export default function SignUp() {

  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const handleLogin = () => {
    if (password === confirmPassword) {
      const user = userData.find(user => user.username === username && user.password === password);
      if (user) {
        navigate.push('Menu');
        setIsError(false);
        setPassword('');
        setUsername('');
      } else {
        setIsError(true);
        setError('Invalid Credentials');
      }
      setIsError(false);
      setPassword('');
      setConfirmPassword('');
      setUsername('');
    } else {
      setIsError(true);
      setError('Confirmation password incorrect');
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
          <View style={authStyles.inputContainer}>
            <TextInput
              style={authStyles.textField}
              placeholder='Confirm password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={toggleShowConfirmPassword} style={authStyles.eyeIcon}>
              <MaterialCommunityIcons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={authStyles.button} onPress={handleLogin} >
            <View>
              <Text style={authStyles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate.push('Login')}>
            <Text style={authStyles.text}>I have an account?
              <Text style={authStyles.link}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}