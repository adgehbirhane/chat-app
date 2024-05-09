import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Notice, News, AI, Chat } from './sections';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#212f4b' },
        tabBarInactiveTintColor: 'lightgray'
      }}
    >
      <Tab.Screen name="Public" component={Chat} />
      <Tab.Screen name="Notice" component={Notice} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="AI" component={AI} />
    </Tab.Navigator>
  );
}
