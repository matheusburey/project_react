import ColorText from "../../components/atoms/ColorText";
import Form from "../../components/organisms/Form";
import Result from "../../components/organisms/Result";

function Planos() {
  return (
    <div className="p-2">
      <h1 className="py-10 text-center text-4xl">
        Qual plano <ColorText>Falemais</ColorText> se encaixa com{" "}
        <ColorText>Você</ColorText>?
      </h1>
      <Form />
      <Result />
    </div>
  );
}

export default Planos;
