import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <MainRoutes />
          </Layout>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
