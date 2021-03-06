import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar, Flex, Icon } from "@chakra-ui/react"
import { CloseIcon, RepeatIcon, CheckIcon, WarningTwoIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
export default function Tweet(props) {

    const [isLiked, change_like_btn_state] = useState(false)
    const [isRetweeted, change_retweet_btn_state] = useState(false)
    // const [like_count, like_count_state] = useState(props.likes)

    const comment = async function comment() {
       await fetch('http://localhost:3000/api/tweets/deletePost', {
           method: "POST",

               headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
           body: JSON.stringify({
               postId: props.PostId
           })
       });

    }
    
    const retweet = async function retweet() {
        //! this doesn't unretweet the likes serverside
        // await fetch("http://localhost:3000/api/tweets/retweet", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         postId: props.PostId,
        //         userId: 123 // todo AUTH comeback and swap this for the user ID determined at runtime
        //     })
        // });
        change_retweet_btn_state(!isRetweeted); // whatever the curernt state is, we flip it
    }
    const like = async function like() {
        //! this doesn't decrement the likes serverside
        await fetch("http://localhost:3000/api/tweets/incrementLikes", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: props.PostID
            })
        });
        change_like_btn_state(!isLiked); // whatever the current state is, we flip it
    }

    // const props = {
    //     name: "Dan Abrahmov",
    //     avatar_link:"https://bit.ly/dan-abramov",
    //     tweet: "",
    //     timestamp: "5:39PM"
    // }
    return (
        <Box boxShadow='xs' p='6' rounded='md' bg='white'>

            <VStack alignItems="center">

                <HStack>
                    {props.avatar_link ?
                        <Avatar name={props.name} src={props.avatar_link} /> : <Box />
                    }
                    <VStack alignItems="start">
                        <Heading size="md" >{props.FirstName + " " + props.LastName}</Heading>
                        <Text>{props.PostText}</Text>
                    </VStack>
                </HStack>
                <HStack alignContent="space-between">
                    {/* <Flex> */}

                    <IconButton colorScheme={false ? "twitter" : ""} variant={"ghost"} onClick={comment} aria-label='Delete' icon={<CloseIcon />} />
                    <IconButton colorScheme={isRetweeted ? "twitter" : ""} variant={"ghost"} onClick={retweet} aria-label='Retweet' icon={<RepeatIcon />} />
                    <IconButton colorScheme={isLiked ? "twitter" : ""} variant={"ghost"} onClick={like} aria-label='Like' icon={<CheckIcon />} />
                    {props.auth.IsAdmin ? <IconButton colorScheme={"yellow"} variant={'solid'} aria-label='flag' icon={<WarningTwoIcon />}></IconButton> : <Box />}
                    {/* </Flex> */}
                </HStack>

            </VStack>
        </Box>
    );
}