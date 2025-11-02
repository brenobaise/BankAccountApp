import { Container, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Container
      display='flex'
      justifyContent='start'
      p='20px'
      paddingBottom='40'
    >
      <Heading size='5xl' fontWeight='bold'>
        Dio Bank
      </Heading>
    </Container>
  );
};
