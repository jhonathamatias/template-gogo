import React, { useContext, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import classNames from "classnames";
import { Store } from "store";
import IconsSimpleLine from "components/UI/Icons/SimpleLine";
import styles from "./styles";

function SubMenuItems(props) {
  const { state } = useContext(Store);
  const { subMenu, menu } = state.sidebar;
  const { classes, location } = props;

  const showItem = parent => {
    let currentParent = location.pathname.match(parent);

    if (currentParent && !menu.itemClicked) {
      return parent === currentParent[0]  
    }

    return parent === menu.itemClicked;
  };

  return subMenu.items.map(item => {
    return item.subItems.map((subItem, index) => (
      <ListItem
        key={index}
        className={classNames(classes.listItem, {
          [classes.dBlock]: showItem(item.parent)
        })}
      >
        <NavLink
          to={subItem.path}
          className={classNames(classes.link, "default-color-hover", {
            active: location.pathname === subItem.path
          })}
        >
          <IconsSimpleLine
            name={subItem.icon}
            size="small"
            className={classNames(classes.icon, {
              active: location.pathname === subItem.path
            })}
          />
          <span className={classes.span}>{subItem.text}</span>
        </NavLink>
      </ListItem>
    ));
  });
}

export default withRouter(withStyles(styles)(SubMenuItems));
