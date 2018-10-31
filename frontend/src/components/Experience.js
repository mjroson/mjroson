import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import experiences from "../data/experience";
import Divider from '@material-ui/core/Divider';
import { SectionTitle } from './globals.js';

const styles = theme => ({
  box:{
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  }
});

class Experience extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <SectionTitle className={classes.sectionTitle} align="left">Experiencia laboral</SectionTitle>
        <Grid container spacing={40}>
          {experiences.map(experience => (
            <Grid item xs={12} key={experience.id}>
                <Typography variant="title" component="p">
                  {experience.title}
                </Typography>
                <p>{experience.from} - {experience.to}</p>
                <Typography component="p">
                  {experience.description}
                </Typography>
                <Divider style={{marginTop: '30px'}}/>
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
