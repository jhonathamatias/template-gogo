export default theme => ({
  card: {
    display: "inline-flex",
    position: "relative",
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  badge: {
    top: "15px !important",
    right: "25px !important",
    padding: ".55em .75em .6em"
  },
  danger: { backgroundColor: "#d32f2f" },
  success: { backgroundColor: "#43a047" },
  warning: { backgroundColor: "#ef6c00" },
  info: { backgroundColor: "#2196f3" }
});
