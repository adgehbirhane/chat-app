import { View, Text } from 'react-native'
import React from 'react'

import { globalStyles } from '../utils/globalStyles'

export default function MessageCard({ oneSMS }) {
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>{oneSMS.createdAt}</Text>

            {/* <Avatar /> */}
            <View style={[globalStyles.card, oneSMS.sender == "mine" ? globalStyles.myMessage : globalStyles.othersMessage]}>
                <Text>{oneSMS.name}</Text>
                <Text>{oneSMS.message}</Text>
            </View>
            {/* <Avatar /> */}
        </View>
    )
}