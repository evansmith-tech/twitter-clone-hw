import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import Axios from "axios";
import { useState } from "react";

// Chakra used for lots of UI work, leave provider there. Can wrap any other provider components
// around it though.

const addUser = () => {
  Axios.post("localhost:3000/createUser", {
    firstName: firstName, 
    lastName: lastName,
    password: password,
    isAdmin: isAdmin
  }).then(() => {
    console.log("Success");
  });
}

const getUsers = () => {
  Axios.get("localhost:3000/getUsers").then((response) => {
    console.log(response);
  });
}

function MyApp({ Component, pageProps }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  
  return (
    <ChakraProvider> 
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
