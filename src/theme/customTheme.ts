import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  colors: {
    theme: {
      header: '#3D3D3D',
      main: '#16a34a',
      sub: '#f97316',
      background: '#f3f4f6',
    },
    text: {
      headline: '#111827',
      body: '#000000',
      white: '#ffffff',
    },
  },
  components: {
    Radio: {
      sizes: {
        lg: {
          control: {
            w: '1.875rem',
            h: '1.875rem',
          },
          label: { fontSize: '1.5rem', fontWeight: '700' },
          icon: { fontSize: '1rem' },
        },
      },
    },
  },
});
