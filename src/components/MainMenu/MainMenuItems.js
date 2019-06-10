import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { Store } from "store";
import IconsMind from "components/UI/Icons/Mind";
import styles from "./styles";

function MainMenuItems(props) {
  const { state, dispatch } = useContext(Store);
  const { menu, subMenu } = state.sidebar;
  const { classes, location } = props;

  const handleClick = e => {
    e.stopPropagation();

    dispatch({ type: "ITEM_CLICKED_MENU", itemClicked: e.currentTarget.id });

    if (subMenu.open) {
      return;
    }

    dispatch({ type: "OPEN_SUBMENU", open: true, countClickMenu: 2 });
  };

  const filterPathname = itemId => {
    let filter = new RegExp(`^\/(${itemId}|${itemId})`);
    return Boolean(filter.test(location.pathname));
  };

  return menu.items.map((item, i) => (
    <ListItem
      button
      key={i}
      className={classNames(classes.listItem, {
        "menu-active": filterPathname(item.id),
        active: filterPathname(item.id)
      })}
      onClick={handleClick}
      component={NavLink}
      to={item.path}
      id={item.id}
    >
      <IconsMind name={item.icon} size="medium" />
      <span className={classes.text}>{item.text}</span>
    </ListItem>
  ));
}

export default withRouter(withStyles(styles)(MainMenuItems));
