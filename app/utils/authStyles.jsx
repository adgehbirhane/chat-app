import { StyleSheet } from "react-native";
import Colors from '../colors/Colors'
export const authStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
    },
    illustration: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor:  Colors.PRIMARY,
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
        borderColor:    Colors.GRAY,
        fontSize: 16,
        padding: 7,
        paddingLeft: 20,
        backgroundColor:  Colors.LIGHT_GRAY,
    },
    eyeIcon: {
        position: 'absolute',
        right: 6,
        top: '50%',
        paddingHorizontal: 5,
        transform: [{ translateY: -10 }],
        backgroundColor:  Colors.LIGHT_GRAY,
    },
    button: {
        borderRadius: 5,
        padding: 7,
        borderWidth: 0.2,
        borderRadius: 5,
        backgroundColor:  Colors.BLUE,
    },
    google_btn: {
        backgroundColor:  Colors.DARK_GRAY,
    },
    buttonText: {
        color: Colors.LIGHT_GRAY,
        fontSize: 16,
        textAlign: 'center',
    },
    text: {
        color: Colors.LIGHT_GRAY,
        textAlign: 'center'
    },
    link: {
        color: Colors.BLUE,
        paddingTop: 5,
    },
    logoImage: {
        height: 100,
        width: 200
    }
});
