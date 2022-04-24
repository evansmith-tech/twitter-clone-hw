import { ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";

export default function SideNav(props) {
    return (<VStack >
        <NavItem icon={<ChevronRightIcon/>} heading="Home"/>
        <NavItem icon={<ChevronRightIcon/>} heading="Explore"/>
        <NavItem icon={<ChevronRightIcon/>} heading="Profile"/>
    </VStack>);
}

function NavItem(props) {
    return(<HStack alignContent="space-evenly">
        {props.icon}
        <Text>{props.heading}</Text>
    </HStack>)
}