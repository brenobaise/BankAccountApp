import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { Provider } from "./components/ui/provider";
import { Layout } from "./components/Layout";
import AccountInfo from "./pages/AccountInfo";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account/:id' element={<Account />} />
            <Route path='/infoaccount' element={<AccountInfo />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
