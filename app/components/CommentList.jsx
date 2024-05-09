import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Ionicons } from '@expo/vector-icons';
import { Share } from 'react-native';

import Colors from '../colors/Colors';
import { newsStyles } from '../utils/newsStyles';
import CustomInput from './CustomInput';

const comments = [  // this should be one property of the oneMessage which comes from parent...
    {
        id: 1,
        content: 'We are here to investigate the your app progressstigate the your app progressstigate the your app progressstigate the your app progress.......... ..........well done We are here to investigate the you application progress... ........... ........well done.We are here to investigate the your application progress...... ................well done.We are here to investigate the your application progress........ ..............well done.',
        sender: {
            id: 1,
            name: 'Abebe Kebede',
            position: 'University admin',
            url: 'https://th.bing.com/th/id/OIP.Ct06jffjAm_3UhSTGIgIHgHaHa?w=1099&h=1100&rs=1&pid=ImgDetMain',
        },
        createdAt: 'may 24, 2024',
    },
    {
        id: 2,
        content: 'To investigate the your app progres vestigate the your to investigate the your app progre....well done We are here to investigate the you application progress... ........... ........well done.We are here to investigate the your application progress...... ................well done.We are here to investigate the your application progress........ ..............well done.',
        sender: {
            id: 2,
            name: 'Lala Debebe',
            position: 'Head of department',
            url: 'https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain',
        },
        createdAt: 'may 3, 2024',
    },
    {
        id: 3,
        content: 'Well done We are here to invesstigate the your app progresstigate the you application progress... ........... ........well done.We are here to investigate the your application progress...... ................well done.We are here to investigate the your application progress........ ..............well done.',
        sender: {
            id: 5,
            name: 'Belay Birhane',
            position: 'Student',
            url: 'https://th.bing.com/th/id/R.d144faafc0172b9a2d9641c05670ec37?rik=bVWekybgw6CgFw&pid=ImgRaw&r=0',
        },
        createdAt: 'may 4, 2024',
    }
];

export const CommentList = ({ oneMessage }) => {

    const [activeSections, setActiveSections] = useState([]);
    const [viewComments, setViewComments] = useState(false);

    const [message, setMessage] = useState('');

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
