import { FormEvent } from "react";

import Button from "../../atoms/Button";
import Select from "../../atoms/Select";
import Label from "../../molecules/Label";
import PlanOptions from "../../molecules/PlanOptions";

function Form() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[700px] m-auto border-black border-2 rounded-lg"
    >
      <PlanOptions />
      <div className="flex justify-around items-center mt-4">
        <Label text="origen">
          <Select />
        </Label>
        <Label text="Destino">
          <Select />
        </Label>
        <Label text="minutos">
          <input
            type="number"
            className="w-32 h-11 bg-neutral-100 border-black border-2 rounded-lg text-center cursor-pointer hover:border-orange-600 focus:border-orange-600-500 focus:outline-none"
          />
        </Label>
        <Button type="submit">Simular uso</Button>
      </div>
    </form>
  );
}

export default Form;
