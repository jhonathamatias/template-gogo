import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import styles from "./styles";
import TopPage from "components/UI/TopPage";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


function Perfil(props) {
  const { classes } = props;

  return (
    <div className={classes.profile}>
      <Card className={classes.card} classes={{ root: classes.paper }}>
        <CardHeader className={classes.cardHeader} />
        <CardContent className={classes.cardContentProfile}>
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.avatar} />
          <Typography variant="h5" gutterBottom align="center">
            Pedro Silva
            </Typography>
          <Typography variant="body2" gutterBottom align="center" color="textSecondary">
            pedrosilva@gmail.com
            </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Perfil);
