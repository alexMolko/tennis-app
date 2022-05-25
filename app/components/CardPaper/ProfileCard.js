/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Type from 'dan-styles/Typography.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import Divider from '@material-ui/core/Divider';
import styles from './cardStyle-jss';

function ProfileCard(props) {
  const {
    classes,
    name,
    title,
    isVerified,
    btnText,
    fotos,
    statistics
  } = props;
  return (
    <Card className={classes.cardSocmed}>
      <CardMedia
        className={classes.mediaProfile}
        image={fotos.get(0)}
        title="cover"
      />
      <CardContent className={classes.contentProfile}>
        <Avatar alt="avatar" src={fotos.get(1)} className={classes.avatarBig} />
        <Typography variant="h6" className={classes.name} gutterBottom>
          {name}
          {isVerified && <VerifiedUser className={classes.verified} />}
        </Typography>
        <Typography className={classes.subheading} gutterBottom>
          <span className={Type.regular}>Ranking {title}</span>
        </Typography>
        <Button className={classes.buttonProfile} size="large" variant="outlined" color="secondary">
          {btnText}
        </Button>
      </CardContent>
      <Divider />
      <CardActions>
        <BottomNavigation
          showLabels
          className={classes.bottomLink}
        >
          <BottomNavigationAction label={statistics.get('Ganados').get('N') + ' Ganados'} icon={<SupervisorAccount />} />
          <BottomNavigationAction label={statistics.get('Perdidos').get('N') + ' Perdidos'} icon={<Favorite />} />
          <BottomNavigationAction label={statistics.get('Titulos').get('N') + ' Titulos'} icon={<PhotoLibrary />} />
        </BottomNavigation>
      </CardActions>
    </Card>
  );
}
// {statistics.get('Ganados').get('N') + ' Ganados'}
ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  fotos: PropTypes.array.isRequired,
  statistics: PropTypes.object.isRequired
};

ProfileCard.defaultProps = {
  isVerified: false
};

export default withStyles(styles)(ProfileCard);
