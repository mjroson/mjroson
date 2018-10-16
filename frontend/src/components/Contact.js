import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CustomForm from './ContactForm';
import Typography from '@material-ui/core/Typography';
import {socialNetworkListItems} from './socialNetworkList';

const styles = theme => ({
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  sectionTitle:{
    marginBottom: "30px",
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  }
});

class Contact extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={40}>
            <Grid item md={6} lg={6}>
            <Typography className={classes.sectionTitle} variant="display1" component="h1" align="left">Redes sociales</Typography>
            <List>
              {socialNetworkListItems}
            </List>
            </Grid>
            <Grid item md={6} lg={6}>
                <CustomForm/>
            </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
