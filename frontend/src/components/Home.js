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
    flexGrow: 1,
    display: 'table-cell',
    verticalAlign: 'middle'
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
},
homeText: {
  textAlign: "center",
  color: "#fff",
  width: "100%"
}
});

class AboutMe extends Component {

  render() {
    const { classes, changePage } = this.props;

    return (
      <div className={classes.heroUnit}>
        <Grid container spacing={16} style={{'maxWidth': 800, 'margin': 'auto', border: "4px solid white", borderRadius: "6px", backgroundColor: "#1513138f", padding: "40px"}} >
              <Typography variant="display3" className={classes.homeText}>
                I AM MATIAS ROSON
              </Typography>
              <Typography variant="title" className={classes.homeText}>
                Full Stack Developer (Linux, Docker, Django, React)
              </Typography>
        </Grid>
        </div>
    );
  }
  }

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(AboutMe);
