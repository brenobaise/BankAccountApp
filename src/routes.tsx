import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import AccountInfo from "./pages/AccountInfo";
import Home from "./pages/Home";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/account/:id'
        element={isLoggedIn ? <Account /> : <Home />}
      />
      <Route path='/account/info' element={<AccountInfo />} />
    </Routes>
  );
};

export default MainRoutes;
