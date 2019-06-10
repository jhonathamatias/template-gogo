import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = () => ({
    burguer: {
        cursor: "pointer"
    },
    lines: {
        width: 25,
        height: 3,
        backgroundColor: "rgb(226, 226, 226)",
        margin: 5, 
        transition: "all 0.3s ease"
    },
    toggleLine1: {
        transform: "rotate(-45deg) translate(-5px, 6px)"
    },
    toggleLine2: {
        opacity: 0
    },
    toggleLine3: {
        transform: "rotate(45deg) translate(-5px, -6px)"
    },
});


function BurguerAnimation(props) {
    const { classes, open } = props;
    return (
        <div className={classes.burguer}>
            <div className={classNames(classes.lines, classes.line1, { [classes.toggleLine1]: open })} />
            <div className={classNames(classes.lines, classes.line2, { [classes.toggleLine2]: open })} />
            <div className={classNames(classes.lines, classes.line3, { [classes.toggleLine3]: open })} />
        </div>
    );
}

export default withStyles(styles)(BurguerAnimation); 