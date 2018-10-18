import React, { Component } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  heroUnit: {
    flexGrow: 1
  },
  heroContent: {
    maxWidth: 600,
    margin: '0',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  avatar: {
    margin: 'auto 0 auto auto',
    verticalAlign: 'middle'
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
  containerVA: {
    display: 'flex'
  },
  textAboutme: {
    color: "#c3c3c3"
}
});

class AboutMe extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.heroUnit}>
        <Grid container spacing={16}>
          <Grid item sm={12} md={4} className={classes.containerVA}>
            <Avatar
              alt="Matias Roson"
              src="/static/profile.jpg"
              className={classNames(classes.avatar, classes.bigAvatar)}
              />
          </Grid>
          <Grid item sm={12} md={8}>
            <div className={classes.heroContent}>
              <Typography variant="title" align="left" color="textPrimary" gutterBottom className={classes.textAboutme}>
                Full Stack Developer (Linux, Docker, Django, React)
              </Typography>
              <Typography variant="body1" align="left" color="textSecondary" paragraph className={classes.textAboutme}>
                Desarrollador apasionado y proactivo, con un interés constante y entusiasmo en el aprendizaje de nuevas tecnologías y asumir nuevos retos, siempre buscando el crecimiento personal y profesional.
                Tratando de implementar e incluir buenas prácticas en los desarrollos, y automatizar tareas con el fin de aumentar la productividad y eficiencia constantemente en mi trabajo.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} align="left">
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
          </Grid>
        </Grid>
      </div>
    );
  }
  }

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutMe);
