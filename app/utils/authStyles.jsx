import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
    container: {
        backgroundColor: '#191970',
    },
    illustration: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: '#addbff',
    },
    form: {
        flex: 3,
        justifyContent: 'center',
        justifyItems: 'center',
        paddingLeft: "5%",
        paddingRight: "5%",
        gap: 15,
    },
    header: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textField: {
        flex: 1,
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
        padding: 7,
        borderWidth: 0.2,
        borderRadius: 5,
        backgroundColor: '#2888eb',
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
    logoImage: {
        height: 100,
        width: 200
    }
});
