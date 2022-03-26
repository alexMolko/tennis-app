import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import carouselData from 'dan-api/images/carouselData';
import Grid from '@material-ui/core/Grid';
import { ShowcaseCard } from 'dan-components';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import styles from './widget-jss';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      className="nav-next"
      onClick={onClick}
    >
      <ArrowForward />
    </IconButton>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SampleNextArrow.defaultProps = {
  onClick: undefined,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      className="nav-prev"
      onClick={onClick}
    >
      <ArrowBack />
    </IconButton>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  onClick: undefined,
};

function CarouselWidget(props) {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ],
    cssEase: 'ease-out',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Grid className="container custom-arrow">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <Grid spacing={3} className={classes.carouselItem} key={index.toString()}>
            <Grid item md={12} xs={12}>
              <ShowcaseCard
                landscape
                title={item.title}
                rankingNumber={item.ranking}
                pointsNumber={item.points}
                action="Ver perfil"
                image={item.img}
                href={item.href}
                ranking="Ranking : "
                points="puntos"
              />
            </Grid>
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
}

CarouselWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarouselWidget);
