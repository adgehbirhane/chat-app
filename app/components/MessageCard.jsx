import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from "react-native-paper"; 

import { globalStyles } from '../utils/globalStyles';

export default function MessageCard({ oneSMS }) {
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>{oneSMS.createdAt}</Text>
            <View style={{alignSelf:  oneSMS.sender == "other" ? "flex-start": "flex-end",  flexDirection: 'row', marginHorizontal: 10}} >
            <Avatar.Image 
            style={{  display: oneSMS.sender == "other" ? "block": "none"}}
                            size={50} 
                            source={{ 
                                uri:  
                                     `https://media.geeksforgeeks.org/wp-content/uploads/20220305133853/gfglogo-300x300.png`, 
                            }} 
                        /> 
                        <View style={[globalStyles.card, oneSMS.sender == "mine" ? globalStyles.myMessage : globalStyles.othersMessage]}>
                            <Text>{oneSMS.name}</Text>
                            <Text>{oneSMS.message}</Text>
                        </View>
                        <Avatar.Image 
                            style={{ display: oneSMS.sender == "mine" ? "block" : "none" }} 
                            size={50} 
                            source={{ 
                                uri:  
                                     `https://media.geeksforgeeks.org/wp-content/uploads/20220305133853/gfglogo-300x300.png`, 
                            }} 
                        /> 
            </View> 
        </View>
    )
}