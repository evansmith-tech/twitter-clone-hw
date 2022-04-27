import { Text } from "@chakra-ui/react";
import TweetFeed from "../components/tweetFeed";

export default function FlaggedTweetsPage(props) {
    // return (<Text>{props.flaggedData.tweet}</Text>);
    return(<TweetFeed tweets={props.flaggedData} heading="Flagged Tweets"></TweetFeed>)
}

export async function getServerSideProps() {

    //todo get all flagged tweets from the database

    const res = await fetch ("http://localhost:3000/api/feed/allFlagged");
    const data = await res.json();
    console.log(data);
    return { props: { flaggedData: [data] } };
}