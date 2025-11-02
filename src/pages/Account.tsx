import CardInfo from "../components/CardInfo";
import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { api } from "../services/api";

interface IUserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}
const Account = () => {
  const [userdata, setUserData] = useState<null | IUserData>();
  const date = new Date();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  console.log(userdata);

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
