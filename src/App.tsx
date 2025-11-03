import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  !getAllLocalStorage() && createLocalStorage();

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
