/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from '../CardPaper/cardStyle-jss';

function HeadToHead(props) {
  const {
    classes,
    title,
    pointsNumber,
    ganados,
    image,
    landscape,
    rankingNumber,
    noMargin,
    extraSize,
    href,
    ranking,
    points,
  } = props;
  const rankingPhrase = `${ranking} ${rankingNumber}`;
  const pointsPhrase = `${pointsNumber} ${points}`;
  return (
    <Card className={classNames(noMargin ? classes.gutterBottom : classes.cardMedia, landscape && classes.landscapeCard)}>
      <CardMedia
        style={{ top: '-100px', width: '160%', marginBottom: '-100px' }}
        className={
          classNames(
            landscape ? classes.roundedThumb : classes.roundedMedia,
            extraSize ? classes.extraRounded : ''
          )
        }
        image={image}
        title={title}
      />
      <CardContent>
        <Typography align="center" noWrap variant="h5" to={href}>{title}</Typography>
        {rankingNumber && (<Typography align="center" variant="h5" gutterBottom>{rankingPhrase}</Typography>)}
        <Typography align="center" variant="h6">{pointsPhrase}</Typography>
      </CardContent>
      {!landscape && (
        <CardActions className={classes.btnArea}>
          <Typography align="center" variant="h4">{ganados}</Typography>
        </CardActions>
      )}
    </Card>
  );
}

HeadToHead.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pointsNumber: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  rankingNumber: PropTypes.string,
  href: PropTypes.string,
  points: PropTypes.string,
  ranking: PropTypes.string,
  ganados: PropTypes.string,
};

HeadToHead.defaultProps = {
  landscape: false,
  rankingNumber: '',
  noMargin: false,
  extraSize: false,
  href: '#',
  points: '',
  ranking: 'undefined',
  ganados: '0',
};

export default withStyles(styles)(HeadToHead);
