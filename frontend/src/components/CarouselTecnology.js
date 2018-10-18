import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from "react-slick";


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
  textAlign: "center",
  fontSize: "10px",
  minHeight: "22px",
}
});

class CarouselTecnology extends Component {

  render() {
    const { classes, tecnologies } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerPadding: 20,
      centerMode: true,
      //lazyLoad: 'ondemand'
    };

    return (
      <Slider {...settings}>
          {Object.keys(tecnologies).map((key, index) => (
            <Card className={classes.tecnologyCard} key={key}>
              <img src={tecnologies[`${key}`].image} className={classes.tecnologyImage} alt={tecnologies[`${key}`].name}/>
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
