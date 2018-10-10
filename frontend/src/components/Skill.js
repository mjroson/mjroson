import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import skills from "../data/skills";

import LinearProgress from '@material-ui/core/LinearProgress';

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
    flexGrow: 1,
    width: 100
  },
});

class Skill extends Component {

  state = {
    completed: 0,
    buffer: 10,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
    }
  };


  render() {
    const { classes } = this.props;
    const { completed, buffer } = this.state;

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            <h2>Skills:</h2>
            {skills.map(skill => (
              <div className={classes.root}>
                <Typography variant="body" component="h5">
                    {skill.title}
                  </Typography>
                  <LinearProgress variant="buffer" value={skill.percent} valueBuffer={100} />
              </div>

            ))}

          </Grid>
        </div>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);
