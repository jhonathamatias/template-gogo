import React from "react";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import Navbar from "components/Navbars";

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.wraper}>
      <Navbar />
    </div>
  );
}

export default withStyles(styles)(Header);
