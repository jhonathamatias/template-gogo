export default theme => {
    console.log(theme)
    return {
        imageList: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper
        },
        card: {
            minHeight: 300,
            boxShadow: theme.shadows[2],
            borderRadius: "none"
        },
        cardPaper: {
            borderRadius: "none !important"
        },
        cardContentMedia: {
            height: 250
        },
        media: {
            objectFit: 'fill',
            width: "100%",
            height: "100%"
        },
        cardContent: {
            display: "flex",
            alignItems: "center"
        }, 
        cardChecked: {
            boxShadow: theme.shadows[8]
        }, 
        preco: {
            color: "#7cb342"
        }
    }
};