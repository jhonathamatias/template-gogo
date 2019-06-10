import combineReducers from "tools/combineReducers";
import sidebarReducer from "template/Sidebar/Sidebar.reducer";
import authReducer from "pages/Auth/Auth.reducer";

export default combineReducers({ sidebarReducer, authReducer });
