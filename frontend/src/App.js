import React, { Component } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from './components/Landing';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { configureAnchors } from 'react-scrollable-anchor'


configureAnchors({offset: -90, scrollDuration: 200})


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#314c82',
      main: '#273c67',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#ec7d46',
      main: '#e9692a',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    text:{
      primary: "#1e1e1e",
      secondary: "#e0e0e0"
    }
    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Landing />
      </MuiThemeProvider>
      );
    }
  }

  export default App;
