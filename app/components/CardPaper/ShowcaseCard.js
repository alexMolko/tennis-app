/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss';

function ShowcaseCard(props) {
  const {
    classes,
    title,
    subtitle,
    pointsNumber,
    action,
    fotos,
    landscape,
    rankingNumber,
    noMargin,
    extraSize,
    href,
    ranking,
    points,
  } = props;
  const rankingPhrase = `${ranking} ${rankingNumber}`;
  const subtitlePhrase = subtitle || `${pointsNumber} ${points}`;
  console.log('FOTOS EN SHOW ' + fotos);
  return (
    <Card className={classNames(noMargin ? classes.gutterBottom : classes.cardMedia, landscape && classes.landscapeCard)}>
      <CardMedia
        className={
          classNames(
            landscape ? classes.roundedThumb : classes.roundedMedia,
            extraSize ? classes.extraRounded : ''
          )
        }
        image={fotos.get(1)}
        title={title}
      />
      <CardContent>
        <Typography align="center" noWrap variant="h4">{title}</Typography>
        {rankingNumber && (<Typography align="center" variant="h5" gutterBottom>{rankingPhrase}</Typography>)}
        <Typography align="center" variant="h6">{subtitlePhrase}</Typography>
        {landscape && (
          <div className={classes.btnArea}>
            <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
          </div>
        )}
      </CardContent>
      {!landscape && (
        <CardActions className={classes.btnArea}>
          <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
        </CardActions>
      )}
    </Card>
  );
}

ShowcaseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pointsNumber: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
  fotos: PropTypes.object.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  rankingNumber: PropTypes.string,
  href: PropTypes.string,
  points: PropTypes.string,
  ranking: PropTypes.string,
  subtitle: PropTypes.string,
};

ShowcaseCard.defaultProps = {
  landscape: false,
  rankingNumber: '',
  noMargin: false,
  extraSize: false,
  href: '#',
  points: '',
  ranking: 'undefined',
  subtitle: ''
};

export default withStyles(styles)(ShowcaseCard);
