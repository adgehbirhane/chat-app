import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MessageCard({ oneSMS }) {
    return (
        <View style={[styles.container, oneSMS.sender === 'mine' ? styles.myMessageContainer : styles.othersMessageContainer]}>
            {oneSMS.sender === 'other' && (
                <Image source={require('../../assets/belay.png')} style={styles.avatarImage} />
            )}
            <View style={oneSMS.sender === 'mine' ? styles.mineMessageContainer : styles.otherMessageContainer}>
                <Text style={styles.messageText}>{oneSMS.message}</Text>
                <View style={styles.messageMetaData}>
                    <Text style={styles.nameText}>{oneSMS.name}</Text>
                    <Text style={styles.timeText}>{oneSMS.createdAt}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    messageMetaData: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5
    },
    myMessageContainer: {
        justifyContent: 'flex-end',
    },
    othersMessageContainer: {
        justifyContent: 'flex-start',
    },
    mineMessageContainer: {
        maxWidth: '70%',
        backgroundColor: '#FFF8C6',
        borderRadius: 8,
        padding: 10,
        marginRight: 8,
        borderBottomEndRadius: 0,
    },
    otherMessageContainer: {
        maxWidth: '70%',
        backgroundColor: '#DCF8C6',
        borderRadius: 10,
        borderBottomStartRadius: 0,
        padding: 10,
        marginLeft: 8,
    },
    nameText: {
        fontSize: 14,
        // fontWeight: 'bold',
        color: 'gray',
        marginBottom: 4,
    },
    messageText: {
        fontSize: 16,
    },
    timeText: {
        fontSize: 12,
        marginLeft: 'auto',
        marginBottom: 4,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
