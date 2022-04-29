import { Box, Heading, HStack, Text, VStack, Flex, Center, Button, Input } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
import Head from 'next/head'
import Image from 'next/image'
import SideNav from '../components/sideNav';
import SignIn from '../components/signIn';
import Tweet from '../components/tweet';
import TweetFeed from '../components/tweetFeed';
// import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import PeopleList from '../components/people';

/// Home page
export default function Home(props) {
    const [newCommentValue, changeNewCommentValue] = useState('');
    const handleChangeComment = (event) => changeNewCommentValue(event.target.value);

    const createComment = async function createComment() {
        await fetch('http://localhost:3000/api/comments/createComment', {
            postId: props.tweet.postId,
            userId: props.auth.UserId,
            commentText: newCommentValue
        });
    }

    console.log(props);
    return (
        <html>
            <head>
                <title>Comment Section</title>
            </head>
            <body>
                <VStack width="100%" alignContent="start">
                    {/* placeholder nav bar */}

                    <HStack width="100%" bgColor="blue.400" alignContent={"space-between"}>

                        <Heading padding={".2em .3em"} textColor="white">Comment</Heading>
                        <Tweet auth={props.auth} key={props.tweet.post_id} {...props.tweet} />
                        <HStack>

                            <Input value={newCommentValue} onChange={handleChangeComment} type={'text'} />
                            <Button style={'twitter'} onClick={createComment}>Add Comment</Button>
                        </HStack>

                        <CommentFeed comments={props.comments}/>
                        {/* Sign in form  */}
                        {/* {isSignedin ? <HStack>

              <Button colorScheme={"twitter"} onClick={signOut}>Sign Out</Button> 
              <Button colorScheme={"red"} onClick={deleteUser}>Delete user</Button> 
            </HStack> :
              <HStack>
                <Input value={userID} onChange={handleChangeName} placeholder="UserId" type="text"></Input>
                <Input value={password} onChange={handleChangePassword} placeholder="" type="password"></Input>
                <Button colorScheme="twitter" onClick={signIn}>Sign In</Button>
              </HStack>
            } */}
                    </HStack>

                    {/* Actual UI */}


                    <HStack alignItems={"space-between"} width="100%">
                        <SideNav />
                        {/* {
              isSignedin ?
                <TweetFeed auth={userState} heading="Following Feed" tweets={props.timeline.tweets}></TweetFeed> : <Box />
            }
            <VStack>

              <TweetFeed auth={userState} heading="Global Feed" tweets={props.timeline.tweets}></TweetFeed>
              <PeopleList auth={userState} heading="People" people={props.people} />
            </VStack> */}

                    </HStack>

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
    return {
        props: {
            tweet: {

            },
            comments: [
                {
                    FirstName: "Evan",
                    text: "Comment"
                }
            ]
        }
    };
}