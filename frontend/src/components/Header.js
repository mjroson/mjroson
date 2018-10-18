import React, { Component } from 'react';

import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {socialNetworkListItems} from './socialNetworkList';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const sections = [
  {tag: "#aboutme", name: "Sobre mi"},
  {tag: "#experience", name: "Experiencia"},
  {tag: "#projects", name: "Trabajos"},
  {tag: "#education", name: "Educacion"},
  {tag: "#contact", name: "Contacto"},


]

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentPage: window.location.hash ? window.location.hash : sections[0].tag,
        mobileOpen: false,
    };
  }

  changePage = (value) => {
    this.setState({currentPage: value, mobileOpen: false });
    window.location.hash = value;
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {sections.map(section => (
            <ListItem button key={section.tag}
                      onClick={() => this.changePage(section.tag)}
                      disabled={this.state.currentPage === section.tag}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={section.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>{socialNetworkListItems}</List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> <MenuIcon /></IconButton>*/}
            <Typography variant="title" color="inherit" className={classes.grow}>
              <Chip
          avatar={<Avatar alt="Matias Roson" src="/static/profile.jpg" />}
          label="Matias Roson"
          className={classes.chip}
          variant="outlined"
        />
            </Typography>

            {sections.map(section => (
              <Button color="inherit"
                key={section.tag}
                className={classes.menuButton}
                disabled={this.state.currentPage === section.tag}
                onClick={() => this.changePage(section.tag)}>{section.name}</Button>
            ))}
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor="right"
          open={this.state.mobileOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
