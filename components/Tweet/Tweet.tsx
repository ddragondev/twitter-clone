import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import tweets from '../../assets/data/tweets';
import { styles } from './styles';
import { TweetProps } from './types';

const Tweet = ({ tweet }: TweetProps) => {




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
