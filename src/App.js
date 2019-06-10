import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CustomLinearProgress from "components/UI/Progress/CustomLinearProgress";
import { Store } from "store";

import "assets/fonts/iconsmind/style.css";
import "assets/fonts/simple-line-icons/css/simple-line-icons.css";
import "assets/css/style.css";

const Template = lazy(() => import("template"));
const Auth = lazy(() => import("pages/Auth"));

export default function App() {
  const { state } = useContext(Store);
  const { authenticated } = state.auth;

  return (
      <BrowserRouter>
        <Suspense fallback={<CustomLinearProgress />}>
          <Route path="/" render={props => (
              authenticated ? (
              <Template {...props} />
            ) : (
              <Auth {...props} />
            )
          )} />
        </Suspense>
      </BrowserRouter>
  );
}
