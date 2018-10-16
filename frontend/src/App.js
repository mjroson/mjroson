import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Skill from './components/Skill';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from 'classnames';

import Particles from 'react-particles-js';
import {particlesConfig} from './data/particlesConfig';


const styles = theme => ({
  secondSection: {
    flexGrow: 1,
  },
  sections:{
    padding: '120px 40px 40px;',

  },
  particleBg: {
    margin: '-120px -40px -40px'
},
  impar:{
    backgroundColor: theme.palette.background.paper,
  },
  par:{
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <main id="main">
          <div className={classNames(classes.sections, classes.impar)} id="aboutme" style={{background: "tomato"}}>
              <Particles id="particleBg" params={particlesConfig} className={classes.particleBg}/>
              <AboutMe/>
            </div>
            <div className={classNames(classes.sections, classes.par)} id="experience">
              <Grid container spacing={24} >
                <Grid item sm={12} md={6}>
                  <Experience/>
                </Grid>
                <Grid item sm={12} md={6}>
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
            <div className={classNames(classes.sections, classes.impar)} id="contact">
              <Contact/>
            </div>
          </main>
          <Footer className={classNames(classes.impar)}/>
        </React.Fragment>
      );
    }
  }

  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(App);
