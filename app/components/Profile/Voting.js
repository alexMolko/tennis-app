/* eslint-disable linebreak-style */
import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { Rating } from 'dan-components';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 0`,
  },
  medium: {
    '& button': {
      width: 96,
      height: 96,
      padding: 24
    },
    '& svg': {
      width: 48,
      height: 48
    }
  }
});

function Voting(props) {
  const [rating, setRating] = useState(3);

  const handleChange = value => {
    setRating(value);
  };


  const { classes } = props;
  return (
    <Fragment>
      <Typography variant="h4" component="p">Califica a Carlos Maya</Typography>
      <Divider />
      <Grid
        container
        alignItems="flex-start"
        justify="space-around"
        direction="row"
        spacing={2}
      >
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" component="p">Drive</Typography>
          <FormControl className={classes.formControl}>
            <div className={classes.medium}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => handleChange(value)}
              />
            </div>
          </FormControl>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" component="p">Revés</Typography>
          <FormControl className={classes.formControl}>
            <div className={classes.medium}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => handleChange(value)}
              />
            </div>
          </FormControl>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" component="p">Servicio</Typography>
          <FormControl className={classes.formControl}>
            <div className={classes.medium}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => handleChange(value)}
              />
            </div>
          </FormControl>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" component="p">Velocidad</Typography>
          <FormControl className={classes.formControl}>
            <div className={classes.medium}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => handleChange(value)}
              />
            </div>
          </FormControl>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" component="p">Mentalidad</Typography>
          <FormControl className={classes.formControl}>
            <div className={classes.medium}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => handleChange(value)}
              />
            </div>
          </FormControl>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" component="p">Volea</Typography>
          <FormControl className={classes.formControl}>
            <div className={classes.medium}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => handleChange(value)}
              />
            </div>
          </FormControl>
        </Grid>
      </Grid>
    </Fragment>
  );
}

Voting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Voting);
