import { createTheme } from '@shopify/restyle';

const palette = {
  purplePrimary: '#5A31F4',
  black: '#0B0B0B',
  white: '#FFFFFF',
  background: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    background: palette.background,
    card: palette.white,
    primary: palette.purplePrimary,
    text: palette.black,
    white: palette.white,
  },

  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },

  textVariants: {
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'text',
    },
    body: {
      fontSize: 16,
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
export default theme;