import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomInput({ message, setMessage, handleMessageSend }) {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Type your message..."
                placeholderTextColor="gray"
                value={message}
                onChangeText={(text) => setMessage(text)}
            />
            <TouchableOpacity onPress={handleMessageSend}>
                <Ionicons name="send" size={24} color="#7dd3fc" />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
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
    }
});
