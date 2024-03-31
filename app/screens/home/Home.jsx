import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Public from './chats/Public';
import Personal from './chats/Personal';
import Group from './chats/Group';
import Private from './chats/Private';

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
