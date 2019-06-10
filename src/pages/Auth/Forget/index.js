import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab/Fab";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ApiRequest from "tools/ApiRequest";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import styles from "./styles";

const Login = props => <Link to="/login" {...props} />;

function Forget(props) {
  const { classes, theme } = props;
  const [user, setUser] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const data = { email: user.email };

    ApiRequest.post("/forget", data)
      .then(response => {
        Swal.fire({
          title: "Obrigado !",
          text:
            "Foi enviado um e-mail de recuperação para você, verifique sua caixa de entrada",
          //type: 'sucess',
          confirmButtonText: "OK"
        }).then(() => props.history.push("/"));
      })
      .catch(e => {
        Swal.fire({
          title: "Ops!",
          text: "Ocorreu um erro inesperado.",
          //type: 'error',
          confirmButtonText: "OK"
        }).then(() => setLoading(false));
      });
  };

  return (
    <div>
      <Typography component="h1" variant="h6" className={classes.forgetTitle}>
        Esqueceu a senha ?
      </Typography>

      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          fullWidth
          autoFocus
          label="E-mail"
          name="email"
          type="email"
          value={user.email}
          validators={["required", "isEmail"]}
          errorMessages={["Informe o e-mail", "E-mail inválido"]}
          onChange={handleInputChange}
        />

        <div className={classes.containerButtons}>
          <Typography
            component={Login}
            variant="button"
            className={classes.buttonCancel}
          >
            Cancelar
          </Typography>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Add"
            className={classes.buttonSend}
            type="submit"
            disabled={loading}
          >
            <span>Enviar</span>
            {loading ? (
              <CircularProgress size={24} className={classes.buttonProgress} />
            ) : (
                null
              )}
          </Fab>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default withRouter(withStyles(styles, { withTheme: true })(Forget));
