import React from 'react';
import { View, Text, Image } from 'react-native';
import { chatStyles } from '../utils/chatStyles';

export default function MessageCard({ oneSMS }) {
    return (
        <View style={[chatStyles.container, oneSMS.sender === 'mine' ? chatStyles.myMessageContainer : chatStyles.othersMessageContainer]}>
            {oneSMS.sender === 'other' && (
                <Image source={require('../../assets/belay.png')} style={chatStyles.avatarImage} />
            )}
            <View style={oneSMS.sender === 'mine' ? chatStyles.mineMessageContainer : chatStyles.otherMessageContainer}>
                <Text style={chatStyles.messageText}>{oneSMS.message}</Text>
                <View style={chatStyles.messageMetaData}>
                    <Text style={chatStyles.nameText}>{oneSMS.name}</Text>
                    <Text style={chatStyles.timeText}>{oneSMS.createdAt}</Text>
                </View>
            </View>
        </View>
    );
}
