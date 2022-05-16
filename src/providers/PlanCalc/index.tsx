import { createContext, ReactNode, useContext, useState } from "react";

import api from "../../services/api";

interface IPlaneCalcContext {
  calc: ICalc;
  calculate: (data: any) => void;
}

interface ICalc {
  value: string;
  plan: string;
  valuewithplan: string;
}

interface IChildrenProps {
  children: ReactNode;
}

const PlanCalcContext = createContext<IPlaneCalcContext>(
  {} as IPlaneCalcContext
);

export const PlanCalcUse = () => useContext(PlanCalcContext);

export function PlanCalcProvider({ children }: IChildrenProps) {
  const defaultCalc = { value: "", plan: "FaleMais", valuewithplan: "" };
  const [calc, setCalc] = useState<ICalc>(defaultCalc);

  async function calculate(data: any) {
    await api
      .post("/calculate", data)
      .then((res): void => {
        setCalc(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <PlanCalcContext.Provider value={{ calc, calculate }}>
      {children}
    </PlanCalcContext.Provider>
  );
}
