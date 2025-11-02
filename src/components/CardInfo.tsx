import { Box, Heading, Text } from "@chakra-ui/react";
interface ICardInfo {
  mainContent: string;
  content: string;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <>
      <Box
        bg='white'
        width={400}
        minHeight='120px'
        p={8}
        borderRadius='25px'
        textAlign='center'
      >
        <Heading size='2xl' fontWeight='bold' color='black' pb={2}>
          {mainContent}
        </Heading>
        <Text fontSize='xl' color='slategrey' p={2}>
          {content}
        </Text>
      </Box>
    </>
  );
};

export default CardInfo;
