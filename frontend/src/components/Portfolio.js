import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProjectDetailDialog from './ProjectDetailDialog';
import Button from '@material-ui/core/Button';
import { formatDate } from '../utils';
import CardHeader from '@material-ui/core/CardHeader';
import projects from '../data/projects';

const styles = theme => ({
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
  sectionTitle:{
    marginBottom: "30px",
  }
});

class Portfolio extends Component {

  state = {
    value: 0,
    openProject: false,
    currentProject: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  closeProjectDetail = () => {
    this.setState({openProject: false });
  }

  openProjectDetail = (project) => {
    this.setState({openProject: true, currentProject: project })
  }

  render() {
    const { classes } = this.props;
    const { openProject, currentProject } = this.state;

    return (
      <React.Fragment>
        <ProjectDetailDialog open={openProject} project={currentProject} closeDialog={this.closeProjectDetail} />
        <Typography className={classes.sectionTitle} variant="display1" component="h1" align="center">Projectos en los que trabaje de forma freelance</Typography>
        <Grid container spacing={40} className={classNames(classes.cardGrid)}>
          {projects.map(project => (
            <Grid item xs={12} sm={4} lg={3} key={project.id} >
              <Card className={classes.card} style={{ cursor: 'pointer' }} onClick={() => this.openProjectDetail(project)}>
                <CardActionArea>
                  <CardHeader style={{background: '#c3c3c3'}}
                              disableTypography={true}
                              title={<Typography variant="body2">{project.title}</Typography>} 
                              align="center"/>
                  {/* <CardContent style={{background: '#c3c3c3'}}>
                    <Typography gutterBottom variant="body2" component="p" align="center">
                      {project.title}
                    </Typography>
                  </CardContent>*/}
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="140"
                    image="/static/portfolio/compraloahi/mockup-mapa.jpg"
                    title={project.title + "- image"}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="p">
                      { formatDate(project.from) } - { formatDate(project.to) }
                    </Typography>
                    <Typography component="p">
                      {project.short_description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);
