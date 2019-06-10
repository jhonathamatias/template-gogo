import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import TopPage from "components/UI/TopPage";
import DataGrid from "components/UI/DataGrid";

function Resale(props) {
    const { classes } = props;
    return (
        <div>
            <TopPage divider>
                Recuperação de vendas
            </TopPage>
            <DataGrid />
        </div>
    );
}

export default withStyles(styles)(Resale);