import ColorText from "../../components/atoms/ColorText";
import Form from "../../components/organisms/Form";

function Planos() {
  return (
    <div>
      <h1 className="py-10 text-center text-4xl">
        Qual plano <ColorText>Falemais</ColorText> se encaixa com{" "}
        <ColorText>Você</ColorText>?
      </h1>
      <Form />
    </div>
  );
}

export default Planos;
