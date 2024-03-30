import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    form: {
        flex: 1.5,
        justifyContent: 'center',
        justifyItems: 'center',
        paddingLeft: "10%",
        paddingRight: "5%",
        gap: 5,
    },
    textField: {
        borderWidth: 0.2,
        borderRadius: 5,
        borderColor: 'gray',
        fontSize: 18,
        padding: 5,
        paddingLeft: 15,
    },
    button: {
        borderRadius: 5,
        marginTop: 10,
    }
}); 