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
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";

function App() {
  return (
    <Provider>
      {/* M: Main container */}

      <Box minHeight='100vh' bg='#9413dc' p='25px'>
        <Header />

        {/* Login Card */}
        <Card />
      </Box>
    </Provider>
  );
}

export default App;
