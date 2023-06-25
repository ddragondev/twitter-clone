import { Image, View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { TweetProps } from './types';
import { Entypo } from '@expo/vector-icons';
import { IconButton } from './components/IconButton';
import { Link } from 'expo-router';



const Tweet = ({ tweet }: TweetProps) => {

    return (
        <Link href={`feed/tweet/${tweet.id}`} asChild>

            <Pressable style={styles.container}>
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
            </Pressable>
        </Link >
    )
}

export default Tweet
