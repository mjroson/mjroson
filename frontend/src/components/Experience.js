import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import experiences from "../data/experience";

const styles = theme => ({
  box:{
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  sectionTitle:{
    marginBottom: "30px",
  }
});

class Experience extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography className={classes.sectionTitle} variant="display1" component="h1" align="left">Experiencia laboral</Typography>
        <Grid container spacing={40}>
          {experiences.map(experience => (
            <Grid item key={experience.id} xs={12} >
              <Paper className={classes.box} elevation={1}>
                <Typography variant="title" component="p">
                  {experience.title}
                </Typography>
                <p>{experience.from} - {experience.to}</p>
                <Typography component="p">
                  {experience.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>

    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
