import React, { Component } from 'react';
import Header from './Header';
import {sections} from './Header';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AboutMe from './AboutMe';
import Home from './Home';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skill from './Skill';
import Particles from 'react-particles-js';
import {particlesConfig} from '../data/particlesConfig';
import ScrollableAnchor from 'react-scrollable-anchor'

const styles = theme => ({
  sections:{
    padding: '80px 40px;',
    minHeight: '800px',
    flexDirection: 'row',
    transition: "all .9s ease-in-out"
  },
  particleBg: {
    margin: '-120px -40px -40px'
  },
  home: {
    backgroundColor: theme.palette.text.primary,
    position: 'relative',
    display: 'table',
    width: '100%'
  },
  aboutme: {
    position: 'relative',
    display: 'table',
    width: '100%',
    backgroundColor: theme.palette.secondary.main
  },
  experience:{
    backgroundColor: "#db2c4c"
  },
  projects:{
    backgroundColor: theme.palette.primary.main
  },
  education: {
    backgroundColor:  "#a3a31e"
  },
  contact: {
    backgroundColor: theme.palette.secondary.main
  },
  fixedWidthMobile: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    }
  }
});


/**
* Landing
*/
class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentPage: window.location.hash ? window.location.hash : sections[0].tag
    };
    window.addEventListener("hashchange", this.hashChange, false);
  }

  hashChange = (value) => {
      this.setState({currentPage: "#" + value.newURL.split("#")[1]})
  };

  changePage = (value) => {
    window.location.hash = value;
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header changePage={this.changePage} currentPage={this.state.currentPage}/>
        <main id="main">
          <div className={classNames(classes.sections, classes.home)} id="home">
            <Particles id="particleBg" params={particlesConfig} className={classes.particleBg}/>
            <Home />
          </div>
          <ScrollableAnchor id={'aboutme'}>
            <div className={classNames(classes.sections, classes.aboutme)}>
              <AboutMe changePage={this.changePage}/>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'experience'}>
            <div className={classNames(classes.sections, classes.experience)}>
              <Grid container spacing={24} >
                <Grid item sm={12} md={6}>
                  <Experience/>
                </Grid>
                <Grid item sm={12} md={6}  className={classes.fixedWidthMobile}>
                  <Skill/>
                </Grid>
              </Grid>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'projects'}>
            <div className={classNames(classes.sections, classes.projects)}>
              <Portfolio/>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'education'}>
            <div className={classNames(classes.sections, classes.education)}>
              <Education/>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}>
            <div className={classNames(classes.sections, classes.contact)} style={{'minHeight': 700}}>
              <Contact/>
            </div>
          </ScrollableAnchor>
        </main>
        <Footer changePage={this.changePage} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Landing);
