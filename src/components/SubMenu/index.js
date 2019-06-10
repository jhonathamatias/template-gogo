import React, { useContext, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Scrollbar from "react-perfect-scrollbar";
import classNames from "classnames";
import { Store } from "store";

import styles from "./styles";
import SubMenuItems from "./SubMenuItems";

function SubMenu(props) {
  const { state, dispatch } = useContext(Store);
  const { sidebar } = state;
  const { classes } = props;

  useEffect(() => {
    blurSubMenu();
  });

  const blurSubMenu = () => {
    window.onclick = () => {
      if (!sidebar.subMenu.open) {
        return;
      }

      dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu: 3 });
    };
  };

  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.subMenu, {
        [classes.subMenuOpen]: sidebar.subMenu.open,
        [classes.subMenuClose]: !sidebar.subMenu.open
      })}
      classes={{
        paper: classNames(classes.subMenuPaper, {
          [classes.subMenuPaperShadow]: sidebar.subMenu.open,
          [classes.subMenuOpen]: sidebar.subMenu.open,
          [classes.subMenuClose]: !sidebar.subMenu.open
        })
      }}
      open={sidebar.subMenu.open}
    >
      <Scrollbar>
        <div className={classes.subMenuHeader} />
        <SubMenuItems />
      </Scrollbar>
    </Drawer>
  );
}

export default withStyles(styles)(SubMenu);
