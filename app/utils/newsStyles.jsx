import { StyleSheet } from "react-native";

export const newsStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    messageMetaData: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
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
        backgroundColor: '#83a6b9',
        maxWidth: '70%',
        borderRadius: 8,
        padding: 10,
        marginRight: 8,
        borderBottomEndRadius: 0,
    },
    otherMessageContainer: {
        backgroundColor: '#a1a1aa',
        maxWidth: '70%',
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
