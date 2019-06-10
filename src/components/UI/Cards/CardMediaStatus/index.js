import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function CardMediaStatus(props) {
  const {
    classes,
    text,
    description,
    subDescription,
    titleImage,
    image,
    status
  } = props;

  return (
    <div className={classes.card}>
      <Badge
        badgeContent={status}
        color="primary"
        classes={{ badge: classes.badge }}
      >
        <CardMedia className={classes.cover} image={image} title={titleImage} />
      </Badge>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6" gutterBottom color="textSecondary">
            {text ? text : null}
          </Typography>
          <Typography noWrap gutterBottom color="textSecondary">
            {description ? description : null}
          </Typography>
          <Typography
            variant="caption"
            className="default-color"
            gutterBottom
          >
            {subDescription ? subDescription : null}
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(CardMediaStatus);
