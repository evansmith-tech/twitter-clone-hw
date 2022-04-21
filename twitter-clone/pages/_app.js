import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';

// Chakra used for lots of UI work, leave provider there. Can wrap any other provider components
// around it though.

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider> 
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
