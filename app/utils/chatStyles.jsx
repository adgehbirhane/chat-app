import { StyleSheet } from "react-native";

export const chatStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    messageMetaData: {
        // flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5
    },
    myMessageContainer: {
        justifyContent: 'flex-end',
    },
    othersMessageContainer: {
        justifyContent: 'flex-start',
    },
    mineMessageContainer: {
        maxWidth: '70%',
        backgroundColor: '#FFF8C6',
        borderRadius: 8,
        padding: 10,
        marginRight: 8,
        borderBottomEndRadius: 0,
    },
    otherMessageContainer: {
        maxWidth: '70%',
        backgroundColor: '#DCF8C6',
        borderRadius: 10,
        borderBottomStartRadius: 0,
        padding: 10,
        marginLeft: 8,
    },
    nameText: {
        fontSize: 14,
        // fontWeight: 'bold',
        color: 'gray',
        marginBottom: 4,
    },
    messageText: {
        fontSize: 16,
    },
    timeText: {
        fontSize: 12,
        marginLeft: 'auto',
        marginBottom: 4,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
