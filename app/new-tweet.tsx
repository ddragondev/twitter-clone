
import { View, Text, StyleSheet, Image, TextInput, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

export default function NewTweet() {
    const [tweet, setTweet] = React.useState('')
    const router = useRouter()

    const onTweet = () => {
        console.log(`Posting the tweet: ${tweet}`)
        setTweet('')
        router.back()
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href="../" style={{
                        fontSize: 20,
                    }}>
                        Cancel
                    </Link>
                    <Pressable onPress={onTweet} style={styles.button}>
                        <Text style={styles.buttonText}>Tweet</Text>
                    </Pressable>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg' }} />
                    <TextInput
                        placeholder="What's happening?"
                        multiline
                        numberOfLines={5}
                        style={{ flex: 1 }}
                        value={tweet}
                        onChangeText={setTweet} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',

    },
    button: {
        backgroundColor: '#1c9bf0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
})
