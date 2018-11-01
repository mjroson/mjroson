import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import { goToTop } from 'react-scrollable-anchor'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.text.primary,
    padding: theme.spacing.unit * 6,
    position: 'relative'
  },
  topButton:{
    position: 'absolute',
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
  }
});


class Footer extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  onTop = () => {
    this.props.changePage('')
    goToTop();
  }

  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer} id="footer">
        <Typography variant="title" align="center" color="textSecondary" component="p">
          @MatiasRoson 2018
        </Typography>
        <Button variant="outlined" color="secondary" className={classes.topButton} onClick={() => this.onTop()}>
             <UpIcon/>
           </Button>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired
};

export default withStyles(styles)(Footer);
