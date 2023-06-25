import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
    },
    mainContainer: {
        flex: 1,
        marginLeft: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    name: {
        fontWeight: '600',
    },
    content: {
        marginTop: 5,
        lineHeight: 20,
    }
});
