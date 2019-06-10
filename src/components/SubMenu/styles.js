const subMenuWidth = 220;
const shadow = "0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1)";
const left = 110;

export default theme => ({
  subMenu: {
    position: "fixed",
    left,
    zIndex: theme.zIndex.drawer - 1,
    width: subMenuWidth
  },
  subMenuHeader: {
    marginTop: 20,
    ...theme.mixins.toolbar
  },
  subMenuOpen: {
    left,
    transition: theme.transitions.create("left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex
    })
  },
  subMenuClose: {
    left: -220,
    transition: theme.transitions.create("left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex
    })
  },
  subMenuPaper: {
    width: subMenuWidth
  },
  subMenuPaperShadow: {
    boxShadow: shadow
  },
  link: {
    textDecorationLine: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    color: "#303030",
    padding: "8px 0"
  },
  listItem: {
    marginBottom: 10,
    paddingLeft: 30,
    padding: 0,
    display: "none"
  },
  dBlock: {
    display: "block"
  },
  icon: {
    marginRight: 10,
    color: "#8f8f8f",
    verticalAlign: "middle"
  },
  span: {
    verticalAlign: "middle",
    paddingTop: 3
  }
});
