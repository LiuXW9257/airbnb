import React, { memo } from "react";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import routes from "./router";
import { useRoutes } from "react-router-dom";

const App = memo(() => {
  const outlet = useRoutes(routes);
  return (
    <div>
      <AppHeader />
      <div className="page">{outlet}</div>
      <AppFooter />
    </div>
  );
});

export default App;
