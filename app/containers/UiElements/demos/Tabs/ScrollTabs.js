import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ContactWidget } from 'dan-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
function TabContainer(props) {
  const { classes } = props;
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item md={4} xs={12}>
        <Divider className={classes.divider} />
        <ContactWidget />
      </Grid>
      <Grid item md={4} xs={12}>
        <Divider className={classes.divider} />
        <ContactWidget />
      </Grid>
      <Grid item md={4} xs={12}>
        <Divider className={classes.divider} />
        <ContactWidget />
      </Grid>
    </Grid>
  );
}

TabContainer.propTypes = {
  classes: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(value);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Semana 1" />
            <Tab label="Semana 2" />
            <Tab label="Semana 3" />
            <Tab label="Semana 4" />
            <Tab label="Semana 5" />
            <Tab label="Semana 6" />
            <Tab label="Semana 7" />
            <Tab label="Semana 8" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer classes={classes}>Item One</TabContainer>}
        {value === 1 && <TabContainer classes={classes}>Item Two</TabContainer>}
        {value === 2 && <TabContainer classes={classes}>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollTabs);
