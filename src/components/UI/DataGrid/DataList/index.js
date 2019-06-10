import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import styles from "./styles";

function DataList(props) {
    const { classes, data, columns, theme } = props;
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
    };
    
    return (
        <div>
            <Grid container spacing={16}>
                {data.map((item, i) => (
                    <Zoom
                        key={i}
                        in={true}
                        timeout={transitionDuration}
                        unmountOnExit
                        style={{
                            transitionDelay: `${i}00ms`
                        }}
                    >
                        <Grid item sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Grid container item justify="space-between" alignItems="center" spacing={16}>
                                        {columns.map((prop, i) => {
                                            let { grid } = prop;
                                            let gridSystem = { xs: 12, sm: 4, md: 4, lg: 4 };

                                            if (prop.renderImage) {
                                                return null;
                                            }

                                            if (grid) {
                                                gridSystem = grid.dataList || gridSystem;
                                            }

                                            if (!prop.render) {
                                                return <Grid item key={i} {...gridSystem}>
                                                    {item[prop.data]}
                                                </Grid>;
                                            }
                                            
                                            if (prop.dataListRender){
                                                return prop.dataListRender({
                                                    data: item[prop.data],
                                                    key: i
                                                });
                                            }

                                            return prop.render({
                                                data: item[prop.data],
                                                key: i
                                            });
                                        })}
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Zoom>
                ))}
            </Grid>
        </div>
    );
}

DataList.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(DataList);