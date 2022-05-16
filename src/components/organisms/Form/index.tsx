import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { PlanCalcUse } from "../../../providers/PlanCalc";
import Button from "../../atoms/Button";
import Input from "../../molecules/Input";
import Select from "../../molecules/Select";

function Form() {
  const { calculate } = PlanCalcUse();
  const optionsDDD = ["011", "016", "017", "018"];
  const optionsPlan = ["FaleMais30", "FaleMais60", "FaleMais120"];

  const schema = yup.object().shape({
    plan: yup.string().required("Valor obrigatorio!"),
    origin: yup.string().required("Valor obrigatorio!"),
    destiny: yup.string().required("Valor obrigatorio!"),
    minute: yup.string().required("Valor obrigatorio!"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(calculate)}
      className="max-w-[700px] flex justify-around flex-wrap m-auto border-black border-2 rounded-lg"
    >
      <Select
        label="Planos"
        register={register}
        name="plan"
        options={optionsPlan}
      />
      <Select
        label="Origen"
        register={register}
        name="origin"
        options={optionsDDD}
      />
      <Select
        label="Destino"
        register={register}
        name="destiny"
        options={optionsDDD}
      />
      <Input label="Minutos" register={register} type="number" name="minute" />
      <Button type="submit" isBlack>
        Simular uso
      </Button>
    </form>
  );
}

export default Form;
