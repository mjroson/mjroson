import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

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
    this.state = { currentPage: window.location.hash ? window.location.hash : sections[0].tag };
  }

  changePage = (value) => {
    this.setState({currentPage: value});
    window.location.hash = value;
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> <MenuIcon /></IconButton> */}
            <Typography variant="title" color="inherit" className={classes.grow}>
              Matias Roson
            </Typography>
            {sections.map(section => (
              <Button color="inherit"
                disabled={this.state.currentPage == section.tag}
                onClick={() => this.changePage(section.tag)}>{section.name}</Button>
            ))}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
