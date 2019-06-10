import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core/styles";

// Classes Dinâmicas
import classnames from "classnames";

// Estilo do componente
const styles = () => ({
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

class IconsMind extends Component {
  render() {
    const { name, classes, size } = this.props;

    return (
      <i
        className={classnames(`iconsmind-${name}`, {
          // Adiciona as classes de acordo com o tamanho informado
          [classes.medium]: size == "medium",
          [classes.large]: size == "large",
          [classes.extraLarge]: size == "extraLarge"
        })}
      />
    );
  }
}

export default withStyles(styles)(IconsMind);
