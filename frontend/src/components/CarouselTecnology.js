import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import CardMedia from '@material-ui/core/CardMedia';
const styles = theme => ({
  sectionTitle:{
    marginBottom: "30px",
  },
  tecnologyCard:{
    maxWidth: "100px",
    margin: "0px 5px"
},
media: {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: 'cover',
},
tecnologyImage: {
  width: "100%"
},
tecnologyName:{
  textAlign: "center"
}
});

class CarouselTecnology extends Component {

  render() {
    const { classes, tecnologies } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
          {Object.keys(tecnologies).map((key, index) => (
            <Card className={classes.tecnologyCard}>
              <img src={tecnologies[`${key}`].image} className={classes.tecnologyImage} alt={tecnologies[`${key}`].name}/>
              {/*<CardMedia
                className={classes.media}
                image={tecnologies[`${key}`].image}
                title={tecnologies[`${key}`].name}
              />*/}
              <p className={classes.tecnologyName}>{tecnologies[`${key}`].name}</p>
            </Card>
          ))}
      </Slider>
    );
  }
}

CarouselTecnology.propTypes = {
  classes: PropTypes.object.isRequired,
  tecnologies: PropTypes.array.isRequired
};

export default withStyles(styles)(CarouselTecnology);
