export default theme => ({
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1.5rem',
        lineHeight: '2.5rem',
    },
    buttonCancel: {
        textDecoration: 'none',
        textTransform: 'none',
        '&:hover': {
            color: "#3f51b5",
        },
        backgroundColor: 'transparent',
        transition: 'color .2s'
    },
    buttonSend: {
        lineHeight: '1.5',
        fontWeight: '700',
        letterSpacing: '.05rem',
        padding: '.75rem 2.6rem .6rem !important',
        fontSize: '.8rem',
    },
    forgetTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.0rem',
        },
        fontSize: '1.1rem',
        marginBottom: 15
    },
    buttonProgress: {
        color: '#6798e5',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});
