import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './app/screens/signUp/SignUp';
import Login from './app/screens/login/Login';
import Menu from './app/screens/Menu';
import { ChatBody } from './app/screens/home/sections';
import Colors from './app/colors/Colors';
import NewsComment from './app/screens/home/sections/NewsComment';
import UniProfile from './app/screens/home/sections/UniProfile';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.TEAL,
    background: Colors.LIGHT_PRIMARY,
    text: Colors.LIGHT_GRAY,
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
              backgroundColor: Colors.PRIMARY,
            },
          })}
        />
        <Stack.Screen
          name="NewsComment"
          component={NewsComment}
          options={({ route }) => ({
            headerShown: route.name === 'NewsComment' ? true : false,
            headerStyle: {
              backgroundColor: Colors.PRIMARY,
            },
          })}
        />
        <Stack.Screen
          name="UniProfile"
          component={UniProfile}
          options={({ route }) => ({
            headerShown: route.name === 'UniProfile' ? true : false,
            headerStyle: {
              backgroundColor: Colors.PRIMARY,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
