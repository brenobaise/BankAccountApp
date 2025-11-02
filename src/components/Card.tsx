import { login } from "../services/login";
import { Input, Heading, VStack, Container } from "@chakra-ui/react";
import { GeneralButton } from "./GeneralButton";
import { useState } from "react";

export const Card = () => {
  const [email, setEmail] = useState("");

  const logar = () => {
    alert(email);
  };

  console.log("typed email: ", email);
  return (
    <>
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
          <GeneralButton onClick={() => login(email)}>Login</GeneralButton>
        </VStack>
      </Container>
    </>
  );
};
