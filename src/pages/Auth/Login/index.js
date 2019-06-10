import React, { useState, useContext } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withRouter, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { doLogin } from "pages/Auth/Authentication";
import Grid from "@material-ui/core/Grid";
import { Store } from "store";
import Divider from "@material-ui/core/Divider";
import styles from "./styles";
import Swal from "sweetalert2";
import Fab from "@material-ui/core/Fab";


const ForgetPassword = props => <Link to="/forget" {...props} />;

function Login(props) {

  const { classes } = props;
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Store);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    try {

      // doLogin(user)
      //   .then(response => {
      //     localStorage.setItem("access_token", response.data.access_token);
      dispatch({ type: "LOGIN" });
      // })
      // .catch(e => {
      //   throw e;
      // });


    } catch (err) {

      Swal.fire({
        title: "Ops!",
        text: err,
        confirmButtonText: "OK"
      }).then(() => setLoading(false));

    }

  };

  return (
    <div>
      <Typography component="h3" variant="h6" className={classes.loginTitle}>
        Login
      </Typography>

      <ValidatorForm
        onSubmit={handleSubmit}
      >
        <TextValidator
          autoFocus
          fullWidth
          label="E-mail"
          name="email"
          type="email"
          value={user.email}
          validators={["required"]}
          errorMessages={["Informe o e-mail"]}
          onChange={handleInputChange}
        />
        <Divider variant="middle" className={classes.divider} />
        <TextValidator
          fullWidth
          onChange={handleInputChange}
          label="Senha"
          name="password"
          type="password"
          autoComplete="current-password"
          value={user.password}
          validators={["required"]}
          errorMessages={["Informe a senha"]}
        />

        <div className={classes.containerButtons}>
          <Grid item sm={12}>
            <Typography
              className={classes.buttonForget}
              component={ForgetPassword}
              variant="button"
            >
              Esqueceu a senha?
          </Typography>
          </Grid>
          <Grid item sm={12}>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="Add"
              className={classes.buttonLogin}
              type="submit"
              disabled={loading}
            >
              <span>Login</span>
              {loading ? (
                <CircularProgress size={24} className={classes.buttonProgress} />
              ) : (
                  null
                )}
            </Fab>
          </Grid>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default withRouter(withStyles(styles, { withTheme: true })(Login));
