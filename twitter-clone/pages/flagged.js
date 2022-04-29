import { Box, Heading, HStack, Text, VStack, Flex, Center, Button, Input } from '@chakra-ui/react';
import TweetFeed from "../components/tweetFeed";
import {useState} from 'react';
export default function FlaggedTweetsPage(props) {


    const [isSignedin, changeSignInState] = useState(false)
    const [userState, changeUserInfo] = useState({
        state: null // todo should i change this
        , IsAdmin: false
    })

    const signIn = function signIn() {
        // todo sign in logic
        // check to see if user exists
        // then login 

        let user = {
            IsAdmin: true
        }; // todo make the call

        changeUserInfo(user); //
        changeSignInState(true);
    }

    const signOut = function signOut() {
        // todo sign in logic
        // check to see if user exists
        // then login 

        let user = {
            IsAdmin: false
        }; // todo make the call

        changeUserInfo(user); // load in user info
        changeSignInState(false);
    }
    // return (<Text>{props.flaggedData.tweet}</Text>);
    return (
        <VStack width="100%" alignContent="start">
            {/* placeholder nav bar */}

            <HStack width="100%" bgColor="blue.400" alignContent={"space-between"}>

                <Heading padding={".2em .3em"} textColor="white">Twitter Clone</Heading>
                {/* Sign in form  */}
                {isSignedin ? <Button colorScheme={"twitter"} onClick={signOut}>Sign Out</Button> :
                    <HStack>
                        <Input placeholder="email" type="email"></Input>
                        {/* <Input placeholder="passwd" type="password"></Input> */}
                        <Button colorScheme="twitter" onClick={signIn}>Sign In</Button>
                    </HStack>
                }
            </HStack>

            {/* Actual UI */}


            <HStack alignItems={"space-between"} width="100%">
                {/* <SideNav /> */}
                {/* {
              isSignedin ?
                <TweetFeed auth={userState} heading="Following Feed" tweets={props.timeline.tweets}></TweetFeed> : <Box />
            }
            <TweetFeed auth={userState} heading="Global Feed" tweets={props.timeline.tweets}></TweetFeed> */}

                <TweetFeed auth={userState} tweets={props.flaggedData} heading="Flagged Tweets"></TweetFeed>
            </HStack>

        </VStack>



    );

}

export async function getServerSideProps() {

    //todo get all flagged tweets from the database

    const res = await fetch("http://localhost:3000/api/feed/allFlagged");
    const data = await res.json();
    console.log(data);
    return { props: { flaggedData: [data] } };
}