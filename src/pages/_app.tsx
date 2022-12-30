import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { customTheme } from '@/theme/customTheme';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
