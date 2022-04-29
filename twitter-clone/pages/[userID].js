
import { Box, Heading, HStack, Text, VStack, Flex, Center, Button, Input, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import SideNav from '../components/sideNav';
import TweetFeed from '../components/tweetFeed';
export default function UserPage(props) {

    const [userState, changeUserInfo] = useState(props.user);

    return (
        <html>
            <head>
                <title>props.user.FirstName</title>
            </head>
            <body>
                <VStack width="100%" alignContent="start">
                    {/* placeholder nav bar */}

                    <HStack width="100%" bgColor="blue.400" alignContent={"space-between"}>
                        
                        <Heading padding={".2em .3em"} textColor="white">{props.user.FirstName + " " + props.user.LastName}</Heading>
                        
                    </HStack>


                    {/* Actual UI */}


                    <HStack alignItems={"space-between"} width="100%">
                       <SideNav />
                       
                        {/* {
              isSignedin ?
                <TweetFeed auth={userState} heading="Following Feed" tweets={props.timeline.tweets}></TweetFeed> : <Box />
            } */}
                        <TweetFeed auth={userState} heading="User's Feed" tweets={props.timeline.tweets}></TweetFeed>

                    </HStack>
                    7
                </VStack>
            </body>
        </html>
    );
}

// This function gets called at build time
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    // todo get the users info, then get all their tweets
    return {
        props: {
            user: {
                FirstName: "Evan",
                LastName: "Smith"
            },
            timeline: {

                tweets: [
                    {
                        name: "Dan Abrahmov",
                        avatar_link: "https://bit.ly/dan-abramov",
                        tweet: "This is my tweet content!",
                        timestamp: "5:39PM",
                        Likes: 0,
                        postId: 1
                    }, {
                        name: "Evan Smith",
                        avatar_link: "https://bit.ly/dan-abramov",
                        tweet: "This is my tweet againnnn!",
                        timestamp: "6:39PM",
                        Likes: 0,
                        postId: 2
                    }
                ],

            }
        }
    };
}