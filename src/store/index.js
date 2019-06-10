import React, { useReducer, createContext } from "react";
import AppReducers from "./AppReducers";
import INITIAL_STATE from "./InitialStatesStore";

export const Store = createContext();

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(AppReducers, INITIAL_STATE);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
