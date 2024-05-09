import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { messageData } from '../../../database/messageData';
import { AIConversations } from '../../../components';
import CustomInput from '../../../components/CustomInput';

export default function AI() {
    const [message, setMessage] = useState('');

    const handleMessageSend = () => {
        console.log('Sending message:', message);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messageData}
                renderItem={({ item }) => <AIConversations oneSMS={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
            />
            <CustomInput message={message} setMessage={setMessage} handleMessageSend={handleMessageSend} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContainer: {
        flexGrow: 1,
        backgroundColor: '#1a2948',
        color: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#212d45',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 0.2,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 16,
        marginRight: 8,
        color: 'white'
    },
    sendButton: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});
