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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './blogStyle-jss';

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
  return (
    <Fragment>
      <div className={classes.root}>
        <section id="headline">
          <HeadlineCard
            title="Title of a longer featured blog post"
            desc="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this post&apos;s contents…"
            thumbnail={img[0]}
          />
        </section>
        <Divider className={classes.divider} />
        <Hidden mdUp>
          <Typography variant="h4" gutterBottom>Popular Post</Typography>
        </Hidden>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Post title"
              date="Nov 12"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Read more"
              image={img[5]}
              href="/blog/article"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Featured post"
              date="Nov 11"
              desc="Duis sed augue phasellus ante massa."
              action="Read more"
              image={img[6]}
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
      </div>
    </Fragment>
  );
}

Tournaments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tournaments);
