import { Box, Text, Heading, Image, VStack, HStack, IconButton, Avatar,Flex } from "@chakra-ui/react"
import { ChatIcon, RepeatIcon, CheckIcon } from '@chakra-ui/icons'

export default function Tweet(props) {

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

                    <IconButton aria-label='Comment' icon={<ChatIcon />} />
                    <IconButton aria-label='Retweet' icon={<RepeatIcon />} />
                    <IconButton aria-label='Upvote' icon={<CheckIcon />} />
                {/* </Flex> */}
                </HStack>

        </VStack>
        </Box>
    );
}