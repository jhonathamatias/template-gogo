export default theme => ({
    mobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    paper: {
        overflowY: 'initial !important',
        maxHeight: 350
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
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
    lists: {
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 7,
        textDecoration: 'none',
        color: '#8f8f8f',
        display: 'flex',
    },
    icon: {
        marginRight: 10
    },
    text: {
        fontFamily: "Nunito, sans-serif !important"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expanded: {
        transform: 'rotate(180deg)',
    },
    active: {
        color: '#e2863b !important'
    }
})