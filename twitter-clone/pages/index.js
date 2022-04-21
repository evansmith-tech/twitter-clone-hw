import { ClassNames } from '@emotion/react';
import Head from 'next/head'
import Image from 'next/image'
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
        <TweetFeed tweets={props.timeline.tweets}></TweetFeed>
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