import React, { Suspense, lazy } from "react";
import { Switch, withRouter, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import PrivateRoute from "./PrivateRouter";

const Perfil = lazy(() => import("pages/Profile"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Products = lazy(() => import("pages/Products"));
const ListSales = lazy(() => import("pages/Sales/ListSales"));
const Resale = lazy(() => import("pages/Resale"));

function Router() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <PrivateRoute path="/dashboard/charts" component={Dashboard} />
        <PrivateRoute path="/produtos/lista" component={Products} />
        <PrivateRoute path="/vendas/lista" component={ListSales} />
        <PrivateRoute path="/perfil" component={Perfil} />
        <PrivateRoute path="/relacionamento/recuperacao-vendas" component={Resale} />
        <Redirect to="/dashboard/charts" />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Router);
