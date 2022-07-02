/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { toggleAction, openAction, playTransitionAction } from 'dan-redux/actions/uiActions';
import LeftSidebarLayout from './layouts/LeftSidebarLayout';
import styles from './appStyles-jss';

function AdminDashboard(props) {
  // Initial header style

  const [appHeight, setAppHeight] = useState(0);
  const [, setOpenGuide] = useState(false);

  useEffect(() => {
    const { history, loadTransition } = props;

    // Adjust min height
    setAppHeight(window.innerHeight + 112);

    // Set expanded sidebar menu
    const currentPath = history.location.pathname;
    props.initialOpen(currentPath);
    // Play page transition
    loadTransition(true);

    // Execute all arguments when page changes
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        loadTransition(true);
      }, 500);
    });

    return () => {
      if (unlisten != null) {
        unlisten();
      }
    };
  }, []);

  const handleOpenGuide = () => {
    setOpenGuide(true);
  };

  const {
    classes,
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    history,
    gradient,
    deco,
    bgPosition,
    layout,
    changeMode
  } = props;
  const titleException = ['/app', '/app/crm-dashboard', '/app/crypto-dashboard'];
  const parts = history.location.pathname.split('/');
  const place = parts[parts.length - 1].replace('-', ' ');
  return (
    <div
      style={{ minHeight: appHeight }}
      className={
        classNames(
          classes.appFrameInner,
          layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav,
          mode === 'dark' ? 'dark-mode' : 'light-mode'
        )
      }
    >
      { /* Top Bar with Mega Menu */
        layout === 'mega-menu' && (
          <LeftSidebarLayout
            history={history}
            toggleDrawer={toggleDrawer}
            loadTransition={loadTransition}
            changeMode={changeMode}
            sidebarOpen={sidebarOpen}
            pageLoaded={pageLoaded}
            mode={mode}
            gradient={gradient}
            deco={deco}
            bgPosition={bgPosition}
            place={place}
            titleException={titleException}
            handleOpenGuide={handleOpenGuide}
          >
            { children }
          </LeftSidebarLayout>
        )
      }
    </div>
  );
}

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  initialOpen: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired
};

const reducer = 'ui';
const mapStateToProps = state => ({
  sidebarOpen: state.getIn([reducer, 'sidebarOpen']),
  pageLoaded: state.getIn([reducer, 'pageLoaded']),
  mode: state.getIn([reducer, 'type']),
  gradient: state.getIn([reducer, 'gradient']),
  deco: state.getIn([reducer, 'decoration']),
  layout: state.getIn([reducer, 'layout']),
  bgPosition: state.getIn([reducer, 'bgPosition']),
  ...state,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  initialOpen: bindActionCreators(openAction, dispatch),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const AdminDashboardMaped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);

export default (withStyles(styles)(AdminDashboardMaped));
