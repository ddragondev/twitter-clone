import { useSearchParams } from "expo-router";
import { Text } from "react-native";
import tweets from "../../../../../assets/data/tweets";
import { Tweet } from "../../../../../components/Tweet";
export default function TweetScreen() {
    const { id } = useSearchParams();

    const tweet = tweets.find((tweet) => tweet.id === id);

    if (!tweet) { return <Text>Tweet not found</Text> }

    return (
        <Tweet tweet={tweet} />
    )
}