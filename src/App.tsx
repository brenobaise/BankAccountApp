import { Provider } from "./components/ui/provider";

import { Card } from "./components/Card";
import { useState } from "react";
import { Layout } from "./components/Layout";
import { Button, Heading } from "@chakra-ui/react";
import { GeneralButton } from "./components/GeneralButton";
function App() {
  const [value, setValue] = useState(0);
  const [anotherValue, setAnotherValue] = useState(0);

  return (
    <Provider>
      <Layout>
        <Card />
      </Layout>
    </Provider>
  );
}

export default App;
