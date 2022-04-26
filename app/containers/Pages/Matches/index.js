/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { HeadlineCard } from 'dan-components';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ScrollTabs from '../../UiElements/demos/Tabs/ScrollTabs';
import styles from './blogStyle-jss';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

function Matches(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.root}>
        <section id="headline">
          <HeadlineCard
            title="Torneo de Verano 2022"
            desc="Partidos emocionantes"
            thumbnail="/images/banners/banner5.jpg"
          />
        </section>
        <Divider className={classes.divider} />
        <Typography variant="h3">Calendario</Typography>
        <ScrollTabs />
      </div>
    </Fragment>
  );
}

Matches.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Matches);
