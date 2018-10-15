  import React, { Component } from 'react';

  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import classNames from 'classnames';
  import Grid from '@material-ui/core/Grid';
  import Typography from '@material-ui/core/Typography';

  import Paper from '@material-ui/core/Paper';
  import ButtonBase from '@material-ui/core/ButtonBase';
  import ProjectDetailDialog from './ProjectDetailDialog';

  import projects from '../data/projects';

  const styles = theme => ({
    box: {
      flexGrow: 1,
      padding: theme.spacing.unit * 2,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
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
              <Grid item xs={12} sm={6} lg={6} key={project.id}>
                <Paper className={classes.box}>
                  <Grid container spacing={16}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt={project.title} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                          <Typography gutterBottom variant="title">
                            {project.title}
                          </Typography>
                          <Typography gutterBottom>{project.title}</Typography>
                          <Typography color="textSecondary">{project.from} - {project.to}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography style={{ cursor: 'pointer' }} onClick={() => this.openProjectDetail(project)}>Detalle</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
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
