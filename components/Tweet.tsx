import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import tweets from '../assets/data/tweets';
const tweet = tweets[0];
const Tweet = ({ tweet }) => {

    const { user, createdAt, content, numberOfComments, numberOfRetweets, numberOfLikes } = tweet;



    return (
        <View style={styles.container}>
            <Image src={tweet.user.image} style={styles.userImage} />
            <View style={styles.mainContainer}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.content}>{tweet.content}</Text>
            </View>
        </View>
    )
}

export default Tweet

const styles = StyleSheet.create({
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
