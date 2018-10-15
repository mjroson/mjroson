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
import ContactForm from './ContactForm';

const styles = theme => ({
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  sectionTitle:{
    marginBottom: "30px",
  }
});

class Contact extends Component {

  render() {
    //const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={40}>
            <Grid item md={6} lg={6}>
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" secondary="https://www.linkedin.com/in/matiasroson/"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Github" secondary="https://github.com/mjroson"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary="Bitbucket" secondary="https://bitbucket.org/mjroson/" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary="Email" secondary="matiroson@gmail.com" />
              </ListItem>
            </List>
            </Grid>
            <Grid item md={6} lg={6}>
                <ContactForm/>
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
