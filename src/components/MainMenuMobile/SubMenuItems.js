import React, { useContext } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from "@material-ui/core/Typography";
import IconsSimpleLine from "components/UI/Icons/SimpleLine";
import classNames from "classnames";
import { Store } from "store";
import styles from "./styles";

function SubMenuItems(props) {
    const { state } = useContext(Store);
    const { subMenu, menu } = state.sidebar;
    const {
        classes,
        location,
        onClickBack,
        onClickItems,
        title
    } = props;

    return (
        <div className={classes.wrapperItems}>
            <div className={classes.title}>
                <IconButton onClick={onClickBack} className="active">
                    <ArrowLeft fontSize="large" />
                </IconButton>
                <Typography
                    variant="button"
                    align="center"
                    className={classes.titleText}
                >
                    {title}
                </Typography>
            </div>
            <Divider />
            <List>
                {subMenu.items.map(item => {
                    return item.subItems.map((subItem, index) => {
                        if (menu.itemClicked !== item.parent) {
                            return null;
                        }
                        return (
                            <React.Fragment key={index}>
                                <ListItem
                                    button
                                    to={subItem.path}
                                    className={classNames(classes.subMenuListItem, "default-color-hover", {
                                        active: location.pathname === subItem.path
                                    })}
                                    component={NavLink}
                                    onClick={onClickItems}
                                >
                                    <IconsSimpleLine
                                        name={subItem.icon}
                                        size="small"
                                        className={classNames(classes.icon, {
                                            active: location.pathname === subItem.path
                                        })}
                                    />
                                    <span className={classes.span}>{subItem.text}</span>
                                </ListItem>
                                <Divider className={classes.divider} />
                            </React.Fragment>
                        );
                    });
                })}
            </List>
        </div>
    );
}

export default withRouter(withStyles(styles)(SubMenuItems))