export default (state, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          countClickMenu: action.countClickMenu,
          menu: {
            ...state.sidebar.menu,
            open: action.open
          }
        }
      };
    case "OPEN_SUBMENU":
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          countClickMenu: action.countClickMenu,
          subMenu: {
            ...state.sidebar.subMenu,
            open: action.open
          }
        }
      };
    case "ITEM_CLICKED_MENU":
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          menu: {
            ...state.sidebar.menu,
            itemClicked: action.itemClicked
          }
        }
      };
    case "FETCHING_SIDEBAR":
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          fetching: true
        }
      };
    case "FETCH_SIDEBAR":
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          menu: {
            ...state.sidebar.menu,
            items: action.menu.items
          },
          subMenu: {
            ...state.sidebar.subMenu,
            items: action.subMenu.items
          },
          fetching: false,
          error: {
            ...state.sidebar.error,
            failed: false
          }
        }
      };
    case "FETCH_SIDEBAR_ERROR": {
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          fetching: false,
          error: {
            ...state.sidebar.error,
            message: action.error,
            failed: true
          }
        }
      };
    }
    default:
      return state;
  }
};
