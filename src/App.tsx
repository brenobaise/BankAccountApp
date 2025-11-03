import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { Provider } from "./components/ui/provider";
import { Layout } from "./components/Layout";
import AccountInfo from "./pages/AccountInfo";
import { AppContextProvider } from "./components/AppContext";

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
