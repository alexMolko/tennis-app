/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CommentIcon from '@material-ui/icons/Comment';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  Cover,
  About,
  Voting,
  Favorites,
  Albums,
} from 'dan-components';
import bgCover from 'dan-images/petal_bg.svg';
import styles from 'dan-components/SocialMedia/jss/cover-jss';
import { fetchActionPlayer } from '../../Dashboard/actions/playerActions';

function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function UserProfile(props) {
  const title = brand.name + ' - Profile';
  const description = brand.desc;
  const { classes } = props;
  const [value, setValue] = useState(0);

  // Dispatcher
  const fetchData = useDispatch();
  useEffect(() => {
    fetchData(fetchActionPlayer('7htmA'));
  }, [fetchData]);
  const userInfo = useSelector(state => state.getIn(['players', 'dataPlayer']));
  // console.log("INFO DE PLAYER " + userInfo);
  const handleChange = (event, val) => {
    setValue(val);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {
        userInfo.count() > 0
          ? (
            <>
              <Cover
                coverImg={bgCover}
                avatar={userInfo.get('fotos').get(1)}
                name={userInfo.get('nombre')}
              />
              <AppBar position="static" className={classes.profileTab}>
                <Hidden mdUp>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab icon={<AccountCircle />} />
                    <Tab icon={<CommentIcon />} />
                    <Tab icon={<Favorite />} />
                    <Tab icon={<PhotoLibrary />} />
                  </Tabs>
                </Hidden>
                <Hidden smDown>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab icon={<AccountCircle />} label="GENERAL" />
                    <Tab icon={<CommentIcon />} label="COMENTARIOS" />
                    <Tab icon={<Favorite />} label="DESTACAR" />
                    <Tab icon={<PhotoLibrary />} label="FOTOS" />
                  </Tabs>
                </Hidden>
              </AppBar>
              {value === 0 && <TabContainer><About userInfo={userInfo} /></TabContainer>}
              {value === 1 && <TabContainer><Favorites /></TabContainer>}
              {value === 2 && <TabContainer><Voting /></TabContainer>}
              {value === 3 && <TabContainer><Albums /></TabContainer>}
            </>
          )
          : <p>Loading ...</p>
      }
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, 'dataTimeline'])
});


const UserProfileMapped = connect(
  mapStateToProps,
)(UserProfile);

export default withStyles(styles)(UserProfileMapped);
