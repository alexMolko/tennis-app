import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Chat from '@material-ui/icons/Chat';
import DoneIcon from '@material-ui/icons/Done';
import AccountBox from '@material-ui/icons/AccountBox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import dataContact from '../../containers/SampleApps/Contact/api/contactData';
import styles from './widget-jss';

/* Tab Container */
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
/* END Tab Container */

/* Contact List */
function ContactList(props) {
  const { classes, data } = props;
  let spaceResult = '';
  let spaceResult2 = '';
  if (data.Ganador !== data.name) {
    spaceResult = '2px';
  }
  if (data.Ganador !== data.name2) {
    spaceResult2 = '2px';
  }
  return (
    <List>
      <div>
        <ListItem
          button
          key={data.id}
        >
          <Avatar alt={data.name} src={data.avatar} className={classes.avatar} />
          <ListItemText primary={data.name} secondary="Ranking 1" />
          <Hidden xsDown>
            <ListItemSecondaryAction>
              <Grid container>
                <Grid item md={6} xs={6}>
                  { data.Ganador === data.name ? (
                    <Tooltip title="Ganador">
                      <IconButton className={classes.blueText} aria-label="Ganador">
                        {data.Ganador === data.name ? <DoneIcon style={{ fill: '#00bfa5' }} /> : '' }
                      </IconButton>
                    </Tooltip>
                  )
                    : ''}

                </Grid>
                <Grid item md={6} xs={6} style={{ margin: spaceResult }}>
                  <Tooltip title="Resultado">
                    <IconButton className={classes.blueText} aria-label="Chat">
                      <span>{data.MarcadorJugador1}</span>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </ListItemSecondaryAction>
          </Hidden>
          <Hidden smUp>
            <ListItemSecondaryAction>
              <Grid container>
                <Grid item md={6} xs={6}>
                  { data.Ganador === data.name ? (
                    <Tooltip title="Ganador">
                      <IconButton className={classes.blueText} aria-label="Ganador">
                        {data.Ganador === data.name ? <DoneIcon style={{ fill: '#00bfa5' }} /> : '' }
                      </IconButton>
                    </Tooltip>
                  )
                    : ''}

                </Grid>
                <Grid item md={6} xs={6} style={{ margin: spaceResult }}>
                  <Tooltip title="Resultado">
                    <IconButton className={classes.blueText} aria-label="Chat">
                      <span>{data.MarcadorJugador1}</span>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </ListItemSecondaryAction>
          </Hidden>
        </ListItem>
        <Divider className={classes.divider} style={{ margin: '0px' }} />
        <ListItem
          button
          key={data.id}
        >
          <Avatar alt={data.name2} src={data.avatar2} className={classes.avatar} />
          <ListItemText primary={data.name2} secondary="Ranking 1" />
          <Hidden xsDown>
            <ListItemSecondaryAction>
              <Grid container>
                <Grid item md={6} xs={6}>
                  { data.Ganador === data.name2 ? (
                    <Tooltip title="Ganador">
                      <IconButton className={classes.blueText} aria-label="Ganador">
                        {data.Ganador === data.name2 ? <DoneIcon style={{ fill: '#00bfa5' }} /> : '' }
                      </IconButton>
                    </Tooltip>
                  )
                    : ''}
                </Grid>
                <Grid item md={6} xs={6} style={{ margin: spaceResult2 }}>
                  <Tooltip title="Resultado">
                    <IconButton className={classes.blueText} aria-label="Chat">
                      <span>{data.MarcadorJugador2}</span>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </ListItemSecondaryAction>
          </Hidden>
          <Hidden smUp>
            <ListItemSecondaryAction>
              <Grid container>
                <Grid item md={6} xs={6}>
                  { data.Ganador === data.name2 ? (
                    <Tooltip title="Ganador">
                      <IconButton className={classes.blueText} aria-label="Ganador">
                        {data.Ganador === data.name2 ? <DoneIcon style={{ fill: '#00bfa5' }} /> : '' }
                      </IconButton>
                    </Tooltip>
                  )
                    : ''}
                </Grid>
                <Grid item md={6} xs={6} style={{ margin: spaceResult2 }}>
                  <Tooltip title="Resultado">
                    <IconButton className={classes.blueText} aria-label="Chat">
                      <span>{data.MarcadorJugador2}</span>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </ListItemSecondaryAction>
          </Hidden>
        </ListItem>
      </div>
    </List>
  );
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const ContactListStyled = withStyles(styles)(ContactList);
/* END Contact List */

/* Conversation List */
function MessagesList(props) {
  const { classes } = props;
  return (
    <List>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[1].name} src={dataContact[1].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[1].name} className={classes.messages} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ListItemSecondaryAction>
          <Typography variant="caption">10:42 PM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MessagesListStyled = withStyles(styles)(MessagesList);
/* END Conversation List */

function ContactWidget(props) {
  const [value, setValue] = useState(0);
  const [setAnchorEl] = useState(null);

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const { classes } = props;
  const r = dataArray => dataArray.map(data => (
    <div>
      <Paper className={classes.rootContact}>
        <AppBar position="static" color="default">
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab icon={<AccountBox />} />
              <Tab icon={<Chat />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Partido" icon={<AccountBox />} />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary">
                    Información
                  </Badge>
                )}
                icon={<Chat />}
              />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><ContactListStyled data={data} openMenu={handleOpen} /></TabContainer>}
        {value === 1 && <TabContainer><MessagesListStyled /></TabContainer>}
      </Paper>
      <br />
    </div>
  ));
  return (
    <Fragment>
      {r(dataContact)}
    </Fragment>
  );
}

ContactWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactWidget);
