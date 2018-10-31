import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {sections} from './components/Header';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Skill from './components/Skill';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyled } from '@material-ui/core/styles';
import classNames from 'classnames';

import Particles from 'react-particles-js';
import {particlesConfig} from './data/particlesConfig';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';


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
      main: '#f27537',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

// const Styled = createStyled(theme => ({
//   sectionTitle:{
//     ...theme.typography.button,
//     marginBottom: "30px",
//     fontSize: "2em",
//     color: "#c3c3c3",
//   }
// }));


const generateClassName = createGenerateClassName({
  sectionTitle:{
    marginBottom: "30px",
    fontSize: "2em",
    color: "#c3c3c3",
  }
});
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point',
});

const styles = theme => ({
  secondSection: {
    flexGrow: 1,
  },
  sections:{
    padding: '60px 40px;',
    minHeight: '700px'

  },
  particleBg: {
    margin: '-120px -40px -40px'
},
  impar:{
    backgroundColor: theme.palette.background.paper,
  },
  par:{
  },
  fixedWidthMobile: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    }
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentPage: window.location.hash ? window.location.hash : sections[0].tag
    };
    /*window.addEventListener('scroll', this.handleScroll);
    this.sections = sections;
    setTimeout(function(){
      sections.forEach((section) => {
        section['position'] = window.document.getElementById(section.tag.split('#')[1]).offsetTop
      });
      this.handleScroll();
    }.bind(this), 3000)*/
  }

  changePage = (value) => {
    this.setState({currentPage: value, mobileOpen: false });
    window.location.hash = value;
  };

  /*handleScroll = () => {
        if((section.position -250) > document.documentElement.scrollTop){
          this.changePage(i > 0 ? sections[i - 1].tag : sections[0].tag);
          throw {};
        }
    });
  }*/

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header changePage={this.changePage} currentPage={this.state.currentPage}/>
        <main id="main">
          <div className={classNames(classes.sections, classes.impar)} id="home">
            <Particles id="particleBg" params={particlesConfig} className={classes.particleBg}/>
            <Home />
          </div>
          <div className={classNames(classes.sections, classes.impar)} id="aboutme">
            <AboutMe changePage={this.changePage}/>
          </div>
          <div className={classNames(classes.sections, classes.par)} id="experience">
            <Grid container spacing={24} >
              <Grid item sm={12} md={6}>
                <Experience/>
              </Grid>
              <Grid item sm={12} md={6}  className={classes.fixedWidthMobile}>
                <Skill/>
              </Grid>
            </Grid>
          </div>
          <div className={classNames(classes.sections, classes.impar)} id="projects">
            <Portfolio/>
          </div>
          <div className={classNames(classes.sections, classes.par)} id="education">
            <Education/>
          </div>
          <div className={classNames(classes.sections, classes.impar)} id="contact" style={{'minHeight': 700}}>
            <Contact/>
          </div>
        </main>
        <Footer />
      </MuiThemeProvider>
      );
    }
  }

  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(App);
