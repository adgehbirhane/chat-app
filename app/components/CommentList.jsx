import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Share } from 'react-native';

import Colors from '../colors/Colors';
import { newsStyles } from '../utils/newsStyles';
import CustomInput from './CustomInput';
import { comments } from '../database/messageData';

export const CommentList = ({ oneMessage }) => {

    const [activeSections, setActiveSections] = useState([]);
    const [viewComments, setViewComments] = useState(false);

    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    const handleMessageSend = () => {
        console.log('Sending message:', message);
        setMessage('');
    };

    const renderHeader = (comment, isActive) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'right', paddingHorizontal: 2, paddingVertical: 3, gap: 5 }}>
                <Image source={{ uri: comment.sender.url }} style={styles.avatarImage} />
                <View  >
                    <Text style={[styles.title, { width: 150 }]} numberOfLines={1} ellipsizeMode="tail">{comment.content}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
                        <Text style={styles.subTitle}>{comment.sender.position}</Text>
                        <Text style={styles.subTitle}>{comment.createdAt}</Text>
                    </View>
                </View>
                <Ionicons name={isActive ? "chevron-up" : "chevron-down"} size={24} color={Colors.GRAY} />
            </View>
        );
    };

    const renderContent = (comment) => {
        return (
            <View style={{ backgroundColor: Colors.BLUE_LIGHT, marginBottom: 4, padding: 10, borderRadius: 5 }} >
                <Text style={{ color: Colors.GRAY, padding: 2 }}>
                    {comment.content}
                </Text>
            </View>
        );
    };

    const updateSections = (activeSections) => {
        setActiveSections(activeSections);
    };

    const onShare = async (oneMessage) => {
        try {
            const result = await Share.share({
                message: "oneMessage.urlForShare"
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
        <View style={{ width: "95%" }}>
            <View style={newsStyles.commentContainer}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <Ionicons name="heart-outline" size={15} color={Colors.MAROON} />
                    <Text style={newsStyles.nameText}> Like    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }} onPress={() => setViewComments(!viewComments)}>
                    <Ionicons name="chatbubble-outline" size={15} color={Colors.YELLOW} />
                    <Text style={newsStyles.nameText}> Comment </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }} onPress={() => onShare(message)}>
                    <Ionicons name="share-social-outline" size={15} color={Colors.BLUE} />
                    <Text style={newsStyles.nameText}> Share    </Text>
                </TouchableOpacity>
            </View>

            {viewComments && (
                <ScrollView>
                    <Accordion
                        sections={comments}
                        activeSections={activeSections}
                        renderHeader={(comments, _, isActive) => renderHeader(comments, isActive)}
                        renderContent={renderContent}
                        onChange={updateSections}
                    />
                </ScrollView>
            )
            }
            <CustomInput message={message} setMessage={setMessage} handleMessageSend={handleMessageSend} />
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 2 }} onPress={() => navigation.navigate('NewsComment')}>
                <Text style={[newsStyles.nameText, { color: Colors.DARK_BLUE }]}> View all Comments </Text>
                <Ionicons name="arrow-forward-outline" size={15} color={Colors.DARK_BLUE} />
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: Colors.DARK_GRAY,
    },
    avatarImage: {
        width: 28,
        height: 28,
        borderRadius: 20,
    },
    title: {
        color: Colors.LIGHT_GRAY,
        fontSize: 12,
    },
    subTitle: {
        color: Colors.GRAY,
        fontSize: 10,
    },
});
