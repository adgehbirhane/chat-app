import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './home/Home';
import About from './about/About';
import Profile from './profile/Profile';
import CustomAvatar from '../components/CustomAvatar';
import Colors from '../colors/Colors'; 

const Drawer = createDrawerNavigator();

export default function Menu({ navigation }) {
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View>
          <Image source={require('../../assets/profile_bg.png')} style={styles.bgImage} />
        </View>
        <View>
          <CustomAvatar />
          <View style={styles.info}>
            <Text style={{ fontSize: 16, color: Colors.GRAY }}>Belay Birhanu</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <View style={styles.logoutContainer}>
                <MaterialCommunityIcons name="logout" size={20} color={Colors.MAROON} />
                <Text style={styles.logout}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent style={{ backgroundColor: Colors.PRIMARY}} {...props} />}
    >
      <Drawer.Screen
        name="Uni Connect"
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerStyle: { elevation: 0 },
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          drawerLabel: 'Profile',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          drawerLabel: 'About',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="information" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    marginTop: -50,
    height: 130,
    resizeMode: 'cover'
  },
  info: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logout: {
    fontSize: 16,
    color: 'maroon',
    textAlign: 'right'
  }
});
