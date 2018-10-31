import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import skills from "../data/skills";
import {tecnologies} from "../data/tecnologies";
import LinearProgress from '@material-ui/core/LinearProgress';
import CarouselTecnology from "./CarouselTecnology";
import { SectionTitle } from './globals.js';

const styles = theme => ({
  progressSkill:{
    marginBottom: "15px",
  },
  subTitle:{
    color: "#c3c3c3",
    textTransform: "uppercase",
    margin: "30px 0px 20px"
  }
});

class Skill extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <SectionTitle align="left">Habilidades</SectionTitle>
        <Grid container spacing={40}>
          {skills.map((skill, index) => (
            <Grid item xs={12} key={skill.id}>
              <Typography variant="title">
                {skill.title}
              </Typography>
              <LinearProgress className={classes.progressSkill} color={index % 2 === 0 ? "primary": "secondary"} variant="buffer" value={skill.percent} valueBuffer={100} />
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.subTitle}  variant="headline" align="left">Tecnologias que alguna vez use</Typography>
            <CarouselTecnology tecnologies={tecnologies} slidersToShow={6} slidersToShowTablet={3} slidersToShowMobile={2} />
      </React.Fragment>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);
