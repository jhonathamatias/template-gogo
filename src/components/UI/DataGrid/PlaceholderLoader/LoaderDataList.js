import React from 'react';
import Grid from "@material-ui/core/Grid";
import ContentLoader from "react-content-loader";

function LoaderDataList(props) {
    const { amount = 10 } = props;
    let count = [];

    for (let i = 0; i < amount; i++) {
        count[i] = i;
    }

    return <Grid container spacing={16}>
        {count.map((value) => (
            <Grid item key={value} sm={12}>
                <ContentLoader
                    height={30}
                    width={495}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="4" ry="4" width="200" height="8" /> 
                    <rect x="0" y="10" rx="4" ry="4" width="300" height="8" /> 
                    <rect x="0" y="20" rx="4" ry="4" width="445" height="8" /> 
                </ContentLoader>
            </Grid>
        ))}
    </Grid>


}

export default LoaderDataList;