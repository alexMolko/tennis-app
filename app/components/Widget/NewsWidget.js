import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { HeadToHead } from 'dan-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './widget-jss';

const slideData = [
  {
    Jugador: 'Carlos Maya',
    Ranking: '1',
    Puntos: '1000',
    Image: '/images/profiles/player2.jpg',
    Ganados: '2',
    href: ''
  },
  {
    Jugador: 'Fernando Gonzalez',
    Ranking: '3',
    Puntos: '800',
    Image: '/images/profiles/player3.jpg',
    Ganados: '0',
    href: ''
  },
];

function NewsWidget(props) {
  const { classes } = props;
  return (
    <div>
      <Paper>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <div>
              <HeadToHead
                extraSize
                title={slideData[0].Jugador}
                rankingNumber={slideData[0].Ranking}
                pointsNumber={slideData[0].Puntos}
                action="Ver perfil"
                image={slideData[0].Image}
                href={slideData[0].href}
                ranking="Ranking : "
                points="puntos"
                ganados={slideData[0].Ganados}

              />
            </div>
          </Grid>
          <Grid item md={2} xs={12} style={{ margin: 'auto', textAlign: 'center' }}>
            <div className={classes.content}>
              <Typography variant="h4" className={classes.name} gutterBottom>
                VS
              </Typography>
            </div>
          </Grid>
          <Grid md={5} xs={12}>
            <div>
              <HeadToHead
                extraSize
                title={slideData[1].Jugador}
                rankingNumber={slideData[1].Ranking}
                pointsNumber={slideData[1].Puntos}
                action="Ver perfil"
                image={slideData[1].Image}
                href={slideData[0].href}
                ranking="Ranking : "
                points="puntos"
                ganados={slideData[1].Ganados}
              />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

NewsWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewsWidget);
