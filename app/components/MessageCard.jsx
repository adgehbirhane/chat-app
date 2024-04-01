import { View, Text } from 'react-native'
import React from 'react'

import { globalStyles } from '../utils/globalStyles'

export default function MessageCard() {
    return (
        <View style={globalStyles.card}>
            <Text>MessageCard</Text>
            <Text>Hello Bro Card we find out</Text>
        </View>
    )
}