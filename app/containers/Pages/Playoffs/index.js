/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { HeadlineCard, Brackets } from 'dan-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from './blogStyle-jss';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

const rounds = [
  {
    title: 'Cuartos de final',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team F' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: 'Jorge Castillo' }, { name: 'Ricardo Salas' }],
      },
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: 'Enrique Maya' }, { name: 'Sergio Gutierrez' }],
      },
    ],
  },
  {
    title: 'Semifinal',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Carlos Maya' }, { name: 'Alfredo Torres' }],
      },
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{ name: 'Jorge Castillo' }, { name: 'Enrique Maya' }],
      },
    ],
  },
  {
    title: 'Final',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Carlos Maya' }, { name: 'Enrique Maya' }],
      }
    ],
  },
];

function Playoffs(props) {
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
        <Typography variant="h3">Playoffs</Typography>
        <Grid container>
          <Divider className={classes.divider} />
          <Grid item md={12} xs={12}>
            <Brackets
              rounds={rounds}
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

Playoffs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Playoffs);
