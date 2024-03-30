// Menu.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './home/Home';
import About from './about/About';
import Profile from './profile/Profile';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: 'About' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
}
