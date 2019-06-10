import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";

const styles = () => ({
  small: {
    fontSize: 17
  },
  medium: {
    fontSize: 32
  },

  large: {
    fontSize: 62
  },

  extraLarge: {
    fontSize: 100
  }
});

class IconsSimpleLine extends Component {
  render() {
    const { name, classes, size, className } = this.props;

    return (
      <i
        className={classnames(`simple-icon-${name}`, className, {
          [classes.small]: size == "small",
          [classes.medium]: size == "medium",
          [classes.large]: size == "large",
          [classes.extraLarge]: size == "extraLarge"
        })}
      />
    );
  }
}

export default withStyles(styles)(IconsSimpleLine);
