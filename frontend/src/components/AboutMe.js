import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { SectionTitle } from './globals.js';

const styles = theme => ({
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  avatar: {
    margin: 'auto 0 auto auto',
    verticalAlign: 'middle'
  },
  bigAvatar: {
    width: 200,
    height: 200,
  },
  containerVA: {
    display: 'flex'
  },
  textAboutme: {
    color: "#1e1e1e"
}
});

class AboutMe extends Component {

  render() {
    const { classes, changePage } = this.props;

    return (
      <React.Fragment>
      <SectionTitle align="center">Sobre Mi</SectionTitle>
        <Grid container spacing={16} style={{'maxWidth': 1000, 'margin': 'auto'}} >
          <Grid item sm={12} md={4} className={classes.containerVA}>
            <Avatar
              alt="Matias Roson"
              src="/static/profile.jpg"
              className={classNames(classes.avatar, classes.bigAvatar)}
              />
          </Grid>
          <Grid item sm={12} md={8}>
            <Typography variant="title" align="left" className={classes.textAboutme}>
              Matias Roson
            </Typography>
              <Typography variant="headline" align="left" gutterBottom className={classes.textAboutme}>
                Full Stack Developer (Linux, Docker, Django, React)
              </Typography>
              <Typography variant="body1" align="left" color="textSecondary" paragraph className={classes.textAboutme}>
                Desarrollador de tecnologias web, apasionado y proactivo por mi trabajo, con interes contante por el aprendizaje de nuevas tecnologias, buenas practicas y eficiencia. <br/>
              Durante mi experiencia como desarrollador freelance eh desempeñado diferentes puestos en equipos de trabajo: desarrollador full stack, arquitecto, lider tecnico, etc. <br/>
                Con ganas de aprender y enseñar. Amante del software libre, incursionandome en el nuevo mundo del blockchain y la inteligencia artificial.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} align="left">
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={() => changePage('#contact')}>
                      Contactame
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" component="a" href="https://www.linkedin.com/in/matiasroson/" target="_blank">
                      Mira mi perfil en LinkedIn
                    </Button>
                  </Grid>
                </Grid>
              </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  }

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
  changePage: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(AboutMe);
