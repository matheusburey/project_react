import { ReactNode } from "react";

import { PlanCalcProvider } from "./PlanCalc";

interface IChildrenProps {
  children: ReactNode;
}

function Provider({ children }: IChildrenProps) {
  return <PlanCalcProvider>{children}</PlanCalcProvider>;
}

export default Provider;
