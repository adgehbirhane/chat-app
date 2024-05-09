import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { newsStyles } from '../../../utils/newsStyles';

import { userData } from '../../../database/userData';

export default function News() {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={newsStyles.container}>
            {/* {oneSMS.sender === 'other' && (
                <Image source={require('../../../../assets/belay.png')} style={newsStyles.avatarImage} />
            )} */}
            <View style={newsStyles.mineMessageContainer}>
                <Text style={newsStyles.messageText}>Hello world</Text>
                <View style={newsStyles.messageMetaData}>
                    <Text style={newsStyles.nameText}>my name</Text>
                    <Text style={newsStyles.timeText}>12-25-96</Text>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}
