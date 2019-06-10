import React from "react";

import TopPages from "components/UI/TopPage";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function ListSales(props) {
  const { classes } = props;

  return (
    <div>
      <TopPages>Lista de Vendas</TopPages>
      
    </div>
  );
}

export default withStyles(styles)(ListSales);
