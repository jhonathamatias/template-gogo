import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CustomSeparator from "../Breadcrumb/CustomSeparator";

const styles = theme => ({
  wrapper: {
    marginBottom: 20
  },
  typography: {
    fontSize: 26,
    marginBottom: 10
  },
  divider: {
    height: 2
  }
});

function TopPage(props) {
  const { classes, children, divider = false } = props;

  return (
    <div className={classes.wrapper}>
      <Typography
        variant="display1"
        gutterBottom
        className={classes.typography}
      >
        {children}
      </Typography>
      <CustomSeparator />
      {divider ? <Divider /> : null }
    </div>
  );
}

export default withStyles(styles)(TopPage);
