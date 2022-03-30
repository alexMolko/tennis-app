/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  HeadlineCard, ShowcaseCard
} from 'dan-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import img from 'dan-api/images/photos';
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
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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
              href="/blog/article"
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
              href="/blog/article"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <div className={classes.rootTable}>
              <Table className={classNames(classes.table, classes.stripped)}>
                <TableHead>
                  <TableRow>
                    <TableCell padding="default">Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat (g)</TableCell>
                    <TableCell align="right">Carbs (g)</TableCell>
                    <TableCell align="right">Protein (g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => ([
                    <TableRow key={n.id}>
                      <TableCell padding="default">{n.name}</TableCell>
                      <TableCell align="right">{n.calories}</TableCell>
                      <TableCell align="right">{n.fat}</TableCell>
                      <TableCell align="right">{n.carbs}</TableCell>
                      <TableCell align="right">{n.protein}</TableCell>
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
