import { PlanCalcUse } from "../../../providers/PlanCalc";
import ColorText from "../../atoms/ColorText";

function Result() {
  const {calc: { value, plan, valuewithplan }} = PlanCalcUse();

  const formatBrazilianCurrency = (value: string) => {
    return Number(value).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="py-6 w-2/5 min-w-[340px] bg-neutral-100 border-2 border-black rounded-lg mx-auto mt-10 flex flex-wrap justify-between text-center">
      <div className="w-1/2">
        <h3>Sem FaleMais</h3>
        {value ? formatBrazilianCurrency(value) : "-"}
      </div>
      <div className="w-1/2">
        <h3>
          Com <ColorText>{plan}</ColorText>
        </h3>
        {value ? formatBrazilianCurrency(valuewithplan) : "-"}
      </div>
    </div>
  );
}

export default Result;
