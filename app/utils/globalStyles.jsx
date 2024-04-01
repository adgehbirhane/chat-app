import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: '#d2f7f1',
        elevation: 1,
        padding: 20,
        margin: 10,
        borderRadius: 20,
    },
    myMessage: {
        backgroundColor: '#7c9af5',
        alignSelf: 'flex-end',
        borderBottomRightRadius: 0,
    },
    othersMessage: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 0,
    },
    form: {
        flex: 1.5,
        justifyContent: 'center',
        paddingLeft: "10%",
        paddingRight: "5%",
        gap: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
    textField: {
        borderWidth: 0.2,
        borderRadius: 5,
        borderColor: 'gray',
        fontSize: 16,
        padding: 7,
        paddingLeft: 20,
        backgroundColor: '#e4eaeb'
    },
    eyeIcon: {
        position: 'absolute',
        right: 6,
        top: '50%',
        paddingHorizontal: 5,
        transform: [{ translateY: -10 }],
        backgroundColor: '#e4eaeb'
    },
    button: {
        borderRadius: 5,
        padding: 10,
        borderWidth: 0.2,
        backgroundColor: '#2888eb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    google_btn: {
        backgroundColor: 'darkgray',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    text: {
        color: 'black',
        textAlign: 'center'
    },
    link: {
        color: 'blue',
        paddingTop: 5,
    }

});
