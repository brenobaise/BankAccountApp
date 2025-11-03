import { Container, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export const Header = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <Container
      display='flex'
      justifyContent='space-between'
      p='20px'
      paddingBottom='40'
    >
      <Heading size='5xl' fontWeight='bold'>
        Dio Bank
      </Heading>
      <Heading size='4xl' fontWeight='bold'>
        {context.user}
      </Heading>
    </Container>
  );
};
