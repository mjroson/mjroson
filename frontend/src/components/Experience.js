import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import experiences from "../data/experience";

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Experience extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            <h2>Experiencia laboral: </h2>
            {experiences.map(experience => (
              <Grid item key={experience.id} sm={12} md={10} lg={8}>
                <Paper className={classes.root} elevation={1}>
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
        </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
