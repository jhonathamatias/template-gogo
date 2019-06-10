import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import IconsSimpleLine from "components/UI/Icons/SimpleLine";
import styles from "./styles";
import MenuModal from "./MenuModal";
import MenuItems from "./MenuItems";
import SubMenuItems from "./SubMenuItems";
import BurguerAnimation from "components/UI/Icons/BurguerAnimation";
import { Store } from "store";

function MainMenuMobile(props) {
    const { state, dispatch } = useContext(Store)
    const [openModal, setOpenModal] = useState({
        menu: false,
        subMenu: false,
        textCurrentItem: null
    });

    const { classes } = props;

    const toggleModal = () => {
        setOpenModal({
            ...openModal,
            menu: !openModal.menu,
            subMenu: false,
        });
    };

    const handleClickMenuItem = (e) => {
        let target = e.currentTarget;

        dispatch({
            type: "ITEM_CLICKED_MENU",
            itemClicked: target.id
        });

        setOpenModal({
            ...openModal,
            textCurrentItem: target.innerText,
            subMenu: true
        })
    }
    return (
        <div className={classes.mobile}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Fab aria-label="Add"
                        className={[classes.fabButton, "default-background-theme"].join(" ")}
                        onClick={toggleModal}
                    >
                        <BurguerAnimation open={openModal.menu} />
                    </Fab>
                    <BottomNavigation className={classes.barButtonMobile}>
                        <BottomNavigationAction label="Recents" value="recents" icon={<IconsSimpleLine name="bell" size="small" />} />
                        <BottomNavigationAction label="Favorites" value="favorites" icon={<IconsSimpleLine name="bag" size="small" />} />
                    </BottomNavigation>
                </Toolbar>
            </AppBar>

            <MenuModal open={openModal.menu} transition="up">
                <MenuItems
                    onClickItems={(e) => handleClickMenuItem(e)}
                    onClickClose={() => setOpenModal({
                        ...openModal,
                        menu: false
                    })}
                />
            </MenuModal>
            <MenuModal open={openModal.subMenu} transition="left">
                <SubMenuItems
                    title={openModal.textCurrentItem}
                    onClickBack={() => setOpenModal({
                        ...openModal,
                        subMenu: false
                    })}
                    onClickItems={() => setOpenModal({
                        ...openModal,
                        menu: false,
                        subMenu: false
                    })}
                />
            </MenuModal>
        </div>
    );
}

export default withStyles(styles)(MainMenuMobile);
