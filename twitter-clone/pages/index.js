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


  const [isSignedin, changeSignInState] = useState(false)
  const [userState, changeUserInfo] = useState({
    state: null // todo should i change this
    , IsAdmin: false
  })
  const [followFeedState, changeFeedState] = useState([]);

  const [userID, setName] = React.useState('');
  const handleChangeName = (event) => setName(event.target.value);

  const [password, setPassword] = React.useState('');
  const handleChangePassword = (event) => setPassword(event.target.value);

  const signIn = async function signIn() {
    // todo sign in logic
    // check to see if user exists
    // then login 
    // const name_arr = userID.split(" ");
    let res = await fetch(`http://localhost:3000/api/users/${userID}`);
    let data = await res.json();
  
    
    console.log("USERERRR");
    let user = data[0];
    console.log(user);

    changeUserInfo(user);
    changeSignInState(true);
    let feed_res = await fetch(`http://localhost:3000/api/feed/${userID}`);
    let feed_json = await feed_res.json();
    // console.log(feed_json);
    changeFeedState(feed_json);
    // console.log(followFeedState);
  }

  const signOut = function signOut() {
    // todo sign in logic
    // check to see if user exists
    // then login 

    let user = {
      IsAdmin: false,
      state: null
    }; // todo make the call

    changeUserInfo(user); // load in user info
    changeSignInState(false);
  }

  const deleteUser = async function deleteUser() {
    await fetch("http://localhost:3000/api/users/deleteUser", {
      body: JSON.stringify(
        { userId: userID }
      )
    });
    await signOut();
  }

  const [newPostValue, changeNewPostValue] = useState('');
  const handleChangePost = (event) => changeNewPostValue(event.target.value);

  const createPost = async function createPost() {
    console.log(userState);
    await fetch('http://localhost:3000/api/tweets/createPost', {
      method: "POST",
      body: JSON.stringify({
        postText: newPostValue,
        userId: userState.UserId,
        timeStamp: "2022-04-30 10:00:58"
      })
    });
  }


  console.log(props);
  return (
    <html>
      <head>
        <title>Byte</title>
      </head>
      <body>
        <VStack width="100%" alignContent="start">
          {/* placeholder nav bar */}

          <HStack width="100%" bgColor="blue.400" alignContent={"space-between"}>

            <Heading padding={".2em .3em"} textColor="white">Twitter Clone</Heading>
            {/* Sign in form  */}
            {isSignedin ? <HStack>

              <Button colorScheme={"twitter"} onClick={signOut}>Sign Out</Button>
              <Button colorScheme={"red"} onClick={deleteUser}>Delete user</Button>
            </HStack> :
              <HStack>
                <Input value={userID} onChange={handleChangeName} placeholder="UserId" type="text"></Input>
                <Input value={password} onChange={handleChangePassword} placeholder="" type="password"></Input>
                <Button colorScheme="twitter" onClick={signIn}>Sign In</Button>
              </HStack>
            }
          </HStack>

          {/* Actual UI */}
          {isSignedin ?
            <HStack>
              {/* // ! New Posts  */}
              <Input value={newPostValue} onChange={handleChangePost} type={'text'} />
              <Button onClick={createPost}>Add Post</Button>
            </HStack> : <Box />
          }


          <HStack alignItems={"space-between"} width="100%">
            {/* <SideNav /> */}
            {
              isSignedin ?

                <VStack>



                  <TweetFeed auth={userState} heading="Following Feed" tweets={followFeedState}></TweetFeed>
                </VStack>
                : <Box />
            }
            <TweetFeed auth={userState} heading="Global Feed" tweets={props.timelines.global}></TweetFeed>
            <PeopleList auth={userState} heading="People" people={props.people} />


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

  let tweetsRes = await fetch("http://localhost:3000/api/feed/global");
  let globalData = await tweetsRes.json();
  console.log(globalData);
  let peopleRes = await fetch('http://localhost:3000/api/users/getUsers');
  let peopleData = await peopleRes.json();
  console.log(peopleData);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      timelines: {
        global: globalData
        // tweets: [
        //   {
        //     name: "Dan Abrahmov",
        //     avatar_link: "https://bit.ly/dan-abramov",
        //     tweet: "This is my tweet content!",
        //     timestamp: "5:39PM",
        //     Likes: 0,
        //     postId: 1
        //   }, {
        //     name: "Evan Smith",
        //     avatar_link: "https://bit.ly/dan-abramov",
        //     tweet: "This is my tweet againnnn!",
        //     timestamp: "6:39PM",
        //     Likes: 0,
        //     postId: 2
        //   }

      },
      people: peopleData
    }
  };
}