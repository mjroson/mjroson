import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import educations from "../data/education";
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  sectionTitle:{
    marginBottom: "30px",
  }
});

class Education extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography className={classes.sectionTitle} variant="display1" component="h1" align="center">Educacion</Typography>
        <Grid container spacing={40}>
          {educations.map(education => (
            <Grid item key={education.id} sm={12} md={6} lg={6}>
              <Paper className={classes.box} elevation={1}>
                <Avatar align="center" alt={education.title} src={education.image}/>
                <Typography variant="title" component="h3">
                  {education.title}
                </Typography>
                <p>{education.from} - {education.to}</p>
                <Typography component="p">
                  {education.description}
                  {education.ref &&
                    <a href={education.ref} >Referencia</a>
                  }
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);
