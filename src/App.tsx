import { Provider } from "./components/ui/provider";
import { login } from "./services/login";
import {
  Center,
  Input,
  Box,
  Button,
  Heading,
  VStack,
  Container,
} from "@chakra-ui/react";

function App() {
  return (
    <Provider>
      {/* M: Main container */}
      <Box
        minHeight='100vh'
        bg='#9413dc'
        display='flex'
        alignItems='start'
        justifyContent='center'
        p='25px'
      >
        {/* Login Card */}
        <Container
          bg='white'
          borderRadius='25px'
          p='35px'
          maxW='400px'
          boxShadow='lg'
        >
          <Heading
            textAlign='center'
            mb='26px'
            color='#000000'
            size='2xl'
            fontFamily='heading'
          >
            Log In
          </Heading>

          {/* VStack handles spacing automatically */}
          <VStack gap='20px'>
            <Input
              placeholder='Email'
              h='50px'
              color='#000000'
              bg='#f9f9f9'
              _placeholder={{ color: "#888" }}
              borderColor='#ddd'
              _focus={{
                borderColor: "#9413dc",
                boxShadow: "0 0 0 1px #9413dc",
              }}
            />
            <Input
              placeholder='Password'
              type='password'
              h='50px'
              color='#000000'
              bg='#f9f9f9'
              _placeholder={{ color: "#888" }}
              borderColor='#ddd'
              _focus={{
                borderColor: "#9413dc",
                boxShadow: "0 0 0 1px #9413dc",
              }}
            />
            <Button
              colorPalette='purple'
              size='lg'
              variant='solid'
              fontWeight='bold'
              onClick={login}
            >
              Login
            </Button>
          </VStack>
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
