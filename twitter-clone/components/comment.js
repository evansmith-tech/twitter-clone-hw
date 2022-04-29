import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar, Flex, Icon } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
export default function Comment(props) {

    // const [isLiked, change_like_btn_state] = useState(false)
    // const [isRetweeted, change_retweet_btn_state] = useState(false)
    // const [like_count, like_count_state] = useState(props.likes)

    // const comment = function comment() {
    //     // call the route in the comment api
    //     console.log("hi")
    // }

    // const retweet = async function retweet() {
    //     //! this doesn't unretweet the likes serverside
    //     await fetch("http://localhost:3000/api/tweets/retweet", {
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             postId: props.postId,
    //             userId: 123 // todo AUTH comeback and swap this for the user ID determined at runtime
    //         })
    //     });
    //     change_retweet_btn_state(!isRetweeted); // whatever the curernt state is, we flip it
    // }
    // const like = async function like() {
    //     //! this doesn't decrement the likes serverside
    //     await fetch("http://localhost:3000/api/tweets/incrementLikes", {
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             postId: props.postId
    //         })
    //     });
    //     change_like_btn_state(!isLiked); // whatever the current state is, we flip it
    // }

    // const props = {
    //     name: "Dan Abrahmov",
    //     avatar_link:"https://bit.ly/dan-abramov",
    //     tweet: "",
    //     timestamp: "5:39PM"
    // }

    const deleteComment = async function deleteComment() {
        await fetch("http://localhost:3000/api/comments/deleteComment", {
            body: JSON.stringify({
                CommentId: props.CommentId
            })
        })
    }
    return (
        <Box boxShadow='xs' p='6' rounded='md' bg='white'>

            <VStack alignItems="center">
                <Text>{props.FirstName} </Text>
                <Text>{props.text}</Text>
                <IconButton icon={<CloseIcon />} onClick={deleteComment} />
            </VStack>


        </Box>
    );
}