import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AccountInfo = () => {
  return (
    <>
      <Text fontSize='3xl' color='white' fontWeight='bold'>
        Account information
      </Text>
      <Link to='/account/1'>
        <Text fontSize='xl'>Account Page</Text>
      </Link>
    </>
  );
};

export default AccountInfo;
