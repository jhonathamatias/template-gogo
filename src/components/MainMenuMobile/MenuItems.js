import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Close from '@material-ui/icons/Close';
import IconsMind from "components/UI/Icons/Mind";
import classNames from "classnames";
import styles from "./styles";
import CustomLinearProgress from "../UI/Progress/CustomLinearProgress";
import { Store } from "store";
import Divider from "@material-ui/core/Divider";

function MenuItems(props) {
    const { state } = useContext(Store);
    const { menu, fetching } = state.sidebar;
    const { classes, onClickItems, onClickClose, location } = props;

    const filterPathname = itemId => {
        let filter = new RegExp(`^\/(${itemId}|${itemId})`);
        return Boolean(filter.test(location.pathname));
    };

    return (
        <div className={classes.wrapperItems}>
            {fetching ? (<CustomLinearProgress />) : null}
            <div className={classes.title}>
                <IconButton onClick={onClickClose}>
                    <Close />
                </IconButton>
                <Typography
                    variant="button"
                    align="center"
                    className={classes.titleText}
                >
                    Menu
                </Typography>
            </div>
            <Divider />
            <List>
                {menu.items.map((item, i) => (
                    <ListItem button
                        key={i}
                        className={classNames(classes.listItem, {
                            "menu-active": filterPathname(item.id),
                            active: filterPathname(item.id)
                        })}
                        onClick={onClickItems}
                        id={item.id}
                    >
                        <IconsMind name={item.icon} size="medium" />
                        <span className={classes.text}>{item.text}</span>
                        <IconButton className={classes.expand}>
                            <ArrowRight className={classNames({
                                active: filterPathname(item.id)
                            })} />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default withRouter(withStyles(styles)(MenuItems));