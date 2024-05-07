import React, { useState } from 'react';
import { FlatList, TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { messageData } from '../../../database/messageData';
import { AIConversations } from '../../../components';

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
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
                <TouchableOpacity onPress={handleMessageSend}>
                    <Text style={styles.sendButton}>Send</Text>
                </TouchableOpacity>
            </View>
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
