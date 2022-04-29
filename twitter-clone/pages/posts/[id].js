import { Box, Heading, HStack, Text, VStack, Flex, Center, Button, Input } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
import Head from 'next/head'
import Image from 'next/image'
// import SideNav from '../components/sideNav';
// import Tweet from '../components/tweet';
// import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Tweet from '../../components/tweet';
import CommentFeed from '../../components/commentFeed';

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


                    {/* <HStack alignItems={"space-between"} width="100%">
                     */}
                    <Tweet auth={props.auth} key={props.tweet.post_id} {...props.tweet} />
                    <HStack>

                        <Input value={newCommentValue} onChange={handleChangeComment} type={'text'} />
                        <Button style={'twitter'} onClick={createComment}>Add Comment</Button>
                    </HStack>
                    {props.comments == [] ?
                        <Text>No comments :(</Text>
                        : <CommentFeed comments={props.comments} />
                    }

                    {/* </HStack> */}

                </VStack>
            </body>
        </html>
    );
}

// This function gets called at build time
export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    // const router = useRouter();
    const { id } = context.params;
    let res_tweet = await fetch(`http://localhost:3000/api/tweets/${id}`);
    let resData = await res_tweet.json();

    let res_comment = await fetch(`http://localhost:3000/api/comments/getPostComments`, {
        method: "POST",
        body: JSON.stringify({
            postId: id
        })
    });

    let comment_data = await res_comment.json();
    console.log(resData);
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            auth: {
                IsAdmin: false
            },
            tweet: resData,
            comments: comment_data
        }
    };
}