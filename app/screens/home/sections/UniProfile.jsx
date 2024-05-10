import React from 'react';
import { View, Image, Text, TouchableOpacity, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../colors/Colors';
import { globalStyles } from '../../../utils/globalStyles';
import { newsStyles } from '../../../utils/newsStyles';

export default function UniProfile() {

    const navigation = useNavigation();
    const onShare = async (linkToShare) => {
        try {
            const result = await Share.share({
                message: linkToShare
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../../assets/profile_bg.png')} style={{ width: "100%", height: 120 }} />
            <Image source={require('../../../../assets/background.png')} style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50 }} />
            <View style={{ alignItems: 'center' }}>
                <Text style={globalStyles.title}>Debre Birhan University</Text>
                <Text style={globalStyles.subTitle}>College of computing</Text>
            </View>
            <View style={{
                width: '90%', borderTopWidth: 0.5, marginTop: 5, borderTopColor: Colors.DARK_GRAY
            }}>
                <View style={[newsStyles.commentContainer,]}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Ionicons name="newspaper-outline" size={15} color={Colors.LIGHT_GRAY} />
                        <Text style={newsStyles.nameText}> 495 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Ionicons name="people-outline" size={15} color={Colors.BLUE} />
                        <Text style={newsStyles.nameText}> 23K   </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Ionicons name="chatbubble-outline" size={15} color={Colors.YELLOW} />
                        <Text style={newsStyles.nameText}> 23.7K   </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Ionicons name="heart-outline" size={15} color={Colors.MAROON} />
                        <Text style={newsStyles.nameText}> 235K  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }} onPress={() => onShare("linkToShare")}>
                        <Ionicons name="share-social-outline" size={15} color={Colors.BLUE} />
                        <Text style={newsStyles.nameText}> 235K  </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}  
