import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SectionTitle } from './globals.js';

const url = "https://github.us19.list-manage.com/subscribe/post?u=0e98caecc0d06149b32e97f46&amp;id=953c9d9cde";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  box: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class ContactForm extends Component {
  state = {
    fullname: '',
    email: '',
    message: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submit = () => {
    this.props.onValidated({
      EMAIL: this.state.email,
      FULLNAME: this.state.fullname,
      MESSAGE: this.state.message
    });
  };


  render() {
    const { classes, status } = this.props;
    /*const buttonClassname = classNames({
      [classes.buttonSuccess]: status === "success",
    });*/

    const form = (
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
        <Button variant="outlined"  color="primary" className={classes.button} onClick={this.submit}>
          Enviar
        </Button>
        {status === "sending" && <CircularProgress size={24} className={classes.buttonProgress} />}
      </form>
);

    return (
      <Paper className={classes.box}>
        <SectionTitle align="left">Contactame</SectionTitle>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <Typography variant="title" color="error" component="h3" align="center">Hubo un error, vuelva a intentar mas tarde o intente por otro medio.</Typography>
        )}
        {status === "success" && (
          <Typography variant="title" color="secondary" component="h3" align="center">Gracias por contactarte {this.state.name} , te respondere a la brevedad.</Typography>
        )}
        {status !== 'success' && form}
      </Paper>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.func,
  message: PropTypes.func,
  onValidated: PropTypes.func
};

const MCContactForm =  withStyles(styles)(ContactForm);

//export default withStyles(styles)(ContactForm);


const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <MCContactForm status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
        />
    )}
    />
)


export default CustomForm;
