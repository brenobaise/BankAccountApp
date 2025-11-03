import { Container } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
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
        {children}
      </Container>
    </>
  );
};
