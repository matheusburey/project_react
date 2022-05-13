import logo from "../../../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} height="50" width="50" alt="logo" />
      <h1 className="text-3xl px-3">Telzir</h1>
    </div>
  );
}

export default Logo;
