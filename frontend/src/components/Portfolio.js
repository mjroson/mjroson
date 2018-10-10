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

import projects from '../data/projects';

const styles = theme => ({
  layout: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper,

  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,

    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  card: {
     display: 'flex',
   },
   details: {
     display: 'flex',
     flexDirection: 'column',
   },
   content: {
     flex: '1 0 auto',
   },
   cover: {
     width: 151,
   },
});

class Portfolio extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.layout)}>

          <Grid container spacing={40} className={classNames(classes.cardGrid)}>
            <h2>Projectos en los que trabaje de forma freelance</h2>
            {projects.map(project => (
              <Grid item key={project.id} sm={12} md={12} lg={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cover}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    title={project.title} />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="title" variant="h3">
                        {project.title}
                      </Typography>
                      <p>{project.from} - {project.to}</p>
                      <Typography variant="body" color="textSecondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </div>

                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);
