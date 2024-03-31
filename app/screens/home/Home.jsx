import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Group, Personal, Private, Public } from './chats';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Public" component={Public} />
      <Tab.Screen name="Person" component={Personal} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Private" component={Private} />
    </Tab.Navigator>
  );
}
