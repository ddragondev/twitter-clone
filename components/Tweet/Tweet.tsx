import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import tweets from '../../assets/data/tweets';
import { styles } from './styles';
import { TweetProps } from './types';
import { Entypo, EvilIcons } from '@expo/vector-icons';


type IconButtonProps = {
    icon: React.ComponentProps<typeof EvilIcons>['name'];
    text?: string | number;
}
const IconButton = ({ icon, text }: IconButtonProps) => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <EvilIcons name={icon} size={22} color="gray" />
            <Text style={{ fontSize: 12, color: 'gray' }}>{text}</Text>
        </View>
    )
}

const Tweet = ({ tweet }: TweetProps) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>@{tweet.user.username} · 2h</Text>
                    <Entypo name="dots-three-horizontal" size={16} color="gray" style={{
                        marginLeft: 'auto'
                    }}
                    />
                </View>
                <Text style={styles.content}>{tweet.content}</Text>
                {tweet.image && <Image source={{ uri: tweet.image }} style={styles.image} />}
                <View style={styles.footer}>
                    <IconButton icon="comment" text={tweet.numberOfComments} />
                    <IconButton icon="retweet" text={tweet.numberOfRetweets} />
                    <IconButton icon="heart" text={tweet.numberOfLikes} />
                    <IconButton icon="chart" text={tweet.impressions || 0} />
                    <IconButton icon="share-apple" />


                </View>
            </View>
        </View>
    )
}

export default Tweet
