import { createMuiTheme } from '@material-ui/core/styles';

const brownColor = {
  light: '#F1DBBF',
  medium: '#5E4F3A',
  dark: '#382205',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: brownColor.dark,
      text: 'red',
      contrastText: brownColor.light,
    },
    secondary: {
      main: brownColor.medium,
      contrastText: brownColor.light,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Mali',
      'cursive',
    ].join(','),
  },
});

export default theme;
