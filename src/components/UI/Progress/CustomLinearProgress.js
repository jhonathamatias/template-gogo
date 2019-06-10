import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

function CustomLinearProgress(props) {
  return (
    <LinearProgress
      classes={{
        barColorPrimary: "default-background-theme"
      }}
      {...props}
    />
  );
}

export default CustomLinearProgress;
