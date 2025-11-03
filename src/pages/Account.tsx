import CardInfo from "../components/CardInfo";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface IUserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}
const Account = () => {
  const [userdata, setUserData] = useState<null | IUserData>();
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const date = new Date();
  const { id } = useParams();

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (userdata && id !== userdata.id) {
    navigate("/");
  }
  return (
    <>
      <Center>
        <SimpleGrid gap={8} columns={2} paddingTop={2}>
          {userdata === undefined || userdata === null ? (
            <Spinner size='xl' borderWidth='8px' />
          ) : (
            <>
              <CardInfo
                mainContent={`Welcome, ${userdata?.name}`}
                content={`${date.toDateString()} @ ${date.toLocaleTimeString()}`}
              />
              <CardInfo
                mainContent='Balance'
                content={`£ ${userdata?.balance}`}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Account;
