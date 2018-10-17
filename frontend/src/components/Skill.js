import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import skills from "../data/skills";
import {tecnologies} from "../data/tecnologies";
import LinearProgress from '@material-ui/core/LinearProgress';
import CarouselTecnology from "./CarouselTecnology";

const styles = theme => ({
  sectionTitle:{
    marginBottom: "30px",
  },
  progressSkill:{
    marginBottom: "15px",
}
});

class Skill extends Component {

  state = {
    completed: 0,
    buffer: 10,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
    }
  };


  render() {
    const { classes } = this.props;

    return (
          <React.Fragment>
            <Typography className={classes.sectionTitle} variant="display1" component="h1" align="left">Habilidades</Typography>
            {skills.map((skill, index) => (
              <Grid item ks={12}  key={skill.id}>
                <Typography variant="title" component="h5">
                    {skill.title}
                  </Typography>
                  <LinearProgress className={classes.progressSkill} color={index % 2 === 0 ? "secondary": "primary"} variant="buffer" value={skill.percent} valueBuffer={100} />
              </Grid>
            ))}
            <Typography className={classes.sectionTitle} variant="display1" component="h1" align="left">Tecnologias que alguna vez use</Typography>
            <CarouselTecnology tecnologies={tecnologies} />
          </React.Fragment>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);
