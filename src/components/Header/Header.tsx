import { Box, Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Flex p={6}>
      <Box>
        <Center>
          <Heading size='5xl' fontWeight='bold'>
            Dio Bank
          </Heading>
        </Center>
      </Box>
      <Spacer />

      {isLoggedIn && <Button onClick={() => logout()}>Log Out</Button>}
    </Flex>
  );
};
