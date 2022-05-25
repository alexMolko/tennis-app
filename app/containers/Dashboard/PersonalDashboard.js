/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { useSelector, useDispatch } from 'react-redux';
import {
  SliderWidget,
  PapperBlock,
  ContactWidget,
  NewsWidget,
  CarouselWidget
} from 'dan-components';
import { fetchAction } from './actions/playerActions';
import styles from './dashboard-jss';


function PersonalDashboard(props) {
  const title = brand.name + ' - Home';
  const description = brand.desc;
  const { classes } = props;

  // Dispatcher
  const fetchData = useDispatch();
  useEffect(() => {
    fetchData(fetchAction());
  }, []);
  const dataTable = useSelector(state => state.getIn(['players', 'dataTable']));
  dataTable.valueSeq().forEach(v => console.log('items ' + v.get('Nombre')));

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* 1st Section */}
      <Grid container spacing={3} className={classes.root}>
        {/*
        <Grid item md={6} xs={12}>
          <CounterIconsWidget />
        </Grid>
        */}
        <Grid item md={12} sm={12} xs={12}>
          <div className={classes.sliderWrap}>
            <SliderWidget />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} sm={12} xs={12}>
          <PapperBlock title="Top 8 Ranking" icon="ion-ios-tennisball">
            <div>
              <CarouselWidget />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* 2nd Section */}
      <Grid container spacing={2} className={classes.root}>
        {/*
        <Grid item xs={12}>
          <PerformanceChartWidget />
        </Grid>
        */}
        <Grid item md={12} xs={12}>
          {/* Partido de la semana  */}
          <PapperBlock title="Partido de la semana" icon="ion-ios-tennisball" desc="Gran enfrentamiento">
            <div>
              <NewsWidget />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
      {/* Partidos */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={4} xs={12}>
          <Divider className={classes.divider} />
          <ContactWidget />
        </Grid>
        <Grid item md={4} xs={12}>
          <Divider className={classes.divider} />
          <ContactWidget />
        </Grid>
        <Grid item md={4} xs={12}>
          <Divider className={classes.divider} />
          <ContactWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}

PersonalDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalDashboard);
