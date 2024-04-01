import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Group, Personal, Private, Public } from './chats';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
            initialRouteName="Public"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Public') {
                        iconName = focused ? 'globe' : 'globe-outline';
                    } else if (route.name === 'Person') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Group') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === 'Private') {
                        iconName = focused ? 'lock-closed' : 'lock-closed-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarActiveTintColor='blue'
            tabBarInactiveTintColor='gray'
            tabBarStyle={{
                display: 'flex',
            }}
        >
            <Tab.Screen name="Public" component={Public} options={{ headerShown: false }} />
            <Tab.Screen name="Person" component={Personal} options={{ headerShown: false }} />
            <Tab.Screen name="Group" component={Group} options={{ headerShown: false }} />
            <Tab.Screen name="Private" component={Private} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
