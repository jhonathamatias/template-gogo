import React from "react";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

function Transition(props) {
    return <Slide {...props} />
}

function MenuModal(props) {
    const { open, children, transition, ...rest } = props;

    return (
        <Dialog
            {...rest}
            fullScreen
            open={open}
            TransitionComponent={Transition}
            TransitionProps={{ direction: transition }}
        >
            {children}
        </Dialog>
    );
}

export default MenuModal;