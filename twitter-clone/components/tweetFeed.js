import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar, Center } from "@chakra-ui/react"
import Tweet from "./tweet";
/// Gets twitter feed JSON objecct, and renders out alist of tweets
//props : heading str, tweets []
export default function TweetFeed(props) {
    console.log("Tweets: ")
    console.log(props);
    return (
        <VStack shadow={"lg"} rounded={"md"}>
            <HStack bgColor={"gray.100"} width="100%">


                <Heading padding={".1em"}>{props.heading}</Heading>

                {/* <HamburgerIcon/> */}
            </HStack>
            {props.tweets.map((tweet) => (<Tweet auth={props.auth} key={tweet.post_id} {...tweet} />))}
        </VStack>
    );
}

