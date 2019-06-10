export default theme => ({
  main: {
    width: "100vw",
    height: "100vh",
    overflow: "auto"
  },
  subContainer: {
    zIndex: 1
  },
  card: {
    display: "flex",
    borderRadius: "calc(.15rem - 1px)",
    boxShadow: "0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    background: "none"
  },
  logo: {
    width: "110px",
    height: "35px",
    background:
      'url("https://gogo-react.coloredstrategies.com/assets/img/logo-black.svg") no-repeat',
    backgroundPosition: "50%",
    display: "inline-block",
    marginBottom: "60px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px"
    }
  },
  cardDetails: {
    padding: "80px 40px 80px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px"
    },
    backgroundColor: "#fff"
  },
  contentSlogan: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "80px 40px 80px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "35px 30px;"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "35px 30px;"
    },
    backgroundSize: "cover"
  },
  titleSlogan: {
    marginBottom: ".5rem",
    fontFamily: "inherit",
    fontWeight: "500",
    lineHeight: "1.2",
    color: "white",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem"
    }
  },
  subtitleSlogan: {
    fontSize: ".85rem",
    lineHeight: "1.3rem",
    fontFamily: "Nunito,sans-serif",
    color: "white"
  }
});
