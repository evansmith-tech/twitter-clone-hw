import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar, Center } from "@chakra-ui/react"
import Tweet from "./tweet";
import Comment from './comment';
/// Gets twitter feed JSON objecct, and renders out alist of tweets
//props : heading str, tweets []
export default function CommentFeed(props) {
    console.log("Comments: ")
    console.log(props);
    return (
        <VStack shadow={"lg"} rounded={"md"}>
            {props.comments.map((comment) => (<Comment auth={props.auth} key={comment.CommentId} {...comment} />))}
        </VStack>
    );
}
