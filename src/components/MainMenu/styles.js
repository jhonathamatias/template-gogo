const menuMainWidth = 110;
const shadow = "0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1)";

export default theme => ({
  mainMenu: {
    width: menuMainWidth,
    flexShrink: 0,
    whiteSpace: "normal"
  },
  mainMenuHeader: {
    ...theme.mixins.toolbar
  },
  mainMenuOpen: {
    width: menuMainWidth,
    left: 0,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  mainMenuClose: {
    left: -110,
    width: 0,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  mainMenuPaper: {
    borderRight: "1px solid #f3f3f3"
  },
  mainMenuPaperShadow: {
    boxShadow: shadow
  },
  listItem: {
    padding: 0,
    display: "block",
    textDecorationLine: "none !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid #f3f3f3",
    color: "#303030",
    height: 110,
    justifyContent: "center"
  },
  text: {
    padding: "5px 10px",
    textAlign: "center"
  },
  actived: {
    "&:after": {
      content: " ",
      background: "#e2863b",
      borderRadius: "10px",
      position: "absolute",
      width: "6px",
      height: "90px",
      top: 50,
      transform: "translateY(-50%)",
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      left: 0,
      zIndex: theme.zIndex.drawer + 1
    }
  }
});
