import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import Particles from 'react-particles-js';
import {particlesConfigSky} from '../data/particlesConfig';
import Slider from "react-slick";
import CarouselTecnology from "./CarouselTecnology";
import Paper from '@material-ui/core/Paper';
import { SectionTitle } from './globals.js';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  carousel: {
    maxHeight: '700px'
  },
  dialogProjectContent: {
    backgroundColor: "#f27537",
    position: 'relative',
    padding: '40px 20px'
  },
  projectParticleBg:{
    margin: "-40px -20px",
  },
  sliderContent: {
    textAlign: "center"
},
sliderImage: {
    display: 'inherit !important'
},
description:{
  ...theme.mixins.gutters(),
   paddingTop: theme.spacing.unit * 2,
   paddingBottom: theme.spacing.unit * 2,
},
fixedWidthMobile: {
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  }
},
projectTitle:{
  textAlign: 'left !important',
  fontSize: '1.3em !important',
  flex: 1
}
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ProjectDetailDialog extends React.Component {

  handleClose = () => {
    this.props.closeDialog();
  };

  render() {
    const { classes, open, project } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={this.handleClose}
        id="dialogproject"
        scroll="paper"

        TransitionComponent={Transition}
        >
        <AppBar className={classes.appBar}>
          <Toolbar>
            {project != null && (
              <SectionTitle className={classes.projectTitle} style={{marginBottom: '0px'}}>
                {project.title}
              </SectionTitle>
            )}
            <Button color="inherit" onClick={this.handleClose}>
              Cerrar
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogProjectContent}>
          <Particles id="particleBg" className={classes.projectParticleBg} params={particlesConfigSky}/>
          {project !== null && (
            <Grid container spacing={40} >
              <Grid item sm={12} md={4} className={classes.fixedWidthMobile}>
              { project.images.length > 0 && (
                <Slider {...settings}>
                {project.images.map((image, index) => (
                  <div className={classes.sliderContent} key={index}>
                  <img src={image.img} alt={image.legend} className={classes.sliderImage}/>
                  <h3>{image.legend}</h3>
                  </div>
                ))}
                </Slider>
              )}
              </Grid>
              <Grid item sm={12} md={8} className={classes.fixedWidthMobile}>
              <Grid container spacing={40}>
                <Grid item sm={12} className={classes.fixedWidthMobile}>
                <Typography variant="body1" component="p" color="inherit" className={classes.flex}>
                  {project.short_description}
                </Typography>
                </Grid>
                <Grid item sm={12} className={classes.fixedWidthMobile}>
                <Typography variant="body2" component="p" color="inherit" className={classes.flex}>
                {project.from} - {project.to}
                </Typography>
                </Grid>
                <Grid item sm={12} className={classes.fixedWidthMobile}>
                <Paper className={classes.description} elevation={1}>
                  <Typography variant="subheading" component="h3">
                    Descripcion
                  </Typography>
                  <Typography component="p">
                    {project.description}
                  </Typography>
                </Paper>
                </Grid>
                <Grid item sm={12} className={classes.fixedWidthMobile}>
                <CarouselTecnology tecnologies={project.tecnologies} slidersToShow={8} slidersToShowTablet={3} slidersToShowMobile={2}/>
                </Grid>
              </Grid>
              </Grid>
            </Grid>
          )}
        </DialogContent>
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
