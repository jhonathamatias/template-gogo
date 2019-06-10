import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const styles = theme => ({
  svg: {
    height: 12,
    "&not:(:root)": {
      overflow: "hidden"
    },
    fill: "#212121",
    trasition: "fill .3s"
  },
  menuButton: {
    color: "#8f8f8f",
    width: 100,
    textAlign: "center",
    paddingRight: 15
  },
  sub: {
    fill: "#212121",
    trasition: "fill .3s"
  }
});

function IconMenuSVG(props) {
  const { classes, ...other } = props;

  return (
    <NavLink to="#" className={classes.menuButton} {...other}>
      <svg
        className={classes.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 17"
      >
        <rect x="0.48" y="0.5" width="7" height="1" />
        <rect x="0.48" y="7.5" width="7" height="1" />
        <rect x="0.48" y="15.5" width="7" height="1" />
      </svg>
      <svg
        className={classnames(classes.sub, classes.svg)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 17"
      >
        <rect x="1.56" y="0.5" width="16" height="1" />
        <rect x="1.56" y="7.5" width="16" height="1" />
        <rect x="1.56" y="15.5" width="16" height="1" />
      </svg>
    </NavLink>
  );
}

export default withStyles(styles)(IconMenuSVG);
