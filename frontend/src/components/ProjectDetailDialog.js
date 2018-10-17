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
import DialogContent from '@material-ui/core/DialogContent';
import Particles from 'react-particles-js';
import {particlesConfigSky} from '../data/particlesConfig';
import Slider from "react-slick";

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  carousel: {
    maxHeight: '700px'
  },
  dialogProjectContent: {
    backgroundColor: "#d45800",
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
              <Typography variant="title" component="h5" color="inherit" className={classes.flex}>
                {project.title}
              </Typography>
            )}
            <Button color="inherit" onClick={this.handleClose}>
              Cerrar
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogProjectContent}>
          <Particles id="particleBg" className={classes.projectParticleBg} params={particlesConfigSky}/>
          {project != null && (
            <Grid container spacing={40}>
              <Grid item xs={4}>
                <Slider {...settings}>
                    {project.images.map((image, index) => (
                      <div className={classes.sliderContent}>
                        <img src={image.img} alt={image.legend} className={classes.sliderImage}/>
                        <h3>{image.legend}</h3>
                      </div>
                    ))}
                </Slider>
                {/* <Carousel autoPlay width="auto" className={classes.carousel} showArrows={true} showThumbs={false} infiniteLoop={true}>
                  {project.images.map((image, index) => (
                    <div key={index}>
                      <img src={image.img} alt={image.legend} width="auto"/>
                      <p className="legend">{image.legend}</p>
                    </div>
                  ))}
                </Carousel>*/}
              </Grid>
              <Grid item xs={8}>
                <Typography variant="display1" component="p" color="inherit" className={classes.flex}>
                  {project.from} - {project.to}
                </Typography>
                <Typography variant="body1" component="p" color="inherit" className={classes.flex}>
                  {project.description}
                </Typography>
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
