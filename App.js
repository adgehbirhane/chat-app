import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './app/screens/signUp/SignUp';
import Login from './app/screens/login/Login';
import Menu from './app/screens/Menu';
import { ChatBody } from './app/screens/home/sections';
import Colors from './app/colors/Colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'teal',
    background: '#1a2948',
    text: Colors.LIGHT_PRIMARY,
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen
          name="Chat"
          component={ChatBody}
          options={({ route }) => ({
            headerShown: route.name === 'Chat' ? true : false,
            headerStyle: {
              backgroundColor: '#212d45',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
