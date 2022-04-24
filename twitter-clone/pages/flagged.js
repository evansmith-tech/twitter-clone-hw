import { Text } from "@chakra-ui/react";

export default function FlaggedTweetsPage(props) {
    return (<Text>{props.hi}</Text>);
}

export async function getServerSideProps() {

    //todo get all flagged tweets from the database

    return { props: { "hi": "mom" } };
}