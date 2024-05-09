import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7dd3fc',
    },
    card: {
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
    errorMessage: {
        fontFamily: 'sans-serif',
        fontSize: 14,
        paddingLeft: 5
    },
    errorMessageContainer: {
        backgroundColor: '#fecaca',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    othersMessage: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 0,
        width: "100%"
    },
    form: {
        flex: 1.5,
        justifyContent: 'center',
        paddingLeft: "10%",
        paddingRight: "5%",
        gap: 15,
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
    },
    logo: {
        fontSize: 24,
    },
    title: {
        color: Colors.LIGHT_GRAY, 
        fontSize: 14, 
    },
    subTitle: {
        color: Colors.GRAY,
        fontSize: 10, 
    },
    postImage: {
        width: "98%",
        height: 200,
        borderRadius: 2,
        margin: 5,
    }
})
