import { FlatList } from 'react-native'
import React from 'react';

import MessageCard from '../../../components/MessageCard';
import { messageData } from '../../../database/messageData';

export default function Group() {

    return (
        <FlatList
            data={messageData}
            renderItem={({ item }) => <MessageCard oneSMS={item} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}