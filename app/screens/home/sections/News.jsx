import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { userData } from '../../../database/userData';
import { newsStyles } from '../../../utils/newsStyles';
import { globalStyles } from '../../../utils/globalStyles';  
import { CommentList } from '../../../components/CommentList';

export default function News() {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={newsStyles.container}>
            <View style={newsStyles.messageContainer}>
                <View style={newsStyles.header}>
                    <Image source={require('../../../../assets/belay.png')} style={newsStyles.avatarImage} />
                    <View>
                        <Text style={globalStyles.title}>Debre Birhan University</Text>
                        <Text style={globalStyles.subTitle}>College of computing</Text>
                    </View>
                </View>
                <View>
                    <Text style={[newsStyles.nameText, { marginTop: 5 }]}> Message of the day</Text>
                    <Text style={[globalStyles.subTitle, { marginLeft: 3, marginTop: -4 }]}>01:30 ago</Text>
                </View>
                <View style={newsStyles.messageMetaData}>
                    <Image source={require('../../../../assets/profile_bg.png')} style={globalStyles.postImage} />
                        <CommentList oneMessage={item} /> 
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
