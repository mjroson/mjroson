import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import educations from "../data/education";
import ButtonBase from '@material-ui/core/ButtonBase';
import {formatDate} from '../utils';

const styles = theme => ({
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  sectionTitle:{
    marginBottom: "30px",
    color: "#c3c3c3",
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
            <Grid item xs={12} sm={6} lg={6} key={education.id}>
              <Paper className={classes.box}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt={education.title} src={education.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography gutterBottom variant="title">
                          {education.title}
                        </Typography>
                        <Typography gutterBottom>{education.description}</Typography>
                        <Typography color="textSecondary">{ formatDate(education.from) } - { formatDate(education.to) }</Typography>
                      </Grid>
                      {education.ref !== "" && (
                        <Grid item>
                          <a href={education.ref} target="_blank">Referencia</a>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
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
