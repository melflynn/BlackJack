import React from 'react';
import { Drawer, Typography, makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {useHistory, useLocation} from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import { HiClipboardCheck } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";

const drawerWidth = 250;
const useStyles = makeStyles({
  layout: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100vw',
    height: '100vh'
  },
  drawer: {
    width: '240px',
    position: 'relative'
  },
  drawerPaper: {
    width: '240px',
    position: 'relative',
    top: '-8px'
  },
  active: {
    background: '#f4f4f4'
  }
})

export default function Layout({children}) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={classes.layout}>
      <Drawer className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}>
        <List>
          <Divider/>
          <ListItem button
            onClick={() => history.push("/home")}
            className={location.pathname === "/home" ? classes.active : null}>
            <ListItemIcon><HiHome size={28}/></ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
          <Divider/>
          <ListItem button
            onClick={() => history.push("/rules")}
            className={location.pathname === "/rules" ? classes.active : null}>
            <ListItemIcon><HiClipboardCheck size={28}/></ListItemIcon>
            <ListItemText primary="Rules"/>
          </ListItem>
          <Divider/>
          <ListItem button
            onClick={() => history.push("/play")}
            className={location.pathname === "/play" ? classes.active : null}>
            <ListItemIcon><HiPlay size={28}/></ListItemIcon>
            <ListItemText primary="Play"/>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )

}