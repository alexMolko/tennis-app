/* eslint-disable linebreak-style */
import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Type from 'dan-styles/Typography.scss';
import Slider from 'react-animated-slider';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';
import imgApi from 'dan-api/images/photos';

const styles = theme => ({
  tag: {
    background: fade(theme.palette.primary.light, 0.8),
    color: theme.palette.primary.dark,
    position: 'absolute',
    right: 10,
    top: 10,
    padding: theme.spacing(1),
    borderRadius: theme.rounded.big,
    fontSize: 11,
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: theme.shadows[3]
  },
  title: {
    color: theme.palette.common.white
  }
});

const content = [
  {
    title: 'Torneo de Verano "B" 2022',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    button: 'Detalles',
    image: '/images/banners/banner_home.jpg',
    label: 'Clase B',
    tag: 'Nuevo',
    to: '',
    userProfile: imgApi[54],
    type: 'article',
  },
  {
    title: 'Torneo de Verano "C" 2022',
    description:
    'Cras mattis consectetur purus sit amet fermentum.',
    button: 'Detalles',
    image: '/images/banners/banner_home2.jpg',
    label: 'Clase C ',
    tag: 'Nuevo',
    to: '',
    userProfile: imgApi[53],
    type: 'video'
  }
];

function SliderWidget(props) {
  const { classes } = props;
  return (
    <div>
      <Slider className="slider-wrapper short">
        {content.map((item, index) => (
          <div
            key={index.toString()}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <span className={classes.tag}>{item.tag}</span>
            <div className="inner">
              <Typography variant="subtitle1" component="h3" className={classNames(classes.title, Type.light)} gutterBottom>{item.title}</Typography>
              <Button variant="contained" color="primary">
                {item.type === 'video' && <Icon>play_arrow</Icon>}
                {item.button}
              </Button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                {item.label}
                &nbsp;
                <strong>
                  {item.to}
                </strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}

SliderWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderWidget);
