import { Box, Heading, HStack, Text, VStack, Flex, Center, Button, Input } from '@chakra-ui/react';

import React, { useState } from 'react';

/// Home page
export default function Home(props) {


    const [isSignedin, changeSignInState] = useState(false)
    const [userState, changeUserInfo] = useState({
        state: null // todo should i change this
        , IsAdmin: false
    })

    //   const signIn = function signIn() {
    //     // todo sign in logic
    //     // check to see if user exists
    //     // then login 

    //     let user = {
    //       IsAdmin: true
    //     }; // todo make the call

    //     changeUserInfo(user); //
    //     changeSignInState(true);
    //   }

    //   const signOut = function signOut() {
    //     // todo sign in logic
    //     // check to see if user exists
    //     // then login 

    //     let user = {
    //       IsAdmin: false,
    //       state:null
    //     }; // todo make the call

    //     changeUserInfo(user); // load in user info
    //     changeSignInState(false);
    //   }

    const [name, setName] = React.useState('');
    const handleChangeName = (event) => setName(event.target.value);

    const [password, setPassword] = React.useState('');
    const handleChangePassword = (event) => setPassword(event.target.value);
    const signUp = async function SignUp() {
        //todo create user using name and password
        const name_arr = name.split(" ");
        await fetch("http://localhost:3000/api/users/createUser", {
            method: "POST",
            body: JSON.stringify(
                {
                    firstName: name_arr[0],
                    lastName: name_arr[1],
                    password: password,
                    isAdmin: false
                }
            )
        })
        console.log(name + " " + password);
    }
    console.log(props);
    return (
        <html>
            <head>
                <title>Twitter Clone</title>
            </head>
            <body>
                <VStack width="100%" alignContent="start">
                    {/* placeholder nav bar */}

                    <HStack width="100%" bgColor="blue.400" alignContent={"space-between"}>

                        <Heading padding={".2em .3em"} textColor="white">Twitter Clone</Heading>
                        {/* Sign up form  */}


                    </HStack>

                    {/* Actual UI */}

                    <HStack>
                        <Input value={name} onChange={handleChangeName} placeholder="John Doe" type="text"></Input>
                        <Input value={password} onChange={handleChangePassword} placeholder="passwd" type="email"></Input>
                        {/* <Input placeholder="passwd" type="password"></Input> */}
                        <Button colorScheme="twitter" onClick={signUp}>Sign Up</Button>
                    </HStack>

                    {/* <HStack alignItems={"space-between"} width="100%">
            <SideNav />
            {
              isSignedin ?
                <TweetFeed auth={userState} heading="Following Feed" tweets={props.timeline.tweets}></TweetFeed> : <Box />
            }
            <VStack>

              <TweetFeed auth={userState} heading="Global Feed" tweets={props.timeline.tweets}></TweetFeed>
              <PeopleList auth={userState} heading="People" people={props.people} />
            </VStack>

          </HStack> */}

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
                ]
            },
            people: [
                {
                    UserId: "1" // todo confirm schema,
                    , FirstName: "Evan1",
                    LastName: "SMith1"
                }

            ]
        }
    };
}