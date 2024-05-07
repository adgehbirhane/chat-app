import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './app/screens/signUp/SignUp';
import Login from './app/screens/login/Login';
import Menu from './app/screens/Menu';
import { ChatBody } from './app/screens/home/chats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen
          name="chatBody"
          component={ChatBody}
          options={({ route }) => ({
            headerShown: route.name === 'chatBody' ? true : false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
