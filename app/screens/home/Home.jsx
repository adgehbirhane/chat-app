import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Group, Personal, AI, Public } from './chats';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator initialRouteName="Public">
      <Tab.Screen name="Public" component={Public} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Private" component={Personal} />
      <Tab.Screen name="AI" component={AI} />
    </Tab.Navigator>
  );
}
