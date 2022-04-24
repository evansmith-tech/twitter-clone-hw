import { Box, Heading, HStack, Text, VStack, Flex, Center } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
import Head from 'next/head'
import Image from 'next/image'
import SideNav from '../components/sideNav';
import SignIn from '../components/signIn';
import Tweet from '../components/tweet';
import TweetFeed from '../components/tweetFeed';
// import styles from '../styles/Home.module.css'

/// Home page
export default function Home(props) {
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
          <SignIn />
          </HStack>

          {/* Actual UI */}


          <HStack alignItems={"space-between"} width="100%">
            <SideNav />

                <TweetFeed heading="Following Feed" tweets={props.timeline.tweets}></TweetFeed>
                <TweetFeed heading="Global Feed" tweets={props.timeline.tweets}></TweetFeed>
           
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
      timeline: {

        tweets: [
          {
            name: "Dan Abrahmov",
            avatar_link: "https://bit.ly/dan-abramov",
            tweet: "This is my tweet content!",
            timestamp: "5:39PM",
            post_id: 1
          }, {
            name: "Evan Smith",
            avatar_link: "https://bit.ly/dan-abramov",
            tweet: "This is my tweet againnnn!",
            timestamp: "6:39PM",
            post_id: 2
          }
        ],

      }
    }
  };
}