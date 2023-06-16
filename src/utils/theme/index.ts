import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9900',
      contrastText: '#fff'
    },
    secondary: {
      main: '#2d3c4c',
      contrastText: '#ff9900'
    },
    tertiary: {
      main: '#161d25',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Golos Text'
  }
});

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}

export default theme;
