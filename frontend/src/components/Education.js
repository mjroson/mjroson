import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import educations from "../data/education";
import {formatDate} from '../utils';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SectionTitle } from './globals.js';

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
    maxWidth: '90%',
    textAlign: 'center',
    maxHeight: '90%',
  },
});

class Education extends Component {

  getDate = (education) => {
    return `${ formatDate(education.from) } - ${ formatDate(education.to) }`;
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <SectionTitle align="center">Educacion</SectionTitle>
        <Grid container spacing={40}>
          <VerticalTimeline >
            {educations.map(education => (
              <VerticalTimelineElement
                className="vertical-timeline-element-education"
                date={this.getDate(education)}
                key={education.id}
                iconStyle={{ contain: "content", verticalAlign: "middle", display: "flex", background: "#fff", color: "#fff"  }}
                icon={<img className={classes.img} alt={education.title} src={education.image} />}
                >
                <h3 className="vertical-timeline-element-title">{education.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{education.intitution}</h4>
                <p>
                  {education.description}
                </p>
                {education.ref !== "" && (
                  <Grid item>
                    <a href={education.ref} target="_blank">Referencia</a>
                  </Grid>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Grid>
      </React.Fragment>
    );
  }
}

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);
