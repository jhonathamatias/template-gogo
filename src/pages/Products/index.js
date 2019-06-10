import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TopPage from "components/UI/TopPage";
import DataGrid from "components/UI/DataGrid";

const styles = theme => ({});

function Paragrafy(props, gridProps, typographyProps) {
  const { data, key } = props;

  return <Grid item {...gridProps} key={key}>
    <Typography {...typographyProps}>
      {data}
    </Typography>
  </Grid>
}

function Products(props) {
  const { classes } = props;

  return (
    <Fragment>
      <TopPage divider>Lista de Produtos</TopPage>
      <DataGrid
        defaultDisplayMode="ThumbList"
        ajax={{ url: "http://localhost:3001/produtos" }}
        order={[{ label: "Produto", value: "name" }]}
        columns={[
          { data: "image", renderImage: true },
          {
            data: "name"
          },
          {
            data: "description"
          }
        ]}
      />
    </Fragment>
  );
}

Products.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Products);
