import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import styles from "./styles";

function ImageList(props) {
    const { classes, theme, data, columns } = props;
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
    };

    const renderCardMedia = item => {
        let image = columns.filter(prop => prop["renderImage"]);
        let [props] = image;

        if (!image.length) {
            throw "ImageList: Não foi encontrado a propriedade `renderImage` em `columns`";
        }

        return <CardMedia
            className={classes.media}
            component="img"
            image={item[props.data]}
        />
    };

    return (
        <div>
            <Grid container spacing={32}>
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
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className={classes.card}>
                                <div className={classes.cardContentMedia}> 
                                    {renderCardMedia(item)}
                                </div>
                                <CardContent className={classes.cardContent} >
                                    <Grid container justify="space-between" alignItems="center" spacing={16}>
                                        {columns.map((prop, i) => {
                                            let { grid } = prop;
                                            let gridSystem = { xs: 12, sm: 12, md: 6, lg: 6 };

                                            if (prop.renderImage) {
                                                return null;
                                            }

                                            if (grid) {
                                                gridSystem = grid.imageList || gridSystem;
                                            }

                                            if (!prop.render) {
                                                return <Grid item key={i} {...gridSystem}>
                                                    {item[prop.data]}
                                                </Grid>;
                                            }

                                            if (prop.imageListRender){
                                                return prop.imageListRender({
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

ImageList.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(ImageList);