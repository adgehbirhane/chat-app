import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

export const newsStyles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    messageContainer: {
        backgroundColor: Colors.PRIMARY,
        width: '80%',
        borderRadius: 8,
        padding: 10,
        alignSelf: 'center',
        borderColor: Colors.GRAY,
        borderWidth: 2,
    },
    header: {
        display: 'flex',
        flexDirection: 'row', 
        gap: 10,
    },
    nameText: {
        fontSize: 14,
        color: Colors.GRAY,
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
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 5,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        // borderBottomColor: Colors.GRAY,
        // borderBottomWidth: 2
    }
});
