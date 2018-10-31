import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import CustomForm from './ContactForm';
import Typography from '@material-ui/core/Typography';
import { SectionTitle, SocialNetworkListItems } from './globals.js';

const styles = theme => ({
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  }
});

class Contact extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={40}>
            <Grid item md={6} lg={6}>
            <SectionTitle align="left">Redes sociales</SectionTitle>
            <List>
              {SocialNetworkListItems}
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
