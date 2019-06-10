import React from 'react';
import Grid from "@material-ui/core/Grid";
import ContentLoader from "react-content-loader";

function LoaderImageList(props) {
    const { amount = 10 } = props;
    let count = [];

    for (let i = 0; i < amount; i++) {
        count[i] = i;
    }

    return <Grid container spacing={16}>
        {count.map((value) => (
            <Grid item key={value} sm={3}>
                <ContentLoader
                    height={350}
                    width={300}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="5" ry="5" width="304" height="208" />
                    <rect x="0" y="225" rx="4" ry="4" width="50" height="13" />
                    <rect x="0" y="250" rx="4" ry="4" width="150" height="13" />
                    <rect x="0" y="275" rx="4" ry="4" width="250" height="13" />
                </ContentLoader>
            </Grid>
        ))}
    </Grid>


}

export default LoaderImageList;