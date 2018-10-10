import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
});

function AboutMe(props) {

    const { classes, theme } = props;

    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
            <Avatar
              align="center"
          alt="Matias Roson"
          src="/static/profile.jpg"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
          <Typography variant="title" align="center" color="textPrimary" gutterBottom>
            Full Stack Developer (Linux, Docker, Django, React)
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Desarrollador apasionado y proactivo, con un interés constante y entusiasmo en el aprendizaje de nuevas tecnologías y asumir nuevos retos, siempre buscando el crecimiento personal y profesional.
Tratando de implementar e incluir buenas prácticas en los desarrollos, y automatizar tareas con el fin de aumentar la productividad y eficiencia constantemente en mi trabajo.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Contactame
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Mira mi perfil en LinkedIn
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutMe);
