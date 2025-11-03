import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { GeneralButton } from "../GeneralButton";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
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
