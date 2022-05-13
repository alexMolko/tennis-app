/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContactWidget } from 'dan-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Check from '@material-ui/icons/Check';
import AcUnit from '@material-ui/icons/AcUnit';
import Adb from '@material-ui/icons/Adb';
import AllInclusive from '@material-ui/icons/AllInclusive';
import AssistantPhoto from '@material-ui/icons/AssistantPhoto';
import Type from 'dan-styles/Typography.scss';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './profile-jss';

function About(props) {
  const { classes } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-start"
      direction="row"
      spacing={3}
    >
      <Grid item md={6} xs={12}>
        {/* ----------------------------------------------------------------------*/}
        {/* Profile Progress */}
        <div className={classes.progressRoot}>
          <Paper className={classes.styledPaper} elevation={4}>
            <Typography className={classes.title} variant="h5" component="h3">
              <span className={Type.light}>Mejor habilidad: </span>
              <span className={Type.bold}>Drive</span>
            </Typography>
            <Grid container justify="center">
              <Chip
                avatar={(
                  <Avatar>
                    <Check />
                  </Avatar>
                )}
                label="15 votos"
                className={classes.chip}
                color="primary"
              />
            </Grid>
          </Paper>
        </div>
        <Divider className={classes.divider} />
        {/* About Me */}
        <PapperBlock title="Carlos Maya" icon="ion-ios-contact-outline" whiteBg noMargin desc='"Never give up!"'>
          <Divider className={classes.divider} />
          <List dense className={classes.profileList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Fecha de nacimiento" secondary="03 de Mayo, 1992" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="De" secondary="Tampico, Tamaulipas" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Teléfono" secondary="(+55)8765432190" />
            </ListItem>
          </List>
        </PapperBlock>
        <Divider className={classes.divider} />
        {/* ----------------------------------------------------------------------*/}
        {/* My Interests */}
        <PapperBlock title="Estadísticas" icon="ion-ios-aperture-outline" whiteBg desc="">
          <Grid container className={classes.colList}>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                    <AllInclusive />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Juego" secondary="Diestro, Revés a una mano" />
              </ListItem>
            </Grid>
            <Grid item md={6} sm={12}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                    <AcUnit />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Títulos" secondary="2" />
              </ListItem>
            </Grid>
            <Grid item md={6} sm={12}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>
                    <Adb />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Puntos" secondary="1000" />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                    <AssistantPhoto />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ganados/Perdidos" secondary="14/3" />
              </ListItem>
            </Grid>
          </Grid>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
      </Grid>
      <Grid item md={5} xs={12}>
        {/* ----------------------------------------------------------------------*/}
        {/* My Connection Me */}
        <PapperBlock title="Partidos recientes" icon="ion-ios-contacts-outline" whiteBg desc="">
          <List dense className={classes.profileList}>
            <ContactWidget />
          </List>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>

              Ver todo
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
