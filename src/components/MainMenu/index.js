import React, { useContext, useEffect } from "react";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Scrollbar from "react-perfect-scrollbar";
import { Store } from "store";
import MainMenuItems from "./MainMenuItems";
import styles from "./styles";
import CustomLinearProgress from "../UI/Progress/CustomLinearProgress";
import MediaScreen from "tools/MediaScreen";

function MainMenu(props) {
  const { state, dispatch } = useContext(Store);
  const { menu, subMenu, fetching } = state.sidebar;

  useEffect(() => {
    MediaScreen("(max-width: 576px)", {
      callback: () => {
        dispatch({ type: "OPEN_MENU", open: false, countClickMenu: 4 });
        dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu: 4 });
      },
      rollback: () => {
        dispatch({ type: "OPEN_MENU", open: true, countClickMenu: 1 });
        dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu: 1 });
      }
    })
  }, []);

  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.mainMenu, {
        [classes.mainMenuOpen]: menu.open,
        [classes.mainMenuClose]: !menu.open
      })}
      classes={{
        paper: classNames(classes.mainMenuPaper, {
          [classes.mainMenuPaperShadow]: !subMenu.open,
          [classes.mainMenuOpen]: menu.open,
          [classes.mainMenuClose]: !menu.open
        })
      }}
      open={menu.open}
    >
      <Scrollbar>
        <div className={classes.mainMenuHeader} />

        {fetching ? (<CustomLinearProgress />) : null}
        
        <List>
          <MainMenuItems />
        </List>
      </Scrollbar>
    </Drawer>
  );
}

export default withStyles(styles)(MainMenu);
