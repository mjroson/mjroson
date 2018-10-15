import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  carousel: {
    maxHeight: '700px'
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ProjectDetailDialog extends React.Component {

  handleClose = () => {
    this.props.closeDialog();
  };

  render() {
    const { classes, open, project } = this.props;
    return (
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              {project != null && (
              <Typography variant="title" component="h5" color="inherit" className={classes.flex}>
                {project.title}
              </Typography>
              )}
              <Button color="inherit" onClick={this.handleClose}>
                Cerrar
              </Button>
            </Toolbar>
          </AppBar>
          {project != null && (
              <Grid container spacing={40}>
                  <Grid item xs={6}>
                  <Carousel autoPlay className={classes.carousel}>
                    {project.images.map((image, index) => (
                        <div key={index}>
                            <img src={image.img} alt={image.legend}/>
                            <p className="legend">{image.legend}</p>
                        </div>
                    ))}
                  </Carousel>
                  </Grid>
                  <Grid item xs={6}>
                  <Typography variant="display1" component="p" color="inherit" className={classes.flex}>
                    {project.from} - {project.to}
                  </Typography>
                    <Typography variant="body1" component="p" color="inherit" className={classes.flex}>
                      {project.description}
                    </Typography>
                  </Grid>
              </Grid>
            )}
        </Dialog>
    );
  }
}

ProjectDetailDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  project: PropTypes.object,
  closeDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(ProjectDetailDialog);
