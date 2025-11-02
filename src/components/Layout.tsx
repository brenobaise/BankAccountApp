import { Flex, Box } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction='column' minH='100vh'>
      <Box as='header'>
        <Header />
      </Box>

      {/* Main content fills the space between header & footer */}
      <Box as='main' flex='1'>
        {children}
      </Box>

      <Box as='footer'>
        <Footer />
      </Box>
    </Flex>
  );
};
