import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PostCard from '../CardPaper/PostCard';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    background: 'none'
  },
});

function Favorites(props) {
  const { classes } = props;
  return (
    <Grid
      container
      justify="center"
      direction="row"
      spacing={3}
    >
      <Grid item md={6}>
        <PostCard
          liked={1}
          shared={20}
          commented={15}
          date="Sept, 25 2018"
          content="¡Un gran placer jugar dobles con ustedes!"
          image="/images/comments/comment4.jpg"
          avatar="/images/profiles/player4.jpg"
          name="David Jimenez"
        />
        <Divider className={classes.divider} />
        <PostCard
          liked={90}
          shared={10}
          commented={22}
          date="Sept, 15 2018"
          content="Un ejemplo de fair play"
          avatar="/images/profiles/player6.jpg"
          name="Carlos Maya"
        />
      </Grid>
      <Grid item md={6}>
        <PostCard
          liked={90}
          shared={10}
          commented={22}
          date="Sept, 15 2018"
          content="Ha sido un excelente partido el de hoy. ¡Saludos!"
          avatar="/images/profiles/player8.jpg"
          name="Ricardo Salas"
        />
        <Divider className={classes.divider} />
        <PostCard
          liked={1}
          shared={20}
          commented={15}
          date="Sept, 25 2018"
          content="¡Un gran placer jugar dobles con ustedes!"
          image="/images/comments/comment1.jpg"
          avatar="/images/profiles/player3.jpg"
          name="Sergio Fritz"
        />
      </Grid>
    </Grid>
  );
}

Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favorites);
