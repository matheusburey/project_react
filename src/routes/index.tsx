import { Route, Routes as RoutesReact } from "react-router-dom";

import Home from "../pages/Home";
import Planos from "../pages/Planos";

function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />} />
      <Route path="planos" element={<Planos />} />
    </RoutesReact>
  );
}

export default Routes;
