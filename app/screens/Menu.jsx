import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Home from './home/Home';
import About from './about/About';
import Profile from './profile/Profile';

const Drawer = createDrawerNavigator();

export default function Menu({ navigation }) {
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: 'teal' }}>
          <Image source={require('../../assets/profile_bg.png')} style={{ marginTop: -50, height: 130, resizeMode: 'cover' }} />
        </View>
        <View>
          <Image source={require('../../assets/belay.png')} style={{ marginLeft: 10, width: 82, height: 80, borderRadius: 50, marginTop: -40 }} />
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16 }}>Belay Birhanu</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{ fontSize: 16, color: 'maroon', textAlign: 'right' }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
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
