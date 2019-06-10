import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const MenuList = props => {
  const { list, classes, ...other } = props;

  return list.map((item, i) => (
    <ListItem key={i} className={classes.listItem}>
      <MenuItem
        {...other}
        to={item.path}
        component={NavLink}
        selected={location.pathname === item.path}
      >
        {item.text}
      </MenuItem>
    </ListItem>
  ));
};

export default withStyles(styles)(MenuList);
