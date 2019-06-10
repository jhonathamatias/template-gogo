export default theme => ({
    toolbar: {
        padding: 0,
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing.unit
    },
    textField: {
        flexBasis: 200,
        [theme.breakpoints.down("xs")]: {
            flexBasis: "auto"
        }
    },
    pageLimit: {
        display: "flex",
        alignItems: "flex-end",
        marginLeft: "auto",
        [theme.breakpoints.between("xs", "sm")]: {
            margin: theme.spacing.unit
        }
    },
    divider: {
        marginTop: 5,
        marginBottom: 25,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.between("xs", "sm")]: {
            marginTop: 15
        }
    },
    displayList: {
        position: "relative"
    },
    buttonExpand: {
        display: "none",
        marginBottom: 10,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    progress: {
        zIndex: theme.zIndex.drawer + 1,
        left: "50%",
        top: "10%",
        position: "absolute"
    },
    controlPagination: {
        display: "flex",
        marginTop: 50,
        justifyContent: "center"
    },
    buttonPagination: {
        marginLeft: 10
    }
});