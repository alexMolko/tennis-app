/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {
  Sidebar,
  BreadCrumb,
} from 'dan-components';
import dataMenuAdmin from 'dan-api/ui/menuAdmin';
import Decoration from '../Decoration';
import styles from '../appStyles-jss';

function LeftSidebarLayout(props) {
  const {
    classes,
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    place,
    titleException,
  } = props;
  return (
    <Fragment>
      <Sidebar
        open={sidebarOpen}
        toggleDrawerOpen={toggleDrawer}
        loadTransition={loadTransition}
        dataMenu={dataMenuAdmin}
        leftSidebar
      />
      <main className={classNames(classes.content, !sidebarOpen ? classes.contentPaddingLeft : '')} id="mainContent">
        <Decoration
          mode={mode}
          gradient={gradient}
          decoration={deco}
          bgPosition={bgPosition}
          horizontalMenu={false}
        />
        <section className={classNames(classes.mainWrap, classes.sidebarLayout)}>
          {titleException.indexOf(history.location.pathname) < 0 && (
            <div className={classes.pageTitle}>
              <Typography component="h4" className={bgPosition === 'header' ? classes.darkTitle : classes.lightTitle} variant="h4">{place}</Typography>
              <BreadCrumb separator=" / " theme={bgPosition === 'header' ? 'dark' : 'light'} location={history.location} />
            </div>
          )}
          { !pageLoaded && (<img src="/images/spinner.gif" alt="spinner" className={classes.circularProgress} />) }
          <Fade
            in={pageLoaded}
            {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              { children }
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

LeftSidebarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired
};

export default (withStyles(styles)(LeftSidebarLayout));
