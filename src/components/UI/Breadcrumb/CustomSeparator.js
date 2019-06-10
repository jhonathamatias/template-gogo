import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import styles from "./styles";

function CustomSeparator(props) {
  const [pathname, setPathname] = useState([]);
  const { classes, location } = props;

  useEffect(() => {
    splitPathname();
  }, []);

  const splitPathname = () => {
    let pathnames = location.pathname.split("/");
    pathnames = pathnames.filter(value => value !== "");
    setPathname(pathnames);
  };

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" arial-label="Breadcrumb">
        {pathname.map((path, i) => {
          i++;
          if (pathname.length === i) {
            return (
              <Typography color="textPrimary" key={i}>
                {path}
              </Typography>
            );
          }
          return (
            <Link color="inherit" href="#" key={path}>
              {path}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default withRouter(withStyles(styles)(CustomSeparator));
