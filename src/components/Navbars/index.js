import React, { useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import InputBase from "@material-ui/core/InputBase";

const menuItems = [
  {
    text: "Perfil",
    path: "/perfil"
  },
  {
    text: "Minha conta",
    path: "/my-account"
  },
  {
    text: "Sair",
    path: "/logout"
  }
];

import { Store } from "store";
import styles from "./styles";
import IconMenuSVG from "../UI/Icons/IconMenuSVG";
import IconsSimpleLine from "../UI/Icons/SimpleLine";
import NavMenuList from "./NavMenuList";

function Navbar(props) {
  const { classes } = props;
  const { state, dispatch } = useContext(Store);
  const [menu, setMenu] = useState({ open: false, anchorEl: null });

  const menuToggle = event => {
    setMenu({ open: !menu.open, anchorEl: event.currentTarget });
  };

  const menuClose = () => {
    setMenu({ open: false });
  };

  const stateSidebar = e => {
    e.stopPropagation();

    let { sidebar } = state;
    let countClickMenu = sidebar.countClickMenu;

    countClickMenu++;

    switch (countClickMenu % 4) {
      case 0:
        countClickMenu = 0;
        dispatch({ type: "OPEN_MENU", open: false, countClickMenu });
        dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu });
        break;
      case 1:
        dispatch({ type: "OPEN_MENU", open: true, countClickMenu });
        dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu });
        break;
      case 2:
        dispatch({ type: "OPEN_MENU", open: true, countClickMenu });
        dispatch({ type: "OPEN_SUBMENU", open: true, countClickMenu });
        break;
      case 3:
        dispatch({ type: "OPEN_MENU", open: true, countClickMenu });
        dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu });
        break;
      default:
        dispatch({ type: "OPEN_MENU", open: true, countClickMenu });
        dispatch({ type: "OPEN_SUBMENU", open: false, countClickMenu });
        break;
    }
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.menuIcon}>
          <IconMenuSVG onClick={stateSidebar} />
        </div>
        {/* Input de pesquisa */}
        
        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <IconButton>
              <IconsSimpleLine name="magnifier" size="small" />
            </IconButton>
          </div>
          <InputBase
            placeholder="Pesquisar..."
            classes={{ input: classes.inputSearch }}
          />
        </div> */}

        <div className={classes.containerButton}>
          <IconButton className={classes.button}>
            <IconsSimpleLine name="grid" size="small" />
          </IconButton>
          <IconButton className={classes.button}>
            <IconsSimpleLine name="bell" size="small" />
          </IconButton>
        </div>
        <div className={classes.avatar}>
          <IconButton className={classes.button} onClick={menuToggle}>
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          </IconButton>
        </div>
        <Menu
          id="fade-menu"
          anchorEl={menu.anchorEl}
          open={menu.open}
          onClose={menuClose}
          TransitionComponent={Fade}
          className={classes.menu}
        >
          <NavMenuList
            onClick={menuClose}
            list={menuItems}
            className={classes.link}
          />
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
