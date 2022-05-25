/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from '../CardPaper/ProfileCard';
import styles from './profile-jss';

function Connection(props) {
  const { classes, playersData } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="space-between"
      direction="row"
      spacing={2}
      className={classes.rootx}
    >
      {
        playersData.valueSeq().map((data) => (
          <Grid item md={4} sm={6} xs={12} key={data.get('idJugador')}>
            <ProfileCard
              fotos={data.get('fotos')}
              name={data.get('nickName')}
              title={data.get('ranking')}
              connection={data.connection}
              statistics={data.get('estadisticas')}
              isVerified
              btnText="Ver perfil"
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

Connection.propTypes = {
  classes: PropTypes.object.isRequired,
  playersData: PropTypes.object.isRequired
};

export default withStyles(styles)(Connection);
