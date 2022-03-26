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
    pointsNumber,
    action,
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
        <Typography noWrap variant="h4">{title}</Typography>
        {rankingNumber && (<Typography variant="h5" gutterBottom>{rankingPhrase}</Typography>)}
        <Typography variant="h6">{pointsPhrase}</Typography>
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
  image: PropTypes.string.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  rankingNumber: PropTypes.string,
  href: PropTypes.string,
  points: PropTypes.string,
  ranking: PropTypes.string,
};

ShowcaseCard.defaultProps = {
  landscape: false,
  rankingNumber: '',
  noMargin: false,
  extraSize: false,
  href: '#',
  points: '',
  ranking: 'undefined',
};

export default withStyles(styles)(ShowcaseCard);
