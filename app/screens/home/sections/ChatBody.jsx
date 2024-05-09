import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { messageData } from '../../../database/messageData';
import MessageCard from '../../../components/MessageCard';
import CustomInput from '../../../components/CustomInput';

export default function ChatBody() {
    const [message, setMessage] = useState('');

    const handleMessageSend = () => {
        console.log('Sending message:', message);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messageData}
                renderItem={({ item }) => <MessageCard oneSMS={item} />}
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
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 16,
        marginRight: 8,
    },
    sendButton: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});
