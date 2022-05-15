import InputRadio from "../../atoms/InputRadio";

function PlanOptions() {
  return (
    <div className="flex justify-around">
      <InputRadio text="FaleMais30" id="30" />
      <InputRadio text="FaleMais60" id="60" />
      <InputRadio text="FaleMais120" id="120" />
    </div>
  );
}

export default PlanOptions;
