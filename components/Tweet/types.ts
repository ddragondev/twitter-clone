
type User = {
    id: string;
    username: string;
    name: string;
    image?: string;
}

type TweetType = {
    id: string;
    content: string;
    user : User;
    createdAt: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;


}

export type TweetProps = {
    tweet: TweetType;
}