import React, { useContext, useEffect, lazy } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Store } from "store";
import styles from "./styles";
import Axios from "axios";
import SidebarError from "./SidebarError";
import config from "config";
const MainMenu = lazy(() => import("components/MainMenu"));
const SubMenu = lazy(() => import("components/SubMenu"));

function Sidebar(props) {
  const { classes } = props;
  const { state, dispatch } = useContext(Store);
  const host = config.HOST_LOCAL;
  useEffect(() => {
    loadSidebar();
  }, []);
  const loadSidebar = () => {
    dispatch({ type: "FETCHING_SIDEBAR" });

    Axios.get(`http://${host}:3001/sidebar`)
      .then(resp => {
        dispatch({
          type: "FETCH_SIDEBAR",
          menu: resp.data.menu,
          subMenu: resp.data.subMenu
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_SIDEBAR_ERROR",
          error
        });
      });
  };

  return (
    <div className={classes.sidebar}>
      <MainMenu />
      <SubMenu />
      <SidebarError tryAgain={loadSidebar} />
    </div>
  );
}

export default withStyles(styles)(Sidebar);
