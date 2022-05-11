/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  HeadlineCard, ShowcaseCard
} from 'dan-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Slider from 'react-slick';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import imgData from 'dan-api/images/imgData';
import styles from './blogStyle-jss';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

let id = 0;
function createData(jugador, puntos, ganados, perdidos) {
  id += 1;
  return {
    id,
    jugador,
    puntos,
    ganados,
    perdidos
  };
}

const data = [
  createData('Carlos Maya', 9, 3, 0),
  createData('Roberto Gutierrez', 3, 1, 2),
  createData('Taylor Fritz', 3, 1, 2),
  createData('Pedro Martinez', 3, 1, 2)
];

function Tournaments(props) {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const { path } = useRouteMatch();
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
        <Hidden mdUp>
          <Typography variant="h4" gutterBottom>Draw del torneo</Typography>
        </Hidden>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Grupos"
              subtitle="Calendario"
              date="Nov 12"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Ver"
              image="/images/banners/banner3.jpg"
              href={path + '/matches'}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Draw"
              subtitle="Calendario"
              date="Nov 11"
              desc="Duis sed augue phasellus ante massa."
              action="Ver"
              image="/images/banners/banner4.jpg"
              href={path + '/playoffs'}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <div className={classes.rootTable}>
              <Table className={classNames(classes.table, classes.stripped)}>
                <TableHead>
                  <Typography variant="h3">Grupo 1</Typography>
                  <TableRow>
                    <TableCell align="default">Posición</TableCell>
                    <TableCell padding="default">Jugador</TableCell>
                    <TableCell align="default">Puntos</TableCell>
                    <TableCell align="default">Ganados</TableCell>
                    <TableCell align="default">Perdidos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => ([
                    <TableRow key={n.id}>
                      <TableCell align="default">{n.id}</TableCell>
                      <TableCell padding="default">{n.jugador}</TableCell>
                      <TableCell align="default">{n.puntos}</TableCell>
                      <TableCell align="default">{n.ganados}</TableCell>
                      <TableCell align="default">{n.perdidos}</TableCell>
                    </TableRow>
                  ]))}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <div className={classes.rootTable}>
              <Table className={classNames(classes.table, classes.stripped)}>
                <TableHead>
                  <Typography variant="h3">Grupo 2</Typography>
                  <TableRow>
                    <TableCell align="default">Posición</TableCell>
                    <TableCell padding="default">Jugador</TableCell>
                    <TableCell align="default">Puntos</TableCell>
                    <TableCell align="default">Ganados</TableCell>
                    <TableCell align="default">Perdidos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => ([
                    <TableRow key={n.id}>
                      <TableCell align="default">{n.id}</TableCell>
                      <TableCell padding="default">{n.jugador}</TableCell>
                      <TableCell align="default">{n.puntos}</TableCell>
                      <TableCell align="default">{n.ganados}</TableCell>
                      <TableCell align="default">{n.perdidos}</TableCell>
                    </TableRow>
                  ]))}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
        <div className="container">
          <Slider {...settings}>
            {imgData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
}

Tournaments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tournaments);
