import React, { useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { userData } from '../../../database/userData';
import { messageData } from '../../../database/messageData';
import MessageCard from '../../../components/MessageCard';

export default function Public() {

    const [sms, setSms] = useState(false);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} onPress={() => {
            setSms(!sms)
        }}>
            <Image source={item.avatar} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ marginLeft: 10, width: '80%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, textAlign: 'right', width: 'auto' }}>12/03/2025</Text>
                </View>
                <Text style={{ fontSize: 14, color: 'gray' }}>{item.newMessage}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            {sms ? (
                <FlatList
                    data={messageData}
                    renderItem={({ item }) => <MessageCard oneSMS={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <FlatList
                    data={userData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
}
