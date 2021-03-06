import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from '@material-ui/core/LinearProgress';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  changeThemeAction,
  changeModeAction,
  changeGradientAction,
  changeDecoAction,
  changeBgPositionAction,
  changeLayoutAction,
  changeDirectionAction
} from 'dan-redux/actions/uiActions';
import applicationTheme from '../../styles/theme/applicationTheme';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  },
  loading: {
    zIndex: 10,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 1,
    transition: 'opacity .5s ease'
  },
  loadingWrap: {
    background: 'none'
  },
  bar: {
    background: 'rgba(255, 255, 255, 0.7)'
  },
  hide: {
    opacity: 0
  }
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const ThemeContext = React.createContext(undefined);

function ThemeWrapper(props) {
  const [theme, setTheme] = useState(
    // eslint-disable-next-line
    createMuiTheme(applicationTheme(props.color, props.mode, props.direction))
  );
  const {
    classes,
    children,
    color,
    direction
  } = props;


  const handleChangeMode = modeParam => {
    const { changeMode } = props;
    setTheme(
      createMuiTheme(
        applicationTheme(color, modeParam, direction)
      )
    );
    changeMode(modeParam);
  };


  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            variant="determinate"
            className={classes.hide}
            classes={{
              root: classes.loading,
              colorPrimary: classes.loadingWrap,
              barColorPrimary: classes.bar
            }}
          />
          <ThemeContext.Provider value={handleChangeMode}>
            {children}
          </ThemeContext.Provider>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
  palette: state.getIn([reducer, 'palette']),
  mode: state.getIn([reducer, 'type']),
  gradient: state.getIn([reducer, 'gradient']),
  decoration: state.getIn([reducer, 'decoration']),
  bgPosition: state.getIn([reducer, 'bgPosition']),
  layout: state.getIn([reducer, 'layout']),
  direction: state.getIn([reducer, 'direction']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeGradient: bindActionCreators(changeGradientAction, dispatch),
  changeDecoration: bindActionCreators(changeDecoAction, dispatch),
  changeBgPosition: bindActionCreators(changeBgPositionAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch),
  changeDirection: bindActionCreators(changeDirectionAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withStyles(styles)(ThemeWrapperMapped);
