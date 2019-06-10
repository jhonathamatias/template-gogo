import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import classnames from "classnames";
import styles from "./styles";

import "assets/css/paralaxPureCssPixels.css";

const Login = lazy(() => import("./Login"));
const Forget = lazy(() => import("./Forget"));

function Auth(props) {
  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      id="container-auth"
      className={classnames(classes.main, classes.backgroundImageMain)}
    >
      <div id="stars"></div>


      <Grid item xs={12} sm={12} md={9} className={classes.subContainer}>
        <Card className={classes.card}>
          <Grid item className={classes.contentSlogan} xs={12} sm={12} md={6}>
            <Typography
              component="title"
              variant="title"
              className={classes.titleSlogan}
            >
              MAGIC IS IN THE DETAILS
            </Typography>

            <Typography component="title" className={classes.subtitleSlogan}>
              Please use your e-mail to reset your password.
              <br />
              If you are not a member, please register.
            </Typography>
          </Grid>
          <Grid item className={classes.cardDetails} xs={12} sm={12} md={8}>
            <CardContent>
              <span className={classes.logo} />
              <Suspense fallback={<CircularProgress />}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => <Login {...props} />}
                  />
                  <Route
                    
                    path="/login"
                    render={props => <Login {...props} />}
                  />
                  <Route
                    path="/forget"
                    render={props => <Forget {...props} />}
                  />
                  <Redirect to="/" />
                </Switch>
              </Suspense>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(Auth);
