import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {Store} from 'store'

function PrivateRoute({component: Component, to, ...rest}) {
  const {state} = useContext(Store);
  const {authenticated} = state.auth;

  return (
    <Route {...rest}
       render={props => authenticated ? (
         <Component {...props} />
       ) : (
         <Redirect
           to={{
             pathname: to || "/login",
             state: {from: props.location}
           }}
         />
       )}
    />
  )
}

export default PrivateRoute;