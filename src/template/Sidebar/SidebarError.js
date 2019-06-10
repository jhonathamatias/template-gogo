import React, { useContext, useState, useEffect } from "react";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Slide from "@material-ui/core/Slide";
import Icon from "@material-ui/core/Icon";

import WifiOff from "@material-ui/icons/WifiOff";
import { Store } from "store";
import styles from "./styles";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function SidebarError(props) {
  const { state } = useContext(Store);
  const [open, setOpen] = useState(false);
  const { fetching, error } = state.sidebar;
  const { classes, tryAgain } = props;
  const message = "Certifique-se que você esta conectado à internet.";

  useEffect(() => {
    setOpen(error.failed);
  }, [error.failed]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        id="alert-dialog-slide-title"
        className={classes.dialogTitle}
      >
        <Icon color="disabled" className={classes.errorIcon}>
          <WifiOff />
        </Icon>
        <span className={classes.title}>Problema com a conexão...</span>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText
          id="alert-dialog-slide-description"
          className={classes.textDanger}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={handleClose}
          color="default"
          size="small"
        >
          Fechar
        </Button>
        <Button
          variant="contained"
          onClick={tryAgain}
          disabled={fetching}
          color="primary"
          size="small"
        >
          Tentar novamente?
          {fetching && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(SidebarError);
