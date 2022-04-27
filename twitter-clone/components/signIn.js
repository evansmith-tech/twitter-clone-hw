import { Button, HStack, Input } from "@chakra-ui/react";

export default function SignIn(props) {
    return (
        <HStack>
            <Input placeholder="email" type="email"></Input>
            {/* <Input placeholder="passwd" type="password"></Input> */}
            <Button colorScheme="twitter">Sign In</Button>
        </HStack>

    );
}