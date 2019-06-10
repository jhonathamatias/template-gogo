const mediaMobile =  "@media (max-width: 576px)";
export default theme => ({
  appBar: {
    display: "flex",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)",
    background: "#fff",
    color: "#8f8f8f"
  },
  toolbar: {
    paddingLeft: 0,
    justifyContent: "center"
  },
  menuIcon: {
    [mediaMobile]: {
      display: "none"
    },
    marginLeft: 40,
    marginRight: 40,
  },
  search: {
    position: "relative",
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
    width: 230,
    height: 41,
    [mediaMobile]: {
      display: "none"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: "3px"
  },
  inputSearch: {
    backgroundColor: "transparent",
    color: "#212121",
    padding: ".5rem 1rem",
    lineHeight: 1.9,
    fontSize: ".8rem",
    transition: theme.transitions.create("width")
  },
  containerButton: {
    marginLeft: "auto",
    [mediaMobile]: {
      display: "none"
    },
  },
  button: {
    marginLeft: 20
  },
  menu: {
    top: 40
  },
  menuPopover: {
    overflow: "hidden"
  },
  link: {
    textDecoration: "none",
    width: "100%",
    fontSize: "0.8rem"
  },
  listItem: {
    padding: 0
  }
});
