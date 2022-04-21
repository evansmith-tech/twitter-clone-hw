import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar } from "@chakra-ui/react"
import Tweet from "./tweet";
/// Gets twitter feed JSON objecct, and renders out alist of tweets
export default function TweetFeed(props) {
    console.log("Tweets: ")
    console.log(props);
    return (
        <VStack>
            { props.tweets.map((tweet) => (<Tweet key={tweet.post_id} {...tweet}></Tweet>))}
             
             {/* {props} */}
            {/* <Tweet {...tweet_data}></Tweet> */}
        </VStack>
    );
}

