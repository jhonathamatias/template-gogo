export default theme => ({
    mobile: {
        display: 'none',
        "@media (max-width: 576px)": {
            display: 'block'
        },
        transition: "max-width 0.3s ease"
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        zIndex: theme.zIndex.modal + 1,
        background: '#fff',
        color: '#8f8f8f',
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
    },
    fabButton: {
        position: 'absolute',
        zIndex: theme.zIndex.modal + 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    barButtonMobile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    icon: {
        marginRight: 10
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    listItem: {
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    arrowRight: {
        marginLeft: 'auto'
    },
    text: {
        padding: "5px 10px",
        textAlign: "center"
    },
    menuIcon: {
        marginRight: 5
    },
    titleText: {
        flexGrow: 1,
        marginRight: 50
    },
    title: {
        display: "flex",
        alignItems: "center"
    },
    subMenuListItem: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px"
    },
    divider: {
        marginLeft: "20px",
        marginRight: "20px"
    }, 
    wrapperItems: {
        paddingBottom: 100
    }
});