import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { Provider } from "./components/ui/provider";
import { Layout } from "./components/Layout";
import AccountInfo from "./pages/AccountInfo";
import { createContext } from "react";

interface IAppContext {
  user: string;
}

export const AppContext = createContext({} as IAppContext);
const AppContextProvider = ({ children }: any) => {
  const user = "breno";
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/account/:id' element={<Account />} />
              <Route path='/account/info' element={<AccountInfo />} />
            </Routes>
          </Layout>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
