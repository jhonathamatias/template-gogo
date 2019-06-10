import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Router from "routes/Router";
import styles from "./styles";

function Main(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <Router />
      </div>
    </main>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
