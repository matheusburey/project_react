import { useNavigate } from "react-router-dom";

import imageHome from "../../assets/imageHome.svg";
import Button from "../../components/atoms/Button";
import ColorText from "../../components/atoms/ColorText";

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="pt-16 flex justify-around max-w-[1100px] m-auto">
        <div className="max-w-[380px]">
          <h2 className="text-5xl leading-tight">
            Venha conhecer os planos <ColorText>FaleMais</ColorText>
          </h2>
          <p className="py-5 text-sm">
            conecte-se sem preocupações, sem burocracia, com total
            transparência, além de contar com um time pronto pra te ajudar nos
            momentos mais importantes.
          </p>
          <div>
            <Button callback={() => navigate("planos")}>Simular Uso</Button>
            <Button isBlack callback={() => navigate("planos")}>
              Contratar
            </Button>
          </div>
        </div>
        <img
          src={imageHome}
          width="350"
          height="360"
          alt="pessoa com celular"
        />
      </div>
    </main>
  );
}

export default Home;
