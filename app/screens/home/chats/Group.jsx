import React from 'react';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { userData } from '../../../database/userData';

export default function Group() {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} onPress={() => {
            navigation.navigate('chatBody')
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
        <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}
