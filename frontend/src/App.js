import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Skill from './components/Skill';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <main>
          <AboutMe/>
          <Skill/>
          <Experience/>
          <Portfolio/>
          <Education/>

        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
