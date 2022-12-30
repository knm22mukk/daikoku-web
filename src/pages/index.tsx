import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box minH='100vh' backgroundColor='theme.background'>
      <Heading as='h1'>これから始める大黒工業</Heading>
    </Box>
  );
};

export default Home;
