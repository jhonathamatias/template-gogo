import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MediaScreen from "tools/MediaScreen";
import styles from "./styles";

function Footer(props) {
    const [component, setComponent] = useState(null);
    useEffect(() => {
        MediaScreen("(max-width: 576px)", {
            callback: () => {
                if (component === null) {
                    import("components/MainMenuMobile")
                        .then(module => setComponent({ MainMenuMobile: module.default }));
                }
            }
        });
    }, []);

    return (
        <div>
            {component ? <component.MainMenuMobile /> : null}
        </div>
    )
}

export default withStyles(styles)(Footer)
