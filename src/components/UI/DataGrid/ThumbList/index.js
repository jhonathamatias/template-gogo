import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import styles from "./styles";

function ThumbList(props) {
    const { classes, data, theme, columns } = props;
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
    };

    const renderCardMedia = item => {
        let image = columns.filter(prop => prop["renderImage"]);
        let [props] = image;

        if (!image.length) {
            throw "ThumbList: Não foi encontrado a propriedade `renderImage` em `columns`";
        }

        return <CardMedia
            image={item[props.data]}
            className={classes.media}
            width="113"
            component="img"
        />
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
                                <div>
                                    {renderCardMedia(item)}
                                </div>
                                <CardContent className={classes.cardContent}>
                                    <Grid container justify="space-between" alignItems="center" spacing={16}>
                                        {columns.map((prop, i) => {
                                            let { grid } = prop;
                                            let gridSystem = { xs: 12, sm: 4, md: 4, lg: 4 };

                                            if (prop.renderImage) {
                                                return null;
                                            }

                                            if (grid) {
                                                gridSystem = grid.thumbList || gridSystem;
                                            }

                                            if (!prop.render) {
                                                return <Grid item key={i} {...gridSystem}>
                                                    {item[prop.data]}
                                                </Grid>;
                                            }

                                            if (prop.thumbListRender){
                                                return prop.thumbListRender({
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

ThumbList.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(ThumbList);