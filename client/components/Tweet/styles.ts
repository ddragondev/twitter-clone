import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
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
    username: {
        color: 'grey',
        marginLeft: 5,
    },
    content: {
        marginTop: 5,
        lineHeight: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginTop: 10,
        borderRadius: 15,
        marginVertical: 10,
    },
    footer:{
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',

    }
});
