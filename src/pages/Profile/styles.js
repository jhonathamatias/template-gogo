export default theme => ({
  profile: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }, 
    width: "100%"
  },
  card: {
    maxWidth: 300,
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    }
  },
  cardHeader: {
    height: 90,
    backgroundColor: "#ccc",
    backgroundImage: "url(https://www.bates.edu/wordpress/files/2016/07/pattern1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    opacity: 0.7,
  },
  cardContentProfile: {
    margin: "-70px auto auto",
    width: 270
  },
  avatar: {
    width: 100,
    height: 100,
    margin: "auto"
  },
  paper: {
    boxShadow: "none",
    borderRadius: "initial"
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});