import React, { lazy } from "react";

import "react-perfect-scrollbar/dist/css/styles.css";
import { withStyles } from "@material-ui/core/styles";

const Header = lazy(() => import("./Header"));
const Main = lazy(() => import("./Main"));
const Sidebar = lazy(() => import("./Sidebar"));
const Footer = lazy(() => import("./Footer"));

const styles = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    display: "flex",
    overflowX: "hidden"
  }
});

function Template(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Header />
      <Sidebar />
      <Main />
      <Footer/>
    </div>
  );
}

export default withStyles(styles)(Template);
