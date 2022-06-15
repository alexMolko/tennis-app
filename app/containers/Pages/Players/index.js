/* eslint-disable linebreak-style */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  Connection,
} from 'dan-components';
import styles from 'dan-components/SocialMedia/jss/cover-jss';
import { fetchAction } from '../../Dashboard/actions/playerActions';

function Players() {
  const title = brand.name + ' - Jugadores';
  const description = brand.desc;

  // Dispatcher
  const fetchDataPlayers = useDispatch();
  useEffect(() => {
    fetchDataPlayers(fetchAction());
  }, []);

  const playersData = useSelector(state => state.getIn(['players', 'dataTable']));
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
        playersData.count() > 0
          ? <Connection playersData={playersData} />
          : <p>Loading</p>
      }
    </div>
  );
}

const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, 'dataTimeline'])
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch)
});

const UserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Players);

export default withStyles(styles)(UserProfileMapped);
