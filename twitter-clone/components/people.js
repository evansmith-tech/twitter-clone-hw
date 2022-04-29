import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack, IconButton } from "@chakra-ui/react";

export default function PeopleList(props) {
    return (
        <VStack>
            <Heading>{props.heading}</Heading>
            {props.people.map((e) => <FollowTile auth={props.auth} user={e} />)}
            {/* <Text>{props.people}</Text> */}
        </VStack>
    );
}

function FollowTile(props) {

    // const [isAdded, isAddedStateChange] = useState(false);


    // const addUser = function addUser() {
    //     // isAddedStateChange(!isAdded);
    // }
    // todo navigate to that users profile
    return (
        <HStack shadow={"md"} rounded={"md"}>
            <Text>
                {props.user.FirstName + " " + props.user.LastName}
            </Text>
            <IconButton colorScheme={true ? "twitter" : ""} variant={"ghost"}  aria-label='Like' icon={<ArrowRightIcon />} />
        </HStack>
        );
}