import { GeneralButton } from "../components/GeneralButton";
import { login } from "../services/login";
import { Heading, VStack, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Email is not valid.");
    }

    setIsLoggedIn(true);

    changeLocalStorage({ login: true });

    navigate(`/account/1`);
  };
  return (
    <>
      <Card>
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
          <GeneralButton onClick={() => validateUser(email)}>
            Login
          </GeneralButton>
        </VStack>
      </Card>
    </>
  );
};

export default Home;
