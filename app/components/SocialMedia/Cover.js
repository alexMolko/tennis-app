import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Info from '@material-ui/icons/Info';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import Type from 'dan-styles/Typography.scss';
import styles from './jss/cover-jss';


const optionsOpt = [
  'Edit Profile',
  'Change Cover',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function Cover(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const {
    classes,
    avatar,
    name,
    coverImg,
  } = props;

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  return (
    <div className={classes.cover} style={{ backgroundImage: `url(${coverImg})` }}>
      <div className={classes.opt}>
        <IconButton className={classes.button} aria-label="Delete">
          <Info />
        </IconButton>
        <IconButton
          aria-label="More"
          aria-owns={anchorElOpt ? 'long-menu' : null}
          aria-haspopup="true"
          className={classes.button}
          onClick={handleClickOpt}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorElOpt}
          open={Boolean(anchorElOpt)}
          onClose={handleCloseOpt}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {optionsOpt.map(option => (
            <MenuItem key={option} selected={option === 'Edit Profile'} onClick={handleCloseOpt}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className={classes.content}>
        <Avatar alt={name} src={avatar} className={classes.avatar} />
        <Typography variant="h4" className={classes.name} gutterBottom>
          {name}
          <VerifiedUser className={classes.verified} />
        </Typography>
        <div className={classes.bg}>
          <Typography variant="h6" gutterBottom>
            <span className={Type.medium}>
              Ranking
            </span>
            &nbsp;
          </Typography>
          <Typography variant="h3" gutterBottom>
            <span className={Type.bold}>
             1
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default withStyles(styles)(Cover);
