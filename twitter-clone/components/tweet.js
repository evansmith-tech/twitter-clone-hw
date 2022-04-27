import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar, Flex, Icon } from "@chakra-ui/react"
import { ChatIcon, RepeatIcon, CheckIcon, WarningTwoIcon } from '@chakra-ui/icons'

export default function Tweet(props) {

    function comment() {
        // call the route in the comment api
        console.log("hi")
    }
    function retweet() {

    }
    function like() {

    }

    // const props = {
    //     name: "Dan Abrahmov",
    //     avatar_link:"https://bit.ly/dan-abramov",
    //     tweet: "",
    //     timestamp: "5:39PM"
    // }
    return (
        <Box boxShadow='xs' p='6' rounded='md' bg='white'>

            <VStack alignItems="center">

                <HStack>
                    <Avatar name={props.name} src={props.avatar_link} />
                    <VStack alignItems="start">
                        <Text>{props.name} {props.timestamp}</Text>
                        <Text>{props.tweet}</Text>
                    </VStack>
                </HStack>
                <HStack alignContent="space-between">
                    {/* <Flex> */}

                    <IconButton variant={"ghost"} onClick={comment()} aria-label='Comment' icon={<ChatIcon />} />
                    <IconButton variant={"ghost"} onClick={retweet()} aria-label='Retweet' icon={<RepeatIcon />} />
                    <IconButton variant={"ghost"} onClick={like()} aria-label='Like' icon={<CheckIcon />} />
                    {false ? <IconButton colorScheme={"yellow"} variant={'solid'} aria-label='flag' icon={<WarningTwoIcon />}></IconButton> : <Box />}
                    {/* </Flex> */}
                </HStack>

            </VStack>
        </Box>
    );
}