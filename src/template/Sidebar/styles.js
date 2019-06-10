export default theme => {
  return {
    sidebar: {
      top: 0,
      bottom: 0,
      height: "calc(100% - 120px)",
      zIndex: theme.zIndex.drawer
    },
    buttonProgress: {
      color: "#1976d2",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    },
    dialogContent: {
      paddingTop: 24,
      verticalAlign: "middle"
    },
    dialogTitle: {
      display: "flex",
      paddingBottom: 0,
      justifyContent: "center"
    },
    title: {
      position: "relative",
      bottom: 5
    },
    errorIcon: {
      marginRight: 10,
      marginTop: 10
    }
  };
};
