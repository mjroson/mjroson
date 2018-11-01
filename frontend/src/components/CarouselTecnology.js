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
    const { classes, tecnologies, slidersToShow, slidersToShowTablet, slidersToShowMobile } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: slidersToShow,
      slidesToScroll: 2,
      centerPadding: 20,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slidersToShow,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: slidersToShowTablet,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: slidersToShowMobile,
            slidesToScroll: 2
          }
        }
      ]
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
  tecnologies: PropTypes.object.isRequired
};

export default withStyles(styles)(CarouselTecnology);
