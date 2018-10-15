import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  sectionTitle:{
    marginBottom: "30px",
  },
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
});

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.box}>
        <Typography className={classes.sectionTitle} variant="title" component="h1" align="center">Contactame</Typography>
        <form className={classes.container} noValidate>
          <TextField
            id="contact-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
autoComplete="fullname"
            fullWidth={true}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            />
            <TextField
              id="contact-email"
              label="Phone"
              className={classes.textField}
              value={this.state.phone}
              name="phone"
              autoComplete="phone"
              fullWidth={true}
              onChange={this.handleChange('phone')}
              margin="normal"
              variant="outlined"
              />
          <TextField
            id="contact-email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            type="email"
            name="email"
            autoComplete="email"
            fullWidth={true}
            onChange={this.handleChange('email')}
            margin="normal"
            variant="outlined"
            />
            <TextField
              id="contact-message"
              label="Message"
              className={classes.textField}
              value={this.state.message}
              rows={5}
              multiline={true}
              fullWidth={true}
              name="message"
              onChange={this.handleChange('message')}
              margin="normal"
              variant="outlined"
              />
        </form>
      </Paper>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
