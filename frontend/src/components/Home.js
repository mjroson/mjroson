import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    flexGrow: 1,
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  textContent:{
    maxWidth: 800,
    margin: 'auto',
    border: "4px solid " + theme.palette.text.secondary,
    borderRadius: "6px",
    backgroundColor: "#1513138f",
    padding: "40px"
  },
homeText: {
  textAlign: "center",
  color: "#fff",
  width: "100%"
}
});

class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid container spacing={16} className={classes.textContent} >
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
