import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import dummy from 'dan-api/dummy/dummyContents';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarContent from '../Sidebar/SidebarContent';
import DropListMenu from './DropListMenu';
import MegaMenu from './MegaMenu';
import UserMenu from './UserMenu';
import styles from './header-jss';
import SearchUi from '../Search/SearchUi';


function HeaderMenu(props) {
  const [status, setStatus] = useState(dummy.user.status);
  const [anchorEl, setAnchorEl] = useState(null);
  const [fixed, setFixed] = useState(false);

  // Initial menu ui
  let flagFixedMenu = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixedMenu = (scroll > 64);
    if (flagFixedMenu !== newFlagFixedMenu) {
      setFixed(newFlagFixedMenu);
      flagFixedMenu = newFlagFixedMenu;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = st => {
    setStatus(st);
    handleClose();
  };

  const {
    classes,
    type,
    dataMenu,
    history,
    toggleDrawerOpen,
    openMobileNav,
    loadTransition,
    isLogin,
    logoLink
  } = props;
  return (
    <AppBar
      className={
        classNames(
          classes.appBar,
          classes.attachedbar,
          fixed ? classes.fixed : ''
        )
      }
    >
      <div className={classes.appMenu}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={toggleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <NavLink to={logoLink} className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
        </Hidden>
        <div className={classes.searchHeaderMenu}>
          <div className={classNames(classes.wrapper, classes.dark)}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <SearchUi history={history} />
          </div>
        </div>
        <Toolbar>
          <UserMenu dark />
        </Toolbar>
      </div>
      <Hidden mdDown>
        <Fragment>
          { type === 'mega-menu' ? <MegaMenu dataMenu={dataMenu} /> : <DropListMenu dataMenu={dataMenu} />}
        </Fragment>
      </Hidden>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!openMobileNav}
          anchor="left"
        >
          <div className={classes.swipeDrawerPaper}>
            <SidebarContent
              drawerPaper
              leftSidebar
              toggleDrawerOpen={toggleDrawerOpen}
              loadTransition={loadTransition}
              dataMenu={dataMenu}
              status={status}
              anchorEl={anchorEl}
              openMenuStatus={handleOpen}
              closeMenuStatus={handleClose}
              changeStatus={handleChangeStatus}
              isLogin={isLogin}
            />
          </div>
        </SwipeableDrawer>
      </Hidden>
    </AppBar>
  );
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  dataMenu: PropTypes.array.isRequired,
  openMobileNav: PropTypes.bool.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logoLink: PropTypes.string,
  isLogin: PropTypes.bool
};

HeaderMenu.defaultProps = {
  isLogin: true,
  logoLink: '/',
};

export default withStyles(styles)(HeaderMenu);
